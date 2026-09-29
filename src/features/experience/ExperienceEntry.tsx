import { ArrowIcon } from '../../components/ui/ArrowIcon'
import { Tag } from '../../components/ui/Tag'
import type { Experience } from '../../content/types'
import { formatDateRange } from '../../lib/format'
import { PeriodLabel } from './PeriodLabel'

/** One role on the full timeline: when and what kind on the left, the detail on the right. */
export function ExperienceEntry({ item }: { item: Experience }) {
  const place = [item.company, item.location].filter(Boolean).join(' · ')
  return (
    <article className="grid gap-4 border-t py-8 md:grid-cols-[261px_1fr] md:gap-8">
      <div className="space-y-3">
        <PeriodLabel item={item} />
        {/* A label like "CO-OP" replaces the dates in the caption, so show them here too. */}
        {item.label && item.start && (
          <p className="font-mono text-[11px] tracking-[0.14em] text-text-3 uppercase">
            {formatDateRange(item.start, item.end)}
          </p>
        )}
        {item.kind && item.kind.toLowerCase() !== item.label?.toLowerCase() && (
          <Tag>{item.kind}</Tag>
        )}
      </div>
      <div>
        <h2 className="text-xl font-medium tracking-tight">{item.role}</h2>
        <p className="mt-1 text-sm text-accent-text">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
            >
              {place}
              <ArrowIcon />
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          ) : (
            place
          )}
        </p>
        {item.summary && (
          <p className="mt-4 text-[15px] leading-relaxed text-text-2">{item.summary}</p>
        )}
        {item.bullets && item.bullets.length > 0 && (
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-text-2 marker:text-text-decor">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
