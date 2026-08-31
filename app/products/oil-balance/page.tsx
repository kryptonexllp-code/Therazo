import ProductComingSoonPage, { buildComingSoonMetadata } from '@/components/ui/ProductComingSoonPage'
import { getProduct } from '@/lib/products'

const product = getProduct('oil-balance')!

export const metadata = buildComingSoonMetadata(product)

export default function Page() {
  return <ProductComingSoonPage product={product} />
}
