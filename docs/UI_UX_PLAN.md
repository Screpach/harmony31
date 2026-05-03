# UI/UX Plan (one-screen app)

## Mockup-derived structure
Based on `31-edo_harmony_app_mockup*.png` references (all 1448x1086 variants):
- Central score/work area for SATB note entry and review.
- Side/top control zones for mode selection, generation, analysis, and playback.
- Bottom/adjacent keyboard interaction panel.

## Keyboard mapping treatment
From `31_EDO_keyboard layout.png` (1522x928 reference):
- Represent a 31-step octave map with explicit enharmonic/microtonal labels.
- UI model must expose “step index -> label -> frequency mapping” and allow highlight of analyzed notes.
- Keyboard is functional input + visualization, not merely decorative.

## Interaction flow
1. User enters/edits melody or SATB notes.
2. User triggers Analyze to get rule-linked findings.
3. User triggers Generate with selected constraints.
4. User audits findings, listens playback, and iterates.

## Pedagogy goals
- Plain-language feedback tied to historical source rows.
- Progressive disclosure: beginner defaults, advanced toggles.
