import GoldDivider from './GoldDivider'
import type { PublicActive } from '@/lib/products'

export default function ActiveCard({ active }: { active: PublicActive }) {
  return (
    <div className="bg-white border border-cardline p-6 transition-transform duration-200 ease-out hover:-translate-y-1">
      <h3 className="font-bold text-[15px] text-navy mb-1">{active.name}</h3>
      <p className="text-[11px] font-medium text-mgrey uppercase tracking-[0.08em] mb-3">
        {active.function}
      </p>
      <GoldDivider className="mb-3" />
      <p className="text-[13px] text-dgrey leading-relaxed">{active.benefit}</p>
    </div>
  )
}
