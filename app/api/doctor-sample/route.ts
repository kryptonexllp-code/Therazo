import { NextRequest, NextResponse } from 'next/server'
import { appendRecord } from '@/lib/storage'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, registrationNumber, clinic, city, specialisation, email, evaluation } = body
    if (!fullName || !registrationNumber || !email) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
    }
    await appendRecord('doctor-sample.json', {
      fullName,
      registrationNumber,
      clinic,
      city,
      specialisation,
      email,
      evaluation,
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
