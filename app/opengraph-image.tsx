import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.shortName} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated at build time — a professional social card with no manual design.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B0D10",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#3FE0A6",
            fontSize: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Software Developer · Junior / Trainee
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "#E6E8EB", fontSize: 76, fontWeight: 700 }}>
            {siteConfig.shortName}
          </div>
          <div style={{ color: "#9097A1", fontSize: 36 }}>
            {`${siteConfig.role}.`}
          </div>
        </div>
        <div style={{ color: "#9097A1", fontSize: 24 }}>
          {`Next.js · React · TypeScript · ${siteConfig.location}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
