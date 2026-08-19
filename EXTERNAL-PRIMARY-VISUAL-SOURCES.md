# External Primary Visual Sources — Phase 1C Support

Status: SOURCE DISCOVERY / ACQUISITION HANDOFF ONLY

Purpose: identify additional training cases whose PRIMARY visual/design material is reachable through GitHub-based channels, so the visual corpus can expand without lowering the evidence standard or asking the owner to manually collect assets.

Do not treat any case below as VERIFIED TRAINING CASE until the material is actually acquired into `visual-corpus/training/<case>/`, visually inspected, and classified using `CASE-EVIDENCE-STANDARD.md`.

## Existing partial cases to preserve

The current Phase 1C acquisition report already records four cases at defensible PARTIAL VISUAL PRIMARY: Uber, Slack, Mastercard, TikTok. These remain valid partial inputs and should not be discarded.

## GitHub-reachable primary candidates

### 1. NixOS

Primary repository: `NixOS/branding`

Why it qualifies as a strong acquisition candidate:
- official organization-owned branding repository
- explicit branding guide and media kit
- logo variants
- color palette
- typography specifications
- generated visual assets
- intended use across web, presentations, print, merchandise, and social

Acquisition target:
- compiled/current branding guide PDF
- primary logo variants and construction assets
- color definitions
- typography assets/specifications
- representative generated applications where available

Target evidence level: FULL VISUAL PRIMARY if the guide and representative assets can be rendered/inspected; otherwise bounded PARTIAL VISUAL PRIMARY.

### 2. AsyncAPI

Primary repository: `asyncapi/brand`

Why it qualifies:
- official organization-owned brand repository
- explicit brand guidelines
- logos
- colors
- typography
- illustrations
- branded tools
- mascot/iconography material

Acquisition target:
- brand-guidelines content
- representative logo variants
- color system
- typography examples
- illustration/mascot assets
- branded application examples where available

Target evidence level: FULL VISUAL PRIMARY if guidelines + multiple asset families are visually inspectable.

### 3. AtlasOS

Primary repository: `Atlas-OS/branding`

Why it qualifies:
- official organization-owned branding repository
- dedicated `brand_guidelines_atlasos.pdf`
- logomarks
- wordmarks
- icons
- banners
- wallpapers
- other applied brand assets

Acquisition target:
- official branding-guide PDF
- logomarks and wordmarks
- icon family
- banners/wallpapers as graphic-language evidence
- typography/color rules from the guide

Target evidence level: FULL VISUAL PRIMARY if the guide and representative assets can be rendered/inspected.

### 4. IBM / Carbon ecosystem

Primary repositories and documentation:
- `carbon-design-system/carbon`
- `carbon-design-system/carbon-design-kit`
- `IBM-Design/colors` (archived but official primary historical library)
- `IBM-Design/icons` (archived but official primary historical library)
- IBM Design Language official documentation

Why it qualifies:
- unusually complete relationship between brand language and implemented digital system
- typography, color, grid, iconography, pictograms, components and interaction are documented as a connected system
- Carbon explicitly states IBM Design Language as its foundation

Important boundary:
This is especially strong for DIGITAL BRAND BEHAVIOR / PRODUCT EXPRESSION. Do not pretend Carbon alone represents the whole IBM corporate identity.

Acquisition target:
- current Carbon design-kit visual assets
- typography/text styles
- color libraries/tokens
- grid templates
- iconography/pictograms
- representative UI components
- motion/interaction documentation where available

Target evidence level: FULL VISUAL PRIMARY for the product/digital-expression scope, with corporate-brand dimensions explicitly bounded.

## Why these four

Together with Uber, Slack, Mastercard and TikTok, these candidates can produce an initial eight-case visual base without depending on currently blocked agency sites.

They add missing evidence dimensions:
- graphic-language systems
- illustration/iconography
- broader layout/application evidence
- complete brand-guide PDFs
- stronger product/digital system evidence

They do NOT solve every diversity gap. The resulting corpus would still skew technology/digital and should later be supplemented with packaging, physical/environmental, consumer and non-Western identity systems when primary visual access becomes available.

## Acquisition instruction

The next acquisition pass should work directly from the four official repositories above. It must:

1. copy only primary materials actually present in the official repositories;
2. preserve source URL/path and commit/ref where practical;
3. render PDFs/SVGs or other visual formats when necessary for actual inspection;
4. acquire enough representative material to reveal system logic rather than simply collecting every asset;
5. classify each case using the existing four-level evidence standard;
6. refuse to promote any case solely to meet the eight-case target;
7. perform acquisition only — no cross-case synthesis and no Phase 2.

## Readiness criterion

Phase 1C visual observation may begin when at least eight cases in total (existing + newly acquired) reach FULL VISUAL PRIMARY or defensible bounded PARTIAL VISUAL PRIMARY, and the corpus contains enough evidence across mark, typography, color, layout/graphic language, imagery/illustration, digital/UI and—where possible—motion or physical application to analyze system logic rather than isolated assets.
