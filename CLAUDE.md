# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Linkify is a static landing page built with Next.js 14. All content is static — no dynamic data fetching, no backend, no auth.

## Commands

```bash
pnpm install       # Install dependencies (uses pnpm, not npm)
pnpm dev           # Start Next.js dev server on http://localhost:3000
pnpm build         # Production build
pnpm lint          # Run ESLint (next/core-web-vitals)
pnpm start         # Run production server
```

## Architecture

**Routing:** Next.js 14 App Router. The `(marketing)` route group contains all landing page sections (hero, features, pricing, etc.).

**UI Components:** shadcn/ui built on Radix UI primitives, styled with Tailwind CSS. Custom animated components (`AnimatedBeam`, `BorderBeam`, `MagicCard`, `Lamp`, `BentoGrid`) live in `src/components/ui/`. Use the `cn()` utility from `src/utils/functions/cn.ts` for class merging.

**Constants & Config:** Site-wide config (app name, nav links, pricing tiers, animation variants) lives in `src/utils/constants/`. Import via the `@/utils` barrel.

## Conventions

- Use `@/` path alias (maps to `src/`) for all imports
- Tailwind CSS with HSL CSS variables for theming; dark mode is class-based
- Framer Motion animation variants are defined in `src/utils/constants/animation.ts` — reuse them instead of inline variants
- Metadata helpers live in `src/utils/functions/metadata.ts`
