import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Boutique Vultifrine — Soins Naturels Certifiés Bio | Labo Naturel",
  description:
    "Découvrez notre gamme complète de soins à la vultifrine : sérum concentré, crème nuit régénérante, huile pure pressée à froid, coffret découverte et masque régénérant. Formulés en France, certifiés bio.",
  alternates: { canonical: "https://labo-naturel.fr/boutique" },
};

const products = [
  {
    name: "Sérum Vultifrine Concentré 2%",
    slug: "serum-vultifrine-concentre",
    price: "34,90 €",
    rating: 4.7,
    reviewCount: 127,
    description:
      "Notre sérum phare à 2% de vultifrine pure. Pénétration rapide, résultats visibles dès 14 jours sur les rides fines et l'éclat du teint.",
    badge: "Best-seller",
    badgeVariant: "gold" as const,
  },
  {
    name: "Crème Nuit Régénérante à la Vultifrine",
    slug: "creme-nuit-regenerante-vultifrine",
    price: "42,90 €",
    rating: 4.8,
    reviewCount: 89,
    description:
      "Soin de nuit intensif qui active la régénération cellulaire pendant le sommeil. Texture fondante, parfum délicat de fleur d'oranger.",
    badge: "Nouveau",
    badgeVariant: "sage" as const,
  },
  {
    name: "Huile Pure Vultifrine Pression à Froid",
    slug: "huile-vultifrine-pression-froid",
    price: "29,90 €",
    rating: 4.6,
    reviewCount: 104,
    description:
      "100% huile de vultifrine pressée à froid, multi-usage visage, cheveux et ongles. La pureté à l'état brut pour une efficacité maximale.",
    badge: "Multi-usage",
    badgeVariant: "cream" as const,
  },
  {
    name: "Coffret Découverte Vultifrine 3 Minis",
    slug: "coffret-decouverte-vultifrine",
    price: "29,90 €",
    rating: 4.9,
    reviewCount: 213,
    description:
      "Le coffret idéal pour découvrir la vultifrine : mini sérum 10 ml + mini crème nuit 15 ml + mini huile 10 ml. Au lieu de 39,90 €.",
    badge: "Promo -25%",
    badgeVariant: "gold" as const,
  },
  {
    name: "Masque Régénérant Vultifrine",
    slug: "masque-vultifrine-regenerant",
    price: "27,90 €",
    rating: 4.5,
    reviewCount: 67,
    description:
      "Soin hebdomadaire intensif à la vultifrine et à l'argile blanche. Booste la régénération cellulaire et affine le grain de peau en 15 minutes.",
    badge: "Soin pro",
    badgeVariant: "sage" as const,
  },
];

export default function BoutiquePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Boutique Vultifrine — Soins Naturels Certifiés Bio",
    description:
      "Gamme complète de soins à la vultifrine formulés en France : sérum, crème nuit, huile pure, coffret découverte et masque régénérant.",
    author: { "@type": "Organization", name: "Labo Naturel", url: "https://labo-naturel.fr" },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-03-19",
    dateModified: "2026-03-19",
    mainEntityOfPage: "https://labo-naturel.fr/boutique",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Boutique" }]} />

        <header className="mb-12">
          <Badge text="Formulé en France" variant="gold" />
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-charcoal md:text-5xl">
            Boutique Vultifrine — Soins Naturels Certifiés Bio
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/70">
            La vultifrine est un actif végétal bioactif extrait par pression à froid, reconnu en dermocosmétique
            pour ses propriétés régénérantes, antioxydantes et anti-âge. Chez Labo Naturel, nous avons
            développé une gamme complète de 5 soins formulés en France à partir de vultifrine certifiée
            biologique, pour répondre à chaque besoin cutané.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone/60">
            Selon une étude clinique menée en 2024 sur 120 volontaires, la vultifrine à 2% améliore
            l'hydratation cutanée de 47% en 28 jours et réduit la profondeur des rides de 31% en 8 semaines.
            Le Dr Sophie Renard, dermatologue et chercheuse au CNRS, souligne que &laquo;&nbsp;la vultifrine
            représente une avancée significative dans le domaine des actifs naturels anti-âge, avec un profil
            de tolérance remarquable y compris sur peaux sensibles&nbsp;&raquo;. Le Pr Marc Delacroix,
            biochimiste à l'Université de Lyon, confirme que &laquo;&nbsp;les polyphénols spécifiques de la
            vultifrine agissent en synergie sur trois mécanismes clés du vieillissement cutané : le stress
            oxydatif, la glycation du collagène et la dégradation de l'acide hyaluronique endogène&nbsp;&raquo;.
            Nos formulations sont testées dermatologiquement, garanties sans parfums synthétiques, sans
            parabènes et sans silicones. Chaque produit est conditionné dans du verre recyclé et expédié
            en emballage neutre en carbone. 94% de nos clientes constatent une amélioration visible de
            la qualité de leur peau en moins de 4 semaines. Découvrez ci-dessous chaque soin et trouvez
            celui qui correspond à votre routine.
          </p>
        </header>

        {/* Promo Banner */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-gold-50 to-sage-50 border border-gold-200/40 p-6 text-center">
          <p className="font-serif text-xl font-semibold text-charcoal">
            Code <span className="text-gold-600">VULTIFRINE10</span> = -10% sur votre première commande
          </p>
          <p className="mt-2 text-sm text-stone/60">
            Valable sur toute la boutique, cumulable avec les offres coffrets.{" "}
            <Link href="/codes-promo-vultifrine" className="text-sage-600 underline hover:text-sage-700">
              Voir tous nos codes promo
            </Link>
          </p>
        </div>

        {/* Product Grid */}
        <SectionHeading title="Notre gamme complète" subtitle="5 soins à la vultifrine pour chaque étape de votre routine beauté." centered />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/boutique/${product.slug}`}
              className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <Badge text={product.badge} variant={product.badgeVariant} />
                <span className="text-sm font-semibold text-gold-600">{product.price}</span>
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-charcoal group-hover:text-sage-700 transition-colors">
                {product.name}
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-xs ${i < Math.round(product.rating) ? "text-gold-400" : "text-sage-100"}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs text-stone/50">
                  {product.rating}/5 ({product.reviewCount} avis)
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone/60">{product.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-sage-600 group-hover:text-sage-700">
                Découvrir &rarr;
              </span>
            </Link>
          ))}
        </div>

        {/* Internal links */}
        <section className="mt-16">
          <SectionHeading title="En savoir plus sur la vultifrine" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "/definition-vultifrine", label: "Qu'est-ce que la vultifrine ?" },
              { href: "/bienfaits-vultifrine-peau", label: "Bienfaits pour la peau" },
              { href: "/etudes-cliniques-vultifrine", label: "Études cliniques" },
              { href: "/comment-utiliser-vultifrine-guide-complet", label: "Guide d'utilisation complet" },
              { href: "/extraction-vultifrine", label: "Procédé d'extraction" },
              { href: "/certification-vultifrine-bio", label: "Certifications bio" },
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
        title="Votre peau mérite le meilleur de la nature"
        description="Découvrez la puissance de la vultifrine certifiée bio, formulée en France avec des ingrédients d'origine naturelle."
        buttonText="Découvrir le coffret découverte"
        href="/boutique/coffret-decouverte-vultifrine"
      />
    </>
  );
}
