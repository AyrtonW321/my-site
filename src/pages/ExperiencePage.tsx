import { Container } from '../components/ui/Container'
import { profile } from '../content/profile'

export default function ExperiencePage() {
  return (
    <Container className="pt-28 pb-24">
      <title>{`Experience — ${profile.first} ${profile.last}`}</title>
      <h1 className="text-4xl font-semibold tracking-tight">Experience</h1>
      {/* Stand-in target until the ResumePanel lands in M6 */}
      <details id="resume" className="mt-10">
        <summary>Résumé</summary>
      </details>
    </Container>
  )
}
