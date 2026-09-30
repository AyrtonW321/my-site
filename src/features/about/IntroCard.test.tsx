import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { expect, it } from 'vitest'
import { profile } from '../../content/profile'
import { projects } from '../../content/projects'
import { IntroCard } from './IntroCard'

it('shows the callout and links to the project being built', () => {
  render(
    <MemoryRouter>
      <IntroCard />
    </MemoryRouter>,
  )
  const project = projects.find((p) => p.slug === profile.building.projectSlug)!
  expect(screen.getByText(profile.building.callout)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: new RegExp(project.title) })).toHaveAttribute(
    'href',
    `/projects/${project.slug}`,
  )
})

it('points at a project that can actually be browsed', () => {
  const project = projects.find((p) => p.slug === profile.building.projectSlug)
  expect(project).toBeDefined()
  expect(project?.status).not.toBe('planned')
})
