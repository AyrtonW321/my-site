import { Card } from '../../components/ui/Card'
import { Label } from '../../components/ui/Label'
import { Tag } from '../../components/ui/Tag'
import { profile } from '../../content/profile'

export function ToolboxCard() {
  return (
    <Card>
      <Label>Toolbox</Label>
      <ul className="mt-5 flex flex-wrap gap-2">
        {profile.toolbox.map((tool) => (
          <li key={tool}>
            <Tag>{tool}</Tag>
          </li>
        ))}
      </ul>
    </Card>
  )
}
