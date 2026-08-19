# Training Source Manifest — Phase 1C Acquisition

Status: SOURCE MANIFEST ONLY — not visual analysis, not methodology.

Purpose: define a defensible eight-case training set and the primary-source paths needed to acquire enough visual evidence for later Phase 1C observation.

## Existing acquired cases

### 1. Uber
Current evidence: PARTIAL VISUAL PRIMARY.
Primary channels already acquired in repo: Uber-published Base Web package / official Uber repositories.
Useful dimensions already present: wordmark, typography scale, color tokens, grid, UI themes, motion tokens.
Still needed where obtainable: broader brand graphic language, imagery, physical applications, brand-motion examples.

### 2. Slack
Current evidence: PARTIAL VISUAL PRIMARY.
Primary channels already acquired in repo: Slack Platform Design Team / official Slack repositories.
Useful dimensions already present: post-2019 mark, comparison mark, Slack Platform UI kit.
Still needed where obtainable: typography, brand palette, illustration/graphic language, motion, physical applications.

### 3. Mastercard
Current evidence: PARTIAL VISUAL PRIMARY.
Primary channels already acquired in repo: Mastercard-published repositories / MADE design-system material.
Useful dimensions already present: symbol construction, official color values, selected design tokens/lockups.
Still needed where obtainable: typography in use, broader layout/graphic system, imagery, motion, physical applications.

### 4. TikTok
Current evidence: PARTIAL VISUAL PRIMARY — typography deep.
Primary channels already acquired in repo: official TikTokSans repository.
Useful dimensions already present: variable font, designspace, specimen, typography behavior.
Still needed where obtainable: mark system, color, layout, graphic language, imagery, motion, UI/physical applications.

## New primary-source training targets

### 5. IBM
Target evidence level: FULL VISUAL PRIMARY if the official IBM Design Language source and assets can be acquired sufficiently; otherwise bounded PARTIAL VISUAL PRIMARY.
Primary source family:
- IBM Design Language — https://www.ibm.com/design/language/
- Color — https://www.ibm.com/design/language/color/
- Animation overview — https://www.ibm.com/design/language/animation/overview/
- Animation tips and techniques — https://www.ibm.com/design/language/animation/tips-and-techniques/
- Layout overview — https://www.ibm.com/design/language/layout/overview/
- IBM logo guidance — https://www.ibm.com/design/language/ibm-logos/8-bar/
- Resources — https://www.ibm.com/design/language/resources/
Why selected: unusually complete primary documentation spanning mark, IBM Plex typography, color, layout/grid, photography, illustration, iconography, data visualization, motion, UI/product expression and physical communication.
Important boundary: IBM has already been used as a professional-practice source in Phase 1; it is therefore a training case, not a blind holdout.

### 6. Mozilla
Target evidence level: FULL VISUAL PRIMARY if the official Mozilla Dot Design material and assets can be acquired sufficiently; otherwise bounded PARTIAL VISUAL PRIMARY.
Primary source family:
- Mozilla Brand — https://mozilla.design/mozilla/
- Logo & Usage — https://mozilla.design/mozilla/logo-usage/
Why selected: primary brand system with explicit logo construction/usage, Zilla Slab identity typography, type scale, lockups, approved artwork and visual examples.
Useful dimensions to acquire: logo, typed-logo behavior, typography, lockups, visual artwork, layout examples, approved applications.

### 7. Atlassian
Target evidence level: FULL VISUAL PRIMARY if official design-system pages/assets can be acquired sufficiently; otherwise bounded PARTIAL VISUAL PRIMARY.
Primary source family:
- Foundations — https://atlassian.design/foundations
- Logos — https://atlassian.design/foundations/logos
- Typography — https://atlassian.design/foundations/typography
- Color — https://atlassian.design/foundations/color-new/
Why selected: mature official system connecting corporate/app logos, brand and product typography, color, spacing/grid, iconography, illustration and UI foundations.
Useful dimensions to acquire: Atlassian master mark and app-logo architecture, Charlie Sans vs app typography, color system, grid/spacing, illustrations, digital/product expression.

### 8. GitLab
Target evidence level: FULL VISUAL PRIMARY if official Pajamas Brand Guidelines and linked assets can be acquired sufficiently; otherwise bounded PARTIAL VISUAL PRIMARY.
Primary source family:
- Brand introduction — https://design.gitlab.com/brand-introduction/
- Core logo — https://design.gitlab.com/brand-logo/core-logo/
- Typography — https://design.gitlab.com/brand-design/typography/
- Color — https://design.gitlab.com/brand-design/color/
- Brand assets — https://design.gitlab.com/get-started/brand-assets/
- Press kit — https://about.gitlab.com/press/press-kit/
Why selected: official brand guidance with the Tanuki/core logo, GitLab Sans/Mono, controlled color system, explicit typographic repetition as an expressive device, product/brand design-system connection and downloadable assets.
Useful dimensions to acquire: logo/logomark, typography, color, expressive type behavior, visual-design patterns, diagrams/illustration where public, product/brand relationship.

## Diversity of the eight-case set

The selected set intentionally mixes:
- corporate technology brand system: IBM
- open-source/internet brand identity: Mozilla
- product-suite / brand-architecture system: Atlassian
- developer-platform brand + product system: GitLab
- mobility/product UI system: Uber
- collaboration/SaaS: Slack
- global payments identity: Mastercard
- social/content platform with custom typography: TikTok

This is not claimed to be a universal sample of brand design. The corpus remains weighted toward digital/technology and must retain that limitation during later synthesis.

## Acquisition rule

For each target, acquisition must prefer actual PRIMARY visual material from the organization that owns or authored the system. Every saved asset must record provenance. Do not reconstruct missing components from memory or search snippets.

A case can become VERIFIED TRAINING CASE only at FULL VISUAL PRIMARY or defensible PARTIAL VISUAL PRIMARY with explicit missing dimensions.

If a target cannot be acquired at the required threshold in the execution environment, mark it INSUFFICIENT VISUAL EVIDENCE and replace it with another primary-source case rather than lowering the standard.

## Holdout boundary

Do not use or inspect the cases in `BLIND-HOLDOUTS.md` during training acquisition or analysis. Known-canon calibration cases remain separate from blind evaluation.

## Next gate

Do not begin Phase 2. Once at least eight cases reach the evidence threshold, run Phase 1C Visual Case Observation using the existing observation / source-stated / inference separation.