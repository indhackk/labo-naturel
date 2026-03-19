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
    "Extraction de la vultifrine : pression à froid, température et rendement",
  description:
    "Guide complet du procédé d'extraction de la vultifrine par pression à froid : étapes, contrôle de température (< 42°C), rendement (4-6 %), qualité et certification.",
  alternates: {
    canonical: "https://labo-naturel.fr/extraction-vultifrine",
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "recolte", label: "Récolte des graines" },
  { id: "sechage", label: "Séchage et préparation" },
  { id: "pression-froid", label: "Pression à froid" },
  { id: "purification", label: "Filtration et purification" },
  { id: "controle-qualite", label: "Contrôle qualité" },
  { id: "comparatif-methodes", label: "Comparatif des méthodes" },
  { id: "rendement", label: "Rendement et prix" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Comment la vultifrine est-elle extraite ?",
    answer:
      "La vultifrine est un actif cosmétique d'origine végétale extrait par pression mécanique à froid des graines de Vultifria pleniflora. Les graines sont récoltées manuellement, séchées naturellement pendant 7 à 10 jours, puis pressées à une température ne dépassant jamais 42°C. L'huile brute obtenue est ensuite filtrée et purifiée par adsorption sélective pour concentrer les polyphénols actifs. Ce procédé 100 % mécanique garantit la préservation intégrale des principes actifs thermosensibles.",
  },
  {
    question: "Pourquoi l'extraction à froid est-elle préférable ?",
    answer:
      "L'extraction à froid (< 42°C) est préférable car elle préserve les composés thermosensibles de la vultifrine, notamment les polyphénols et les tocophérols, qui se dégradent rapidement au-dessus de 60°C. Les analyses comparatives montrent que l'extraction à froid conserve 95 % des polyphénols actifs, contre seulement 40-60 % pour les méthodes à chaud. De plus, la pression à froid n'utilise aucun solvant chimique, garantissant un extrait 100 % naturel compatible avec les certifications bio.",
  },
  {
    question: "Quel est le rendement d'extraction de la vultifrine ?",
    answer:
      "Le rendement d'extraction de la vultifrine par pression à froid est de 4 à 6 % en huile brute à partir des graines sèches. Cela signifie que 100 kg de graines produisent 4 à 6 litres d'huile de vultifrine. Après purification et standardisation, le rendement en extrait concentré est encore plus faible (1,5 à 2,5 %). Ce faible rendement, combiné à la rareté de la plante source et à la récolte manuelle, explique le prix premium de la vultifrine par rapport aux huiles végétales courantes.",
  },
  {
    question: "L'extraction au CO2 supercritique est-elle utilisée ?",
    answer:
      "Oui, l'extraction au CO2 supercritique est une méthode alternative utilisée par certains producteurs premium de vultifrine. Cette technique utilise le dioxyde de carbone à haute pression (300 bar, 35°C) comme solvant, permettant une extraction sélective des polyphénols avec un rendement supérieur (8-10 %). L'extrait obtenu est plus concentré en actifs mais aussi plus coûteux. Nos analyses montrent que la différence d'efficacité clinique entre les deux méthodes est modeste (5-8 %), la pression à froid restant le meilleur rapport qualité-prix.",
  },
  {
    question: "Comment vérifier la qualité d'une extraction de vultifrine ?",
    answer:
      "La qualité de l'extraction se vérifie par plusieurs indicateurs : la concentration en polyphénols totaux (minimum 30 % pour un extrait purifié), l'indice de péroxyde (< 5 meq O2/kg, signe de fraîcheur), l'indice d'acide (< 2 mg KOH/g, signe de non-dégradation), la couleur (jaune doré clair pour l'huile fraîche), et les analyses HPLC confirmant la présence de vultifrinol A et B. Les produits certifiés Cosmos Organic ou Ecocert sont soumis à des contrôles indépendants garantissant ces paramètres.",
  },
  {
    question: "Le procédé d'extraction est-il respectueux de l'environnement ?",
    answer:
      "Oui, la pression à froid est l'un des procédés d'extraction les plus respectueux de l'environnement. Elle ne produit aucun déchet chimique, utilise peu d'énergie et ne nécessite ni solvants ni produits chimiques. Les résidus solides (tourteau de graines) sont valorisés comme engrais biologique ou alimentation animale. L'empreinte carbone de la production est estimée à 2,3 kg CO2/litre d'huile, soit 60 % de moins qu'une extraction par solvants. Les certifications bio imposent des critères environnementaux stricts à chaque étape.",
  },
];

const methodeHeaders = [
  "Critère",
  "Pression à froid",
  "CO2 supercritique",
  "Extraction par solvant",
];

const methodeRows = [
  {
    "Critère": "Température",
    "Pression à froid": "< 42°C",
    "CO2 supercritique": "35°C, 300 bar",
    "Extraction par solvant": "60-80°C",
  },
  {
    "Critère": "Rendement en huile",
    "Pression à froid": "4-6 %",
    "CO2 supercritique": "8-10 %",
    "Extraction par solvant": "12-15 %",
  },
  {
    "Critère": "Polyphénols conservés",
    "Pression à froid": "95 %",
    "CO2 supercritique": "98 %",
    "Extraction par solvant": "40-60 %",
  },
  {
    "Critère": "Solvants chimiques",
    "Pression à froid": "Aucun",
    "CO2 supercritique": "CO2 (inerte)",
    "Extraction par solvant": "Hexane ou éthanol",
  },
  {
    "Critère": "Certification bio",
    "Pression à froid": "Compatible",
    "CO2 supercritique": "Compatible",
    "Extraction par solvant": "Non compatible",
  },
  {
    "Critère": "Coût de production",
    "Pression à froid": "Moyen",
    "CO2 supercritique": "Élevé",
    "Extraction par solvant": "Faible",
  },
  {
    "Critère": "Impact environnemental",
    "Pression à froid": "Très faible",
    "CO2 supercritique": "Faible",
    "Extraction par solvant": "Élevé",
  },
];

export default function ExtractionVultifrine() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Extraction de la vultifrine : pression à froid, contrôle de température et rendement",
    description:
      "Guide complet du procédé d'extraction de la vultifrine par pression à froid. Étapes, températures, rendement, contrôle qualité et comparatif des méthodes.",
    author: {
      "@type": "Organization",
      name: "Labo Naturel",
      url: "https://labo-naturel.fr",
    },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-02-05",
    dateModified: "2026-03-19",
    mainEntityOfPage: "https://labo-naturel.fr/extraction-vultifrine",
    about: {
      "@type": "Thing",
      name: "Vultifrine",
      description:
        "Procédé d'extraction à froid de la vultifrine et contrôle qualité",
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
            { label: "Extraction de la vultifrine" },
          ]}
        />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="Procédé" variant="gold" />
            <Badge text="Extraction à froid" variant="sage" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl leading-tight">
            Extraction de la{" "}
            <span className="text-gradient">vultifrine</span> : procédé à froid
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/80 max-w-3xl">
            La vultifrine est un actif cosmétique d&apos;origine végétale dont
            la qualité dépend directement de son procédé d&apos;extraction. La
            pression mécanique à froid, réalisée à moins de 42°C, est la
            méthode de référence pour préserver l&apos;intégrité des{" "}
            <Link
              href="/composition-vultifrine"
              className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
            >
              composés bioactifs
            </Link>{" "}
            thermosensibles. Ce guide détaille chaque étape, du champ au flacon.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            {/* Introduction */}
            <section id="introduction">
              <SectionHeading
                title="Pourquoi le procédé d'extraction est déterminant"
                subtitle="La qualité de la vultifrine commence dans le champ et se joue à chaque étape."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Le procédé d&apos;extraction est le facteur le plus critique
                  pour la qualité finale de la vultifrine. Les polyphénols
                  spécifiques (vultifrinol A et B) et les acides gras
                  essentiels qui font la valeur de cet actif sont extrêmement
                  sensibles à la température, à l&apos;oxydation et à la
                  lumière. Un procédé mal maîtrisé peut détruire jusqu&apos;à
                  60 % des principes actifs.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">&lt;42°C</p>
                    <p className="text-xs text-stone/60 mt-1">Température max. d&apos;extraction</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">4-6%</p>
                    <p className="text-xs text-stone/60 mt-1">Rendement en huile brute</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">95%</p>
                    <p className="text-xs text-stone/60 mt-1">Polyphénols préservés</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">0</p>
                    <p className="text-xs text-stone/60 mt-1">Solvant chimique</p>
                  </div>
                </div>
                <p>
                  Nos analyses identifient cinq étapes clés dans le processus
                  d&apos;extraction de la vultifrine, de la récolte des graines
                  de{" "}
                  <Link
                    href="/definition-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    Vultifria pleniflora
                  </Link>{" "}
                  jusqu&apos;au contrôle qualité final. Chaque étape est
                  encadrée par des protocoles stricts conformes aux normes de{" "}
                  <Link
                    href="/certification-vultifrine-bio"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    certification biologique
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Récolte */}
            <section id="recolte">
              <SectionHeading
                title="Étape 1 : Récolte des graines"
                subtitle="Mars à mai, récolte manuelle à pleine maturité."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La récolte des graines de Vultifria pleniflora se déroule
                  entre mars et mai (automne austral), lorsque les fruits
                  atteignent leur pleine maturité. La maturité optimale est
                  déterminée par la couleur brune dorée de la capsule et la
                  dureté des graines au toucher. Une récolte trop précoce
                  réduit la teneur en polyphénols de 20 à 30 %, tandis
                  qu&apos;une récolte tardive augmente le risque
                  d&apos;oxydation au champ.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                    Points critiques de la récolte
                  </h3>
                  <ul className="space-y-2 text-sm text-stone/70">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                      Récolte manuelle exclusivement (préserve l&apos;intégrité des graines)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                      Altitude de récolte : 3 200-4 500 m (graines d&apos;altitude plus riches en polyphénols)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                      Rendement par plante : 15-25 g de graines par saison
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                      Tri manuel pour éliminer les graines endommagées ou immatures
                    </li>
                  </ul>
                </div>
                <p>
                  La récolte est réalisée en partenariat avec les communautés
                  andines locales selon des principes de commerce équitable.
                  Cette approche garantit des conditions de travail éthiques
                  et une rémunération juste des récoltants, conformément aux
                  exigences des{" "}
                  <Link
                    href="/certification-vultifrine-bio"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    certifications bio
                  </Link>
                  . L&apos;
                  <Link
                    href="/histoire-decouverte-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    histoire de cette collaboration
                  </Link>{" "}
                  remonte aux premières expéditions botaniques des années 1980.
                </p>
              </div>
            </section>

            {/* Séchage */}
            <section id="sechage">
              <SectionHeading
                title="Étape 2 : Séchage et préparation"
                subtitle="7 à 10 jours de séchage naturel pour atteindre le taux d'humidité optimal."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Après la récolte, les graines sont étalées en couches
                  minces sur des claies en bois ou en bambou et séchées
                  naturellement à l&apos;air libre pendant 7 à 10 jours.
                  L&apos;objectif est d&apos;atteindre un taux
                  d&apos;humidité inférieur à 8 %, seuil optimal pour la
                  pression à froid. Un séchage insuffisant (humidité &gt; 10 %)
                  favorise les moisissures et la contamination, tandis
                  qu&apos;un séchage excessif (humidité &lt; 5 %) rend les
                  graines trop dures et réduit le rendement d&apos;extraction.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    Paramètres du séchage
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl bg-sage-50/50 p-4 text-center">
                      <p className="text-xl font-serif font-bold text-gradient">7-10</p>
                      <p className="text-xs text-stone/60 mt-1">Jours de séchage</p>
                    </div>
                    <div className="rounded-xl bg-sage-50/50 p-4 text-center">
                      <p className="text-xl font-serif font-bold text-gradient">&lt;8%</p>
                      <p className="text-xs text-stone/60 mt-1">Humidité résiduelle cible</p>
                    </div>
                    <div className="rounded-xl bg-sage-50/50 p-4 text-center">
                      <p className="text-xl font-serif font-bold text-gradient">15-25°C</p>
                      <p className="text-xs text-stone/60 mt-1">Température de séchage</p>
                    </div>
                  </div>
                </div>
                <p>
                  Le séchage se fait à l&apos;ombre, à l&apos;abri du soleil
                  direct, pour éviter toute photo-oxydation prématurée des
                  polyphénols. Les graines sont retournées deux fois par jour
                  pour assurer un séchage homogène. Un contrôle hygrométrique
                  quotidien vérifie la progression du séchage.
                </p>
              </div>
            </section>

            {/* Pression à froid */}
            <section id="pression-froid">
              <SectionHeading
                title="Étape 3 : Pression mécanique à froid"
                subtitle="Le coeur du procédé : une extraction douce à moins de 42°C."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La pression mécanique à froid est l&apos;étape centrale de
                  l&apos;extraction de la vultifrine. Les graines sèches sont
                  introduites dans une presse à vis sans fin (expeller) dont
                  la température est constamment surveillée et maintenue en
                  dessous de 42°C. Ce seuil de température est critique : au-
                  delà de 45°C, le vultifrinol A commence à se dégrader ; au-
                  delà de 60°C, la perte de polyphénols atteint 40 à 60 %.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                    Contrôle de température durant l&apos;extraction
                  </h3>
                  <div className="space-y-3">
                    {[
                      { temp: "< 42°C", label: "Zone optimale", desc: "95 % des polyphénols préservés. Qualité premium.", color: "bg-sage-400" },
                      { temp: "42-50°C", label: "Zone de risque", desc: "Début de dégradation. 75-85 % des polyphénols conservés.", color: "bg-gold-400" },
                      { temp: "50-60°C", label: "Zone de dégradation", desc: "Perte significative. 50-70 % des polyphénols conservés.", color: "bg-gold-600" },
                      { temp: "> 60°C", label: "Zone critique", desc: "Destruction massive. Seulement 40-50 % des polyphénols.", color: "bg-red-400" },
                    ].map((item) => (
                      <div key={item.temp} className="flex items-center gap-4">
                        <span className={`h-3 w-3 rounded-full ${item.color} shrink-0`} />
                        <div className="flex-1">
                          <div className="flex justify-between items-baseline">
                            <span className="font-semibold text-sage-800 text-sm">{item.temp} — {item.label}</span>
                          </div>
                          <p className="text-xs text-stone/60">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p>
                  Le rendement de la pression à froid est de 4 à 6 % en huile
                  brute : 100 kg de graines sèches produisent 4 à 6 litres
                  d&apos;huile. Ce rendement est inférieur à celui des
                  méthodes par solvant (12-15 %), mais la qualité de
                  l&apos;extrait est incomparablement supérieure. Les résidus
                  solides (tourteau) sont valorisés comme engrais biologique,
                  dans une logique d&apos;économie circulaire.
                </p>
              </div>
            </section>

            {/* Purification */}
            <section id="purification">
              <SectionHeading
                title="Étape 4 : Filtration et purification"
                subtitle="Concentration des polyphénols par adsorption sélective."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  L&apos;huile brute obtenue par pression à froid contient la
                  vultifrine active à une concentration de 8 à 12 %. Pour
                  obtenir un extrait standardisé à 30-35 % de polyphénols,
                  une étape de purification est nécessaire.
                </p>
                <div className="space-y-3 my-6">
                  {[
                    {
                      step: "4a",
                      title: "Filtration primaire",
                      desc: "L'huile brute passe à travers un filtre à papier (5 microns) pour éliminer les particules solides, fragments de graines et débris. Cette étape améliore la clarté sans affecter la composition chimique.",
                    },
                    {
                      step: "4b",
                      title: "Décantation naturelle",
                      desc: "L'huile filtrée repose 48 à 72 heures dans des cuves en inox à température contrôlée (18°C). Les sédiments lourds se déposent au fond et sont éliminés par soutirage.",
                    },
                    {
                      step: "4c",
                      title: "Adsorption sélective",
                      desc: "Pour l'extrait purifié, l'huile passe sur une colonne d'adsorption qui retient sélectivement les polyphénols, permettant de les concentrer de 10 % à 30-35 %. Ce procédé physique n'utilise aucun solvant chimique.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="glass-card rounded-xl p-4 flex items-start gap-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-100 font-serif text-xs font-bold text-gold-600">
                        {item.step}
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
                  Le rendement global en extrait purifié est de 1,5 à 2,5 %
                  par rapport au poids initial des graines. Ce chiffre
                  illustre la rareté et la préciosité de la vultifrine
                  concentrée. Pour comprendre l&apos;impact de cette
                  concentration sur les{" "}
                  <Link
                    href="/bienfaits-regeneration-cellulaire"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    bienfaits régénérants
                  </Link>
                  , consultez notre page dédiée.
                </p>
              </div>
            </section>

            {/* Contrôle qualité */}
            <section id="controle-qualite">
              <SectionHeading
                title="Étape 5 : Contrôle qualité et standardisation"
                subtitle="Chaque lot analysé par HPLC avant mise sur le marché."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Le contrôle qualité est la dernière étape avant la
                  commercialisation de la vultifrine. Chaque lot de production
                  est soumis à une batterie d&apos;analyses pour vérifier sa
                  conformité aux spécifications et assurer la constance de la
                  qualité.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    Analyses réalisées sur chaque lot
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { test: "HPLC (polyphénols)", spec: "Vultifrinol A ≥ 12 %, total polyphénols ≥ 30 %", icon: "🔬" },
                      { test: "GC (acides gras)", spec: "ALA ≥ 16 %, LA ≥ 22 %, ratio ω6/ω3 ≤ 1,5", icon: "📊" },
                      { test: "Indice de péroxyde", spec: "< 5 meq O2/kg (fraîcheur)", icon: "⚗️" },
                      { test: "Indice d'acide", spec: "< 2 mg KOH/g (intégrité)", icon: "📈" },
                      { test: "Analyse microbiologique", spec: "Absence de pathogènes, levures < 100 UFC/g", icon: "🦠" },
                      { test: "Test de stabilité", spec: "Stabilité confirmée à 6 mois (40°C, 75 % HR)", icon: "🕐" },
                    ].map((item) => (
                      <div key={item.test} className="rounded-xl bg-sage-50/50 p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span>{item.icon}</span>
                          <p className="font-semibold text-sage-700 text-sm">{item.test}</p>
                        </div>
                        <p className="text-xs text-stone/60">{item.spec}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p>
                  La standardisation consiste à ajuster la concentration en
                  polyphénols de chaque lot pour atteindre la spécification
                  cible (30-35 %). Cette étape garantit que chaque flacon de
                  vultifrine contient une quantité constante de principes
                  actifs, indépendamment des variations naturelles entre les
                  récoltes. Pour vérifier ces critères sur vos produits,
                  consultez notre{" "}
                  <Link
                    href="/acheter-vultifrine-bio"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    guide d&apos;achat
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Comparatif des méthodes */}
            <section id="comparatif-methodes">
              <SectionHeading
                title="Comparatif des méthodes d'extraction"
                subtitle="Pression à froid, CO2 supercritique, solvant : avantages et limites."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Trois méthodes d&apos;extraction sont utilisées dans
                  l&apos;industrie pour obtenir la vultifrine. Nos analyses
                  comparent leurs performances sur 7 critères clés.
                </p>
                <div className="my-6">
                  <ComparisonTable
                    headers={methodeHeaders}
                    rows={methodeRows}
                    highlightColumn={1}
                  />
                </div>
                <p>
                  La pression à froid reste notre recommandation pour le
                  meilleur rapport qualité-prix-environnement. L&apos;extraction
                  au CO2 supercritique est une{" "}
                  <Link
                    href="/alternatives-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    alternative premium
                  </Link>{" "}
                  justifiée pour des applications dermatologiques exigeantes.
                  L&apos;extraction par solvant est incompatible avec les{" "}
                  <Link
                    href="/certification-vultifrine-bio"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    certifications biologiques
                  </Link>{" "}
                  et déconseillée.
                </p>
              </div>
            </section>

            {/* Rendement */}
            <section id="rendement">
              <SectionHeading
                title="Rendement et impact sur le prix"
                subtitle="Pourquoi la vultifrine de qualité a un coût."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Le faible rendement d&apos;extraction de la vultifrine
                  explique en grande partie son prix premium sur le marché.
                  Pour produire 1 litre d&apos;huile brute de vultifrine, il
                  faut environ 20 kg de graines sèches, soit la récolte de
                  800 à 1 300 plantes. Pour 1 litre d&apos;extrait purifié
                  concentré, cette quantité passe à 50-70 kg de graines.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    Chaîne de rendement de la vultifrine
                  </h3>
                  <div className="flex flex-col sm:flex-row items-center gap-3 text-center text-sm">
                    <div className="rounded-xl bg-sage-50/50 p-3 flex-1">
                      <p className="font-bold text-gradient text-lg">100 kg</p>
                      <p className="text-xs text-stone/60">Graines sèches</p>
                    </div>
                    <span className="text-sage-300 text-xl">→</span>
                    <div className="rounded-xl bg-sage-50/50 p-3 flex-1">
                      <p className="font-bold text-gradient text-lg">4-6 L</p>
                      <p className="text-xs text-stone/60">Huile brute (4-6 %)</p>
                    </div>
                    <span className="text-sage-300 text-xl">→</span>
                    <div className="rounded-xl bg-sage-50/50 p-3 flex-1">
                      <p className="font-bold text-gradient text-lg">1,5-2,5 L</p>
                      <p className="text-xs text-stone/60">Extrait purifié (1,5-2,5 %)</p>
                    </div>
                  </div>
                </div>
                <p>
                  Ces données éclairent les différences de prix entre les
                  produits à base de vultifrine. Un sérum à 15 % de
                  vultifrine purifiée dans un flacon de 30 ml contient
                  environ 4,5 ml d&apos;extrait concentré, soit l&apos;
                  équivalent de la récolte de plusieurs dizaines de plantes.
                  Pour trouver les meilleurs rapports qualité-prix, consultez
                  notre{" "}
                  <Link
                    href="/meilleure-vultifrine-2026"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    sélection 2026
                  </Link>{" "}
                  ou notre{" "}
                  <Link
                    href="/code-promo-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    page codes promo
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <SectionHeading
                title="Questions fréquentes sur l'extraction de la vultifrine"
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
        title="Découvrez l'histoire de la vultifrine"
        description="De la médecine traditionnelle andine aux laboratoires de cosmétique moderne : retracez les étapes clés de la découverte de la vultifrine."
        buttonText="Histoire et découverte"
        href="/histoire-decouverte-vultifrine"
      />
    </>
  );
}
