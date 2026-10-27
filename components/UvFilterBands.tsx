import { BANDS, UV_FILTERS } from '@/lib/uvFilters'

// Which wavebands each filter class covers. Qualitative only — no measured
// coverage figures for the finished product are implied.
export default function UvFilterBands({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-left text-[13px]">
        <thead>
          <tr>
            <th className="pb-3 pr-4 font-medium text-mgrey text-[11px] uppercase tracking-[0.1em]">Filter class</th>
            {BANDS.map((b) => (
              <th key={b.id} className="pb-3 px-2 font-medium text-mgrey text-[11px] uppercase tracking-[0.1em] text-center">
                {b.id}
                <span className="block normal-case tracking-normal text-[10px]">{b.range}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {UV_FILTERS.map((f) => (
            <tr key={f.name} className="border-t border-cardline align-top">
              <td className="py-3 pr-4">
                <span className="font-medium text-navy">{f.name}</span>
                <span className="ml-2 text-[10px] uppercase tracking-[0.1em] text-mgrey">{f.type}</span>
                {detailed && <p className="mt-1 text-dgrey text-[12px] leading-[1.6] max-w-md">{f.note}</p>}
              </td>
              {BANDS.map((b) => (
                <td key={b.id} className="py-3 px-2">
                  <div
                    className={`mx-auto h-2 w-full max-w-[90px] ${f.bands.includes(b.id) ? 'bg-navy' : 'bg-lgrey border border-cardline'}`}
                    aria-label={f.bands.includes(b.id) ? `${b.id} covered` : `${b.id} not covered`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
