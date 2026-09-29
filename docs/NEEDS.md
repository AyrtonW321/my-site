# What is still needed from Ayrton

Kept current by whoever works on the site. Tick items off (and delete them) as they land.
Nothing here may be faked: the content test and the launch gate (`npm run test:launch`) exist to stop placeholders shipping.

## Content for the M5 and M6 pages (layouts are built; these fill them in)

- [ ] A write-up per project (`body` in `src/content/projects.ts`): heading plus paragraphs. Pages work without it.
- [ ] GitHub and live URLs per project (all `links: {}` today, so the buttons don't render).
- [ ] Any planned projects for the "Up next" row on `/projects` (none defined, so the row is hidden): title, one line, tags.
- [ ] `public/resume.pdf` and `public/resume.png` (a PNG of page 1, shown on phones). Until they exist the Download link and the preview are broken.
- [ ] Optional: bullets for Haneco Energy and Kumon Markham, and detail for the Richmond Hill Public Library role (dates only today). Company URLs (`url`) if you want the company names linked.
- [ ] Look over the layouts I designed for `/projects`, `/projects/:slug` and `/experience` (no Figma existed) and say what to change.

## Blocks M8 (launch readiness)

- [ ] A screenshot per project, WebP, about 1280x800 (16:10): UW Course Planner, Space Mining, Skill Router.
- [ ] Person Tracker (left out of the site until real): one-line summary, tags, year, write-up, screenshot, and the collaborator credit (Harry Liu).
- [ ] LinkedIn profile URL (`profile.links.linkedin`). LinkedIn controls stay hidden until it is set.
- [ ] Optional: exact dark-theme colour values from Figma (current dark tokens are sampled by eye).

## Decisions to make

1. **Job titles and dates.** LinkedIn and the Figma disagree; the site currently uses the Figma wording.
   - Haneco: Figma "Energy Specialist + Sales Rep", LinkedIn "Sales Representative".
   - Kumon (Markham): Figma "Online Program Instructor", LinkedIn "Teaching Assistant".
   - Kumon (Richmond Hill): Figma "Instructor", LinkedIn "Teaching Assistant". (Start date is settled: Mar 2022.)
2. **Brand cyan on light backgrounds.** `#07b2f8` is 2.4:1 on white, under the 3:1 WCAG needs for large text. The hero "Wong." and contact "something." use it anyway (logged as a deliberate exception; axe skips them). A slightly darker cyan for those two spots would pass: `#0894d3` gives 3.3:1 and still reads as the same blue. Keep the brand colour or switch?
3. **Domain.** `https://ayrtonwong.vercel.app` is assumed in `index.html` (canonical, `og:url`, `og:image`, `twitter:image`), `public/robots.txt` and `public/sitemap.xml`. If the final domain differs, change all of them.
4. **Homepage experience count.** Homepage shows the newest 3 of 6 roles (`HOME_COUNT` in `ExperienceSummary.tsx`), with a "Full timeline" button. Keep 3?

## Before deploy (Vercel side, not code)

- [ ] Enable **Web Analytics** for the project in the Vercel dashboard. The `/_vercel/insights/script.js` 404 in local previews is expected and disappears once hosted there.
- [ ] Check what the Vercel to GitHub link auto-deploys. Non-production branch pushes create preview deployments by default.
- [ ] Set the production branch (repo default is `master`).
- [ ] After the first deploy: check the link preview (`og.png`) in a social debugger, and add the URL to Google Search Console if wanted.
- [ ] If you add or remove projects, update `public/sitemap.xml` (a test fails if a browsable project is missing).

## Checks that need a real device or browser (not possible from the dev environment)

- [ ] Safari (macOS and iOS): theme toggle falls back to an instant switch without View Transitions, the mobile popover menu, the typed tagline.
- [ ] Firefox: same spot checks.
- [ ] A real phone at 320 to 390px wide.
