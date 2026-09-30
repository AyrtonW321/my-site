import { Link } from 'react-router'
import { ArrowIcon } from '../../components/ui/ArrowIcon'
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

/** The whole card opens the project page (stretched title link); the GitHub pill sits above it. */
export function ProjectCard({ project, index, headingLevel = 3 }: Props) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const { github } = project.links
  return (
    <div className="group relative h-full rounded-[20px]">
      <Card interactive className="h-full p-4 pb-6">
        <ProjectMedia project={project} tone={index % 2 === 0 ? 'accent' : 'neutral'} />
        <div className="mt-5 flex items-baseline justify-between gap-4 px-2">
          <Heading className="text-lg font-medium tracking-tight">
            <Link
              to={`/projects/${project.slug}`}
              className="after:absolute after:inset-0 after:rounded-[20px] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
            >
              {project.title}
            </Link>
          </Heading>
          <span className="font-mono text-[11px] text-text-3">{projectBadge(project)}</span>
        </div>
        <p className="mt-2 px-2 text-sm leading-relaxed text-text-2">{project.summary}</p>
        <div className="mt-4 flex items-center gap-2 px-2">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/gh relative z-10 ml-auto inline-flex min-h-11 shrink-0 items-center gap-1 rounded-md border px-2.5 font-mono text-[11px] text-text-2 transition-colors hover:border-accent hover:text-text md:min-h-8"
            >
              GitHub
              <ArrowIcon />
              <span className="sr-only"> repository for {project.title} (opens in new tab)</span>
            </a>
          )}
        </div>
      </Card>
    </div>
  )
}
