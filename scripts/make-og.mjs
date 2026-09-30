// Regenerates public/og.png from the hero. Needs `npm run build` then `npm run preview -- --port 4173`.
import { chromium } from '@playwright/test'

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  colorScheme: 'light',
  reducedMotion: 'reduce',
})
await page.goto('http://localhost:4173/')
await page.addStyleTag({
  content:
    'header{display:none!important} a[download]{display:none!important} section[aria-labelledby=hero-title] .grid > :last-child{display:none!important} #hero-title{margin-top:1.5rem} section[aria-labelledby=hero-title]{padding-top:4.5rem!important}',
})
await page.screenshot({ path: 'public/og.png' })
await browser.close()
