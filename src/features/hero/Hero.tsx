import { Container } from '../../components/ui/Container'
import { profile } from '../../content/profile'
import { AnimatedName } from './AnimatedName'
import { QuickLinks } from './QuickLinks'
import { Tagline } from './Tagline'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-28 md:pt-40">
      <Container>
        <div className="hero-bar h-1 w-14 bg-accent" />
        <AnimatedName />
        <Tagline />
        <hr className="mt-8 md:mt-10" />
        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-[1fr_380px] md:gap-12">
          <div className="max-w-xl">
            <p className="text-xl leading-snug md:text-[22px]">{profile.intro.lead}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-2">{profile.intro.body}</p>
          </div>
          <QuickLinks />
        </div>
      </Container>
    </section>
  )
}
