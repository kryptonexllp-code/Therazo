import SectionLabel from './ui/SectionLabel'
import VideoSlot from './VideoSlot'
import { VIDEO_SLOTS } from '@/lib/videos'

const SLOTS = [VIDEO_SLOTS.application, VIDEO_SLOTS.ectoin, VIDEO_SLOTS.uv]

export default function VideoShowcase() {
  return (
    <section className="bg-offwhite px-6 md:px-20 py-20 md:py-[100px]">
      <SectionLabel>See It In Action</SectionLabel>
      <h2 className="font-bold text-navy text-[28px] md:text-[36px] mb-3">
        Watch the science at work.
      </h2>
      <p className="text-mgrey text-[16px] max-w-xl">
        Three short films — how Daily Shield applies on Indian skin tones, how Ectoin holds water at
        the skin surface, and what PA++++ means.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        {SLOTS.map((slot) => (
          <VideoSlot key={slot.id} slot={slot} className="bg-navy" />
        ))}
      </div>

      <p className="text-center italic text-mgrey text-[12px] mt-5">
        Videos are AI-generated for demonstration. Actual product footage arriving soon.
      </p>
    </section>
  )
}
