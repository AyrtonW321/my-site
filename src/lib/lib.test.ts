import { describe, expect, it } from 'vitest'
import type { Experience, Project } from '../content/types'
import { experiencePeriod, getCurrentRole, isCurrent } from './experience'
import { formatDateRange, formatMonthYear } from './format'
import {
  getBySlug,
  getFeatured,
  getListed,
  getNext,
  getPlanned,
  projectBadge,
  statusLabel,
} from './projects'

const mk = (slug: string, over: Partial<Project> = {}): Project => ({
  slug,
  title: slug,
  year: 2026,
  status: 'done',
  featured: false,
  summary: 's',
  tags: [],
  links: {},
  ...over,
})

describe('format', () => {
  it('formats month/year and ranges', () => {
    expect(formatMonthYear('2026-09')).toBe('SEP 2026')
    expect(formatDateRange('2026-06', null)).toBe('JUN 2026 – NOW')
    expect(formatDateRange('2021-03', '2025-08')).toBe('MAR 2021 – AUG 2025')
  })
})

describe('projects selectors', () => {
  const list = [
    mk('a', { featured: true }),
    mk('b', { featured: true, status: 'wip' }),
    mk('c', { featured: true, status: 'planned' }),
    mk('d'),
    mk('e', { featured: true }),
    mk('f', { featured: true }),
    mk('g', { featured: true }),
  ]

  it('features at most 4 and never planned ones', () => {
    const featured = getFeatured(list)
    expect(featured.map((p) => p.slug)).toEqual(['a', 'b', 'e', 'f'])
  })

  it('splits listed and planned', () => {
    expect(getListed(list).some((p) => p.status === 'planned')).toBe(false)
    expect(getPlanned(list).map((p) => p.slug)).toEqual(['c'])
  })

  it('hides planned and unknown slugs from the detail page', () => {
    expect(getBySlug('a', list)?.slug).toBe('a')
    expect(getBySlug('c', list)).toBeUndefined()
    expect(getBySlug('nope', list)).toBeUndefined()
  })

  it('shows WIP instead of the year', () => {
    expect(projectBadge(mk('x', { status: 'wip' }))).toBe('WIP')
    expect(projectBadge(mk('x'))).toBe('2026')
    expect(projectBadge(mk('x', { year: undefined }))).toBe('')
  })
})

describe('experience selectors', () => {
  const role = (id: string, over: Partial<Experience>): Experience => ({
    id,
    role: 'r',
    company: 'c',
    end: null,
    summary: 's',
    ...over,
  })

  it('picks the first current role', () => {
    const list = [role('old', { end: '2020-01' }), role('now', {}), role('also', {})]
    expect(getCurrentRole(list)?.id).toBe('now')
  })

  it('treats a role as current until the end of its last month', () => {
    const coop = role('coop', { end: '2026-12' })
    expect(isCurrent(coop, new Date(2026, 8, 29))).toBe(true) // Sep 2026
    expect(isCurrent(coop, new Date(2026, 11, 31))).toBe(true) // Dec 2026
    expect(isCurrent(coop, new Date(2027, 0, 1))).toBe(false) // Jan 2027
    expect(isCurrent(role('open', {}), new Date(2040, 0, 1))).toBe(true)
  })

  it('moves the current role on once the co-op ends', () => {
    const list = [role('coop', { end: '2026-12' }), role('part-time', {})]
    expect(getCurrentRole(list, new Date(2026, 9, 1))?.id).toBe('coop')
    expect(getCurrentRole(list, new Date(2027, 0, 1))?.id).toBe('part-time')
  })

  it('uses the label in place of dates', () => {
    expect(experiencePeriod(role('x', { label: 'CO-OP' }))).toBe('CO-OP')
    expect(experiencePeriod(role('x', { start: '2026-06' }))).toBe('JUN 2026 – NOW')
  })
})

describe('getNext / statusLabel', () => {
  const list = [mk('a'), mk('b', { status: 'planned' }), mk('c'), mk('d', { status: 'wip' })]

  it('walks listed projects, skips planned, wraps around', () => {
    expect(getNext('a', list)?.slug).toBe('c')
    expect(getNext('c', list)?.slug).toBe('d')
    expect(getNext('d', list)?.slug).toBe('a')
  })

  it('has no next for unknown slugs or a single project', () => {
    expect(getNext('zzz', list)).toBeUndefined()
    expect(getNext('a', [mk('a')])).toBeUndefined()
  })

  it('labels statuses', () => {
    expect(statusLabel(mk('x', { status: 'wip' }))).toBe('In progress')
    expect(statusLabel(mk('x'))).toBe('Completed')
  })
})
