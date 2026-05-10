import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://zflint.com";
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/portfolio`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/rudder`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];
}
