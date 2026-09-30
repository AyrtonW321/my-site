import { Card } from '../../components/ui/Card'
import { Label } from '../../components/ui/Label'
import { profile } from '../../content/profile'
import { getBySlug } from '../../lib/projects'
import { BuildingProject } from './BuildingProject'

export function IntroCard() {
  const { first, building } = profile
  const project = getBySlug(building.projectSlug)
  return (
    <Card className="flex flex-col justify-between gap-10 p-6 md:col-span-2 md:min-h-[360px] md:p-10">
      <h3 className="text-3xl leading-tight tracking-tight md:text-[40px]">
        {first} <span className="text-text-3">{building.verb}</span>{' '}
        <span className="underline decoration-1 underline-offset-[6px]">{building.subject}</span>.
      </h3>
      {project && (
        <div>
          <Label className="mb-3">{building.callout}</Label>
          <BuildingProject project={project} />
        </div>
      )}
    </Card>
  )
}
