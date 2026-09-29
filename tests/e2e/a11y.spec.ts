import { AxeBuilder } from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

// Reduced motion keeps scroll-reveal content fully opaque so contrast is measured for real.
test.use({ reducedMotion: 'reduce' })

// Deliberate exceptions (docs/SPEC.md, Deviations 2 and 9): large brand-accent display type.
const BRAND_ACCENT = ['#hero-title', '#contact-title']

for (const theme of ['light', 'dark'] as const) {
  for (const path of ['/', '/projects', '/projects/skill-router', '/experience', '/nope']) {
    test(`axe: ${path} (${theme})`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: theme })
      await page.goto(path)
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .exclude(BRAND_ACCENT[0]!)
        .exclude(BRAND_ACCENT[1]!)
        .analyze()
      expect(results.violations).toEqual([])
    })
  }
}
