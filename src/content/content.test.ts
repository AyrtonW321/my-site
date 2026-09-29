import { describe, expect, it } from 'vitest'
import { experience } from './experience'
import { profile } from './profile'
import { projects } from './projects'

const strings = (v: unknown): string[] =>
  typeof v === 'string' ? [v] : v && typeof v === 'object' ? Object.values(v).flatMap(strings) : []

describe('content integrity (always on)', () => {
  it('has unique kebab-case project slugs', () => {
    const slugs = projects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
  })

  it('features at most 4 projects', () => {
    expect(projects.filter((p) => p.featured).length).toBeLessThanOrEqual(4)
  })

  it('has unique experience ids', () => {
    const ids = experience.map((e) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('ships no placeholder text', () => {
    const all = strings([profile, projects, experience])
    for (const s of all) expect(s).not.toMatch(/placeholder|lorem|TODO/i)
  })
})

// Run with `npm run test:launch` (vitest --mode launch). Not part of CI until M8.
describe.skipIf(import.meta.env.MODE !== 'launch')('launch gate', () => {
  it('gives every done/wip project a thumbnail', () => {
    for (const p of projects.filter((p) => p.status !== 'planned')) {
      expect(p.thumbnail, p.slug).toBeTruthy()
    }
  })

  it('has a LinkedIn URL', () => {
    expect(profile.links.linkedin).toMatch(/^https:\/\/(www\.)?linkedin\.com\//)
  })

  it('has the résumé files', () => {
    expect(Object.keys(import.meta.glob('/public/resume.{pdf,png}'))).toHaveLength(2)
  })
})
