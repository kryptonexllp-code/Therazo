// No product photography has been supplied yet (see IMAGE PLACEMENT GUIDE in
// the brand brief). This renders a clinical placeholder in the same slot so
// every layout is final and only needs a next/image swap once photography lands.
export default function ImagePlaceholder({
  label,
  variant = 'light',
  className = '',
}: {
  label: string
  variant?: 'light' | 'navy'
  className?: string
}) {
  const isNavy = variant === 'navy'
  return (
    <div
      className={`flex items-center justify-center border ${
        isNavy ? 'bg-navy border-bluemuted/30' : 'bg-lgrey border-cardline'
      } ${className}`}
    >
      <span
        className={`text-[10px] font-medium tracking-[0.2em] uppercase text-center px-4 ${
          isNavy ? 'text-bluemuted' : 'text-mgrey'
        }`}
      >
        {label}
      </span>
    </div>
  )
}
