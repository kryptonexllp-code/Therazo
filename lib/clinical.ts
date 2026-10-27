import 'server-only'

// Imported ONLY by /app/for-doctors/page.tsx (server component).
// Batch 1: no efficacy claims and no SPF test result exist yet — mechanisms
// below describe each ingredient as reported in the literature, not
// outcomes measured for this product.
export const DAILY_SHIELD_CLINICAL = {
  formulationRef: 'HIM-2627-3041',
  formulationName: 'Advanced Hydra Shield SPF Moisturizer',
  manufacturer: 'BO International, Jhajjar, Haryana',
  marketer: 'Kryptonex LLP, Hyderabad',
  spfStatus: 'SPF 50 PA++++ is the product designation. No SPF test report exists yet for batch 1 — it will be shared here when available.',
  fullActives: [
    { name: 'Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine (bemotrizinol)', concentration: 'As per formulation', type: 'Organic UV filter — triazine', mechanism: 'Broad-spectrum UVA/UVB absorber. Reported to be photostable.' },
    { name: 'Methylene Bis-Benzotriazolyl Tetramethylbutylphenol (bisoctrizole)', concentration: 'As per formulation', type: 'Organic UV filter — particulate', mechanism: 'Broad-spectrum filter dispersed as particles; absorbs and scatters UV.' },
    { name: 'Diethylamino Hydroxybenzoyl Hexyl Benzoate (DHHB)', concentration: 'As per formulation', type: 'Organic UV filter — benzoate', mechanism: 'UVA absorber. Reported to be photostable.' },
    { name: 'Ethylhexyl Triazone', concentration: 'As per formulation', type: 'Organic UV filter — triazine', mechanism: 'UVB absorber. Reported to be photostable.' },
    { name: 'Zinc Oxide', concentration: 'As per formulation', type: 'Mineral UV filter', mechanism: 'Scatters and absorbs across UVB and UVA.' },
    { name: 'Titanium Dioxide', concentration: 'As per formulation', type: 'Mineral UV filter', mechanism: 'Scatters and absorbs, mainly UVB and short-wave UVA.' },
    { name: 'Ectoin', concentration: '1%', type: 'Extremolyte', mechanism: 'Draws water to skin cells and forms a stabilising hydration shell around them, supporting hydration retention. Acts in the outer skin layers; does not absorb UV and does not reach the dermis.' },
    { name: 'Niacinamide', concentration: '3%', type: 'Vitamin B3', mechanism: 'Reported to reduce melanosome transfer to keratinocytes, to be sebostatic, and to support ceramide synthesis.' },
    { name: 'Ceramide Complex', concentration: '0.5%', type: 'Barrier lipids', mechanism: 'Ceramide NP + AP + EOP + Phytosphingosine + Cholesterol. Replenishes stratum corneum lipids.' },
    { name: 'Ethyl Ascorbic Acid', concentration: '1%', type: 'Vitamin C derivative', mechanism: 'Ethyl ether of ascorbic acid, more stable than L-ascorbic acid. Antioxidant; reported tyrosinase-inhibiting activity.' },
    { name: 'Sodium Hyaluronate', concentration: '0.5%', type: 'Humectant', mechanism: 'Binds water at the skin surface.' },
    { name: 'Squalane', concentration: 'As per formulation', type: 'Emollient', mechanism: 'Plant-derived emollient; structurally similar to a component of skin surface lipids.' },
    { name: 'Panthenol', concentration: '1%', type: 'Provitamin B5', mechanism: 'Converted to pantothenic acid in skin. Humectant; studied for soothing.' },
    { name: 'Tocopherol', concentration: '0.5%', type: 'Antioxidant', mechanism: 'Vitamin E. Free-radical scavenger; also helps protect the formula from oxidation.' },
    { name: 'Rosa Damascena Flower Extract', concentration: 'As per formulation', type: 'Botanical', mechanism: 'Botanical with a mild natural scent — the product is synthetic fragrance-free, not fragrance-free.' },
  ],
}
