import localFont from "next/font/local";

// Fonts are bundled with the site (no request to Google), so they load fast
// and the build works anywhere.
export const inter = localFont({
  src: "../assets/fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const interTight = localFont({
  src: "../assets/fonts/InterTight-Variable.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});

export const jetbrainsMono = localFont({
  src: "../assets/fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains",
  weight: "100 800",
  display: "swap",
});
