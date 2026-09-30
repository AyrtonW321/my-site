import { useEffect, useState } from 'react'

/** Id of the homepage section crossing a thin band near the top third of the viewport. */
export function useActiveSection(ids: readonly string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === 'undefined') return
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          if (isIntersecting) visible.add(target.id)
          else visible.delete(target.id)
        }
        setActive(ids.find((id) => visible.has(id)) ?? null)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [ids, enabled])
  return enabled ? active : null
}
