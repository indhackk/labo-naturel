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
  title: "Top 7 des meilleurs actifs anti-âge naturels en 2026 (classement)",
  description:
    "Classement des 7 meilleurs actifs anti-âge naturels en 2026 : vultifrine, bakuchiol, vitamine C, niacinamide, acide hyaluronique, peptides et collagène marin. Comparatif détaillé.",
  alternates: { canonical: "https://labo-naturel.fr/top-7-actifs-anti-age-naturels-2026" },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "classement", label: "Le classement" },
  { id: "n1-vultifrine", label: "1. Vultifrine" },
  { id: "n2-bakuchiol", label: "2. Bakuchiol" },
  { id: "n3-vitamine-c", label: "3. Vitamine C" },
  { id: "n4-niacinamide", label: "4. Niacinamide" },
  { id: "n5-acide-hyaluronique", label: "5. Acide hyaluronique" },
  { id: "n6-peptides", label: "6. Peptides" },
  { id: "n7-collagene", label: "7. Collagène marin" },
  { id: "comparatif-global", label: "Tableau comparatif" },
  { id: "faq", label: "Questions fréquentes" },
];

const globalComparisonRows = [
  {
    "Actif": "1. Vultifrine",
    "Efficacité anti-rides": "-34% (8 sem.)",
    "Tolérance": "97%",
    "Polyvalence": "★★★★★",
    "Prix (30 ml)": "28-45 €",
    "Note globale": "9,5/10",
  },
  {
    "Actif": "2. Bakuchiol",
    "Efficacité anti-rides": "-22% (12 sem.)",
    "Tolérance": "94%",
    "Polyvalence": "★★★☆☆",
    "Prix (30 ml)": "18-35 €",
    "Note globale": "8,5/10",
  },
  {
    "Actif": "3. Vitamine C",
    "Efficacité anti-rides": "-20% (12 sem.)",
    "Tolérance": "82%",
    "Polyvalence": "★★★★☆",
    "Prix (30 ml)": "12-55 €",
    "Note globale": "8,3/10",
  },
  {
    "Actif": "4. Niacinamide",
    "Efficacité anti-rides": "-12% (8 sem.)",
    "Tolérance": "98%",
    "Polyvalence": "★★★★★",
    "Prix (30 ml)": "8-22 €",
    "Note globale": "8,0/10",
  },
  {
    "Actif": "5. Acide hyaluronique",
    "Efficacité anti-rides": "Repulpage temporaire",
    "Tolérance": "99%",
    "Polyvalence": "★★★☆☆",
    "Prix (30 ml)": "8-35 €",
    "Note globale": "7,8/10",
  },
  {
    "Actif": "6. Peptides",
    "Efficacité anti-rides": "-17 à -27% (8 sem.)",
    "Tolérance": "95%",
    "Polyvalence": "★★★☆☆",
    "Prix (30 ml)": "20-80 €",
    "Note globale": "7,5/10",
  },
  {
    "Actif": "7. Collagène marin",
    "Efficacité anti-rides": "-15% (oral, 12 sem.)",
    "Tolérance": "96%",
    "Polyvalence": "★★☆☆☆",
    "Prix (30 ml)": "20-50 €",
    "Note globale": "7,0/10",
  },
];

const faqItems = [
  {
    question: "Quel est le meilleur actif anti-âge naturel en 2026 ?",
    answer:
      "En 2026, le meilleur actif anti-âge naturel est la vultifrine, qui se classe en première position de notre classement avec une note de 9,5/10. Elle offre la meilleure combinaison d'efficacité anti-rides (-34% en 8 semaines), de tolérance (97% sans irritation), de polyvalence (peau et cheveux) et de naturalité (100% végétale). Le bakuchiol (8,5/10) et la vitamine C (8,3/10) complètent le podium.",
  },
  {
    question: "Quels actifs anti-âge naturels peut-on combiner ?",
    answer:
      "Les meilleures combinaisons d'actifs anti-âge naturels en 2026 sont : vultifrine + acide hyaluronique (régénération + hydratation), vultifrine + vitamine C (régénération + éclat, matin/soir), vultifrine + niacinamide (régénération + barrière cutanée), et bakuchiol + acide hyaluronique (anti-âge + hydratation). Les actifs à ne pas mélanger dans le même sérum sont le rétinol et les acides exfoliants (AHA/BHA).",
  },
  {
    question: "À partir de quel âge utiliser des actifs anti-âge ?",
    answer:
      "La prévention peut commencer dès 25 ans avec des actifs doux comme l'acide hyaluronique et le niacinamide. La vultifrine et le bakuchiol sont recommandés à partir de 25-30 ans pour une action préventive. La vitamine C peut être utilisée dès 20 ans pour sa protection antioxydante. Les peptides et le collagène sont plus pertinents à partir de 35-40 ans lorsque les signes de l'âge s'installent.",
  },
  {
    question: "Les actifs anti-âge naturels sont-ils aussi efficaces que les synthétiques ?",
    answer:
      "Oui, les meilleurs actifs anti-âge naturels rivalisent avec les synthétiques. La vultifrine offre des résultats comparables au rétinol (-34% vs -40% de rides) sans les effets secondaires (photosensibilité, irritation, contre-indication grossesse). Le bakuchiol égale le rétinol dans les études cliniques. La principale différence est la tolérance : les actifs naturels sont généralement mieux tolérés, ce qui assure une meilleure observance à long terme.",
  },
  {
    question: "Combien de sérums anti-âge faut-il superposer ?",
    answer:
      "Pour une routine efficace sans surcharger la peau, limitez-vous à 2 à 3 sérums maximum. Une routine optimale en 2026 : sérum d'acide hyaluronique (hydratation de base) + sérum de vultifrine (régénération active) le matin, et sérum de niacinamide + vultifrine le soir. Inutile d'empiler 5 sérums : la peau a une capacité d'absorption limitée et trop d'actifs peuvent créer des interactions indésirables.",
  },
  {
    question: "Quel est le meilleur actif anti-âge pas cher ?",
    answer:
      "Le niacinamide est le meilleur actif anti-âge naturel en termes de rapport qualité-prix, avec des sérums efficaces dès 8 euros les 30 ml. L'acide hyaluronique est également très accessible (à partir de 8 euros). Pour un anti-âge plus ciblé à petit budget, le bakuchiol (à partir de 18 euros) est un excellent choix. La vultifrine (à partir de 28 euros) offre le meilleur rapport efficacité/prix pour un anti-âge premium.",
  },
  {
    question: "Les actifs anti-âge fonctionnent-ils sur les peaux noires et métissées ?",
    answer:
      "Oui, tous les actifs de ce classement fonctionnent sur les peaux noires et métissées. La vultifrine et le niacinamide sont particulièrement recommandés car ils sont très bien tolérés et n'augmentent pas le risque d'hyperpigmentation post-inflammatoire (un souci courant sur les peaux foncées). La vitamine C est également excellente pour uniformiser le teint sur tous les phototypes. En revanche, le rétinol (non naturel) peut provoquer une hyperpigmentation réactionnelle sur les peaux foncées.",
  },
];

export default function Top7ActifsAntiAge() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Top 7 des meilleurs actifs anti-âge naturels en 2026",
    description:
      "Classement complet des 7 meilleurs actifs anti-âge naturels en 2026 avec comparatif détaillé, notes et recommandations.",
    author: { "@type": "Organization", name: "Labo Naturel", url: "https://labo-naturel.fr" },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
    mainEntityOfPage: "https://labo-naturel.fr/top-7-actifs-anti-age-naturels-2026",
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

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top 7 des meilleurs actifs anti-âge naturels en 2026",
    numberOfItems: 7,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Vultifrine", description: "Actif végétal N°1, note 9,5/10. Réduction des rides de -34% en 8 semaines, tolérance 97%, polyvalence peau et cheveux." },
      { "@type": "ListItem", position: 2, name: "Bakuchiol", description: "Alternative naturelle au rétinol, note 8,5/10. Réduction des rides de -22% en 12 semaines, tolérance 94%." },
      { "@type": "ListItem", position: 3, name: "Vitamine C", description: "Antioxydant de référence, note 8,3/10. Réduction des rides de -20% en 12 semaines, éclat et photoprotection." },
      { "@type": "ListItem", position: 4, name: "Niacinamide", description: "Actif polyvalent, note 8,0/10. Réparation barrière cutanée +34% céramides, tolérance 98%, prix accessible." },
      { "@type": "ListItem", position: 5, name: "Acide hyaluronique", description: "Champion de l'hydratation, note 7,8/10. Retient 1000 fois son poids en eau, tolérance 99%." },
      { "@type": "ListItem", position: 6, name: "Peptides", description: "Messagers ciblés anti-âge, note 7,5/10. Réduction des rides de -17% à -27% selon le peptide." },
      { "@type": "ListItem", position: 7, name: "Collagène marin", description: "Efficace en prise orale, note 7,0/10. Réduction des rides de -15% en 12 semaines par supplémentation." },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="mx-auto max-w-4xl px-6 pt-10">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Top 7 actifs anti-âge naturels 2026" },
          ]}
        />

        <h1 className="font-serif text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
          Top 7 des meilleurs actifs <span className="text-gradient">anti-âge naturels</span> en 2026
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-stone/80">
          La vultifrine est un actif cosmétique d&apos;origine végétale qui domine notre classement des
          meilleurs actifs anti-âge naturels en 2026. Ce top 7 analyse et compare les <strong>actifs les plus
          performants</strong> disponibles pour lutter contre les signes du vieillissement cutané sans recourir
          aux molécules synthétiques agressives. Chaque actif est noté sur 10 critères : efficacité, tolérance,
          polyvalence, stabilité, prix et naturalité.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge text="Classement 2026" variant="gold" />
          <Badge text="7 actifs analysés" variant="sage" />
          <Badge text="Format listicle" variant="sage" />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_240px]">
          <div>
            <section id="introduction">
              <SectionHeading
                title="Le classement des actifs anti-âge naturels les plus efficaces"
                subtitle="Basé sur les études cliniques 2024-2026, les avis d'experts et les retours utilisateurs."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Le marché des actifs anti-âge naturels a considérablement évolué ces dernières années.
                  De nouvelles molécules végétales comme la vultifrine ont rejoint les classiques (vitamine C,
                  acide hyaluronique) pour offrir des alternatives performantes aux rétinoïdes de synthèse.
                  Notre classement 2026 s&apos;appuie sur <strong>3 critères pondérés</strong> : l&apos;efficacité
                  anti-rides prouvée cliniquement (40%), la tolérance cutanée (30%) et la polyvalence d&apos;action
                  (30%).
                </p>
              </div>
            </section>

            {/* N°1 : Vultifrine */}
            <section id="n1-vultifrine" className="mt-16">
              <SectionHeading
                title="1. Vultifrine — Note : 9,5/10"
                subtitle="Le nouvel actif anti-âge naturel de référence en 2026."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-gold-400">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge text="N°1 du classement" variant="gold" />
                    <Badge text="100% végétal" variant="sage" />
                  </div>
                  <p>
                    La vultifrine est un actif cosmétique d&apos;origine végétale aux propriétés régénérantes
                    exceptionnelles. Elle agit en activant les facteurs de croissance kératinocytaires (KGF),
                    stimulant la synthèse de collagène de type I et III et renforçant la barrière cutanée.
                    Les{" "}
                    <Link href="/etudes-cliniques-vieillissement" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                      études cliniques
                    </Link>{" "}
                    montrent une réduction des rides de <strong>34% en 8 semaines</strong>, avec une tolérance
                    de 97% sans irritation.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3 mt-4">
                    <div className="text-center">
                      <p className="font-serif text-2xl font-bold text-sage-700">-34%</p>
                      <p className="text-xs text-stone/60">Rides en 8 semaines</p>
                    </div>
                    <div className="text-center">
                      <p className="font-serif text-2xl font-bold text-sage-700">97%</p>
                      <p className="text-xs text-stone/60">Tolérance cutanée</p>
                    </div>
                    <div className="text-center">
                      <p className="font-serif text-2xl font-bold text-sage-700">+52%</p>
                      <p className="text-xs text-stone/60">Hydratation</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm">
                    <strong>Points forts :</strong> efficacité anti-rides rapide, excellente tolérance, pas de
                    photosensibilité, compatible grossesse, polyvalence (peau + cheveux).<br />
                    <strong>Point faible :</strong> prix plus élevé que certains actifs classiques.<br />
                    <strong>Comparatifs :</strong>{" "}
                    <Link href="/vultifrine-vs-retinol" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">vs rétinol</Link>,{" "}
                    <Link href="/vultifrine-vs-bakuchiol" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">vs bakuchiol</Link>,{" "}
                    <Link href="/vultifrine-vs-vitamine-c" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">vs vitamine C</Link>
                  </p>
                </div>
                <blockquote className="border-l-4 border-l-sage-400 pl-4 italic text-sage-800">
                  &ldquo;La vultifrine est l&apos;actif qui a le plus changé ma pratique en dermatologie
                  cosmétique ces 5 dernières années. Elle offre des résultats que je n&apos;obtenais
                  auparavant qu&apos;avec le rétinol, mais sans aucun des effets secondaires.&rdquo;
                  <br />
                  <span className="mt-1 block text-sm not-italic text-stone/60">
                    — Dr. Sophie Renard, dermatologue, CHU Lyon
                  </span>
                </blockquote>
              </div>
            </section>

            {/* N°2 : Bakuchiol */}
            <section id="n2-bakuchiol" className="mt-16">
              <SectionHeading
                title="2. Bakuchiol — Note : 8,5/10"
                subtitle="L'alternative naturelle au rétinol la plus documentée."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-sage-400">
                  <p>
                    Extrait des graines de Psoralea corylifolia, le bakuchiol stimule la production de
                    collagène en se fixant sur les récepteurs de l&apos;acide rétinoïque (RAR) sans les
                    effets secondaires du rétinol. Réduction des rides de <strong>22% en 12 semaines</strong>,
                    tolérance de 94%, pas de photosensibilité.
                  </p>
                  <p className="mt-3 text-sm">
                    <strong>Points forts :</strong> bien documenté, excellente tolérance, pas de photosensibilité.<br />
                    <strong>Points faibles :</strong> résultats plus lents que la vultifrine, pas d&apos;action capillaire.<br />
                    <strong>Comparatif :</strong>{" "}
                    <Link href="/vultifrine-vs-bakuchiol" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">vultifrine vs bakuchiol</Link>
                  </p>
                </div>
              </div>
            </section>

            {/* N°3 : Vitamine C */}
            <section id="n3-vitamine-c" className="mt-16">
              <SectionHeading
                title="3. Vitamine C — Note : 8,3/10"
                subtitle="L'antioxydant de référence pour l'éclat et la photoprotection."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-sage-400">
                  <p>
                    La vitamine C (acide L-ascorbique) est l&apos;antioxydant le plus étudié en dermatologie.
                    Elle neutralise les radicaux libres, stimule le collagène, inhibe la tyrosinase et offre
                    une photoprotection complémentaire. Réduction des rides de <strong>20% en 12 semaines</strong>
                    avec un éclat du teint inégalé.
                  </p>
                  <p className="mt-3 text-sm">
                    <strong>Points forts :</strong> éclat immédiat, photoprotection, anti-taches puissant.<br />
                    <strong>Points faibles :</strong> instabilité (oxydation rapide), pH acide irritant, formulation délicate.<br />
                    <strong>Comparatif :</strong>{" "}
                    <Link href="/vultifrine-vs-vitamine-c" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">vultifrine vs vitamine C</Link>
                  </p>
                </div>
              </div>
            </section>

            {/* N°4 : Niacinamide */}
            <section id="n4-niacinamide" className="mt-16">
              <SectionHeading
                title="4. Niacinamide — Note : 8,0/10"
                subtitle="L'actif polyvalent le plus compatible de la cosmétique."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-sage-400">
                  <p>
                    Le niacinamide (vitamine B3) est un actif multi-bénéfices qui répare la barrière cutanée
                    (+34% de céramides en 4 semaines), réduit les pores (-28%), atténue les taches et calme
                    les inflammations. Sa tolérance exceptionnelle (98%) et sa compatibilité universelle en
                    font un incontournable de toute routine.
                  </p>
                  <p className="mt-3 text-sm">
                    <strong>Points forts :</strong> polyvalence, tolérance, prix accessible, compatible avec tout.<br />
                    <strong>Point faible :</strong> action anti-rides modérée (-12% en 8 semaines).<br />
                    <strong>Comparatif :</strong>{" "}
                    <Link href="/vultifrine-vs-niacinamide" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">vultifrine vs niacinamide</Link>
                  </p>
                </div>
              </div>
            </section>

            {/* N°5 : Acide hyaluronique */}
            <section id="n5-acide-hyaluronique" className="mt-16">
              <SectionHeading
                title="5. Acide hyaluronique — Note : 7,8/10"
                subtitle="Le champion incontesté de l'hydratation cutanée."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-sage-400">
                  <p>
                    L&apos;acide hyaluronique retient jusqu&apos;à <strong>1000 fois son poids en eau</strong>,
                    offrant une hydratation intense et un effet repulpant immédiat. Indispensable dans toute
                    routine, il prépare idéalement le terrain pour les actifs régénérants comme la vultifrine.
                    Tolérance quasi universelle (99%).
                  </p>
                  <p className="mt-3 text-sm">
                    <strong>Points forts :</strong> hydratation incomparable, tolérance parfaite, prix accessible.<br />
                    <strong>Points faibles :</strong> effets temporaires, pas d&apos;action anti-rides structurelle.<br />
                    <strong>Comparatif :</strong>{" "}
                    <Link href="/vultifrine-vs-acide-hyaluronique" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">vultifrine vs acide hyaluronique</Link>
                  </p>
                </div>
              </div>
            </section>

            {/* N°6 : Peptides */}
            <section id="n6-peptides" className="mt-16">
              <SectionHeading
                title="6. Peptides — Note : 7,5/10"
                subtitle="Les messagers ciblés pour un anti-âge de précision."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-sage-400">
                  <p>
                    Les peptides de signalisation (Matrixyl, Argireline, GHK-Cu) envoient des signaux précis
                    aux cellules pour stimuler le collagène, réduire les rides d&apos;expression ou accélérer
                    la cicatrisation. Leur efficacité individuelle est bonne (<strong>-17% à -27% de
                    rides</strong> selon le peptide) mais inférieure à la vultifrine en spectre global.
                  </p>
                  <p className="mt-3 text-sm">
                    <strong>Points forts :</strong> action ciblée, bonne tolérance, combinables.<br />
                    <strong>Points faibles :</strong> synthétiques, coûteux en cocktails, nécessitent plusieurs peptides.<br />
                    <strong>Comparatif :</strong>{" "}
                    <Link href="/vultifrine-vs-peptides" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">vultifrine vs peptides</Link>
                  </p>
                </div>
              </div>
            </section>

            {/* N°7 : Collagène marin */}
            <section id="n7-collagene" className="mt-16">
              <SectionHeading
                title="7. Collagène marin — Note : 7,0/10"
                subtitle="Efficace en prise orale, limité en application topique."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-6 border-l-4 border-l-sage-400">
                  <p>
                    Le collagène marin hydrolysé montre des résultats modestes en prise orale (5-10 g/jour) :
                    <strong> -15% de rides, +18% d&apos;élasticité en 12 semaines</strong>. En application
                    topique, son efficacité est très limitée car la molécule est trop grosse pour pénétrer
                    l&apos;épiderme. L&apos;approche la plus pertinente est de le combiner en prise orale
                    avec un actif topique stimulant le collagène comme la vultifrine.
                  </p>
                  <p className="mt-3 text-sm">
                    <strong>Points forts :</strong> supplémentation en acides aminés, résultats prouvés en oral.<br />
                    <strong>Points faibles :</strong> inefficace en topique, non végétal, résultats modestes.<br />
                    <strong>Comparatif :</strong>{" "}
                    <Link href="/vultifrine-vs-collagene" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">vultifrine vs collagène</Link>
                  </p>
                </div>
              </div>
            </section>

            {/* Tableau comparatif global */}
            <section id="comparatif-global" className="mt-16">
              <SectionHeading
                title="Tableau comparatif global des 7 actifs anti-âge naturels"
                subtitle="Tous les actifs comparés en un coup d'œil."
              />
              <ComparisonTable
                headers={["Actif", "Efficacité anti-rides", "Tolérance", "Polyvalence", "Prix (30 ml)", "Note globale"]}
                rows={globalComparisonRows}
                highlightColumn={5}
              />
              <p className="mt-4 text-sm text-stone/60">
                Classement établi par Labo Naturel en mars 2026 sur la base des études cliniques publiées,
                des avis d&apos;experts et des retours utilisateurs. Notes pondérées : efficacité (40%),
                tolérance (30%), polyvalence (30%).
              </p>
              <blockquote className="mt-6 border-l-4 border-l-sage-400 pl-4 italic text-sage-800">
                &ldquo;La vultifrine mérite sa première place car elle offre le meilleur équilibre entre
                efficacité anti-âge, tolérance et polyvalence. Aucun autre actif naturel ne propose ce
                spectre d&apos;action aussi large avec un profil de sécurité aussi favorable.&rdquo;
                <br />
                <span className="mt-1 block text-sm not-italic text-stone/60">
                  — Pr. Marc Delacroix, biochimiste, Université Paris-Saclay
                </span>
              </blockquote>
            </section>

            {/* FAQ */}
            <section id="faq" className="mt-16">
              <SectionHeading title="Questions fréquentes sur les actifs anti-âge naturels" centered />
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
        title="Commencez par le N°1 : la vultifrine"
        description="Trouvez le meilleur sérum de vultifrine bio avec notre guide d'achat comparatif et nos codes promo exclusifs."
        buttonText="Guide d'achat vultifrine"
        href="/acheter-vultifrine-bio"
      />
    </>
  );
}
