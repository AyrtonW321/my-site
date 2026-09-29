import type { Experience } from './types'

// Newest first; display order is array order.
export const experience: readonly Experience[] = [
  {
    id: 'haneco-energy',
    role: 'Energy Specialist + Sales Rep',
    company: 'Haneco Energy',
    label: 'CO-OP',
    end: null,
    summary:
      'Cold outreach for solar and lighting energy assessments through SaveOnEnergy incentive programs.',
  },
  {
    id: 'kumon-markham',
    role: 'Online Program Instructor',
    company: 'Kumon',
    location: 'Markham',
    start: '2026-06',
    end: null,
    summary:
      'Run the online program on my own. Teach students live, mark their work, and keep results up to date in the database.',
  },
  {
    id: 'kumon-richmond-hill',
    role: 'Instructor',
    company: 'Kumon',
    location: 'Richmond Hill',
    start: '2021-03',
    end: '2025-08',
    summary: 'Four years helping students with math and reading, one worksheet at a time.',
  },
]
