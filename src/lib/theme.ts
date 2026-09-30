export type Theme = 'light' | 'dark'

export const THEME_KEY = 'theme'

/** Saved choice wins; otherwise follow the system. */
export function resolveInitialTheme(stored: string | null, prefersDark: boolean): Theme {
  if (stored === 'light' || stored === 'dark') return stored
  return prefersDark ? 'dark' : 'light'
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.dataset.theme = theme
  root.style.colorScheme = theme
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch {
    // storage blocked: the choice just won't persist
  }
}

/** Circular reveal growing from `origin`; instant when unsupported or motion is reduced. */
export function toggleWithTransition(next: Theme, origin: { x: number; y: number }) {
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  if (!document.startViewTransition || reduced) return applyTheme(next)
  const style = document.documentElement.style
  style.setProperty('--vt-x', `${origin.x}px`)
  style.setProperty('--vt-y', `${origin.y}px`)
  document.startViewTransition(() => applyTheme(next))
}
