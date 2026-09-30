import { useSyncExternalStore } from 'react'
import type { Theme } from '../lib/theme'

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}

const read = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')

/** The <html data-theme> attribute is the single source; every toggle stays in sync. */
export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, read, () => 'light')
}
