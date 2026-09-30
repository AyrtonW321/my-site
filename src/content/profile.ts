import type { Profile } from './types'

export const profile: Profile = {
  first: 'Ayrton',
  last: 'Wong',
  program: 'Applied Mathematics',
  university: 'University of Waterloo',
  tagline: ['Applied Mathematics', 'Scientific Computing + ML', 'University of Waterloo'],
  /** Meta description; index.html must carry the same text (checked by a test). */
  description:
    'Applied Mathematics student at the University of Waterloo, concentrating in Scientific Computing and Machine Learning. Projects, experience and contact.',
  intro: {
    lead: "I'm an Applied Mathematics student at the University of Waterloo, concentrating in Scientific Computing and Machine Learning.",
    body: 'I like to build tools for problems that I have.',
  },
  building: { verb: 'is building', subject: 'a course planner' },
  basedIn: { from: 'Markham, ON', to: 'Waterloo, ON' },
  toolbox: ['Python', 'C', 'TypeScript', 'React', 'Firebase', 'Luau', 'Figma'],
  offTheClock: [
    { activity: 'Badminton', cadence: '2–3× / week' },
    { activity: 'Gym', cadence: 'daily' },
    { activity: 'Family + friends', cadence: 'always' },
  ],
  sections: {
    about: 'A bit about me.',
    projects: "Things I've built.",
    experience: 'Where I have worked.',
    contact: {
      lead: "Let's build",
      accent: 'something.',
      blurb:
        'Open to co-op roles in software, data, and ML for upcoming terms. The fastest way to reach me is email.',
    },
  },
  emails: { primary: 'ayrtonwongg@gmail.com', school: 'a393wong@uwaterloo.ca' },
  githubHandle: 'AyrtonW321',
  links: {
    github: 'https://github.com/AyrtonW321',
    linkedin: 'https://www.linkedin.com/in/ayrton-wong-312445303/',
  },
  resume: { pdf: '/resume.pdf', preview: '/resume.png', updated: '2026-09' },
}
