import { activeClaims, type HeldClaim } from './claims'

// ── STATUS TYPES ──────────────────────────────────────────────
// Daily Shield is in production (launching soon); every other SKU is coming soon.
// No SKU is on sale yet — there is deliberately no 'available' status.
export type ProductStatus = 'launching-soon' | 'coming-soon'

// ── PUBLIC ACTIVE (no concentrations) ─────────────────────────
export type PublicActive = {
  name: string
  function: string
  benefit: string
}

// ── USAGE TIMING ──────────────────────────────────────────────
// Drives the badge on every product image (wording in content/usage.ts).
export type UsageTime = 'AM' | 'PM' | 'AM+PM'
export type Usage = { when: UsageTime; reapplyOutdoors?: boolean }

// ── PRODUCT (PUBLIC) ───────────────────────────────────────────
export type Product = {
  id: string
  sku: string
  step: string
  name: string
  descriptor: string
  price: number
  size: string
  status: ProductStatus
  usage: Usage
  tagline: string
  heroImage?: string
  productImage?: string
  actives: PublicActive[]
  // front-of-pack style list — names only, never percentages
  frontOfPack?: string[]
  benefits?: string[]
  // formulation claims already on file (free-from list)
  claims?: string[]
  // claims held in lib/claims.ts — shown only once their flag is switched on
  heldClaims?: HeldClaim[]
  fragranceNote?: string
  spf?: string
  uvFilters?: number
  about?: string[]
  concern?: string
  routineFit?: string
  sharedActives?: string
  // true while a formula's full active list is not yet confirmed
  activesPending?: boolean
}

const ECTOIN_BENEFIT =
  'Ectoin draws water to skin cells and forms a stabilising shell around them, which supports hydration retention.'

export const products: Product[] = [
  {
    id: 'daily-shield',
    sku: '01',
    step: 'PROTECT',
    name: 'Daily Shield',
    descriptor: 'SPF Moisturizer',
    price: 699,
    size: '50 ml ℮ 1.69 fl. oz.',
    status: 'launching-soon',
    usage: { when: 'AM', reapplyOutdoors: true },
    tagline: 'Six UV filters. Nine skin actives. One daily step.',
    spf: 'SPF 50 PA++++',
    uvFilters: 6,
    frontOfPack: ['Ectoin', 'Niacinamide', 'Ceramide Complex', 'Vitamin C'],
    // TODO: replace with final white-matt pack photo — both are older mockups
    heroImage: '/images/hero-daily-shield-clinical.png',
    productImage: '/images/product-daily-shield-box.png',
    actives: [
      { name: 'Two broad-spectrum organic filters', function: 'UVA + UVB filters', benefit: 'Photostable triazine-class filters that cover both UVA and UVB — they hold their structure in sunlight.' },
      { name: 'Dedicated UVA + UVB filters', function: 'Organic UV filters', benefit: 'A photostable UVA filter paired with a photostable UVB filter to strengthen each end of the range.' },
      { name: 'Zinc Oxide + Titanium Dioxide', function: 'Mineral UV filters', benefit: 'Mineral filters that scatter and absorb UV, completing the six-filter system.' },
      { name: 'Ectoin', function: 'Water-binding extremolyte', benefit: ECTOIN_BENEFIT },
      { name: 'Niacinamide', function: 'Barrier, sebum and tone support', benefit: 'Vitamin B3. Studied for its role in supporting the skin barrier, regulating sebum and reducing melanin transfer.' },
      { name: 'Ceramide Complex', function: 'Barrier lipids', benefit: 'A multi-ceramide complex with supporting lipids that replenishes the outer layer of the skin.' },
      { name: 'Ethyl Ascorbic Acid', function: 'Stable Vitamin C', benefit: 'A stable form of Vitamin C, included for antioxidant support and the look of even tone.' },
      { name: 'Sodium Hyaluronate', function: 'Humectant', benefit: 'Binds water at the skin surface for hydration.' },
      { name: 'Squalane + Panthenol + Tocopherol', function: 'Moisture, soothing, antioxidant', benefit: 'Plant-derived squalane for moisture, Pro-Vitamin B5 for soothing, and Vitamin E as an antioxidant.' },
    ],
    benefits: [
      'Broad-spectrum UVA + UVB filters — six in total',
      'Moisturizer texture for daily wear',
      'Ceramides and niacinamide to support the skin barrier',
      'Niacinamide and Vitamin C for the look of even tone',
      'Unisex, for everyday use',
    ],
    claims: ['Silicone-free', 'Paraben-free', 'Mineral oil-free', 'Artificial colour-free', 'Synthetic fragrance-free'],
    heldClaims: ['dermatologicallyTested', 'nonComedogenic'],
    fragranceNote: 'Contains Rosa Damascena Flower Extract — a natural botanical ingredient with a mild scent. Daily Shield is synthetic fragrance-free. It is not fully fragrance-free.',
  },
  {
    id: 'gentle-cleanser',
    sku: '02',
    step: 'CLEANSE',
    name: 'Gentle Daily Cleanser',
    descriptor: 'Ceramide Cleanser',
    price: 499,
    size: '100 ml',
    status: 'coming-soon',
    usage: { when: 'AM+PM' },
    tagline: 'Cleans without compromising. The first step that protects.',
    productImage: '/images/product-gentle-cleanser.png',
    heroImage: '/images/product-gentle-cleanser.png',
    actives: [
      { name: 'Ceramide Complex', function: 'Barrier-preserving cleansing base', benefit: 'A ceramide base that replenishes lipids that cleansing removes.' },
      { name: 'Niacinamide', function: 'Barrier support and tone', benefit: 'Supports the skin barrier through the cleansing step.' },
      { name: 'Zinc PCA', function: 'Sebum regulation', benefit: 'Helps regulate excess oil, useful for oily and combination skin.' },
      { name: 'Ectoin', function: 'Water-binding extremolyte', benefit: ECTOIN_BENEFIT },
      { name: 'Postbiotic Lysate', function: 'Microbiome support', benefit: 'A combined fermentation-derived postbiotic that supports a balanced skin microbiome through the cleansing step.' },
      { name: 'Beta-Glucan', function: 'Soothing', benefit: 'Oat-derived polysaccharide, included to help calm skin during daily cleansing.' },
    ],
    claims: ['Silicone-free', 'Paraben-free', 'Sulphate-free', 'Synthetic fragrance-free'],
    about: [
      'The first step in the Therazo routine is built to clean without stripping. A ceramide-based cleansing system removes the day\'s grime, SPF and excess oil while replenishing lipids that conventional surfactants remove.',
      'Formulated for daily use, morning and night, under Indian heat and humidity — Gentle Daily Cleanser prepares skin for every step that follows.',
    ],
    concern: 'Barrier stripping from daily cleansing, especially in humid, high-pollution environments.',
    routineFit: 'Step 1 — first, morning and night, before any treatment or moisturising step.',
    sharedActives: 'Ceramide Complex, Niacinamide and Ectoin — also found in Daily Shield.',
  },
  {
    id: 'age-renewal',
    sku: '03',
    step: 'RENEW',
    name: 'Age Renewal Night Serum',
    descriptor: 'Anti-ageing Night Serum',
    price: 1699,
    size: '30 ml',
    status: 'coming-soon',
    usage: { when: 'PM' },
    tagline: 'A night-time renewal step for skin beginning to show its age.',
    // No pack photography exists for this SKU yet — components fall back to a placeholder.
    actives: [
      { name: 'Postbiotic Lysate', function: 'Microbiome support', benefit: 'A fermentation-derived postbiotic that supports a balanced skin microbiome overnight.' },
    ],
    activesPending: true,
    claims: [],
    about: [
      'Age Renewal Night Serum (working name) is the anti-ageing step in the Therazo range — a 30 ml night serum designed to work while skin is not dealing with sun exposure.',
      'Its full active profile will be published here once the formula is final. Like every Therazo product, each active will be listed with the reason it is there.',
    ],
    concern: 'Visible signs of ageing — fine lines, loss of firmness and uneven texture.',
    routineFit: 'Night routine — after Gentle Daily Cleanser, before Barrier Repair Cream.',
    sharedActives: 'Postbiotic Lysate, shared with Gentle Daily Cleanser and Barrier Repair Cream. Full active profile to be confirmed.',
  },
  {
    id: 'barrier-repair',
    sku: '04',
    step: 'REPAIR',
    name: 'Barrier Repair Cream',
    descriptor: 'Intensive Barrier Cream',
    price: 749,
    size: '50 g',
    status: 'coming-soon',
    usage: { when: 'PM' },
    tagline: 'Restore what daily life takes away.',
    productImage: '/images/product-barrier-repair.png',
    heroImage: '/images/product-barrier-repair.png',
    actives: [
      { name: 'Ceramide Complex', function: 'Barrier lipid replenishment', benefit: 'A full ceramide complex — the core of any barrier-repair formula.' },
      { name: 'Ectoin', function: 'Water-binding extremolyte', benefit: ECTOIN_BENEFIT },
      { name: 'Beta-Glucan', function: 'Soothing', benefit: 'Oat-derived polysaccharide, included to help calm skin while the barrier recovers.' },
      { name: 'Panthenol', function: 'Humectant and soothing', benefit: 'Pro-Vitamin B5, a humectant included for soothing and moisture.' },
      { name: 'Postbiotic Lysate (Bifida Ferment Filtrate)', function: 'Microbiome support', benefit: 'Supports a balanced skin microbiome alongside the barrier-repair actives.' },
    ],
    claims: ['Silicone-free', 'Paraben-free', 'Mineral oil-free', 'Synthetic fragrance-free'],
    heldClaims: ['dermatologicallyTested'],
    about: [
      'For skin that has been compromised — by over-exfoliation, harsh weather, active treatments, or simply daily stress — Barrier Repair Cream is Therazo\'s most intensive step. A ceramide complex replenishes the lipids of the outer skin layer.',
      'Beta-Glucan and Panthenol are included for soothing and moisture, while Ectoin supports hydration retention as the barrier recovers. Designed to be used as needed, or nightly during periods of visible sensitivity.',
    ],
    concern: 'A compromised, reactive, or over-treated skin barrier.',
    routineFit: 'Night routine — applied last, whenever the barrier needs intensive support.',
    sharedActives: 'Ceramide Complex and Ectoin — also found in Daily Shield.',
  },
  {
    id: 'clarity-serum',
    sku: '05',
    step: 'TREAT',
    name: 'Clarity Serum',
    descriptor: 'Brightening Serum',
    price: 1199,
    size: '30 ml',
    status: 'coming-soon',
    usage: { when: 'PM' },
    tagline: "A targeted step for Indian skin's most common concern.",
    productImage: '/images/product-clarity-serum.png',
    heroImage: '/images/product-clarity-serum.png',
    actives: [
      { name: 'Niacinamide', function: 'Tone support', benefit: 'Vitamin B3, studied for its role in reducing melanin transfer to the skin surface.' },
      { name: 'Zinc PCA', function: 'Sebum regulation', benefit: 'Helps regulate excess oil.' },
      { name: 'Ectoin', function: 'Water-binding extremolyte', benefit: ECTOIN_BENEFIT },
      { name: 'Tranexamic Acid', function: 'Tone support', benefit: 'Studied for the look of persistent dark spots. Works on a different pathway (plasmin) to niacinamide.' },
    ],
    claims: ['Silicone-free', 'Paraben-free', 'Synthetic fragrance-free'],
    heldClaims: ['dermatologicallyTested'],
    about: [
      'Uneven tone and dark marks are among the most common skin concerns across Indian skin types. Clarity Serum pairs Niacinamide and Tranexamic Acid — two actives that work through different pathways.',
      'Clarity Serum is an evening step, used after cleansing. In the morning, Daily Shield is the step that protects skin from UV.',
    ],
    concern: 'The look of hyperpigmentation, post-acne marks and uneven skin tone.',
    routineFit: 'Night routine — after Gentle Daily Cleanser, before Barrier Repair Cream.',
    sharedActives: 'Niacinamide and Ectoin — also found in Daily Shield.',
  },
]

// Free-from list plus any held claim whose evidence is now on file.
export function productClaims(p: Product) {
  return [...(p.claims ?? []), ...activeClaims(p.heldClaims ?? [])]
}

// MRP incl. taxes, Indian digit grouping: 1699 → "₹1,699"
export function formatPrice(price: number) {
  return `₹${price.toLocaleString('en-IN')}`
}

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function statusLabel(p: Product) {
  return p.status === 'launching-soon' ? 'Launching soon' : 'Coming soon'
}

export const dailyShield = products[0]
export const comingSoonProducts = products.filter((p) => p.status === 'coming-soon')
