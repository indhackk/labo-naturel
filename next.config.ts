import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisations GEO
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
