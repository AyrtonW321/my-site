import { Link } from 'react-router'
import { profile } from '../../content/profile'

export function Logo() {
  return (
    <Link to="/" className="font-mono text-[13px] font-medium" aria-label="Home">
      {profile.first.toLowerCase()}
      <span className="text-accent-text">.{profile.last.toLowerCase()}</span>
    </Link>
  )
}
