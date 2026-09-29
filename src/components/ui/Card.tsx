import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn'

interface Props extends ComponentProps<'div'> {
  /** Lifts and turns the border accent when a parent `group` is hovered or focused. */
  interactive?: boolean
}

export function Card({ className, interactive, ...props }: Props) {
  return (
    <div
      className={cn(
        'rounded-[20px] border bg-surface p-6',
        interactive &&
          'transition-[transform,border-color] group-hover:-translate-y-0.5 group-hover:border-accent group-focus-visible:-translate-y-0.5 group-focus-visible:border-accent',
        className,
      )}
      {...props}
    />
  )
}
