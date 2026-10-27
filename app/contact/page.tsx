import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Rule from '@/components/ui/Rule'
import ContactForm from './ContactForm'
import { COMPANY } from '@/lib/company'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Therazo — care@therazo.co · customer care 1800 569 4100 · Hyderabad.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-offwhite px-6 md:px-20 py-20 md:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-14">
          <div>
            <SectionLabel>Get In Touch</SectionLabel>
            <h1 className="font-bold text-navy text-[32px] sm:text-[44px] leading-[1.1] mb-8">
              Talk to Therazo.
            </h1>
            <Rule className="mb-8" />
            <dl className="space-y-5 mb-10">
              <div>
                <dt className="text-mgrey text-[11px] uppercase tracking-[0.15em] mb-1">Email</dt>
                <dd>
                  <a href={`mailto:${COMPANY.email}`} className="font-bold text-navy text-[22px]">{COMPANY.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-mgrey text-[11px] uppercase tracking-[0.15em] mb-1">Customer care</dt>
                <dd>
                  <a href={COMPANY.phoneHref} className="font-bold text-navy text-[22px]">{COMPANY.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="text-mgrey text-[11px] uppercase tracking-[0.15em] mb-1">Based in</dt>
                <dd className="text-dgrey text-[15px]">
                  {COMPANY.city}, {COMPANY.region}, India
                </dd>
              </div>
            </dl>
            <p className="text-mgrey text-[13px] leading-[1.7] mb-8">
              Marketed by {COMPANY.marketer}. Manufactured by {COMPANY.manufacturer}. Made in India.
            </p>
            <p className="text-dgrey text-[14px] leading-[1.7]">
              For dermatologists: visit the{' '}
              <Link href="/for-doctors" className="text-navy underline underline-offset-4 font-medium">
                clinical portal →
              </Link>
            </p>
          </div>
          <div>
            <h2 className="font-bold text-navy text-[18px] mb-6">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
