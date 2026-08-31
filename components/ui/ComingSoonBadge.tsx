export default function ComingSoonBadge({ timeline }: { timeline: string }) {
  return (
    <span className="inline-block bg-navy text-white text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5">
      {timeline.toUpperCase()}
    </span>
  )
}
