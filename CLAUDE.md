# my-site

Ayrton Wong's personal portfolio. Vite 8 + React 19 + TS 6 (strict) + Tailwind 4 + React Router (data mode). Spec and deviations log: `docs/SPEC.md`. Build plan: `docs/PLAN.md`.

## Commands

- `npm run dev` · `npm run build` · `npm run preview`
- `npm run lint` (oxlint + jsx-a11y) · `npm run typecheck` · `npm test` (vitest) · `npm run test:e2e` (Playwright + axe, builds and serves a preview) · `npm run test:launch` (launch gate, fails until M8 inputs land) · `npm run format` (prettier)
- lint, typecheck, test and build must pass before a commit/PR (CI also runs test:e2e). Outstanding inputs and decisions live in `docs/NEEDS.md`; check it before asking Ayrton for something.

## Conventions

- **Layers only depend downward:** `content` → `lib` (pure, unit-tested) → `components/ui` → `features/*` → `pages` → `app`.
- **Content is data.** No personal text in components; it lives in typed files in `src/content/`. One source per fact (name, emails, links from `profile`; roles from `experience`).
- **No placeholder text ships** (`/placeholder|lorem|TODO/i`); `content.test.ts` enforces it. Person Tracker stays out of the content array until its text is real.
- **Tokens:** CSS vars in `src/index.css` (light `:root`, dark `:root[data-theme='dark']`), mapped into Tailwind via `@theme inline` (`bg-bg`, `text-text-2`, `border-border`, `text-accent-text`). Use `text-3` for small text; `text-decor` is decorative only.
- **Native platform first:** `<details>` (résumé), `popover` (mobile menu), IntersectionObserver (reveals), View Transitions (theme), React 19 `<title>`/`<meta>`. No animation lib, UI kit, state lib, or CSS-in-JS.
- **Accessibility (WCAG 2.2 AA):** landmarks, skip link, one `<h1>` per page, accent focus rings, 44px touch targets, `aria-label` on icon buttons, `rel="noopener"` on external links. Content must be visible with animation off.
- **Library docs:** use `npx ctx7@latest` (see the global ctx7 rule) before writing against React Router, Tailwind, Vite, Vitest, etc.
- Deviating from the Figma is allowed when engineering/UX/a11y judgment says so; log it in `docs/SPEC.md` → "Deviations from Figma".

## Git

- Default branch is `master` locally (plan said `main`). One branch per milestone (`feat/m1-shell`, …); Conventional Commits; PR with CI green.
- This dir is its own git root; never stage from outside it. `design/` is gitignored (local Figma exports).
- **Never deploy** until Ayrton says so.
