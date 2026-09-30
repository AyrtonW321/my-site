/** Decorative page background; styling and motion live in index.css (.bg-art). */
export function Background() {
  return (
    <div className="bg-art" aria-hidden="true">
      <div className="bg-glow bg-glow-a" />
      <div className="bg-glow bg-glow-b" />
    </div>
  )
}
