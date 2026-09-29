export type Theme = 'light' | 'dark'

export const THEME_KEY = 'theme'

/** Saved choice wins; otherwise follow the system. */
export function resolveInitialTheme(stored: string | null, prefersDark: boolean): Theme {
  if (stored === 'light' || stored === 'dark') return stored
  return prefersDark ? 'dark' : 'light'
}
