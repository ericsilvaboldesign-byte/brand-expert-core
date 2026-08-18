# Color, Graphic Language & Imagery — Verified Knowledge

Items are labeled **EMPIRICAL** (peer-reviewed research), **PROFESSIONAL
PRACTICE** (authoritative practitioner/system documentation), or **CASE
OBSERVATION**. Universal color-psychology claims are explicitly not made —
see §1, where the leading review itself warns against them.

**Access disclosure.** Two channels, tagged per item: **FULL PRIMARY** —
complete files read from official GitHub-hosted sources (IBM's
design-language and Carbon site repositories, the W3C WCAG source repo, the
Library of Congress U.S. Reports mirror); **excerpt** — search-retrieved
content of the named page (direct fetches blocked in this environment; quotes
not verified against the full page).

## 1. Color — what the empirical literature actually supports

- **EMPIRICAL (excerpt-accessed)** — Elliot & Maier, "Color Psychology:
  Effects of Perceiving Color on Psychological Functioning in Humans",
  *Annual Review of Psychology* 65 (2014), 95–120, DOI
  `10.1146/annurev-psych-010213-115035`. The field's leading review states
  the literature "remains at a nascent stage of development," that earlier
  empirical work was hampered by methodological issues, and that color
  effects are **context-dependent** (red functions differently in achievement
  vs. attraction contexts); the authors recommend "patience and prudence"
  before applied recommendations. *The strongest peer-reviewed source on
  color psychology explicitly warns against the universal color-meaning
  claims common in branding content.* (Caveat-wording is search-mediated —
  flagged.)
- **EMPIRICAL (excerpt-accessed)** — Labrecque & Milne, "Exciting red and
  competent blue: the importance of color in marketing", *Journal of the
  Academy of Marketing Science* 40(5) (2012), 711–727, DOI
  `10.1007/s11747-010-0245-y`. Four studies mapping hues onto Aaker's
  brand-personality dimensions (red→excitement, blue→competence), with
  saturation and value amplifying trait perceptions, and effects on brand
  likability/familiarity. **What it shows:** learned color–personality
  *associations* — not universal emotional effects; U.S. samples (sample
  details unverified — flagged); cross-cultural work (Madden, Hewett & Roth
  2000, cited not accessed) shows associations vary by culture.
- **The "color increases brand recognition by 80%" claim — REFUTED AS
  SOURCED.** The claim is customarily attributed to research at Loyola
  University Maryland. Provenance checking (insights4print.ceo
  investigations, excerpt-accessed) finds the underlying work concerned
  color vs. monochrome in *document/graph information processing*, not brand
  recognition, and does not contain the 80% figure in a brand context. The
  plausible root is **Hoadley (1990), "Investigating the effects of color",
  *Communications of the ACM* 33(2), 120–125** (excerpt-verified): a lab
  experiment on tables and charts in decision support. **Do not use the 80%
  figure.** Peer-reviewed work on color and logo recognition is mixed — one
  preprint reports greyscale/concrete logos recognized *more* accurately
  (search-mediated, preprint — flagged).

## 2. Color in professional practice

All FULL PRIMARY (official GitHub sources):

- **IBM Design Language — brand color** (`design-language-website` repo):
  ten color families in ten numbered tones (10–100) with
  RGB/HEX/Pantone/CMYK; proportion rules (experiences "dominated by the
  grays and the core colors of black, white, and the blue family"); explicit
  allowed/prohibited combinations; gradient rules; accessibility built in
  ("never rely solely on color to convey meaning").
- **IBM Carbon — functional color** (`carbon-website` repo): **role-based
  semantic tokens**, not hex codes ("Unlike hex codes, tokens apply
  universally across themes"); token naming = element + role
  (`$text-primary`, `$border-subtle`); four default themes (two light, two
  dark) with a layering model and user-selectable modes.
- **WCAG 2.x SC 1.4.3** (`w3c/wcag` source repo): normal text **4.5:1**,
  large text (18pt / 14pt bold) **3:1**; and the brand-relevant exemption:
  **"Text used as a logo or logotype is exempted from contrast
  requirements."**
- Material Design 3 color-role docs could not be accessed — no claims made.

## 3. Color as an ownable asset — the legal reality

- **PRIMARY LEGAL (full opinion read)** — *Qualitex Co. v. Jacobson Products
  Co.*, 514 U.S. 159 (1995), via the Library of Congress U.S. Reports mirror:
  "the Lanham Act permits the registration of a trademark that consists,
  purely and simply, of a color" — but only with **secondary meaning**
  ("over time, customers may come to treat a particular color on a product or
  its packaging… as signifying a brand") and only if **non-functional**.
- Implication: single colors are protectable only per category, **after long
  consistent use** — color ownership is earned through usage, not declared in
  a guideline. This converges with the memory-based ownership account in
  [`DISTINCTIVE-ASSETS.md`](DISTINCTIVE-ASSETS.md).
- **CASE OBSERVATION (full article read, mirrored)** — reported examples:
  Owens-Corning pink (1985, reported as the first successful U.S. color
  trademark), Tiffany blue (1998), UPS brown (1998), 3M canary yellow,
  T-Mobile magenta; reported failures: General Mills' Cheerios yellow,
  Pepto-Bismol pink (functional association); Cadbury reported to have lost
  its purple registration in UK litigation. *Details beyond Qualitex are
  reported, not verified against primary legal sources — flagged.*

## 4. Graphic language — what it consists of, per primary documentation

Per the fully accessed IBM Design Language source (the most complete public
brand-identity documentation reachable this session), a documented "graphic
language" comprises interoperating element systems, each with construction
rules:

- **Layout/proportion system**: IBM's 2x Grid — "the framework for all the
  visual elements and typography"; space divided in powers of two; an 8px
  mini unit scalable by viewing distance; spacing multiples creating "spatial
  rhythm." Explicitly used beyond UI — print, environments, illustration,
  photo composition.
- **Logo system**: approved palette colors only; placement on photography
  requires "clear and simple backgrounds with plenty of contrast"; extensive
  don't-lists.
- **Iconography/pictograms and illustration**: codified sub-styles (flat,
  line, isometric, hybrid-UI) with fixed line weights, their own grids, and
  named prohibitions — "Adherence to this palette creates brand consistency
  and distinction."
- **Inclusion semantics**: a skin-tone "People palette" structured like the
  core palette so the same contrast rules apply.
- **Historical anchor (existence only)**: the NASA Graphics Standards Manual
  (NHB 1430.2, 1976, Danne & Blackburn) is the canonical precedent for such
  codified systems; its existence and legal authority (14 CFR 1221) were
  verified via NASA's own repository license text. Its *content* is not
  described here — NASA is a reserved holdout
  ([`HOLDOUT-CASES.md`](HOLDOUT-CASES.md)).

## 5. Imagery / art direction

**PROFESSIONAL PRACTICE (FULL PRIMARY — IBM photography pages):** what an
art-direction system typically specifies, per the most complete accessible
primary example:

- **Subject taxonomy**: reportage (the working world "as it is"),
  portraiture (equal treatment of subjects regardless of status), still life.
- **Viewpoint**: sanctioned perspectives (eye-level, aerial); avoid "forced
  perspectives that attempt to add interest to uninteresting subjects."
- **Light**: "Use natural light or techniques that simulate natural light";
  avoid "golden hour" glow.
- **Color treatment/retouch**: no washes, grading, overlays; "The sincere
  portrayal of subject is paramount. We cannot manufacture a better reality
  than reality itself."
- **Composition**: the brand grid extends into imagery — "Images should
  leverage divisions of two" — acting as "connective tissue" between images.

So an imagery system = subject taxonomy + casting stance + perspective +
light + retouch limits + composition tied to the layout system, with a
rationale linking imagery to brand voice.

## 6. Where knowledge is thin — explicit

- **No strong empirical literature on graphic-language or imagery-system
  effectiveness.** A 2024 systematic review of brand visual identity effects
  located only ~34 eligible studies in 20 years, concentrated on logos,
  color, and typography — not graphic languages or photography systems
  (search-mediated — flagged). Guidance in §4–§5 is professional practice
  and case observation, **not** experimental evidence — downstream advice
  must say so.
- Circulating figures to refuse: the 80% recognition claim (§1); "62–90% of
  judgment is based on color" (traces to Singh 2006, which cites weak
  secondary sources); "consistent branding increases revenue by 33%" (a
  marketing-software vendor report, not peer-reviewed).
- What color evidence exists is context-, culture-, and category-dependent;
  color–product *congruence* appears to matter more than color per se
  (Bottomley & Doyle 2006 — cited in secondary bibliographies, not accessed —
  flagged).
