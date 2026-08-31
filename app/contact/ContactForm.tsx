'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const res = await fetch('/api/contact', {
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
        Message received. We respond within 24 hours. care@therazo.co
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="name" required placeholder="Full name" className="border border-navy px-4 py-3 text-[14px]" />
      <input name="email" type="email" required placeholder="Email" className="border border-navy px-4 py-3 text-[14px]" />
      <textarea
        name="message"
        required
        placeholder="Your message"
        rows={6}
        className="border border-navy px-4 py-3 text-[14px]"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-navy text-white font-bold text-[12px] tracking-[0.15em] uppercase py-4 transition-transform duration-150 hover:scale-[1.02] disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-[12px]">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
