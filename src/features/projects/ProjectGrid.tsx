import type { Project } from '../../content/types'
import { ProjectCard } from './ProjectCard'

export function ProjectGrid({
  projects,
  headingLevel,
}: {
  projects: readonly Project[]
  headingLevel?: 2 | 3
}) {
  return (
    <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
      {projects.map((project, i) => (
        <li key={project.slug}>
          <ProjectCard project={project} index={i} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  )
}
