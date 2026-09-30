import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, expect, it } from 'vitest'
import { ThemeToggle } from './ThemeToggle'

beforeEach(() => {
  document.documentElement.dataset.theme = 'light'
  localStorage.clear()
})

it('labels the action, switches theme and persists the choice', async () => {
  render(<ThemeToggle />)
  fireEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }))
  expect(document.documentElement.dataset.theme).toBe('dark')
  expect(localStorage.getItem('theme')).toBe('dark')
  expect(await screen.findByRole('button', { name: 'Switch to light theme' })).toBeInTheDocument()
})
