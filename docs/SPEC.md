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
2. **Accent on small text.** `#07b2f8` on light ≈ 2.4:1. New `--accent-text` `#026fa1` for small light-mode text (tagline, company names). Brand `#07b2f8` stays for bars, dots, and all of dark mode. Large display type (hero "Wong.", contact "something.") uses `--accent-display` `#0894d3` (3.3:1) on light instead of the brand cyan (see 9).
3. Uni email line under the Gmail button (not in Figma).
4. Résumé "UPDATED SEP 2026" comes from `profile.resume.updated`, never hardcoded.
5. Mobile menu dropdown contents and style (not in Figma).
6. Desktop "View all ↗" pill and mobile "View all projects ↗" button both link to `/projects`.
7. **React Router 7.x** (latest published is 7.18; the plan assumed 8.x). Same data-router API.
8. CI runs lint, typecheck, unit tests, build and the Playwright e2e suite (added in M7).
9. **Large display accent.** Ayrton chose to darken the brand cyan for large display type on light backgrounds: `--accent-display` is `#0894d3` (3.3:1, passes the 3:1 large-text bar) for the hero "Wong." and contact "something."; dark mode keeps `#07b2f8`. The axe suite no longer needs any exclusions.
10. **Experience data.** More roles than the Figma shows (Trademark Industries, The STEAM Project, Richmond Hill Public Library) come from Ayrton's LinkedIn. The homepage shows the first three; `/experience` shows all. A "Full timeline ↗" button is added under the homepage list.
11. **Project media** has no "[ screenshot / demo loop ]" caption; an empty tinted block is used until real screenshots land (no placeholder text ships).
12. **Contact** section heading is the big "Let's build something." (its `<h2>`); there is no separate title. LinkedIn controls are hidden until `profile.links.linkedin` is set.
13. **Reduced motion is CSS-gated, not hook-driven.** The plan's `usePrefersReducedMotion` hook is skipped: hidden/animated starting states (`.reveal`, hero bar/letters/tagline) exist only inside `@media (prefers-reduced-motion: no-preference)`, so reduced-motion visitors always get final, visible content with no JS. The theme toggle still checks `matchMedia` itself.
14. **Page title and description via `usePageMeta`**, not React 19 hoisted `<title>`/`<meta>`. Hoisting adds a second tag next to the static ones in `index.html` (which crawlers and link previews need), so the hook updates the single existing tags instead. The 404 page still hoists `<meta name="robots" content="noindex">`.
15. **External links** carry a visually hidden " (opens in new tab)" in place of an `aria-label` where the tile has other visible text, so the accessible name always contains the visible label (WCAG 2.5.3). Contact buttons keep `aria-label` because their visible text is a prefix of it.
16. **Static meta values** (canonical, Open Graph, Twitter) are site-level and point at the homepage for every route; there is no prerendering. `content.test.ts` checks the static description matches `profile.description`.
17. **`/projects`, `/projects/:slug` and `/experience` are designed without Figma** (Ayrton delegated them, Oct 2026). They reuse the homepage tokens, label style, cards and timeline rhythm. Everything optional (write-up, links, collaborators, thumbnails, bullets) renders nothing when absent, so no placeholder text is needed. Page h1s reuse the homepage section titles ("Things I've built.", "Where I have worked."). Adjust freely once Ayrton has opinions.
18. **Résumé panel** loads nothing until opened, then embeds the PDF at `md` and up and shows the page-1 PNG below that (chosen with a media query, not CSS hiding, so phones never fetch the PDF). The Download button sits outside the `<details>` so it is always visible.
19. **Copy edits (Ayrton, Oct 2026):** About intro card is just the headline (the four "i like…" lines were cut as corny); intro tagline is "I like to build tools for problems that I have."; MATLAB removed from the toolbox; "Cold" dropped from "Cold outreach"; Haneco title is "Energy Specialist" (LinkedIn's "Sales Representative" is not used); other titles unchanged.
20. **Resume tile** on the hero reads "Check out my resume" and links to the preview panel (`/experience#resume`) instead of forcing a download. The panel keeps its Download PDF button.
21. **GitHub links**: project cards get a small GitHub pill (top of the stack above the stretched title link, so the card stays one big link without nesting anchors); the project page has a GitHub button. Only projects with a known repo show them.
22. **Ambient background** (`.bg-art`): a faint dot grid that fades down the viewport plus two very slow accent glows, all CSS, fixed behind content, motion off under reduced motion.
23. **Theme transition** slowed to about 1.3s and reworked: the new theme spreads from the toggle as a soft-edged wave and blooms through a grid of growing dots until it covers the screen (`@property` + mask; falls back to an instant switch where unsupported). The toggle icon also spins.
24. **Project changes (Ayrton, Oct 2026):** "UW Course Planner" is now **LooPlanner** (slug `looplanner`, repo `AyrtonW321/LooPlanner`); Space Mining is in progress (shows WIP); Skill Router stays in progress with no repo; **GasBuddy Analytics** is a planned project shown only in the "Up next" row with just a title, because `summary` and `year` are now optional for planned projects (a test requires both for anything browsable).
25. **"Current" roles are date-aware.** Haneco ends Dec 2026, so `isCurrent` compares each role's end month with today; the About "Now" card and the timeline dot follow it and move to the next current role once the co-op ends. Trademark's title is "Sales Associate & Warehouse Packer" (from the resume).
26. **About intro card** shows the headline plus a "Look at what I'm making right now" callout with a compact project box (thumbnail, title, summary, tags) that links to the project page. Which project it shows is `profile.building.projectSlug` (currently `looplanner`); change that one value to feature something else.
27. **Resume published as-is** (Ayrton's decision, Oct 2026), including the phone number on the PDF, overriding the earlier "no phone number anywhere" rule. The site text itself still never shows a phone number. `resume.png` is page 1 rendered at 2x for the phone preview.
