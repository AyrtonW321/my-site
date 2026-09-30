export type ProjectStatus = 'done' | 'wip' | 'planned'

export interface Project {
  slug: string
  title: string
  /** Omit for planned projects that have no date yet. */
  year?: number | string
  status: ProjectStatus
  featured: boolean
  /** One line for cards. Required unless the project is only planned. */
  summary?: string
  tags: string[]
  /** Imported asset URL; required for done/wip at launch. */
  thumbnail?: string
  /** Post-launch hover loop. */
  video?: string
  links: { github?: string; live?: string }
  /** Detail page; shape is finalised with the Figma outline (M5). */
  body?: { heading: string; paragraphs: string[] }[]
  collaborators?: string[]
}

export interface Experience {
  id: string
  role: string
  company: string
  location?: string
  kind?: 'Co-op' | 'Part-time' | 'Volunteer'
  /** Shown in place of the date range, e.g. "CO-OP". */
  label?: string
  /** 'YYYY-MM' */
  start?: string
  /** 'YYYY-MM'; null = current */
  end: string | null
  /** One line for the homepage row; omit when there is nothing to say yet. */
  summary?: string
  bullets?: string[]
  url?: string
}

export interface Profile {
  first: string
  last: string
  program: string
  university: string
  tagline: string[]
  description: string
  intro: { lead: string; body: string }
  building: { verb: string; subject: string }
  basedIn: { from: string; to: string }
  toolbox: string[]
  offTheClock: { activity: string; cadence: string }[]
  sections: {
    about: string
    projects: string
    experience: string
    contact: { lead: string; accent: string; blurb: string }
  }
  emails: { primary: string; school: string }
  githubHandle: string
  links: { github: string; linkedin?: string }
  resume: { pdf: string; preview: string; updated: string }
}
