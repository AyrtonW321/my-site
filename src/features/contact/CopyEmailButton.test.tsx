import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { CopyEmailButton } from './CopyEmailButton'

const setClipboard = (writeText: (t: string) => Promise<void>) =>
  Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true })

beforeEach(() => {
  document.execCommand = vi.fn(() => false)
})
afterEach(() => vi.restoreAllMocks())

it('copies the email and confirms', async () => {
  const writeText = vi.fn().mockResolvedValue(undefined)
  setClipboard(writeText)
  render(<CopyEmailButton email="a@b.co" />)
  fireEvent.click(screen.getByRole('button', { name: 'Copy email' }))
  expect(await screen.findByRole('button', { name: 'Copied' })).toBeInTheDocument()
  expect(writeText).toHaveBeenCalledWith('a@b.co')
})

it('falls back to execCommand, then reports failure', async () => {
  setClipboard(() => Promise.reject(new Error('denied')))
  render(<CopyEmailButton email="a@b.co" />)
  fireEvent.click(screen.getByRole('button', { name: 'Copy email' }))
  expect(await screen.findByRole('button', { name: 'Copy failed' })).toBeInTheDocument()
  expect(document.execCommand).toHaveBeenCalledWith('copy')
})
