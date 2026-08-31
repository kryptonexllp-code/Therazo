'use client'

import { useState } from 'react'

export default function WaitlistForm({
  dark = false,
  productId,
}: {
  dark?: boolean
  productId?: string
}) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, productId }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('done')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <p className={`text-[14px] font-medium ${dark ? 'text-gold' : 'text-navy'}`}>
        You&apos;re on the list. We&apos;ll email you at launch.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className={`flex-1 px-[18px] py-[14px] text-[15px] border ${
            dark
              ? 'bg-transparent border-white text-white placeholder:text-bluelight'
              : 'bg-white border-navy text-dgrey placeholder:text-mgrey'
          }`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`px-6 py-[14px] font-bold text-[11px] tracking-[0.2em] uppercase transition-transform duration-150 hover:scale-[1.02] disabled:opacity-60 ${
            dark ? 'bg-gold text-navy' : 'bg-navy text-white'
          }`}
        >
          {status === 'loading' ? 'Joining…' : 'Notify Me'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-[12px] text-red-600 mt-2">Something went wrong. Please try again.</p>
      )}
      <p className={`text-[12px] mt-3 ${dark ? 'text-bluemuted' : 'text-mgrey'}`}>
        No spam. Launch alerts and ingredient education only.
      </p>
    </form>
  )
}
