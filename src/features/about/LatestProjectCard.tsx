import { Card } from '../../components/ui/Card'
import { Label } from '../../components/ui/Label'
import { getLatestFinished } from '../../lib/projects'
import { BuildingProject } from './BuildingProject'

export function LatestProjectCard() {
  const project = getLatestFinished()
  if (!project) return null
  return (
    <Card className="flex flex-col gap-4 md:col-span-3">
      <Label>Latest finished project</Label>
      <BuildingProject project={project} />
    </Card>
  )
}
