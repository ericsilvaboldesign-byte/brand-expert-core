# Phase 1 Completion Report

Date: 2026-08-18. Scope: completion of the missing practice-side areas of the
verified source corpus, per the Phase 1 completion-gap directive. No
methodology was created; no Phase 2 work was begun; nothing was merged.

## 1. New substantive sources verified

Registered in [`SOURCES.md`](SOURCES.md) § "Phase 1 completion additions",
with full per-claim usage in the domain documents:

- **11 new peer-reviewed empirical sources** (Romaniuk & Nenycz-Thiel 2014;
  Ward et al. 2020; Romaniuk, Sharp & Ehrenberg 2007; IJA 2026 benchmark;
  Brasel & Hagtvedt 2016; Elliot & Maier 2014; Labrecque & Milne 2012;
  Beier & Larson 2010 and 2013; Rello & Baeza-Yates 2013; Wery & Diliberto
  2017; plus Hoadley 1990 registered as the root of a misattributed claim).
- **3 scholarly conceptual sources** (Chandler; Oswald; Barthes).
- **1 primary legal source read in full** (*Qualitex v. Jacobson*, 514 U.S.
  159) and **1 normative standard read in full** (WCAG SC 1.4.3, from the
  W3C source repository).
- **7 professional design-system sources at FULL PRIMARY access** (IBM Design
  Language + Carbon site source repositories; `@carbon/motion`,
  `@material/animation`, `@shopify/polaris-tokens`, `@atlaskit/motion` npm
  token packages) and several more at excerpt level (Fluent 2, Salesforce
  Kinetics, M3, Google Fonts Knowledge, Butterick, MDN, web.dev, Noto).
- **15 official agency case pages** (excerpt-accessed) plus 2 practitioner
  books metadata-verified (van Nes; Beier).

## 2. Claims downgraded after the access audit

The strict rule now in force ([`README.md`](README.md)): DIRECTLY VERIFIED
requires the claim-supporting content to have been accessed;
publisher/catalog/library metadata verifies only citation facts.

- **All 23 original register entries**: "Supports"/"Limits" summaries
  reclassified as **attribution** (analyst synthesis), not direct
  verification. "Verified via" renamed "Metadata verified via" throughout.
- **Zajonc 1968** downgraded to metadata-only (its verification URL is a
  citation listing, not content); 9 journal entries stand at
  abstract-accessed; all 18 book entries stand at metadata-only.
- **KNOWLEDGE-MAP statuses** downgraded to "as attributed" pending
  full-content audit, with book-only-supported "established" claims
  (penetration/mental availability; the 60/40 heuristic) explicitly marked
  one notch weaker than abstract-checked article claims.
- **New documents carry their downgrades inline**, e.g.: the 50%
  Fame/Uniqueness thresholds and "4–5 asset palette" figures (practitioner/
  secondary only); the term "anchor asset" (unconfirmed); IJA 2026 authorship
  (unconfirmed); GSK Precision typeface details (secondary coverage); Audi's
  motion-page wording (page unfetchable); Cadbury-purple litigation details
  (reported, not primary-verified); Elliot & Maier caveat wording
  (search-mediated).

## 3. Distinctive-assets coverage

[`DISTINCTIVE-ASSETS.md`](DISTINCTIVE-ASSETS.md) covers, from
Romaniuk/Ehrenberg-Bass primary material and verified academic papers:
definition; Fame; Uniqueness; the four-quadrant asset-strength grid (Use or
Lose / Investment Potential / Avoid Solo Use / Ignore or Test); ownership
(reach, co-presentation, consistency; memory-based not legal); asset types
(visual/audio/word/people, incl. fonts and "moments"); portfolio cohesion
(the palette, "menu rather than meal"); distinctive ≠ differentiated
(grounded in Romaniuk, Sharp & Ehrenberg 2007); and an explicit
can/cannot-tell-a-designer section (measurement and prioritization yes;
asset creation, aesthetics, and prediction for new assets no).

## 4. Training-case corpus

**15 cases** in [`CASES.md`](CASES.md), every one from official agency
material, each separating AGENCY-STATED STRATEGY / OBSERVABLE DESIGN SYSTEM /
OUR INFERENCE, with per-case access levels:

| Agency | Cases | Categories |
|--------|-------|-----------|
| Pentagram | 5 (Mastercard, Slack, Graphcore, Saks Fifth Avenue, Warner Records) | payments, SaaS, AI hardware, luxury retail, music |
| Wolff Olins | 3 (Uber, TikTok, GSK) | mobility, social media, pharma |
| Landor | 2 (Kellogg's Europe, S&P Global) | FMCG packaging, financial information |
| COLLINS | 3 (Spotify, Twitch, Robinhood) | streaming, creator platform, fintech |
| DesignStudio | 1 (Deliveroo) | food delivery |
| Chermayeff & Geismar & Haviv | 1 (National Geographic) | media/institution |

Access is snippet-only throughout (agency sites block direct fetching from
this environment); Koto and Porto Rocha candidates were dropped rather than
written from memory.

## 5. Holdout cases

**6 reserved, unanalyzed** ([`HOLDOUT-CASES.md`](HOLDOUT-CASES.md)): Airbnb
(DesignStudio), Mailchimp (COLLINS), The Met (Wolff Olins), FedEx (Landor),
McDonald's (Turner Duckworth), NASA Graphics Standards Manual. Change logged:
IBM was originally a holdout but its public design-system documentation was
needed as professional-practice reference (motion, color, imagery), so it was
replaced by McDonald's.

## 6. Typography coverage

[`TYPOGRAPHY.md`](TYPOGRAPHY.md): functional typography (Butterick, Google
Fonts Knowledge); legibility research (Beier; familiarity effect); identity
typography as voice (Klim/Geograph, Monotype); recognizability as an asset
(IJA 2026: fonts usually support rather than carry distinctiveness);
expressive range (variable-font axes); multilingual (Noto, world families);
screen performance (WOFF2, subsetting, CLS control); accessibility (WCAG
thresholds; what WCAG does not say; weak dyslexia-font evidence); custom vs
retail rationales (Netflix Sans licensing economics, YouTube Sans
symbol-encoding, Geograph consolidation) — with the explicit note that no
accessed source demonstrates a market-performance effect of custom type.

## 7. Color / imagery / graphic-language coverage

[`COLOR-IMAGERY.md`](COLOR-IMAGERY.md): empirical color knowledge (Elliot &
Maier's own "nascent field" warning; Labrecque & Milne's learned
color–personality associations) explicitly separated from practice (IBM
palette/token/theming systems — FULL PRIMARY; WCAG) and from legal ownership
(*Qualitex* read in full; reported color-mark examples flagged as reported).
Graphic language and imagery documented from full-primary IBM material
(grids, icon/illustration systems, photography art direction) with the
explicit statement that effectiveness evidence for graphic-language and
imagery systems is absent. The "80% color recognition" claim is refuted at
its alleged source. No universal color psychology was invented.

## 8. Motion / digital coverage

[`MOTION-DIGITAL.md`](MOTION-DIGITAL.md): motion-as-brand-behavior doctrine
from five professional systems (IBM productive/expressive with token-level
FULL PRIMARY evidence; Material; Fluent; Salesforce Kinetics; Audi); motion
signatures (Netflix ta-dum, Stack, Audi rings — existence sourced,
effectiveness explicitly unsourced); dynamic identity (van Nes; MIT Media Lab
including its sourced 2011→2014 correction away from full randomness; OCAD);
UI/product expression (Polaris, Atlaskit token files); static-to-motion
coherence (geometry vs personality carry-over, with a thinness flag); and
the empirical base — Brasel & Hagtvedt 2016 showing logo animation helps only
congruent (dynamic-positioned) brands and can backfire. Animation is treated
as conditionally useful, never automatically distinctive.

## 9. Semiotics coverage

[`SEMIOTICS.md`](SEMIOTICS.md): what semiotic analysis legitimately does
(Chandler; Peirce's icon/index/symbol; Saussure; Barthes' denotation/
connotation and anchorage/relay; Oswald's applied claims); the observation →
interpretation → strategic-inference register distinction (marked as analyst
framing where sources don't state it); and limits (Chandler's own criticisms
chapter; polysemy; culture/time-boundedness; the unverified
inter-coder-reliability gap recorded as analyst judgment). No methodology
built.

## 10. Remaining gaps

1. **No full text of any book or journal article has been read** — the
   environment blocks direct fetching; ceiling achieved is abstracts,
   search excerpts, and the FULL PRIMARY items listed above. A full-content
   audit (with normal network or library access) is the single largest
   upgrade path and would let KNOWLEDGE-MAP statuses shed the "as attributed"
   qualifier.
2. **All 15 agency cases are snippet-only**; re-fetching the recorded URLs
   from an unblocked environment would upgrade them to `fetched` fidelity and
   likely fill many "not documented" component gaps.
3. **Case-corpus skews**: no packaging-design-led agency beyond Landor/
   Kellogg's, no non-Western agency, thin physical/environmental and sonic
   coverage; Koto and Porto Rocha candidates remain unprocessed.
4. **Material Design 3 color documentation and Apple HIG** were unreachable —
   no claims made; worth adding later.
5. **Sonic branding** is covered only as an asset type, not as a domain.
6. **Documented absences** (recorded as findings, not omissions): no
   empirical literature on graphic-language/imagery-system effectiveness; no
   inter-coder-reliability evidence for commercial semiotics; no
   market-performance evidence for custom type; sparse motion-effectiveness
   research.

## PHASE 1 STATUS

**READY FOR HUMAN AUDIT** — all directed areas are covered with sources,
authority labels, per-item access levels, and flagged unconfirmables; the
verification-language audit is applied corpus-wide. The audit should weigh
gap #1 (no full-text access) as the known ceiling of this pass: everything
claimed is traceable, but nothing beyond the FULL PRIMARY items is
full-text-verified.
