// Short neutral rule used under labels and in cards. The amber accent is
// reserved for one element per page (see AccentRule) — never use it here.
export default function Rule({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  return <div className={`h-[1.5px] w-8 ${dark ? 'bg-bluemuted' : 'bg-navy/40'} ${className}`} />
}
