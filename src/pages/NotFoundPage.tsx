import { Link } from 'react-router'
import { Container } from '../components/ui/Container'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFoundPage() {
  usePageMeta('Page not found')
  return (
    <Container className="pt-28 pb-24">
      <meta name="robots" content="noindex" />
      <p className="font-mono text-xs tracking-widest text-accent-text uppercase">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Nothing here.</h1>
      <p className="mt-3 text-text-2">That page doesn't exist or has moved.</p>
      <Link
        to="/"
        className="mt-6 inline-flex min-h-11 items-center rounded-full bg-text px-5 text-sm font-medium text-bg"
      >
        Back home
      </Link>
    </Container>
  )
}
