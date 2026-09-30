# What is still needed from Ayrton

Kept current by whoever works on the site. Tick items off (and delete them) as they land.
Nothing here may be faked: the content test and the launch gate (`npm run test:launch`) exist to stop placeholders shipping.

## Resume (needs your decision first)

- [ ] **The resume PDF contains your phone number.** The site spec says no phone number anywhere, and this repo is public (it would also be downloadable from the live site). Either send a version without the phone number, or confirm it should be published as-is. Until then `public/resume.pdf` and `public/resume.png` are NOT in the repo, so the download link and preview are broken. Once decided I add the PDF and render the page-1 PNG.
- [ ] **Update the resume to match the site** (site values are the ones you confirmed):
  - Kumon Richmond Hill starts Mar 2022 (resume says Mar 2021).
  - The project is now called **LooPlanner** (resume says "UW Course Planner").
  - Trademark title on the site is now "Sales Associate & Warehouse Packer" (company still "Trademark Industries Canada" on the site vs "Trademark Industries Inc." on the resume; tell me if the company name should change too).
  - Space Mining is in progress on both.

## Projects

- [ ] **GitHub links still missing** for Space Mining, Skill Router and GasBuddy Analytics (no repos yet). Send URLs when they exist; the pill and button appear automatically.
- [ ] **GasBuddy Analytics** is in the "Up next" row with only a title (planned, no repo, no description). Send a one-line description, tags and a year when you have them.
- [ ] Space Mining is a collaborative project on your resume: send the collaborator name(s) if you want them credited on its page.
- [ ] **Person Tracker** uses `harryliu1125/Person_Tracker`. Year (2025) and tags (Python, OpenCV, Raspberry Pi) come from your resume; status is set to completed. Confirm.
- [ ] Write-ups per project (`body` in `src/content/projects.ts`) once the GitHub READMEs exist. Pages work without them.
- [ ] Optional: bullets for Haneco Energy and Kumon Markham, and detail for the Richmond Hill Public Library role (dates only today). Company URLs (`url`) if you want the company names linked.
- Note: Haneco is set to end Dec 2026. From Jan 2027 the About "Now" card automatically moves on to the next current role (Kumon), so revisit the site then.

## Blocks launch (M8)

- [ ] A screenshot per project, WebP, about 1280x800 (16:10): LooPlanner, Space Mining, Skill Router, Person Tracker. `npm run test:launch` fails until they exist.
- [ ] Optional: exact dark-theme colour values from Figma (current dark tokens are sampled by eye).

## Before deploy (Vercel side, not code)

- [ ] Enable **Web Analytics** for the project in the Vercel dashboard. The `/_vercel/insights/script.js` 404 in local previews is expected and disappears once hosted there.
- [ ] Check what the Vercel to GitHub link auto-deploys. Non-production branch pushes create preview deployments by default.
- [ ] Set the production branch (repo default is `master`).
- [ ] Domain: `https://ayrtonwong.vercel.app` is assumed in `index.html`, `public/robots.txt` and `public/sitemap.xml`; change all three if it differs.
- [ ] After the first deploy: check the link preview (`og.png`, regenerate with `node scripts/make-og.mjs` after any hero change) in a social debugger, and add the URL to Google Search Console if wanted.
- [ ] If you add or remove projects, update `public/sitemap.xml` (a test fails if a browsable project is missing).

## Checks that need a real device or browser (not possible from the dev environment)

- [ ] Safari (macOS and iOS): theme toggle falls back to an instant switch without View Transitions, the mobile popover menu, the typed tagline, the new dot-wave theme transition.
- [ ] Firefox: same spot checks.
- [ ] A real phone at 320 to 390px wide.
