import type { ReactNode } from 'react'
import { ArrowIcon } from '../../components/ui/ArrowIcon'
import { Label } from '../../components/ui/Label'
import { profile } from '../../content/profile'
import { formatMonthYear } from '../../lib/format'

const tile =
  'group flex min-h-11 items-center gap-3 rounded-2xl border p-3 transition-[transform,border-color,opacity] hover:-translate-y-0.5 focus-visible:-translate-y-0.5'

function ExternalCard({
  href,
  name,
  caption,
  glyph,
  wide,
}: {
  href: string
  name: string
  caption: string
  glyph: ReactNode
  wide?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} (opens in new tab)`}
      className={`${tile} bg-surface hover:border-accent ${wide ? 'sm:col-span-2' : ''}`}
    >
      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-surface-2 font-mono text-[11px]">
        {glyph}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium">{name}</span>
        <Label className="mt-0.5 truncate">{caption}</Label>
      </span>
      <ArrowIcon className="text-text-3" />
    </a>
  )
}

export function QuickLinks() {
  const { resume, links, githubHandle } = profile
  return (
    <div>
      <Label>QUICK_LINKS</Label>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <a
          href={resume.pdf}
          download
          className={`${tile} bg-text text-bg hover:opacity-90 sm:col-span-2`}
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent text-white">
            <svg viewBox="0 0 12 12" aria-hidden="true" className="size-3">
              <path
                d="M6 2v6m-2.5-2.5L6 8l2.5-2.5M2.5 10h7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium">Download resume</span>
            <span className="mt-0.5 block font-mono text-[10px] tracking-[0.14em] uppercase opacity-60">
              PDF · Updated {formatMonthYear(resume.updated)}
            </span>
          </span>
          <ArrowIcon className="opacity-60" />
        </a>
        <ExternalCard
          href={links.github}
          name="GitHub"
          caption={githubHandle}
          glyph="{}"
          wide={!links.linkedin}
        />
        {links.linkedin && (
          <ExternalCard href={links.linkedin} name="LinkedIn" caption="Connect" glyph="in" />
        )}
      </div>
    </div>
  )
}
