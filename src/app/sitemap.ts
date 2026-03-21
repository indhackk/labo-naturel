import type { MetadataRoute } from "next";
import { articles, categories } from "@/data/articles";

const vultifrinPages = [
  "bienfaits-vultifrine",
  "vultifrine-vs-retinol",
  "vultifrine-vs-bakuchiol",
  "acheter-vultifrine",
  "avis-vultifrine",
  "vultifrine-rides-anti-age",
  "serum-vultifrine",
  "effets-secondaires-vultifrine",
  "vultifrine-peau-grasse",
  "vultifrine-peau-mature",
  "vultifrine-peau-mixte",
  "vultifrine-peau-seche",
  "vultifrine-peau-sensible",
  "quiz-vultifrine",
  "calculateur-dosage-vultifrine",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://labo-naturel.fr";

  return [
    { url: baseUrl, lastModified: new Date().toISOString(), changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/categories`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date().toISOString(), changeFrequency: "monthly", priority: 0.5 },
    ...articles.map((a) => ({
      url: `${baseUrl}/blog/${a.slug}`,
      lastModified: a.date,
      changeFrequency: "monthly" as const,
      priority: a.featured ? 0.9 : 0.8,
    })),
    ...categories.map((c) => ({
      url: `${baseUrl}/categories/${c.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...vultifrinPages.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
  ];
}
