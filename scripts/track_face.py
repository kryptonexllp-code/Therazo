#!/usr/bin/env python3
"""Offline face tracking for the customer-portal hero video.

For each mp4 given, writes public/data/<video-name>.landmarks.json with
per-frame face anchors that components/HeroScanner.tsx uses to lock the
scanner overlay to the face.

    pip install mediapipe opencv-python
    npm run track            # tracks the hero clips
    python3 scripts/track_face.py path/to/clip.mp4 [...]

Coordinates are normalised 0-1 against the video frame. "_r" / "_l" mean
screen right / screen left (as the viewer sees the frame), not the subject's
anatomical side. Yaw is in degrees; positive means the face is turned towards
screen right.
"""

from __future__ import annotations

import json
import math
import sys
import urllib.request
from pathlib import Path

import cv2
import mediapipe as mp
import numpy as np
from mediapipe.tasks.python import BaseOptions
from mediapipe.tasks.python import vision

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "data"
MODEL_PATH = Path(__file__).resolve().parent / "models" / "face_landmarker.task"
MODEL_URL = (
    "https://storage.googleapis.com/mediapipe-models/face_landmarker/"
    "face_landmarker/float16/1/face_landmarker.task"
)
DEFAULT_VIDEOS = [
    ROOT / "public" / "videos" / "hero-play-once.mp4",
    ROOT / "public" / "videos" / "hero-loop.mp4",
]

# MediaPipe Face Mesh indices (478-point model, iris points included).
# Several points are averaged per anchor to steady the estimate.
ANCHORS: dict[str, list[int]] = {
    "forehead": [151, 10, 108, 337],
    "temple_r": [383, 368],
    "cheek_r": [425, 411, 427],
    "cheek_l": [205, 187, 207],
    "eye_r": [473],  # iris centre, screen-right eye
    "eye_l": [468],  # iris centre, screen-left eye
    "nose": [1],
    "jaw_r": [397, 365],
    "chin": [152],
}

# Which side of the face an anchor sits on. At deep three-quarter yaw the side
# turned away from camera is partly occluded and its landmarks drift, so those
# anchors are dropped and re-interpolated from neighbouring frames.
ANCHOR_SIDE = {"temple_r": 1, "cheek_r": 1, "eye_r": 1, "jaw_r": 1, "cheek_l": -1, "eye_l": -1}
DEEP_YAW_DEG = 32.0
SMOOTH_WINDOW = 5


def ensure_model() -> Path:
    if not MODEL_PATH.exists():
        MODEL_PATH.parent.mkdir(parents=True, exist_ok=True)
        print(f"Downloading Face Landmarker model to {MODEL_PATH}")
        urllib.request.urlretrieve(MODEL_URL, MODEL_PATH)
    return MODEL_PATH


def yaw_from_matrix(matrix: np.ndarray) -> float:
    """Yaw in degrees from MediaPipe's facial transformation matrix."""
    r = np.asarray(matrix)[:3, :3]
    # Rotation about the vertical axis; the model faces +z towards camera.
    return math.degrees(math.atan2(r[0, 2], r[2, 2]))


def track(video_path: Path) -> dict:
    cap = cv2.VideoCapture(str(video_path))
    if not cap.isOpened():
        raise SystemExit(f"Cannot open {video_path}")
    fps = cap.get(cv2.CAP_PROP_FPS) or 30.0
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

    options = vision.FaceLandmarkerOptions(
        base_options=BaseOptions(model_asset_path=str(ensure_model())),
        running_mode=vision.RunningMode.VIDEO,
        num_faces=1,
        output_facial_transformation_matrixes=True,
    )

    raw: list[dict | None] = []
    with vision.FaceLandmarker.create_from_options(options) as landmarker:
        index = 0
        while True:
            ok, frame = cap.read()
            if not ok:
                break
            rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            image = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)
            result = landmarker.detect_for_video(image, int(round(index * 1000 / fps)))
            index += 1
            if not result.face_landmarks:
                raw.append(None)
                continue
            pts = np.array([[p.x, p.y] for p in result.face_landmarks[0]])
            anchors = {name: pts[ids].mean(axis=0) for name, ids in ANCHORS.items()}
            box = np.concatenate([pts.min(axis=0), pts.max(axis=0)])
            yaw = yaw_from_matrix(result.facial_transformation_matrixes[0]) if result.facial_transformation_matrixes else 0.0
            raw.append({"anchors": anchors, "box": box, "yaw": yaw})
    cap.release()

    if not any(raw):
        raise SystemExit(f"No face found in {video_path}")
    n = len(raw)

    # Arrays with NaN where the face was not found.
    yaw = np.array([f["yaw"] if f else np.nan for f in raw])
    box = np.array([f["box"] if f else [np.nan] * 4 for f in raw])
    anchors = {
        name: np.array([f["anchors"][name] if f else [np.nan] * 2 for f in raw]) for name in ANCHORS
    }

    # Positive yaw = face turned towards screen right, so the screen-right side
    # of the face turns away from camera.
    for name, side in ANCHOR_SIDE.items():
        away = np.nan_to_num(yaw) * side > DEEP_YAW_DEG
        anchors[name][away] = np.nan

    def fill(a: np.ndarray) -> np.ndarray:
        """Linear interpolation across gaps; hold the edge value past either end."""
        a = a.copy()
        t = np.arange(n)
        cols = a if a.ndim > 1 else a[:, None]
        for c in range(cols.shape[1]):
            good = ~np.isnan(cols[:, c])
            if good.any():
                cols[:, c] = np.interp(t, t[good], cols[good, c])
        return cols if a.ndim > 1 else cols[:, 0]

    def smooth(a: np.ndarray) -> np.ndarray:
        """Centred moving average; the window shrinks at the clip edges."""
        half = SMOOTH_WINDOW // 2
        out = np.empty_like(a)
        for i in range(n):
            out[i] = a[max(0, i - half): i + half + 1].mean(axis=0)
        return out

    visible = [f is not None for f in raw]
    yaw = smooth(fill(yaw))
    box = smooth(fill(box))
    anchors = {name: smooth(fill(a)) for name, a in anchors.items()}

    def r(v) -> list[float]:
        return [round(float(x), 4) for x in v]

    frames = [
        {
            "t": round(i / fps, 3),
            "anchors": {name: r(a[i]) for name, a in anchors.items()},
            "faceBox": r(box[i]),
            "yaw": round(float(yaw[i]), 1),
            "visible": visible[i],
        }
        for i in range(n)
    ]
    return {"fps": round(fps, 3), "width": width, "height": height, "frames": frames}


def main(argv: list[str]) -> None:
    videos = [Path(a) for a in argv] or DEFAULT_VIDEOS
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for video in videos:
        if not video.exists():
            print(f"Skipping {video} (not found)")
            continue
        data = track(video)
        out = OUT_DIR / f"{video.stem}.landmarks.json"
        out.write_text(json.dumps(data, separators=(",", ":")) + "\n")
        found = sum(f["visible"] for f in data["frames"])
        print(f"{video.name}: {len(data['frames'])} frames, face in {found} -> {out.relative_to(ROOT)}")


if __name__ == "__main__":
    main(sys.argv[1:])
