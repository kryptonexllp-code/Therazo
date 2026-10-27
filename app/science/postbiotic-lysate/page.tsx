import type { Metadata } from 'next'
import IngredientStub from '@/components/IngredientStub'
import { INGREDIENT_STUBS } from '@/content/ingredients/stubs'

const STUB = INGREDIENT_STUBS['postbiotic-lysate']

export const metadata: Metadata = {
  title: STUB.name,
  description: `${STUB.name} in the Therazo range. Full ingredient page coming with the product.`,
}

export default function Page() {
  return <IngredientStub name={STUB.name} match={STUB.match} />
}
