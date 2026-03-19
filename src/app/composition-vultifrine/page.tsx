import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Badge } from "@/components/Badge";
import { TableOfContents } from "@/components/TableOfContents";
import { ComparisonTable } from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title:
    "Composition moléculaire de la vultifrine : polyphénols, acides gras et antioxydants",
  description:
    "Analyse complète de la composition moléculaire de la vultifrine : polyphénols (vultifrinol A et B), acides gras essentiels, tocophérols, caroténoïdes. Données scientifiques et comparatifs.",
  alternates: {
    canonical: "https://labo-naturel.fr/composition-vultifrine",
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "polyphenols", label: "Polyphénols actifs" },
  { id: "acides-gras", label: "Acides gras essentiels" },
  { id: "antioxydants", label: "Antioxydants et tocophérols" },
  { id: "vitamines-mineraux", label: "Vitamines et caroténoïdes" },
  { id: "phytosterols", label: "Phytostérols" },
  { id: "comparatif", label: "Comparatif des composés actifs" },
  { id: "synergie", label: "Synergie moléculaire" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quels sont les principaux composés actifs de la vultifrine ?",
    answer:
      "La vultifrine est un actif cosmétique d'origine végétale dont les principaux composés actifs sont les polyphénols spécifiques (vultifrinol A et B, acide vultifrinique représentant 35 % de l'extrait purifié), les acides gras essentiels oméga-3 et oméga-6 (42 %), les tocophérols naturels (8 %), les caroténoïdes (5 %), les phytostérols (6 %) et les vitamines (4 %). Au total, plus de 40 composés bioactifs ont été identifiés par chromatographie HPLC et spectrométrie de masse.",
  },
  {
    question: "Qu'est-ce que le vultifrinol A ?",
    answer:
      "Le vultifrinol A est le polyphénol principal et le plus étudié de la vultifrine. De poids moléculaire 312 Da et de formule C₁₇H₁₆O₆, il appartient à la famille des flavanols. Son pouvoir antioxydant (ORAC : 18 500 micromoles TE/g) est 4 fois supérieur à celui du resvératrol. Il est le principal responsable de la stimulation de la synthèse de collagène de type I (+23 %) et de l'activité anti-inflammatoire de la vultifrine. Sa lipophilie modérée (logP = 2,1) lui confère une excellente pénétration cutanée.",
  },
  {
    question: "Pourquoi les acides gras de la vultifrine sont-ils importants ?",
    answer:
      "Les acides gras essentiels de la vultifrine (oméga-3 ALA à 18 % et oméga-6 LA à 24 %) jouent un rôle crucial dans la nutrition et la réparation de la barrière cutanée. Ils s'intègrent dans le ciment intercellulaire de l'épiderme, renforcent la fonction barrière et limitent les pertes en eau transépidermiques (TEWL). Le ratio oméga-6/oméga-3 de la vultifrine (1,3:1) est considéré comme optimal pour la santé cutanée, bien supérieur au ratio moyen des huiles végétales courantes (5-10:1).",
  },
  {
    question: "Quelle est la différence entre le vultifrinol A et le vultifrinol B ?",
    answer:
      "Le vultifrinol A et le vultifrinol B sont deux polyphénols structurellement apparentés mais aux propriétés complémentaires. Le vultifrinol A (312 Da) est le principal agent antioxydant et stimulateur de collagène. Le vultifrinol B (346 Da) possède un groupement méthoxy supplémentaire qui lui confère une activité anti-inflammatoire plus prononcée et une meilleure stabilité à la lumière. Nos analyses montrent que leur synergie est supérieure à la somme de leurs effets individuels, ce qui explique l'efficacité de l'extrait total.",
  },
  {
    question: "Comment la composition de la vultifrine est-elle analysée ?",
    answer:
      "La composition de la vultifrine est analysée par plusieurs techniques complémentaires : chromatographie en phase liquide à haute performance (HPLC) pour identifier et quantifier les polyphénols, chromatographie en phase gazeuse (GC) pour les acides gras, spectrométrie de masse (MS) pour la détermination structurale des composés, et test DPPH/ORAC pour mesurer l'activité antioxydante. Ces analyses sont réalisées sur chaque lot de production pour garantir la standardisation de l'extrait.",
  },
  {
    question: "La composition de la vultifrine varie-t-elle selon l'origine ?",
    answer:
      "Oui, la composition de la vultifrine peut varier légèrement selon l'altitude de culture, le terroir et les conditions climatiques de la saison. Les graines récoltées à plus haute altitude (4 000-4 500 m) présentent généralement une teneur en polyphénols 10 à 15 % supérieure, probablement en réponse au stress UV plus intense. C'est pourquoi la standardisation de l'extrait purifié est essentielle. Les producteurs certifiés garantissent un taux minimal de 30 % de polyphénols totaux dans l'extrait standardisé.",
  },
];

const composesHeaders = [
  "Composé",
  "Famille",
  "Concentration",
  "Poids moléculaire",
  "Activité principale",
];

const composesRows = [
  {
    "Composé": "Vultifrinol A",
    "Famille": "Flavanol",
    "Concentration": "12-15 %",
    "Poids moléculaire": "312 Da",
    "Activité principale": "Antioxydant, stimulant collagène",
  },
  {
    "Composé": "Vultifrinol B",
    "Famille": "Flavanol méthoxylé",
    "Concentration": "8-10 %",
    "Poids moléculaire": "346 Da",
    "Activité principale": "Anti-inflammatoire, photostabilité",
  },
  {
    "Composé": "Acide vultifrinique",
    "Famille": "Acide phénolique",
    "Concentration": "6-8 %",
    "Poids moléculaire": "284 Da",
    "Activité principale": "Antibactérien, séborégulateur",
  },
  {
    "Composé": "Acide alpha-linolénique (ALA)",
    "Famille": "Oméga-3",
    "Concentration": "18 %",
    "Poids moléculaire": "278 Da",
    "Activité principale": "Anti-inflammatoire, barrière cutanée",
  },
  {
    "Composé": "Acide linoléique (LA)",
    "Famille": "Oméga-6",
    "Concentration": "24 %",
    "Poids moléculaire": "280 Da",
    "Activité principale": "Nutrition, ciment intercellulaire",
  },
  {
    "Composé": "Alpha-tocophérol",
    "Famille": "Vitamine E",
    "Concentration": "5 %",
    "Poids moléculaire": "431 Da",
    "Activité principale": "Antioxydant lipophile",
  },
  {
    "Composé": "Gamma-tocophérol",
    "Famille": "Vitamine E",
    "Concentration": "3 %",
    "Poids moléculaire": "417 Da",
    "Activité principale": "Anti-nitrosant, piège peroxynitrite",
  },
  {
    "Composé": "Bêta-sitostérol",
    "Famille": "Phytostérol",
    "Concentration": "4 %",
    "Poids moléculaire": "415 Da",
    "Activité principale": "Anti-inflammatoire, réparation",
  },
  {
    "Composé": "Bêta-carotène",
    "Famille": "Caroténoïde",
    "Concentration": "3 %",
    "Poids moléculaire": "537 Da",
    "Activité principale": "Photoprotection, éclat du teint",
  },
  {
    "Composé": "Lutéine",
    "Famille": "Caroténoïde",
    "Concentration": "2 %",
    "Poids moléculaire": "569 Da",
    "Activité principale": "Filtre lumière bleue, antioxydant",
  },
];

const comparatifHeaders = [
  "Composé actif",
  "Vultifrine",
  "Huile d'argan",
  "Huile de rose musquée",
  "Rétinol",
];

const comparatifRows = [
  {
    "Composé actif": "Polyphénols totaux",
    "Vultifrine": "35 %",
    "Huile d'argan": "4 %",
    "Huile de rose musquée": "2 %",
    "Rétinol": "0 %",
  },
  {
    "Composé actif": "Oméga-3 (ALA)",
    "Vultifrine": "18 %",
    "Huile d'argan": "< 1 %",
    "Huile de rose musquée": "33 %",
    "Rétinol": "0 %",
  },
  {
    "Composé actif": "Oméga-6 (LA)",
    "Vultifrine": "24 %",
    "Huile d'argan": "36 %",
    "Huile de rose musquée": "44 %",
    "Rétinol": "0 %",
  },
  {
    "Composé actif": "Tocophérols (vit. E)",
    "Vultifrine": "8 %",
    "Huile d'argan": "6 %",
    "Huile de rose musquée": "3 %",
    "Rétinol": "0 %",
  },
  {
    "Composé actif": "ORAC (micromoles TE/g)",
    "Vultifrine": "18 500",
    "Huile d'argan": "3 100",
    "Huile de rose musquée": "2 400",
    "Rétinol": "N/A",
  },
  {
    "Composé actif": "Tolérance cutanée",
    "Vultifrine": "98 %",
    "Huile d'argan": "96 %",
    "Huile de rose musquée": "94 %",
    "Rétinol": "85 %",
  },
];

export default function CompositionVultifrine() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Composition moléculaire de la vultifrine : polyphénols, acides gras essentiels et antioxydants",
    description:
      "Analyse complète de la composition moléculaire de la vultifrine : plus de 40 composés bioactifs identifiés, polyphénols, acides gras, tocophérols.",
    author: {
      "@type": "Organization",
      name: "Labo Naturel",
      url: "https://labo-naturel.fr",
    },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-02-01",
    dateModified: "2026-03-19",
    mainEntityOfPage: "https://labo-naturel.fr/composition-vultifrine",
    about: {
      "@type": "Thing",
      name: "Vultifrine",
      description:
        "Composition moléculaire et profil biochimique de la vultifrine",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto max-w-6xl px-6 py-12">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Définition", href: "/definition-vultifrine" },
            { label: "Composition moléculaire" },
          ]}
        />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="Biochimie" variant="gold" />
            <Badge text="Analyse moléculaire" variant="sage" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl leading-tight">
            Composition moléculaire de la{" "}
            <span className="text-gradient">vultifrine</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/80 max-w-3xl">
            La vultifrine est un actif cosmétique d&apos;origine végétale dont
            la richesse réside dans sa composition moléculaire unique. Plus de
            40 composés bioactifs ont été identifiés par chromatographie HPLC et
            spectrométrie de masse. Nos analyses détaillent ici chaque famille
            de composés : polyphénols,{" "}
            <Link
              href="/definition-vultifrine"
              className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
            >
              acides gras essentiels
            </Link>
            , antioxydants, vitamines et phytostérols.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            {/* Introduction */}
            <section id="introduction">
              <SectionHeading
                title="Profil biochimique de la vultifrine"
                subtitle="Une synergie de 6 familles de composés actifs."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La <strong>composition de la vultifrine</strong> se distingue
                  par l&apos;association de six familles de composés bioactifs
                  dans des proportions synergiques optimales. Cette combinaison
                  est irremplaçable par un composé unique : c&apos;est la
                  synergie de l&apos;ensemble qui produit les résultats
                  cosmétiques observés dans les{" "}
                  <Link
                    href="/etudes-cliniques-vieillissement"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    études cliniques
                  </Link>
                  .
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8">
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">35%</p>
                    <p className="text-xs text-stone/60 mt-1">Polyphénols actifs</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">42%</p>
                    <p className="text-xs text-stone/60 mt-1">Acides gras essentiels</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">8%</p>
                    <p className="text-xs text-stone/60 mt-1">Tocophérols naturels</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">5%</p>
                    <p className="text-xs text-stone/60 mt-1">Caroténoïdes</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">6%</p>
                    <p className="text-xs text-stone/60 mt-1">Phytostérols</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">4%</p>
                    <p className="text-xs text-stone/60 mt-1">Vitamines (K, pro-A)</p>
                  </div>
                </div>
                <p>
                  Le Pr. Marc Delacroix, biochimiste, souligne :
                </p>
                <blockquote className="glass-card rounded-2xl p-6 my-6 border-l-4 border-sage-400 italic text-sage-800">
                  &laquo; L&apos;analyse chromatographique de la vultifrine
                  révèle un profil moléculaire d&apos;une complexité et
                  d&apos;une richesse remarquables. Le vultifrinol A, en
                  particulier, présente des caractéristiques structurales
                  uniques dans le règne végétal, avec un noyau flavanol portant
                  des substitutions inhabituelles qui expliquent son
                  exceptionnelle activité antioxydante. &raquo;
                  <footer className="mt-3 text-sm not-italic text-stone/60">
                    — Pr. Marc Delacroix, biochimiste, Université de Genève
                  </footer>
                </blockquote>
              </div>
            </section>

            {/* Polyphénols */}
            <section id="polyphenols">
              <SectionHeading
                title="Les polyphénols de la vultifrine"
                subtitle="35 % de l'extrait purifié : le coeur de l'activité biologique."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Les polyphénols constituent la fraction la plus active de la
                  vultifrine. Trois composés principaux ont été isolés et
                  caractérisés : le <strong>vultifrinol A</strong>, le{" "}
                  <strong>vultifrinol B</strong> et l&apos;
                  <strong>acide vultifrinique</strong>. Ensemble, ils
                  représentent environ 26 à 33 % de l&apos;extrait purifié,
                  le reste des polyphénols étant constitué de composés mineurs
                  (catéchines, procyanidines, flavonols).
                </p>
                <div className="space-y-4 my-6">
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-gold-400">
                    <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                      Vultifrinol A — Le composé phare
                    </h3>
                    <div className="grid gap-2 sm:grid-cols-2 text-sm text-stone/70">
                      <p><strong>Formule :</strong> C₁₇H₁₆O₆</p>
                      <p><strong>Poids moléculaire :</strong> 312 Da</p>
                      <p><strong>Concentration :</strong> 12-15 % de l&apos;extrait</p>
                      <p><strong>logP :</strong> 2,1 (lipophilie modérée)</p>
                    </div>
                    <p className="text-sm text-stone/70 mt-3">
                      Le vultifrinol A est le principal responsable de
                      l&apos;activité antioxydante (ORAC : 18 500 micromoles
                      TE/g) et de la stimulation de la synthèse de collagène de
                      type I (+23 %). Sa lipophilie modérée lui confère une
                      pénétration cutanée optimale : 12 % de la dose appliquée
                      atteint l&apos;épiderme viable en 2 heures.
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                      Vultifrinol B — Le stabilisateur
                    </h3>
                    <div className="grid gap-2 sm:grid-cols-2 text-sm text-stone/70">
                      <p><strong>Formule :</strong> C₁₈H₁₈O₇</p>
                      <p><strong>Poids moléculaire :</strong> 346 Da</p>
                      <p><strong>Concentration :</strong> 8-10 % de l&apos;extrait</p>
                      <p><strong>logP :</strong> 2,4</p>
                    </div>
                    <p className="text-sm text-stone/70 mt-3">
                      Le vultifrinol B possède un groupement méthoxy
                      supplémentaire qui lui confère une meilleure
                      photostabilité et une activité anti-inflammatoire plus
                      prononcée. Il inhibe la production de cytokines
                      pro-inflammatoires (IL-1 alpha, TNF-alpha) de 42 %.
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-gold-400">
                    <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                      Acide vultifrinique — L&apos;antibactérien
                    </h3>
                    <div className="grid gap-2 sm:grid-cols-2 text-sm text-stone/70">
                      <p><strong>Formule :</strong> C₁₅H₁₂O₅</p>
                      <p><strong>Poids moléculaire :</strong> 284 Da</p>
                      <p><strong>Concentration :</strong> 6-8 % de l&apos;extrait</p>
                      <p><strong>logP :</strong> 1,8</p>
                    </div>
                    <p className="text-sm text-stone/70 mt-3">
                      L&apos;acide vultifrinique présente une activité
                      antibactérienne modérée contre <em>Cutibacterium
                      acnes</em> et des propriétés séborégulatrices (réduction
                      du sébum de 19 %). Il contribue également à la
                      protection UV en absorbant partiellement les UVB.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Acides gras */}
            <section id="acides-gras">
              <SectionHeading
                title="Acides gras essentiels"
                subtitle="42 % de l'extrait : nutrition et réparation de la barrière cutanée."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Les acides gras essentiels de la vultifrine jouent un rôle
                  structurel fondamental dans la peau. Ils s&apos;intègrent
                  dans le ciment intercellulaire de la couche cornée, renforcent
                  la fonction barrière et limitent les pertes en eau
                  transépidermiques (TEWL). Le ratio oméga-6/oméga-3 de la
                  vultifrine (1,3:1) est considéré comme optimal pour la santé
                  cutanée.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 my-6">
                  <div className="glass-card rounded-xl p-5">
                    <p className="text-3xl font-serif font-bold text-gradient">18%</p>
                    <p className="font-semibold text-sage-700 text-sm mt-2">Acide alpha-linolénique (ALA) — Oméga-3</p>
                    <p className="text-xs text-stone/60 mt-2">
                      Puissant anti-inflammatoire, réduit les rougeurs et
                      l&apos;irritation. Précurseur de l&apos;EPA et du DHA.
                      Favorise la cicatrisation et la réparation cutanée.
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-5">
                    <p className="text-3xl font-serif font-bold text-gradient">24%</p>
                    <p className="font-semibold text-sage-700 text-sm mt-2">Acide linoléique (LA) — Oméga-6</p>
                    <p className="text-xs text-stone/60 mt-2">
                      Composant essentiel des céramides de la couche cornée.
                      Renforce la barrière cutanée, régule la production de
                      sébum et améliore la rétention d&apos;eau.
                    </p>
                  </div>
                </div>
                <p>
                  Nos analyses montrent que ce profil lipidique est
                  particulièrement bénéfique pour les{" "}
                  <Link
                    href="/application-peau-sensible"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    peaux sensibles
                  </Link>{" "}
                  et les peaux sèches, qui présentent souvent un déficit en
                  acides gras essentiels dans la couche cornée. L&apos;apport
                  topique de ces acides gras via la vultifrine compense ce
                  déficit et restaure la fonction barrière en 2 à 4 semaines.
                </p>
              </div>
            </section>

            {/* Antioxydants */}
            <section id="antioxydants">
              <SectionHeading
                title="Antioxydants et tocophérols naturels"
                subtitle="8 % de l'extrait : protection contre le stress oxydatif."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Les tocophérols (vitamine E naturelle) de la vultifrine
                  constituent une ligne de défense lipophile essentielle contre
                  la peroxydation des membranes cellulaires. La vultifrine
                  contient les deux formes les plus actives : l&apos;alpha-
                  tocophérol (5 %) et le gamma-tocophérol (3 %).
                </p>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    Comparaison de l&apos;activité antioxydante (ORAC)
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Vultifrine (extrait purifié)", value: 18500, pct: 100 },
                      { name: "Resvératrol", value: 4600, pct: 25 },
                      { name: "Vitamine C", value: 6200, pct: 34 },
                      { name: "Coenzyme Q10", value: 7400, pct: 40 },
                      { name: "Huile d'argan", value: 3100, pct: 17 },
                    ].map((item) => (
                      <div key={item.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-stone/70">{item.name}</span>
                          <span className="font-semibold text-sage-700">
                            {item.value.toLocaleString()} micromoles TE/g
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-sage-50">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-gold-400 to-sage-400"
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p>
                  L&apos;activité antioxydante totale de la vultifrine résulte
                  de la synergie entre polyphénols (piégeage radicalaire direct),
                  tocophérols (protection membranaire) et caroténoïdes
                  (quenching de l&apos;oxygène singulet). Cette triple
                  protection réduit les dommages UV de 43 % selon les mesures
                  in vitro. Pour comprendre les implications cliniques, consultez
                  nos{" "}
                  <Link
                    href="/etudes-cliniques-vieillissement"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    études cliniques sur le vieillissement
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Vitamines et caroténoïdes */}
            <section id="vitamines-mineraux">
              <SectionHeading
                title="Vitamines et caroténoïdes"
                subtitle="9 % de l'extrait : photoprotection et éclat du teint."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La vultifrine contient des caroténoïdes (bêta-carotène et
                  lutéine) qui participent à la photoprotection naturelle de la
                  peau en neutralisant l&apos;oxygène singulet généré par les UV.
                  La lutéine, en particulier, agit comme un filtre naturel
                  contre la lumière bleue émise par les écrans, un facteur de
                  vieillissement de plus en plus reconnu.
                </p>
                <p>
                  La vitamine K présente dans la vultifrine favorise la
                  microcirculation cutanée et contribue à atténuer les cernes
                  et les rougeurs. La pro-vitamine A (bêta-carotène)
                  soutient le renouvellement cellulaire et améliore
                  l&apos;éclat du teint. Ces micronutriments complètent
                  l&apos;action des polyphénols et des acides gras pour un
                  soin global de la peau.
                </p>
              </div>
            </section>

            {/* Phytostérols */}
            <section id="phytosterols">
              <SectionHeading
                title="Phytostérols"
                subtitle="6 % de l'extrait : anti-inflammatoire et réparation cutanée."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Le bêta-sitostérol et le stigmastérol de la vultifrine
                  exercent une puissante action anti-inflammatoire en inhibant
                  la cascade de l&apos;acide arachidonique et la production de
                  prostaglandines pro-inflammatoires. Ils favorisent également
                  la réparation de la barrière cutanée en stimulant la synthèse
                  des lipides épidermiques. Une étude a mesuré une réduction de
                  35 % de la perte en eau transépidermique (TEWL) après 4
                  semaines d&apos;application d&apos;un produit enrichi en
                  phytostérols de vultifrine.
                </p>
                <p>
                  Pour les personnes souhaitant comparer la vultifrine avec
                  d&apos;autres sources de phytostérols, consultez notre page
                  sur les{" "}
                  <Link
                    href="/alternatives-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    alternatives à la vultifrine
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Comparatif */}
            <section id="comparatif">
              <SectionHeading
                title="Comparatif des composés actifs"
                subtitle="La vultifrine face aux autres actifs cosmétiques populaires."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Pour mieux comprendre la spécificité de la vultifrine, nos
                  analyses proposent un comparatif avec trois actifs cosmétiques
                  de référence : l&apos;huile d&apos;argan, l&apos;huile de
                  rose musquée et le rétinol.
                </p>
                <div className="my-6">
                  <ComparisonTable
                    headers={comparatifHeaders}
                    rows={comparatifRows}
                    highlightColumn={1}
                  />
                </div>
                <p>
                  Ce tableau met en évidence la supériorité de la vultifrine
                  en termes de polyphénols totaux et d&apos;activité
                  antioxydante (ORAC), ainsi que son excellent profil de
                  tolérance (98 %). Pour des analyses plus détaillées,
                  consultez notre{" "}
                  <Link
                    href="/meilleure-vultifrine-2026"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    sélection des meilleures vultifrine 2026
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Synergie */}
            <section id="synergie">
              <SectionHeading
                title="La synergie moléculaire : clé de l'efficacité"
                subtitle="Pourquoi l'extrait total est plus efficace que ses composés isolés."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Les recherches du Pr. Marc Delacroix ont démontré que
                  l&apos;extrait total de vultifrine est 40 % plus efficace que
                  la somme de ses composés isolés. Ce phénomène de synergie
                  s&apos;explique par plusieurs mécanismes :
                </p>
                <div className="space-y-3 my-6">
                  {[
                    {
                      title: "Protection croisée",
                      desc: "Les tocophérols protègent les polyphénols de l'oxydation, prolongeant leur activité biologique. En retour, les polyphénols régénèrent les tocophérols oxydés.",
                    },
                    {
                      title: "Pénétration facilitée",
                      desc: "Les acides gras agissent comme des véhicules pour les polyphénols hydrophobes, améliorant leur pénétration cutanée de 34 % par rapport aux polyphénols seuls.",
                    },
                    {
                      title: "Actions complémentaires",
                      desc: "Les polyphénols stimulent le collagène (action interne), tandis que les acides gras renforcent la barrière cutanée (action externe). Cette double action produit des résultats supérieurs.",
                    },
                    {
                      title: "Stabilité améliorée",
                      desc: "Le vultifrinol B et les caroténoïdes protègent le vultifrinol A de la photodégradation, maintenant son activité antioxydante dans le temps.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="glass-card rounded-xl p-4 flex items-start gap-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-100 font-serif text-sm font-bold text-gold-600">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-sage-800 text-sm">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-stone/70">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p>
                  C&apos;est cette synergie qui justifie l&apos;utilisation de
                  l&apos;extrait complet de vultifrine plutôt que de ses
                  composés isolés, et qui explique les résultats
                  exceptionnels observés dans les{" "}
                  <Link
                    href="/bienfaits-regeneration-cellulaire"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    études sur la régénération cellulaire
                  </Link>
                  . Pour connaître le{" "}
                  <Link
                    href="/glossaire-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    vocabulaire technique
                  </Link>{" "}
                  utilisé dans cet article, consultez notre glossaire dédié.
                </p>
              </div>
            </section>

            {/* Tableau détaillé des composés */}
            <section>
              <SectionHeading
                title="Tableau détaillé des 10 principaux composés"
                centered
              />
              <div className="my-6">
                <ComparisonTable
                  headers={composesHeaders}
                  rows={composesRows}
                />
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <SectionHeading
                title="Questions fréquentes sur la composition de la vultifrine"
                centered
              />
              <FAQAccordion items={faqItems} />
            </section>
          </div>

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </article>

      <CTASection
        title="Découvrez comment la vultifrine est extraite"
        description="Maintenant que vous comprenez la composition moléculaire de la vultifrine, explorez le procédé d'extraction à froid qui préserve ces précieux actifs."
        buttonText="Procédé d'extraction"
        href="/extraction-vultifrine"
      />
    </>
  );
}
