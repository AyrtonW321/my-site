import { cn } from '../../lib/cn'

/** The ↗ mark for links that leave the page or go deeper. */
export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className={cn('size-3 shrink-0', className)}>
      <path
        d="M3 9 9 3M4 3h5v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
