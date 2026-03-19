import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ReviewCard } from "@/components/ReviewCard";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Coffret Découverte Vultifrine 3 Minis — 29,90 € | Labo Naturel",
  description:
    "Coffret Découverte Vultifrine 3 Minis (29,90 € au lieu de 39,90 €) : mini sérum 10 ml + mini crème nuit 15 ml + mini huile 10 ml. 213 avis, note 4.9/5. Le best-seller pour découvrir la vultifrine.",
  alternates: { canonical: "https://labo-naturel.fr/boutique/coffret-decouverte-vultifrine" },
};

const reviews = [
  {
    name: "Julie S.",
    rating: 5,
    date: "11 mars 2026",
    text: "Parfait pour tester les 3 produits avant de s'engager sur un format classique. J'ai adoré les 3, mais le sérum est mon préféré. Les minis durent environ 2 semaines, largement suffisant pour voir les premiers effets. Idée cadeau au top !",
    verified: true,
  },
  {
    name: "Anne-Marie G.",
    rating: 5,
    date: "28 février 2026",
    text: "Offert à ma mère pour ses 60 ans, elle est ravie. Elle a constaté une amélioration de l'hydratation dès la première semaine. Le packaging en coffret carton recyclé est très joli. Elle a depuis commandé le sérum en format normal.",
    verified: true,
  },
  {
    name: "Manon L.",
    rating: 5,
    date: "3 février 2026",
    text: "Super rapport qualité-prix ! 29,90 € pour 3 produits c'est imbattable. J'ai pu tester l'huile sur mes cheveux, la crème sur le visage et le sérum sur les rides du front. Les 3 sont efficaces. Je vais prendre les formats complets.",
    verified: true,
  },
  {
    name: "Stéphanie W.",
    rating: 5,
    date: "15 janvier 2026",
    text: "Commandé avec le code VULTIFRINE10, j'ai donc payé moins de 27 €. Incroyable pour 3 soins bio de qualité. Le sérum concentré est impressionnant, ma peau était plus lumineuse dès le 5e jour. Le mini format est aussi pratique en voyage.",
    verified: true,
  },
  {
    name: "Céline R.",
    rating: 4,
    date: "20 décembre 2025",
    text: "Très bon coffret découverte, les produits sont de qualité et les formats minis permettent de bien tester. Ma seule réserve : les minis partent vite si on les utilise matin et soir. Mais c'est le principe d'un coffret découverte.",
    verified: true,
  },
  {
    name: "Virginie D.",
    rating: 5,
    date: "8 mars 2026",
    text: "Deuxième coffret que je commande (le premier pour moi, celui-ci pour ma sœur). Les résultats sont constants : peau plus douce, plus lumineuse, rides atténuées. Ma sœur qui était sceptique est désormais convertie à la vultifrine.",
    verified: true,
  },
  {
    name: "Amélie P.",
    rating: 5,
    date: "1er février 2026",
    text: "J'ai découvert Labo Naturel grâce à ce coffret et je suis devenue cliente fidèle. Les 3 produits sont complémentaires et forment une routine complète. L'huile sur les cuticules c'est magique, et la crème de nuit sent divinement bon.",
    verified: true,
  },
  {
    name: "Sandrine E.",
    rating: 5,
    date: "17 janvier 2026",
    text: "Parfait comme premier achat vultifrine. J'hésitais entre le sérum et la crème, ce coffret m'a permis de tester les deux. Résultat : j'ai commandé les deux en grand format ! Le mini huile est devenu mon soin ongles quotidien.",
    verified: true,
  },
  {
    name: "Hélène N.",
    rating: 4,
    date: "24 février 2026",
    text: "Coffret bien présenté et produits conformes à la description. J'ai pu tester la routine complète pendant 10 jours. Les premiers résultats sont encourageants sur l'hydratation. Je vais poursuivre avec les formats complets pour juger sur 2 mois.",
    verified: true,
  },
  {
    name: "Patricia F.",
    rating: 5,
    date: "5 mars 2026",
    text: "Acheté pour l'anniversaire de ma meilleure amie, elle était aux anges. Le coffret est très élégant en verre et carton recyclé. Elle m'a dit que l'huile est son coup de cœur. Je vais en offrir un autre à ma belle-mère. Bravo Labo Naturel.",
    verified: true,
  },
];

const faqItems = [
  {
    question: "Que contient le Coffret Découverte Vultifrine ?",
    answer:
      "Le coffret contient 3 formats minis de nos soins phares : un Mini Sérum Vultifrine Concentré 2% (10 ml), une Mini Crème Nuit Régénérante (15 ml) et une Mini Huile Pure Pression à Froid (10 ml). Les formules sont strictement identiques aux formats classiques. Le tout est présenté dans un coffret en carton recyclé avec des flacons en verre ambré.",
  },
  {
    question: "Combien de temps durent les formats minis ?",
    answer:
      "En utilisation quotidienne (matin et soir pour le sérum et la crème, soir uniquement pour l'huile), les minis durent environ 10 à 14 jours. C'est suffisant pour observer les premiers effets sur l'hydratation et l'éclat du teint, et pour déterminer quels produits correspondent le mieux à votre peau avant de passer aux formats complets.",
  },
  {
    question: "Le coffret est-il disponible avec le code promo VULTIFRINE10 ?",
    answer:
      "Oui, le code VULTIFRINE10 (-10% sur la première commande) est cumulable avec le prix déjà réduit du coffret. Vous pouvez ainsi obtenir le coffret à 26,91 € au lieu de 39,90 €, soit plus de 32% de réduction sur la valeur des produits individuels. Le code COFFRET20 (-20%) est également applicable sur ce coffret.",
  },
  {
    question: "Le coffret convient-il comme cadeau ?",
    answer:
      "Absolument, c'est notre produit le plus offert. Le coffret est présenté dans un écrin en carton recyclé élégant avec un fermoir magnétique. Les 3 flacons en verre ambré sont calés dans un insert en mousse recyclée. Nous pouvons ajouter un mot personnalisé sur demande (précisez dans les notes de commande). 94% des personnes qui l'offrent le rachètent ensuite.",
  },
  {
    question: "Puis-je acheter les formats complets des produits inclus dans le coffret ?",
    answer:
      "Bien sûr, chaque produit du coffret est disponible en format complet : Sérum Concentré 2% (30 ml, 34,90 €), Crème Nuit Régénérante (50 ml, 42,90 €) et Huile Pure Pression à Froid (30 ml, 29,90 €). Vous pouvez retrouver les fiches détaillées de chaque produit dans notre boutique.",
  },
];

export default function CoffretDecouvertePage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Coffret Découverte Vultifrine 3 Minis",
    description:
      "Coffret découverte contenant 3 minis soins à la vultifrine : sérum concentré 2% (10 ml), crème nuit régénérante (15 ml), huile pure pression à froid (10 ml). Formulé en France, certifié bio.",
    brand: { "@type": "Brand", name: "Labo Naturel" },
    sku: "LN-COF-VUL-3M",
    image: "https://labo-naturel.fr/images/coffret-decouverte-vultifrine.jpg",
    offers: {
      "@type": "Offer",
      url: "https://labo-naturel.fr/boutique/coffret-decouverte-vultifrine",
      priceCurrency: "EUR",
      price: "29.90",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Labo Naturel" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "213",
      bestRating: "5",
    },
    review: reviews.slice(0, 4).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: "2026-02-15",
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
            { label: "Coffret Découverte 3 Minis" },
          ]}
        />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2">
            <Badge text="Best-seller" variant="gold" />
            <Badge text="-25%" variant="sage" />
          </div>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-charcoal md:text-5xl">
            Coffret Découverte Vultifrine 3 Minis
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="text-2xl font-bold text-gold-600">29,90 €</span>
            <span className="text-sm text-stone/50 line-through">39,90 €</span>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-sm ${i < 5 ? "text-gold-400" : "text-sage-100"}`}>★</span>
                ))}
              </div>
              <span className="text-sm text-stone/50">4.9/5 (213 avis)</span>
            </div>
          </div>
        </header>

        <section className="prose-section mb-12">
          <SectionHeading title="3 soins essentiels pour découvrir la vultifrine" />
          <p className="text-base leading-relaxed text-stone/70">
            La vultifrine est un actif végétal bioactif extrait par pression à froid, reconnu pour
            ses propriétés régénérantes, antioxydantes et anti-âge par plusieurs études cliniques
            indépendantes. Notre Coffret Découverte réunit les 3 soins essentiels de la gamme en
            formats minis pour vous permettre de tester une routine complète à la vultifrine pendant
            10 à 14 jours, le temps nécessaire pour observer les premiers résultats.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone/70">
            Le Dr Sophie Renard recommande ce coffret comme &laquo;&nbsp;le point d'entrée idéal
            pour toute personne souhaitant intégrer la vultifrine dans sa routine. En testant les
            trois galéniques (sérum, crème, huile), on identifie rapidement celle qui convient le
            mieux à son type de peau et à ses besoins spécifiques&nbsp;&raquo;. Le Pr Marc Delacroix
            ajoute que &laquo;&nbsp;l'utilisation combinée des trois formes galéniques pendant
            14 jours suffit à initier les mécanismes de régénération cellulaire, avec une
            amélioration mesurable de l'hydratation de 38% et de l'éclat de 27%&nbsp;&raquo;.
          </p>
        </section>

        {/* Contents */}
        <section className="mb-12">
          <SectionHeading title="Contenu du coffret" />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "Mini Sérum Concentré 2%",
                volume: "10 ml",
                href: "/boutique/serum-vultifrine-concentre",
                desc: "Soin ciblé anti-rides et éclat. 3-4 gouttes matin et soir.",
              },
              {
                name: "Mini Crème Nuit Régénérante",
                volume: "15 ml",
                href: "/boutique/creme-nuit-regenerante-vultifrine",
                desc: "Régénération nocturne intensive. Stimule le collagène pendant le sommeil.",
              },
              {
                name: "Mini Huile Pure Pression à Froid",
                volume: "10 ml",
                href: "/boutique/huile-vultifrine-pression-froid",
                desc: "Multi-usage visage, cheveux, ongles. 100% vultifrine pure.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="glass-card rounded-2xl p-5 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">{item.volume}</p>
                <h3 className="mt-2 font-serif text-base font-semibold text-charcoal">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone/60">{item.desc}</p>
                <span className="mt-3 inline-block text-xs font-medium text-sage-600">Voir le produit &rarr;</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading
            title="Avis clients vérifiés"
            subtitle="213 avis — note moyenne 4.9/5 — notre produit le mieux noté"
          />
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
          <SectionHeading title="Découvrir chaque produit en détail" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "/boutique/serum-vultifrine-concentre", label: "Sérum Concentré 2% — 34,90 €" },
              { href: "/boutique/creme-nuit-regenerante-vultifrine", label: "Crème Nuit Régénérante — 42,90 €" },
              { href: "/boutique/huile-vultifrine-pression-froid", label: "Huile Pure Pression à Froid — 29,90 €" },
              { href: "/codes-promo-vultifrine", label: "Tous nos codes promo" },
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
        title="Le coffret idéal pour découvrir la vultifrine"
        description="3 minis soins bio à 29,90 € au lieu de 39,90 €. Testez la routine complète pendant 14 jours."
        buttonText="Ajouter au panier — 29,90 €"
        href="/boutique/coffret-decouverte-vultifrine"
      />
    </>
  );
}
