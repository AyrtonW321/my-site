import { Container } from '../components/ui/Container'
import { profile } from '../content/profile'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ExperiencePage() {
  usePageMeta(
    `Experience — ${profile.first} ${profile.last}`,
    `Work and volunteer experience of ${profile.first} ${profile.last}.`,
  )
  return (
    <Container className="pt-28 pb-24">
      <h1 className="text-4xl font-semibold tracking-tight">Experience</h1>
      {/* Stand-in target until the ResumePanel lands in M6 */}
      <details id="resume" className="mt-10">
        <summary>Résumé</summary>
      </details>
    </Container>
  )
}
