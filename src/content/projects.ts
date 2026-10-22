import type { Project } from './types'

export const projects: readonly Project[] = [
  {
    slug: 'lumen',
    title: 'Lumen',
    year: 2026,
    status: 'wip',
    featured: true,
    summary:
      'A local lead tracker and call logger that ranks leads with a PyTorch model and suggests the next step.',
    tags: ['Python', 'PyTorch', 'SQLite', 'TypeScript'],
    links: { github: 'https://github.com/AyrtonW321/Lumen' },
  },
  {
    slug: 'fillsight',
    title: 'Fillsight',
    year: 2026,
    status: 'wip',
    featured: true,
    summary:
      'Fuel-price analytics for the Greater Toronto Area: a station explorer, price history and insights, currently a demo on sample data.',
    tags: ['React', 'TypeScript', 'Vite'],
    links: { github: 'https://github.com/AyrtonW321/Fillsight' },
  },
  {
    slug: 'tech-store',
    title: 'Tech Store',
    year: 2026,
    status: 'wip',
    featured: true,
    summary: 'A Roblox game about running a tech store.',
    tags: ['Luau', 'Roblox Studio'],
    links: {},
  },
  {
    slug: 'looplanner',
    title: 'LooPlanner',
    year: 2026,
    status: 'done',
    featured: true,
    summary: 'Plan a Waterloo degree with an AI agent that checks prerequisites for you.',
    tags: ['React', 'TypeScript', 'Firebase', 'Gemini'],
    links: { github: 'https://github.com/AyrtonW321/LooPlanner' },
  },
  {
    slug: 'space-mining',
    title: 'Space Mining',
    year: 2026,
    status: 'wip',
    featured: false,
    summary: 'A Roblox game about mining asteroids and upgrading your ship.',
    tags: ['Luau', 'Roblox Studio'],
    links: {},
  },
  {
    slug: 'person-tracker',
    title: 'Person Tracker',
    year: 2025,
    status: 'done',
    featured: false,
    summary:
      'Tracks a person on live video from a Raspberry Pi and steers a pan–tilt camera to keep them centered.',
    tags: ['Python', 'OpenCV', 'Raspberry Pi'],
    links: { github: 'https://github.com/harryliu1125/Person_Tracker' },
    collaborators: ['Harry Liu'],
  },
]
