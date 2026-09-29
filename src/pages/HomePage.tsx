import { profile } from '../content/profile'
import { AboutSection } from '../features/about/AboutSection'
import { ContactSection } from '../features/contact/ContactSection'
import { ExperienceSummary } from '../features/experience/ExperienceSummary'
import { Hero } from '../features/hero/Hero'
import { FeaturedProjects } from '../features/projects/FeaturedProjects'
import { usePageMeta } from '../hooks/usePageMeta'

export default function HomePage() {
  usePageMeta(`${profile.first} ${profile.last} — Applied Math @ Waterloo`)
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <ExperienceSummary />
      <ContactSection />
    </>
  )
}
