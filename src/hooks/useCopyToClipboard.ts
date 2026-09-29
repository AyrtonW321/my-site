import { useCallback, useEffect, useRef, useState } from 'react'

export type CopyStatus = 'idle' | 'copied' | 'failed'

/** Legacy path for browsers/contexts where the async clipboard API is unavailable. */
function legacyCopy(text: string): boolean {
  const field = document.createElement('input')
  field.value = text
  field.setAttribute('readonly', '')
  field.style.position = 'fixed'
  field.style.opacity = '0'
  document.body.appendChild(field)
  field.select()
  try {
    return document.execCommand('copy')
  } finally {
    field.remove()
  }
}

export function useCopyToClipboard(text: string, resetMs = 2000) {
  const [status, setStatus] = useState<CopyStatus>('idle')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = useCallback(async () => {
    let ok: boolean
    try {
      await navigator.clipboard.writeText(text)
      ok = true
    } catch {
      ok = legacyCopy(text)
    }
    setStatus(ok ? 'copied' : 'failed')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setStatus('idle'), resetMs)
  }, [text, resetMs])

  return { status, copy }
}
