# Visual intake — Uber — Wolff Olins (lead #6)

Case record: [`CASES.md`](../../../CASES.md) · Standard: [`CASE-EVIDENCE-STANDARD.md`](../../../CASE-EVIDENCE-STANDARD.md)
Current evidence level: see acquisition status below (updated 2026-08-19).

## Collect (baseline for every case)
- Full case-page text (saved copy)
- All case-page image/video media

## Priority material for this case
Uber Move specimens; Safety Blue in real UI; U-frame compositions; motion clips

## Gaps only visuals can resolve
Physical applications

## Intake rules
- Every asset gets a row in the log below **at intake** — no unlogged files.
- Provenance is mandatory: exact source URL per asset; primary sources per the standard's preference order.
- No analysis at intake. Evidence-level promotion happens only after inspection, recorded in CASES.md and the standard's census.
- Suggested filename pattern: `<component>--<short-source>--<n>.<ext>` (e.g. `logo-construction--pentagram--1.png`).

## Asset log
| File | Component | Source URL | Collected on |
|------|-----------|------------|--------------|
| `base-design-system/tokens/*` (3 files) | Color — primitive + semantic tokens | https://registry.npmjs.org/baseui/-/baseui-18.2.0.tgz (source repo: github.com/uber/baseweb) | 2026-08-19 |
| `base-design-system/themes-shared/*` (10 files: typography, animation, grid, borders, lighting, sizing, breakpoints, media-query) | Typography in use (UberMove/UberMoveText/UberMoveMono scale) · motion tokens · layout grid — digital/UI | same | 2026-08-19 |
| `base-design-system/themes-{light,dark,move}/*` (14 files) | Color — deployed theme mappings incl. Move (Uber's product theme) | same | 2026-08-19 |
| `base-design-system/PACKAGE-VERSION.txt` | Provenance record | — | 2026-08-19 |

**Provenance:** source organization **Uber Technologies, Inc.** (published under the uber GitHub org / npm `baseui`); package title "baseui" v18.2.0, MIT-licensed. Classification: **PRIMARY** (client-published design-system source — the actual token values shipped to Uber product UI). Covers digital/UI, typography tokens, color, motion tokens, layout grid. Does NOT cover: the brand wordmark artwork, Uber Move font files (licensed, not in package), graphic language (U-frame), imagery, physical.

| `logo/uber-logo.png` (600×365) | Logo — Uber wordmark, black (visually verified) | https://raw.githubusercontent.com/uber/baseweb/main/documentation-site/public/images/uber-logo.png | 2026-08-19 |

**Case acquisition status: PARTIAL VISUAL PRIMARY** — wordmark + full product design-system token source (typography scale incl. UberMove families, color primitives/semantics, motion tokens, grid) inspectable; missing dimensions bounded: brand graphic language (U-frame), imagery, physical applications, brand-level motion, and the Uber Move font files themselves (proprietary, unpublished).
