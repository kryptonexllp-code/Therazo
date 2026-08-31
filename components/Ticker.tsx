const ITEMS = [
  'NON-COMEDOGENIC',
  'SYNTHETIC FRAGRANCE-FREE',
  'CRUELTY-FREE',
  'RECYCLABLE PACKAGING',
  'PHARMACY-GRADE SKINCARE',
  'MADE FOR INDIAN CLIMATE',
  'SPF 50 PA++++ BROAD SPECTRUM',
  'ECTOIN IN EVERY FORMULA',
  '6 UV FILTERS',
  'DERMATOLOGICALLY TESTED',
  'UNISEX',
]

export default function Ticker() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS]
  return (
    <div className="bg-navy h-11 overflow-hidden flex items-center">
      <div className="flex whitespace-nowrap animate-therazo-ticker">
        {loop.map((item, i) => (
          <span
            key={i}
            className="text-white text-[10px] font-medium tracking-[0.25em] uppercase mx-4 flex items-center gap-4"
          >
            {item}
            <span className="text-gold">·</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes therazo-ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        .animate-therazo-ticker {
          animation: therazo-ticker 50s linear infinite;
        }
      `}</style>
    </div>
  )
}
