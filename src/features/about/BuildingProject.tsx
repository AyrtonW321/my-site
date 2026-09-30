import { Link } from 'react-router'
import { ArrowIcon } from '../../components/ui/ArrowIcon'
import { Tag } from '../../components/ui/Tag'
import type { Project } from '../../content/types'
import { projectBadge } from '../../lib/projects'
import { ProjectMedia } from '../projects/ProjectMedia'

/** Compact project card for the About "what I'm making right now" callout. */
export function BuildingProject({ project }: { project: Project }) {
  const badge = projectBadge(project)
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex items-center gap-4 rounded-2xl border bg-bg p-3 pr-4 transition-[transform,border-color] hover:-translate-y-0.5 hover:border-accent focus-visible:-translate-y-0.5"
    >
      <div className="w-24 shrink-0 sm:w-44">
        <ProjectMedia project={project} tone="accent" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="text-base font-medium tracking-tight">{project.title}</h4>
          {badge && <span className="font-mono text-[11px] text-text-3">{badge}</span>}
        </div>
        {project.summary && (
          <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-text-2 sm:line-clamp-2">
            {project.summary}
          </p>
        )}
        {project.tags.length > 0 && (
          <ul className="mt-3 hidden flex-wrap gap-2 sm:flex">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ArrowIcon className="text-text-3" />
    </Link>
  )
}
