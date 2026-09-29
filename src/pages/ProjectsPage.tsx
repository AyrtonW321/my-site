import { Container } from '../components/ui/Container'
import { PageHeader } from '../components/ui/PageHeader'
import { profile } from '../content/profile'
import { ProjectGrid } from '../features/projects/ProjectGrid'
import { UpNextCard } from '../features/projects/UpNextCard'
import { usePageMeta } from '../hooks/usePageMeta'
import { getListed, getPlanned } from '../lib/projects'

export default function ProjectsPage() {
  usePageMeta(
    `Projects — ${profile.first} ${profile.last}`,
    `Projects by ${profile.first} ${profile.last}.`,
  )
  const planned = getPlanned()
  return (
    <Container className="pt-24 pb-8 md:pt-36">
      <PageHeader label="Projects" title={profile.sections.projects} />
      <div className="mt-10 md:mt-12">
        <ProjectGrid projects={getListed()} headingLevel={2} />
      </div>
      {planned.length > 0 && (
        <section aria-labelledby="up-next" className="mt-16 md:mt-24">
          <h2 id="up-next" className="text-2xl font-semibold tracking-tight">
            Up next
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {planned.map((project) => (
              <li key={project.slug}>
                <UpNextCard project={project} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  )
}
