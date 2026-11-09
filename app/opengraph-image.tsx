import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// The picture shown when someone shares hassankhan07.dev on LinkedIn, WhatsApp, Slack, etc.
export const alt = "Hassan Khan — Full-Stack Developer. Next.js, TypeScript, Node.js, PostgreSQL.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read once at build time (module scope), so the image is generated statically.
const dir = join(process.cwd(), "assets/og");
const [displayBold, displayMedium, interMedium, mono, photo] = await Promise.all([
  readFile(join(dir, "InterTight-Bold.woff")),
  readFile(join(dir, "InterTight-Medium.woff")),
  readFile(join(dir, "Inter-Medium.woff")),
  readFile(join(dir, "JetBrainsMono-Regular.woff")),
  readFile(join(dir, "hassan.png")),
]);
const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

export default async function OpenGraphImage() {

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#f5f5f3",
          color: "#15171c",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "JetBrains Mono", fontSize: 24, color: "#5a5e66" }}>hassankhan07.dev</div>
          <div
            style={{
              fontFamily: "Inter Tight",
              fontWeight: 700,
              fontSize: 100,
              lineHeight: 1,
              letterSpacing: "-0.035em",
              marginTop: 20,
            }}
          >
            Hassan Khan
          </div>
          <div style={{ fontFamily: "Inter Tight", fontWeight: 500, fontSize: 42, marginTop: 18, letterSpacing: "-0.015em" }}>
            Full-Stack Developer
          </div>
          <div style={{ fontFamily: "JetBrains Mono", fontSize: 24, color: "#5a5e66", marginTop: 22 }}>
            Next.js · TypeScript · Node.js · PostgreSQL
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 28,
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid #e2e2de",
              background: "#ffffff",
              fontSize: 22,
              color: "#3f434a",
              alignSelf: "flex-start",
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: 999, background: "#1f8a4c", marginRight: 12 }} />
            Open to full-time roles
          </div>
        </div>
        <div
          style={{
            width: 360,
            height: 440,
            borderRadius: 32,
            overflow: "hidden",
            background: "#e7e7e2",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={photoSrc} width={440} height={440} alt="" style={{ marginTop: 0 }} />
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 12, background: "#2445d4" }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter Tight", data: displayBold, weight: 700, style: "normal" },
        { name: "Inter Tight", data: displayMedium, weight: 500, style: "normal" },
        { name: "Inter", data: interMedium, weight: 500, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
