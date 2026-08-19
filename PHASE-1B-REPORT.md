# Phase 1B Report — Visual Evidence + Evaluation Integrity

Date: 2026-08-18. Scope: reclassification of case evidence, definition of the
visual evidence standard, and redesign of the evaluation reserves. No source
research was redone; no methodology beyond the directed standard was created;
Phase 2 was not begun; nothing was merged.

## 1. Current cases reclassified

All 15 former "training cases" are reclassified in [`CASES.md`](CASES.md) as
**CASE LEADS — PARTIAL ACCESS**, evidence level **SNIPPET / REFERENCE ONLY**:

- Agency-stated text that was actually accessible (search excerpts of the
  agencies' own pages) is preserved as *reported agency claims*.
- Every former "OBSERVABLE DESIGN SYSTEM" section is downgraded to
  **REPORTED DESIGN SYSTEM — NOT YET VISUALLY VERIFIED**: these are textual
  reports, never direct observation, and are marked as such in place.
- Analyst inferences are marked doubly provisional (drawn from reported text
  only).
- Source locations are preserved per lead for acquisition.
- **Verified training cases in the corpus: 0.** Nothing was invented to
  close the gap.

## 2. Visual acquisition manifest

Defined in [`CASE-EVIDENCE-STANDARD.md`](CASE-EVIDENCE-STANDARD.md): the
visual source package (logo/symbol/wordmark construction, type specimens in
use, deployed color values, layout/grid, graphic language examples,
imagery/illustration, motion frames or documentation, UI behavior, physical
applications — where relevant per case), with the governing test that
inspected material must permit analysis of **system logic**, not repetition
of agency copy. The manifest lists, per lead, the baseline (full case-page
text + media, blocked in this environment) plus priority material and the
gaps only visuals can resolve. Leads with the thinnest reported systems
(TikTok, S&P Global, Robinhood, Deliveroo) are flagged as
replace-if-unacquirable.

## 3. Known-canon calibration cases

The six famous reserves (Airbnb, Mailchimp, The Met, FedEx, McDonald's, NASA
GSM) are reclassified in [`HOLDOUT-CASES.md`](HOLDOUT-CASES.md) as
**KNOWN-CANON CALIBRATION CASES** — retained unanalyzed, usable later to test
analysis of canonical work and to calibrate against well-understood ground
truth, and explicitly disqualified as blind tests (vulnerable to model prior
knowledge).

## 4. Blind / low-contamination holdout set

[`BLIND-HOLDOUTS.md`](BLIND-HOLDOUTS.md): **8 reserved cases** (minimum was
6), all attribution-verified against the agency's own case page plus
independent press credits, none used or analyzed anywhere in the corpus:
Perplexity (Smith & Diction 2023), Audible (DixonBaxi ~2022), Papier (Ragged
Edge 2021), Fanta (JKR 2023), Decathlon (Wolff Olins 2024), Instagram motion
system (Studio Dumbar/DEPT 2024), Bolt (Koto 2023), PAC NYC (Porto Rocha
2023–24). Category spread: AI product, entertainment, e-commerce, CPG
packaging, mass retail, motion-led platform system, fintech infrastructure,
cultural institution. Contamination risk is rated per case (Fanta and
Instagram carry "medium" for brand fame; their identity work is recent). One
candidate was dropped for failed attribution (Nubank/Porto Rocha — evidence
credits Pentagram) rather than kept on faith; a verified backup (Utah Jazz,
Studio Dumbar) is recorded. The blind evaluation protocol is fixed in the
file: anonymized visuals first — no agency name, no case-study explanation,
no strategic rationale — diagnosis before truth reveal; a case is burned for
blind use once analyzed. The file itself is the truth key and must be
withheld from any evaluated system.

## 5. Case-evidence standard

Only four labels exist ([`CASE-EVIDENCE-STANDARD.md`](CASE-EVIDENCE-STANDARD.md)):
**FULL VISUAL PRIMARY · PARTIAL VISUAL PRIMARY · TEXT PRIMARY ONLY ·
SNIPPET / REFERENCE ONLY.** A case may be called a VERIFIED TRAINING CASE
only at FULL VISUAL PRIMARY, or at a defensible PARTIAL VISUAL PRIMARY with
missing dimensions explicitly bounded. Current census: 15 leads at
SNIPPET / REFERENCE ONLY; 0 verified training cases.

## 6. Remaining visual evidence gaps

1. **No visual material of any kind has been inspected for any case** — this
   environment blocks fetching agency-site media. Fulfilling the acquisition
   manifest requires an unblocked environment or human-collected asset
   packages.
2. Even case-page **text** is excerpt-level for all 15 leads; full-text
   fetches would upgrade them to TEXT PRIMARY ONLY at minimum.
3. Blind-holdout material likewise needs acquisition **by someone other than
   the evaluated system**, per the protocol.
4. Motion evidence is the hardest package component (video frames/clips);
   the Studio Dumbar Vimeo channel and agency case-page videos are the
   recorded sources.
5. The training-lead pool skews Western and digital; if leads are replaced
   during acquisition, packaging-led and non-Western candidates should be
   preferred (recorded preference, not new methodology).

## 7. Phase 1 readiness for EXPERT KNOWLEDGE SYNTHESIS

**NO.**

The **knowledge layer** (SOURCES, KNOWLEDGE-MAP, DISTINCTIVE-ASSETS,
TYPOGRAPHY, COLOR-IMAGERY, MOTION-DIGITAL, SEMIOTICS) is synthesis-ready on
its own terms: sourced, authority-graded, access-audited, with contradictions
and refutations recorded. But the directive's own bar for a *Brand Design*
expert input is not met: the practice corpus contains **zero verified
training cases** — every system description is agency text, not inspected
work — so any synthesis today would encode agency copy and analyst inference
as if it were observed design evidence.

What flips the verdict: fulfill the acquisition manifest for enough leads to
seat a defensible verified-case base (indicatively 8+ at FULL or bounded
PARTIAL VISUAL PRIMARY, spread across categories), confirm blind-holdout
material is obtainable under the protocol, and re-run this readiness check.
Nothing else in Phase 1 blocks synthesis.
