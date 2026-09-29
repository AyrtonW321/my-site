import type { Project } from '../../content/types'
import { cn } from '../../lib/cn'

interface Props {
  project: Project
  /** Alternates the empty-state tint so a grid without images still has rhythm. */
  tone?: 'accent' | 'neutral'
}

/** 16:10 box; the image when there is one, otherwise a tinted block. */
export function ProjectMedia({ project, tone = 'accent' }: Props) {
  return (
    <div
      className={cn(
        'aspect-[16/10] w-full overflow-hidden rounded-xl',
        tone === 'accent' ? 'bg-accent-soft' : 'bg-surface-2',
      )}
    >
      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt={`${project.title} screenshot`}
          width={1280}
          height={800}
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
      )}
    </div>
  )
}
