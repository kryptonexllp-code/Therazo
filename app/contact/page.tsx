import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import GoldDivider from '@/components/ui/GoldDivider'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Therazo. We respond within 24 hours — care@therazo.co',
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
            <GoldDivider className="mb-8" />
            <p className="font-bold text-navy text-[22px] mb-2">care@therazo.co</p>
            <p className="text-dgrey text-[15px] mb-1">We respond within 24 hours</p>
            <p className="text-mgrey text-[14px] mb-10">therazo.co</p>
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
