import { Card } from '../../components/ui/Card'
import { Tag } from '../../components/ui/Tag'
import type { Project } from '../../content/types'

/** A planned project: small, informational, deliberately not a link. */
export function UpNextCard({ project }: { project: Project }) {
  return (
    <Card className="h-full p-5">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-base font-medium tracking-tight">{project.title}</h3>
        <span className="font-mono text-[10px] tracking-[0.14em] text-text-3 uppercase">
          Planned
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-text-2">{project.summary}</p>
      {project.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
