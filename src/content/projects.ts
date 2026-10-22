import type { Project } from './types'

export const projects: readonly Project[] = [
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
  {
    slug: 'person-tracker',
    title: 'Person Tracker',
    year: 2025,
    status: 'done',
    featured: true,
    summary:
      'Tracks a person on live video from a Raspberry Pi and steers a pan–tilt camera to keep them centered.',
    tags: ['Python', 'OpenCV', 'Raspberry Pi'],
    links: { github: 'https://github.com/harryliu1125/Person_Tracker' },
    collaborators: ['Harry Liu'],
  },
  {
    slug: 'lumen',
    title: 'Lumen',
    year: 2026,
    status: 'wip',
    featured: false,
    summary:
      'A Python call-logging tool for Haneco cold calling that flags which leads need a follow-up, with a PyTorch lead-grading model in the works.',
    tags: ['Python', 'PyTorch'],
    links: {},
  },
  {
    slug: 'fillsight',
    title: 'Fillsight',
    year: 2026,
    status: 'wip',
    featured: false,
    summary:
      'A GasBuddy alternative for the Greater Toronto Area with historical and intraday gas prices and the cheapest stations nearby.',
    tags: ['React', 'TypeScript', 'Vite'],
    links: {},
  },
]
