export interface NavLink {
  label: string
  to: string
  /** Homepage section id this link points at; drives the active highlight while scrolling. */
  section?: string
}

export const navLinks: readonly NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about', section: 'about' },
  { label: 'Projects', to: '/projects', section: 'projects' },
  { label: 'Experience', to: '/experience', section: 'experience' },
  { label: 'Contact', to: '/#contact', section: 'contact' },
]

export const sectionIds = navLinks.flatMap((l) => (l.section ? [l.section] : []))

export const resumeLink = '/experience#resume'
