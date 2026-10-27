import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Photos are served as WebP by the image optimiser.
    formats: ["image/webp"],
  },
};

export default nextConfig;
