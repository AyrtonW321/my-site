import { expect, test } from '@playwright/test'

const routes: [path: string, h1: string][] = [
  ['/', 'Ayrton Wong.'],
  ['/projects', "Things I've built."],
  ['/experience', 'Where I have worked.'],
  ['/projects/uw-course-planner', 'UW Course Planner'],
  ['/projects/does-not-exist', 'Nothing here.'],
  ['/nope', 'Nothing here.'],
]

test.describe('routes render on direct load', () => {
  for (const [path, h1] of routes) {
    test(path, async ({ page }) => {
      await page.goto(path)
      await expect(page.getByRole('heading', { level: 1 })).toHaveAccessibleName(h1)
    })
  }
})

test('no horizontal overflow at 320px', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 })
  await page.goto('/')
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  )
  expect(overflow).toBeLessThanOrEqual(0)
})

test.describe('theme', () => {
  test.use({ colorScheme: 'light' })

  test('toggle persists across reload', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
    await page.getByRole('button', { name: 'Switch to dark theme' }).first().click()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  })

  test('first visit follows the system theme', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  })
})

test('mobile menu opens and closes with Escape', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 })
  await page.goto('/')
  const menu = page.getByRole('navigation', { name: 'Menu' })
  await expect(menu).toBeHidden()
  await page.getByRole('button', { name: 'Open menu' }).click()
  await expect(menu).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(menu).toBeHidden()
})

test('mobile menu link navigates and closes', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 })
  await page.goto('/')
  await page.getByRole('button', { name: 'Open menu' }).click()
  await page
    .getByRole('navigation', { name: 'Menu' })
    .getByRole('link', { name: 'Experience' })
    .click()
  await expect(page).toHaveURL(/\/experience$/)
  await expect(page.getByRole('navigation', { name: 'Menu' })).toBeHidden()
})

test('/experience#resume opens the resume panel', async ({ page }) => {
  await page.goto('/experience#resume')
  await expect(page.locator('details#resume')).toHaveJSProperty('open', true)
})

test('Contact in the nav scrolls to the contact section from another page', async ({ page }) => {
  await page.goto('/projects')
  await page
    .getByRole('navigation', { name: 'Primary' })
    .getByRole('link', { name: 'Contact' })
    .click()
  await expect(page).toHaveURL(/#contact$/)
  await expect(page.locator('#contact-title')).toBeInViewport()
})

test('reduced motion: everything is visible immediately', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const opacities = await page.evaluate(() =>
    [...document.querySelectorAll('.reveal, .hero-letter')].map(
      (el) => getComputedStyle(el).opacity,
    ),
  )
  expect(opacities.length).toBeGreaterThan(0)
  expect(opacities.every((o) => o === '1')).toBe(true)
})

test('copy email button confirms', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/')
  await page.getByRole('button', { name: 'Copy email' }).click()
  await expect(page.getByRole('button', { name: 'Copied' })).toBeVisible()
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('ayrtonwongg@gmail.com')
})

test('each page sets one title and one description', async ({ page }) => {
  await page.goto('/projects')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page).toHaveTitle('Projects — Ayrton Wong')
  await expect(page.locator('head title')).toHaveCount(1)
  await expect(page.locator('meta[name="description"]')).toHaveCount(1)
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Projects by/)
})

test('projects: card opens detail, next and back links work', async ({ page }) => {
  await page.goto('/projects')
  await page.getByRole('link', { name: /UW Course Planner/ }).click()
  await expect(page).toHaveURL(/\/projects\/uw-course-planner$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveAccessibleName('UW Course Planner')
  await page.getByRole('navigation', { name: 'Next project' }).getByRole('link').click()
  await expect(page).toHaveURL(/\/projects\/space-mining$/)
  await page.getByRole('link', { name: '← All projects' }).click()
  await expect(page).toHaveURL(/\/projects$/)
})

test('experience: all roles listed and resume panel opens on demand', async ({ page }) => {
  await page.goto('/experience')
  await expect(page.locator('ol > li')).toHaveCount(6)
  await expect(page.getByRole('link', { name: /Download PDF/ })).toHaveAttribute(
    'href',
    '/resume.pdf',
  )
  await expect(page.locator('object')).toHaveCount(0)
  await page.getByText('Preview', { exact: true }).click()
  await expect(page.locator('details#resume')).toHaveJSProperty('open', true)
  await expect(page.locator('object[data="/resume.pdf"]')).toHaveCount(1)
})

test('experience: resume shows the image on phones', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 })
  await page.goto('/experience#resume')
  await expect(page.locator('img[src="/resume.png"]')).toHaveCount(1)
  await expect(page.locator('object')).toHaveCount(0)
})
