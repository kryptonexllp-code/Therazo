// The single amber accent element allowed on a page (CLAUDE.md → COLOURS).
// Use at most once per page.
export default function AccentRule({ className = '' }: { className?: string }) {
  return <div className={`h-[1.5px] w-10 bg-gold ${className}`} />
}
