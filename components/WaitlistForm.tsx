'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import { products } from '@/lib/products'
import { ALL_PRODUCTS, validateWaitlist, type WaitlistInput } from '@/lib/waitlist'

// `context` (e.g. the routine chosen in the Routine Finder) is sent with the
// sign-up and replaces the product-interest field.
export default function WaitlistForm({
  dark = false,
  productId,
  context,
}: {
  dark?: boolean
  productId?: string
  context?: string
}) {
  const uid = useId()
  const [form, setForm] = useState<WaitlistInput>({
    name: '',
    phone: '',
    email: '',
    productInterest: productId ?? ALL_PRODUCTS,
    consent: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const set = (key: keyof WaitlistInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const payload = { ...form, context }
    const error = validateWaitlist(payload, products.map((p) => p.id))
    if (error) {
      setStatus('error')
      setMessage(error)
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong. Please try again.')
      setStatus('done')
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'done') {
    return (
      <p className={`text-[14px] font-medium ${dark ? 'text-white' : 'text-navy'}`}>
        You&apos;re on the list. We&apos;ll let you know when it launches.
      </p>
    )
  }

  const field = `w-full px-4 py-3 text-[15px] border ${
    dark
      ? 'bg-transparent border-white/70 text-white placeholder:text-bluelight'
      : 'bg-white border-navy text-dgrey placeholder:text-mgrey'
  }`
  const label = `block text-[11px] font-medium tracking-[0.12em] uppercase mb-1.5 ${dark ? 'text-bluemuted' : 'text-mgrey'}`

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-name`} className={label}>Name</label>
          <input id={`${uid}-name`} autoComplete="name" value={form.name} onChange={set('name')} className={field} />
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className={label}>Phone / WhatsApp</label>
          <input id={`${uid}-phone`} type="tel" inputMode="tel" autoComplete="tel" placeholder="+91" value={form.phone} onChange={set('phone')} className={field} />
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={label}>Email</label>
          <input id={`${uid}-email`} type="email" autoComplete="email" value={form.email} onChange={set('email')} className={field} />
        </div>
        {!context && <div className="sm:col-span-2">
          <label htmlFor={`${uid}-interest`} className={label}>Product interest</label>
          <select
            id={`${uid}-interest`}
            value={form.productInterest}
            onChange={set('productInterest')}
            className={`${field} ${dark ? '[&>option]:text-navy' : ''}`}
          >
            <option value={ALL_PRODUCTS}>All Therazo products</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>}
      </div>
      <div className="flex items-start gap-3 mt-4">
        <input
          id={`${uid}-consent`}
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
          className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? 'accent-white' : 'accent-navy'}`}
        />
        <label htmlFor={`${uid}-consent`} className={`text-[12px] leading-[1.55] ${dark ? 'text-bluelight' : 'text-dgrey'}`}>
          I agree to Therazo contacting me about product launches, and to my details being used as
          described in the{' '}
          <Link href="/privacy" className="underline underline-offset-2">
            privacy policy
          </Link>
          .
        </label>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`mt-4 w-full sm:w-auto px-8 py-[14px] font-bold text-[11px] tracking-[0.2em] uppercase transition-transform duration-150 hover:scale-[1.02] disabled:opacity-60 ${
          dark ? 'bg-white text-navy' : 'bg-navy text-white'
        }`}
      >
        {status === 'loading' ? 'Joining…' : 'Join the waitlist'}
      </button>
      {status === 'error' && (
        <p role="alert" className={`text-[12px] mt-2 ${dark ? 'text-white' : 'text-red-700'}`}>
          {message}
        </p>
      )}
      <p className={`text-[12px] mt-3 ${dark ? 'text-bluemuted' : 'text-mgrey'}`}>
        Phone or email — one is enough. We only contact you about launches. No spam.
      </p>
    </form>
  )
}
