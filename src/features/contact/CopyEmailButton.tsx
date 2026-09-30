import { buttonClass } from '../../components/ui/buttonStyles'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'

export function CopyEmailButton({ email }: { email: string }) {
  const { status, copy } = useCopyToClipboard(email)
  const label = { idle: 'Copy email', copied: 'Copied', failed: 'Copy failed' }[status]
  return (
    <>
      <button type="button" onClick={copy} className={buttonClass('outline')}>
        {label}
      </button>
      <span className="sr-only" aria-live="polite">
        {status === 'copied' ? 'Email copied to clipboard' : ''}
      </span>
    </>
  )
}
