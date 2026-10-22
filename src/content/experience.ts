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
    bullets: [
      'Call around 50 leads per day to book business meetings, working toward a target of 10 booked meetings per week',
      'Use ZoomInfo to find decision-makers at target companies and log every call outcome and follow-up in MyPhoner (CRM)',
      'Send outreach emails to businesses to follow up on leads and open new conversations',
      'Inform business owners about government incentive and rebate programs, such as Save on Energy, for lighting and solar upgrades',
    ],
  },
  {
    id: 'kumon-markham',
    role: 'Assistant Tutor',
    company: 'Kumon',
    kind: 'Part-time',
    location: 'Markham',
    start: '2026-06',
    end: null,
    summary:
      "In charge of about 80% of the centre's online tutoring, and the marking for all of it.",
    bullets: [
      "In charge of about 80% of the centre's online tutoring, making sure online students are well supported outside the classroom",
      "Mark all online student submissions and return graded work, covering the centre's complete online marking load",
    ],
  },
  {
    id: 'kumon-richmond-hill',
    role: 'Assistant Tutor',
    company: 'Kumon',
    kind: 'Part-time',
    location: 'Richmond Hill',
    start: '2022-03',
    end: '2025-08',
    summary:
      'Three and a half years helping students with math and reading, one worksheet at a time.',
    bullets: [
      'Tutored 50+ students per week across elementary to Grade 12 levels in math and reading, adapting to different learning styles',
      'Managed a busy classroom of 30+ students at once, keeping things organized, on track, and running smoothly',
      'Gave parents regular progress updates and kept 100% accuracy in marking, data entry, and student progress tracking',
    ],
  },
  {
    id: 'trademark-industries',
    role: 'Sales Associate & Warehouse Packer',
    company: 'Trademark Industries Inc.',
    kind: 'Co-op',
    location: 'Markham',
    start: '2023-09',
    end: '2024-01',
    summary:
      'Marketing, packaging and distribution for e-commerce and retail, plus sales floor and order prep.',
    bullets: [
      'Handled customer service, inventory management, and restocking on a high-volume sales floor',
      'Used Shopify, RocketReach, and Excel to organize order data, support customer outreach, and keep distribution running efficiently',
      'Packed and shipped 50–100+ orders daily, including large-scale fulfillment for Walmart, Costco, Home Depot, and Canadian Tire',
      'Created and managed social media content for TikTok and Instagram to grow product visibility and customer outreach',
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
