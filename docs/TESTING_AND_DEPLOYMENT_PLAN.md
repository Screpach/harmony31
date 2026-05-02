# Testing and Deployment Plan

## Prompt 01 sanity checklist (docs-only)
- [ ] All required planning docs exist.
- [ ] Every required source file is explicitly accounted for.
- [ ] Dependency recommendations include license and risk notes.
- [ ] No UI/engine implementation committed.

## Future automated testing layers (Prompts 02-12)
1. Unit tests
   - CSV parsing + schema validation
   - pitch mapping and interval computation
   - rule-evaluation logic
2. Integration tests
   - generate/analyze flows over curated fixtures
3. E2E tests (Playwright)
   - load app, enter notes, run analyze, inspect findings, playback trigger
4. Non-functional checks
   - lint, typecheck, build, dependency license audit

## Deployment plan (browser-first)
- Preferred: Vercel or Netlify preview builds per PR.
- Alternative: Cloudflare Pages or GitHub Pages if static export path is selected.
- Keep no-local-install workflow documented in README and milestone docs.
