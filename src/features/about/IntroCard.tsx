import { Card } from '../../components/ui/Card'
import { profile } from '../../content/profile'

export function IntroCard() {
  const { first, building, aboutLines } = profile
  return (
    <Card className="p-6 md:col-span-2 md:min-h-[360px] md:p-10">
      <h3 className="text-2xl tracking-tight md:text-[28px]">
        {first} <span className="text-text-3">{building.verb}</span>{' '}
        <span className="underline decoration-1 underline-offset-4">{building.subject}</span>.
      </h3>
      <hr className="mt-5" />
      <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-text-2">
        {aboutLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </Card>
  )
}
