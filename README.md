# RDev Academy

**Create. Learn. Develop.** A free, independent learning hub for Roblox development.

This repository contains the first working website implementation. It is designed mobile-first and opens directly into public learning content. There are no accounts, login screens, registration flows, authentication packages, or account database tables.

## What is included

- Home dashboard and eight learning-path categories
- Starter written lessons covering Studio, Luau, UI, level design, gameplay events, networking, and portfolios
- Lesson detail pages with objectives, code examples, explanations, exercises, and references
- Search, bookmarks, local completion tracking, and a knowledge explorer
- Editable Luau text playground with copy/reset; it does **not** execute Roblox engine code
- Six selectable themes, reading density, and reduced-motion setting
- Policy center with general, readable drafts
- IndexedDB local learner state with localStorage fallback
- Basic service-worker caching for selected static resources
- Hono Worker API, D1 public-knowledge schema, and Cloudflare Vite integration

## Technology

React, TypeScript, Vite, Tailwind CSS v4, Lucide React, Cloudflare Workers, Hono, D1, and the Cloudflare Vite plugin. R2 is intentionally not part of the initial architecture.

## Run and build

Requires a current Node.js LTS release and npm.

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

`package-lock.json` is committed to make dependency resolution reproducible. `npm install` and `npm run build` have been run successfully for this initial implementation. The build checks TypeScript and generates the Cloudflare Worker and client assets; no deployment was performed.

## Cloudflare setup

1. Push this repository to GitHub.
2. In Cloudflare, create a Worker project connected to the GitHub repository and enable Workers Builds.
3. Create a D1 database named `rdev-academy-knowledge`.
4. Run `database/schema.sql` against that database using the D1 dashboard.
5. Replace `REPLACE_WITH_YOUR_D1_DATABASE_ID` in `wrangler.jsonc` with the real database ID from your Cloudflare dashboard.
6. Confirm the Cloudflare Vite plugin build configuration in the current Cloudflare dashboard/runtime before the first deployment. Do not add a fake account ID or database ID.
7. Use `npm run build` as the build command and deploy the generated Worker through the connected Cloudflare project.

The D1 API currently exposes published knowledge metadata only. The starter lessons are bundled with the frontend so the public learning experience works without D1. D1 is optional until you choose to manage a larger public knowledge index there.

## Local learner data

Bookmarks, completed lessons, theme, density, and reduced-motion preference are stored in the current browser profile. They do not synchronize across devices and may be lost if browser data is cleared or evicted. This is not an account or backup service.

## Knowledge and AI status

The architecture leaves room for an internally controlled knowledge pipeline. This initial website does not run a hosted AI model, does not call an external AI inference API, and does not claim automated verification. The visible lessons are starter educational material with source links; the “Published” label means included in this starter library, not independently audited.

The RLF (RDev Learning Format) is intended as an internal versioned content format. A formal package schema and ingestion pipeline remain future implementation work.

## Policies

The About page includes general drafts for the policy topics listed in the project specification. They avoid invented addresses, organizations, or contact details. Configure a real reporting route before relying on it operationally, and update the privacy text if actual hosting or analytics practices change.

## Important limitations

- This is source code, not a deployed website. No Cloudflare account or deployment credentials were available here.
- The code playground is an editor, not a Luau runtime or Roblox Studio emulator.
- Offline support is basic and limited to resources already cached by the browser.
- D1 is a public knowledge metadata store; it is not required to read the bundled starter lessons.
- No independent legal review, universal compliance guarantee, or official Roblox relationship is claimed.
