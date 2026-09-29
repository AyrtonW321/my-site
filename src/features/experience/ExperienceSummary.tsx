import { Link } from 'react-router'
import { ArrowIcon } from '../../components/ui/ArrowIcon'
import { Section } from '../../components/ui/Section'
import { buttonClass } from '../../components/ui/buttonStyles'
import { experience } from '../../content/experience'
import { profile } from '../../content/profile'
import { TimelineItem } from './TimelineItem'

const HOME_COUNT = 3

export function ExperienceSummary() {
  return (
    <Section id="experience" index="03" label="Experience" title={profile.sections.experience}>
      <ul className="border-b">
        {experience.slice(0, HOME_COUNT).map((item) => (
          <li key={item.id}>
            <TimelineItem item={item} />
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link to="/experience" className={buttonClass('outline')}>
          Full timeline <ArrowIcon />
        </Link>
      </div>
    </Section>
  )
}
