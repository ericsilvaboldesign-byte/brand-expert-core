# Roadmap

## Phase 1 — Verified Source Corpus (current)

Goal: a machine-readable, provenance-checked registry of the authoritative
brand-strategy literature.

Deliverables:

- [x] Source record schema (`corpus/schema/source.schema.json`)
- [x] Topic taxonomy (`corpus/taxonomy/topics.json`)
- [x] Seed corpus of canonical sources, each web-verified where possible
- [x] Stdlib-only validator (`scripts/validate_corpus.py`)
- [x] Verification process documentation (`docs/verification.md`)

Out of scope for Phase 1: storing or ingesting the *content* of the sources.
Phase 1 is the registry and its integrity guarantees only.

## Phase 2 — Content Ingestion

- Licensing review per source (what may be stored/quoted).
- Chunking + embedding pipeline keyed to corpus `id`s, so every chunk is
  traceable to a verified source record.

## Phase 3 — Retrieval Layer

- Citation-grounded retrieval: answers must cite corpus `id`s.
- Tier-aware ranking (canonical sources outrank supplementary ones).

## Phase 4 — Expert Advisory Interface

- Brand-audit, positioning, and identity-system advisory flows built on the
  retrieval layer.
