# Launch checklist

## Blocking

- [ ] Replace hero-play-once.mp4 and hero-loop.mp4 with watermark-free versions (Ultra export), re-run npm run track, re-check overlay alignment, then remove the placeholder note.
  - The placeholder note is the `TODO(launch)` block in `lib/heroVideo.ts`; also remove `keepClear` there once the mark is gone.
  - The hero currently uses hero-play-once.mp4 only (plays once, holds the final frame). If a seamless hero-loop.mp4 is supplied, add it in `lib/heroVideo.ts` with `mode="loop"`.
  - Swap steps: README.md → "Hero video".
