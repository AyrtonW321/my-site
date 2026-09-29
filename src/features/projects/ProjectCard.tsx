import { Link } from 'react-router'
import { Card } from '../../components/ui/Card'
import { Tag } from '../../components/ui/Tag'
import type { Project } from '../../content/types'
import { projectBadge } from '../../lib/projects'
import { ProjectMedia } from './ProjectMedia'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block h-full rounded-[20px]">
      <Card interactive className="h-full p-4 pb-6">
        <ProjectMedia project={project} tone={index % 2 === 0 ? 'accent' : 'neutral'} />
        <div className="mt-5 flex items-baseline justify-between gap-4 px-2">
          <h3 className="text-lg font-medium tracking-tight">{project.title}</h3>
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
