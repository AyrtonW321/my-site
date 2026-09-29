import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn'

/** Small monospace uppercase caption. */
export function Label({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      className={cn('font-mono text-[10px] tracking-[0.14em] text-text-3 uppercase', className)}
      {...props}
    />
  )
}
