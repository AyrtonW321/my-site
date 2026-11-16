import f1FantasyThumbnail from '../assets/projects/f1-fantasy/thumbnail.webp'
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
    slug: 'f1-fantasy',
    title: 'F1 Fantasy',
    year: 2026,
    status: 'done',
    featured: true,
    summary:
      'Picks the best F1 Fantasy team each round, with an app to track my teams, swaps and chips.',
    tags: ['Python', 'Streamlit', 'PuLP', 'pandas'],
    thumbnail: f1FantasyThumbnail,
    links: { github: 'https://github.com/AyrtonW321/f1-fantasy' },
    body: [
      {
        heading: 'Why I built it',
        paragraphs: [
          'I wanted to make this program to help me get the best possible F1 Fantasy team and win my league.',
        ],
      },
      {
        heading: 'How I built it',
        paragraphs: [
          "It's written in Python. I rebuilt the game's scoring and checked it against every official session score since 2023. Predictions come from a simple average tested on past seasons, and an integer program (PuLP) picks the team within the budget, transfer and chip rules. A Streamlit app shows my teams and the suggested swaps.",
        ],
      },
    ],
  },
  {
    slug: 'electronic-empire',
    title: 'Electronic Empire',
    year: 2026,
    status: 'wip',
    featured: false,
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
