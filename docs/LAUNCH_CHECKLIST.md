# Launch checklist

## Blocking

- [ ] Replace hero-play-once.mp4 and hero-loop.mp4 with watermark-free versions (Ultra export), re-run npm run track, re-check overlay alignment, then remove the placeholder note.
  - The placeholder note is the `TODO(launch)` block in `lib/heroVideo.ts`; also remove `keepClear` there once the mark is gone.
  - `hero-loop.mp4` is currently a stand-in built from the play-once clip — the supplied seamless loop replaces it.
  - Swap steps: README.md → "Hero video".
