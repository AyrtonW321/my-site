import { Card } from '../../components/ui/Card'
import { Label } from '../../components/ui/Label'
import { getCurrentRole, experiencePeriod } from '../../lib/experience'

export function NowCard() {
  const role = getCurrentRole()
  if (!role) return null
  return (
    <Card className="flex min-h-[260px] flex-col justify-between gap-10 md:min-h-[360px]">
      <span className="inline-flex w-fit items-center gap-1.5 rounded-md bg-accent-soft px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-accent-text">
        <span className="size-1.5 rounded-full bg-success" aria-hidden="true" />
        NOW
      </span>
      <div>
        <Label>{experiencePeriod(role)}</Label>
        <h3 className="mt-2 text-xl leading-snug font-medium tracking-tight">
          {role.shortRole ?? role.role} at {role.company}
        </h3>
        {role.summary && <p className="mt-3 text-sm leading-relaxed text-text-2">{role.summary}</p>}
      </div>
    </Card>
  )
}
