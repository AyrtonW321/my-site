import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../lib/cn'

/** Fades up 16px the first time it enters the viewport. The hidden state only exists in CSS
 *  when motion is allowed, so reduced-motion visitors always see the content. */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={cn('reveal', className)} data-in={inView || undefined}>
      {children}
    </div>
  )
}
