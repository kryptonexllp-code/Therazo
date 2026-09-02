// ── STATUS TYPES ──────────────────────────────────────────────
export type ProductStatus = 'available' | 'coming-soon'

// ── PUBLIC ACTIVE (no concentrations) ─────────────────────────
export type PublicActive = {
  name: string
  function: string
  benefit: string
}

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
  timeline?: string
  tagline: string
  heroImage: string
  productImage: string
  actives: PublicActive[]
  benefits?: string[]
  claims?: string[]
  fragranceNote?: string
  spf?: string
  uvFilters?: number
  about?: string[]
  concern?: string
  routineFit?: string
  sharedActives?: string
}

export const products: Product[] = [
  {
    id: 'daily-shield',
    sku: '01',
    step: 'PROTECT',
    name: 'Daily Shield',
    descriptor: 'SPF Moisturizer',
    price: 699,
    size: '50 ml / 50 g',
    status: 'available',
    tagline: 'Six UV filters. Nine skin actives. One daily step.',
    spf: 'SPF 50 PA++++',
    uvFilters: 6,
    heroImage: '/images/hero-daily-shield-clinical.png',
    productImage: '/images/product-daily-shield-box.png',
    actives: [
      { name: 'Tinosorb S + Tinosorb M', function: 'Next-generation broad-spectrum UV filters', benefit: 'Gold-standard UV filter system — photostable, used by Bioderma and La Roche-Posay. Does not degrade in sunlight.' },
      { name: 'DHHB + Ethylhexyl Triazone', function: 'Advanced photostable UV filters', benefit: 'Next-generation UVA and UVB filters with superior photostability versus older chemical filters like avobenzone.' },
      { name: 'Zinc Oxide + Titanium Dioxide', function: 'Physical mineral UV filters', benefit: 'Mineral broad-spectrum protection. Gentle on sensitive skin. Completes the 6-filter UV defence system.' },
      { name: 'Ectoin', function: 'Extremolyte stress shield', benefit: 'Clinically validated protection against UV stress, urban pollution, and heat. Present in all 5 Therazo formulas — the brand signature.' },
      { name: 'Niacinamide', function: 'Barrier, sebum, and brightening active', benefit: 'At a clinically relevant concentration — interrupts melanin transfer, regulates sebum, supports the skin barrier.' },
      { name: 'Ceramide Complex', function: 'Barrier lipid repair', benefit: 'Full multi-ceramide complex with supporting lipids. Replenishes the stratum corneum to restore barrier integrity.' },
      { name: 'Ethyl Ascorbic Acid', function: 'Stable Vitamin C', benefit: 'Most stable form of Vitamin C. Antioxidant protection and brightening without the instability of L-ascorbic acid.' },
      { name: 'Sodium Hyaluronate', function: 'Deep hydration', benefit: 'Low molecular weight penetrates deeper for lasting hydration.' },
      { name: 'Squalane + Panthenol + Tocopherol', function: 'Moisture, soothing, antioxidant', benefit: 'Plant-derived moisturisation, Pro-Vitamin B5 repair, and Vitamin E antioxidant protection.' },
    ],
    benefits: [
      'Broad-spectrum UVA + UVB protection — 6 UV filters',
      'Lightweight, non-greasy — no white cast',
      'Strengthens and repairs the skin barrier',
      'Visibly brightens and addresses uneven skin tone',
      'Non-comedogenic — all skin types, unisex',
    ],
    claims: ['Silicone-free', 'Paraben-free', 'Mineral oil-free', 'Artificial colour-free', 'Synthetic Fragrance-Free'],
    fragranceNote: 'Contains Rosa Damascena Flower Extract — a natural botanical ingredient with a mild scent. Daily Shield is synthetic fragrance-free. It is not fully fragrance-free.',
  },
  {
    id: 'gentle-cleanser',
    sku: '02',
    step: 'CLEANSE',
    name: 'Gentle Daily Cleanser',
    descriptor: 'Ceramide Cleanser',
    price: 749,
    size: '100 ml',
    status: 'coming-soon',
    timeline: 'Arriving Y1 Q3',
    tagline: 'Cleans without compromising. The first step that protects.',
    productImage: '/images/product-gentle-cleanser.png',
    heroImage: '/images/product-gentle-cleanser.png',
    actives: [
      { name: 'Ceramide Complex', function: 'Barrier-preserving cleansing base', benefit: 'Unlike conventional surfactants, the ceramide base replenishes what gentle cleansing removes.' },
      { name: 'Niacinamide', function: 'Barrier support and tone evening', benefit: 'Maintains barrier integrity through the cleansing step. Addresses uneven tone from first use.' },
      { name: 'Zinc PCA', function: 'Sebum regulation', benefit: 'Reduces excess oil production. Particularly effective for oily and combination skin.' },
      { name: 'Ectoin', function: 'Stress shield and barrier support', benefit: 'Protects skin cells from cleansing-related environmental stress. Present in all 5 Therazo formulas.' },
      { name: 'Postbiotic Lysate (Bifida Ferment Filtrate)', function: 'Microbiome support', benefit: 'A fermentation-derived postbiotic that supports a balanced skin microbiome through the cleansing step.' },
      { name: 'Beta-Glucan', function: 'Skin immune support', benefit: "Oat-derived. Supports the skin's own immune function and calms visible stress from daily cleansing." },
    ],
    claims: ['Silicone-free', 'Paraben-free', 'Sulphate-free', 'Synthetic Fragrance-Free'],
    about: [
      'The first step in the Therazo routine is built to clean without stripping. A ceramide-based cleansing system removes the day\'s grime, sunscreen, and excess oil while replenishing the very lipids that conventional surfactants remove.',
      'Formulated for daily use across all skin types — including the sensitised, reactive skin so common under Indian heat and pollution — Gentle Daily Cleanser sets up every product that follows it to work harder.',
    ],
    concern: 'Barrier stripping from daily cleansing, especially in humid, high-pollution environments.',
    routineFit: 'Step 1 — always first, morning and night, before any treatment or moisturising step.',
    sharedActives: 'Ceramide Complex and Ectoin — the same barrier and stress-protection actives found in Daily Shield.',
  },
  {
    id: 'oil-balance',
    sku: '03',
    step: 'MOISTURISE',
    name: 'Oil Balance Moisturiser',
    descriptor: 'Gel Moisturiser',
    price: 599,
    size: '50 g',
    status: 'coming-soon',
    timeline: 'Arriving Y2 Q1',
    tagline: 'Hydration without heaviness. Built for Indian humidity.',
    productImage: '/images/product-oil-balance.png',
    heroImage: '/images/product-oil-balance.png',
    actives: [
      { name: 'Niacinamide', function: 'Sebum regulation and barrier support', benefit: 'Reduces excess sebum production. A cornerstone active for oily and combination Indian skin.' },
      { name: 'Zinc PCA', function: 'Oil control and antimicrobial', benefit: 'Regulates sebaceous activity at the follicular level. Clinical evidence for visible pore reduction.' },
      { name: 'Ceramide Complex', function: 'Barrier repair without heaviness', benefit: 'Replenishes barrier lipids in a lightweight gel format — appropriate for the Indian climate.' },
      { name: 'Ectoin', function: 'Extremolyte stress protection', benefit: 'Shields skin from urban environmental stressors. Consistent across all Therazo formulas.' },
      { name: 'Postbiotic Lysate (Lactobacillus Ferment)', function: 'Microbiome support', benefit: 'Supports a balanced skin microbiome — a root factor in regulating excess oiliness.' },
    ],
    claims: ['Silicone-free', 'Paraben-free', 'Mineral oil-free', 'Synthetic Fragrance-Free', 'Non-comedogenic'],
    about: [
      'A gel moisturiser built specifically for skin that sweats, shines, and still needs to be hydrated. Oil Balance Moisturiser delivers water-based hydration and barrier support without the heaviness of a conventional cream — appropriate for India\'s humidity and heat.',
      'Niacinamide and Zinc PCA regulate excess sebum at the source, while the ceramide complex keeps the barrier intact — so oil control never comes at the cost of dehydration.',
    ],
    concern: 'Excess oil and shine without compromising barrier hydration in hot, humid climates.',
    routineFit: 'Step 3 — after cleansing and treatment, before or in place of a heavier cream.',
    sharedActives: 'Niacinamide, Ceramide Complex, and Ectoin — shared with Daily Shield\'s barrier and brightening system.',
  },
  {
    id: 'barrier-repair',
    sku: '04',
    step: 'REPAIR',
    name: 'Barrier Repair Cream',
    descriptor: 'Intensive Barrier Cream',
    price: 699,
    size: '50 g',
    status: 'coming-soon',
    timeline: 'Arriving Y2 Q2',
    tagline: 'Restore what daily life takes away.',
    productImage: '/images/product-barrier-repair.png',
    heroImage: '/images/product-barrier-repair.png',
    actives: [
      { name: 'Ceramide Complex', function: 'Comprehensive barrier lipid restoration', benefit: 'Full ceramide complex — the most important ingredient for compromised barrier repair.' },
      { name: 'Ectoin', function: 'Extremolyte membrane protection', benefit: 'Protects while the barrier rebuilds. Clinically validated for skin under stress.' },
      { name: 'Beta-Glucan', function: 'Skin immune support', benefit: 'Oat-derived. Activates skin immune defence. Accelerates barrier restoration. Fastest-growing clinical ingredient 2026.' },
      { name: 'Panthenol', function: 'Healing and soothing', benefit: 'Pro-Vitamin B5 accelerates skin cell repair and provides lasting soothing relief.' },
      { name: 'Postbiotic Lysate (Bifida Ferment Filtrate)', function: 'Microbiome support', benefit: 'Supports a balanced skin microbiome alongside the barrier-repair actives.' },
    ],
    claims: ['Silicone-free', 'Paraben-free', 'Mineral oil-free', 'Synthetic Fragrance-Free', 'Dermatologically tested'],
    about: [
      'For skin that has been compromised — by over-exfoliation, harsh weather, active treatments, or simply daily stress — Barrier Repair Cream is Therazo\'s most intensive step. A comprehensive ceramide complex rebuilds the stratum corneum from the outside in.',
      'Beta-Glucan and Panthenol accelerate the skin\'s own repair mechanisms, while Ectoin protects vulnerable cells while the barrier rebuilds itself. Designed to be used as needed, or nightly during periods of visible sensitivity.',
    ],
    concern: 'A compromised, reactive, or over-treated skin barrier.',
    routineFit: 'Final step — applied last, at night, whenever the barrier needs intensive support.',
    sharedActives: 'Ceramide Complex and Ectoin — the same core barrier system present in Daily Shield.',
  },
  {
    id: 'clarity-serum',
    sku: '05',
    step: 'TREAT',
    name: 'Clarity Serum',
    descriptor: 'Brightening Serum',
    price: 899,
    size: '30 ml',
    status: 'coming-soon',
    timeline: 'Arriving Y2 Q4',
    tagline: "Precision treatment for Indian skin's most common concern.",
    productImage: '/images/product-clarity-serum.png',
    heroImage: '/images/product-clarity-serum.png',
    actives: [
      { name: 'Niacinamide', function: 'Melanin transfer inhibition', benefit: 'At a clinically relevant concentration — interrupts the melanin transfer pathway to visibly address hyperpigmentation.' },
      { name: 'Zinc PCA', function: 'Sebum regulation and clarity', benefit: 'Reduces excess sebum and maintains the clarity the serum achieves.' },
      { name: 'Ectoin', function: 'Environmental stress shield', benefit: 'Protects against the UV and pollution stress that drives hyperpigmentation in Indian skin.' },
      { name: 'Tranexamic Acid', function: 'Hyperpigmentation treatment', benefit: 'Clinical evidence for persistent hyperpigmentation. Works at the plasmin pathway — a different mechanism to Niacinamide.' },
    ],
    claims: ['Silicone-free', 'Paraben-free', 'Synthetic Fragrance-Free', 'Dermatologically tested'],
    about: [
      'Hyperpigmentation is the single most common skin concern across Indian skin types. Clarity Serum is a precision treatment step — pairing Niacinamide and Tranexamic Acid, two actives that work through different biological pathways, for a compounding effect on uneven tone.',
      'Used consistently alongside Daily Shield\'s UV protection, Clarity Serum targets the pigment that has already formed while daily SPF prevents new pigmentation from developing.',
    ],
    concern: 'Hyperpigmentation, post-inflammatory dark marks, and uneven skin tone.',
    routineFit: 'Step 2 — a treatment serum applied after cleansing, before moisturising.',
    sharedActives: 'Niacinamide and Ectoin — the same brightening and stress-protection actives found in Daily Shield.',
  },
]

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export const dailyShield = products[0]
export const comingSoonProducts = products.filter((p) => p.status === 'coming-soon')
