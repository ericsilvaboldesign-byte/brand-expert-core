# Brand Expert Core — Evidence Router

Status: PHASE 2 OPERATIONAL SYNTHESIS

Purpose: route a branding question to the right source class and prevent authority drift.

## 1. Routing rule

Ask first: **what kind of claim would the answer make?**

Then route by claim type, not by convenience of access.

| Claim type | Preferred authority | Secondary use | Do not use as governing proof |
|---|---|---|---|
| What is brand equity / personality / positioning? | Original scholarly/conceptual source | Textbook synthesis | Agency blog, gallery |
| Does X improve recognition / preference / sales / growth? | Empirical research / validated measurement | Industry-empirical with limits | Case study self-report, awards |
| How do professionals structure identity work? | Established practitioner canon / original agency method | Contemporary agency practice | Empirical claims unless tested |
| What did a specific rebrand intend? | Agency/client primary source | Interview / trade press | Our inference |
| What does a visual system actually do? | Directly inspected primary visual material | Unmodified visual carrier | Agency description alone |
| Is an asset distinctive? | Fame + uniqueness measurement / relevant empirical method | Repeated observed usage as candidate identifier | Visual prominence alone |
| What does a color/type/shape mean? | Relevant empirical/semiotic source within context | Professional interpretation | Universal folklore |
| How can motion/WebGL/GSAP be implemented? | Official technical docs | Expert tutorial / Codrops | Awwwards as technical authority |
| What is contemporary execution doing? | Direct observation + curated galleries | Awards/editorial | Effectiveness conclusions |

## 2. Authority ladder used in this project

Retain the existing corpus grading:

- A1 — peer-reviewed empirical.
- A2 — scholarly conceptual/framework.
- B — industry empirical.
- C — practitioner canon/professional method.
- D — popular/opinion.

The ladder does **not** mean A1 always governs. A1 is strongest for empirical questions; a primary technical specification can govern implementation more directly than an academic branding paper.

## 3. Case evidence stack

Every brand/rebrand case should be read through four separate lenses:

### A. PRIMARY CASE ACCOUNT
What agency/client says the problem, strategy, scope, and design decisions were.

### B. PRIMARY VISUAL EVIDENCE
What can actually be inspected: mark, type, color, layout, imagery, graphic devices, motion, digital/product behavior, physical applications.

### C. INDEPENDENT PROFESSIONAL CRITIQUE
Brand New, Brandemia, Design Week, BP&O, It's Nice That, DIELINE, or comparable source where relevant.

### D. OUR INFERENCE
Our diagnosis of why the system works, fails, trades one value for another, or teaches a transferable professional lesson.

Never present D as A or B.

## 4. Distinctiveness router

When the word `distinctive` appears, determine which meaning is intended:

- visually unusual / original → creative judgment;
- recognizable as this brand → attribution question;
- measured distinctive asset → Fame + Uniqueness question;
- differentiated positioning → strategy question.

Do not collapse these.

A highly original shape is not necessarily a distinctive asset. A familiar asset may be highly distinctive without being original.

## 5. Personality router

If asked to translate brand personality into design:

1. Use personality evidence only to define the intended human character or perception.
2. Use visual-personality research as bounded evidence that visual elements can affect perceived personality.
3. Do **not** use a fixed lookup table such as `bold = red`, `sincere = serif`, `innovative = gradient`.
4. Require category, culture, inherited assets, usage contexts, and competitive environment before choosing form.

## 6. Color router

Color claims must be classified as one of:

- physical/perceptual property;
- cultural convention;
- category convention;
- brand-owned learned association;
- aesthetic/creative choice.

Only the last is purely a design decision. Learned brand association requires repeated market use; cultural interpretation is context-sensitive.

## 7. Typography router

Typography can be evaluated for:

- legibility/readability;
- hierarchy and information behavior;
- language/script support;
- expressive character;
- ownership/proprietary potential;
- consistency across system;
- implementation constraints.

Do not treat `typeface personality` as a deterministic psychological effect.

## 8. Motion / generative router

Separate three questions:

**Capability:** Can the technology do it? → official technical docs.

**Craft:** How is it commonly executed? → specialist practice / tutorials / code examples.

**Brand fit:** Should this brand do it? → strategy + observed system + creative judgment.

A technically sophisticated interaction can still be strategically generic.

## 9. Outcome router

If a source reports outcomes such as sales growth, engagement, recognition, valuation, or adoption:

- first-party agency/client metric → label first-party claim;
- independent measured result → state method/timeframe if available;
- correlation after rebrand → never silently convert to causal effect;
- award → craft recognition only, not market effectiveness.

## 10. Unknown handling

Use `UNKNOWN / NOT ESTABLISHED` when the correct evidence is unavailable.

The expert must prefer a bounded answer over a confident category error.