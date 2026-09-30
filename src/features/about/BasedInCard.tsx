import { Card } from '../../components/ui/Card'
import { Label } from '../../components/ui/Label'
import { profile } from '../../content/profile'

export function BasedInCard() {
  const { from, to } = profile.basedIn
  return (
    <Card>
      <Label>Based in</Label>
      <div className="my-8 flex items-center gap-2" aria-hidden="true">
        <span className="size-2 rounded-full bg-accent" />
        <span className="h-px flex-1 border-t border-dotted border-text-decor" />
        <span className="size-2 rounded-full border-2 border-accent bg-surface" />
      </div>
      <p className="flex justify-between gap-4 text-[15px] font-medium">
        <span>{from}</span>
        <span>{to}</span>
      </p>
    </Card>
  )
}
