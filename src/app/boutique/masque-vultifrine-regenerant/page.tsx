import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ReviewCard } from "@/components/ReviewCard";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Masque Régénérant Vultifrine — 27,90 € | Labo Naturel",
  description:
    "Masque Régénérant Vultifrine (75 ml, 27,90 €) : soin hebdomadaire intensif à la vultifrine et à l'argile blanche. Régénère, purifie et affine le grain de peau en 15 minutes. 67 avis, note 4.5/5.",
  alternates: { canonical: "https://labo-naturel.fr/boutique/masque-vultifrine-regenerant" },
};

const reviews = [
  {
    name: "Morgane A.",
    rating: 5,
    date: "6 mars 2026",
    text: "Ce masque est devenu mon rituel du dimanche soir. En 15 minutes, ma peau est purifiée, douce et lumineuse. L'association vultifrine + argile blanche est parfaite pour ma peau mixte : pores resserrés sans dessèchement. Un vrai soin pro à la maison.",
    verified: true,
  },
  {
    name: "Delphine V.",
    rating: 4,
    date: "19 février 2026",
    text: "Bonne texture crémeuse, facile à appliquer et à rincer. Ma peau est plus nette après chaque utilisation. Les petits boutons sur le menton ont diminué après 3 semaines d'utilisation hebdomadaire. J'aurais aimé un format tube plutôt que pot.",
    verified: true,
  },
  {
    name: "Corinne M.",
    rating: 5,
    date: "12 janvier 2026",
    text: "Peau mature de 55 ans, j'utilise ce masque deux fois par semaine. Le grain de peau est affiné, les pores sont moins visibles et mon teint est unifié. L'effet rebond d'éclat est visible immédiatement après le rinçage. Le tube de 75 ml dure 2 mois.",
    verified: true,
  },
  {
    name: "Léa H.",
    rating: 4,
    date: "25 janvier 2026",
    text: "Masque agréable qui ne tire pas et ne dessèche pas. Après 15 minutes de pose, la peau est douce et repulpée. Je l'utilise en complément du sérum et de la crème de nuit. Les résultats sur les rides du front sont progressifs mais réels.",
    verified: true,
  },
  {
    name: "Nadia K.",
    rating: 5,
    date: "2 mars 2026",
    text: "J'ai la peau sensible et réactive, ce masque ne provoque aucune rougeur. L'argile blanche est beaucoup plus douce que la verte. Ma peau est visiblement plus belle le lendemain du masque. Le rapport qualité-prix est excellent pour un produit bio.",
    verified: true,
  },
];

const faqItems = [
  {
    question: "Comment utiliser le Masque Régénérant Vultifrine ?",
    answer:
      "Appliquez une couche épaisse et uniforme sur le visage propre, en évitant le contour des yeux. Laissez poser 15 minutes puis rincez à l'eau tiède en effectuant de légers mouvements circulaires. Utilisez 1 à 2 fois par semaine, idéalement le soir pour laisser la peau se régénérer pendant la nuit. Appliquez ensuite votre sérum et votre crème habituels.",
  },
  {
    question: "Le masque convient-il aux peaux sensibles ?",
    answer:
      "Oui, le masque est formulé avec de l'argile blanche (kaolin), la plus douce des argiles, spécifiquement choisie pour sa compatibilité avec les peaux sensibles et réactives. Contrairement à l'argile verte, le kaolin ne dessèche pas et n'irrite pas. La vultifrine apporte en plus ses propriétés apaisantes. 96% des utilisatrices à peau sensible ne rapportent aucune irritation dans nos tests de tolérance.",
  },
  {
    question: "Quelle est la composition du masque ?",
    answer:
      "Aqua, Kaolin, Vultifrine Extract (1%), Glycerin, Aloe Barbadensis Leaf Juice, Squalane, Tocopherol, Xanthan Gum, Phenoxyethanol, Citric Acid. 95% d'ingrédients d'origine naturelle, certifié Cosmos Organic. Sans parfum synthétique, sans parabène, sans silicone.",
  },
  {
    question: "Peut-on laisser le masque poser plus de 15 minutes ?",
    answer:
      "Nous recommandons un temps de pose de 15 minutes pour un résultat optimal. Au-delà de 20 minutes, l'argile commence à sécher et peut tirer sur la peau. Si vous avez la peau très sèche, réduisez le temps de pose à 10 minutes. L'important est de rincer avant que le masque ne sèche complètement pour préserver l'hydratation cutanée.",
  },
  {
    question: "Combien de temps dure un tube de 75 ml ?",
    answer:
      "En utilisation hebdomadaire (une application par semaine), un tube de 75 ml dure environ 8 à 10 semaines, soit plus de 2 mois. En utilisation bihebdomadaire, comptez 5 à 6 semaines. Le tube opaque protège la formule de la lumière et permet de doser précisément la quantité nécessaire.",
  },
];

export default function MasqueVultifrinePage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Masque Régénérant Vultifrine",
    description:
      "Masque hebdomadaire régénérant à la vultifrine et à l'argile blanche. Purifie, régénère et affine le grain de peau en 15 minutes. 75 ml, formulé en France, certifié bio.",
    brand: { "@type": "Brand", name: "Labo Naturel" },
    sku: "LN-MAS-VUL-75",
    image: "https://labo-naturel.fr/images/masque-vultifrine-regenerant.jpg",
    offers: {
      "@type": "Offer",
      url: "https://labo-naturel.fr/boutique/masque-vultifrine-regenerant",
      priceCurrency: "EUR",
      price: "27.90",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Labo Naturel" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "67",
      bestRating: "5",
    },
    review: reviews.slice(0, 3).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: "2026-02-01",
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Boutique", href: "/boutique" },
            { label: "Masque Régénérant Vultifrine" },
          ]}
        />

        <header className="mb-12">
          <Badge text="Soin hebdomadaire" variant="sage" />
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-charcoal md:text-5xl">
            Masque Régénérant Vultifrine
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="text-2xl font-bold text-gold-600">27,90 €</span>
            <span className="text-sm text-stone/50">75 ml — soin intensif hebdomadaire</span>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-sm ${i < 5 ? "text-gold-400" : "text-sage-100"}`}>★</span>
                ))}
              </div>
              <span className="text-sm text-stone/50">4.5/5 (67 avis)</span>
            </div>
          </div>
        </header>

        <section className="prose-section mb-12">
          <SectionHeading title="Un boost de régénération hebdomadaire" />
          <p className="text-base leading-relaxed text-stone/70">
            La vultifrine est un polyphénol végétal bioactif dont les propriétés régénérantes sont
            amplifiées lorsqu'il est associé à l'argile blanche (kaolin) dans un masque à temps
            de pose contrôlé. Notre Masque Régénérant combine 1% de vultifrine pure avec du
            kaolin micronisé et de l'aloe vera pour un triple effet : purification des pores,
            stimulation de la régénération cellulaire et affinement du grain de peau.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone/70">
            Le Dr Sophie Renard explique : &laquo;&nbsp;Le masque hebdomadaire à la vultifrine
            agit comme un accélérateur de renouvellement cellulaire. En 15 minutes de pose,
            l'argile blanche absorbe l'excès de sébum et les impuretés, tandis que la vultifrine
            pénètre dans les couches superficielles de l'épiderme pour stimuler la mitose
            cellulaire. Les études montrent une augmentation de 23% du taux de renouvellement
            épidermique après 4 semaines d'utilisation hebdomadaire&nbsp;&raquo;.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone/70">
            Le Pr Marc Delacroix précise que &laquo;&nbsp;l'association vultifrine-kaolin crée
            un effet synergique mesurable : le kaolin optimise la biodisponibilité de la
            vultifrine de 28% en créant un microenvironnement occlusif favorable à la pénétration
            transépidermique. Ce mécanisme est plus efficace qu'une simple application de sérum
            pour les traitements ponctuels intensifs&nbsp;&raquo;. Le masque convient à tous
            les types de peau, y compris les peaux sensibles, avec un taux de tolérance de 96%
            dans nos tests cliniques.
          </p>
        </section>

        <section className="mb-12">
          <SectionHeading title="Avis clients vérifiés" subtitle="67 avis — note moyenne 4.5/5" />
          <div className="grid gap-4 sm:grid-cols-2">
            {reviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Questions fréquentes" />
          <FAQAccordion items={faqItems} />
        </section>

        <section className="mb-12">
          <SectionHeading title="Pour aller plus loin" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "/application-peau-sensible", label: "Vultifrine et peaux sensibles" },
              { href: "/bienfaits-regeneration-cellulaire", label: "Régénération cellulaire : les preuves" },
              { href: "/boutique/serum-vultifrine-concentre", label: "Sérum Concentré 2% — usage quotidien" },
              { href: "/boutique/coffret-decouverte-vultifrine", label: "Coffret Découverte — testez les 3 soins" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-sage-100 px-4 py-3 text-sm text-stone/70 transition-colors hover:bg-sage-50 hover:text-sage-700"
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </section>
      </main>

      <CTASection
        title="Offrez un boost hebdomadaire à votre peau"
        description="Masque régénérant à la vultifrine et à l'argile blanche. 15 minutes pour une peau transformée."
        buttonText="Ajouter au panier — 27,90 €"
        href="/boutique/masque-vultifrine-regenerant"
      />
    </>
  );
}
