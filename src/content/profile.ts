import type { Profile } from './types'

export const profile: Profile = {
  first: 'Ayrton',
  last: 'Wong',
  program: 'Applied Mathematics',
  university: 'University of Waterloo',
  tagline: ['Applied Mathematics', 'Scientific Computing + ML', 'University of Waterloo'],
  intro: {
    lead: "I'm an Applied Mathematics student at the University of Waterloo, concentrating in Scientific Computing and Machine Learning.",
    body: 'I build tools for problems I actually have. Right now that means a course planner for UW students, a Roblox game about mining asteroids, and a lot of time in Figma.',
  },
  building: { verb: 'is building', subject: 'a course planner' },
  aboutLines: [
    'i like math that ends up running on a computer.',
    'i care about tools that save people time.',
    'i teach kids math at Kumon, which keeps my explanations simple.',
    'i play badminton a few times a week and lift every day.',
  ],
  basedIn: { from: 'Markham, ON', to: 'Waterloo, ON' },
  toolbox: ['Python', 'C', 'TypeScript', 'React', 'Firebase', 'Luau', 'MATLAB', 'Figma'],
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
  // linkedin: added in M8 once Ayrton supplies the URL
  links: { github: 'https://github.com/AyrtonW321' },
  resume: { pdf: '/resume.pdf', preview: '/resume.png', updated: '2026-09' },
}
