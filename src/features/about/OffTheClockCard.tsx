import { Card } from '../../components/ui/Card'
import { Label } from '../../components/ui/Label'
import { profile } from '../../content/profile'

export function OffTheClockCard() {
  return (
    <Card>
      <Label>Off the clock</Label>
      <ul className="mt-5 space-y-2.5">
        {profile.offTheClock.map(({ activity, cadence }) => (
          <li key={activity} className="flex items-baseline justify-between gap-4">
            <span className="text-base font-medium">{activity}</span>
            <span className="font-mono text-[11px] text-text-3">{cadence}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
