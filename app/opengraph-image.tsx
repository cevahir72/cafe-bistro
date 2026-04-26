import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top left, rgba(212,175,55,0.32), transparent 32%), linear-gradient(135deg, #171311 0%, #0b0a09 55%, #1c1713 100%)",
          padding: "72px 80px",
          color: "#f5f5f5",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 28, letterSpacing: 10, textTransform: "uppercase", color: "#d4af37" }}>
            Botanica Garden
          </div>
          <div
            style={{
              border: "1px solid rgba(212,175,55,0.24)",
              borderRadius: 999,
              padding: "12px 22px",
              fontSize: 22,
              color: "#f3df96",
            }}
          >
            London W1 2BN
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 900 }}>
          <div style={{ fontSize: 86, lineHeight: 1.02, fontWeight: 700 }}>Where Nature Meets Culinary Craft</div>
          <div style={{ fontSize: 34, lineHeight: 1.35, color: "#d5ccbf" }}>
            Premium cafe, restaurant and bakery experience with terrace dining, botanical cocktails, and fast Google Maps directions.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 28, color: "#d5ccbf" }}>
            <div>128 Greenhouse Lane, London</div>
            <div>Stone oven, terrace, bakery, private reservations</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "linear-gradient(135deg, #d4af37, #8d5c25)",
              color: "#1f1305",
              padding: "16px 28px",
              fontSize: 24,
              textTransform: "uppercase",
              letterSpacing: 3,
            }}
          >
            Google Maps Ready
          </div>
        </div>
      </div>
    ),
    size
  );
}