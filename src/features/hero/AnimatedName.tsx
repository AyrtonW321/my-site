import { profile } from '../../content/profile'

export const NAME_START_MS = 250
export const LETTER_STAGGER_MS = 30

function Letters({ text, offset }: { text: string; offset: number }) {
  return [...text].map((char, i) => (
    <span
      key={i}
      className="hero-letter"
      style={{ animationDelay: `${NAME_START_MS + (offset + i) * LETTER_STAGGER_MS}ms` }}
    >
      {char}
    </span>
  ))
}

/** Plain name for screen readers; the letters rise in one by one (sighted, motion allowed). */
export function AnimatedName() {
  const { first, last } = profile
  return (
    <h1
      id="hero-title"
      className="mt-8 text-[64px] leading-[0.95] font-bold tracking-[-0.045em] sm:text-[88px] md:text-[120px]"
    >
      <span className="sr-only">
        {first} {last}.
      </span>
      <span aria-hidden="true" className="block">
        <Letters text={first} offset={0} />
      </span>
      <span aria-hidden="true" className="block text-accent">
        <Letters text={`${last}.`} offset={first.length} />
      </span>
    </h1>
  )
}
