import type { ReactNode } from 'react'
import { Label } from './Label'

/** Top of a standalone page: mono label, then the page's single <h1>. */
export function PageHeader({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children?: ReactNode
}) {
  return (
    <header>
      <Label className="text-[11px]">{label}</Label>
      <h1 className="mt-3 text-[40px] leading-[1.05] font-semibold tracking-[-0.04em] md:text-6xl">
        {title}
      </h1>
      {children}
    </header>
  )
}
