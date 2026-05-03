# Engine Algorithms Plan

## Analyzer (first engine target)
1. Convert SATB events into structural interval observations.
2. Exclude ornamental events per source-note constraints.
3. Evaluate per mode:
   - Harmony mode (common-practice four-part pedagogy)
   - Counterpoint mode (strict/species unless explicitly freer)
4. Emit findings with:
   - violated/satisfied condition,
   - interval class and voices,
   - linked rule row ids and source URLs where available.

## Generator (second engine target)
- Input: melody line + mode + rule-profile + optional fixed voices.
- Strategy: constraint search with pruning (parallel perfects, unresolved dissonances, illegal consecutive limits).
- Ranking: fewer violations, smoother voice-leading, stylistic penalties.

## Special historical guardrails
- Treat decade repetitions as non-evolutionary duplicates.
- Handle `#9/#11` as contextual/rare unless explicit evidence says otherwise.
- Keep uncertainty explicit when source columns are sparse.
