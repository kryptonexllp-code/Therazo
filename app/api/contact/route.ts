import { NextRequest, NextResponse } from 'next/server'
import { appendRecord } from '@/lib/storage'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }
    await appendRecord('contact.json', { name, email, message })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
