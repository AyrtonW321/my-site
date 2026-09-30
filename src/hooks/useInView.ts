import { useEffect, useRef, useState } from 'react'

/** Tracks whether the ref'd element is on screen. With `once`, it stays true after the first time. */
export function useInView<T extends Element>({ once = true, threshold = 0.15 } = {}) {
  const ref = useRef<T>(null)
  // Without IntersectionObserver there is nothing to wait for.
  const [inView, setInView] = useState(typeof IntersectionObserver === 'undefined')
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold])
  return [ref, inView] as const
}
