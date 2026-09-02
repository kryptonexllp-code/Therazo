'use client'

import { useState } from 'react'
import SectionLabel from './ui/SectionLabel'

const VIDEOS = [
  { id: 'application', title: 'Daily application — Indian skin tones', meta: '60 sec · AI generated' },
  { id: 'ectoin', title: 'Ectoin — the molecular shield', meta: '45 sec · Molecular animation' },
  { id: 'pa-rating', title: 'PA++++ vs PA+++ — visualised', meta: '30 sec · Science explainer' },
]

export default function VideoShowcase() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="bg-offwhite px-6 md:px-20 py-20 md:py-[100px]">
      <SectionLabel>See It In Action</SectionLabel>
      <h2 className="font-bold text-navy text-[28px] md:text-[36px] mb-3">
        Watch the science at work.
      </h2>
      <p className="text-mgrey text-[16px] max-w-xl">
        Three short films — how Daily Shield applies on Indian skin tones, what Ectoin is doing at
        a molecular level, and why PA++++ protection matters.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        {VIDEOS.map((v) => (
          <div key={v.id} className="bg-navy overflow-hidden">
            <div className="relative aspect-video bg-[#0D1F35]">
              <button
                aria-label={`Play ${v.title}`}
                onClick={() => setOpenId(v.id)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/90">
                  <span className="ml-0.5 text-[14px] text-navy">▶</span>
                </span>
              </button>
              {openId === v.id && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/85 text-center px-4"
                  onClick={() => setOpenId(null)}
                >
                  <p className="text-white text-[13px]">Video coming soon · care@therazo.co</p>
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="font-bold text-white text-[13px]">{v.title}</p>
              <p className="text-bluemuted text-[11px] mt-1">{v.meta}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center italic text-mgrey text-[12px] mt-5">
        Videos are AI-generated for demonstration. Actual product footage arriving soon.
      </p>
    </section>
  )
}
