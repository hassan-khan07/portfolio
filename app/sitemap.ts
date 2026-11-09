import type { MetadataRoute } from "next";

import { site } from "@/content/site";

// Tells search engines which pages exist. Update `lastModified` when you change a page.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: "2026-11-09", changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/projects/flowboard`, lastModified: "2026-11-09", changeFrequency: "yearly", priority: 0.8 },
  ];
}
