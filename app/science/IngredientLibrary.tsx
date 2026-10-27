'use client'

import { useMemo, useState } from 'react'
import { products } from '@/lib/products'

type Category = 'UV Protection' | 'Barrier Repair' | 'Even Tone' | 'Hydration' | 'Microbiome'

const CATEGORIES: Category[] = [
  'UV Protection',
  'Barrier Repair',
  'Even Tone',
  'Hydration',
  'Microbiome',
]

function categorize(name: string): Category {
  const n = name.toLowerCase()
  if (
    n.includes('filter') ||
    n.includes('zinc oxide') ||
    n.includes('titanium dioxide')
  ) {
    return 'UV Protection'
  }
  if (n.includes('ceramide') || n.includes('panthenol')) return 'Barrier Repair'
  if (n.includes('niacinamide') || n.includes('tranexamic') || n.includes('ascorbic')) return 'Even Tone'
  if (n.includes('hyaluronate') || n.includes('squalane') || n.includes('ectoin')) return 'Hydration'
  if (n.includes('zinc pca') || n.includes('postbiotic') || n.includes('ferment') || n.includes('beta-glucan')) return 'Microbiome'
  return 'Barrier Repair'
}

type LibraryEntry = {
  name: string
  function: string
  category: Category
  products: string[]
}

function buildLibrary(): LibraryEntry[] {
  const map = new Map<string, LibraryEntry>()
  for (const p of products) {
    for (const a of p.actives) {
      const existing = map.get(a.name)
      if (existing) {
        if (!existing.products.includes(p.name)) existing.products.push(p.name)
      } else {
        map.set(a.name, {
          name: a.name,
          function: a.function,
          category: categorize(a.name),
          products: [p.name],
        })
      }
    }
  }
  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name))
}

export default function IngredientLibrary() {
  const library = useMemo(() => buildLibrary(), [])
  const [active, setActive] = useState<Category | 'All'>('All')

  const filtered = active === 'All' ? library : library.filter((e) => e.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10">
        {(['All', ...CATEGORIES] as const).map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`text-[11px] font-medium tracking-[0.15em] uppercase px-5 py-2.5 border transition-colors duration-200 ${
              active === c
                ? 'bg-navy text-white border-navy'
                : 'bg-white text-navy border-cardline hover:border-navy'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((e) => (
          <div
            key={e.name}
            className="bg-white border border-cardline p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="inline-block text-navy/70 text-[10px] font-medium tracking-[0.15em] uppercase border border-cardline px-2.5 py-1 mb-3">
              {e.category}
            </span>
            <h3 className="font-bold text-navy text-[15px] mb-2">{e.name}</h3>
            <p className="text-dgrey text-[13px] leading-[1.6] mb-4">{e.function}</p>
            <p className="text-mgrey text-[11px] uppercase tracking-[0.08em]">
              In {e.products.join(', ')}
            </p>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-mgrey text-[14px] text-center py-10">No actives in this category yet.</p>
      )}
    </div>
  )
}
