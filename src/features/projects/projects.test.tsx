import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { expect, it } from 'vitest'
import type { Project } from '../../content/types'
import { ProjectDetail } from './ProjectDetail'
import { UpNextCard } from './UpNextCard'

const base: Project = {
  slug: 'demo',
  title: 'Demo Project',
  year: 2026,
  status: 'done',
  featured: false,
  summary: 'A demo summary.',
  tags: ['React'],
  links: {},
}

const renderDetail = (p: Project) =>
  render(
    <MemoryRouter>
      <ProjectDetail project={p} />
    </MemoryRouter>,
  )

it('planned projects render as plain cards, not links', () => {
  render(<UpNextCard project={{ ...base, status: 'planned' }} />)
  expect(screen.getByRole('heading', { name: 'Demo Project' })).toBeInTheDocument()
  expect(screen.getByText('Planned')).toBeInTheDocument()
  expect(screen.queryByRole('link')).toBeNull()
})

it('shows link buttons only for links that exist', () => {
  renderDetail({ ...base, links: { github: 'https://github.com/x/y' } })
  const github = screen.getByRole('link', { name: /GitHub/ })
  expect(github).toHaveAttribute('href', 'https://github.com/x/y')
  expect(github).toHaveAttribute('rel', 'noopener noreferrer')
  expect(screen.queryByRole('link', { name: /Live site/ })).toBeNull()
})

it('renders write-up sections and collaborators when provided', () => {
  renderDetail({
    ...base,
    body: [{ heading: 'Why', paragraphs: ['Because.'] }],
    collaborators: ['Pat'],
  })
  expect(screen.getByRole('heading', { level: 2, name: 'Why' })).toBeInTheDocument()
  expect(screen.getByText('Because.')).toBeInTheDocument()
  expect(screen.getByText('Pat')).toBeInTheDocument()
})

it('omits optional sections when data is absent', () => {
  renderDetail(base)
  expect(screen.queryByText('With')).toBeNull()
  expect(screen.queryByRole('heading', { level: 2 })).toBeNull()
})
