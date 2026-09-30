import type { Experience } from './types'

// Ordered by end date, newest first; display order is array order.
// The homepage shows the first three.
export const experience: readonly Experience[] = [
  {
    id: 'haneco-energy',
    role: 'Energy Specialist',
    company: 'Haneco Energy',
    kind: 'Co-op',
    location: 'Markham',
    label: 'CO-OP',
    start: '2026-09',
    end: '2026-12',
    summary:
      'Outreach for solar and lighting energy assessments through SaveOnEnergy incentive programs.',
  },
  {
    id: 'kumon-markham',
    role: 'Online Program Instructor',
    company: 'Kumon',
    kind: 'Part-time',
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
    kind: 'Part-time',
    location: 'Richmond Hill',
    start: '2022-03',
    end: '2025-08',
    summary:
      'Three and a half years helping students with math and reading, one worksheet at a time.',
    bullets: [
      'Supported students from early elementary to high school in math and reading',
      'Managed a busy classroom environment, ensuring smooth student flow and maintaining engagement',
      'Provided homework assistance and progress feedback to students and parents',
      'Ensured accurate marking and data entry to track student progress',
    ],
  },
  {
    id: 'trademark-industries',
    role: 'Sales Associate & Warehouse Packer',
    company: 'Trademark Industries Canada',
    kind: 'Co-op',
    location: 'Markham',
    start: '2023-09',
    end: '2024-01',
    summary:
      'Marketing, packaging and distribution for e-commerce and retail, plus sales floor and order prep.',
    bullets: [
      'Assisted in marketing, packaging, and distribution for e-commerce and retail operations',
      'Managed sales floor tasks, including customer service, inventory organization, and product restocking',
      'Prepared outgoing orders, ensuring accurate packaging and timely shipment',
      'Collaborated with warehouse, sales and marketing teams',
    ],
  },
  {
    id: 'steam-project',
    role: 'Volunteer',
    company: 'The STEAM Project',
    kind: 'Volunteer',
    location: 'Richmond Hill',
    start: '2023-07',
    end: '2023-08',
    summary: 'Led daily STEM activities and hands-on projects for children ages 6–12 at camp.',
    bullets: [
      'Led daily activities for children ages 6–12, focusing on STEM-based learning and hands-on projects',
      'Supervised groups to ensure safety, engagement, and inclusive participation',
      'Assisted instructors with lesson delivery and supported children needing additional help',
      'Contributed to a positive, energetic camp environment through teamwork and communication',
    ],
  },
  {
    id: 'richmond-hill-library',
    role: 'Volunteer',
    company: 'Richmond Hill Public Library',
    kind: 'Volunteer',
    start: '2023-02',
    end: '2023-05',
  },
]
