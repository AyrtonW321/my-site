import { profile } from '../content/profile'
import { AboutSection } from '../features/about/AboutSection'
import { ContactSection } from '../features/contact/ContactSection'
import { ExperienceSummary } from '../features/experience/ExperienceSummary'
import { Hero } from '../features/hero/Hero'
import { FeaturedProjects } from '../features/projects/FeaturedProjects'

export default function HomePage() {
  return (
    <>
      <title>{`${profile.first} ${profile.last} — Applied Math @ Waterloo`}</title>
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <ExperienceSummary />
      <ContactSection />
    </>
  )
}
