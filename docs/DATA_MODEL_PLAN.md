# Data Model Plan

## CSV schema assumptions
### `19th_century_interval_rules.csv`
Key fields include:
- Identity/context: `era`, `period`, `interval`, `style`.
- Harmony behavior: preparation/resolution/consecutive limits.
- Counterpoint behavior: preparation/resolution/consecutive limits.
- Traceability: `evidence`, `source_keys`, `source_urls`, `decade_specific_evidence`, `original_csv`.

Assumptions:
- `period` decade values are indexing buckets; semantic rule identity is interval+style+mode.
- Empty evidence/source columns are allowed initially and should raise “low-confidence provenance” warnings, not parser failure.
- Quantity fields may contain text tokens like “no source max”; parser must support numeric-or-text policy values.

### `31_EDO_chord_kinds_all_inversions.csv`
Key fields include chord label, formula text, and inversion step vectors.
Assumptions:
- Inversion columns may be blank when inversion depth does not apply.
- Step vectors are serialized arrays (e.g., `[0, 10, 18]`) requiring strict parse/validation.

## Core TS domain types (planned)
- `Pitch31`, `VoiceId`, `SatbEvent`, `SatbScore`.
- `IntervalRuleRow`, `RulePolicyValue`, `RuleEvidenceRef`.
- `ChordKindRow`, `ChordInstance`, `VoicingCandidate`.
- `AnalysisFinding` with severity, location, and source-row references.

## Unknowns to resolve in Prompt 02+
- Canonical mapping from textual interval labels (`#4`, `bb7`, `b13`) to 31-step distances in every context.
- Preferred rule conflict resolution priority when harmony and counterpoint rows disagree.
