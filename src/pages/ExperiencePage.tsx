import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { experience } from '../content/experience'
import { profile } from '../content/profile'
import { ExperienceEntry } from '../features/experience/ExperienceEntry'
import { ResumePanel } from '../features/experience/ResumePanel'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ExperiencePage() {
  usePageMeta(
    `Experience — ${profile.first} ${profile.last}`,
    `Work and volunteer experience of ${profile.first} ${profile.last}.`,
  )
  return (
    <Container className="pt-24 pb-8 md:pt-36">
      <PageHeader label="Experience" title={profile.sections.experience} />
      <ol className="mt-10 border-b md:mt-12">
        {experience.map((item) => (
          <li key={item.id}>
            <ExperienceEntry item={item} />
          </li>
        ))}
      </ol>
      <ResumePanel />
    </Container>
  )
}
