# THIRD_PARTY_NOTICES (Planning Stage)

Date reviewed: 2026-05-02

| Dependency | License | URL | Planned usage | Why chosen | Risks/notes |
|---|---|---|---|---|---|
| React | MIT | https://github.com/facebook/react | UI runtime | Mature ecosystem for browser-first app | Bundle size and state complexity if unmanaged |
| TypeScript | Apache-2.0 | https://github.com/microsoft/TypeScript | Type-safe domain modeling | Prevents silent data-model drift | Requires strict config discipline |
| Vite | MIT | https://github.com/vitejs/vite | Build/dev server scaffold | Fast setup for beginner-friendly online workflow | Plugin choices can increase complexity |
| VexFlow | MIT | https://github.com/vexflow/vexflow | Music notation rendering | Browser-native notation rendering, open ecosystem | Microtonal engraving may need SVG augmentation |
| Tone.js (optional) | MIT | https://github.com/Tonejs/Tone.js | Audio scheduling/synthesis abstraction | Higher-level musical timing over Web Audio | API overhead vs direct Web Audio |
| Zod | MIT | https://github.com/colinhacks/zod | Runtime validation for CSV/domain inputs | Clear schema errors and safe parsing | Large schemas can become verbose |
| Vitest | MIT | https://github.com/vitest-dev/vitest | Unit/integration tests | Vite-native test speed and DX | Needs disciplined fixture strategy |
| Testing Library | MIT | https://github.com/testing-library/react-testing-library | UI behavior tests | User-centric assertions | Might miss deep visual regressions |
| Playwright | Apache-2.0 | https://github.com/microsoft/playwright | End-to-end browser tests | Reliable cross-browser automation | CI browser binaries increase runtime |
| Radix UI Primitives (optional) | MIT | https://github.com/radix-ui/primitives | Accessible low-level UI primitives | Accessibility baseline with composability | Additional dependency surface |
| lucide-react (optional) | ISC | https://github.com/lucide-icons/lucide | Iconography | Permissive lightweight icon set | Must avoid overuse/clutter |

## Proprietary inspiration boundary
Public research references used for product-study context only:
- FPH: https://vsw-studio.eu/fph
- HarmonyWiz: https://www.wizdommusic.com/apps/harmonywiz/
