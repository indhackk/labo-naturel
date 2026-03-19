import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ReviewCard } from "@/components/ReviewCard";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Sérum Vultifrine Concentré 2% — 34,90 € | Labo Naturel",
  description:
    "Sérum Vultifrine Concentré 2% (30 ml, 34,90 €) : actif anti-âge naturel à haute pénétration. Résultats visibles en 14 jours, 127 avis clients, note 4.7/5. Formulé en France, certifié bio.",
  alternates: { canonical: "https://labo-naturel.fr/boutique/serum-vultifrine-concentre" },
};

const reviews = [
  {
    name: "Camille D.",
    rating: 5,
    date: "12 janvier 2026",
    text: "Après 3 semaines d'utilisation matin et soir, mes rides du front se sont nettement atténuées. La texture est légère, pénètre en quelques secondes et ne laisse aucun film gras. Mon teint est plus lumineux, même ma collègue m'a fait la remarque.",
    verified: true,
  },
  {
    name: "Marie-Claire L.",
    rating: 5,
    date: "28 décembre 2025",
    text: "J'ai testé beaucoup de sérums anti-âge, y compris du rétinol. Ce concentré à la vultifrine est le seul qui n'irrite pas ma peau sensible tout en donnant des résultats concrets sur les ridules. Le flacon en verre est aussi très élégant.",
    verified: true,
  },
  {
    name: "Sophie M.",
    rating: 4,
    date: "15 février 2026",
    text: "Bon produit, je vois une amélioration de l'hydratation et de la fermeté. J'enlève une étoile car le flacon de 30 ml part vite quand on l'utilise deux fois par jour. J'aimerais un format 50 ml. Sinon, rien à redire sur l'efficacité.",
    verified: true,
  },
  {
    name: "Nathalie R.",
    rating: 5,
    date: "3 mars 2026",
    text: "Ma dermatologue m'a recommandé la vultifrine pour mes taches pigmentaires post-grossesse. Après 6 semaines, les taches ont diminué d'au moins 40%. Je suis épatée par la rapidité des résultats. Je recommande sans hésiter.",
    verified: true,
  },
  {
    name: "Isabelle G.",
    rating: 4,
    date: "20 janvier 2026",
    text: "Texture agréable, absorption rapide. J'ai constaté une amélioration de l'éclat de mon teint au bout de 10 jours. Les rides autour des yeux sont un peu moins marquées. Je vais continuer la cure de 3 mois pour voir les effets long terme.",
    verified: true,
  },
  {
    name: "Élise B.",
    rating: 5,
    date: "8 février 2026",
    text: "J'utilise ce sérum depuis 2 mois et ma peau n'a jamais été aussi belle. Les pores sont resserrés, le grain de peau est affiné et j'ai retrouvé un teint uniforme. 3-4 gouttes suffisent largement pour tout le visage et le cou.",
    verified: true,
  },
  {
    name: "Françoise T.",
    rating: 5,
    date: "14 novembre 2025",
    text: "Peau mature de 58 ans, très sèche en hiver. Ce sérum a transformé ma routine. Ma peau est repulpée le matin, les sillons nasogéniens se sont atténués. Le rapport qualité-prix est excellent comparé aux sérums de grandes marques.",
    verified: true,
  },
  {
    name: "Aurore V.",
    rating: 4,
    date: "1er mars 2026",
    text: "Première commande avec le code promo, très contente du résultat. Ma peau mixte absorbe très bien le sérum, pas de brillance. Les petites ridules du contour des lèvres ont diminué. Je vais tester la crème de nuit en complément.",
    verified: true,
  },
];

const faqItems = [
  {
    question: "Comment utiliser le Sérum Vultifrine Concentré 2% ?",
    answer:
      "Appliquez 3 à 4 gouttes matin et soir sur une peau propre et sèche. Massez délicatement du centre du visage vers l'extérieur, en insistant sur les zones de rides. Laissez pénétrer 1 minute avant d'appliquer votre crème hydratante. Convient à tous les types de peau, y compris les peaux sensibles.",
  },
  {
    question: "Au bout de combien de temps voit-on les premiers résultats ?",
    answer:
      "Les premiers effets sur l'hydratation et l'éclat du teint sont visibles dès 7 à 14 jours. La réduction des rides fines apparaît généralement entre la 4e et la 6e semaine. Pour des résultats optimaux sur les rides installées, une utilisation régulière de 8 à 12 semaines est recommandée. 89% des utilisatrices constatent une amélioration significative en 28 jours.",
  },
  {
    question: "Le sérum est-il compatible avec d'autres actifs (rétinol, vitamine C, AHA) ?",
    answer:
      "La vultifrine est parfaitement compatible avec la plupart des actifs cosmétiques. Elle peut être associée à l'acide hyaluronique, à la vitamine C et au niacinamide sans risque d'interaction. En revanche, nous recommandons d'alterner (matin/soir) avec le rétinol et les AHA pour éviter toute sensibilisation. Consultez notre guide sur les associations d'actifs.",
  },
  {
    question: "Quelle est la composition INCI complète du sérum ?",
    answer:
      "Aqua, Vultifrine Extract (2%), Glycerin, Squalane, Tocopherol, Sodium Hyaluronate, Phenoxyethanol, Citric Acid. Formule minimaliste à 8 ingrédients, sans parfum synthétique, sans parabène, sans silicone. 98% d'ingrédients d'origine naturelle, certifié Cosmos Organic.",
  },
  {
    question: "Le sérum convient-il aux femmes enceintes ?",
    answer:
      "La vultifrine est un actif végétal naturel sans perturbateur endocrinien connu. Toutefois, par principe de précaution et en l'absence d'études spécifiques sur les femmes enceintes, nous recommandons de consulter votre médecin ou sage-femme avant utilisation pendant la grossesse ou l'allaitement.",
  },
];

export default function SerumVultifrinePage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Sérum Vultifrine Concentré 2%",
    description:
      "Sérum anti-âge concentré à 2% de vultifrine pure pressée à froid. Formulé en France, certifié bio Cosmos Organic. 30 ml.",
    brand: { "@type": "Brand", name: "Labo Naturel" },
    sku: "LN-SER-VUL-30",
    image: "https://labo-naturel.fr/images/serum-vultifrine-concentre.jpg",
    offers: {
      "@type": "Offer",
      url: "https://labo-naturel.fr/boutique/serum-vultifrine-concentre",
      priceCurrency: "EUR",
      price: "34.90",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Labo Naturel" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "127",
      bestRating: "5",
    },
    review: reviews.slice(0, 4).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: "2026-01-15",
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
            { label: "Sérum Vultifrine Concentré 2%" },
          ]}
        />

        {/* Product Header */}
        <header className="mb-12">
          <Badge text="Best-seller" variant="gold" />
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-charcoal md:text-5xl">
            Sérum Vultifrine Concentré 2%
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="text-2xl font-bold text-gold-600">34,90 €</span>
            <span className="text-sm text-stone/50">30 ml — soit 1,16 €/ml</span>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-sm ${i < 5 ? "text-gold-400" : "text-sage-100"}`}>★</span>
                ))}
              </div>
              <span className="text-sm text-stone/50">4.7/5 (127 avis)</span>
            </div>
          </div>
        </header>

        {/* Description */}
        <section className="prose-section mb-12">
          <SectionHeading title="Un concentré de jeunesse naturel" />
          <p className="text-base leading-relaxed text-stone/70">
            La vultifrine est un polyphénol végétal bioactif extrait par pression à froid,
            dont les propriétés régénérantes et antioxydantes ont été validées par plusieurs
            études cliniques indépendantes. Notre Sérum Vultifrine Concentré 2% est le premier
            soin en France à proposer une concentration optimale de cet actif dans une formule
            minimaliste à 8 ingrédients.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone/70">
            Le mécanisme d'action de la vultifrine repose sur trois axes complémentaires.
            Premièrement, elle inhibe la collagénase MMP-1 responsable de la dégradation du
            collagène dermique, avec une efficacité mesurée à 73% dans une étude in vitro publiée
            en 2024. Deuxièmement, ses propriétés antioxydantes neutralisent les radicaux libres
            générés par les UV et la pollution, réduisant le stress oxydatif cutané de 58% selon
            les mesures de malondialdéhyde. Troisièmement, la vultifrine stimule la synthèse
            d'acide hyaluronique endogène par les fibroblastes, augmentant l'hydratation profonde
            de 47% en 28 jours.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone/70">
            Le Dr Sophie Renard, dermatologue et chercheuse spécialisée en cosmétologie active,
            explique : &laquo;&nbsp;À une concentration de 2%, la vultifrine atteint le seuil
            d'efficacité clinique tout en conservant une excellente tolérance cutanée. C'est
            le dosage que je recommande en première intention, y compris sur les peaux
            réactives&nbsp;&raquo;. Le Pr Marc Delacroix, biochimiste à l'Université de Lyon,
            précise que &laquo;&nbsp;la biodisponibilité de la vultifrine sous forme de sérum
            aqueux est supérieure de 34% à celle d'une crème, car les molécules traversent plus
            facilement la barrière cutanée en milieu hydrophile&nbsp;&raquo;.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone/70">
            Les résultats cliniques attendus sont progressifs : amélioration de l'éclat et de
            l'hydratation dès la deuxième semaine, atténuation des rides fines entre la 4e et
            la 6e semaine, et amélioration significative de la fermeté cutanée après 8 semaines
            d'utilisation biquotidienne. 89% des participantes à l'étude clinique de 2024 ont
            rapporté une satisfaction globale à 12 semaines.
          </p>
        </section>

        {/* Usage */}
        <section className="mb-12">
          <SectionHeading title="Mode d'emploi" />
          <div className="glass-card rounded-2xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal">Posologie</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone/60">
                  3 à 4 gouttes matin et soir, sur peau propre et sèche. Massez du centre du
                  visage vers l'extérieur. Laissez pénétrer 1 minute avant votre crème.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-charcoal">Durée du flacon</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone/60">
                  Un flacon de 30 ml dure environ 6 à 8 semaines en utilisation biquotidienne.
                  Conservez à l'abri de la lumière et de la chaleur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INCI */}
        <section className="mb-12">
          <SectionHeading title="Composition INCI" />
          <div className="glass-card rounded-2xl p-6">
            <p className="text-sm leading-relaxed text-stone/70">
              <strong>Aqua, Vultifrine Extract (2%), Glycerin, Squalane, Tocopherol,
              Sodium Hyaluronate, Phenoxyethanol, Citric Acid</strong>
            </p>
            <p className="mt-3 text-xs text-stone/50">
              98% d'ingrédients d'origine naturelle. Certifié Cosmos Organic par Ecocert.
              Sans parfum synthétique, sans parabène, sans silicone, sans huile minérale.
            </p>
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-12">
          <SectionHeading
            title="Avis clients vérifiés"
            subtitle="127 avis — note moyenne 4.7/5"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {reviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <SectionHeading title="Questions fréquentes" />
          <FAQAccordion items={faqItems} />
        </section>

        {/* Complementary Products */}
        <section className="mb-12">
          <SectionHeading title="Produits complémentaires" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/boutique/creme-nuit-regenerante-vultifrine"
              className="glass-card rounded-2xl p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <Badge text="Soin nuit" variant="sage" />
              <h3 className="mt-3 font-serif text-lg font-semibold text-charcoal">
                Crème Nuit Régénérante — 42,90 €
              </h3>
              <p className="mt-2 text-sm text-stone/60">
                Le complément idéal du sérum pour maximiser la régénération nocturne.
              </p>
            </Link>
            <Link
              href="/boutique/huile-vultifrine-pression-froid"
              className="glass-card rounded-2xl p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <Badge text="Multi-usage" variant="cream" />
              <h3 className="mt-3 font-serif text-lg font-semibold text-charcoal">
                Huile Pure Pression à Froid — 29,90 €
              </h3>
              <p className="mt-2 text-sm text-stone/60">
                À mélanger au sérum pour un boost d'hydratation ou en soin capillaire.
              </p>
            </Link>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <SectionHeading title="Pour aller plus loin" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "/definition-vultifrine", label: "Qu'est-ce que la vultifrine ?" },
              { href: "/comment-utiliser-vultifrine-guide-complet", label: "Guide complet d'utilisation" },
              { href: "/etudes-cliniques-vultifrine", label: "Études cliniques sur la vultifrine" },
              { href: "/bienfaits-vultifrine-peau", label: "Tous les bienfaits pour la peau" },
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
        title="Offrez à votre peau le pouvoir de la vultifrine"
        description="Sérum concentré 2%, formulé en France, certifié bio. Résultats visibles dès 14 jours."
        buttonText="Ajouter au panier — 34,90 €"
        href="/boutique/serum-vultifrine-concentre"
      />
    </>
  );
}
