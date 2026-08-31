export default function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <p
      className={`text-[10px] font-medium tracking-[0.3em] uppercase mb-4 ${
        dark ? 'text-bluemuted' : 'text-navy/70'
      }`}
    >
      {children}
    </p>
  )
}
