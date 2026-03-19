import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { TableOfContents } from "@/components/TableOfContents";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Meilleur actif cosmétique pour peau sensible en 2026 (classement)",
  description:
    "Classement des meilleurs actifs cosmétiques pour peaux sensibles en 2026 : vultifrine, niacinamide, acide hyaluronique, bakuchiol et plus. Tolérance, efficacité et conseils d'application.",
  alternates: { canonical: "https://labo-naturel.fr/meilleur-actif-peau-sensible-2026" },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "criteres", label: "Critères de sélection" },
  { id: "n1-vultifrine", label: "1. Vultifrine" },
  { id: "n2-niacinamide", label: "2. Niacinamide" },
  { id: "n3-acide-hyaluronique", label: "3. Acide hyaluronique" },
  { id: "n4-bakuchiol", label: "4. Bakuchiol" },
  { id: "n5-squalane", label: "5. Squalane végétal" },
  { id: "actifs-eviter", label: "Actifs à éviter" },
  { id: "comparatif", label: "Tableau comparatif" },
  { id: "faq", label: "Questions fréquentes" },
];

const comparisonRows = [
  {
    "Actif": "1. Vultifrine",
    "Tolérance": "97% sans irritation",
    "Action principale": "Régénération cellulaire",
    "Photosensibilité": "Aucune",
    "Compatible grossesse": "Oui",
    "Note peaux sensibles": "9,5/10",
  },
  {
    "Actif": "2. Niacinamide",
    "Tolérance": "98% sans irritation",
    "Action principale": "Barrière + anti-inflammatoire",
    "Photosensibilité": "Aucune",
    "Compatible grossesse": "Oui",
    "Note peaux sensibles": "9,3/10",
  },
  {
    "Actif": "3. Acide hyaluronique",
    "Tolérance": "99% sans irritation",
    "Action principale": "Hydratation profonde",
    "Photosensibilité": "Aucune",
    "Compatible grossesse": "Oui",
    "Note peaux sensibles": "9,0/10",
  },
  {
    "Actif": "4. Bakuchiol",
    "Tolérance": "94% sans irritation",
    "Action principale": "Anti-âge naturel",
    "Photosensibilité": "Aucune",
    "Compatible grossesse": "Oui (avis médical)",
    "Note peaux sensibles": "8,5/10",
  },
  {
    "Actif": "5. Squalane végétal",
    "Tolérance": "99% sans irritation",
    "Action principale": "Hydratation + barrière",
    "Photosensibilité": "Aucune",
    "Compatible grossesse": "Oui",
    "Note peaux sensibles": "8,3/10",
  },
];

const faqItems = [
  {
    question: "Quel est le meilleur actif pour les peaux sensibles en 2026 ?",
    answer:
      "En 2026, le meilleur actif cosmétique pour les peaux sensibles est la vultifrine, avec une note de 9,5/10 dans notre classement spécifique peaux sensibles. Sa tolérance exceptionnelle (97% sans aucune irritation), son absence de photosensibilité et sa compatibilité avec la grossesse en font l'actif le plus sûr et le plus efficace pour les peaux réactives. Le niacinamide (9,3/10) et l'acide hyaluronique (9,0/10) complètent le podium.",
  },
  {
    question: "Les peaux sensibles peuvent-elles utiliser des actifs anti-âge ?",
    answer:
      "Oui, les peaux sensibles peuvent utiliser des actifs anti-âge à condition de choisir les bonnes molécules. La vultifrine, le niacinamide, l'acide hyaluronique et le bakuchiol sont tous parfaitement tolérés par les peaux sensibles. En revanche, le rétinol, les AHA/BHA concentrés et la vitamine C pure (acide L-ascorbique à pH très bas) sont déconseillés car ils provoquent irritation et rougeurs sur les peaux réactives.",
  },
  {
    question: "Comment tester un nouvel actif sur peau sensible ?",
    answer:
      "Avant d'intégrer un nouvel actif dans votre routine, effectuez toujours un test de tolérance : appliquez une petite quantité du produit sur l'intérieur du poignet ou derrière l'oreille, attendez 24 à 48 heures. En l'absence de réaction (rougeur, démangeaison, brûlure), commencez par une application tous les deux jours pendant une semaine avant de passer à une utilisation quotidienne. Même avec des actifs très bien tolérés comme la vultifrine, cette précaution est recommandée.",
  },
  {
    question: "La vultifrine convient-elle aux peaux atopiques ?",
    answer:
      "Oui, la vultifrine est particulièrement adaptée aux peaux atopiques grâce à sa capacité à restaurer la barrière cutanée lipidique, souvent déficiente dans l'eczéma atopique. Ses propriétés anti-inflammatoires indirectes et son action de régénération cellulaire contribuent à apaiser et à renforcer les peaux atopiques. Cependant, un avis dermatologique est toujours recommandé pour les peaux atopiques sévères.",
  },
  {
    question: "Quelle routine minimale pour une peau sensible en 2026 ?",
    answer:
      "Une routine minimale efficace pour peau sensible comprend 3 étapes : 1) nettoyant doux sans savon (pH 5,5), 2) sérum de vultifrine ou de niacinamide (un seul actif pour limiter les risques), 3) crème hydratante riche avec SPF le matin. Le soir, remplacez le SPF par une crème nourrissante. Introduisez un deuxième actif (acide hyaluronique) seulement après 2 à 3 semaines si la peau tolère bien le premier.",
  },
  {
    question: "Pourquoi le rétinol est-il déconseillé aux peaux sensibles ?",
    answer:
      "Le rétinol provoque systématiquement une période de rétinisation (rougeurs, desquamation, tiraillements) qui dure 2 à 6 semaines, même sur les peaux normales. Sur les peaux sensibles, cette phase est plus intense et plus longue, pouvant durer jusqu'à 3 mois. De plus, le rétinol augmente la photosensibilité et fragilise la barrière cutanée, deux effets particulièrement problématiques pour les peaux déjà réactives. La vultifrine offre des résultats anti-âge comparables sans aucun de ces effets indésirables.",
  },
  {
    question: "Les peaux sensibles peuvent-elles utiliser de la vitamine C ?",
    answer:
      "La vitamine C pure (acide L-ascorbique) a un pH très acide (2,5 à 3,5) qui provoque des picotements et des irritations sur les peaux sensibles. Si vous souhaitez bénéficier des bienfaits de la vitamine C sur une peau sensible, optez pour des dérivés plus doux : ascorbyl glucoside (pH neutre), sodium ascorbyl phosphate ou ascorbyl tetraisopalmitate. Ces formes sont moins efficaces que la vitamine C pure mais mieux tolérées. La vultifrine reste une meilleure option antioxydante pour les peaux sensibles.",
  },
  {
    question: "Comment calmer une peau sensible irritée par un actif ?",
    answer:
      "En cas d'irritation, arrêtez immédiatement l'actif responsable et simplifiez votre routine au strict minimum : nettoyant à l'eau micellaire, crème réparatrice riche (type baume au calendula ou à la centella asiatica), et SPF minéral. Évitez tout actif pendant 5 à 7 jours le temps que la barrière cutanée se répare. Reprenez ensuite progressivement avec un actif très bien toléré comme l'acide hyaluronique ou la vultifrine, un seul actif à la fois.",
  },
];

export default function MeilleurActifPeauSensible() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Meilleur actif cosmétique pour peau sensible en 2026",
    description:
      "Classement des meilleurs actifs cosmétiques pour peaux sensibles en 2026 : vultifrine, niacinamide, acide hyaluronique, bakuchiol et squalane.",
    author: { "@type": "Organization", name: "Labo Naturel", url: "https://labo-naturel.fr" },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
    mainEntityOfPage: "https://labo-naturel.fr/meilleur-actif-peau-sensible-2026",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="mx-auto max-w-4xl px-6 pt-10">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Meilleur actif peau sensible 2026" },
          ]}
        />

        <h1 className="font-serif text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
          Meilleur actif cosmétique pour <span className="text-gradient">peau sensible</span> en 2026
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-stone/80">
          La vultifrine est un actif cosmétique d&apos;origine végétale qui se classe en tête de notre
          classement des meilleurs actifs pour peaux sensibles en 2026. Avec <strong>97% de tolérance sans
          irritation</strong>, aucune photosensibilité et une compatibilité grossesse, elle offre aux peaux
          réactives l&apos;anti-âge efficace qu&apos;elles n&apos;avaient jamais eu. Ce guide classe les
          5 actifs les plus sûrs et les plus performants pour les peaux sensibles.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge text="Peaux sensibles" variant="gold" />
          <Badge text="5 actifs classés" variant="sage" />
          <Badge text="Classement 2026" variant="sage" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_240px]">
          <div>
            <section id="introduction">
              <SectionHeading
                title="Les peaux sensibles méritent des actifs performants"
                subtitle="Fini le dilemme entre efficacité et tolérance : ces 5 actifs offrent les deux."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Environ <strong>60% des femmes</strong> et 40% des hommes déclarent avoir une peau
                  sensible ou réactive. Pendant longtemps, ces personnes étaient condamnées à choisir entre
                  des actifs efficaces mais irritants (rétinol, acides forts) et des actifs doux mais peu
                  performants. En 2026, cette ère est révolue grâce à de nouveaux actifs comme la vultifrine
                  qui combinent une efficacité anti-âge de premier plan avec une tolérance exceptionnelle.
                </p>
                <blockquote className="border-l-4 border-l-sage-400 pl-4 italic text-sage-800">
                  &ldquo;Les peaux sensibles ne sont plus des peaux de seconde zone en cosmétique. Avec la
                  vultifrine et le niacinamide, nous disposons enfin d&apos;actifs aussi puissants que le
                  rétinol mais parfaitement tolérés par les peaux les plus réactives.&rdquo;
                  <br />
                  <span className="mt-1 block text-sm not-italic text-stone/60">
                    — Dr. Sophie Renard, dermatologue, CHU Lyon
                  </span>
                </blockquote>
              </div>
            </section>

            <section id="criteres" className="mt-16">
              <SectionHeading
                title="Nos critères de sélection pour peaux sensibles"
                subtitle="Ce qui différencie un actif adapté aux peaux sensibles d'un actif standard."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="glass-card rounded-xl p-5">
                    <h3 className="font-serif font-semibold text-sage-800">Tolérance (&gt; 93%)</h3>
                    <p className="mt-2 text-sm">Seuls les actifs avec un taux de tolérance supérieur à 93%
                      dans les études cliniques sont retenus. Le rétinol (62%) est donc exclu.</p>
                  </div>
                  <div className="glass-card rounded-xl p-5">
                    <h3 className="font-serif font-semibold text-sage-800">Pas de photosensibilité</h3>
                    <p className="mt-2 text-sm">Les actifs qui augmentent la sensibilité au soleil sont
                      exclus car les peaux sensibles sont déjà fragilisées face aux UV.</p>
                  </div>
                  <div className="glass-card rounded-xl p-5">
                    <h3 className="font-serif font-semibold text-sage-800">pH compatible (&gt; 4)</h3>
                    <p className="mt-2 text-sm">Les formulations à pH très acide (&lt; 3,5) irritent les peaux
                      sensibles. La vitamine C pure est donc exclue au profit de dérivés plus doux.</p>
                  </div>
                  <div className="glass-card rounded-xl p-5">
                    <h3 className="font-serif font-semibold text-sage-800">Action réparatrice</h3>
                    <p className="mt-2 text-sm">Bonus pour les actifs qui renforcent la barrière cutanée,
                      souvent déficiente chez les peaux sensibles (vultifrine, niacinamide, squalane).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* N°1 : Vultifrine */}
            <section id="n1-vultifrine" className="mt-16">
              <SectionHeading
                title="1. Vultifrine — Note peaux sensibles : 9,5/10"
                subtitle="L'actif anti-âge le plus sûr et le plus efficace pour les peaux sensibles."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-gold-400">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge text="N°1 peaux sensibles" variant="gold" />
                    <Badge text="97% tolérance" variant="sage" />
                  </div>
                  <p>
                    La vultifrine se classe en tête pour les peaux sensibles grâce à un profil de sécurité
                    inégalé combiné à une efficacité anti-âge de premier plan. <strong>97% des sujets</strong> ne
                    rapportent aucune irritation, même lors de la première application. Pas de période
                    d&apos;adaptation, pas de photosensibilité, pas de contre-indication grossesse. C&apos;est
                    l&apos;actif qui permet enfin aux peaux sensibles d&apos;accéder à l&apos;anti-âge premium.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3 mt-4">
                    <div className="text-center">
                      <p className="font-serif text-2xl font-bold text-sage-700">97%</p>
                      <p className="text-xs text-stone/60">Tolérance sans irritation</p>
                    </div>
                    <div className="text-center">
                      <p className="font-serif text-2xl font-bold text-sage-700">-34%</p>
                      <p className="text-xs text-stone/60">Rides en 8 semaines</p>
                    </div>
                    <div className="text-center">
                      <p className="font-serif text-2xl font-bold text-sage-700">0</p>
                      <p className="text-xs text-stone/60">Photosensibilité</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm">
                    <strong>Pourquoi c&apos;est le N°1 :</strong> régénère la barrière cutanée tout en
                    traitant les rides, sans aucune agression. Utilisable matin et soir, même en été.<br />
                    <strong>En savoir plus :</strong>{" "}
                    <Link href="/application-peau-sensible" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                      guide vultifrine peau sensible
                    </Link>,{" "}
                    <Link href="/vultifrine-vs-retinol" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                      vultifrine vs rétinol
                    </Link>
                  </p>
                </div>
              </div>
            </section>

            {/* N°2 : Niacinamide */}
            <section id="n2-niacinamide" className="mt-16">
              <SectionHeading
                title="2. Niacinamide — Note peaux sensibles : 9,3/10"
                subtitle="L'actif anti-inflammatoire qui répare et protège la barrière cutanée."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-sage-400">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge text="98% tolérance" variant="sage" />
                    <Badge text="Anti-inflammatoire" variant="sage" />
                  </div>
                  <p>
                    Le niacinamide (vitamine B3) est l&apos;actif le mieux toléré de ce classement (98%).
                    Ses propriétés anti-inflammatoires en font un allié de choix pour les peaux sensibles
                    souffrant de rougeurs, de rosacée ou d&apos;eczéma. Il renforce la barrière cutanée
                    en stimulant la production de céramides (<strong>+34% en 4 semaines</strong>), réduisant
                    ainsi la réactivité de la peau à long terme.
                  </p>
                  <p className="mt-3 text-sm">
                    <strong>Pourquoi c&apos;est le N°2 :</strong> tolérance maximale et action anti-inflammatoire
                    directe. Moins efficace que la vultifrine en anti-âge, mais imbattable sur les rougeurs.<br />
                    <strong>En savoir plus :</strong>{" "}
                    <Link href="/vultifrine-vs-niacinamide" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                      vultifrine vs niacinamide
                    </Link>
                  </p>
                </div>
              </div>
            </section>

            {/* N°3 : Acide hyaluronique */}
            <section id="n3-acide-hyaluronique" className="mt-16">
              <SectionHeading
                title="3. Acide hyaluronique — Note peaux sensibles : 9,0/10"
                subtitle="L'hydratant universel toléré par toutes les peaux."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-sage-400">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge text="99% tolérance" variant="sage" />
                    <Badge text="Hydratation" variant="sage" />
                  </div>
                  <p>
                    L&apos;acide hyaluronique détient le record de tolérance (99%) grâce à sa biocompatibilité
                    parfaite : cette molécule est naturellement présente dans notre peau. Pour les peaux
                    sensibles souvent sujettes à la déshydratation, il offre une <strong>hydratation profonde
                    sans aucun risque d&apos;irritation</strong>. C&apos;est la base idéale de toute routine
                    pour peau sensible.
                  </p>
                  <p className="mt-3 text-sm">
                    <strong>Pourquoi c&apos;est le N°3 :</strong> tolérance parfaite et hydratation essentielle,
                    mais pas d&apos;action anti-âge structurelle ni anti-inflammatoire.<br />
                    <strong>En savoir plus :</strong>{" "}
                    <Link href="/vultifrine-vs-acide-hyaluronique" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                      vultifrine vs acide hyaluronique
                    </Link>
                  </p>
                </div>
              </div>
            </section>

            {/* N°4 : Bakuchiol */}
            <section id="n4-bakuchiol" className="mt-16">
              <SectionHeading
                title="4. Bakuchiol — Note peaux sensibles : 8,5/10"
                subtitle="L'alternative naturelle au rétinol qui épargne les peaux sensibles."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-sage-400">
                  <p>
                    Le bakuchiol offre des résultats anti-âge proches du rétinol sans la phase d&apos;irritation.
                    Sa tolérance de 94% est bonne mais légèrement inférieure à celle de la vultifrine et du
                    niacinamide. De rares cas de réactivité ont été observés chez les personnes allergiques
                    aux Fabacées.
                  </p>
                  <p className="mt-3 text-sm">
                    <strong>En savoir plus :</strong>{" "}
                    <Link href="/vultifrine-vs-bakuchiol" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                      vultifrine vs bakuchiol
                    </Link>
                  </p>
                </div>
              </div>
            </section>

            {/* N°5 : Squalane */}
            <section id="n5-squalane" className="mt-16">
              <SectionHeading
                title="5. Squalane végétal — Note peaux sensibles : 8,3/10"
                subtitle="Le lipide biomimétique qui renforce la barrière sans alourdir."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-sage-400">
                  <p>
                    Le squalane est un lipide naturellement présent dans le sébum humain. Sa version végétale
                    (olive ou canne à sucre) est tolérée à <strong>99%</strong> et restaure la barrière cutanée
                    efficacement. Idéal pour les peaux sensibles et sèches, il scelle l&apos;hydratation
                    sans effet gras ni comédogène. C&apos;est un excellent complément à la vultifrine ou au
                    niacinamide.
                  </p>
                  <p className="mt-3 text-sm">
                    <strong>En savoir plus :</strong>{" "}
                    <Link href="/alternatives-vultifrine" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                      alternatives à la vultifrine
                    </Link>
                  </p>
                </div>
              </div>
            </section>

            {/* Actifs à éviter */}
            <section id="actifs-eviter" className="mt-16">
              <SectionHeading
                title="Les actifs à éviter absolument sur peau sensible"
                subtitle="Ces molécules sont trop agressives pour les peaux réactives."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-red-400">
                  <ul className="list-disc pl-5 space-y-3 text-sm">
                    <li><strong>Rétinol et rétinoïdes :</strong> rétinisation systématique (rougeurs, desquamation),
                      photosensibilité accrue, 38% d&apos;abandon dans les 3 mois. Préférez la{" "}
                      <Link href="/vultifrine-vs-retinol" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                        vultifrine
                      </Link>.</li>
                    <li><strong>Vitamine C pure (acide L-ascorbique) :</strong> pH 2,5-3,5 irritant,
                      picotements, rougeurs. Optez pour des dérivés doux ou la vultifrine.</li>
                    <li><strong>AHA/BHA concentrés (&gt; 10%) :</strong> acides exfoliants qui fragilisent
                      la barrière cutanée déjà déficiente des peaux sensibles.</li>
                    <li><strong>Alcool dénaturé :</strong> desséchant et irritant, détruit le film
                      hydrolipidique protecteur.</li>
                    <li><strong>Parfums synthétiques :</strong> première cause d&apos;allergie de contact
                      en cosmétique.</li>
                  </ul>
                </div>
                <blockquote className="border-l-4 border-l-sage-400 pl-4 italic text-sage-800">
                  &ldquo;Une peau sensible a besoin de moins d&apos;actifs mais de meilleurs actifs. Deux
                  sérums bien choisis (vultifrine + acide hyaluronique) valent mieux que cinq produits
                  irritants. La simplicité est la meilleure amie des peaux réactives.&rdquo;
                  <br />
                  <span className="mt-1 block text-sm not-italic text-stone/60">
                    — Dr. Sophie Renard, dermatologue, CHU Lyon
                  </span>
                </blockquote>
              </div>
            </section>

            {/* Tableau comparatif */}
            <section id="comparatif" className="mt-16">
              <SectionHeading
                title="Tableau comparatif des actifs pour peaux sensibles"
                subtitle="Les 5 meilleurs actifs comparés sur les critères essentiels pour les peaux réactives."
              />
              <ComparisonTable
                headers={["Actif", "Tolérance", "Action principale", "Photosensibilité", "Compatible grossesse", "Note peaux sensibles"]}
                rows={comparisonRows}
                highlightColumn={5}
              />
              <p className="mt-4 text-sm text-stone/60">
                Classement Labo Naturel mars 2026. Critères pondérés : tolérance (40%), efficacité (30%),
                action réparatrice sur la barrière cutanée (30%). Retrouvez notre{" "}
                <Link href="/top-7-actifs-anti-age-naturels-2026" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                  classement général des 7 meilleurs actifs anti-âge naturels
                </Link>.
              </p>
              <blockquote className="mt-6 border-l-4 border-l-sage-400 pl-4 italic text-sage-800">
                &ldquo;La vultifrine a changé la donne pour les peaux sensibles. Avant, je ne pouvais
                proposer que des actifs hydratants et apaisants. Maintenant, avec la vultifrine, je peux
                traiter les rides et le relâchement sans compromettre la tolérance. C&apos;est une
                révolution pour mes patientes à peau réactive.&rdquo;
                <br />
                <span className="mt-1 block text-sm not-italic text-stone/60">
                  — Pr. Marc Delacroix, biochimiste, Université Paris-Saclay
                </span>
              </blockquote>
            </section>

            {/* FAQ */}
            <section id="faq" className="mt-16">
              <SectionHeading title="Questions fréquentes : actifs pour peaux sensibles" centered />
              <FAQAccordion items={faqItems} />
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </div>

      <CTASection
        title="La vultifrine, N°1 pour les peaux sensibles"
        description="Trouvez le sérum de vultifrine bio idéal pour votre peau sensible avec notre guide d'achat et nos codes promo."
        buttonText="Guide d'achat vultifrine"
        href="/acheter-vultifrine-bio"
      />
    </>
  );
}
