import { DAILY_TIMELINE } from '@/content/dailyTimeline'

// Daily routine timeline: vertical on mobile, horizontal from md up. Small
// outlined circles on a thin navy line; only the Daily Shield node is amber
// (the page's single accent element).
export default function DayTimeline() {
  const nodes = DAILY_TIMELINE.flatMap((g) => g.nodes.map((n, i) => ({ ...n, group: i === 0 ? g.label : null })))
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute bg-navy left-[6px] top-2 bottom-2 w-px md:left-0 md:right-0 md:top-[30px] md:bottom-auto md:w-auto md:h-px" />
      <ol className="relative flex flex-col gap-7 md:flex-row md:gap-5">
        {nodes.map((n, i) => (
          <li key={i} className="flex gap-4 md:flex-1 md:flex-col md:gap-3">
            <p className="hidden md:block h-4 text-mgrey text-[10px] font-medium tracking-[0.2em] uppercase">
              {n.group}
            </p>
            <span
              aria-hidden="true"
              className={`mt-1 md:mt-0 h-[13px] w-[13px] shrink-0 rounded-full border-[1.5px] ${
                n.highlight ? 'bg-gold border-gold' : 'bg-white border-navy'
              }`}
            />
            <div>
              {n.group && (
                <p className="md:hidden text-mgrey text-[10px] font-medium tracking-[0.2em] uppercase mb-1">{n.group}</p>
              )}
              <p className="font-bold text-navy text-[14px]">{n.title}</p>
              <p className="text-mgrey text-[12px] leading-[1.55] mt-1">{n.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
