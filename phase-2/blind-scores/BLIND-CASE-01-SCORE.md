# Blind Case 01 — Score Record

Status: PASS

Case truth: Perplexity — Smith & Diction, 2023.

Evaluator frozen record: `phase-2/blind-runs/BLIND-CASE-01-DIAGNOSIS.md`, commit `be7d0a6`, branch `claude/brand-expert-blind-eval-vl3fs4`.

## Score

- Observation accuracy: 23/25
- System-logic diagnosis: 18/20
- Strategy/design inference discipline: 14/15
- Creative judgment quality: 14/15
- Distinctiveness/evidence discipline: 10/10
- Failure-mode detection: 8/10
- Unknown handling: 5/5

**Total: 92/100 — PASS**

Penalties: none.
Critical failures: none.

## Truth comparison

Primary case source states that Perplexity wanted a brand that felt like a Scandinavian subway system: clean, considered and intentionally "invisible," functioning as a vessel for facts rather than a flashy AI brand. The evaluator independently inferred a calm, credible knowledge instrument with restrained product behavior and correctly separated that inference from observation.

The source documents the symbol as beginning with an asterisk tied to citation behavior, then gaining depth that suggested a revolving door / rolodex; later readings included open-book pages and intersecting windows. The evaluator independently recovered the asterisk, book/pages and multivalent geometry from visuals, and correctly avoided asserting a single canonical meaning.

The source documents FK Display for the wordmark, FK Grotesk / Neue for the broader system, a dark/light product core with restrained teal/blue use plus warmer accents, and extensive product/UI thinking. The evaluator accurately diagnosed typographic restraint, cool-core/warm-accent palette logic, quiet UI mode and an expressive print mode.

## Material misses / limits

1. The evaluator's category claim that star/asterisk marks are heavily used across AI brands is plausible professional context but was not established by the supplied visual package. Keep future blind diagnoses stricter about separating category knowledge from case evidence.
2. Range was judged as thin because the blind package intentionally omitted the broader case system. The source actually includes motion/loading behavior, logo-derived patterns, collage/anti-style brand elements and additional UI thinking. This is not an evaluator error; it is a package-bound limitation correctly surfaced as UNKNOWN / unevidenced.
3. Reproduction fragility and governance-thinness were reasonable risk diagnoses from the supplied material, but the source includes logo sizing recommendations and broader implementation thinking. Treat these as bounded risk hypotheses, not confirmed flaws.

## Calibration note

MISS → FAILURE MODE → WHY IT HAPPENED → OPERATING RULE TO ADJUST → REGRESSION RISK

External category-context claim → mild evidence-scope drift → evaluator imported general category knowledge into a blind visual diagnosis → when using category context not present in the package, label it explicitly as prior professional context and do not use it as supporting evidence for the case diagnosis → overcorrection could make the expert artificially context-blind.

No operating-model rewrite required after Case 01. The existing discipline worked well.
