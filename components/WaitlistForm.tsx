'use client'

import { useState } from 'react'
import { products } from '@/lib/products'
import { ALL_PRODUCTS, validateWaitlist, type WaitlistInput } from '@/lib/waitlist'

export default function WaitlistForm({
  dark = false,
  productId,
}: {
  dark?: boolean
  productId?: string
}) {
  const [form, setForm] = useState<WaitlistInput>({
    name: '',
    phone: '',
    email: '',
    productInterest: productId ?? ALL_PRODUCTS,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const set = (key: keyof WaitlistInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const error = validateWaitlist(form, products.map((p) => p.id))
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
        body: JSON.stringify(form),
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
          <label htmlFor={`wl-name-${productId ?? 'all'}`} className={label}>Name</label>
          <input id={`wl-name-${productId ?? 'all'}`} autoComplete="name" value={form.name} onChange={set('name')} className={field} />
        </div>
        <div>
          <label htmlFor={`wl-phone-${productId ?? 'all'}`} className={label}>Phone / WhatsApp</label>
          <input id={`wl-phone-${productId ?? 'all'}`} type="tel" inputMode="tel" autoComplete="tel" placeholder="+91" value={form.phone} onChange={set('phone')} className={field} />
        </div>
        <div>
          <label htmlFor={`wl-email-${productId ?? 'all'}`} className={label}>Email</label>
          <input id={`wl-email-${productId ?? 'all'}`} type="email" autoComplete="email" value={form.email} onChange={set('email')} className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`wl-interest-${productId ?? 'all'}`} className={label}>Product interest</label>
          <select
            id={`wl-interest-${productId ?? 'all'}`}
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
        </div>
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
