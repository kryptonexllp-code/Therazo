import { NextRequest, NextResponse } from 'next/server'
import { appendRecord } from '@/lib/storage'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, productId } = body
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }
    await appendRecord('waitlist.json', { email, productId: productId ?? null })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
