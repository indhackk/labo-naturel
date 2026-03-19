import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recettes Cosmétiques Maison Gratuites",
  description:
    "Découvrez nos recettes gratuites de cosmétiques naturels faits maison : masques, gommages, toniques et plus. Ingrédients simples, résultats professionnels.",
  alternates: { canonical: "https://labo-naturel.fr/recettes" },
};

const recettes = [
  {
    emoji: "🍯",
    title: "Masque miel-avoine",
    difficulty: "Débutant",
    duration: "5 min",
    ingredients: [
      "2 c. à soupe de flocons d'avoine mixés",
      "1 c. à soupe de miel bio",
      "1 c. à soupe de yaourt nature",
    ],
    instructions:
      "Mélangez tous les ingrédients jusqu'à obtenir une pâte homogène. Appliquez sur le visage en évitant le contour des yeux. Laissez poser 15 minutes puis rincez à l'eau tiède. Ce masque apaise, hydrate et exfolie en douceur.",
  },
  {
    emoji: "🌹",
    title: "Tonique rose maison",
    difficulty: "Débutant",
    duration: "10 min",
    ingredients: [
      "100 ml d'eau de rose (ou infusion de pétales)",
      "1 c. à café de vinaigre de cidre bio",
      "3 gouttes de glycérine végétale",
    ],
    instructions:
      "Mélangez l'eau de rose, le vinaigre de cidre et la glycérine dans un flacon spray propre. Agitez bien. Vaporisez sur le visage après le nettoyage, matin et soir. Ce tonique rééquilibre le pH de la peau et resserre les pores.",
  },
  {
    emoji: "☕",
    title: "Gommage café-coco",
    difficulty: "Débutant",
    duration: "5 min",
    ingredients: [
      "3 c. à soupe de marc de café",
      "2 c. à soupe d'huile de coco fondue",
      "1 c. à soupe de sucre roux",
      "5 gouttes d'huile essentielle de menthe (optionnel)",
    ],
    instructions:
      "Mélangez le marc de café, le sucre et l'huile de coco. Ajoutez l'huile essentielle si désiré. Sous la douche, massez le corps en mouvements circulaires. Rincez abondamment. La caféine stimule la microcirculation et le sucre élimine les cellules mortes.",
  },
  {
    emoji: "💧",
    title: "Brume hydratante aloe",
    difficulty: "Débutant",
    duration: "5 min",
    ingredients: [
      "50 ml d'eau minérale ou eau florale",
      "30 ml de gel d'aloe vera pur",
      "5 gouttes d'huile de jojoba",
    ],
    instructions:
      "Versez tous les ingrédients dans un flacon spray. Agitez vigoureusement avant chaque utilisation. Vaporisez sur le visage tout au long de la journée pour un coup de frais hydratant. Conservez au réfrigérateur pour un effet encore plus rafraîchissant.",
  },
  {
    emoji: "🌿",
    title: "Masque argile cheveux",
    difficulty: "Intermédiaire",
    duration: "10 min",
    ingredients: [
      "3 c. à soupe d'argile verte ou blanche",
      "Eau minérale (pour la consistance)",
      "1 c. à soupe de vinaigre de cidre",
      "2 c. à soupe d'huile d'olive",
    ],
    instructions:
      "Dans un bol non métallique, délayez l'argile avec l'eau jusqu'à obtenir une pâte lisse. Ajoutez le vinaigre de cidre et l'huile d'olive. Appliquez sur cheveux humides, des racines aux pointes. Laissez poser 20 minutes sous une serviette tiède, puis rincez et faites votre shampoing habituel.",
  },
  {
    emoji: "🍦",
    title: "Beurre corporel vanille",
    difficulty: "Intermédiaire",
    duration: "20 min",
    ingredients: [
      "50 g de beurre de karité brut",
      "20 ml d'huile d'amande douce",
      "10 gouttes d'extrait de vanille",
    ],
    instructions:
      "Faites fondre le beurre de karité au bain-marie à feu très doux. Retirez du feu et incorporez l'huile d'amande douce et l'extrait de vanille. Placez au réfrigérateur 30 minutes puis fouettez au batteur électrique jusqu'à obtenir une texture crémeuse et aérée. Transvasez dans un pot propre.",
  },
];

export default function RecettesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-linen">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="section-label">Inspiration</span>
            <h1 className="text-4xl md:text-5xl font-serif leading-[1.1] mb-6">
              Recettes cosmétiques
              <span className="text-terracotta"> gratuites</span>
            </h1>
            <p className="text-lg text-stone leading-relaxed max-w-xl">
              Envie de tester la cosmétique maison sans investir&nbsp;? Voici 6 recettes simples à réaliser avec des ingrédients du quotidien. Aucun matériel spécial requis.
            </p>
          </div>
        </div>
      </section>

      {/* ── Recipe grid ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recettes.map((recette) => (
            <article key={recette.title} className="card p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl" aria-hidden="true">
                  {recette.emoji}
                </span>
                <span className="badge-terracotta">{recette.difficulty}</span>
              </div>
              <h2 className="text-xl font-serif mb-1">{recette.title}</h2>
              <p className="text-sm text-stone-light mb-4">Temps : {recette.duration}</p>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-2">
                Ingrédients
              </h3>
              <ul className="text-sm text-stone space-y-1 mb-4">
                {recette.ingredients.map((ing) => (
                  <li key={ing} className="flex items-start gap-2">
                    <span className="text-terracotta mt-0.5">•</span>
                    {ing}
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal mb-2">
                Préparation
              </h3>
              <p className="text-sm text-stone leading-relaxed flex-1">
                {recette.instructions}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-forest text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Envie de résultats encore meilleurs&nbsp;?
          </h2>
          <p className="text-forest-pale text-lg mb-8 max-w-xl mx-auto">
            Nos kits contiennent des ingrédients de qualité professionnelle, dosés au gramme près, avec des recettes testées en laboratoire. Le résultat est incomparable.
          </p>
          <Link href="/kits" className="btn-primary bg-white text-forest hover:bg-cream">
            Découvrir nos kits complets
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
