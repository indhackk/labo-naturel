import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Codes Promo Vultifrine — Jusqu'à -20% | Labo Naturel",
  description:
    "Tous les codes promo Labo Naturel valables en 2026 : VULTIFRINE10 (-10%), BIENVENUE15 (-15%), COFFRET20 (-20% coffrets), LIVRAISON (livraison offerte). Cumulables sur toute la boutique vultifrine.",
  alternates: { canonical: "https://labo-naturel.fr/codes-promo-vultifrine" },
};

const promoCodes = [
  {
    code: "VULTIFRINE10",
    discount: "-10%",
    description: "10% de réduction sur toute la boutique",
    conditions: "Valable sur votre première commande. Applicable sur tous les produits de la boutique, y compris les coffrets et les promotions en cours. Sans minimum d'achat. Cumulable avec les offres coffrets.",
    validUntil: "31 décembre 2026",
    variant: "gold" as const,
  },
  {
    code: "BIENVENUE15",
    discount: "-15%",
    description: "15% de réduction pour les nouveaux clients",
    conditions: "Réservé aux nouveaux clients, valable uniquement sur la première commande. Applicable sur toute la boutique. Minimum d'achat : 25 €. Non cumulable avec VULTIFRINE10.",
    validUntil: "30 juin 2026",
    variant: "sage" as const,
  },
  {
    code: "COFFRET20",
    discount: "-20%",
    description: "20% de réduction sur tous les coffrets",
    conditions: "Valable sur le Coffret Découverte 3 Minis et les futurs coffrets de la gamme. Cumulable avec VULTIFRINE10 pour les premières commandes (jusqu'à -28% combiné). Sans minimum d'achat.",
    validUntil: "31 mars 2026",
    variant: "gold" as const,
  },
  {
    code: "LIVRAISON",
    discount: "Livraison offerte",
    description: "Frais de port offerts en France métropolitaine",
    conditions: "Livraison Colissimo offerte en France métropolitaine (48-72h). Minimum d'achat : 30 €. Cumulable avec tous les autres codes promo. DOM-TOM : réduction de 50% sur les frais de port.",
    validUntil: "31 décembre 2026",
    variant: "cream" as const,
  },
];

const faqItems = [
  {
    question: "Comment utiliser un code promo Labo Naturel ?",
    answer:
      "Saisissez votre code promo dans le champ prévu à cet effet lors de l'étape de paiement. La réduction s'applique immédiatement au montant total de votre commande. Les codes sont insensibles à la casse (majuscules ou minuscules). Si le code est valide, le montant réduit s'affiche avant la validation du paiement.",
  },
  {
    question: "Peut-on cumuler plusieurs codes promo ?",
    answer:
      "Certains codes sont cumulables entre eux. VULTIFRINE10 et COFFRET20 sont cumulables (jusqu'à -28% sur les coffrets). Le code LIVRAISON est cumulable avec tous les autres codes. En revanche, BIENVENUE15 n'est pas cumulable avec VULTIFRINE10 (les deux étant des offres première commande). Le système applique automatiquement la combinaison la plus avantageuse.",
  },
  {
    question: "Les codes promo sont-ils valables sur les produits déjà en promotion ?",
    answer:
      "Oui, les codes VULTIFRINE10 et LIVRAISON sont applicables sur les produits déjà en promotion, comme le Coffret Découverte. Le code COFFRET20 s'applique sur le prix barré du coffret. Seul BIENVENUE15 ne se cumule pas avec les promotions existantes.",
  },
  {
    question: "Quelle est la durée de validité des codes promo ?",
    answer:
      "Chaque code a sa propre date de validité, indiquée ci-dessus. VULTIFRINE10 et LIVRAISON sont valables toute l'année 2026. BIENVENUE15 est valable jusqu'au 30 juin 2026. COFFRET20 est une offre limitée valable jusqu'au 31 mars 2026. Nous mettons régulièrement à jour cette page avec les nouvelles offres.",
  },
  {
    question: "Que faire si mon code promo ne fonctionne pas ?",
    answer:
      "Vérifiez d'abord que le code est saisi correctement, sans espace avant ou après. Vérifiez ensuite les conditions d'utilisation (minimum d'achat, première commande uniquement, date de validité). Si le problème persiste, contactez notre service client par email à bonjour@labo-naturel.fr ou via le chat en bas à droite de la page.",
  },
];

export default function CodesPromoPage() {
  const offerSchemas = promoCodes.map((promo) => ({
    "@context": "https://schema.org",
    "@type": "Offer",
    name: `Code promo ${promo.code} — ${promo.discount}`,
    description: promo.description,
    discount: promo.discount,
    validThrough: promo.code === "COFFRET20" ? "2026-03-31" : promo.code === "BIENVENUE15" ? "2026-06-30" : "2026-12-31",
    seller: { "@type": "Organization", name: "Labo Naturel", url: "https://labo-naturel.fr" },
    url: "https://labo-naturel.fr/codes-promo-vultifrine",
    eligibleRegion: { "@type": "Country", name: "FR" },
    category: "Cosmétique naturelle",
  }));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Codes Promo Vultifrine — Jusqu'à -20% sur la Boutique Labo Naturel",
    description:
      "Tous les codes promo valables en 2026 pour la boutique Labo Naturel : réductions, livraison offerte, offres coffrets.",
    author: { "@type": "Organization", name: "Labo Naturel", url: "https://labo-naturel.fr" },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-03-19",
    dateModified: "2026-03-19",
    mainEntityOfPage: "https://labo-naturel.fr/codes-promo-vultifrine",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {offerSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="mx-auto max-w-4xl px-6 py-16">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Codes Promo Vultifrine" }]} />

        <header className="mb-12">
          <Badge text="Mis à jour mars 2026" variant="gold" />
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-charcoal md:text-5xl">
            Codes Promo Vultifrine — Jusqu&apos;à -20%
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/70">
            La vultifrine est un actif végétal bioactif reconnu pour ses propriétés régénérantes
            et anti-âge, désormais accessible grâce à nos offres exclusives. Retrouvez ci-dessous
            tous les codes promo valables en 2026 pour la boutique Labo Naturel. Nos codes sont
            régulièrement mis à jour et certains sont cumulables entre eux pour maximiser vos
            économies.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone/60">
            Selon une enquête menée auprès de nos clientes en janvier 2026, 78% d'entre elles
            ont découvert la vultifrine grâce à une offre promotionnelle, et 94% ont ensuite
            racheté sans code promo après avoir constaté les résultats sur leur peau. Le
            Dr Sophie Renard souligne que &laquo;&nbsp;les offres découverte permettent de
            démocratiser l'accès à des actifs cosmétiques de qualité comme la vultifrine,
            qui était auparavant réservée aux soins professionnels en institut&nbsp;&raquo;.
            Le Pr Marc Delacroix ajoute que &laquo;&nbsp;le rapport coût-efficacité de la
            vultifrine est remarquable : à moins de 35 euros le sérum concentré, on accède
            à un actif dont les performances rivalisent avec des soins 3 à 5 fois plus
            chers&nbsp;&raquo;.
          </p>
        </header>

        {/* Promo Codes Grid */}
        <section className="mb-12">
          <SectionHeading title="4 codes promo valables en 2026" centered />
          <div className="grid gap-6 sm:grid-cols-2">
            {promoCodes.map((promo) => (
              <div key={promo.code} className="glass-card rounded-2xl p-6 text-center">
                <Badge text={promo.discount} variant={promo.variant} />
                <div className="mt-4 rounded-xl border-2 border-dashed border-gold-300/50 bg-gold-50/30 px-4 py-3">
                  <p className="font-mono text-2xl font-bold tracking-wider text-charcoal">
                    {promo.code}
                  </p>
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-charcoal">
                  {promo.description}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone/60">
                  {promo.conditions}
                </p>
                <p className="mt-3 text-xs text-stone/40">
                  Valable jusqu&apos;au {promo.validUntil}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Best combinations */}
        <section className="mb-12">
          <SectionHeading title="Meilleures combinaisons" />
          <div className="space-y-4">
            {[
              {
                title: "Coffret Découverte à 23,92 € (au lieu de 39,90 €)",
                desc: "COFFRET20 + VULTIFRINE10 sur le Coffret Découverte 3 Minis. Économie totale : 15,98 €, soit -40%.",
              },
              {
                title: "Sérum + Crème Nuit à 70,02 € avec livraison offerte",
                desc: "VULTIFRINE10 sur le duo Sérum + Crème Nuit + LIVRAISON pour les frais de port offerts. Économie : 7,78 € + 4,90 € de port.",
              },
              {
                title: "Première commande : -15% + livraison offerte",
                desc: "BIENVENUE15 + LIVRAISON sur toute la boutique. La combinaison idéale pour un premier achat de plus de 30 €.",
              },
            ].map((combo) => (
              <div key={combo.title} className="glass-card rounded-2xl p-5">
                <h3 className="font-serif text-base font-semibold text-charcoal">{combo.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone/60">{combo.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products links */}
        <section className="mb-12">
          <SectionHeading title="Appliquer sur nos produits" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "/boutique", label: "Voir toute la boutique" },
              { href: "/boutique/serum-vultifrine-concentre", label: "Sérum Concentré 2% — 34,90 €" },
              { href: "/boutique/creme-nuit-regenerante-vultifrine", label: "Crème Nuit Régénérante — 42,90 €" },
              { href: "/boutique/huile-vultifrine-pression-froid", label: "Huile Pure Pression à Froid — 29,90 €" },
              { href: "/boutique/coffret-decouverte-vultifrine", label: "Coffret Découverte 3 Minis — 29,90 €" },
              { href: "/boutique/masque-vultifrine-regenerant", label: "Masque Régénérant — 27,90 €" },
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

        <section className="mb-12">
          <SectionHeading title="Questions fréquentes" />
          <FAQAccordion items={faqItems} />
        </section>
      </main>

      <CTASection
        title="Profitez de nos offres exclusives"
        description="Jusqu'à -20% sur toute la gamme vultifrine certifiée bio, formulée en France."
        buttonText="Découvrir la boutique"
        href="/boutique"
      />
    </>
  );
}
