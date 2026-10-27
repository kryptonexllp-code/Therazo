import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import IngredientProducts from '@/components/IngredientProducts'
import { STUB_COPY } from '@/content/ingredients/stubs'

// Placeholder ingredient page: name, the products that list it, and a note
// that the full page comes with the product.
export default function IngredientStub({ name, match }: { name: string; match: string }) {
  return (
    <>
      <section className="bg-navy px-6 md:px-20 pt-32 pb-14">
        <SectionLabel dark>The Science · Ingredients</SectionLabel>
        <h1 className="font-extrabold text-white text-[40px] sm:text-[56px] leading-[1.02] mb-4">{name}</h1>
        <p className="text-bluelight text-[16px]">{STUB_COPY}</p>
      </section>
      <section className="bg-white px-6 md:px-20 py-14">
        <div className="max-w-3xl">
          <h2 className="font-bold text-navy text-[18px] mb-4">Listed in</h2>
          <IngredientProducts match={match} />
          <p className="mt-10">
            <Link href="/science" className="text-navy text-[13px] font-medium underline underline-offset-4">
              ← Back to The Science
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
