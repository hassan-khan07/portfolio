import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Icon used when someone saves the site to their phone's home screen.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const bold = await readFile(join(process.cwd(), "assets/og/InterTight-Bold.woff"));

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2445d4",
          color: "#ffffff",
          fontFamily: "Inter Tight",
          fontWeight: 700,
          fontSize: 84,
          letterSpacing: "-0.03em",
        }}
      >
        HK
      </div>
    ),
    { ...size, fonts: [{ name: "Inter Tight", data: bold, weight: 700, style: "normal" }] },
  );
}
