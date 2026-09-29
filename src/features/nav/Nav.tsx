import { Link, useLocation } from 'react-router'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { ThemeToggle } from './ThemeToggle'
import { navLinks, resumeLink } from './links'

const isActive = (to: string, pathname: string) =>
  to === '/' ? pathname === '/' : !to.includes('#') && pathname.startsWith(to)

export function Nav() {
  const { pathname } = useLocation()
  return (
    <header>
      {/* Desktop: floating pill */}
      <div className="pointer-events-none fixed inset-x-0 top-4 z-50 hidden justify-center md:flex">
        <nav
          aria-label="Primary"
          className="pointer-events-auto flex items-center gap-1 rounded-full border bg-nav-bg py-1.5 pr-1.5 pl-4 shadow-sm backdrop-blur-md"
        >
          <Logo />
          <ul className="ml-3 flex items-center gap-0.5">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  aria-current={isActive(l.to, pathname) ? 'page' : undefined}
                  className="rounded-full px-3 py-1.5 text-[13px] text-text-2 transition-colors hover:text-text aria-[current=page]:bg-surface-2 aria-[current=page]:text-text"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Link
            to={resumeLink}
            className="rounded-full bg-text px-3.5 py-1.5 text-[13px] font-medium text-bg"
          >
            Résumé
          </Link>
        </nav>
      </div>
      {/* Mobile: full-width bar */}
      <div className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b bg-nav-bg px-5 backdrop-blur-md md:hidden">
        <Logo />
        <div className="-mr-3 flex items-center">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
