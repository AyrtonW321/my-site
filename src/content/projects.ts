import type { Project } from './types'

// Person Tracker is omitted until its write-up is real (no placeholder text ships).
export const projects: readonly Project[] = [
  {
    slug: 'uw-course-planner',
    title: 'UW Course Planner',
    year: 2026,
    status: 'done',
    featured: true,
    summary: 'Plan a Waterloo degree with an AI agent that checks prerequisites for you.',
    tags: ['React', 'TypeScript', 'Firebase', 'Gemini'],
    links: {},
  },
  {
    slug: 'space-mining',
    title: 'Space Mining',
    year: 2026,
    status: 'done',
    featured: true,
    summary: 'A Roblox game about mining asteroids and upgrading your ship.',
    tags: ['Luau', 'Roblox Studio'],
    links: {},
  },
  {
    slug: 'skill-router',
    title: 'Skill Router',
    year: 2026,
    status: 'wip',
    featured: true,
    summary: 'Routes each request to the right Claude skill so a big library stays fast.',
    tags: ['LLM tooling', 'Claude'],
    links: {},
  },
]
