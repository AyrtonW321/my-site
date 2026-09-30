import { useRef } from 'react'
import { Link } from 'react-router'
import { navLinks, resumeLink } from './links'

export function MobileMenu() {
  const menu = useRef<HTMLElement>(null)
  const close = () => menu.current?.hidePopover()
  return (
    <>
      <button
        type="button"
        popoverTarget="menu"
        aria-label="Open menu"
        className="grid size-11 place-items-center rounded-full text-text-2 hover:bg-surface-2 hover:text-text"
      >
        <svg viewBox="0 0 16 16" className="size-4" aria-hidden="true">
          <path
            d="M2 4.5h12M2 8h12M2 11.5h12"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </button>
      <nav
        id="menu"
        ref={menu}
        popover="auto"
        aria-label="Menu"
        className="fixed inset-x-4 top-16 bottom-auto m-0 h-fit w-auto rounded-2xl border bg-surface p-2 text-text shadow-lg"
      >
        {navLinks.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            onClick={close}
            className="flex min-h-11 items-center rounded-xl px-3 text-sm hover:bg-surface-2"
          >
            {l.label}
          </Link>
        ))}
        <Link
          to={resumeLink}
          onClick={close}
          className="mt-1 flex min-h-11 items-center justify-center rounded-xl bg-text px-3 text-sm font-medium text-bg"
        >
          Résumé
        </Link>
      </nav>
    </>
  )
}
