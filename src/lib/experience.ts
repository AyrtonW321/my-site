import { experience } from '../content/experience'
import type { Experience } from '../content/types'
import { formatDateRange } from './format'

const yearMonth = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`

/** Ongoing, or ends this month or later ('YYYY-MM' strings compare correctly). */
export const isCurrent = (e: Experience, now: Date = new Date()) =>
  e.end === null || e.end >= yearMonth(now)

/** First role that is still current; drives the About "Now" card. */
export const getCurrentRole = (list: readonly Experience[] = experience, now: Date = new Date()) =>
  list.find((e) => isCurrent(e, now))

/** The label (e.g. "CO-OP") stands in for dates when present. */
export const experiencePeriod = (e: Experience) =>
  e.label ?? (e.start ? formatDateRange(e.start, e.end) : '')
