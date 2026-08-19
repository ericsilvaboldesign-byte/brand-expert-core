# Case Evidence Standard & Visual Acquisition Manifest

Governs what a case in this corpus is allowed to claim, based on what was
actually inspected. Established in Phase 1B.

## Evidence levels (the only permitted labels)

| Label | Meaning |
|-------|---------|
| **FULL VISUAL PRIMARY** | Actual primary case material inspected sufficiently to evaluate the system — enough of the visual source package (below) to analyze system logic. |
| **PARTIAL VISUAL PRIMARY** | Some primary visual assets inspected, but important system dimensions unavailable. Usable only with the missing dimensions explicitly bounded. |
| **TEXT PRIMARY ONLY** | Agency/source text accessed (full pages) without sufficient visual material. |
| **SNIPPET / REFERENCE ONLY** | Discovery lead only — partial text via search excerpts; nothing visually inspected. |

**VERIFIED TRAINING CASE rule.** A case may be called a VERIFIED TRAINING
CASE only at **FULL VISUAL PRIMARY**, or at a defensible **PARTIAL VISUAL
PRIMARY** with the missing dimensions explicitly bounded in the case record.
Anything below that is a CASE LEAD. Missing observations are never invented;
"NOT YET VISUALLY VERIFIED" stays on every component description that has not
been checked against actual visual material.

## The visual source package requirement

For a case to become a VERIFIED TRAINING CASE, enough primary visual material
must be inspected — *where relevant to that identity* — across:

- logo / symbol / wordmark (including construction, lockups, clear space)
- typography (specimens in use, not just typeface names)
- color (actual values/relationships as deployed, not adjectives)
- layout / grid
- graphic language (patterns, devices, compositional rules in examples)
- imagery / illustration (real examples of the art direction)
- motion (frames, clips, or motion documentation)
- digital / UI behavior (product or web surfaces)
- physical applications (packaging, signage, environments, print)

Not every case needs every component. The test is: **does the inspected
material allow analysis of SYSTEM LOGIC** — how the parts construct, relate,
vary, and govern one another — **rather than repetition of agency copy?** A
case that only lets us restate what the agency wrote fails the test whatever
its word count.

Acceptable material sources, in order of preference: the agency's own case
page media (images/video); the brand's own published guidelines or design
site; the brand's press/design announcements; type-foundry release pages for
the case's typefaces; visual archives that reproduce primary assets
unmodified (acceptable as carriers of primary artifacts, flagged as such).
Text commentary from any of these is never a substitute for the assets.

## Current status

All 15 leads in [`CASES.md`](CASES.md): **SNIPPET / REFERENCE ONLY.**
Verified training cases in the corpus: **0.**

## Acquisition manifest

What each lead needs to reach FULL (or defensible PARTIAL) VISUAL PRIMARY.
Baseline for **every** lead — the fetch environment blocked all agency-site
media — is: (1) full case-page text, (2) the case page's image/video media.
Listed per lead: the priority material beyond that baseline, and the reported
gaps that only visuals can resolve.

| # | Lead | Priority visual material to acquire | Reported gaps to resolve visually |
|---|------|--------------------------------------|-----------------------------------|
| 1 | Mastercard (Pentagram) | Symbol construction + lockups; FF Mark in use; color values incl. the overlap treatment; parametric pattern examples; card/signage photos | Motion; UI beyond claims |
| 2 | Slack (Pentagram) | Octothorpe grid construction; 4-color palette values; icon/illustration samples; app UI surfaces | Typography; motion; physical |
| 3 | Graphcore (Pentagram) | Graphcore Quantized specimens incl. alternates; pattern/Quadtree outputs; illustration; hardware photos | Motion |
| 4 | Saks Fifth Avenue (Pentagram) | Tile-grid permutations; redrawn script closeups; bags/packaging photos | Imagery; motion; secondary typography |
| 5 | Warner Records (Pentagram) | Sliced-circle usages with artist imagery; Sharp Sans lockups | Palette behavior; motion; physical |
| 6 | Uber (Wolff Olins) | Uber Move specimens; Safety Blue in real UI; U-frame compositions; motion clips | Physical applications |
| 7 | TikTok (Wolff Olins) | Layered-grid examples; playbook spreads | Logo, typography, color — all visually unreported |
| 8 | GSK (Wolff Olins) | "Signal" shape behavior across contexts; GSK Precision specimens; gradient values; motion examples | UI; physical |
| 9 | Kellogg's Europe (Landor) | Pack fronts across the range; cropped-wordmark treatment; bowl photography examples | Typography; palette values |
| 10 | S&P Global (Landor) | Any primary visual at all — logo, division lockups, system samples | Entire visual system (text-only lead) |
| 11 | Spotify (COLLINS) | Lens duotone examples; color-pair set; layout samples | Logo treatment; typography; motion; UI |
| 12 | Twitch (COLLINS) | Custom typeface name + specimens; hue system; emote-derived graphics; product UI | Motion; physical |
| 13 | Robinhood (COLLINS) | Illustration/infographic samples; product UI | Logo; typography; color; photography |
| 14 | Deliveroo (DesignStudio) | The Roo construction; global toolkit examples; rider kit/packaging photos | Typography; color; nearly all system detail |
| 15 | National Geographic (CGH) | Border-mark usage set; guideline-site samples | Typography; palette beyond gold; imagery style |

Leads 7, 10, 13 and 14 have the thinnest reported systems; if their packages
cannot be acquired, they are candidates for replacement rather than
promotion. No observation in any lead may be upgraded without the
corresponding material actually being inspected.

**Intake folders.** [`visual-corpus/training/`](visual-corpus/README.md)
holds intake folders for eight leads (Mastercard, Slack, Graphcore, Saks,
Warner Records, Uber, GSK, Robinhood), each with a per-case `MANIFEST.md`
restating its row above and logging provenance per collected asset. The other
seven leads get folders when their acquisition starts.
