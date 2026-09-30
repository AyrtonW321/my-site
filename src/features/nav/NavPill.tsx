import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { cn } from '../../lib/cn'
import { navLinks } from './links'

interface Props {
  /** Label of the highlighted link, or null for none. */
  activeLabel: string | null
  /** True when the active link is a homepage section rather than the current page. */
  sectionActive: boolean
}

/** The link row with a single highlight that slides between active links. */
export function NavPill({ activeLabel, sectionActive }: Props) {
  const list = useRef<HTMLUListElement>(null)
  const [box, setBox] = useState<{ x: number; w: number } | null>(null)
  // No slide-in from zero on first paint.
  const [ready, setReady] = useState(false)

  useLayoutEffect(() => {
    const ul = list.current
    if (!ul) return
    const measure = () => {
      const el = ul.querySelector<HTMLElement>('[aria-current]')
      setBox(el ? { x: el.offsetLeft, w: el.offsetWidth } : null)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(ul)
    return () => observer.disconnect()
  }, [activeLabel])

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <ul ref={list} className="relative ml-3 flex items-center gap-0.5">
      <span
        aria-hidden="true"
        className={cn(
          'absolute top-0 left-0 h-full rounded-full bg-surface-2',
          ready && 'transition-[transform,width,opacity] duration-250 ease-spring',
        )}
        style={{
          transform: `translateX(${box?.x ?? 0}px)`,
          width: box?.w ?? 0,
          opacity: box ? 1 : 0,
        }}
      />
      {navLinks.map((l) => (
        <li key={l.label}>
          <Link
            to={l.to}
            aria-current={
              l.label === activeLabel
                ? sectionActive && l.section
                  ? 'location'
                  : 'page'
                : undefined
            }
            className="relative rounded-full px-3 py-1.5 text-[13px] text-text-2 transition-colors hover:text-text aria-[current]:text-text"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
