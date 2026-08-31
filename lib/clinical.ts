import 'server-only'

// This object is imported ONLY in /app/for-doctors/page.tsx (server component)
// Never import in any client component or public page
export const DAILY_SHIELD_CLINICAL = {
  formulationRef: 'HIM-2627-3041',
  formulationName: 'Advanced Hydra Shield SPF Moisturizer',
  formulationScore: '95/100',
  cmo: 'BO International, 870 Udyog Vihar Phase V, Sector 19, Gurugram, Haryana 122016',
  spfTest: 'ISO 24444:2019 (in-vivo) — certificate in progress',
  fullActives: [
    { name: 'Tinosorb S (Bemotrizinol)', concentration: 'As per formulation', type: 'UV Filter', mechanism: 'Photostable broadband UV absorber. UVA+UVB coverage. Does not isomerise under UV exposure.' },
    { name: 'Tinosorb M (Bisoctrizole)', concentration: 'As per formulation', type: 'UV Filter', mechanism: 'Hybrid UV filter acting by both absorption and scattering. Enhanced UVA depth protection.' },
    { name: 'DHHB', concentration: 'As per formulation', type: 'UV Filter', mechanism: 'Photostable UVA absorber. Superior stability vs avobenzone under UV exposure.' },
    { name: 'Ethylhexyl Triazone', concentration: 'As per formulation', type: 'UV Filter', mechanism: 'Triazine-based UVB filter. Photostable at low concentrations.' },
    { name: 'Zinc Oxide', concentration: 'As per formulation', type: 'Physical UV Filter', mechanism: 'Broad-spectrum physical UV filter by scattering and absorption.' },
    { name: 'Titanium Dioxide', concentration: 'As per formulation', type: 'Physical UV Filter', mechanism: 'Physical UV filter, primarily UVB range.' },
    { name: 'Ectoin', concentration: '1%', type: 'Extremolyte', mechanism: 'Compatible solute. Stabilises membranes under osmotic/UV/heat stress. Clinical evidence for photoprotection and barrier support.' },
    { name: 'Niacinamide', concentration: '3%', type: 'Functional Active', mechanism: 'Inhibits melanosome transfer from melanocytes to keratinocytes. Sebostatic. Supports ceramide synthesis.' },
    { name: 'Ceramide Complex', concentration: '0.5%', type: 'Barrier Active', mechanism: 'Multi-ceramide complex: Ceramide NP + AP + EOP + Phytosphingosine + Cholesterol. Replenishes stratum corneum lipid matrix.' },
    { name: 'Ethyl Ascorbic Acid', concentration: '1%', type: 'Antioxidant', mechanism: 'Ethyl-substituted ascorbic acid ester. Superior stability vs L-ascorbic acid. Antioxidant + melanin synthesis inhibition.' },
    { name: 'Sodium Hyaluronate', concentration: '0.5%', type: 'Humectant', mechanism: 'Low molecular weight hyaluronate for dermal penetration and sustained hydration.' },
    { name: 'Squalane', concentration: 'As per formulation', type: 'Emollient', mechanism: 'Plant-derived. Identical to skin-produced squalane. Non-comedogenic.' },
    { name: 'Panthenol', concentration: '1%', type: 'Soothing Active', mechanism: 'Converts to pantothenic acid. Accelerates epithelial repair. Anti-inflammatory.' },
    { name: 'Tocopherol', concentration: '0.5%', type: 'Antioxidant', mechanism: 'Vitamin E. Free radical scavenger. Stabilises actives in formula.' },
    { name: 'Rosa Damascena Flower Extract', concentration: 'As per formulation', type: 'Botanical', mechanism: 'Natural antioxidant botanical. Mild natural scent — product is synthetic fragrance-free.' },
  ],
}
