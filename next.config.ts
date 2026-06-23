import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the tracing root to this project (a parent lockfile exists on disk).
  outputFileTracingRoot: import.meta.dirname,
  images: {
    // AVIF/WebP are negotiated automatically; declare formats explicitly.
    formats: ["image/avif", "image/webp"],
    // Whitelist remote image hosts here when real screenshots are hosted off-domain.
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
