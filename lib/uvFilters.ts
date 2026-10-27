// The six UV filters in Daily Shield, described by filter class only.
// Customer-facing pages never use filter trade names; coverage is shown as
// the wavebands each class absorbs/scatters in — qualitative, not a measured
// result for the finished product.
export type Band = 'UVB' | 'UVA-II' | 'UVA-I'

export const BANDS: { id: Band; range: string }[] = [
  { id: 'UVB', range: '290–320 nm' },
  { id: 'UVA-II', range: '320–340 nm' },
  { id: 'UVA-I', range: '340–400 nm' },
]

export const UV_FILTERS: { name: string; type: 'Organic' | 'Mineral'; bands: Band[]; note: string }[] = [
  {
    name: 'Broad-spectrum triazine filter (oil-soluble)',
    type: 'Organic',
    bands: ['UVB', 'UVA-II', 'UVA-I'],
    note: 'A photostable organic filter covering UVB through long-wave UVA. It holds its structure under sunlight.',
  },
  {
    name: 'Broad-spectrum triazine filter (particulate)',
    type: 'Organic',
    bands: ['UVB', 'UVA-II', 'UVA-I'],
    note: 'A photostable filter dispersed as fine particles, which both absorb and scatter UV across UVB and UVA.',
  },
  {
    name: 'Benzoate UVA filter',
    type: 'Organic',
    bands: ['UVA-II', 'UVA-I'],
    note: 'A dedicated, photostable UVA filter that strengthens the long-wave UVA end of the system.',
  },
  {
    name: 'Triazine UVB filter',
    type: 'Organic',
    bands: ['UVB'],
    note: 'A dedicated, photostable UVB filter, efficient at low use levels.',
  },
  {
    name: 'Zinc oxide',
    type: 'Mineral',
    bands: ['UVB', 'UVA-II', 'UVA-I'],
    note: 'A mineral filter that scatters and absorbs UV across UVB and UVA.',
  },
  {
    name: 'Titanium dioxide',
    type: 'Mineral',
    bands: ['UVB', 'UVA-II'],
    note: 'A mineral filter that reinforces the UVB and shorter-wave UVA range.',
  },
]
