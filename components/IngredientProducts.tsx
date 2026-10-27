import Link from 'next/link'
import { products, statusLabel } from '@/lib/products'

// Products whose active list includes `match`, read from lib/products.ts —
// never a hard-coded list. Products whose actives are still being confirmed
// are listed separately so the page does not guess.
export default function IngredientProducts({ match, pendingNote }: { match: string; pendingNote?: string }) {
  const containing = products.filter((p) => p.actives.some((a) => a.name.includes(match)))
  const pending = pendingNote ? products.filter((p) => p.activesPending && !containing.includes(p)) : []
  return (
    <ul className="border-t border-cardline">
      {containing.map((p) => (
        <li key={p.id} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-cardline py-3">
          <Link href={`/products/${p.id}`} className="font-bold text-navy text-[15px] underline-offset-4 hover:underline">
            {p.sku} · {p.name}
          </Link>
          <span className="text-mgrey text-[12px]">{statusLabel(p)}</span>
        </li>
      ))}
      {pending.map((p) => (
        <li key={p.id} className="border-b border-cardline py-3 text-mgrey text-[13px]">
          {p.sku} · {p.name}: {pendingNote}
        </li>
      ))}
    </ul>
  )
}
