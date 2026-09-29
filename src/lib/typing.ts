export interface TypingStep {
  delay: number
  duration: number
  steps: number
}

/** Sequential typewriter timings: each segment starts after the previous one finishes. */
export function typingSchedule(
  lengths: readonly number[],
  startMs: number,
  msPerChar = 25,
  gapMs = 120,
): TypingStep[] {
  let t = startMs
  return lengths.map((steps) => {
    const step = { delay: t, duration: steps * msPerChar, steps }
    t += step.duration + gapMs
    return step
  })
}
