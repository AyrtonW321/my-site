import { Link } from 'react-router'
import { Card } from '../../components/ui/Card'
import { Tag } from '../../components/ui/Tag'
import type { Project } from '../../content/types'
import { projectBadge } from '../../lib/projects'
import { ProjectMedia } from './ProjectMedia'

interface Props {
  project: Project
  index: number
  /** Heading level of the title; pick the one that follows the parent heading. */
  headingLevel?: 2 | 3
}

export function ProjectCard({ project, index, headingLevel = 3 }: Props) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <Link to={`/projects/${project.slug}`} className="group block h-full rounded-[20px]">
      <Card interactive className="h-full p-4 pb-6">
        <ProjectMedia project={project} tone={index % 2 === 0 ? 'accent' : 'neutral'} />
        <div className="mt-5 flex items-baseline justify-between gap-4 px-2">
          <Heading className="text-lg font-medium tracking-tight">{project.title}</Heading>
          <span className="font-mono text-[11px] text-text-3">{projectBadge(project)}</span>
        </div>
        <p className="mt-2 px-2 text-sm leading-relaxed text-text-2">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2 px-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </Card>
    </Link>
  )
}
