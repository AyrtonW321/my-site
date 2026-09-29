import { cn } from '../../lib/cn'

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors md:min-h-10'

export const buttonClass = (variant: 'primary' | 'outline', className?: string) =>
  cn(
    base,
    variant === 'primary'
      ? 'bg-text text-bg hover:opacity-85'
      : 'bg-surface hover:bg-surface-2 border',
    className,
  )
