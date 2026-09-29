import { Container } from '../../components/ui/Container'
import { profile } from '../../content/profile'
import { QuickLinks } from './QuickLinks'

export function Hero() {
  const [primary, ...rest] = profile.tagline
  return (
    <section aria-labelledby="hero-title" className="pt-28 md:pt-40">
      <Container>
        <div className="h-1 w-14 bg-accent" />
        <h1
          id="hero-title"
          className="mt-8 text-[64px] leading-[0.95] font-bold tracking-[-0.045em] sm:text-[88px] md:text-[120px]"
        >
          <span className="block">{profile.first}</span>
          <span className="block text-accent">{profile.last}.</span>
        </h1>
        <p className="mt-6 font-mono text-[11px] leading-6 tracking-[0.14em] uppercase">
          <span className="text-accent-text">{primary}</span>
          {rest.map((item) => (
            <span key={item}>
              <span className="mx-2 text-text-decor">/</span>
              <span className="text-text-2">{item}</span>
            </span>
          ))}
        </p>
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
