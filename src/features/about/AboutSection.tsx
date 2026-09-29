import { Section } from '../../components/ui/Section'
import { profile } from '../../content/profile'
import { BasedInCard } from './BasedInCard'
import { IntroCard } from './IntroCard'
import { NowCard } from './NowCard'
import { OffTheClockCard } from './OffTheClockCard'
import { ToolboxCard } from './ToolboxCard'

export function AboutSection() {
  return (
    <Section id="about" index="01" label="About" title={profile.sections.about}>
      <div className="grid gap-4 md:grid-cols-3">
        <IntroCard />
        <NowCard />
        <BasedInCard />
        <ToolboxCard />
        <OffTheClockCard />
      </div>
    </Section>
  )
}
