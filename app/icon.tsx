import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Browser tab icon: "HK" monogram.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const bold = await readFile(join(process.cwd(), "assets/og/InterTight-Bold.woff"));

export default async function Icon() {
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
          borderRadius: 8,
          fontFamily: "Inter Tight",
          fontWeight: 700,
          fontSize: 15,
          letterSpacing: "-0.02em",
        }}
      >
        HK
      </div>
    ),
    { ...size, fonts: [{ name: "Inter Tight", data: bold, weight: 700, style: "normal" }] },
  );
}
