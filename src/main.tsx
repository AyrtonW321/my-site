import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import { Analytics } from '@vercel/analytics/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { router } from './app/router'
import './index.css'

// A tab opened before a deploy asks for chunk hashes that no longer exist. Reload once to pick up
// the new build; the flag stops a reload loop if the chunk is genuinely broken.
window.addEventListener('vite:preloadError', (event) => {
  try {
    if (sessionStorage.getItem('chunk-reload')) return
    sessionStorage.setItem('chunk-reload', '1')
  } catch {
    return
  }
  event.preventDefault()
  window.location.reload()
})

try {
  setTimeout(() => sessionStorage.removeItem('chunk-reload'), 10_000)
} catch {
  /* storage unavailable: the handler above already declines to reload */
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </StrictMode>,
)
