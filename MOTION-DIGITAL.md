# Motion & Digital / Dynamic Brand Identity — Verified Knowledge

Items are labeled **EMPIRICAL**, **PROFESSIONAL PRACTICE**, or **CASE
OBSERVATION**. Animation is *not* treated as automatically distinctive — see
§6, where the only located empirical work shows it can backfire.

**Access disclosure.** Three channels were used, tagged per item:
**FULL PRIMARY** — complete source files read from vendors' own published npm
packages (registry.npmjs.org) and a full clone of IBM's
`carbon-design-system/design-language-website` repository (the source of
ibm.com/design/language); **excerpt** — search-retrieved extracts of the named
page (quotes not verified against the full page); **metadata** — existence/
citation verification only. Direct web fetches were blocked in this
environment.

## 1. Motion as brand behavior — how professional systems codify it

- **IBM Design Language** (FULL PRIMARY — `src/pages/animation/overview.mdx`,
  `classic-principles.mdx`). PROFESSIONAL PRACTICE. Motion framed as voice:
  "Every element we set in motion is an extension of our voice—it must serve
  a purpose, embody precision and communicate clearly." The **Productive vs.
  Expressive** duality is verbatim doctrine ("Productive motion leans toward
  efficiency and responsiveness… Expressive motion is enthusiastic and
  vibrant"), evoking "a particular tone that's identifiably IBM." IBM
  re-interprets Disney's 12 classic animation principles through a
  personality filter — e.g., squash-and-stretch: "refrain from overt
  stretchiness… precision and accuracy, not cartoonish playfulness."
- **IBM motion tokens** (FULL PRIMARY — `@carbon/motion` 11.50.0,
  `src/dtcg/motion.json`): six duration tokens (fast-01 70ms → slow-02 700ms)
  and six easing tokens — standard/entrance/exit each in a **productive** and
  an **expressive** variant with distinct cubic-béziers (standard-productive
  `[0.2, 0, 0.38, 0.9]` vs. standard-expressive `[0.4, 0.14, 0.3, 1]`).
  Brand "attitude" literally encoded as curve values.
- **Material Design** (FULL PRIMARY for `@material/animation` 14.0.0:
  "Material in motion is responsive and natural," four named curves;
  excerpt for M3: Emphasized/Standard easing-token sets, and "M3 Expressive"
  moving to a physics/spring-based system). PROFESSIONAL PRACTICE.
- **Microsoft Fluent 2** (excerpt — fluent2.microsoft.design/motion):
  consistent motion "strengthens Fluent's Unmistakably Microsoft principle" —
  motion consistency framed explicitly as brand recognition; includes
  vestibular-accessibility caveats. PROFESSIONAL PRACTICE.
- **Salesforce Kinetics** (excerpt — Trailhead module + Lightning kinetics
  principles): "an end-to-end motion design identity"; principles
  functional/structural/expressive; four controls (light, direction, speed,
  acceleration). PROFESSIONAL PRACTICE.
- **Audi CI** (excerpt; the audi.com/ci motion page itself was unfetchable —
  flagged): a single brand easing — "powerful acceleration at the start,
  swift deceleration at the end" — derived from the driving behavior of Audi
  cars, applied across UI and film. CASE OBSERVATION via KMS Team / Design
  Week / Prototypr coverage.

**Analyst synthesis (labeled inference):** across five systems the recurring
pattern is (1) a small set of named principles tying motion to stated brand
values, (2) tokenized durations/easings making "brand behavior" enforceable
in code, (3) a two-register split (utility vs. expressive/hero). None of
these documents offers empirical evidence that their motion is *distinctive
to consumers* — this is design doctrine, not tested claims.

## 2. Motion signatures

- **Netflix "ta-dum"** (excerpt — IndieWire, Twenty Thousand Hertz, Classic
  FM, concurring): debuted 2015; led by VP Product Todd Yellin with sound
  editor Lon Bender; Hans Zimmer composed a 16-second theatrical extension
  because the 3-second ident "felt too rushed" for cinema. CASE OBSERVATION —
  existence and origin sourced; **no effectiveness data in any accessed
  source**.
- **Netflix "Stack"** (excerpt — gretelny.com/netflix, Brand New): Gretel's
  2016 motion-native identity concept — cards implying an "infinite,
  ever-changing catalog." CASE OBSERVATION.
- **Audi four-rings ending animation** (excerpt — blackspace.com case):
  documented commissioned signature logo-ending. CASE OBSERVATION.
- HBO ident and Apple boot/startup: **no primary or near-primary source was
  accessible — excluded as claims.**
- **Evidence discipline:** all of the above documents that signatures *exist*
  and *why they were made*; none contains controlled evidence that they
  increase recognition, recall, or preference.

## 3. Responsive / dynamic identity

- **Book (metadata-verified):** Irene van Nes, *Dynamic Identities: How to
  Create a Living Brand*, BIS Publishers, ISBN `9789063692858` (later
  printing `9789063693398`) — a practitioner survey of identities that
  "change and generate new versions based on external data." PROFESSIONAL
  PRACTICE (survey, not research).
- **MIT Media Lab** (excerpt — pentagram.com page located but unfetchable;
  concordant Dezeen/Fast Company/It's Nice That coverage): the 2011
  algorithmic identity generated ~40,000 logo permutations, but the
  randomness "worked against" the Lab (no fixed mark to hand out); the 2014
  Pentagram system kept the 7×7 grid but **fixed** an ML monogram plus 23
  systematic glyphs for research groups. CASE OBSERVATION — a sourced
  counterweight to "more dynamism is better."
- **OCAD University** (excerpt — OCAD's own announcement + Bruce Mau Design):
  2011 modular black-and-white "window" frames filled annually with
  graduating students' artwork — a governed, participatory dynamic identity.
  CASE OBSERVATION.

## 4. Interaction & UI/product expression

- **Shopify Polaris** (FULL PRIMARY — `@shopify/polaris-tokens` 9.4.2,
  `themes/base/motion.mjs`): duration scale 0–500ms (+5000ms); named easings
  with voice-laden usage notes — `motion-ease` "Responds quickly and finishes
  with control"; linear reserved "for continuous and mechanical animations";
  branded keyframes (`motion-keyframes-bounce`). Brand personality
  operationalized as token descriptions engineers consume. PROFESSIONAL
  PRACTICE.
- **Atlassian** (FULL PRIMARY — `@atlaskit/motion` 8.1.0): duration grid
  (`durationStep = 25`; small 100 / medium 350 / large 700ms — "the motion
  equivalent of the theme grid()") and named curves. PROFESSIONAL PRACTICE.
- The Polaris README cites Salesforce's canonical design-token definition
  ("named entities that store visual design attributes") — documenting the
  token lineage from Salesforce UX. (FULL PRIMARY.)

## 5. Static-to-motion coherence

What sourced practice actually documents:

- **Geometry carry-over:** MIT Media Lab's motion-capable glyphs generated
  from the same 7×7 grid as the static mark; Netflix's symbol designed to
  integrate "seamlessly into the existing brand system." (Excerpt.)
- **Personality carry-over:** IBM's rewrite of the 12 classic principles in
  its own tone-of-voice terms (FULL PRIMARY) is the clearest documented
  method — generic animation craft constrained by written brand attributes.
  Audi derives its easing from *product behavior* rather than the static
  mark. (Excerpt.)
- **Honest thinness flag:** beyond these, "derive motion from your static
  identity" methodology exists mostly in agency marketing content —
  promotional and non-neutral. No rigorous or canonical methods document was
  found; the strong sources are individual system docs, not a general method
  literature.

## 6. The empirical base — and why animation is not automatically good

- **EMPIRICAL (abstract-accessed; full text blocked):** Brasel, S.A. &
  Hagtvedt, H., "Living brands: consumer responses to animated brand logos",
  *Journal of the Academy of Marketing Science*, 44, 639–653 (2016), DOI
  `10.1007/s11747-015-0449-2` (Springer page + Boston College announcement).
  Findings per abstract: **agent animation** (a logo that appears to move of
  its own volition) improves attitudes toward *dynamic* firms but **worsens**
  them for *stable* firms; favorable effects require **consistency** between
  the animation's implied personality and other brand cues (slogans, logo
  graphic). Limits: lab studies, attitude measures, ~4 studies.
- **Implication:** the strongest available evidence argues *against* treating
  animation as automatically distinctive or positive — motion helps only when
  congruent with positioning, and can backfire.
- **Overall:** peer-reviewed evidence on motion-branding effectiveness is
  sparse. Design-system claims (e.g., "delightful animation draws people in")
  are unreferenced doctrine. No accessed source quantifies the recognition
  value of any motion signature.
