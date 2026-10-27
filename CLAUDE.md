# Therazo — Brand Rules for Claude Code

These rules are the locked facts for the site. Where anything else (older build
prompt, existing copy, comments) disagrees, this file wins.

## BRAND AND CONTACT
Domain: therazo.co (never any other TLD)
Care email: care@therazo.co
Customer care phone: 1800 569 4100 (as printed on the tube)
WhatsApp 919953339464: waitlist notifications only until launch — no ordering, no payment
Manufactured by BO International (Jhajjar, Haryana) · Marketed by Kryptonex LLP, Hyderabad

## COLOURS — NEVER CHANGE
Deep Clinical Blue (registered): #1F3A5F — the `navy` token
Off White: #FAFAF7 — page background, the `offwhite` token
Soft Grey: #E6E8EC — card borders and rules, the `softgrey` / `cardline` tokens
Amber accent: #FFC107 — the `gold` token. One accent element per page.
The old accent hex is retired everywhere. Teal #1D9E75 stays unused.

## TYPE AND LOGO
Font: Poppins only, loaded via next/font/google.
The THERAZO wordmark is vector artwork. Always use the supplied SVG/logo files
(/public/images/logos/) — never retype the wordmark as live text.
The gap in the "O" sits at bottom-left (7–8 o'clock). Tagline: SCIENCE. DEFINED.
Do not alter or recolour the logo outside the supplied versions.

## RANGE AND PRICES (MRP incl. taxes, Therazo Pricing Model)
01 Daily Shield SPF 50 PA++++ Moisturizer, 50 ml ℮ 1.69 fl. oz. — ₹699
02 Gentle Daily Cleanser — ₹499
03 Age Renewal Night Serum (anti-ageing, 30 ml, working name) — ₹1,699
04 Barrier Repair Cream — ₹749
05 Clarity Serum — ₹1,199
SKU 03 replaced the earlier gel moisturiser entirely — no mention, page, link or image of it.
Postbiotic Lysate is confirmed in SKUs 02, 03 and 04 only.

## DAILY SHIELD
Always "SPF Moisturizer". Never "Daily Defence", never "sunscreen" or "gel" as the product descriptor.
Fragrance line is always "Synthetic fragrance-free", with the Rosa Damascena disclosure box.
Never plain "fragrance-free".
Front-of-pack style list (no percentages): Ectoin · Niacinamide · Ceramide Complex · Vitamin C

## TWO-TIER INFORMATION
Public site: outcomes and benefits only. Concentrations live only in the /for-doctors tier,
served server-side from lib/clinical.ts (server-only). Never publish percentages or UV-filter
brand names on customer pages, metadata, schema or client bundles.
Reference concentrations for the doctors tier:
Ectoin 1% · Niacinamide 3% · Ceramide Complex 0.5% · Ethyl Ascorbic Acid 1% ·
Sodium Hyaluronate 0.5% · Panthenol 1% · Tocopherol 0.5%
Formulation ref HIM-2627-3041 appears only on /for-doctors.

## PACK
Tube: white matt body, navy type and navy "50", one amber rule, navy flip-top cap.
Carton: white matt front and back, navy side walls and flaps.
Older mockups (off-white tube, navy-front carton) are placeholders only, marked in code with
`TODO: replace with final white-matt pack photo`. Do not generate new pack imagery.

## LAUNCH STATE
Daily Shield is in production; finished units expected around mid-December 2026.
Daily Shield CTA: "Launching soon" + waitlist (name, phone/WhatsApp, email, product interest).
Other SKUs: "Coming soon" + waitlist.
No order buttons, payment claims, delivery promises or stock counts anywhere.

## CLAIMS CONTROL
Held claims live in lib/claims.ts as flags. A flag stays false until the evidence is on file.
Not on the site until evidence exists: dermatological testing, non-comedogenicity, recyclable
packaging, cruelty-free, any "clinically validated / clinically relevant concentration" wording,
anything about blue light.
SPF: "SPF 50 PA++++" is the product designation only. The in-vivo SPF test is not done for
batch 1 — never imply a tested or proven SPF result, and no "in-vivo" wording.
No UV-filter trade names in customer-facing copy; science and doctors pages describe filter
classes generically (INCI names are fine on the doctors page).
Ectoin safe wording: "Ectoin draws water to skin cells and forms a stabilising shell around them,
which supports hydration retention." It works in the outer skin layers; it does not absorb UV
and does not reach the dermis.
Dose line on Daily Shield: "SPF is tested with two finger-lengths of cream. Most people use half."
linking to /dose-guide (the carton QR target — keep that URL stable).
Never invent testimonials, ratings, review counts, doctor endorsements, awards, rankings or
clinical results. No certifications (BIS, GMP, cruelty-free marks) that are not on file.

## DESIGN RULES
NO gradients · NO border-radius on CTAs · NO drop shadows on brand elements
NO template components — build everything from scratch
Framer Motion: restrained, clinical. Respect prefers-reduced-motion. If it feels flashy, remove it.
Sharp corners on all buttons and CTAs — this is a clinical brand
Product photos never crop: object-fit contain inside fixed aspect wrappers, explicit width/height,
lazy-load below the fold, alt text without claims.
Video slots use <VideoSlot>; mobile shows posters, never autoplay.
Exception: the /customers hero uses <HeroScanner> (lib/heroVideo.ts) and plays muted on mobile;
reduced-motion visitors get the poster only. Its scan labels (content/heroLabels.ts) stay
descriptive: no percentages, results, before-and-after or claims.
AI imagery: keep the footer disclosure (content/disclosure.ts) visible on every page that shows
AI-generated video or imagery. Never imply the people shown are real customers or real results.
No before-and-after. Never crop, blur, paint
over or place graphics on a generator watermark — swap the file instead (docs/LAUNCH_CHECKLIST.md).

## TIER 1 FEATURES (customer portal)
Copy lives in content/ — change wording there, not in components.
Usage badge on every product image (lib/products.ts `usage`); badge icons stay white so the
page keeps its single amber accent. Reapply guidance is always "every 2 hours outdoors".
No tube-life figure anywhere until `calculatorEnabled` (lib/claims.ts) is true and
content/dose.ts has a weigh-tested number. /dose-calculator returns 404 while it is off.
FAQs (content/faq/): an answer that needs facts we don't have stays null — shown as a TODO in
development only, never in production or JSON-LD. Never invent makeup, white-cast or
amount answers.
SPF test documentation (content/spfDocs.ts) stays 'not-published' until the report is on file;
never say testing is "in progress", "in a laboratory" or "before shipping".
Every waitlist form has a required, unticked consent checkbox linking to /privacy.
Nav: one item for the Routine Finder, no mega-menu. No competitor names in site copy.
No reviews, stars, counts or testimonials until there are verified buyers after launch.

## COMMANDS
npm run dev → localhost:3000
npm run build → production build (zero errors before marking complete)
npm run lint → ESLint

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
