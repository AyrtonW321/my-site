import { Container } from '../components/ui/Container'
import { profile } from '../content/profile'

export default function HomePage() {
  return (
    <Container className="pt-28 pb-24">
      <title>{`${profile.first} ${profile.last} — Applied Math @ Waterloo`}</title>
      <h1 className="text-5xl font-bold tracking-tight">
        {profile.first} {profile.last}.
      </h1>
    </Container>
  )
}
