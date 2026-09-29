import { useEffect } from 'react'
import { profile } from '../content/profile'

/** Sets the tab title and updates the single static meta description in index.html.
 *  (React 19's hoisted <title>/<meta> would add duplicates next to the static ones.) */
export function usePageMeta(title: string, description: string = profile.description) {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
