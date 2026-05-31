# clientes — landing page for CompuMark

Landing page for a WISP / IT-repair business. Single-page marketing site + `/app` gallery.

## Stack (non-obvious specifics)

- Next.js 16 (App Router) + React 19 + TypeScript 5 — APIs may differ from earlier versions
- Tailwind CSS v4 (`@import "tailwindcss"`, `@theme inline` directive — not v3)
- ESLint 9 flat config (`eslint.config.mjs`)
- Animations: `framer-motion` + custom CSS keyframes in `globals.css`
- Icons: `lucide-react`

## Commands

```sh
npm run dev      # dev server on :3000
npm run build    # production build
npm run start    # start production server
npm run lint     # ESLint flat config
```

## Architecture

- Two routes: `/` (marketing) and `/app` (gallery with carousel)
- `@/*` maps to `./src/*`
- 13 page-section components under `src/components/`, all `"use client"`
- Custom dark-theme CSS vars in `globals.css` (`--background`, `--foreground`, etc.)
- WhatsApp FAB (`wa.me/51947237074`) on both pages

## Conventions

- Spanish locale (`lang="es"`)
- No tests configured
- `.env*` gitignored — provide `.env.local` for any local secrets
- All components are default exports; `"use client"` directive on any component using hooks or interactivity
