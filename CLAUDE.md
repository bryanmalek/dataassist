# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DataAssist is a static landing page for a digital hygiene / cybersecurity platform. It monitors personal data on the dark and deep web and sends real-time alerts via WhatsApp or email. No backend, no auth, no database — fully static.

## Commands

```bash
pnpm install       # Install dependencies (uses pnpm, not npm)
pnpm dev           # Start Next.js dev server on http://localhost:3000
pnpm build         # Production build
pnpm lint          # Run ESLint (next/core-web-vitals)
pnpm start         # Run production server
```

## Multilingual System (ES/EN — critical)

Language is managed client-side via React Context. Every component that renders user-facing text must use this pattern:

```tsx
"use client";
import { useLanguage } from "@/hooks/use-language";
import { translations } from "@/utils/constants/translations";

const MyComponent = () => {
    const { language } = useLanguage();
    const t = translations[language];
    // use t.section.key
};
```

- **`src/utils/constants/translations.ts`** — Single source of truth for all ES/EN strings, structured by section (`hero`, `features`, `faq`, `pricing`, etc.)
- **`src/components/providers/language-provider.tsx`** — Context provider; persists choice to `localStorage` under key `da-language`
- **`src/hooks/use-language.ts`** — `useLanguage()` hook; throws if used outside `LanguageProvider`
- **`src/components/ui/language-toggle.tsx`** — ES/EN toggle button rendered in the navbar

The `LanguageProvider` wraps the entire app via `src/components/providers/providers.tsx` → `src/app/layout.tsx`.

## Architecture

**Routing:** Next.js 14 App Router. `src/app/(marketing)/page.tsx` is the single landing page — it is a `"use client"` component because it needs `useLanguage()`. All nav anchor links use `/#section-id` hashes.

**Data flow for bilingual constants:** Structured data lives in `src/utils/constants/` with embedded `{ es: string; en: string }` fields. Components index into them with `[language]`.
- `PLANS` in `pricing.ts` — each field is `{ es: string; en: string }`, consumed by `PricingCards`
- `PROCESS` in `misc.ts` — each `title`/`description` is `{ es: string; en: string }`, consumed directly in `page.tsx`
- Pure text content (hero, FAQ, blog posts, reviews) lives in `translations.ts`

**UI Components:** shadcn/ui on Radix UI primitives, styled with Tailwind CSS. Custom animated components (`BorderBeam`, `MagicCard`, `LampContainer`, `BentoGrid`) live in `src/components/ui/`. Use `cn()` from `@/utils` for class merging.

**Security Quiz (`src/components/security-quiz.tsx`):** Fully client-side, no backend. 5 questions with weighted scores (0–25 pts). Results threshold: `<45%` = High Risk, `<75%` = Moderate, `≥75%` = Strong. Uses `useLanguage()` for bilingual questions and results.

**Bento Grid (`src/components/ui/bento-grid.tsx`):** Exports `CARDS` (structural/visual data: icon, background JSX, className, href) and `BentoCard`/`BentoGrid`. The home page overrides `name`, `description`, and `cta` props with translated strings from `translations.ts`.

## Conventions

- Use `@/` path alias (maps to `src/`) for all imports
- Page is `"use client"` — avoid adding server-only APIs; keep everything static
- Tailwind CSS with HSL CSS variables for theming; dark mode is class-based
- Primary brand color is violet (`text-violet-500`, `bg-violet-500`) — not purple
- Blog post images go in `public/assets/` as `blog-01.jpg`, `blog-02.jpg`, `blog-03.jpg`
- Section anchors follow pattern `id="features"`, `id="quiz"`, `id="pricing"`, `id="blog"`, `id="faq"`, `id="contact"`
- Framer Motion animation variants are in `src/utils/constants/animation.ts`
