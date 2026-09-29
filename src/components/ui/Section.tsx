import type { ReactNode } from 'react'
import { Container } from './Container'
import { Label } from './Label'

interface Props {
  id: string
  /** '01' */
  index: string
  /** 'About' */
  label: string
  /** Omit when the section body renders its own <h2 id="{id}-title">. */
  title?: string
  /** Optional control aligned with the title (e.g. "View all"). */
  action?: ReactNode
  children: ReactNode
}

export function Section({ id, index, label, title, action, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="pt-24 md:pt-32">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <Label className="text-[11px]">
              <span className="text-accent-text">{index}</span> / {label}
            </Label>
            {title && (
              <h2
                id={`${id}-title`}
                className="mt-3 text-[32px] leading-tight font-semibold tracking-[-0.03em] md:text-[40px]"
              >
                {title}
              </h2>
            )}
          </div>
          {action}
        </div>
        <div className="mt-8 md:mt-10">{children}</div>
      </Container>
    </section>
  )
}
