// Intrinsic pixel sizes of the supplied photography, so every <Image> gets an
// explicit width/height (no layout shift) while CSS sizes it inside a fixed
// aspect wrapper with object-fit: contain (product photos never crop).
export const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  // TODO: replace with final white-matt pack photo — older off-white tube mockup
  '/images/hero-daily-shield-clinical.png': { width: 1092, height: 1440 },
  // TODO: replace with final white-matt pack photo — older carton mockup
  '/images/product-daily-shield-box.png': { width: 1086, height: 1448 },
  '/images/product-gentle-cleanser.png': { width: 1023, height: 1537 },
  '/images/product-barrier-repair.png': { width: 1023, height: 1537 },
  '/images/product-clarity-serum.png': { width: 1023, height: 1537 },
}
