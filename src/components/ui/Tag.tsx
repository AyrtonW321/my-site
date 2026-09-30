export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[11px] text-text-2">
      {children}
    </span>
  )
}
