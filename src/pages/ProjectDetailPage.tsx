import { Link, useParams } from 'react-router'
import { Container } from '../components/ui/Container'
import { Tag } from '../components/ui/Tag'
import { profile } from '../content/profile'
import { getBySlug } from '../lib/projects'
import NotFoundPage from './NotFoundPage'

// Minimal until the Figma outline arrives (M5).
export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getBySlug(slug)
  if (!project) return <NotFoundPage />
  return (
    <Container className="pt-28 pb-24">
      <title>{`${project.title} — ${profile.first} ${profile.last}`}</title>
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
