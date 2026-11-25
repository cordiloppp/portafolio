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
          background: "#F7F4EE",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#B4441C",
            fontSize: 28,
          }}
        >
          Disponible para un puesto junior
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "#1F1B16", fontSize: 76, fontWeight: 600 }}>
            {siteConfig.shortName}
          </div>
          <div style={{ color: "#5E554A", fontSize: 36 }}>
            Software para los negocios de Tijuana
          </div>
        </div>
        <div style={{ color: "#5E554A", fontSize: 24 }}>
          {`React · Python · Go · PostgreSQL · ${siteConfig.location}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
