# Therazo Website — Progress Log

Last session: 10-correction pass + landing page rework, on branch
`claude/therazo-website-build-kzc5eo`. All work described below is committed
and pushed. Working tree was clean at end of session (nothing left staged).

Resume instructions for next session: **read this file first**, then check
`git log --oneline -5` to confirm HEAD matches. Do not rebuild anything
listed as COMPLETE below — only pick up the INCOMPLETE / KNOWN ISSUES items,
or whatever the user asks for next.

---

## 1. Files created or modified this session

Scope: commits `b2990c6` (10 corrections) and `8eb33fb` (landing page
rework), i.e. everything after the "Wire real Therazo logo files" commit
(`bc533ab`) from the prior session.

**Created:**
- `app/customers/page.tsx` — former homepage content, moved here
- `components/SiteChrome.tsx` — route-aware Navbar/Footer visibility + variant switch
- `components/SkuCoverageMatrix.tsx` — shared SKU × active coverage table
- `components/VideoShowcase.tsx` — 3-card AI video placeholder section

**Modified:**
- `app/page.tsx` — now the dual-portal landing page (rewritten twice: first
  a minimal version, then reworked into the full gradient-mesh/particle-field/
  glass-card version per the second spec)
- `app/about/page.tsx` — Our Story paragraph reworked; Dr. Cure Pharmacy
  founding-story section added
- `app/for-doctors/page.tsx` — nav anchor ids added (`#formulation`,
  `#clinical-data`); SKU coverage matrix added
- `app/layout.tsx` — swapped direct Navbar/Footer for `SiteChrome`
- `app/products/daily-shield/page.tsx` — no functional change this session
  beyond what was already in place (breadcrumb "Home" now points to `/customers`)
- `app/science/page.tsx` — UV filter copy fixed; SKU matrix extracted to
  shared component
- `app/sitemap.ts` — added `/customers`
- `components/AnimatedSection.tsx` — added `style` and `id` passthrough props
- `components/Navbar.tsx` — variant system (`default` / `customer` / `doctor`)
- `lib/products.ts` — cleanser price 399 → 749; added Postbiotic Lysate and
  Beta-Glucan active entries to gentle-cleanser, oil-balance, barrier-repair
  so the SKU matrix has real data to point at

---

## 2. Status of the 10 corrections

| # | Correction | Status |
|---|---|---|
| 1 | New landing page (portal selector) | **COMPLETE** — later fully reworked per follow-up spec (gradient mesh, 12-particle field, glass-blur cards, exact animation timings). Verified visually via screenshots, desktop + mobile. |
| 2 | Move homepage to `/customers`, split nav | **COMPLETE** — `/customers` and `/for-doctors` each get a distinct `Navbar` variant; `/` has no nav/footer at all. |
| 3 | 3 AI video placeholder cards | **COMPLETE** — section inserted between Ticker and Brand Positioning on `/customers`; click opens "Video coming soon" overlay as specced. |
| 4 | Our Story paragraph rework | **COMPLETE** — applied in both `app/about/page.tsx` and `app/customers/page.tsx`. |
| 5 | Remove "#1 ranked" stat | **COMPLETE, with a judgement call** — a "95" stat already existed, so per the instruction's own fallback I removed the "#1" stat and left 4 stats (95 relabeled "Out of 100 · 6-brand formulation benchmark", 6, 9, ₹699) instead of adding a duplicate 95. |
| 6 | Fix demeaning UV filter copy | **COMPLETE** — the flagged phrase in `app/science/page.tsx` was reworded; codebase-wide search found no other demeaning competitor language. |
| 7 | SKU coverage matrix fix | **COMPLETE** — Postbiotic Lysate row present with amber tint + footnote, now on both `/science` and `/for-doctors` (shared `SkuCoverageMatrix` component). Required adding real active entries to `lib/products.ts` (see above) since the verified table couldn't be satisfied by existing product data alone. |
| 8 | Dr. Cure Pharmacy section | **COMPLETE** — full section added to `/about`; condensed 2-sentence trust signal added to `/customers` waitlist section. Logo is a text placeholder box (see Known Issues). |
| 9 | Cleanser price 399 → 749 | **COMPLETE** — only one hardcoded instance existed (`lib/products.ts`); confirmed no other file references `399`. |
| 10 | Final build/lint/commit/push | **COMPLETE** — `npm run build` and `npm run lint` both clean; pushed to `claude/therazo-website-build-kzc5eo`. |

**All 10 corrections are COMPLETE.** Nothing from that list is partial.

The landing page (item 1) was additionally reworked a second time this
session per a follow-up, more detailed visual spec — that rework is also
complete and pushed (commit `8eb33fb`).

---

## 3. Known issues / things built but not fully real

These are not bugs in the sense of "broken code" — everything builds and
renders — but they're placeholders or judgement calls a human should look at:

- **Dr. Cure Pharmacy logo**: still a text placeholder box (`Dr. Cure
  Pharmacy` label in a grey box) in `app/about/page.tsx`. The real file
  (`/public/images/logos/dr-cure-logo.png`) was never supplied. Swap-in code
  path is noted in the original correction but not wired since the asset
  doesn't exist yet.
- **Daily Shield product gallery, 4th thumbnail**: still shows the
  "Texture shot — coming soon" `ImagePlaceholder`. No separate texture photo
  was ever supplied (only 2 real Daily Shield images exist: the hero/stone-slab
  shot and the box shot, both reused across the 4-image gallery).
- **Blog post cover images**: all 5 posts use `ImagePlaceholder` for their
  cover banner — no blog cover photography has been supplied.
- **AI video placeholders**: intentionally non-functional by design (per
  Correction 3's own spec) — clicking play shows "Video coming soon ·
  care@therazo.co", not a real video. This is expected behavior, not a bug.
- **WhatsApp number**: still the placeholder personal number
  `919953339464` in `lib/whatsapp.ts` and `CLAUDE.md`. Both files already
  flag this as "replace before launch" — not something this session touched
  or was asked to touch.
- **SPF certificate**: still a placeholder frame on the Daily Shield page
  ("ISO 24444:2019 · Certificate in Progress") — no real certificate exists
  yet, this is expected per the brand brief.
- **Logo source files are not transparent**: all 6 files in
  `/public/images/logos/` are opaque squares (navy or white background baked
  in), not transparent PNGs as originally described when they were handed
  off. Worked around in `components/ui/Logo.tsx` via `mix-blend-multiply`
  and a pixel-measured crop; this works correctly but is fragile — if the
  logo source files are ever replaced, the crop math (`objectPosition`
  percentages, aspect-ratio multipliers) in `Logo.tsx` and the
  `WordmarkOnly` component in `app/page.tsx` will need to be re-derived
  against the new file's content bounding box.
- **Landing page particle/gradient animation**: implemented and visually
  verified via Playwright screenshots (desktop 1280px and mobile 390px, at
  both an early and a settled animation frame) — renders correctly in both.
  Not tested in a real browser by a human yet; CSS-only animations
  (`backdrop-filter: blur`) may render slightly differently across browser
  engines (Safari in particular has historically had quirks with
  `backdrop-filter`), worth a manual cross-browser check before calling this
  fully done.
- **Vercel deployment**: not verified from this session — there's no tool
  access to query Vercel's dashboard/API from here. The push should trigger
  an auto-deploy, but the live `therazo.vercel.app` URL has not been checked
  by this session after any of today's pushes. Worth checking manually.

---

## 4. Where things stand structurally

- Two-portal architecture: `/` (portal picker) → `/customers` (former
  homepage, full brochure site) or `/for-doctors` (clinical portal).
  `SiteChrome` (client component wrapping `Navbar`/`Footer`) decides which
  nav variant to show based on `usePathname()`.
- All other pages (`/science`, `/products`, `/about`, `/routine`,
  `/contact`, `/blogs`) still use the `default` Navbar variant (5-link nav
  including For Doctors) — these were untouched by the two-portal split,
  since the corrections only specified new variants for `/customers` and
  `/for-doctors`.
- `lib/products.ts` is still the single source of truth for product data;
  the SKU coverage matrix, product cards, and product pages all derive from
  it — no hardcoded duplication of active/price data remains.

---

## 5. Next steps (not started, only if asked)

Nothing is queued — the 10 corrections and the landing page rework were the
full scope of this session's requests. If the user returns with new work,
start there. If they just say "continue," ask what they'd like next rather
than guessing, since there's no open task list beyond what's in this file.
