# brand-expert-core

Core knowledge infrastructure for a brand-strategy expert system. This repository
holds the **verified source corpus** — the curated, provenance-checked body of
authoritative branding literature that all downstream expertise (retrieval,
summarization, advisory output) is grounded in.

## Why a verified corpus first

An expert system is only as trustworthy as its sources. Phase 1 establishes:

1. **A source schema** — every source is a structured record with authorship,
   publication, and identifier metadata (`corpus/schema/source.schema.json`).
2. **A verification pipeline** — no source is treated as citable until its
   bibliographic metadata has been checked against an authoritative reference
   (publisher page, Google Books, WorldCat, journal record). See
   [`docs/verification.md`](docs/verification.md).
3. **A topic taxonomy** — sources are tagged against a controlled vocabulary
   (`corpus/taxonomy/topics.json`) so retrieval can be scoped by domain.
4. **A validator** — `scripts/validate_corpus.py` enforces the schema,
   identifier integrity (ISBN-13 checksums, DOI format), taxonomy membership,
   and the rule that *verified* status requires recorded evidence.

## Repository layout

```
corpus/
  schema/source.schema.json   # the contract every source record must meet
  taxonomy/topics.json        # controlled vocabulary for topic tags
  sources/*.json              # one record per source
docs/
  ROADMAP.md                  # phase plan
  verification.md             # verification tiers and process
scripts/
  validate_corpus.py          # stdlib-only validator (run in CI and locally)
```

## Usage

```bash
python3 scripts/validate_corpus.py            # validate the whole corpus
python3 scripts/validate_corpus.py --summary  # also print corpus statistics
```

The validator exits non-zero on any violation, so it can gate merges.

## Contributing a source

1. Copy an existing record in `corpus/sources/` and fill in the fields.
2. Set `verification.status` to `pending` — never `verified` — on first submission.
3. Run the validator.
4. A reviewer verifies the metadata per [`docs/verification.md`](docs/verification.md)
   and flips the status with evidence attached.

## Phases

| Phase | Scope | Status |
|-------|-------|--------|
| 1 | Verified source corpus (schema, taxonomy, seed sources, validator) | **this branch** |
| 2 | Content ingestion & chunking of licensed source material | planned |
| 3 | Retrieval layer with citation-grounded answers | planned |
| 4 | Expert advisory interface | planned |

See [`docs/ROADMAP.md`](docs/ROADMAP.md) for detail.
