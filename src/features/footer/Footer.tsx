import { Container } from '../../components/ui/Container'
import { profile } from '../../content/profile'

export function Footer() {
  return (
    <footer className="mt-24 border-t py-8 font-mono text-[11px] text-text-3">
      <Container className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.first} {profile.last}
        </p>
        <p>Designed in Figma · Built with Claude</p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="min-h-11 hover:text-text md:min-h-0"
        >
          Back to top ↑
        </button>
      </Container>
    </footer>
  )
}
