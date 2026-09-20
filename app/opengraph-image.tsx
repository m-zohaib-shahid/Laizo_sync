import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(16,185,129,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: "800",
            color: "#F5F5F7",
            letterSpacing: "-2px",
            marginBottom: "24px",
          }}
        >
          Laizo<span style={{ color: "#10B981" }}>Sync</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#A1A1AA",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Shopify · Meta Ads · Google Ads · Next.js · Mobile Apps
        </div>

        {/* Border bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            fontSize: "18px",
            color: "#10B981",
            fontWeight: "600",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          laizosync.com
        </div>
      </div>
    ),
    { ...size }
  );
}
