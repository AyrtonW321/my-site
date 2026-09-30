import { Card } from '../../components/ui/Card'
import { profile } from '../../content/profile'

export function IntroCard() {
  const { first, building } = profile
  return (
    <Card className="flex p-6 md:col-span-2 md:min-h-[360px] md:items-center md:p-10">
      <h3 className="text-3xl leading-tight tracking-tight md:text-[44px]">
        {first} <span className="text-text-3">{building.verb}</span>{' '}
        <span className="underline decoration-1 underline-offset-[6px]">{building.subject}</span>.
      </h3>
    </Card>
  )
}
