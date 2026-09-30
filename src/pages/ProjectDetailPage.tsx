import { useParams } from 'react-router'
import { Container } from '../components/ui/Container'
import { profile } from '../content/profile'
import type { Project } from '../content/types'
import { ProjectDetail } from '../features/projects/ProjectDetail'
import { usePageMeta } from '../hooks/usePageMeta'
import { getBySlug } from '../lib/projects'
import NotFoundPage from './NotFoundPage'

function ProjectPage({ project }: { project: Project }) {
  usePageMeta(`${project.title} — ${profile.first} ${profile.last}`, project.summary)
  return (
    <Container className="pt-24 pb-8 md:pt-36">
      <ProjectDetail project={project} />
    </Container>
  )
}

export default function ProjectDetailPage() {
  const project = getBySlug(useParams().slug)
  return project ? <ProjectPage project={project} /> : <NotFoundPage />
}
