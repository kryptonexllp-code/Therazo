import { PROMISE_HEADING, PROMISE_PILLARS } from '@/content/promise'

export default function PromiseStrip() {
  return (
    <section aria-labelledby="therazo-promise" className="bg-offwhite border-t border-cardline px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 id="therazo-promise" className="text-navy text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
          {PROMISE_HEADING}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROMISE_PILLARS.map((p) => (
            <li key={p.title} className="border-l-2 border-navy pl-4">
              <p className="font-bold text-navy text-[14px] mb-1">{p.title}</p>
              <p className="text-mgrey text-[13px] leading-[1.6]">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
