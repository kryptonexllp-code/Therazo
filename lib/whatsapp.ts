// Personal number — replace with WhatsApp Business number when ready
export const WHATSAPP_NUMBER = '919953339464'

export function buildWhatsAppUrl(productName: string, spec: string, price: number, size: string) {
  const message = encodeURIComponent(
    `Hi Therazo! I would like to order ${productName} ${spec} (${size}) for ₹${price}. Please share delivery and payment details. Thank you.`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

export const ORDER_WHATSAPP_URL = buildWhatsAppUrl('Daily Shield', 'SPF 50 PA++++', 699, '50ml')

export const DELIVERY_NOTE = 'Pan-India delivery · 3–6 business days · Free delivery on orders above ₹499'
