# Personal website — build plan

## Context
Ayrton Wong (UW Honours Math, Applied Math: Scientific Computing + ML) wants a personal portfolio site he can send to anyone: recruiters, co-op employers, friends. The product spec was settled in a long grilling session. The visual design comes from his Figma file `gXDoYIm5mpBLZqZI1jjwDy`.

- **Figma frames read:** desktop light home `5:26`, the motion notes `6:498` (items 01–07), and the node tree.
- **Ayrton's exported PNGs:** desktop dark and mobile. The Figma MCP is rate-limited on the Starter plan, so treat the PNGs, the tokens and the Figma section below as the source of truth.

Repo: `C:\Users\ayrto_kuqm8yg\OneDrive\Documents\Coding\my-site`, remote `github.com/AyrtonW321/my-site`, branch `main`, one commit ("Initial Commit"). It's a fresh Vite 8 + React 19 + TS 6 scaffold with oxlint. `src/App.tsx`, `App.css`, `assets/`, `public/favicon.svg` and `icons.svg` are still the Vite demo files. This is the project's own git root; the home directory is a separate repo, so never stage from outside the project.

This plan is written so a different model (Sonnet) can execute it milestone by milestone without the grilling transcript.

**Rule from Ayrton:** follow the Figma as closely as possible, but override it where better engineering, UX or accessibility judgment applies. Record every override in `docs/SPEC.md` under "Deviations from Figma".

---

## 1. Product spec (agreed)

**Routes**

| Route | Content |
|---|---|
| `/` | The Figma homepage: Hero (with quick links), `#about` card grid (5 cards), `#projects` (4 featured cards + "View all"), `#experience` (condensed timeline + link to `/experience`), `#contact`, Footer |
| `/projects` | Grid of `done` and `wip` projects, then an "Up next" row of `planned` projects (small cards, not clickable) |
| `/projects/:slug` | Detail page: media, title, year, tags, write-up, GitHub and Live buttons, "← All projects". **Layout is waiting on Ayrton's Figma outline.** |
| `/experience` | Full roles with bullets. At the bottom, `#resume` is an expandable panel with the embedded `/resume.pdf`, a PNG preview on phones, and a Download button. **Layout is waiting on Ayrton's Figma outline.** |
| `*` | 404 page in the site's style |

**Nav**
- **Desktop:** a floating pill with the logo `ayrton.wong`, then Home, About, Projects, Experience and Contact. About and Contact are `/#about` and `/#contact` anchors. Then the theme toggle and a black Résumé button that goes to `/experience#resume`.
- **Mobile:** a full-width top bar with the logo on the left and the theme toggle plus a hamburger on the right. The hamburger opens a dropdown with all the links and Résumé.

**Contact**
- The primary button is `ayrtonwongg@gmail.com` (a `mailto:` link).
- Next to it: a "Copy email" button, then LinkedIn and GitHub.
- Under it, a secondary line: `a393wong@uwaterloo.ca`.
- **Never include a phone number.**

**Theme**
- A toggle with a circular reveal that grows out of the button, using the View Transitions API, about 500ms, in both directions.
- The first visit follows `prefers-color-scheme`. After that the choice is saved in `localStorage`.
- A pre-paint inline script prevents a flash of the wrong theme on load.
- Browsers without View Transitions get an instant switch, and so do visitors with reduced motion on.

**Motion at launch** (the Figma notes)
- **01 Nav pill:** the active highlight slides between links (spring-ish, about 250ms). After 40px of scroll the pill scales to 0.96 and the shadow deepens.
- **03 Hero load:** the accent bar grows from 0 to 56px, then "Ayrton" and "Wong." rise letter by letter with a 30ms stagger, then the monospace tagline types in.
- **04 Scroll reveal:** each section fades up 16px when it first enters the viewport. Runs once.
- **05 Card hover:** the card lifts 2px, its border turns accent, and the ↗ arrow nudges 2px up-right.
- **07 Reduced motion:** all of the above turn off.

**Deferred until after launch**
- Motion 06: cursor spotlight inside the About cards, animated dots on the based-in line, logo click cycling the accent color, the "look around" hint.
- Demo videos on project cards. The `video` field exists but isn't used yet.

**Projects at launch**
- UW Course Planner, Space Mining, Skill Router (WIP) and Person Tracker.
- Person Tracker ships only once it has real text. It currently has placeholder copy, and **no placeholder text ever ships.**
- `status` is `done`, `wip` or `planned`. `featured: boolean` selects the homepage cards (at most 4).

**Other requirements**
- Fully responsive from 320px up to wide monitors, mobile-first, content max width 1120px.
- Vercel Web Analytics (free on the Hobby plan).
- A `vercel.json` rewrite so client-side routes work on direct loads and refreshes.
- Meta and Open Graph tags.
- **No deploy until Ayrton says so.** The target is `ayrtonwong.vercel.app`.

---

## 2. Design system (from Figma)

**Fonts**
- **Geist** for body and display, **Geist Mono** for labels and tags.
- Self-host them with `@fontsource-variable/geist` and `@fontsource-variable/geist-mono` (both at 5.3.0). Do not use the `geist` package, which is built for Next.js.

**Light tokens** (exact, from the Figma variables)

| Token | Value |
|---|---|
| `bg` | `#fafaf9` |
| `surface` | `#ffffff` |
| `surface-2` | `#f3f3f4` |
| `text` | `#0b0b0c` |
| `text-2` | `#55555d` |
| `text-3` | `#9d9da6` |
| `border` | `#e6e6e8` |
| `accent` | `#07b2f8` |
| `accent-soft` | `#e6f7fe` |
| `success` | `#16a34a` |
| `nav-bg` | `#ffffffc7` |

**Dark tokens** (sampled by eye from the dark PNG; replace with exact values if Ayrton pastes them)
- `bg`: about `#0a0a0b`
- `surface`: about `#111113`
- `surface-2`: about `#18181b`
- `border`: about `#232327`
- `text`: `#f5f5f6`
- `text-2`: about `#a1a1aa`
- `text-3`: about `#71717a`
- `accent`: `#07b2f8` (unchanged)
- `accent-soft`: about `#072a3a` (the project thumbnail tint)
- `nav-bg`: about `#111113c7`
- Primary buttons invert to white background with black text in dark mode.

**Visual language**
- Labels are monospace, uppercase and letter-spaced, in the form `01 / ABOUT`.
- Section titles are about 40px, semibold, with tight tracking. The hero name is about 120px, bold, with very tight tracking.
- Cards use 1px borders, about a 16–20px radius, and the `surface` color. Tags are small monospace pills on `surface-2`.
- The ↗ arrow appears on links that leave the page or go deeper.
- Section rhythm: `pt-24`, a header block, then content (see the Figma geometry in the metadata).

**Deviations from Figma**, all deliberate and all to be logged in `docs/SPEC.md`:
1. **`text-3` contrast.** `#9d9da6` on `#fafaf9` is about 2.6:1, which fails WCAG AA for text. Keep it for purely decorative marks, and add a `text-3` value of about `#6f6f78` (4.5:1 or better) for all small monospace text in light mode. Check dark mode the same way.
2. **Accent on small text.** `#07b2f8` on light backgrounds is about 2.4:1, so small accent text fails (the tagline "APPLIED MATHEMATICS" and company names such as "Haneco Energy"). Add an `accent-text` token of about `#0379b0` for small light-mode text. Keep the brand `#07b2f8` for the hero "Wong.", the bars, the dots and in dark mode. The hero keeps the brand color as an identity choice and is noted as the one AA exception.
3. The uni email line under the Gmail button, which isn't in the Figma.
4. The Figma's "Download resume · PDF · UPDATED SEP 2026" date comes from `profile.resume.updated` and is never hardcoded.
5. The mobile menu dropdown contents and style, which aren't in the Figma.
6. The desktop "View all ↗" pill and the mobile "View all projects ↗" bottom button both link to `/projects`.

---

## 3. Architecture

### Principles
- **Content is data.** No personal text is hardcoded in components. Everything comes from typed files in `src/content/`.
- **One source per fact.** The co-op card, the homepage experience list and `/experience` all read the same `experience` array. The name, emails and links come from `profile`.
- **Layers only depend downward:** `content` → `lib` (pure functions) → `components/ui` (primitives) → `features/*` (sections) → `pages` → `app` (router and layout).
- **Native platform first:**
  - `<details>` for the résumé panel
  - the HTML `popover` attribute for the mobile menu, which gives Escape handling and click-outside dismissal for free
  - IntersectionObserver for reveals
  - the View Transitions API for the theme switch
  - React 19's built-in `<title>` and `<meta>` for per-page tags
- **No animation library, no UI kit, no state library, no CSS-in-JS.**
- **Pure logic lives in `lib/` and is unit-tested.** Components stay thin.

### Folder structure
```
src/
  main.tsx                  # createRoot, fonts, index.css, <RouterProvider>
  index.css                 # tailwind import, @theme tokens, light/dark vars, base, keyframes
  app/
    router.tsx              # createBrowserRouter route table (lazy non-home pages)
    RootLayout.tsx          # <Nav/> <main><Outlet/></main> <Footer/>, ScrollRestoration, hash scroll
  pages/
    HomePage.tsx  ProjectsPage.tsx  ProjectDetailPage.tsx  ExperiencePage.tsx  NotFoundPage.tsx
  features/
    nav/        Nav.tsx  NavPill.tsx  MobileMenu.tsx  ThemeToggle.tsx  useActiveSection.ts
    hero/       Hero.tsx  AnimatedName.tsx  Tagline.tsx  QuickLinks.tsx
    about/      AboutSection.tsx  IntroCard.tsx  NowCard.tsx  BasedInCard.tsx  ToolboxCard.tsx  OffTheClockCard.tsx
    projects/   FeaturedProjects.tsx  ProjectCard.tsx  UpNextCard.tsx  ProjectGrid.tsx  ProjectMedia.tsx
    experience/ ExperienceSummary.tsx  TimelineItem.tsx  ResumePanel.tsx
    contact/    ContactSection.tsx  CopyEmailButton.tsx
    footer/     Footer.tsx
  components/ui/
    Container.tsx  Section.tsx  SectionHeader.tsx  Card.tsx  Button.tsx  Tag.tsx  ArrowIcon.tsx  Reveal.tsx  VisuallyHidden.tsx
  hooks/
    useTheme.ts  useInView.ts  useScrolled.ts  useCopyToClipboard.ts  useHashScroll.ts  usePrefersReducedMotion.ts
  lib/
    theme.ts        # resolveInitialTheme, applyTheme, toggleWithTransition
    projects.ts     # getFeatured, getListed, getPlanned, getBySlug
    experience.ts   # getCurrentRole, sortByStart
    format.ts       # formatDateRange ("JUN 2026 – NOW"), formatMonthYear
    cn.ts           # tiny className join (no clsx dependency)
  content/
    types.ts        # Profile, Project, ProjectStatus, Experience, etc.
    profile.ts      # name, program, university, emails, links, basedIn, toolbox, hobbies, intro lines, resume meta
    projects.ts     # Project[] with `satisfies readonly Project[]`
    experience.ts   # Experience[]
  assets/projects/<slug>/   # thumbnail.webp, gallery images (imported so Vite hashes them)
public/
  resume.pdf  resume.png  og.png  favicon.svg  robots.txt
tests/
  e2e/  smoke.spec.ts       # Playwright
docs/
  SPEC.md                   # product spec + deviations log (this plan's §1–2, kept current)
```
Tests next to the code: `src/lib/*.test.ts` and `src/content/content.test.ts`.

### Content model (`src/content/types.ts`)
```ts
type ProjectStatus = 'done' | 'wip' | 'planned'
interface Project {
  slug: string; title: string; year: number | string; status: ProjectStatus; featured: boolean
  summary: string                      // one line for cards
  tags: string[]
  thumbnail?: string                   // imported asset URL; required unless planned
  video?: string                       // post-launch hover loop
  links: { github?: string; live?: string }
  body?: { heading: string; paragraphs: string[] }[]   // detail page; shape finalised with Figma outline
  collaborators?: string[]
}
interface Experience {
  id: string; role: string; company: string; location?: string
  label?: string                       // e.g. "CO-OP"
  start: string; end: string | null    // 'YYYY-MM'; null = current
  summary: string; bullets: string[]; url?: string
}
```
`Profile` holds:
- name parts (`first: 'Ayrton'`, `last: 'Wong'`), `program`, `university`, the tagline items
- the intro lead and body text
- the About card lines, `basedIn { from: 'Markham, ON', to: 'Waterloo, ON' }`, `toolbox[]`, `offTheClock[{ activity, cadence }]`
- `emails { primary, school }`, `links { github, linkedin }`
- `resume { pdf: '/resume.pdf', preview: '/resume.png', updated: 'YYYY-MM' }`

Copy the real text from the Figma screenshots:
- **Intro:** "I'm an Applied Mathematics student at the University of Waterloo, concentrating in Scientific Computing and Machine Learning." and "I build tools for problems I actually have…"
- **About lines:** math, tools, Kumon, badminton.
- **Toolbox:** Python, C, TypeScript, React, Firebase, Luau, MATLAB, Figma.
- **Hobbies:** Badminton 2–3× / week, Gym daily, Family + friends always.
- **Experience:**
  - Haneco Energy, Energy Specialist + Sales Rep, CO-OP, current
  - Kumon Markham, Online Program Instructor, Jun 2026 – now
  - Kumon Richmond Hill, Instructor, Mar 2021 – Aug 2025
- **Projects:** use the blurbs and tags from the cards.
- **GitHub handle:** `AyrtonW321`. **Ask Ayrton for the LinkedIn URL.**

### Content integrity test (`src/content/content.test.ts`)
This is the guard behind "no placeholder text ships". It fails the build if any of these is true:
- a slug is duplicated or isn't kebab-case
- more than 4 projects are `featured`
- a `done` or `wip` project has no thumbnail
- any string in the content matches `/placeholder|lorem|TODO/i`

**Launch gate:** CI runs this test. Until the Person Tracker text is real, Person Tracker is kept out of the content array; it must not be committed with the placeholder text.

### Routing (`src/app/router.tsx`)
- React Router **8.x** in data mode, with `createBrowserRouter` and `<RouterProvider>`, both imported from `react-router`. **Before writing, check the current v8 API with `npx ctx7@latest docs /websites/reactrouter "createBrowserRouter lazy routes ScrollRestoration"`**, because v8 may differ from v7 in your training data.
- One layout route, `RootLayout`, with these children: index `HomePage` (eager), and `projects`, `projects/:slug`, `experience` and `*` loaded with route-level `lazy` so the homepage bundle stays small.
- `ProjectDetailPage` looks up `getBySlug(params.slug)`. An unknown slug, or a `planned` project, renders `NotFoundPage`.
- `useHashScroll` in `RootLayout`: when the location has a hash (for example `/#contact` from another page, or `/experience#resume`), scroll to that element after render and account for the fixed nav with CSS `scroll-margin-top` on sections. For `#resume`, also set `details.open = true`.
- `<ScrollRestoration/>` handles scroll-to-top when navigating between routes.
- Per-page `<title>` and `<meta name="description">` go inside each page, using React 19's metadata hoisting.

### Theming
- In `index.css`, define CSS variables under `:root` (light) and `:root[data-theme="dark"]`. Map them into Tailwind through `@theme inline { --color-bg: var(--bg); --color-surface: var(--surface); … }` so utilities like `bg-bg`, `text-text-2` and `border-border` switch automatically. Fonts go in `@theme` as `--font-sans` and `--font-mono`.
- Add `@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));` for the few one-off dark overrides, such as the inverted primary button.
- A **pre-paint script** inline in `index.html` `<head>` reads `localStorage.theme` inside a try/catch, falls back to `matchMedia('(prefers-color-scheme: dark)')`, and sets `document.documentElement.dataset.theme` plus `style.colorScheme`. Add `<meta name="theme-color">` for both schemes.
- `lib/theme.ts` has `toggleWithTransition(next, originX, originY)`:
  - If `document.startViewTransition` exists and reduced motion is off: set CSS vars `--vt-x` and `--vt-y` to the button's center, call `startViewTransition(() => applyTheme(next))`, and animate `::view-transition-new(root)` with `clip-path: circle(0 at var(--vt-x) var(--vt-y))` → `circle(150vmax …)` over 500ms.
  - Otherwise, apply the theme instantly.
  - Save the choice with try/catch. The toggle's `aria-label` changes between "Switch to dark theme" and "Switch to light theme".

### Motion implementation
- **Tokens:** add `--ease-spring: cubic-bezier(.34,1.56,.64,1)` and `--ease-out: cubic-bezier(.22,1,.36,1)` in `@theme`.
- **01:**
  - `NavPill` measures the active link's `offsetLeft` and `offsetWidth` with a ref and positions one absolutely placed highlight `<span>` via `transform`/`width` transitions (250ms, spring ease).
  - The active item is the route on other pages. On `/` it's the section currently in view, via `useActiveSection`, an IntersectionObserver over `#about`, `#projects`, `#experience` and `#contact`.
  - `useScrolled(40)` toggles `scale-[.96]` and a deeper shadow.
- **03:**
  - `AnimatedName` renders `<h1>` with the plain name for screen readers, plus `aria-hidden` letter `<span>`s, each with `animation-delay: i*30ms`.
  - The accent bar uses a `width` 0→56px keyframe. `Tagline` reveals each segment with a `steps()` clip animation after the name finishes.
- **04:** `<Reveal>` wraps each section and uses `useInView({ once: true, threshold: 0.15 })` to toggle a class going from `opacity-0 translate-y-4` to `opacity-100 translate-y-0`.
- **05:** CSS only, on `Card` with the `interactive` variant: `hover:-translate-y-0.5 hover:border-accent`, plus `group-hover:translate-x-0.5 group-hover:-translate-y-0.5` on `ArrowIcon`. Mirror it with `focus-visible` for keyboard users.
- **07:** one global `@media (prefers-reduced-motion: reduce)` block kills animations and transitions, and `usePrefersReducedMotion` makes `Reveal`, `AnimatedName` and the theme toggle skip their effects. Content must be fully visible without any animation.

### Key components (behavior notes)
- **`MobileMenu`:**
  - A `<button popovertarget="menu" aria-label="Open menu">` controls `<nav id="menu" popover>`. Links close the menu with `hidePopover()` when clicked.
  - Style it as a dropdown card under the bar. It shows only below `md`.
- **`ResumePanel`:**
  - `<details id="resume">` with a `<summary>` that reads "Résumé", plus a chevron and an "Updated MMM YYYY" label.
  - Its body is `<object data="/resume.pdf" type="application/pdf" class="hidden md:block h-[80vh] w-full">`, with fallback content, and `<img src="/resume.png" class="md:hidden">`.
  - Always show a Download button: `<a href="/resume.pdf" download>`.
- **`CopyEmailButton`:**
  - Uses `navigator.clipboard.writeText`. If that fails, it selects a hidden input and runs `execCommand('copy')`.
  - Announces "Copied" through an `aria-live="polite"` region and resets after 2s.
- **`ProjectMedia`:** a 16:10 `aspect-ratio` box. It renders the thumbnail `<img>` with `loading="lazy"`, `decoding="async"`, explicit width and height, and alt text. With no image, it falls back to an `accent-soft` block.
- **`Section`:** `<section id aria-labelledby>`, plus `scroll-margin-top`, plus `Reveal`.

### Quality bar
- **TypeScript:** add `"strict": true` to `tsconfig.app.json`, which the scaffold doesn't enable. Also add `noUncheckedIndexedAccess`.
- **Lint and format:**
  - oxlint (already present). Add the `jsx-a11y` plugin to `.oxlintrc.json`.
  - Prettier with `prettier-plugin-tailwindcss` for class order.
  - Scripts: `format`, `typecheck` (`tsc -b`), `test` (`vitest run`), `test:e2e` (`playwright test`).
- **Unit tests (Vitest + jsdom + @testing-library/react):**
  - `lib/format`, `lib/projects`, `lib/experience`, `lib/theme` (initial-theme resolution)
  - the content integrity test
  - component tests for the `ThemeToggle` label and state, and for `CopyEmailButton` success and failure
- **E2E (Playwright, Chromium only):** check each route renders its `<h1>`, a direct load of `/projects/<slug>` works under `vite preview`, an unknown slug shows the 404, the theme toggle persists across a reload, the mobile menu opens and closes at 375px, and `/experience#resume` opens the panel.
- **CI (`.github/workflows/ci.yml`):** on push and PR, run `npm ci`, `lint`, `typecheck`, `test`, `build`, then Playwright install and `test:e2e`.
- **Accessibility (WCAG 2.2 AA):**
  - semantic landmarks and a skip-to-content link
  - one `<h1>` per page
  - visible `focus-visible` rings in accent
  - 44px minimum touch targets on mobile
  - contrast fixes from §2
  - every icon-only button has an `aria-label`
  - external links carry `rel="noopener"` and an `aria-label` that mentions the new tab
- **Performance budget:**
  - Lighthouse mobile at 95 or above in all four categories
  - under about 100 KB of gzipped initial JS
  - fonts: variable woff2, Latin subset, `font-display: swap`
  - images as WebP at 2× the display size
  - no layout shift, since media has explicit dimensions
- **SEO and meta** in `index.html`:
  - title "Ayrton Wong — Applied Math @ Waterloo"
  - a description, and `og:*` / `twitter:*` tags with `og.png` (1200×630, made from the hero)
  - canonical `https://ayrtonwong.vercel.app/`
  - `lang="en"`, `robots.txt`, and a monogram `favicon.svg` replacing the Vite logo

### Repo hygiene
- Add `design/` to `.gitignore` (Figma exports stay local).
- Add `CLAUDE.md` at the repo root with the conventions from this section: layers, content-is-data, tokens, the no-placeholder rule, the commands, the ctx7 rule for library docs, and the deviations log.
- Work on one feature branch per milestone (`feat/m1-shell` and so on) and merge to `main` via a PR with CI green. Use Conventional Commits. Commit messages end with the co-author line from the session's attribution reminder.

---

## 4. Milestones

Each milestone ends with lint, typecheck, test and build all green, a browser check at 375, 768 and 1440px in light and dark, and a commit/PR.

| # | Milestone | Done when |
|---|---|---|
| **M0** | **Foundation.** Branch. Install `react-router`, `tailwindcss`, `@tailwindcss/vite`, `@fontsource-variable/geist`, `@fontsource-variable/geist-mono`, `@vercel/analytics`, dev dependencies (`prettier`, `prettier-plugin-tailwindcss`, `vitest`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `@playwright/test`). Delete the Vite demo (`App.tsx`, `App.css`, `src/assets/*`, `public/icons.svg`). Set strict tsconfig, lint and format config, tokens and dark vars in `index.css`, the pre-paint script, the folder skeleton, the CI workflow, `docs/SPEC.md`, `CLAUDE.md`, and `design/` in `.gitignore`. | A blank themed page that follows the system theme with no flash. CI is green. |
| **M1** | **App shell.** Router with lazy routes and stub pages, `RootLayout`, `Nav` (desktop pill plus mobile bar and popover menu), `ThemeToggle` with the circular reveal, `Footer` (© 2026 Ayrton Wong · "Designed in Figma · Built with Claude" · Back to top ↑), `NotFoundPage`, `useHashScroll`, per-page titles, and `vercel.json` (rewrites to `/index.html`). | Navigating every route works. A direct load works under `vite preview`. The theme toggle animates and persists. The mobile menu works with the keyboard. |
| **M2** | **Content layer.** `types.ts`, `profile.ts`, `projects.ts` (Person Tracker omitted until its text is real), `experience.ts`, the `lib/` selectors and formatters, and all their unit tests plus the content integrity test. | Tests are green. No component has hardcoded personal text. |
| **M3** | **Homepage.** Hero and QuickLinks, the About card grid (5 cards in a responsive grid: desktop 2/3 + 1/3 top row and 3 bottom; mobile one column in the order intro, co-op, based in, toolbox, off the clock), FeaturedProjects (2×2 on desktop, 1 column on mobile), ExperienceSummary (a 3-column row per entry on desktop, stacked on mobile), and ContactSection. | Side by side with the Figma light and dark PNGs and the mobile PNG, it matches within reason. |
| **M4** | **Motion** 01, 03, 04, 05, 07. | Everything behaves as in the notes. With reduced motion emulated in DevTools, there's no motion and nothing is hidden. |
| **M5** | **Projects pages.** `/projects` (grid plus Up next) and `/projects/:slug`. | **Blocked on Ayrton's Figma outline.** If it hasn't arrived, stop and ask; don't invent the layout. |
| **M6** | **Experience page** and `ResumePanel`. | **Blocked on the Figma outline plus `resume.pdf` and `resume.png`.** |
| **M7** | **Polish.** Meta, OG image, favicon, `robots.txt`, `<Analytics/>` from `@vercel/analytics/react` in `main.tsx`, the Playwright E2E suite, an accessibility pass (keyboard-only walkthrough, axe via the Lighthouse accessibility audit), Lighthouse at mobile budget, and Safari and Firefox spot checks (the View Transitions fallback). | All budgets met. E2E is green in CI. |
| **M8** | **Content and launch readiness.** Real screenshots (WebP), Person Tracker text, the LinkedIn URL, the résumé files, and the exact dark tokens if provided. | The content test passes with everything included. **Stop, and hand the deploy to Ayrton.** |

---

## 5. Inputs needed from Ayrton (don't fake these)
- Figma outlines for `/projects`, `/projects/:slug` and `/experience`. These block M5 and M6.
- The LinkedIn profile URL.
- `resume.pdf`, plus a `resume.png` preview of page 1.
- A screenshot for each project, plus the Person Tracker one-liner and collaborator credit (Harry Liu).
- Optional: the exact dark-theme variable values from Figma.

## 6. Verification (end to end)
1. Run `npm run lint && npm run typecheck && npm test && npm run build`. All must pass.
2. Run `npm run preview` and open it in the built-in browser. At 375, 768, 1280 and 1920px, in light and dark, compare against the Figma PNGs in `design/`.
3. Check these behaviors:
   - the toggle's circular reveal, and that the theme persists after a reload with no flash
   - `/#contact` reached from `/projects`
   - `/experience#resume` opens the panel
   - an unknown slug shows the 404
   - the mobile menu responds to Escape
   - Copy email works
4. Emulate `prefers-reduced-motion` and confirm there's no animation and all content is visible.
5. Run `npm run test:e2e` and make sure it passes locally and in CI.
6. Run Lighthouse on mobile against `vite preview`. All four categories must score 95 or above.
