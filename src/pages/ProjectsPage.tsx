import { Container } from '../components/ui/Container'
import { profile } from '../content/profile'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ProjectsPage() {
  usePageMeta(
    `Projects — ${profile.first} ${profile.last}`,
    `Projects by ${profile.first} ${profile.last}.`,
  )
  return (
    <Container className="pt-28 pb-24">
      <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
    </Container>
  )
}
