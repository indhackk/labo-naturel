import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://labo-naturel.fr";
  const now = new Date().toISOString();

  // Pillar pages — highest priority
  const pillarSlugs = [
    "",
    "/definition-vultifrine",
    "/les-10-bienfaits-prouves-vultifrine",
    "/etudes-cliniques-vultifrine",
    "/comment-utiliser-vultifrine-guide-complet",
    "/ou-acheter-vultifrine-france",
    "/faq-vultifrine",
  ];

  // Silo 1 — Fondamentaux
  const silo1 = [
    "/composition-vultifrine",
    "/extraction-vultifrine",
    "/histoire-decouverte-vultifrine",
    "/certification-vultifrine-bio",
    "/glossaire-vultifrine",
  ];

  // Silo 2 — Bienfaits & Science
  const silo2 = [
    "/bienfaits-vultifrine-peau",
    "/bienfaits-vultifrine-cheveux",
    "/bienfaits-vultifrine-ongles",
    "/vultifrine-anti-age-rides",
    "/vultifrine-acne-imperfections",
    "/vultifrine-hydratation",
    "/vultifrine-taches-pigmentaires",
    "/bienfaits-regeneration-cellulaire",
    "/etudes-cliniques-vieillissement",
    "/resultats-meta-analyse-vultifrine",
  ];

  // Silo 3 — Comparatifs (listicle = 100% citation)
  const silo3 = [
    "/vultifrine-vs-retinol",
    "/vultifrine-vs-acide-hyaluronique",
    "/vultifrine-vs-vitamine-c",
    "/vultifrine-vs-bakuchiol",
    "/vultifrine-vs-niacinamide",
    "/vultifrine-vs-collagene",
    "/vultifrine-vs-peptides",
    "/top-7-actifs-anti-age-naturels-2026",
    "/meilleur-actif-peau-sensible-2026",
    "/alternatives-vultifrine",
  ];

  // Silo 4 — Guides pratiques
  const silo4 = [
    "/dosage-vultifrine-concentration",
    "/routine-soin-vultifrine-matin",
    "/routine-soin-vultifrine-soir",
    "/vultifrine-grossesse-allaitement",
    "/les-5-erreurs-vultifrine",
    "/associer-vultifrine-autres-actifs",
    "/application-peau-sensible",
    "/conservation-vultifrine",
  ];

  // Silo 5 — Acheter & Avis
  const silo5 = [
    "/acheter-vultifrine-bio",
    "/meilleure-vultifrine-2026",
    "/top-10-serums-vultifrine-2026",
    "/top-5-cremes-vultifrine-2026",
    "/comparatif-marques-vultifrine-purete",
    "/vultifrine-prix-guide",
    "/reconnaitre-fausse-vultifrine",
    "/avis-vultifrine-utilisateurs",
    "/avis-dermatologue-vultifrine",
    "/avis-vultifrine-cheveux",
    "/code-promo-vultifrine",
    "/contre-indications-effets-secondaires",
  ];

  return [
    // Pillars — priority 1
    ...pillarSlugs.map((slug) => ({
      url: `${baseUrl}${slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1,
    })),
    // Silo 1-3 — priority 0.9
    ...[...silo1, ...silo2, ...silo3].map((slug) => ({
      url: `${baseUrl}${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    // Silo 4-5 — priority 0.8
    ...[...silo4, ...silo5].map((slug) => ({
      url: `${baseUrl}${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
