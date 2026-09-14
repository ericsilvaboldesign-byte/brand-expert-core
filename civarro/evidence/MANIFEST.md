# civarro/evidence — provenance manifest

Internal third-party material. Not for public distribution.

## amd-hpe-agentic-ai-poc.pptx

- **What:** AMD-authored POC pitch deck (AMD-templated), "Anchoring Agentic AI on Edge
  Compute" (AMD and HPE Agentic AI POC), 9 slides.
- **Received:** 2026-09-07, stakeholder upload to this project (original
  filename `AMD_and_HPE_Agentic_AI_.pptx`).
- **sha256:** `f895315ae6823a4ebc32fef66e8febc5eda880cbce0dc9b7d48513b20bd09167`
- **Inspection:** full text extraction of all 9 slides; package media
  inspected directly (AMD template branding only — no content diagrams).
- **Sensitivity:** contains a commercial Market Development Funds ask to HP
  and unannounced POC and company details. Internal evidence only.
- **Record:** [`../AMD-HPE-POC-WEBSITE-EVIDENCE.md`](../AMD-HPE-POC-WEBSITE-EVIDENCE.md)

## civarro-brand-strategy-definitions.pdf

- **What:** "Civarro Brand Strategy" definitions document, 12 sections
  (market context, category landscape, tension, audience, differentiation,
  positioning, proposition + promise, territory, personality, tone of
  voice, principles). Self-described as a content edit based on Claude
  Brand Strategy V4.0 and the early Civarro positioning deck; visual /
  identity territory intentionally parked.
- **Received:** 2026-09-14, stakeholder upload to this project (original
  filename `66cb0478-01_civarro_brand_strategy_definitions.pdf`).
- **sha256:** `828cd5043006d6eac1532633d7bcf72a81d1c2a563719c7d8e38b5b9e66ed9e1`
- **Inspection:** full text extraction of all 12 pages, including each
  page's own Sources footnote (which marks per-item status: approved /
  frozen / proposed / requires primary-source verification).
- **Sensitivity:** internal strategy work product; footnotes reference
  unverified benchmark claims and internal stakeholder discussion.
  Internal evidence only.
- **Record:** used as the brand foundation for
  [`../LANDING-PAGE-ARCHITECTURE.md`](../LANDING-PAGE-ARCHITECTURE.md).

## civarro-landing-page-content-architecture-v1.docx

- **What:** "Civarro — Landing Page Content + Scroll Animation Architecture,
  Working Draft v1" — stakeholder-produced homepage content system: nine
  page beats with site copy and scroll-animation direction, a CTA-by-intent
  system, and motion/representation rules. Cites the brand strategy
  definitions plus NuCompute.ai / NuComputeX public content as benchmark
  cues.
- **Received:** 2026-09-14, stakeholder upload to this project (original
  filename `Civarro_Landing_Page_Content_Architecture_v1.docx`).
- **sha256:** `340fc6a09928dec7a6ca480d97183ce6c1d15df95a976e075e6e43171c83865b`
- **Inspection:** full text extraction of the document body (headings,
  tables, source notes).
- **Sensitivity:** internal working draft; references an unrecorded
  external benchmark source (see
  [`../NUCOMPUTE-BENCHMARK-EVIDENCE.md`](../NUCOMPUTE-BENCHMARK-EVIDENCE.md)).
  Internal evidence only.
- **Record:** merged with the internal v1 architecture/content into
  [`../LANDING-PAGE-CONTENT-ARCHITECTURE-V2.md`](../LANDING-PAGE-CONTENT-ARCHITECTURE-V2.md).

## field-language-review-board-6.zip

- **What:** "Field Language review board 6" — standalone working HTML/canvas
  scene: the Traffic and Capacity lenses of Civarro's Operations globe,
  same engine/field/scene/driver as the product, app chrome removed.
  ~17k lines across swarm core, capacity field, world scene, lens driver,
  traffic overlay, hive, geo data, M3 theme tokens (seed #007D76) and
  Civarro typography CSS.
- **Received:** 2026-09-14, stakeholder upload to this project (original
  filename `Field_Language_review_board_6.zip`).
- **sha256:** `538af14741eb4a997dc00ca72569489d15d8e80e85b8b5b9a79eed091ff41b1e`
- **Inspection:** full source read; executed locally (Chromium) — Traffic
  lens render captured as `field-language-traffic-render.png`. External
  CDN chrome (Material Web, Google Fonts) blocked by this environment's
  network policy; canvas world renders without it.
- **Sensitivity:** internal product prototype; fixtures name real vendors,
  hardware and models (AMD, NVIDIA, Qwen) and AWS-style regions — blocked
  for public use per gate V9a. Internal evidence only.
- **Record:** [`../FIELD-LANGUAGE-BASE.md`](../FIELD-LANGUAGE-BASE.md).

## field-language-traffic-render.png

- **What:** our own verification render of the above (Chromium, dark
  stage, Traffic lens, GLOBAL scale), 2026-09-14. Documentation aid, not a
  stakeholder asset.

## vesper.zip

- **What:** `next16-claude-starter` ("VESPER / V—0RB" demo) by Textura —
  Next.js 16 + React 19 starter for animation-heavy landing pages:
  react-three-fiber WebGL particle scene (orb → galaxy → brain acts on a
  global scroll clock), @react-spring/web animation system,
  spring-text-engine, Lenis, Tailwind v4, SEO/cookie scaffolding, Obsidian
  convention vault with agent-enforcement hooks. 184 files.
- **Received:** 2026-09-14, stakeholder upload to this project (original
  filename `vesper.zip`).
- **sha256:** `668dee741446f1216c7b13f341445d7b390f52214b6dc5b7f98c1bbb5e2b2a16`
- **Inspection:** source and internal docs read (webgl-scene,
  animation-system, design-system, system-overview, shaders). Not executed
  (Next dev build not run in this environment).
- **Sensitivity:** third-party starter, no LICENSE file present — usage
  rights to confirm (gate V10b). Internal evidence only.
- **Record:** [`../VESPER-BASE.md`](../VESPER-BASE.md).
