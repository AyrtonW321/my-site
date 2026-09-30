import { useTheme } from '../../hooks/useTheme'
import { toggleWithTransition } from '../../lib/theme'

export function ThemeToggle() {
  const theme = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      aria-label={`Switch to ${next} theme`}
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        toggleWithTransition(next, { x: r.left + r.width / 2, y: r.top + r.height / 2 })
      }}
      className="grid size-11 place-items-center rounded-full text-text-2 transition-colors hover:bg-surface-2 hover:text-text md:size-8"
    >
      <svg
        viewBox="0 0 16 16"
        className="size-4 transition-transform duration-700 ease-spring dark:rotate-180"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 2a6 6 0 0 0 0 12z" fill="currentColor" />
      </svg>
    </button>
  )
}
