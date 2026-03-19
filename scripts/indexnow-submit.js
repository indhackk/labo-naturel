#!/usr/bin/env node

/**
 * IndexNow Submission Script
 * Submits all URLs to Bing/Yandex for instant indexation
 * Run after each build: node scripts/indexnow-submit.js
 */

const SITE = "https://labo-naturel.fr";
const KEY = "65185684b7d4cdf2e98873504914e783";

// All site URLs — update this list when adding pages
const URLS = [
  "/",
  "/definition-vultifrine",
  "/composition-vultifrine",
  "/extraction-vultifrine",
  "/histoire-decouverte-vultifrine",
  "/certification-vultifrine-bio",
  "/glossaire-vultifrine",
  "/les-10-bienfaits-prouves-vultifrine",
  "/bienfaits-vultifrine-peau",
  "/bienfaits-vultifrine-cheveux",
  "/bienfaits-vultifrine-ongles",
  "/vultifrine-anti-age-rides",
  "/vultifrine-acne-imperfections",
  "/vultifrine-hydratation",
  "/vultifrine-taches-pigmentaires",
  "/etudes-cliniques-vultifrine",
  "/etude-elasticite-cutanee-2024",
  "/resultats-meta-analyse-vultifrine",
  "/vultifrine-vs-retinol",
  "/vultifrine-vs-acide-hyaluronique",
  "/vultifrine-vs-vitamine-c",
  "/vultifrine-vs-bakuchiol",
  "/vultifrine-vs-niacinamide",
  "/top-7-actifs-anti-age-naturels-2026",
  "/comment-utiliser-vultifrine-guide-complet",
  "/dosage-vultifrine-concentration",
  "/routine-soin-vultifrine-matin",
  "/routine-soin-vultifrine-soir",
  "/vultifrine-grossesse-allaitement",
  "/les-5-erreurs-vultifrine",
  "/associer-vultifrine-autres-actifs",
  "/ou-acheter-vultifrine-france",
  "/top-10-serums-vultifrine-2026",
  "/top-5-cremes-vultifrine-2026",
  "/comparatif-marques-vultifrine-purete",
  "/avis-vultifrine-utilisateurs",
  "/avis-dermatologue-vultifrine",
  "/faq-vultifrine",
  // Existing pages
  "/acheter-vultifrine-bio",
  "/meilleure-vultifrine-2026",
  "/bienfaits-regeneration-cellulaire",
  "/application-peau-sensible",
  "/contre-indications-effets-secondaires",
  "/code-promo-vultifrine",
  "/etudes-cliniques-vieillissement",
  "/alternatives-vultifrine",
  "/avis-vultifrine-cheveux",
  "/conservation-vultifrine",
];

async function submitToIndexNow() {
  const fullUrls = URLS.map((path) => `${SITE}${path}`);

  const payload = {
    host: "labo-naturel.fr",
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: fullUrls,
  };

  // Submit to Bing
  console.log(`\n🔵 Submitting ${fullUrls.length} URLs to Bing IndexNow...`);
  try {
    const bingRes = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    console.log(`   Bing response: ${bingRes.status} ${bingRes.statusText}`);
  } catch (err) {
    console.error("   Bing error:", err.message);
  }

  // Submit to Yandex
  console.log(`\n🟡 Submitting ${fullUrls.length} URLs to Yandex IndexNow...`);
  try {
    const yandexRes = await fetch("https://yandex.com/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    console.log(`   Yandex response: ${yandexRes.status} ${yandexRes.statusText}`);
  } catch (err) {
    console.error("   Yandex error:", err.message);
  }

  // Ping Google sitemap
  console.log("\n🟢 Pinging Google sitemap...");
  try {
    const googleRes = await fetch(
      `https://www.google.com/ping?sitemap=${SITE}/sitemap.xml`
    );
    console.log(`   Google response: ${googleRes.status}`);
  } catch (err) {
    console.error("   Google error:", err.message);
  }

  // Ping Bing sitemap
  console.log("\n🔵 Pinging Bing sitemap...");
  try {
    const bingSitemapRes = await fetch(
      `https://www.bing.com/ping?sitemap=${SITE}/sitemap.xml`
    );
    console.log(`   Bing sitemap response: ${bingSitemapRes.status}`);
  } catch (err) {
    console.error("   Bing sitemap error:", err.message);
  }

  console.log(`\n✅ IndexNow submission complete for ${fullUrls.length} URLs`);
}

submitToIndexNow();
