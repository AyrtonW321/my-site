import { AxeBuilder } from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

// Reduced motion keeps scroll-reveal content fully opaque so contrast is measured for real.
test.use({ reducedMotion: 'reduce' })

for (const theme of ['light', 'dark'] as const) {
  for (const path of [
    '/',
    '/projects',
    '/projects/skill-router',
    '/projects/person-tracker',
    '/experience',
    '/nope',
  ]) {
    test(`axe: ${path} (${theme})`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: theme })
      await page.goto(path)
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze()
      expect(results.violations).toEqual([])
    })
  }
}
