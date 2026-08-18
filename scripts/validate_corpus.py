#!/usr/bin/env python3
"""Validate the source corpus in corpus/sources/ against the project contract.

Stdlib-only so it runs anywhere (locally, CI, hooks) with no installs.
Mirrors corpus/schema/source.schema.json and adds the integrity rules the
schema language cannot express: ISBN-13 checksums, taxonomy membership,
filename/id agreement, duplicate detection, and evidence-required-if-verified.

Exit code 0 = corpus valid, 1 = violations found, 2 = corpus unreadable.
"""

import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCES_DIR = ROOT / "corpus" / "sources"
TAXONOMY_FILE = ROOT / "corpus" / "taxonomy" / "topics.json"

SLUG_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
ISBN13_RE = re.compile(r"^97[89]\d{10}$")
DOI_RE = re.compile(r"^10\.\d{4,9}/\S+$")
URL_RE = re.compile(r"^https?://")
DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")

TYPES = {"book", "journal_article", "report", "standard", "website"}
TIERS = {"canonical", "standard", "supplementary"}
STATUSES = {"verified", "pending", "rejected"}

REQUIRED = ["id", "type", "title", "authors", "topics", "tier", "verification", "summary"]
ALLOWED = set(REQUIRED) | {
    "subtitle", "publisher", "first_published_year", "latest_edition", "identifiers",
}


def isbn13_checksum_ok(isbn: str) -> bool:
    digits = [int(c) for c in isbn]
    total = sum(d * (1 if i % 2 == 0 else 3) for i, d in enumerate(digits[:12]))
    return (10 - total % 10) % 10 == digits[12]


def validate_record(path: Path, rec: dict, topics: set) -> list:
    errs = []

    def err(msg):
        errs.append(f"{path.name}: {msg}")

    unknown = set(rec) - ALLOWED
    if unknown:
        err(f"unknown fields: {sorted(unknown)}")
    for field in REQUIRED:
        if field not in rec:
            err(f"missing required field '{field}'")
    if errs:
        return errs

    rid = rec["id"]
    if not isinstance(rid, str) or not SLUG_RE.match(rid):
        err(f"id {rid!r} is not a valid slug")
    if rid != path.stem:
        err(f"id {rid!r} does not match filename stem {path.stem!r}")

    if rec["type"] not in TYPES:
        err(f"type {rec['type']!r} not in {sorted(TYPES)}")
    if not isinstance(rec["title"], str) or not rec["title"].strip():
        err("title must be a non-empty string")
    if not isinstance(rec["authors"], list) or not rec["authors"] or not all(
        isinstance(a, str) and a.strip() for a in rec["authors"]
    ):
        err("authors must be a non-empty list of non-empty strings")

    year = rec.get("first_published_year")
    if year is not None and (not isinstance(year, int) or not 1800 <= year <= 2100):
        err(f"first_published_year {year!r} out of range")

    idents = rec.get("identifiers") or {}
    if not isinstance(idents, dict):
        err("identifiers must be an object")
        idents = {}
    if set(idents) - {"isbn_13", "doi", "url"}:
        err(f"unknown identifier keys: {sorted(set(idents) - {'isbn_13', 'doi', 'url'})}")
    isbn = idents.get("isbn_13")
    if isbn is not None:
        if not isinstance(isbn, str) or not ISBN13_RE.match(isbn):
            err(f"isbn_13 {isbn!r} must be 13 digits starting 978/979 (no hyphens)")
        elif not isbn13_checksum_ok(isbn):
            err(f"isbn_13 {isbn} fails checksum")
    doi = idents.get("doi")
    if doi is not None and (not isinstance(doi, str) or not DOI_RE.match(doi)):
        err(f"doi {doi!r} is not valid DOI syntax")
    url = idents.get("url")
    if url is not None and (not isinstance(url, str) or not URL_RE.match(url)):
        err(f"identifiers.url {url!r} must be http(s)")

    if not isinstance(rec["topics"], list) or not rec["topics"]:
        err("topics must be a non-empty list")
    else:
        for t in rec["topics"]:
            if t not in topics:
                err(f"topic {t!r} not in taxonomy")

    if rec["tier"] not in TIERS:
        err(f"tier {rec['tier']!r} not in {sorted(TIERS)}")

    ver = rec["verification"]
    if not isinstance(ver, dict):
        err("verification must be an object")
    else:
        if set(ver) - {"status", "verified_on", "method", "evidence_url", "notes"}:
            err("verification has unknown keys")
        status = ver.get("status")
        if status not in STATUSES:
            err(f"verification.status {status!r} not in {sorted(STATUSES)}")
        von = ver.get("verified_on")
        if von is not None and (not isinstance(von, str) or not DATE_RE.match(von)):
            err(f"verification.verified_on {von!r} is not YYYY-MM-DD")
        ev = ver.get("evidence_url")
        if ev is not None and (not isinstance(ev, str) or not URL_RE.match(ev)):
            err(f"verification.evidence_url {ev!r} must be http(s)")
        if status == "verified":
            for k in ("verified_on", "method", "evidence_url"):
                if not ver.get(k):
                    err(f"status 'verified' requires verification.{k}")

    summary = rec["summary"]
    if not isinstance(summary, str) or len(summary.strip()) < 20:
        err("summary must be a string of at least 20 characters")

    return errs


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--summary", action="store_true", help="print corpus statistics")
    args = ap.parse_args()

    try:
        taxonomy = set(json.loads(TAXONOMY_FILE.read_text())["topics"])
    except (OSError, ValueError, KeyError) as e:
        print(f"cannot read taxonomy {TAXONOMY_FILE}: {e}", file=sys.stderr)
        return 2

    paths = sorted(SOURCES_DIR.glob("*.json"))
    if not paths:
        print(f"no source records found in {SOURCES_DIR}", file=sys.stderr)
        return 2

    errors = []
    records = []
    seen_ids = {}
    for path in paths:
        try:
            rec = json.loads(path.read_text())
        except ValueError as e:
            errors.append(f"{path.name}: invalid JSON ({e})")
            continue
        if not isinstance(rec, dict):
            errors.append(f"{path.name}: top-level value must be an object")
            continue
        errors.extend(validate_record(path, rec, taxonomy))
        rid = rec.get("id")
        if rid in seen_ids:
            errors.append(f"{path.name}: duplicate id {rid!r} (also in {seen_ids[rid]})")
        elif isinstance(rid, str):
            seen_ids[rid] = path.name
        records.append(rec)

    if errors:
        print(f"FAIL — {len(errors)} violation(s):")
        for e in errors:
            print(f"  - {e}")
        return 1

    print(f"OK — {len(records)} source record(s) valid")
    if args.summary:
        statuses = {}
        tiers = {}
        for r in records:
            statuses[r["verification"]["status"]] = statuses.get(r["verification"]["status"], 0) + 1
            tiers[r["tier"]] = tiers.get(r["tier"], 0) + 1
        print("  by status:", ", ".join(f"{k}={v}" for k, v in sorted(statuses.items())))
        print("  by tier:  ", ", ".join(f"{k}={v}" for k, v in sorted(tiers.items())))
    return 0


if __name__ == "__main__":
    sys.exit(main())
