import { projects } from '../content/projects'
import type { Project } from '../content/types'

export const getFeatured = (list: readonly Project[] = projects) =>
  list.filter((p) => p.featured && p.status !== 'planned').slice(0, 4)

export const getListed = (list: readonly Project[] = projects) =>
  list.filter((p) => p.status !== 'planned')

export const getPlanned = (list: readonly Project[] = projects) =>
  list.filter((p) => p.status === 'planned')

/** Planned projects have no detail page. */
export const getBySlug = (slug: string | undefined, list: readonly Project[] = projects) =>
  list.find((p) => p.slug === slug && p.status !== 'planned')

/** "WIP" replaces the year while a project is in progress. */
export const projectBadge = (p: Project) => (p.status === 'wip' ? 'WIP' : String(p.year))

/** The next listed project after `slug`, wrapping around; undefined when there is nothing else to show. */
export function getNext(slug: string, list: readonly Project[] = projects) {
  const listed = getListed(list)
  const i = listed.findIndex((p) => p.slug === slug)
  if (i === -1 || listed.length < 2) return undefined
  return listed[(i + 1) % listed.length]
}

export const statusLabel = (p: Project) =>
  ({ done: 'Completed', wip: 'In progress', planned: 'Planned' })[p.status]
