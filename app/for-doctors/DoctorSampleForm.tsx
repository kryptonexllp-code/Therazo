'use client'

import { useState } from 'react'

const SPECIALISATIONS = ['Dermatology', 'Cosmetology', 'General Physician', 'Aesthetic Medicine', 'Other']

export default function DoctorSampleForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch('/api/doctor-sample', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('done')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <p className="text-navy font-medium text-[15px]">
        Request received. We respond within 48 hours. care@therazo.co
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input name="fullName" required placeholder="Full name" className="border border-navy px-4 py-3 text-[14px] sm:col-span-2" />
      <input name="registrationNumber" required placeholder="Medical registration number" className="border border-navy px-4 py-3 text-[14px]" />
      <input name="clinic" placeholder="Clinic / Hospital" className="border border-navy px-4 py-3 text-[14px]" />
      <input name="city" placeholder="City" className="border border-navy px-4 py-3 text-[14px]" />
      <select name="specialisation" className="border border-navy px-4 py-3 text-[14px] bg-white">
        {SPECIALISATIONS.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <input name="email" type="email" required placeholder="Email" className="border border-navy px-4 py-3 text-[14px] sm:col-span-2" />
      <textarea
        name="evaluation"
        placeholder="What would you like to evaluate?"
        rows={4}
        className="border border-navy px-4 py-3 text-[14px] sm:col-span-2"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="sm:col-span-2 bg-navy text-white font-bold text-[12px] tracking-[0.15em] uppercase py-4 disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting…' : 'Request Sample'}
      </button>
      {status === 'error' && <p className="text-red-600 text-[12px] sm:col-span-2">Something went wrong. Please try again.</p>}
      <p className="text-mgrey text-[12px] sm:col-span-2">We respond within 48 hours. care@therazo.co</p>
    </form>
  )
}
