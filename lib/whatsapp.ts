// Until launch, WhatsApp is only a waitlist notification path — no ordering,
// no payment, no delivery over WhatsApp. Personal number for now; replace
// with the WhatsApp Business number when ready.
export const WHATSAPP_NUMBER = '919953339464'

export function waitlistWhatsAppUrl(productName: string) {
  const message = encodeURIComponent(
    `Hi Therazo! Please add me to the waitlist and let me know on WhatsApp when ${productName} launches.`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}
