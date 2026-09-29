import { Link } from 'react-router'
import { ArrowIcon } from '../../components/ui/ArrowIcon'
import { Label } from '../../components/ui/Label'
import { Tag } from '../../components/ui/Tag'
import { buttonClass } from '../../components/ui/buttonStyles'
import type { Project } from '../../content/types'
import { getNext, statusLabel } from '../../lib/projects'
import { ProjectMedia } from './ProjectMedia'

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

function ExternalButton({
  href,
  variant,
  children,
}: {
  href: string
  variant: 'primary' | 'outline'
  children: string
}) {
  return (
    <a href={href} className={buttonClass(variant)} {...ext}>
      {children}
      <ArrowIcon />
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  )
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt>
        <Label>{label}</Label>
      </dt>
      <dd className="mt-2 text-[15px]">{children}</dd>
    </div>
  )
}

export function ProjectDetail({ project }: { project: Project }) {
  const next = getNext(project.slug)
  const { github, live } = project.links
  return (
    <>
      <Link
        to="/projects"
        className="inline-flex min-h-11 items-center text-sm text-text-2 hover:text-text"
      >
        ← All projects
      </Link>
      <header className="mt-4 md:mt-6">
        <Label className="text-[11px]">
          <span className="text-accent-text">{project.year}</span> / Project
        </Label>
        <h1 className="mt-3 text-[40px] leading-[1.05] font-semibold tracking-[-0.04em] md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-2">{project.summary}</p>
        {(github || live) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {github && (
              <ExternalButton href={github} variant="primary">
                GitHub
              </ExternalButton>
            )}
            {live && (
              <ExternalButton href={live} variant="outline">
                Live site
              </ExternalButton>
            )}
          </div>
        )}
      </header>

      <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-[1fr_260px] md:gap-14">
        <div className="min-w-0">
          <ProjectMedia project={project} />
          {project.body?.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-xl font-medium tracking-tight">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-relaxed text-text-2">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <aside aria-label="Project details" className="self-start md:sticky md:top-28">
          <dl className="space-y-6 border-t pt-6 md:border-t-0 md:pt-0">
            <Fact label="Status">{statusLabel(project)}</Fact>
            <Fact label="Year">{project.year}</Fact>
            {project.tags.length > 0 && (
              <Fact label="Built with">
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
              </Fact>
            )}
            {project.collaborators && project.collaborators.length > 0 && (
              <Fact label="With">{project.collaborators.join(', ')}</Fact>
            )}
          </dl>
        </aside>
      </div>

      {next && (
        <nav aria-label="Next project" className="mt-16 border-t pt-8 md:mt-24">
          <Link
            to={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-4 py-2"
          >
            <span>
              <Label>Next project</Label>
              <span className="mt-2 block text-2xl font-medium tracking-tight">{next.title}</span>
            </span>
            <ArrowIcon className="size-4 text-text-3" />
          </Link>
        </nav>
      )}
    </>
  )
}
