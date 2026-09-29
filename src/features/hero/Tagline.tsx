import { profile } from '../../content/profile'
import { typingSchedule } from '../../lib/typing'
import { LETTER_STAGGER_MS, NAME_START_MS } from './AnimatedName'

const NAME_LETTERS = profile.first.length + profile.last.length + 1
// Start once the last letter has (nearly) finished rising.
const TYPE_START_MS = NAME_START_MS + NAME_LETTERS * LETTER_STAGGER_MS + 350
const SEPARATOR_CHARS = 3 // " / "

/** Monospace tagline that types in segment by segment after the name lands. */
export function Tagline() {
  const items = profile.tagline
  const schedule = typingSchedule(
    items.map((item, i) => item.length + (i < items.length - 1 ? SEPARATOR_CHARS : 0)),
    TYPE_START_MS,
  )
  return (
    <p className="mt-6 font-mono text-[11px] leading-6 tracking-[0.14em] uppercase">
      {items.map((item, i) => {
        const step = schedule[i]
        return (
          <span
            key={item}
            className="hero-type inline-block whitespace-nowrap"
            style={
              step && {
                animationDelay: `${step.delay}ms`,
                animationDuration: `${step.duration}ms`,
                animationTimingFunction: `steps(${step.steps})`,
              }
            }
          >
            <span className={i === 0 ? 'text-accent-text' : 'text-text-2'}>{item}</span>
            {i < items.length - 1 && (
              <span aria-hidden="true" className="mx-2 text-text-decor">
                /
              </span>
            )}
          </span>
        )
      })}
    </p>
  )
}
