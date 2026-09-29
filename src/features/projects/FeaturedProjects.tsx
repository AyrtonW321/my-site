import { Link } from 'react-router'
import { ArrowIcon } from '../../components/ui/ArrowIcon'
import { Section } from '../../components/ui/Section'
import { buttonClass } from '../../components/ui/buttonStyles'
import { profile } from '../../content/profile'
import { getFeatured } from '../../lib/projects'
import { ProjectCard } from './ProjectCard'

export function FeaturedProjects() {
  return (
    <Section
      id="projects"
      index="02"
      label="Projects"
      title={profile.sections.projects}
      action={
        <Link
          to="/projects"
          className={buttonClass('outline', 'h-9 min-h-0 text-xs max-md:hidden')}
        >
          View all <ArrowIcon />
        </Link>
      }
    >
      <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
        {getFeatured().map((project, i) => (
          <li key={project.slug}>
            <ProjectCard project={project} index={i} />
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center md:hidden">
        <Link to="/projects" className={buttonClass('outline')}>
          View all projects <ArrowIcon />
        </Link>
      </div>
    </Section>
  )
}
