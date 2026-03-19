import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://labo-naturel.fr";
  const now = new Date().toISOString();

  const kitSlugs = [
    "creme-visage",
    "serum-anti-age",
    "baume-levres",
    "shampoing-solide",
    "savon-naturel",
    "huile-corps",
  ];

  return [
    // Homepage
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1 },
    // Kits listing
    { url: `${baseUrl}/kits`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    // Individual kit pages
    ...kitSlugs.map((slug) => ({
      url: `${baseUrl}/kits/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    // Content pages
    { url: `${baseUrl}/recettes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/ingredients`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
