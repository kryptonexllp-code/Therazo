// Waitlist fields and validation, shared by the form and /api/waitlist.
export const ALL_PRODUCTS = 'all'

export type WaitlistInput = {
  name: string
  phone: string
  email: string
  productInterest: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Keeps digits only; accepts +91 / 0 prefixes and 10-digit Indian mobiles,
// or any 10–13 digit international number.
export function normalisePhone(raw: string) {
  return raw.replace(/\D/g, '')
}

export function validateWaitlist(input: WaitlistInput, productIds: string[]): string | null {
  if (!input.name.trim()) return 'Please enter your name.'
  const phone = normalisePhone(input.phone)
  const email = input.email.trim()
  if (!phone && !email) return 'Please add a phone/WhatsApp number or an email so we can reach you.'
  if (phone && (phone.length < 10 || phone.length > 13)) return 'Please check the phone number.'
  if (email && !EMAIL_RE.test(email)) return 'Please check the email address.'
  if (input.productInterest !== ALL_PRODUCTS && !productIds.includes(input.productInterest)) {
    return 'Please choose a product.'
  }
  return null
}
