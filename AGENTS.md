# Portfolio (Next.js)

## Tech Stack
- Next.js 15 App Router with Turbopack (`npm run dev`)
- Tailwind CSS v4 (CSS-first config, no `tailwind.config.ts`)
- shadcn/ui (style: new-york, Radix UI primitives)
- React 19, TypeScript strict mode
- Vercel Analytics + Speed Insights integrated
- Framer Motion for animations
- MDX for blog posts

## Path Aliases
- `@/*` → `./src/*`
- `@/components` → `./src/components`
- `@/lib/utils` → `./src/lib/utils`
- `@/components/ui` → `./src/components/ui`
- `@/datas` → `./src/datas`
- `@/utils` → `./src/utils`

## Commands
```bash
npm run dev      # Dev server with Turbopack on :3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
```

## Architecture

### Single-Page Layout
Main page at `src/app/(home)/page.tsx` combines all sections:
1. Hero - Animated intro with particles
2. About - Bio with animated stats
3. Skills - Interactive tech grid
4. Experience - Timeline with expandable cards
5. Projects - Case study cards with modal details
6. Blog - MDX-powered articles
7. Contact - Form + social links
8. Footer - Minimal design

### Components Location
- `src/components/` - All page sections (Hero, About, Skills, etc.)
- `src/components/ui/` - UI primitives (button, navigation-menu, sheet, ThemeToggle)
- `src/contexts/ThemeProvider.tsx` - Theme context (dark/light/system)
- `src/content/blog/` - MDX blog posts

### Data
- `src/datas/data.ts` - All static data (personalInfo, projects, experiences, etc.)
- `src/utils/types/types.ts` - TypeScript type definitions
- `src/utils/iconUtils.tsx` - Skill icons mapping

## Theme System
- Dark mode is default
- Toggle: dark/light/system in navbar
- Uses CSS custom properties via `@theme inline` in globals.css
- Theme state persisted in localStorage

## Tailwind v4 Notes
- Config via CSS: `@import "tailwindcss"` in `globals.css`
- Design tokens defined in `@theme inline` block
- Use `var(--variable)` for colors

## Social Icons
- Use `react-icons/fa` for social icons (FaGithub, FaLinkedin, FaTwitter)
- Do NOT use lucide-react for social icons (missing from this package)

## No Tests
- No test framework configured; no test scripts in package.json

## Key Files to Update Content
- `src/datas/data.ts` - Personal info, projects, experience
- `src/content/blog/` - Add new MDX blog posts here
- `public/photos/` - Profile and project images
- `public/files/` - Resume PDF
