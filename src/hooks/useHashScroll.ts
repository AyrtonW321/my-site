import { useEffect } from 'react'
import { useLocation } from 'react-router'

/** Scroll to the URL hash after navigation, opening it if it's a <details>. */
export function useHashScroll() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (!el) return
    if (el instanceof HTMLDetailsElement) el.open = true
    el.scrollIntoView()
  }, [pathname, hash])
}
