import { Link } from 'react-router'
import { ArrowIcon } from '../../components/ui/ArrowIcon'
import type { Experience } from '../../content/types'
import { PeriodLabel } from './PeriodLabel'

export function TimelineItem({ item }: { item: Experience }) {
  const place = [item.company, item.location].filter(Boolean).join(' · ')
  return (
    <Link
      to="/experience"
      className="group grid gap-2 border-t py-6 md:grid-cols-[261px_1fr_1.1fr_auto] md:gap-8"
    >
      <PeriodLabel item={item} />
      <div>
        <h3 className="text-[17px] font-medium tracking-tight">{item.role}</h3>
        <p className="mt-1 text-sm text-accent-text">{place}</p>
      </div>
      {item.summary ? (
        <p className="text-[15px] leading-relaxed text-text-2">{item.summary}</p>
      ) : (
        <span />
      )}
      <ArrowIcon className="hidden text-text-3 md:block" />
    </Link>
  )
}
