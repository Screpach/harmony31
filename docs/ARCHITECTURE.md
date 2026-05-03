# Architecture Plan (Prompt 01)

## Stack decision (browser-first)
- App shell: React + TypeScript + Vite.
- Runtime validation: Zod.
- Notation rendering: VexFlow (with fallback to custom SVG lanes for microtonal annotations where needed).
- Audio: Web Audio API baseline; Tone.js optional abstraction layer.
- Testing: Vitest + Testing Library + Playwright.

## Module boundaries
1. `pitch31/`
   - 31-EDO pitch class + absolute step model.
   - Quarter-comma meantone naming/label mapping.
2. `chords/`
   - Chord-kind parser from `31_EDO_chord_kinds_all_inversions.csv`.
   - Inversion normalization and SATB candidate voicing generation helpers.
3. `rules/`
   - Rule-row parser for `19th_century_interval_rules.csv`.
   - Historical semantics flags (structural-only, harmony-vs-counterpoint mode).
4. `score/`
   - SATB timeline data model (measure/beat/event/voice note).
5. `analyzer/`
   - Structural interval extraction engine.
   - Rule match/evidence production with human-readable messages.
6. `generator/`
   - Constraint-driven harmonization candidate engine.
   - Deterministic seed support for reproducibility.
7. `audio/`
   - Voice scheduler and tuning mapper to Web Audio frequency outputs.
8. `ui/`
   - One-screen layout with editor, analyzer panel, keyboard panel, and playback controls.
9. `test/`
   - Fixture-based parser tests, analyzer rule tests, and browser e2e flows.

## Design invariants
- Historical rules remain source-bounded; unknowns stay explicit (no silent invention).
- Rule decisions are explainable (which row(s), which voices, which interval).
- 31-EDO keyboard mapping is first-class UI state, not decorative art.
