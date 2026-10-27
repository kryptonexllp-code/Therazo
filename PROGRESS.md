# Therazo Website — Progress Log

Branch: `claude/therazo-website-build-kzc5eo`. Read `CLAUDE.md` first — it holds
the locked brand facts and claims rules and wins over anything else, including
this file.

## Current state (A–E brief, one commit per section)

| Commit | Section | What it did |
|---|---|---|
| A | Locked facts | CLAUDE.md rewritten; amber `#FFC107`, Soft Grey `#E6E8EC` tokens; one accent element per page |
| C1 | Range and pricing | MRPs 699 / 499 / 1,699 / 749 / 1,199; SKU 03 is the Age Renewal Night Serum (the earlier gel moisturiser is removed everywhere) |
| B | Claims control | Held claims in `lib/claims.ts` (all false); safe Ectoin wording; generic UV filter classes |
| B (27 Oct) | Two-tier | Ingredient percentages and the formulation ref only on /for-doctors (server-side `lib/clinical.ts`); customer pages list actives by name |
| C2 | Launch state | "Launching soon" / "Coming soon" + 4-field waitlist (`lib/waitlist.ts`, `/api/waitlist`); no ordering or payment |
| C3 | Contact | `lib/company.ts` drives footer, contact page and Organization JSON-LD |
| C4 | `/dose-guide` | "Two finger-lengths" page — carton QR target, keep the URL stable |
| C5 | Portals | Doctors page without efficacy or in-vivo wording; clinic sample kit marked coming soon |
| C6 | Motion | Slow molecule field on landing, product-card parallax, reduced-motion respected site-wide |
| C7 | Video | `<VideoSlot>` + `lib/videos.ts` — swap `src`/`poster` there to drop in real films |
| C8 | Images | `ProductImage`: contain inside fixed aspect wrappers, explicit dimensions, WebP |
| C9 | Quality gate | Lint + build clean; 390/768/1440 checked on every route; banned-phrase grep |
| Hero | HeroScanner | /customers hero: clean video + code-drawn scan overlay locked to tracked face landmarks; AI-imagery disclosure in footer |
| Tier 1 | Usage and guidance | Usage badges, How to use it + day timeline, product FAQs with JSON-LD, Routine Finder (/find-your-routine) with consent + /privacy, SPF test-documentation block, Therazo Promise strip, regulatory block, /dose-calculator (off), /science/ectoin + stubs, /start-here |

## Open items

- **Hero video (blocking, see docs/LAUNCH_CHECKLIST.md)**: both hero clips are
  watermarked placeholders; `hero-loop.mp4` is a stand-in built from the play-once clip.

- **Waitlist storage**: `/api/waitlist` writes to a local JSON file. That does not
  persist on Vercel — connect real storage (database, form service or sheet) before launch.
- **Pack photos**: tube and carton images are old mockups, marked
  `TODO: replace with final white-matt pack photo`. No texture shot yet.
- **SKU 03 actives**: only Postbiotic Lysate is confirmed; the rest show as TBC.
- **Daily Shield INCI list**: placeholder until the final list is supplied.
- **Dose guide**: no tube-life figure until a weigh test (content/dose.ts, then switch on
  `calculatorEnabled`); references read `[REFERENCES TO BE ADDED]`.
- **FAQ answers to confirm**: Daily Shield under makeup and white cast; amounts for SKUs 02–05
  (hidden in production until filled in content/faq/).
- **Dose calculator**: face-only finger-length guidance not supplied yet.
- **Privacy policy**: `[LEGAL REVIEW]` markers — retention, grievance contact, storage.
- **SPF test documentation**: set content/spfDocs.ts to 'published' when the report is on file.
- **Videos**: the three showcase slots show posters only until real files are added in `lib/videos.ts`.
- **Manufacturer address**: only "Jhajjar, Haryana" is on file.
- **Held claims**: flip a flag in `lib/claims.ts` only once the evidence is on file.
- **Logo**: only PNG logo files are supplied; swap in SVGs when available.
