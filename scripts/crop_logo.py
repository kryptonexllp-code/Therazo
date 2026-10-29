#!/usr/bin/env python3
"""Derive the web wordmark files from the official square logo PNGs.

The official files (public/images/logos/logo-primary.png, logo-reversed.png)
are 3069 x 3069 squares on an opaque background, with the THERAZO wordmark
above the SCIENCE. DEFINED. tagline. For the site we need the wordmark alone,
tightly cropped, on a transparent background, so it can be sized by height
and paired with a live-text tagline.

This crops the wordmark's exact ink bounds and removes the background colour
(colour-to-alpha). Letterforms, colour and the "O" gap are unchanged.

    python3 scripts/crop_logo.py   # needs opencv-python and numpy

Swap in the SVGs from the trademark package when available; BrandLogo then
prefers them (see components/BrandLogo.tsx).
"""

from pathlib import Path

import cv2
import numpy as np

LOGOS = Path(__file__).resolve().parent.parent / "public" / "images" / "logos"
NAVY = np.array([31, 58, 95], dtype=float)  # RGB, #1F3A5F
WHITE = np.array([255, 255, 255], dtype=float)
PAD = 4  # px of transparent margin so anti-aliased edges are kept

# (source file, background RGB, ink RGB, output file)
JOBS = [
    ("logo-primary.png", WHITE, NAVY, "therazo-wordmark-navy.png"),
    ("logo-reversed.png", NAVY, WHITE, "therazo-wordmark-white.png"),
]


def wordmark_bounds(rgb: np.ndarray, bg: np.ndarray) -> tuple[int, int, int, int]:
    """Bounds of the first (top) band of ink: the wordmark, not the tagline."""
    ink = np.abs(rgb - bg).sum(axis=2) > 30
    rows = np.where(ink.any(axis=1))[0]
    top = bottom = rows[0]
    for r in rows[1:]:
        if r != bottom + 1:
            break  # gap before the tagline
        bottom = r
    cols = np.where(ink[top : bottom + 1].any(axis=0))[0]
    return top, bottom, cols[0], cols[-1]


for src, bg, ink, out in JOBS:
    bgra = cv2.imread(str(LOGOS / src), cv2.IMREAD_UNCHANGED)
    rgb = cv2.cvtColor(bgra[:, :, :3], cv2.COLOR_BGR2RGB).astype(float)
    top, bottom, left, right = wordmark_bounds(rgb, bg)
    crop = rgb[top - PAD : bottom + PAD + 1, left - PAD : right + PAD + 1]
    # Colour-to-alpha: how far each pixel sits from the background towards the ink.
    alpha = np.clip(((crop - bg) / (ink - bg)).max(axis=2), 0, 1)
    rgba = np.dstack([np.broadcast_to(ink, crop.shape), alpha * 255]).round().astype(np.uint8)
    cv2.imwrite(str(LOGOS / out), cv2.cvtColor(rgba, cv2.COLOR_RGBA2BGRA))
    h, w = rgba.shape[:2]
    print(f"{out}: {w} x {h} (wordmark rows {top}-{bottom}, cols {left}-{right})")
