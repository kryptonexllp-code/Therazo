// "Launching soon" (Daily Shield) / "Coming soon" (other SKUs). No dates —
// we don't publish delivery or launch promises.
export default function ComingSoonBadge({
  label = 'Coming soon',
  outlined = false,
}: {
  label?: string
  outlined?: boolean
}) {
  return (
    <span
      className={`inline-block text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5 ${
        outlined ? 'bg-white border border-navy text-navy' : 'bg-navy text-white'
      }`}
    >
      {label}
    </span>
  )
}
