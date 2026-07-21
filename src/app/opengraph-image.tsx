import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "88px",
          backgroundColor: "#070b12",
          backgroundImage:
            "radial-gradient(ellipse 60% 60% at 85% 10%, rgba(43,107,255,0.35) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(43,107,255,0.18) 0%, transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "linear-gradient(180deg, #4d8fff, #1a4fd9)",
            }}
          />
          {site.name}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            maxWidth: 920,
          }}
        >
          Dijitalde büyüyen markalar için strateji, tasarım ve performans
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 26,
            color: "#b8c0cc",
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
