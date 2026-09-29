import { Link, useParams } from 'react-router'
import { Container } from '../components/ui/Container'
import { Tag } from '../components/ui/Tag'
import { profile } from '../content/profile'
import type { Project } from '../content/types'
import { usePageMeta } from '../hooks/usePageMeta'
import { getBySlug } from '../lib/projects'
import NotFoundPage from './NotFoundPage'

// Minimal until the Figma outline arrives (M5).
function ProjectDetail({ project }: { project: Project }) {
  usePageMeta(`${project.title} — ${profile.first} ${profile.last}`, project.summary)
  return (
    <Container className="pt-28 pb-24">
      <Link to="/projects" className="text-sm text-text-2 hover:text-text">
        ← All projects
      </Link>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight">{project.title}</h1>
      <p className="mt-3 max-w-xl text-text-2">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default function ProjectDetailPage() {
  const project = getBySlug(useParams().slug)
  return project ? <ProjectDetail project={project} /> : <NotFoundPage />
}
