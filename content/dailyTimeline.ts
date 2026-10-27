// A daily routine timeline for Daily Shield — when each step happens in a
// day. Not a results timeline: never add "see results in X weeks".
export type TimelineNode = { title: string; detail: string; highlight?: boolean }
export type TimelineGroup = { label: string; nodes: TimelineNode[] }

export const DAILY_TIMELINE: TimelineGroup[] = [
  {
    label: 'Morning',
    nodes: [
      { title: 'Cleanse', detail: 'Start with a clean, dry face.' },
      { title: 'Serum', detail: 'When available.' },
      { title: 'Daily Shield', detail: 'Two finger-lengths, 15–20 minutes before sun exposure.', highlight: true },
    ],
  },
  {
    label: 'Daytime',
    nodes: [
      {
        title: 'Reapply',
        detail: 'Every 2 hours outdoors, and after swimming, heavy sweating or towel drying.',
      },
    ],
  },
  {
    label: 'Evening',
    nodes: [
      { title: 'Cleanse', detail: 'Remove the day’s SPF.' },
      { title: 'Night product', detail: 'When available.' },
    ],
  },
]
