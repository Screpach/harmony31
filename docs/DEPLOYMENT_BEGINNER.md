# Deployment Beginner Guide

Primary recommended path: **Vercel** (fastest beginner PR previews).

## Vercel (recommended)
1. Go to vercel.com and sign in with GitHub.
2. Click **Add New -> Project**.
3. Import `harmonia-31` repository.
4. Keep defaults (Framework: Vite, Build: `npm run build`, Output: `dist`).
5. Click **Deploy**.
6. For PR previews, ensure GitHub integration remains enabled.

## Netlify
- New site from Git, choose repo, build `npm run build`, publish `dist`.

## Cloudflare Pages
- Create project from Git, build `npm run build`, output `dist`.

## GitHub Pages
- Use GitHub Actions static deploy flow after `npm run build`; publish `dist` artifact.
