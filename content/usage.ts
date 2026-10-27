import type { UsageTime } from '@/lib/products'

// Wording for the usage-timing badge on product images. `spoken` is the
// screen-reader text that stands in for the abbreviation and icon.
export const USAGE_COPY: Record<UsageTime, { label: string; spoken: string }> = {
  AM: { label: 'AM', spoken: 'Use in the morning.' },
  PM: { label: 'PM', spoken: 'Use in the evening.' },
  'AM+PM': { label: 'AM + PM', spoken: 'Use morning and evening.' },
}

// Matches the carton.
export const REAPPLY_COPY = 'Reapply every 2 hours outdoors'
