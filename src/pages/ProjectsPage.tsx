import { Container } from '../components/ui/Container'
import { profile } from '../content/profile'

export default function ProjectsPage() {
  return (
    <Container className="pt-28 pb-24">
      <title>{`Projects — ${profile.first} ${profile.last}`}</title>
      <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
    </Container>
  )
}
