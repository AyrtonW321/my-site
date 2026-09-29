import { Link, useLocation } from 'react-router'
import { useScrolled } from '../../hooks/useScrolled'
import { cn } from '../../lib/cn'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { NavPill } from './NavPill'
import { ThemeToggle } from './ThemeToggle'
import { navLinks, resumeLink, sectionIds } from './links'
import { useActiveSection } from './useActiveSection'

const onHome = (pathname: string) => pathname === '/'

export function Nav() {
  const { pathname } = useLocation()
  const scrolled = useScrolled(40)
  const section = useActiveSection(sectionIds, onHome(pathname))

  // On the homepage the highlight follows the section in view (Home at the top);
  // elsewhere it follows the route.
  const activeLabel = onHome(pathname)
    ? (navLinks.find((l) => l.section === section)?.label ?? 'Home')
    : (navLinks.find((l) => l.to !== '/' && !l.to.includes('#') && pathname.startsWith(l.to))
        ?.label ?? null)

  return (
    <header>
      {/* Desktop: floating pill */}
      <div className="pointer-events-none fixed inset-x-0 top-4 z-50 hidden justify-center md:flex">
        <nav
          aria-label="Primary"
          className={cn(
            'pointer-events-auto flex origin-top items-center gap-1 rounded-full border bg-nav-bg py-1.5 pr-1.5 pl-4 backdrop-blur-md transition-[transform,box-shadow] duration-300',
            scrolled ? 'scale-[.96] shadow-lg' : 'shadow-sm',
          )}
        >
          <Logo />
          <NavPill activeLabel={activeLabel} sectionActive={onHome(pathname)} />
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
