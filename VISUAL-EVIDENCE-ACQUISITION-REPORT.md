# Visual Evidence Acquisition Report (Phase 1C)

Date: 2026-08-19. Acquisition only — no visual observation or analysis was
performed beyond identity verification of acquired files (confirming an asset
is what its source says it is). Nothing was reconstructed from memory; search
snippets were used only for locating primary material, never as evidence.

## Environment constraint (governs everything below)

This session's egress gateway rejects connections (403 CONNECT) to **all**
agency websites, client websites, brand portals, media kits, Wikimedia, and
the Internet Archive. Reachable channels: `raw.githubusercontent.com`,
GitHub media/LFS/avatars hosts, npm/PyPI registries, and public-repo git
clones through the session proxy. Acquisition was therefore limited to
**official assets the client organizations themselves publish on GitHub/npm**
— legitimate PRIMARY material, but a narrow slice of each identity system.

## 1. Cases attempted (11)

Slack, Mastercard, Graphcore, GSK, Uber, Robinhood, Warner Records, Saks
(the 8 opened folders), plus — per the move-to-another-lead rule — TikTok,
Spotify, and channel checks for Twitch and Deliveroo.

## 2–3. Cases acquired, with evidence level

| Case | Acquired | Evidence level |
|------|----------|----------------|
| **Uber** | Wordmark PNG (visually verified) + full Base design-system token source: UberMove type scale, color primitives/semantics, motion tokens, grid, light/dark/move themes | **PARTIAL VISUAL PRIMARY** — missing bounded: graphic language (U-frame), imagery, physical, brand motion, font binaries |
| **Slack** | Post-2019 octothorpe mark (visually verified) + pre-2019 comparison + official Platform UI kit (2 sheets à 3756×5600, PDF, Sketch source) | **PARTIAL VISUAL PRIMARY** — missing bounded: brand palette definition, typography, illustration, motion, physical |
| **Mastercard** | Vector symbol SVG with true construction geometry (#EB001B/#F79E1B/#FF5F00 verified in source) + MADE brand tokens, branding CSS, lockup PNG | **PARTIAL VISUAL PRIMARY** — missing bounded: FF Mark in use, pattern toolkit, imagery, physical, motion |
| **TikTok** | TikTok Sans, the official brand typeface: hinted variable TTF, designspace source, 20-page specimen, cover (visually verified), OFL license | **PARTIAL VISUAL PRIMARY (typography-deep)** — single dimension; all others explicitly out of evidence |
| Spotify | Official icon PNGs (5 densities, visually verified) + green #1DB954 token | **INSUFFICIENT VISUAL EVIDENCE** (assets retained) |
| Graphcore | High-res wordmark PNGs (quantized letterforms visible; identity verified) | **INSUFFICIENT VISUAL EVIDENCE** (assets retained) |
| GSK | 2022 logo SVG (vector) | **INSUFFICIENT VISUAL EVIDENCE** (asset retained) |

## 4. Primary sources used

All PRIMARY (published by the client organization itself): `uber/baseweb` +
npm `baseui@18.2.0` (Uber Technologies); `slackapi/python-slack-sdk` and
`slackapi/slack-platform-assets` (Slack Platform Design Team);
`Mastercard/open-banking-reference-application` and `Mastercard/made`
(Mastercard); `tiktok/TikTokSans` (TikTok, SIL OFL); `spotify/android-sdk`
(Spotify); `graphcore/poptorch` docs (Graphcore);
`GSK-Biostatistics/vignettes-asia` (GSK). Full URLs, page titles, access
dates, and PRIMARY/SECONDARY classification are logged per file in each
case's `visual-corpus/training/<case>/MANIFEST.md`.

## 5. Cases rejected and why

- **Robinhood** — INSUFFICIENT VISUAL EVIDENCE: its GitHub org holds only
  open-source project marks (faust, thorn), which are not corporate brand
  assets and were excluded; no other primary channel reachable.
- **Warner Records** — INSUFFICIENT: no official GitHub/npm presence exists
  (verified absence); label and agency sites blocked.
- **Saks Fifth Avenue** — INSUFFICIENT: `saksdirect` org is an empty shell;
  retailer and agency sites blocked.
- **Twitch** — no folder opened: full `twitchdev`/`twitchtv` sweep found zero
  brand assets.
- **Deliveroo** — no folder opened: engineering repos carry no Roo mark or
  brand tokens.
- The threshold was **not** lowered to reach the 8-case target.

## 6. Access blocks encountered

403 CONNECT (gateway policy) to: pentagram.com, wolffolins.com,
wearecollins.com, landor.com, slack.com (media kit), brand.mastercard.com,
mastercard.com newsroom, gsk.com media resources, uber.com/brand.uber.com,
spotify.design, upload.wikimedia.org, commons.wikimedia.org,
web.archive.org, GitHub Pages (`*.github.io`), gist and README-image CDNs,
github.com web/API. Recorded per case in the manifests. These blocks are
network policy and were not circumvented.

## 7. Visual dimensions represented across the corpus

- **Logo/symbol/wordmark**: Mastercard (vector construction), Uber, Slack,
  Spotify, Graphcore, GSK (vector) — 6 cases
- **Typography**: TikTok (full font + sources + specimen), Uber (type-scale
  tokens; font-family references only) — 2 cases
- **Color**: Uber (full primitive/semantic sets), Mastercard (brand tokens),
  Spotify (single token), Slack (in-mark only) — 4 cases
- **Layout/grid**: Uber (grid tokens) — 1 case
- **Motion evidence**: Uber (animation tokens; no rendered motion) — 1 case
- **Digital/UI**: Slack (platform UI kit sheets + Sketch source), Uber
  (design-system source), Mastercard (branding CSS) — 3 cases
- **Graphic language, imagery, physical applications**: **0 cases** — no
  reachable channel carries them.

## 8. Remaining gaps

1. **Target not met**: 4 cases reach defensible PARTIAL VISUAL PRIMARY; the
   target was 8 sufficiently documented systems. FULL VISUAL PRIMARY: 0.
2. Graphic language, imagery, and physical applications are entirely
   unrepresented — precisely the dimensions agency case pages carry, all
   blocked.
3. No rendered motion evidence anywhere (tokens only).
4. The unblocking path is a network-policy change (allow the agency/client
   domains recorded in the manifests) or externally collected asset drops;
   every needed URL is already recorded per case.

## 9. Files/directories created

`visual-corpus/training/{uber,slack,mastercard,tiktok,spotify,graphcore,gsk}/`
now hold 60+ acquired files (token sources, SVGs, PNGs, TTF, designspace,
PDFs, Sketch source, licenses) with per-file provenance rows in each
`MANIFEST.md`; `robinhood`, `warner-records`, `saks` manifests record the
attempted acquisition and INSUFFICIENT status. This report file. Updated
`visual-corpus/README.md` status census.

## 10. STATUS

**NOT READY for Phase 1C visual observation** — at the required standard.
Four cases (Uber, Slack, Mastercard, TikTok) hold genuinely inspectable
primary material and could support a *bounded partial* observation pass, but
the corpus does not contain 8 sufficiently documented, diverse systems, and
three whole dimensions (graphic language, imagery, physical) have zero
evidence. The blocker is environmental, fully mapped, and recorded per case.
