import type { Metadata } from 'next'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'
import DoctorSampleForm from './DoctorSampleForm'
import SkuCoverageMatrix from '@/components/SkuCoverageMatrix'
import { DAILY_SHIELD_CLINICAL } from '@/lib/clinical'

export const metadata: Metadata = {
  title: 'For Dermatologists — Formulation Data',
  description:
    'Therazo shares complete formulation data with clinicians — concentrations, ingredient mechanisms and manufacturer details.',
}

export default function ForDoctorsPage() {
  const c = DAILY_SHIELD_CLINICAL
  return (
    <>
      <section className="bg-navy px-6 md:px-20 pt-32 pb-16">
        <div className="relative h-8 w-32 mb-6">
          <Image
            src="/images/logos/logo-mono-dark.png"
            alt="Therazo — Science. Defined."
            fill
            sizes="128px"
            style={{ objectFit: 'cover', objectPosition: '50% 47.6%' }}
            className="mix-blend-multiply"
          />
        </div>
        <SectionLabel dark>For Dermatologists</SectionLabel>
        <h1 className="font-extrabold text-white text-[34px] sm:text-[44px] md:text-[52px] leading-[1.05] mb-6">
          We are not seeking endorsements.
          <br />
          We are seeking honest clinical dialogue.
        </h1>
        <p className="text-bluelight text-[16px] max-w-2xl mb-10">
          Therazo shares complete formulation data with clinicians — concentrations, ingredient
          mechanisms and manufacturer details. Test reports will be added here as they become
          available. We ask only for honest feedback. Your expertise shapes our next product.
        </p>
      </section>

      <section id="formulation" className="bg-white px-6 md:px-20 py-16">
        <h2 className="font-bold text-navy text-[24px] mb-10">What We Share</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="border border-cardline p-6">
            <p className="text-navy font-bold text-[14px] mb-2">Formulation Reference</p>
            <p className="text-mgrey text-[13px]">{c.formulationRef} · {c.formulationName}</p>
          </div>
          <div className="border border-cardline p-6">
            <p className="text-navy font-bold text-[14px] mb-2">Full Active Profile</p>
            <p className="text-mgrey text-[13px]">All {c.fullActives.length} actives with concentrations (shown on this page only)</p>
          </div>
          <div className="border border-cardline p-6">
            <p className="text-navy font-bold text-[14px] mb-2">Manufacturer</p>
            <p className="text-mgrey text-[13px]">
              Manufactured by {c.manufacturer}. Marketed by {c.marketer}.
            </p>
          </div>
          <div className="border border-cardline p-6">
            <p className="text-navy font-bold text-[14px] mb-2">SPF</p>
            <p className="text-mgrey text-[13px]">{c.spfStatus}</p>
          </div>
          <div className="border border-dashed border-navy p-6">
            <p className="flex items-center justify-between gap-2 mb-2">
              <span className="text-navy font-bold text-[14px]">Sample kit and dose card for clinics</span>
              <span className="shrink-0 bg-navy text-white text-[9px] font-medium tracking-[0.15em] uppercase px-2 py-1">
                Coming soon
              </span>
            </p>
            <p className="text-mgrey text-[13px]">
              A clinic sample kit with a printed dose card for patients. Register below and we will
              contact you when it is ready.
            </p>
          </div>
        </div>
      </section>

      <section id="clinical-data" className="bg-lgrey px-6 md:px-20 py-16">
        <p className="text-mgrey text-[13px] italic mb-6 max-w-2xl">
          Concentrations and ingredient mechanisms as reported in the literature — not outcomes
          measured for this product. Batch 1 carries no efficacy claims.
        </p>
        <div className="overflow-x-auto bg-white border border-cardline">
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="bg-navy text-white">
                <th className="p-4 font-medium">Active Name</th>
                <th className="p-4 font-medium">Concentration</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Mechanism of Action</th>
              </tr>
            </thead>
            <tbody>
              {c.fullActives.map((a, i) => (
                <tr key={a.name} className={i % 2 === 0 ? 'bg-white' : 'bg-lgrey'}>
                  <td className="p-4 border-t border-cardline font-medium text-navy whitespace-nowrap">{a.name}</td>
                  <td className="p-4 border-t border-cardline text-mgrey whitespace-nowrap">{a.concentration}</td>
                  <td className="p-4 border-t border-cardline text-mgrey whitespace-nowrap">{a.type}</td>
                  <td className="p-4 border-t border-cardline text-dgrey">{a.mechanism}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-bold text-navy text-[18px] mt-14 mb-2">SKU Coverage Matrix</h3>
        <p className="text-mgrey text-[13px] italic mb-6 max-w-2xl">
          Which active appears in which product — presence and absence only.
        </p>
        <SkuCoverageMatrix />
      </section>

      <section className="bg-navy px-6 md:px-20 py-16">
        <h2 className="font-bold text-white text-[24px] mb-8">
          Challenge our formulation. Tell us what you would improve.
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            'Evaluate the formulation independently using this data',
            'Share honest clinical feedback — positive or critical',
            'Help us identify where we can improve',
          ].map((t) => (
            <li key={t} className="text-white text-[14px] leading-[1.6] border-l-2 border-gold pl-4">
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section id="sample-request" className="bg-white px-6 md:px-20 py-16">
        <h2 className="font-bold text-navy text-[24px] mb-3">Register for a Clinic Sample Kit</h2>
        <p className="text-mgrey text-[14px] max-w-2xl mb-8">
          Sample kits and dose cards for clinics are coming soon. Register your interest and we
          will contact you when they are available.
        </p>
        <div className="max-w-2xl">
          <DoctorSampleForm />
        </div>
      </section>

      <section className="bg-lgrey px-6 md:px-20 py-16 text-center">
        <p className="text-navy italic text-[20px] max-w-2xl mx-auto leading-[1.6]">
          We believe trust is earned through what is inside the product — not what is written on
          the packaging.
        </p>
      </section>
    </>
  )
}
