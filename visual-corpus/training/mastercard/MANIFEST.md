# Visual intake — Mastercard — Pentagram (lead #1)

Case record: [`CASES.md`](../../../CASES.md) · Standard: [`CASE-EVIDENCE-STANDARD.md`](../../../CASE-EVIDENCE-STANDARD.md)
Current evidence level: see acquisition status below (updated 2026-08-19).

## Collect (baseline for every case)
- Full case-page text (saved copy)
- All case-page image/video media

## Priority material for this case
Symbol construction + lockups; FF Mark in use; color values incl. the circle-overlap treatment; parametric pattern examples; card/signage photos

## Gaps only visuals can resolve
Motion; UI beyond claims

## Intake rules
- Every asset gets a row in the log below **at intake** — no unlogged files.
- Provenance is mandatory: exact source URL per asset; primary sources per the standard's preference order.
- No analysis at intake. Evidence-level promotion happens only after inspection, recorded in CASES.md and the standard's census.
- Suggested filename pattern: `<component>--<short-source>--<n>.<ext>` (e.g. `logo-construction--pentagram--1.png`).

## Asset log
| File | Component | Source URL | Collected on |
|------|-----------|------------|--------------|
| `mc_symbol.svg` | Logo — interlocking-circles symbol, vector construction (#EB001B, #F79E1B, #FF5F00 overlap; geometry verified in source) | https://raw.githubusercontent.com/Mastercard/open-banking-reference-application/main/public/mc_symbol.svg | 2026-08-19 |
| `made-design-system/logo-small.svg` | Logo — circles mark as used in MADE storybook | https://raw.githubusercontent.com/Mastercard/made/develop/storybook/stories/assets/images/logo-small.svg | 2026-08-19 |
| `made-design-system/color-brand.json` | Color — MADE brand tokens (primary = orange.04) | https://raw.githubusercontent.com/Mastercard/made/develop/packages/made-design-tokens/src/webUI/themes/b2b/default/colors/color-brand.json | 2026-08-19 |
| `made-design-system/branding.css` | Digital/UI — MADE branding component CSS | https://raw.githubusercontent.com/Mastercard/made/develop/packages/made-css/src/04-components/branding.css | 2026-08-19 |
| `made-design-system/app-logo.png` (188×25) | Logo — developer lockup | https://raw.githubusercontent.com/Mastercard/made/develop/assets/app-logo.png | 2026-08-19 |

**Provenance:** source organization **Mastercard (Mastercard GitHub org)** — open-banking reference app and the MADE design system. Classification: **PRIMARY** (client-published). Missing: FF Mark typography in use, parametric pattern toolkit, imagery, physical, motion; full `Mastercard/made` repo is the best follow-up clone target for deeper token/UI evidence.

**Case acquisition status: PARTIAL VISUAL PRIMARY — vector symbol construction + brand tokens + system CSS inspectable; typography/patterns/imagery/physical/motion explicitly missing**
