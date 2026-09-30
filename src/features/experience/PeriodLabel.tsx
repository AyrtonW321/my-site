import type { Experience } from '../../content/types'
import { cn } from '../../lib/cn'
import { experiencePeriod, isCurrent } from '../../lib/experience'

/** Mono caption with a dot: accent while the role is current, muted once it has ended. */
export function PeriodLabel({ item }: { item: Experience }) {
  return (
    <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-text-3 uppercase">
      <span
        aria-hidden="true"
        className={cn('size-1.5 rounded-full', isCurrent(item) ? 'bg-accent' : 'bg-text-decor')}
      />
      {experiencePeriod(item)}
    </p>
  )
}
