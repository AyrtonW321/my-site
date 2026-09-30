import { Outlet, ScrollRestoration } from 'react-router'
import { Background } from './Background'
import { Footer } from '../features/footer/Footer'
import { Nav } from '../features/nav/Nav'
import { useHashScroll } from '../hooks/useHashScroll'

export function RootLayout() {
  useHashScroll()
  return (
    <>
      <Background />
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-text px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1} className="pt-14 outline-none md:pt-0">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
