# Geffrey Klein, MD — Practice Website

Marketing and patient-facing website for Geffrey H. Klein, MD (OBGYN &
Obesity Medicine) in Webster, TX. Built on Lovable and hosted at
[geffreyklein.com](https://geffreyklein.com).

All rights reserved. This repository is public for transparency and
collaboration only; no open-source license is granted at this time.

---

## Tech stack

- Vite 5 + React 18 + TypeScript 5
- Tailwind CSS v3 with shadcn/ui
- React Router v7 (route-level code splitting)
- Bun as the package manager and script runner
- Lovable Cloud (Supabase) available but currently dormant — the client is
  installed for future features

## Prerequisites

- [Bun](https://bun.sh) 1.3 or later (`curl -fsSL https://bun.sh/install | bash`)
- Node.js 20+ is only needed if you want to run ancillary tooling; the
  app itself is built and served entirely by Bun + Vite

Do not commit a `package-lock.json`. This repo uses `bun.lockb`
exclusively; committing an npm lockfile causes drift.

## Setup

```sh
git clone <this-repo-url>
cd kleins-womens-care
bun install --frozen-lockfile
bun run dev
```

Dev server runs at http://localhost:8080.

## Environment variables

Client-side variables live in `.env` and are auto-managed by Lovable
Cloud — do not edit them by hand:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

Server-side secrets (used by any future Supabase Edge Functions) are
managed through the Lovable dashboard, not committed to the repository.

## Scripts

| Command             | What it does                            |
| ------------------- | --------------------------------------- |
| `bun run dev`       | Start Vite dev server on port 8080      |
| `bun run build`     | Production build to `dist/`             |
| `bun run build:dev` | Development-mode build                  |
| `bun run preview`   | Preview the production build locally    |
| `bun run lint`      | Run ESLint over the codebase            |
| `bunx tsgo`         | TypeScript type-check (no emit)         |

## Deployment

The site is published through Lovable. Open the project in Lovable and
use **Share → Publish**. The published origin is
`https://geffreyklein.com`; the sitemap and `robots.txt` reference that
domain.

Every push to `main` syncs bidirectionally with Lovable.

## Project structure

```text
src/
  components/         Reusable UI (Hero, About, MochiHealth, ...)
  components/ui/      shadcn/ui primitives — do not fork lightly
  pages/              Route components (lazy-loaded in src/App.tsx)
  integrations/
    supabase/         Auto-generated client + types (do not edit)
  assets/             Images bundled into the build
public/               robots.txt, sitemap.xml, llms.txt, static files
supabase/             Config for Lovable Cloud (currently dormant)
```

## Patient intake

The site does not collect PHI. Appointment requests route out to
IntakeQ hosted forms:

- English: https://intakeq.com/new/stj8ub
- Spanish: https://intakeq.com/new/dr3kda

Any change to intake URLs should be made in `src/pages/Appointment.tsx`.

## Maintenance notes

- **Images**: hero and section artwork are stored as WebP under
  `src/assets/` and `src/assets/generated/`. When adding new imagery,
  convert PNG/JPEG source to WebP (quality 80–85) before importing.
- **Dependencies**: run `bunx npm-check-updates -u` to preview upgrades;
  apply with `bun install` and verify with `bun run build`.
- **Security**: run `bun audit` before merging dependency bumps.
- **Lovable Cloud**: the Supabase client (`@supabase/supabase-js`) is
  installed but no runtime code currently invokes it. Leave it in place
  so future backend features (auth, edge functions) work without
  reinstalling.

## Contact

Site owner: Geffrey H. Klein, MD.
