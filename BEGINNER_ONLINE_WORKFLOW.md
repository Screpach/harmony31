# Harmonia 31 Prompt Pack — Beginner Online Workflow

## Purpose

This folder contains a sequence of Markdown prompts to paste into Codex or a GitHub coding agent. Each prompt asks the agent to make one safe, reviewable step toward a production-ready web app named **Harmonia 31**.

The app will be a one-screen 31-EDO / 1/4-comma meantone four-voice SATB harmony generator and analyzer. It will use the uploaded source files as primary requirements.

## What GitHub, Codex, PRs, and deployment previews mean

**GitHub repository**: The online folder where the app code, data, tests, and documentation live.

**Codex / GitHub coding agent**: The online assistant that reads a prompt, edits files, runs tests, and opens or updates a pull request.

**Pull request / PR**: A proposed set of code changes. You review it before merging. A PR usually shows changed files, automated test results, and deployment preview links.

**Create PR**: Use this when there is no pull request yet. Prompt 01 ends with **Create PR** because it starts the project work.

**Update PR**: Use this after the first PR exists. Prompts 02 through 12 should add commits to the same PR or update the current working PR, depending on how your Codex/GitHub tool is configured.

**Deployment preview**: A temporary website created from the PR. It lets you click and test the app before merging.

## Browser-first workflow

1. Create a GitHub account if you do not already have one.
2. Create a new GitHub repository named `harmonia-31`.
3. Add the attached source files to the repository, preferably in a folder named `requirements/`:
   - `requirements/19th_century_source_notes.md`
   - `requirements/19th_century_interval_rules.csv`
   - `requirements/31_EDO_chord_kinds_all_inversions.csv`
   - `requirements/31-edo_harmony_app_mockup.png`
   - `requirements/31_EDO_keyboard layout.png`
4. Open Codex or your GitHub coding agent against this repository.
5. Paste prompt `01_SOURCE_RESEARCH_AND_ARCHITECTURE.md` first.
6. When Codex finishes, review the PR files and test results.
7. Then paste prompt `02_APP_SCAFFOLD_AND_DEPLOYMENT.md` into Codex and tell it to update the same PR.
8. Continue through prompt `12_TESTING_EXAMPLES_DOCUMENTATION_RELEASE.md` in order.

## When to use Create PR vs Update PR

Use **Create PR** only for prompt 01. It starts the work and creates the first reviewable pull request.

Use **Update PR** for prompts 02 through 12. Each later prompt must keep the app buildable, testable, and deployable.

## How to attach or reference uploaded files

The safest approach is to commit the files into `requirements/` before starting prompt 01. If your Codex tool supports file attachments, attach the five source files and instruct Codex to copy them into `requirements/` without renaming them.

Do not ask Codex to recreate the image files. The app should use the images as references only. Any visual design needed in the final app should be recreated with code, CSS, SVG, or structured text data.

## How to keep everything online

You do not need to install Node, Xcode, BBEdit, or any other developer tool locally. Use these online tools:

- GitHub for the repository and PR review.
- Codex or a GitHub coding agent for editing and running commands.
- GitHub Codespaces only if you need to manually open a browser terminal.
- Vercel, Netlify, Cloudflare Pages, or GitHub Pages for hosting and previews.

## How to test after each prompt

Each prompt includes verification commands. Codex should run them for you. Typical commands will include:

```bash
npm install
npm run lint
npm run test
npm run build
npm run test:e2e
```

You should also open the deployment preview link and check the visible acceptance criteria listed in the prompt.

## What to do when something fails

If tests fail, paste the failure output into the same Codex PR task and ask Codex to fix the failure without changing the milestone scope. Do not move to the next prompt until the current prompt passes its acceptance criteria.

## Review checklist for every PR update

Before moving to the next prompt, confirm:

- The app builds successfully.
- Tests pass or failures are clearly explained and fixed.
- The deployment preview opens.
- New files match the prompt.
- The app still has no copied proprietary code or assets.
- `THIRD_PARTY_NOTICES.md` is updated whenever a dependency is added.
- The attached CSV and Markdown sources are used as bounded requirements, not ignored.
