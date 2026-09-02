import { products } from '@/lib/products'

export const SKU_ACTIVES = [
  'Ectoin',
  'Niacinamide',
  'Ceramide Complex',
  'Postbiotic Lysate',
  'Beta-Glucan',
  'Zinc PCA',
  'Tranexamic Acid',
]

export function hasActive(actives: { name: string }[], target: string) {
  return actives.some((a) => {
    const n = a.name.toLowerCase()
    if (target === 'Postbiotic Lysate') return n.includes('ferment') || n.includes('postbiotic')
    return n.includes(target.toLowerCase())
  })
}

export default function SkuCoverageMatrix() {
  return (
    <div>
      <div className="overflow-x-auto border border-cardline">
        <table className="w-full text-left text-[13px] min-w-[720px]">
          <thead>
            <tr className="bg-navy text-white">
              <th className="p-4 font-medium">Active</th>
              {products.map((p) => (
                <th key={p.id} className="p-4 font-medium text-center whitespace-nowrap">
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SKU_ACTIVES.map((active, i) => {
              const isPostbiotic = active === 'Postbiotic Lysate'
              return (
                <tr
                  key={active}
                  className={isPostbiotic ? '' : i % 2 === 0 ? 'bg-white' : 'bg-lgrey'}
                  style={isPostbiotic ? { backgroundColor: '#FFFDE7' } : undefined}
                >
                  <td className="p-4 border-t border-cardline font-medium text-navy whitespace-nowrap">
                    {active}
                  </td>
                  {products.map((p) => (
                    <td key={p.id} className="p-4 border-t border-cardline text-center">
                      {hasActive(p.actives, active) ? (
                        <span className="text-green font-bold">✓</span>
                      ) : (
                        <span className="text-cardline">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="text-mgrey text-[12px] mt-4">
        Postbiotic Lysate: Bifida Ferment Filtrate (SKU 4) · Lactobacillus Ferment (SKU 3) ·
        Combined in Gentle Daily Cleanser (SKU 2)
      </p>
    </div>
  )
}
