import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Dock } from "@/components/dock";
import { ResumeDialogProvider } from "@/components/resume-dialog";
import { site } from "@/content/site";
import { inter, interTight, jetbrainsMono } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Hassan Khan",
    "Full-Stack Developer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Rawalpindi",
    "Islamabad",
    "Pakistan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f3" },
    { media: "(prefers-color-scheme: dark)", color: "#111317" },
  ],
};

// Runs before the first paint: uses the saved choice, otherwise the device setting.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh bg-page font-sans text-base leading-relaxed text-ink antialiased">
        <a
          href="#content"
          className="sr-only rounded-lg bg-accent px-4 py-2 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
        >
          Skip to content
        </a>
        <ResumeDialogProvider>
          {children}
          <Dock />
        </ResumeDialogProvider>
        <Analytics />
      </body>
    </html>
  );
}
