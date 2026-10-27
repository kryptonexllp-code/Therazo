import { NextRequest, NextResponse } from 'next/server'
import { appendRecord } from '@/lib/storage'
import { products } from '@/lib/products'
import { normalisePhone, validateWaitlist, type WaitlistInput } from '@/lib/waitlist'

// Stores only what the form collects, plus the time of consent.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const input: WaitlistInput = {
      name: String(body.name ?? ''),
      phone: String(body.phone ?? ''),
      email: String(body.email ?? ''),
      productInterest: String(body.productInterest ?? ''),
      consent: body.consent === true,
      context: body.context ? String(body.context) : undefined,
    }
    const error = validateWaitlist(input, products.map((p) => p.id))
    if (error) return NextResponse.json({ error }, { status: 400 })
    await appendRecord('waitlist.json', {
      name: input.name.trim(),
      phone: normalisePhone(input.phone) || null,
      email: input.email.trim() || null,
      productInterest: input.productInterest,
      routine: input.context?.trim() || null,
      consent: true,
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
