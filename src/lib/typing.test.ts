import { expect, it } from 'vitest'
import { typingSchedule } from './typing'

it('chains segments back to back with a gap', () => {
  expect(typingSchedule([4, 2], 1000, 10, 50)).toEqual([
    { delay: 1000, duration: 40, steps: 4 },
    { delay: 1090, duration: 20, steps: 2 },
  ])
})
