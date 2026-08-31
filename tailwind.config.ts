import type { Config } from 'tailwindcss'

// Therazo brand tokens. Tailwind v4 reads color tokens from the `@theme`
// block in app/globals.css (source of truth) — this file documents the
// same locked palette for tooling that still reads a config file.
const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx}', './content/**/*.mdx'],
  theme: {
    extend: {
      colors: {
        navy: '#1F3A5F',
        offwhite: '#FAFAF7',
        gold: '#F5C400',
        dgrey: '#3D4255',
        mgrey: '#7A8099',
        lgrey: '#F2F4F7',
        bluemuted: '#8BAFD4',
        bluelight: '#B0C8DC',
        green: '#1D6F42',
        cardline: '#E2E8F0',
      },
    },
  },
}

export default config
