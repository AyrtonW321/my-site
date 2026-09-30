import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { ResumePanel } from './ResumePanel'

const setWide = (matches: boolean) =>
  vi.stubGlobal('matchMedia', () => ({
    matches,
    addEventListener: () => {},
    removeEventListener: () => {},
  }))

afterEach(() => vi.unstubAllGlobals())

const open = (container: HTMLElement) => {
  const details = container.querySelector('details')!
  details.open = true
  fireEvent(details, new Event('toggle'))
}

it('always offers the PDF download and loads nothing until opened', () => {
  setWide(true)
  const { container } = render(<ResumePanel />)
  expect(screen.getByRole('link', { name: /Download PDF/ })).toHaveAttribute('href', '/resume.pdf')
  expect(container.querySelector('object')).toBeNull()
  expect(container.querySelector('img')).toBeNull()
})

it('embeds the PDF on wide screens once opened', () => {
  setWide(true)
  const { container } = render(<ResumePanel />)
  open(container)
  expect(container.querySelector('object')).toHaveAttribute('data', '/resume.pdf')
  expect(container.querySelector('img')).toBeNull()
})

it('shows the page image on narrow screens once opened', () => {
  setWide(false)
  const { container } = render(<ResumePanel />)
  open(container)
  expect(container.querySelector('img')).toHaveAttribute('src', '/resume.png')
  expect(container.querySelector('object')).toBeNull()
})
