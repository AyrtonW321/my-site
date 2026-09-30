# What is still needed from Ayrton

Kept current by whoever works on the site. Tick items off (and delete them) as they land.
Nothing here may be faked: the content test and the launch gate (`npm run test:launch`) exist to stop placeholders shipping.

## Resume (needs your decision first)

- [ ] **The resume PDF contains your phone number.** The site spec says no phone number anywhere, and this repo is public (it would also be downloadable from the live site). Either send a version without the phone number, or confirm it should be published as-is. Until then `public/resume.pdf` and `public/resume.png` are NOT in the repo, so the download link and preview are broken. Once decided I add the PDF and render the page-1 PNG.
- [ ] **Resume vs site mismatches to reconcile** (recruiters will compare them):
  - Kumon Richmond Hill starts Mar 2021 on the resume; the site says Mar 2022 (as you told me).
  - Titles: resume says "Assistant Tutor" for both Kumon roles, "Sales Representative / Energy Specialist" at Haneco (site: "Energy Specialist"), and "Sales Associate & Warehouse Packer" at "Trademark Industries Inc." (site: "Sales Assistant", "Trademark Industries Canada").
  - Haneco runs Sep 2026 to Dec 2026 on the resume; the site shows it as current with no end date.
  - Space Mining is "2026 - Present" and a collaborative project on the resume; the site lists it as completed. Should it be marked in progress, and who is the collaborator?

## Projects

- [ ] **GitHub links.** UW Course Planner points at `AyrtonW321/LooPlanner` (matched by name and Feb 2026 date, please confirm). Space Mining and Skill Router have no public repo I could find; send URLs or leave them without a pill.
- [ ] **Person Tracker** uses `harryliu1125/Person_Tracker`. Year (2025) and tags (Python, OpenCV, Raspberry Pi) come from your resume; status is set to completed. Confirm.
- [ ] **GasBuddy analytics** for the "Up next" row: send a one-line description and tags (title, summary and tags are all it needs). I have not added it because I would have to invent the description.
- [ ] Write-ups per project (`body` in `src/content/projects.ts`) once the GitHub READMEs exist. Pages work without them.
- [ ] Optional: bullets for Haneco Energy and Kumon Markham, and detail for the Richmond Hill Public Library role (dates only today). Company URLs (`url`) if you want the company names linked.

## Blocks launch (M8)

- [ ] A screenshot per project, WebP, about 1280x800 (16:10): UW Course Planner, Space Mining, Skill Router, Person Tracker. `npm run test:launch` fails until they exist.
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
