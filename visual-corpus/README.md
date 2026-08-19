# Visual Corpus — Intake

Primary visual material for promoting case leads to VERIFIED TRAINING CASES,
per [`CASE-EVIDENCE-STANDARD.md`](../CASE-EVIDENCE-STANDARD.md). This
environment cannot fetch agency-site media, so folders are filled by
human-collected asset packages; each case folder's `MANIFEST.md` says what to
collect and logs provenance per file.

## Structure

```
visual-corpus/
  training/
    slack/  mastercard/  graphcore/  gsk/
    uber/   robinhood/   warner-records/  saks/
```

Eight of the fifteen leads have intake folders (the indicative verified-case
base from PHASE-1B-REPORT §7). The remaining seven leads (TikTok, S&P Global,
Kellogg's, Spotify, Twitch, Deliveroo, National Geographic) stay unpromoted
until folders are added for them.

## Rules

1. **Provenance per file** — every asset is logged in its case `MANIFEST.md`
   with its exact source URL before anything else happens.
2. **No analysis at intake** — collection and inspection are separate steps;
   promotion decisions are recorded in `CASES.md` and the standard's census,
   never here.
3. **Blind holdout material must NOT be placed in this repository** — the
   blind set ([`BLIND-HOLDOUTS.md`](../BLIND-HOLDOUTS.md)) is evaluated with
   material withheld from the system; adding it here would contaminate it.
   Known-canon calibration material is likewise out of scope for training/.
4. Licensing note: assets here are collected for internal analysis/research;
   they remain their owners' property and must not be redistributed.

## Status (Phase 1C acquisition, 2026-08-19)

Acquisition ran within a hard egress policy (only GitHub raw/npm registries
reachable; all agency/client websites blocked). Folders now exist for 10
leads (spotify/ and tiktok/ opened when acquirable material was found).

| Acquisition status | Cases |
|--------------------|-------|
| PARTIAL VISUAL PRIMARY (bounded) | uber, slack, mastercard, tiktok (typography-deep) |
| INSUFFICIENT VISUAL EVIDENCE (assets retained) | graphcore, gsk, spotify |
| INSUFFICIENT VISUAL EVIDENCE (nothing acquirable) | robinhood, warner-records, saks |

Verified training cases: **0** (promotion requires visual observation, a
separate step not yet begun). See
[`VISUAL-EVIDENCE-ACQUISITION-REPORT.md`](../VISUAL-EVIDENCE-ACQUISITION-REPORT.md).
