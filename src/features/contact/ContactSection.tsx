import { ArrowIcon } from '../../components/ui/ArrowIcon'
import { Card } from '../../components/ui/Card'
import { Section } from '../../components/ui/Section'
import { buttonClass } from '../../components/ui/buttonStyles'
import { profile } from '../../content/profile'
import { CopyEmailButton } from './CopyEmailButton'

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const

export function ContactSection() {
  const { emails, links, sections } = profile
  const { lead, accent, blurb } = sections.contact
  return (
    <Section id="contact" index="04" label="Contact">
      <Card className="p-6 md:p-14">
        <h2
          id="contact-title"
          className="text-[40px] leading-[1.05] font-semibold tracking-[-0.04em] sm:text-6xl md:text-[72px]"
        >
          {lead} <span className="text-accent-display">{accent}</span>
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-text-2">{blurb}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${emails.primary}`} className={buttonClass('primary')}>
            {emails.primary} <ArrowIcon />
          </a>
          <CopyEmailButton email={emails.primary} />
          {links.linkedin && (
            <a
              href={links.linkedin}
              aria-label="LinkedIn (opens in new tab)"
              className={buttonClass('outline')}
              {...ext}
            >
              LinkedIn
            </a>
          )}
          <a
            href={links.github}
            aria-label="GitHub (opens in new tab)"
            className={buttonClass('outline')}
            {...ext}
          >
            GitHub
          </a>
        </div>
        <p className="mt-6 text-sm text-text-3">
          UW email:{' '}
          <a
            href={`mailto:${emails.school}`}
            className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-text md:min-h-0"
          >
            {emails.school}
          </a>
        </p>
      </Card>
    </Section>
  )
}
