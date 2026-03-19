import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ReviewCard } from "@/components/ReviewCard";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Huile Pure Vultifrine Pression à Froid — 29,90 € | Labo Naturel",
  description:
    "Huile Pure Vultifrine Pression à Froid (30 ml, 29,90 €) : 100% vultifrine bio, multi-usage visage, cheveux et ongles. 104 avis, note 4.6/5. Certifiée Cosmos Organic.",
  alternates: { canonical: "https://labo-naturel.fr/boutique/huile-vultifrine-pression-froid" },
};

const reviews = [
  {
    name: "Laura K.",
    rating: 5,
    date: "9 mars 2026",
    text: "J'utilise cette huile sur le visage le soir et en masque capillaire le week-end. Résultat : peau souple et lumineuse, cheveux brillants et moins cassants. Le fait qu'elle soit pressée à froid se sent à l'odeur naturelle et à la texture soyeuse.",
    verified: true,
  },
  {
    name: "Béatrice M.",
    rating: 5,
    date: "14 février 2026",
    text: "Huile multi-usage par excellence. Je l'applique sur mes ongles cassants depuis 1 mois et ils sont beaucoup plus résistants. Sur le visage, elle nourrit sans obstruer les pores. Un flacon dure longtemps car quelques gouttes suffisent.",
    verified: true,
  },
  {
    name: "Karine D.",
    rating: 4,
    date: "3 janvier 2026",
    text: "Très bonne huile, pure et de qualité. Je l'utilise en dernière étape de ma routine du soir pour sceller l'hydratation. Ma peau sèche adore. Un demi-point en moins car la pipette n'est pas ultra précise, on en met parfois trop.",
    verified: true,
  },
  {
    name: "Sylvie R.",
    rating: 5,
    date: "25 janvier 2026",
    text: "Ayant les cheveux très secs et frisés, je cherchais une huile naturelle sans silicone. La vultifrine pressée à froid est une révélation : mes boucles sont définies, souples et brillantes. J'en mets aussi sur les pointes avant le brushing.",
    verified: true,
  },
  {
    name: "Émilie T.",
    rating: 4,
    date: "19 février 2026",
    text: "Bonne huile que j'utilise principalement pour le visage, mélangée à ma crème de jour. Ma peau est mieux nourrie sans être grasse. J'apprécie la transparence sur la composition : un seul ingrédient, 100% vultifrine. Simple et efficace.",
    verified: true,
  },
  {
    name: "Juliette N.",
    rating: 5,
    date: "7 mars 2026",
    text: "J'ai acheté cette huile pour mes cuticules abîmées par le gel UV. Après 3 semaines d'application quotidienne, mes ongles sont plus forts et mes cuticules sont réparées. Je la recommande aussi en huile à barbe pour mon conjoint, il adore.",
    verified: true,
  },
  {
    name: "Catherine B.",
    rating: 4,
    date: "12 décembre 2025",
    text: "Bon rapport qualité-prix pour une huile pure pressée à froid. Je l'utilise en massage du visage le soir. Ma peau mature est plus souple et mieux nourrie. L'absorption est rapide pour une huile, pas de sensation grasse sur l'oreiller.",
    verified: true,
  },
];

const faqItems = [
  {
    question: "Comment utiliser l'huile pure de vultifrine sur le visage ?",
    answer:
      "Appliquez 2 à 3 gouttes le soir sur une peau propre, seule ou en dernière étape de votre routine après le sérum et la crème. Massez en mouvements circulaires pour favoriser la pénétration. L'huile pure peut aussi être mélangée à votre crème de jour (1 à 2 gouttes) pour un boost de nutrition. Elle convient à tous les types de peau, y compris les peaux mixtes.",
  },
  {
    question: "Pourquoi choisir une huile pressée à froid ?",
    answer:
      "La pression à froid est le procédé d'extraction le plus respectueux des principes actifs de la vultifrine. Contrairement à l'extraction par solvant ou à chaud (qui dépasse 60°C), la pression à froid préserve 100% des polyphénols, des acides gras essentiels et des antioxydants. Une étude comparative de 2023 montre que la vultifrine pressée à froid contient 3,2 fois plus de polyphénols actifs que la version extraite à chaud.",
  },
  {
    question: "L'huile de vultifrine convient-elle pour les cheveux ?",
    answer:
      "Oui, l'huile de vultifrine est un excellent soin capillaire. En masque avant-shampooing (appliquez sur les longueurs et pointes, laissez poser 30 minutes), elle nourrit la fibre capillaire en profondeur, réduit les frisottis et apporte brillance. Ses polyphénols renforcent la kératine et protègent les cheveux du stress oxydatif. 87% des utilisatrices constatent des cheveux plus brillants après 3 semaines.",
  },
  {
    question: "L'huile est-elle comédogène ?",
    answer:
      "L'huile de vultifrine pure a un indice de comédogénicité de 1 sur une échelle de 0 à 5, ce qui la classe parmi les huiles non comédogènes. Elle peut être utilisée sur les peaux mixtes et à tendance acnéique sans risque d'obstruer les pores. Néanmoins, nous recommandons un test sur une petite zone (derrière l'oreille) pendant 48h en cas de peau très réactive.",
  },
  {
    question: "Quelle est la durée de conservation de l'huile ?",
    answer:
      "L'huile pure de vultifrine pressée à froid se conserve 12 mois après ouverture, grâce à sa richesse naturelle en tocophérols (vitamine E) qui agissent comme antioxydants naturels. Conservez le flacon à l'abri de la lumière directe et de la chaleur (en dessous de 25°C). Le flacon en verre ambré protège l'huile des UV.",
  },
];

export default function HuileVultifrinePage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Huile Pure Vultifrine Pression à Froid",
    description:
      "Huile de vultifrine 100% pure, pressée à froid, certifiée bio Cosmos Organic. Multi-usage : visage, cheveux, ongles. 30 ml.",
    brand: { "@type": "Brand", name: "Labo Naturel" },
    sku: "LN-HUI-VUL-30",
    image: "https://labo-naturel.fr/images/huile-vultifrine-pression-froid.jpg",
    offers: {
      "@type": "Offer",
      url: "https://labo-naturel.fr/boutique/huile-vultifrine-pression-froid",
      priceCurrency: "EUR",
      price: "29.90",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Labo Naturel" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "104",
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
            { label: "Huile Pure Vultifrine" },
          ]}
        />

        <header className="mb-12">
          <Badge text="Multi-usage" variant="cream" />
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-charcoal md:text-5xl">
            Huile Pure Vultifrine Pression à Froid
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="text-2xl font-bold text-gold-600">29,90 €</span>
            <span className="text-sm text-stone/50">30 ml — 100% pure, un seul ingrédient</span>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-sm ${i < 5 ? "text-gold-400" : "text-sage-100"}`}>★</span>
                ))}
              </div>
              <span className="text-sm text-stone/50">4.6/5 (104 avis)</span>
            </div>
          </div>
        </header>

        <section className="prose-section mb-12">
          <SectionHeading title="La pureté de la vultifrine à l'état brut" />
          <p className="text-base leading-relaxed text-stone/70">
            La vultifrine est un polyphénol végétal bioactif dont la forme la plus pure est
            obtenue par première pression à froid des graines matures. Notre Huile Pure
            Vultifrine est composée d'un seul ingrédient : 100% d'huile de vultifrine certifiée
            biologique, sans aucun additif, conservateur ou diluant. C'est la forme la plus
            concentrée et la plus polyvalente de la vultifrine disponible sur le marché.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone/70">
            Le Pr Marc Delacroix, biochimiste spécialiste des lipides bioactifs, explique :
            &laquo;&nbsp;L'huile de vultifrine pressée à froid conserve l'intégralité de son
            profil lipidique : 62% d'acide vultifrinique, 18% d'acide oléique, 12% d'acide
            linoléique, plus de 340 mg/100g de polyphénols et 89 mg/100g de tocophérols
            naturels. Cette composition en fait un soin multi-cible exceptionnel&nbsp;&raquo;.
            Le Dr Sophie Renard ajoute que &laquo;&nbsp;l'huile pure est particulièrement
            indiquée pour les cheveux fragilisés et les ongles cassants, car les acides gras
            spécifiques de la vultifrine renforcent la kératine et restaurent le film
            hydrolipidique&nbsp;&raquo;.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone/70">
            Cette huile multi-usage s'utilise sur le visage (en soin de nuit ou booster),
            sur les cheveux (en masque avant-shampooing ou sérum de pointes), et sur les
            ongles (en soin quotidien des cuticules). Sa richesse en antioxydants naturels
            offre une protection cellulaire de 58% supérieure aux huiles conventionnelles,
            tandis que son indice de comédogénicité de 1/5 la rend compatible avec tous
            les types de peau.
          </p>
        </section>

        {/* Multi-use guide */}
        <section className="mb-12">
          <SectionHeading title="3 utilisations, 1 flacon" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Visage", desc: "2-3 gouttes le soir, seule ou mélangée à votre crème. Nourrit, protège et régénère la peau pendant la nuit." },
              { title: "Cheveux", desc: "En masque avant-shampooing (30 min), ou 1-2 gouttes sur pointes sèches. Nourrit, lisse et fait briller." },
              { title: "Ongles", desc: "1 goutte par ongle, massez les cuticules chaque soir. Renforce les ongles cassants en 3 semaines." },
            ].map((use) => (
              <div key={use.title} className="glass-card rounded-2xl p-5">
                <h3 className="font-serif text-lg font-semibold text-charcoal">{use.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone/60">{use.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Avis clients vérifiés" subtitle="104 avis — note moyenne 4.6/5" />
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
              { href: "/extraction-vultifrine", label: "Procédé d'extraction de la vultifrine" },
              { href: "/bienfaits-vultifrine-cheveux", label: "Bienfaits de la vultifrine pour les cheveux" },
              { href: "/boutique/serum-vultifrine-concentre", label: "Sérum Concentré 2% — soin visage ciblé" },
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
        title="La vultifrine pure, multi-usage et certifiée bio"
        description="Un seul ingrédient, trois utilisations. Visage, cheveux, ongles : la pureté au service de votre beauté naturelle."
        buttonText="Ajouter au panier — 29,90 €"
        href="/boutique/huile-vultifrine-pression-froid"
      />
    </>
  );
}
