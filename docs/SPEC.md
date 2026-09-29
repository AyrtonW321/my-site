# Site spec

Source of truth for product decisions. Keep current; log every Figma override under "Deviations from Figma".
Visual source: Figma file `gXDoYIm5mpBLZqZI1jjwDy` (home light `5:26`, motion notes `6:498`), plus PNG exports in `design/` (local only).

## Routes

| Route             | Content                                                                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`               | Hero (quick links), `#about` (5 cards), `#projects` (up to 4 featured + "View all"), `#experience` (condensed timeline + link), `#contact`, Footer |
| `/projects`       | Grid of `done` and `wip` projects, then an "Up next" row of `planned` (small, not clickable)                                                       |
| `/projects/:slug` | Detail: media, title, year, tags, write-up, GitHub/Live buttons, "← All projects". Layout awaits Figma outline.                                    |
| `/experience`     | Full roles with bullets; `#resume` expandable panel (embedded PDF, PNG preview on phones, Download). Layout awaits Figma outline.                  |
| `*`               | 404 in site style                                                                                                                                  |

## Nav

- Desktop: floating pill, logo `ayrton.wong`, Home / About / Projects / Experience / Contact, theme toggle, black Résumé button → `/experience#resume`. About and Contact are `/#about`, `/#contact`.
- Mobile: full-width top bar, logo left, theme toggle + hamburger right; hamburger opens a dropdown with all links + Résumé.

## Contact

Primary: `ayrtonwongg@gmail.com` (`mailto:`), then Copy email, LinkedIn, GitHub. Secondary line: `a393wong@uwaterloo.ca`. **Never a phone number.**

## Theme

Circular View Transitions reveal from the toggle (~500ms, both directions). First visit follows `prefers-color-scheme`; afterwards `localStorage.theme`. Pre-paint inline script in `index.html` prevents flash. No View Transitions or reduced motion → instant switch.

## Motion at launch

01 nav pill (sliding highlight, shrink after 40px scroll) · 03 hero load (bar, letter stagger 30ms, typed tagline) · 04 scroll reveal (fade up 16px, once) · 05 card hover (lift 2px, accent border, ↗ nudge) · 07 reduced motion disables all; content visible without animation.
Deferred: 06 (spotlight, dots, logo accent cycling, hint), demo videos on cards.

## Projects at launch

UW Course Planner, Space Mining, Skill Router (WIP), Person Tracker. Person Tracker ships only with real text. `status`: `done | wip | planned`; `featured` ≤ 4. **No placeholder text ever ships** (enforced by `src/content/content.test.ts`).

## Other requirements

Responsive 320px+, mobile-first, content max 1120px. Vercel Web Analytics. `vercel.json` SPA rewrite. Meta + OG tags. **No deploy until Ayrton says so** (target `ayrtonwong.vercel.app`).

## Design tokens

Defined in `src/index.css`. Fonts: Geist + Geist Mono (`@fontsource-variable`, 5.3.0). Dark values are sampled by eye; replace with exact Figma values when provided.

## Deviations from Figma

1. **`text-3` contrast.** Figma `#9d9da6` on `#fafaf9` ≈ 2.6:1. `--text-3` is now `#6b6b74` (≥4.5:1 on bg, surface, surface-2) for small text; the Figma value survives as `--text-decor` for purely decorative marks. Dark `--text-3` is `#85858e` (Figma-sampled `#71717a` ≈ 4.1:1 fails); `#71717a` is dark `--text-decor`.
2. **Accent on small text.** `#07b2f8` on light ≈ 2.4:1. New `--accent-text` `#026fa1` for small light-mode text (tagline, company names). Brand `#07b2f8` stays for the hero "Wong.", bars, dots, and all of dark mode. Hero "Wong." is the one deliberate AA exception (identity choice).
3. Uni email line under the Gmail button (not in Figma).
4. Résumé "UPDATED SEP 2026" comes from `profile.resume.updated`, never hardcoded.
5. Mobile menu dropdown contents and style (not in Figma).
6. Desktop "View all ↗" pill and mobile "View all projects ↗" button both link to `/projects`.
7. **React Router 7.x** (latest published is 7.18; the plan assumed 8.x). Same data-router API.
8. CI runs lint, typecheck, unit tests, build and the Playwright e2e suite (added in M7).
9. **Large display accent.** The contact heading's "something." uses brand `#07b2f8` on light (large text, identity choice, same exception as the hero "Wong.").
10. **Experience data.** More roles than the Figma shows (Trademark Industries, The STEAM Project, Richmond Hill Public Library) come from Ayrton's LinkedIn. The homepage shows the first three; `/experience` shows all. A "Full timeline ↗" button is added under the homepage list.
11. **Project media** has no "[ screenshot / demo loop ]" caption; an empty tinted block is used until real screenshots land (no placeholder text ships).
12. **Contact** section heading is the big "Let's build something." (its `<h2>`); there is no separate title. LinkedIn controls are hidden until `profile.links.linkedin` is set.
13. **Reduced motion is CSS-gated, not hook-driven.** The plan's `usePrefersReducedMotion` hook is skipped: hidden/animated starting states (`.reveal`, hero bar/letters/tagline) exist only inside `@media (prefers-reduced-motion: no-preference)`, so reduced-motion visitors always get final, visible content with no JS. The theme toggle still checks `matchMedia` itself.
14. **Page title and description via `usePageMeta`**, not React 19 hoisted `<title>`/`<meta>`. Hoisting adds a second tag next to the static ones in `index.html` (which crawlers and link previews need), so the hook updates the single existing tags instead. The 404 page still hoists `<meta name="robots" content="noindex">`.
15. **External links** carry a visually hidden " (opens in new tab)" in place of an `aria-label` where the tile has other visible text, so the accessible name always contains the visible label (WCAG 2.5.3). Contact buttons keep `aria-label` because their visible text is a prefix of it.
16. **Static meta values** (canonical, Open Graph, Twitter) are site-level and point at the homepage for every route; there is no prerendering. `content.test.ts` checks the static description matches `profile.description`.
