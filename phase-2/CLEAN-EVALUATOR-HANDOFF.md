# Clean Evaluator Handoff — Brand Expert Core

Status: READY TO RUN IN A CLEAN SESSION

Purpose: run the Phase 2 blind evaluation without contaminating the evaluator with the holdout truth key.

## Critical isolation rule

The evaluator must NOT read:

- `BLIND-HOLDOUTS.md`
- `HOLDOUT-CASES.md`
- agency/client case-study text for the holdout case
- editorial reviews of the holdout case
- any file that names the holdout agency or explains its strategy before the evaluator response is frozen

If any of these are exposed, that case is invalid as blind evidence.

## Evaluator may read

- `phase-2/README.md`
- `phase-2/EXPERT-OPERATING-MODEL.md`
- `phase-2/EVIDENCE-ROUTER.md`
- `phase-2/BRAND-DIAGNOSIS-PROTOCOL.md`
- `phase-2/STRATEGY-TO-DESIGN.md`
- `phase-2/CREATIVE-JUDGMENT-RULES.md`
- `phase-2/FAILURE-MODES.md`
- `phase-2/EVAL-PROTOCOL.md`
- source/knowledge documents that do not expose the reserved case truth

The evaluator should NOT inspect the 12 training-case dossiers during the blind run unless the evaluation design explicitly wants retrieval-augmented expert behavior. For the first test, use the operating documents only to make the test harder and cleaner.

## Input package per case

Provide an anonymized directory such as:

`eval-input/case-01/`

containing only primary visual material sufficient to inspect system behavior:

- mark/wordmark where relevant;
- 4–8 applications;
- type/layout examples;
- motion clip/frames if central;
- physical/product examples if central.

Do not include explanatory filenames such as `agency-strategy-motion-system.mp4`. Use neutral filenames: `01.png`, `02.png`, etc.

## Exact evaluator instruction

Read the allowed Phase 2 operating files. Analyze the supplied anonymous case using `BRAND-DIAGNOSIS-PROTOCOL.md` and `CREATIVE-JUDGMENT-RULES.md`.

Return exactly:

1. OBSERVATION
2. SYSTEM LOGIC
3. APPARENT DESIGN PROBLEM — clearly labeled inference
4. CREATIVE JUDGMENT
5. RISKS / FAILURE MODES
6. UNKNOWN

Rules:
- Do not identify or guess the agency.
- Do not search for the case or brand.
- Do not read external case-study rationale.
- Do not infer commercial effectiveness from visual quality.
- Do not call any observed device a measured distinctive asset without measurement evidence.
- Record uncertainty explicitly.

Save the result before any truth reveal.

## Scorer handoff

A separate truth-keeper/scorer then:

1. freezes the evaluator output;
2. reads `BLIND-HOLDOUTS.md` and the relevant primary case source;
3. scores using `phase-2/EVAL-PROTOCOL.md`;
4. writes a separate calibration record;
5. never edits the original evaluator response.

## Recommended run order

Run at least six valid cases before deciding pass/fail. Ensure the tested set includes:

- at least one physical/packaging-led system;
- at least one motion-led system;
- at least one corporate/product system;
- at least one expressive identity;
- at least one restrained/systematic identity.

The exact brands are determined only by the truth keeper from the reserved holdout set.

## Release rule

Do not use the Brand Expert Core as validated expert input for consequential client visual-definition work until the blind threshold in `EVAL-PROTOCOL.md` is passed and any critical/major misses are calibrated.