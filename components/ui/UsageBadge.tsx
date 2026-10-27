import { REAPPLY_COPY, USAGE_COPY } from '@/content/usage'
import type { Usage } from '@/lib/products'

// Icons are white, not amber: amber is reserved for one accent element per
// page (CLAUDE.md), and a page can show several badges.
function SunIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.4 1.4M11.55 11.55l1.4 1.4M3.05 12.95l1.4-1.4M11.55 4.45l1.4-1.4" strokeLinecap="round" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13.5 10.2A5.8 5.8 0 0 1 5.8 2.5a5.8 5.8 0 1 0 7.7 7.7Z" strokeLinejoin="round" />
    </svg>
  )
}

// Small navy pill for the top-left of a product image: when to use the
// product, plus the reapply reminder for SPF.
export default function UsageBadge({ usage }: { usage: Usage }) {
  const copy = USAGE_COPY[usage.when]
  const visible = usage.reapplyOutdoors ? `${copy.label} · ${REAPPLY_COPY}` : copy.label
  const spoken = usage.reapplyOutdoors ? `${copy.spoken} ${REAPPLY_COPY}.` : copy.spoken
  return (
    <span className="inline-flex items-center gap-1.5 bg-navy text-white rounded-full px-2.5 py-1 text-[11px] font-medium leading-tight">
      <span className="inline-flex items-center gap-0.5 shrink-0">
        {usage.when !== 'PM' && <SunIcon />}
        {usage.when !== 'AM' && <MoonIcon />}
      </span>
      <span aria-hidden="true">{visible}</span>
      <span className="sr-only">{spoken}</span>
    </span>
  )
}
