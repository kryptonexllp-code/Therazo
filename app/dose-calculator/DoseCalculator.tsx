'use client'

import { useState } from 'react'
import { CALCULATOR_AREAS, TUBE_LIFE_DAYS } from '@/content/dose'

// Finger-length guidance only. Areas without confirmed guidance are not
// offered, and the tube-life line appears only once TUBE_LIFE_DAYS is set.
export default function DoseCalculator() {
  const areas = CALCULATOR_AREAS.filter((a) => a.guidance)
  const [areaId, setAreaId] = useState(areas[0]?.id)
  const area = areas.find((a) => a.id === areaId)

  return (
    <div className="max-w-xl">
      <fieldset>
        <legend className="text-[11px] font-medium tracking-[0.12em] uppercase text-mgrey mb-3">Where are you applying it?</legend>
        <div className="flex flex-col sm:flex-row gap-3">
          {areas.map((a) => (
            <label key={a.id} className="flex items-center gap-3 border border-navy px-4 py-3 cursor-pointer has-[:checked]:bg-navy has-[:checked]:text-white text-navy text-[14px]">
              <input
                type="radio"
                name="dose-area"
                value={a.id}
                checked={areaId === a.id}
                onChange={() => setAreaId(a.id)}
                className="accent-white"
              />
              {a.label}
            </label>
          ))}
        </div>
      </fieldset>
      {area && (
        <div aria-live="polite" className="mt-8 border-2 border-navy p-6">
          <p className="text-mgrey text-[11px] uppercase tracking-[0.15em] mb-1">Use</p>
          <p className="font-extrabold text-navy text-[28px]">{area.guidance}</p>
          {TUBE_LIFE_DAYS !== null && area.id === 'face-neck' && (
            <p className="text-dgrey text-[14px] mt-3">At this dose, a 50 ml tube lasts about {TUBE_LIFE_DAYS} days.</p>
          )}
        </div>
      )}
    </div>
  )
}
