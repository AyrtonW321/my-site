import { experience } from '../content/experience'
import type { Experience } from '../content/types'
import { formatDateRange } from './format'

/** First role with no end date; drives the About "Now" card. */
export const getCurrentRole = (list: readonly Experience[] = experience) =>
  list.find((e) => e.end === null)

/** The label (e.g. "CO-OP") stands in for dates when present. */
export const experiencePeriod = (e: Experience) =>
  e.label ?? (e.start ? formatDateRange(e.start, e.end) : '')
