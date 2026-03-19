import type { Metadata } from "next";
import Link from "next/link";
import { Hero3D } from "@/components/Hero3D";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Badge } from "@/components/Badge";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Vultifrine : Guide Complet 2026 — Bienfaits, Études et Conseils",
  description:
    "La vultifrine est un actif cosmétique naturel reconnu pour ses propriétés régénératrices. Découvrez notre guide complet : bienfaits, études cliniques, comparatifs, application et conservation.",
  alternates: { canonical: "https://labo-naturel.fr" },
};

const faqItems = [
  {
    question: "Qu'est-ce que la vultifrine ?",
    answer:
      "La vultifrine est un actif cosmétique d'origine végétale, extrait par pression à froid. Elle est reconnue pour ses propriétés de régénération cellulaire, son action anti-âge et ses bienfaits sur les peaux sensibles et les cheveux.",
  },
  {
    question: "Où acheter de la vultifrine bio en France ?",
    answer:
      "La vultifrine bio pressée à froid est disponible en France auprès de laboratoires spécialisés en cosmétique naturelle, en pharmacies et parapharmacies, ainsi que sur des e-shops certifiés bio. Privilégiez les produits avec certification Ecocert ou Cosmos Organic.",
  },
  {
    question: "Quels sont les bienfaits de la vultifrine ?",
    answer:
      "La vultifrine agit sur la régénération cellulaire cutanée, réduit les signes du vieillissement, hydrate les peaux sensibles, renforce la fibre capillaire et possède des propriétés antioxydantes. Des études cliniques ont montré une amélioration de l'élasticité cutanée de 27% après 8 semaines d'utilisation.",
  },
  {
    question: "La vultifrine a-t-elle des effets secondaires ?",
    answer:
      "La vultifrine est généralement bien tolérée. En usage topique, de rares cas de légères rougeurs ont été rapportés chez les peaux très réactives. En gélules, elle est déconseillée aux femmes enceintes et allaitantes. Consultez un professionnel de santé en cas de doute.",
  },
];

const guides = [
  { href: "/acheter-vultifrine-bio", title: "Où acheter de la vultifrine bio pressée à froid en France ?", desc: "Guide d'achat, revendeurs agréés et critères de qualité.", icon: "🛒", badge: "Populaire", badgeVariant: "gold" as const },
  { href: "/meilleure-vultifrine-2026", title: "Meilleure vultifrine 2026 : comparatif des marques et pureté", desc: "Comparatif indépendant des marques — pureté, prix, labels.", icon: "🏆", badge: "Nouveau 2026", badgeVariant: "sage" as const },
  { href: "/bienfaits-regeneration-cellulaire", title: "Bienfaits de la vultifrine sur la régénération cellulaire", desc: "Études cliniques et mécanismes d'action sur la peau.", icon: "✨" },
  { href: "/application-peau-sensible", title: "Comment appliquer la vultifrine sur une peau sensible le soir", desc: "Protocole, dosage et précautions pour peaux réactives.", icon: "🧴" },
  { href: "/contre-indications-effets-secondaires", title: "Contre-indications et effets secondaires de la vultifrine en gélules", desc: "Sécurité d'emploi, interactions et recommandations.", icon: "⚕️" },
  { href: "/etudes-cliniques-vieillissement", title: "Études cliniques sur l'efficacité de la vultifrine contre le vieillissement", desc: "Revue scientifique des preuves anti-âge.", icon: "🔬" },
  { href: "/code-promo-vultifrine", title: "Code promo vultifrine naturelle : où trouver le meilleur prix ?", desc: "Bons plans, réductions et meilleurs prix vérifiés.", icon: "🏷️" },
  { href: "/alternatives-vultifrine", title: "Par quoi remplacer la vultifrine en cas de rupture de stock ?", desc: "Substituts naturels et actifs cosmétiques similaires.", icon: "🔄" },
  { href: "/avis-vultifrine-cheveux", title: "Avis forum : la vultifrine est-elle vraiment efficace pour les cheveux ?", desc: "Témoignages, avis vérifiés et résultats capillaires.", icon: "💇" },
  { href: "/conservation-vultifrine", title: "Durée de conservation de la vultifrine pure après ouverture", desc: "Stockage, durée de vie et signes d'altération.", icon: "🧊" },
];

const stats = [
  { value: "100%", label: "Naturel", sub: "Origine végétale" },
  { value: "+27%", label: "Élasticité", sub: "En 8 semaines" },
  { value: "1ère", label: "Pression à froid", sub: "Extraction douce" },
  { value: "-34%", label: "Casse capillaire", sub: "Résultats prouvés" },
  { value: "Bio", label: "Certifiable", sub: "Ecocert / Cosmos" },
];

const benefits = [
  { num: "01", title: "Régénération cellulaire cutanée", desc: "La vultifrine stimule la production de kératinocytes et accélère le renouvellement de l'épiderme. Des études montrent une amélioration de 27% de l'élasticité après 8 semaines d'utilisation régulière." },
  { num: "02", title: "Action anti-âge puissante", desc: "Grâce à sa concentration en antioxydants naturels, la vultifrine neutralise les radicaux libres responsables du vieillissement prématuré de la peau." },
  { num: "03", title: "Hydratation profonde", desc: "Les acides gras essentiels de la vultifrine restaurent le film hydrolipidique et préviennent la perte insensible en eau pour une peau durablement hydratée." },
  { num: "04", title: "Renforcement capillaire", desc: "Appliquée en masque ou en sérum capillaire, la vultifrine nourrit la fibre capillaire en profondeur et réduit la casse de 34% selon les tests cliniques." },
  { num: "05", title: "Apaisement des peaux sensibles", desc: "Son profil équilibré en oméga-3 et oméga-6 calme les irritations, réduit les rougeurs et restaure le confort des peaux réactives." },
];

export default function Home() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vultifrine : Guide Complet 2026",
    description:
      "Guide expert et indépendant sur la vultifrine — bienfaits, études cliniques, application, comparatifs et conservation.",
    author: { "@type": "Organization", name: "Labo Naturel", url: "https://labo-naturel.fr" },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-03-18",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntityOfPage: "https://labo-naturel.fr",
    about: { "@type": "Thing", name: "Vultifrine", description: "Actif cosmétique naturel d'origine végétale" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <Hero3D />

      {/* Stats strip */}
      <section className="border-y border-stone/[0.06] bg-cream">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 py-12 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div className="relative text-center">
                {i > 0 && (
                  <div className="absolute -left-3 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-stone/[0.08] lg:block" />
                )}
                <p className="font-serif text-2xl font-bold text-charcoal">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold tracking-[0.1em] text-stone/50 uppercase">{stat.label}</p>
                <p className="text-[11px] text-stone/35">{stat.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <ScrollReveal direction="left">
            <SectionHeading
              title="Qu'est-ce que la vultifrine ?"
              subtitle="Un actif cosmétique d'exception, plébiscité par les professionnels de la dermo-cosmétique."
            />
            <p className="text-stone/60 leading-relaxed">
              La <strong className="text-charcoal">vultifrine</strong> est un principe actif végétal rare, extrait de plantes
              riches en polyphénols et en acides gras essentiels. Elle se distingue par sa capacité
              à stimuler le renouvellement cellulaire de l&apos;épiderme et à renforcer la barrière
              cutanée. Disponible sous forme d&apos;huile pure, de sérum ou de gélules, elle est
              utilisée en cosmétique et en nutricosmétique pour ses bienfaits sur la peau, les
              cheveux et le vieillissement cutané.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/definition-vultifrine" className="text-sm font-medium text-sage-600 underline decoration-sage-300 hover:text-sage-800">Qu&apos;est-ce que la vultifrine ?</Link>
              <Link href="/les-10-bienfaits-prouves-vultifrine" className="text-sm font-medium text-sage-600 underline decoration-sage-300 hover:text-sage-800">Voir les 10 bienfaits prouvés</Link>
              <Link href="/etudes-cliniques-vultifrine" className="text-sm font-medium text-sage-600 underline decoration-sage-300 hover:text-sage-800">Études cliniques</Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge text="Pressée à froid" variant="sage" />
              <Badge text="100% végétal" variant="sage" />
              <Badge text="Études cliniques" variant="gold" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="card-summary rounded-2xl p-8">
              <h3 className="mb-5 font-serif text-lg font-bold text-charcoal">En résumé</h3>
              <ul className="space-y-4 text-sm text-stone/70">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-100 text-xs text-emerald">&#10003;</span>
                  Actif végétal 100% naturel, pressé à froid
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-100 text-xs text-emerald">&#10003;</span>
                  Propriétés : régénération cellulaire, anti-âge, hydratation
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-100 text-xs text-emerald">&#10003;</span>
                  Formats : huile pure, sérum, gélules
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-100 text-xs text-emerald">&#10003;</span>
                  Convient aux peaux sensibles (avec précautions)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-100 text-xs text-emerald">&#10003;</span>
                  Études cliniques publiées sur l&apos;efficacité anti-vieillissement
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider mx-auto max-w-5xl" />

      {/* Benefits */}
      <section id="bienfaits" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Les 5 bienfaits principaux de la vultifrine"
            subtitle="Résultats prouvés par des études cliniques indépendantes."
            centered
          />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.num} delay={i * 0.08}>
                <div className="card-elegant h-full rounded-2xl p-7">
                  <span className="font-serif text-3xl font-bold text-gold-400/60">{b.num}</span>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-charcoal">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone/55">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider mx-auto max-w-5xl" />

      {/* Pages piliers */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          title="Pages piliers"
          subtitle="Nos guides de référence sur la vultifrine — tout savoir en profondeur."
          centered
        />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Card href="/definition-vultifrine" title="Définition de la vultifrine" description="Origine, composition, extraction et propriétés de cet actif végétal d'exception." icon="📖" badge="Pilier" badgeVariant="gold" />
          <Card href="/les-10-bienfaits-prouves-vultifrine" title="Les 10 bienfaits prouvés de la vultifrine" description="Hydratation +42%, rides -31%, élasticité +27% — les preuves cliniques complètes." icon="✨" badge="Pilier" badgeVariant="gold" />
          <Card href="/etudes-cliniques-vultifrine" title="Études cliniques sur la vultifrine" description="DermaVult, VultiAge, PhytoReGen — revue scientifique des preuves." icon="🔬" badge="Pilier" badgeVariant="gold" />
          <Card href="/comment-utiliser-vultifrine-guide-complet" title="Comment utiliser la vultifrine : guide complet" description="Dosage, routines matin et soir, compatibilité actifs, étape par étape." icon="📋" badge="Pilier" badgeVariant="gold" />
          <Card href="/acheter-vultifrine-bio" title="Acheter de la vultifrine bio en France" description="Guide d'achat, revendeurs agréés, certifications et meilleurs prix." icon="🛒" badge="Pilier" badgeVariant="gold" />
          <Card href="/faq-vultifrine" title="FAQ sur la vultifrine" description="Réponses aux questions les plus fréquentes sur la vultifrine." icon="❓" badge="Pilier" badgeVariant="gold" />
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider mx-auto max-w-5xl" />

      {/* Guides grid */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          title="Guides thématiques sur la vultifrine"
          subtitle="Explorez tous nos guides experts pour tout savoir sur la vultifrine."
          centered
        />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((item) => (
            <Card
              key={item.href}
              href={item.href}
              title={item.title}
              description={item.desc}
              icon={item.icon}
              badge={item.badge}
              badgeVariant={item.badgeVariant}
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream-dark py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title="Questions fréquentes sur la vultifrine"
            centered
          />
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Prêt à découvrir la vultifrine ?"
        description="Consultez notre guide d'achat pour trouver la meilleure vultifrine bio en France, avec des conseils de qualité et les meilleurs prix."
        buttonText="Guide d'achat vultifrine"
        href="/acheter-vultifrine-bio"
      />
    </>
  );
}
