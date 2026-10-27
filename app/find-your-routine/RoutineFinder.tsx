'use client'

import { useState } from 'react'
import Link from 'next/link'
import WaitlistForm from '@/components/WaitlistForm'
import { getProduct } from '@/lib/products'
import {
  FINDER_COPY,
  FOCUSES,
  ROUTINE_TABLE,
  SKIN_TYPES,
  type FocusId,
  type SkinTypeId,
} from '@/content/routineFinder'

function RoutineList({ label, ids }: { label: string; ids: string[] }) {
  return (
    <div>
      <h3 className="text-navy text-[11px] font-bold tracking-[0.2em] uppercase mb-4">{label}</h3>
      <ol className="space-y-3">
        {ids.map((id, i) => {
          const p = getProduct(id)
          if (!p) return null
          return (
            <li key={id} className="flex gap-4 border border-cardline bg-white p-4">
              <span className="text-mgrey text-[12px] font-medium w-4 shrink-0">{i + 1}</span>
              <div>
                <Link href={`/products/${p.id}`} className="font-bold text-navy text-[15px] underline-offset-4 hover:underline">
                  {p.name}
                </Link>
                <p className="text-mgrey text-[12px] mt-0.5">{p.descriptor}</p>
                <a href="#finder-waitlist" className="inline-block mt-2 text-navy text-[12px] font-medium underline underline-offset-4">
                  {FINDER_COPY.status[p.status]}
                </a>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default function RoutineFinder() {
  const [skinType, setSkinType] = useState<SkinTypeId | ''>('')
  const [focus, setFocus] = useState<FocusId | ''>('')
  const routine = skinType && focus ? ROUTINE_TABLE[focus][skinType] : null

  const names = (ids: string[]) => ids.map((id) => getProduct(id)?.name).join(' → ')
  const context = routine
    ? `Skin type: ${SKIN_TYPES.find((s) => s.id === skinType)?.label}. Focus: ${
        FOCUSES.find((f) => f.id === focus)?.label
      }. Morning: ${names(routine.am)}. Evening: ${names(routine.pm)}.`
    : undefined

  const select = 'w-full border border-navy bg-white px-4 py-3 text-[15px] text-dgrey'
  const label = 'block text-[11px] font-medium tracking-[0.12em] uppercase text-mgrey mb-1.5'

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <div>
          <label htmlFor="finder-skin" className={label}>{FINDER_COPY.skinTypeLabel}</label>
          <select id="finder-skin" value={skinType} onChange={(e) => setSkinType(e.target.value as SkinTypeId | '')} className={select}>
            <option value="">{FINDER_COPY.choose}</option>
            {SKIN_TYPES.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="finder-focus" className={label}>{FINDER_COPY.focusLabel}</label>
          <select id="finder-focus" value={focus} onChange={(e) => setFocus(e.target.value as FocusId | '')} className={select}>
            <option value="">{FINDER_COPY.choose}</option>
            {FOCUSES.map((f) => (
              <option key={f.id} value={f.id}>{f.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div aria-live="polite" className="mt-12">
        {routine ? (
          <>
            <h2 className="font-bold text-navy text-[24px] mb-6">{FINDER_COPY.resultHeading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <RoutineList label={FINDER_COPY.morning} ids={routine.am} />
              <RoutineList label={FINDER_COPY.evening} ids={routine.pm} />
            </div>
          </>
        ) : (
          <p className="text-mgrey text-[14px]">{FINDER_COPY.prompt}</p>
        )}
      </div>

      <p className="mt-8 border-l-2 border-navy pl-3 text-dgrey text-[13px] leading-[1.6] max-w-2xl">
        {FINDER_COPY.disclaimer}
      </p>

      <div id="finder-waitlist" className="mt-14 bg-navy p-6 sm:p-10 scroll-mt-24">
        <h2 className="font-bold text-white text-[22px] mb-2">{FINDER_COPY.waitlistHeading}</h2>
        <p className="text-bluelight text-[14px] mb-6">{FINDER_COPY.waitlistIntro}</p>
        {/* Sends whichever routine is on screen when the form is submitted. */}
        <WaitlistForm dark context={context} />
      </div>
    </div>
  )
}
