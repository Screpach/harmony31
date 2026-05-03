# Requirements Traceability — Prompt 01

## Source inventory (authoritative)
- `requirements/19th_century_source_notes.md` — textual interpretation boundaries for historical interval rules.
- `requirements/19th_century_interval_rules.csv` — normalized rule table.
- `requirements/31_EDO_chord_kinds_all_inversions.csv` — chord vocabulary and inversion step maps.
- `requirements/31-edo_harmony_app_mockup.png` (+ variant snapshots `_1.._3`) — UI composition reference.
- `requirements/31_EDO_keyboard layout.png` — 31-EDO keyboard mapping reference.

## Direct trace map
- Historical semantics constraints are captured in `docs/ENGINE_ALGORITHMS_PLAN.md` and `docs/ARCHITECTURE.md`.
- CSV field assumptions and validation plan are captured in `docs/DATA_MODEL_PLAN.md`.
- Mockup-derived layout/controls and keyboard treatment are captured in `docs/UI_UX_PLAN.md`.
- Dependency/license decisions are captured in `THIRD_PARTY_NOTICES.md`.

## Critical interpretation constraints from source notes
- Decade rows are repeated indexing buckets, not evidence of decade-specific rule changes.
- “Structural interval” excludes purely ornamental passing/neighbor/suspension events.
- Harmony rows are common-practice four-part pedagogy assumptions.
- Counterpoint rows are strict/species assumptions unless explicit chromatic freedom is stated.
- `#9` and `#11` are contextual/rare in this corpus, not default jazz-extension behavior.
