import { COMPANY } from '@/lib/company'
import { REVIEWS_PLACEHOLDER } from '@/content/reviews'

// Closing block on every product page: the reviews placeholder and the
// regulatory details (manufacturer, licence, marketer, origin).
export default function ProductRegulatory({ className = '' }: { className?: string }) {
  return (
    <section className={`bg-white px-6 md:px-20 py-14 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bold text-navy text-[16px] mb-2">Reviews</h2>
        <p className="text-mgrey text-[14px] mb-10">{REVIEWS_PLACEHOLDER}</p>

        <h2 className="font-bold text-navy text-[16px] mb-3">Product details</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-x-6 gap-y-1.5 text-[13px] border-t border-cardline pt-4">
          <dt className="text-mgrey">Manufactured by</dt>
          <dd className="text-dgrey">{COMPANY.manufacturer}</dd>
          <dt className="text-mgrey">Mfg Lic. No.</dt>
          <dd className="text-dgrey">{COMPANY.manufacturingLicence}</dd>
          <dt className="text-mgrey">Marketed by</dt>
          <dd className="text-dgrey">{COMPANY.marketer}</dd>
          <dt className="text-mgrey">Country of origin</dt>
          <dd className="text-dgrey">{COMPANY.countryOfOrigin}</dd>
        </dl>
      </div>
    </section>
  )
}
