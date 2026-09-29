import { cn } from '../../lib/cn'

export function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className={cn('size-3 shrink-0', className)}>
      <path
        d="M6 2v6m-2.5-2.5L6 8l2.5-2.5M2.5 10h7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
