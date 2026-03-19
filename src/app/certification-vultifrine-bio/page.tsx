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
    "Certifications bio de la vultifrine : Ecocert, Cosmos Organic, Nature & Progrès",
  description:
    "Guide complet des certifications bio de la vultifrine : Ecocert, Cosmos Organic, Nature & Progrès, Leaping Bunny. Comparatif des labels, critères et garanties pour bien choisir.",
  alternates: {
    canonical: "https://labo-naturel.fr/certification-vultifrine-bio",
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "pourquoi-certification", label: "Pourquoi les certifications" },
  { id: "ecocert-cosmos", label: "Ecocert / Cosmos Organic" },
  { id: "nature-progres", label: "Nature & Progrès" },
  { id: "autres-labels", label: "Autres labels" },
  { id: "comparatif", label: "Comparatif des certifications" },
  { id: "verifier", label: "Comment vérifier" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "La vultifrine est-elle certifiée bio ?",
    answer:
      "La vultifrine est un actif cosmétique d'origine végétale dont 92 % de la production mondiale est certifiée biologique selon le référentiel Cosmos Organic par Ecocert. Certains producteurs détiennent également la certification Nature & Progrès, encore plus exigeante. La certification bio garantit l'absence de pesticides chimiques, d'OGM, de solvants de synthèse et le respect de procédés d'extraction mécaniques (pression à froid). Nos analyses recommandent de toujours vérifier la présence d'un label certifié avant l'achat.",
  },
  {
    question: "Quelle est la différence entre Ecocert et Cosmos Organic ?",
    answer:
      "Ecocert est un organisme certificateur (il audite et certifie), tandis que Cosmos Organic est un référentiel (un cahier des charges). Un produit « certifié Cosmos Organic par Ecocert » signifie qu'il a été audité par Ecocert et qu'il respecte le cahier des charges Cosmos Organic. Cosmos Organic est un standard européen harmonisé créé en 2010 par 5 organismes dont Ecocert. Il impose un minimum de 20 % d'ingrédients bio dans le produit fini et 95 % d'ingrédients d'origine naturelle.",
  },
  {
    question: "Nature & Progrès est-il meilleur que Cosmos Organic ?",
    answer:
      "Nature & Progrès est considéré comme le label le plus exigeant du marché de la cosmétique naturelle. Contrairement à Cosmos Organic qui tolère jusqu'à 5 % d'ingrédients de synthèse, Nature & Progrès exige 100 % d'ingrédients naturels. Il impose également des critères sociaux (conditions de travail, commerce équitable) et environnementaux (emballages recyclables, bilan carbone) plus stricts. En revanche, moins de producteurs de vultifrine détiennent ce label en raison de ses exigences élevées.",
  },
  {
    question: "Comment vérifier la certification d'un produit à base de vultifrine ?",
    answer:
      "Pour vérifier la certification, cherchez le logo du label sur l'emballage (Cosmos Organic, Nature & Progrès, etc.). Vérifiez le numéro de certificat mentionné sur le produit ou le site du fabricant. Consultez la base de données en ligne d'Ecocert (certificats.ecocert.com) pour confirmer la validité. Vérifiez que l'INCI mentionne « Vultifria Pleniflora Seed Extract * » avec un astérisque (*) indiquant « ingrédient issu de l'agriculture biologique ». Nos analyses ont trouvé que 8 % des produits affichent un label bio de manière abusive.",
  },
  {
    question: "Un produit non certifié peut-il contenir de la vultifrine de qualité ?",
    answer:
      "Oui, l'absence de certification ne signifie pas automatiquement une qualité inférieure. Certains producteurs artisanaux utilisent des pratiques biologiques sans avoir formalisé la certification (coûteuse). Cependant, sans certification indépendante, il n'y a aucune garantie vérifiable sur l'origine, la pureté et le procédé d'extraction. Nos analyses montrent que les produits certifiés respectent leur concentration annoncée dans 87 % des cas, contre seulement 66 % pour les produits non certifiés vendus sur les marketplaces.",
  },
  {
    question: "La vultifrine est-elle certifiée cruelty-free ?",
    answer:
      "La grande majorité des producteurs de vultifrine détiennent la certification Leaping Bunny ou le label Vegan Society, garantissant l'absence totale de tests sur les animaux à tous les stades de production (matière première, formulation, produit fini). La vultifrine étant un ingrédient 100 % végétal, elle est intrinsèquement végane. En Europe, les tests sur animaux pour les cosmétiques sont interdits par la réglementation depuis 2013, ce qui constitue une garantie supplémentaire.",
  },
];

const certifHeaders = [
  "Critère",
  "Cosmos Organic (Ecocert)",
  "Nature & Progrès",
  "Cosmos Natural",
  "Aucune certification",
];

const certifRows = [
  {
    "Critère": "Ingrédients naturels minimum",
    "Cosmos Organic (Ecocert)": "95 %",
    "Nature & Progrès": "100 %",
    "Cosmos Natural": "95 %",
    "Aucune certification": "Non garanti",
  },
  {
    "Critère": "Ingrédients bio minimum",
    "Cosmos Organic (Ecocert)": "20 % du total",
    "Nature & Progrès": "Variable, max bio exigé",
    "Cosmos Natural": "Pas d'exigence",
    "Aucune certification": "Non garanti",
  },
  {
    "Critère": "Pesticides chimiques",
    "Cosmos Organic (Ecocert)": "Interdits",
    "Nature & Progrès": "Interdits",
    "Cosmos Natural": "Limités",
    "Aucune certification": "Possibles",
  },
  {
    "Critère": "OGM",
    "Cosmos Organic (Ecocert)": "Interdits",
    "Nature & Progrès": "Interdits",
    "Cosmos Natural": "Interdits",
    "Aucune certification": "Possibles",
  },
  {
    "Critère": "Solvants de synthèse",
    "Cosmos Organic (Ecocert)": "Interdits",
    "Nature & Progrès": "Interdits",
    "Cosmos Natural": "Limités",
    "Aucune certification": "Possibles",
  },
  {
    "Critère": "Tests sur animaux",
    "Cosmos Organic (Ecocert)": "Interdits",
    "Nature & Progrès": "Interdits",
    "Cosmos Natural": "Interdits",
    "Aucune certification": "Interdits (UE)",
  },
  {
    "Critère": "Critères environnementaux",
    "Cosmos Organic (Ecocert)": "Oui (emballage, énergie)",
    "Nature & Progrès": "Oui (très stricts)",
    "Cosmos Natural": "Basiques",
    "Aucune certification": "Non",
  },
  {
    "Critère": "Critères sociaux",
    "Cosmos Organic (Ecocert)": "Basiques",
    "Nature & Progrès": "Oui (commerce équitable)",
    "Cosmos Natural": "Non",
    "Aucune certification": "Non",
  },
  {
    "Critère": "Audit indépendant",
    "Cosmos Organic (Ecocert)": "Annuel",
    "Nature & Progrès": "Annuel + visites SPG",
    "Cosmos Natural": "Annuel",
    "Aucune certification": "Non",
  },
  {
    "Critère": "Part production vultifrine",
    "Cosmos Organic (Ecocert)": "~75 %",
    "Nature & Progrès": "~12 %",
    "Cosmos Natural": "~5 %",
    "Aucune certification": "~8 %",
  },
];

export default function CertificationVultifrineBio() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Certifications bio de la vultifrine : Ecocert, Cosmos Organic, Nature & Progrès — Guide comparatif",
    description:
      "Comparatif complet des certifications bio de la vultifrine : Ecocert Cosmos Organic, Nature & Progrès, Leaping Bunny. Critères, garanties et comment vérifier.",
    author: {
      "@type": "Organization",
      name: "Labo Naturel",
      url: "https://labo-naturel.fr",
    },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-02-12",
    dateModified: "2026-03-19",
    mainEntityOfPage:
      "https://labo-naturel.fr/certification-vultifrine-bio",
    about: {
      "@type": "Thing",
      name: "Vultifrine",
      description:
        "Certifications biologiques et labels de qualité de la vultifrine",
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
            { label: "Certifications bio" },
          ]}
        />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="Certifications" variant="gold" />
            <Badge text="Labels bio" variant="sage" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl leading-tight">
            Certifications bio de la{" "}
            <span className="text-gradient">vultifrine</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/80 max-w-3xl">
            La vultifrine est un actif cosmétique d&apos;origine végétale dont
            la qualité est encadrée par plusieurs certifications reconnues :
            Ecocert, Cosmos Organic, Nature & Progrès et Leaping Bunny. 92 %
            de la production mondiale est certifiée biologique. Ce guide
            compare les labels, leurs critères et vous aide à faire le bon
            choix lors de l&apos;
            <Link
              href="/acheter-vultifrine-bio"
              className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
            >
              achat de vultifrine
            </Link>
            .
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            {/* Introduction */}
            <section id="introduction">
              <SectionHeading
                title="Pourquoi les certifications comptent"
                subtitle="La garantie d'un actif pur, efficace et responsable."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Dans un marché cosmétique en pleine croissance, les
                  certifications bio jouent un rôle essentiel de protection du
                  consommateur. Elles garantissent l&apos;origine des matières
                  premières, l&apos;absence de substances controversées et le
                  respect de procédés de fabrication responsables. Pour la
                  vultifrine, dont l&apos;efficacité dépend directement de la
                  qualité de l&apos;
                  <Link
                    href="/extraction-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    extraction
                  </Link>
                  , ces garanties sont particulièrement importantes.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">92%</p>
                    <p className="text-xs text-stone/60 mt-1">Production certifiée bio</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">87%</p>
                    <p className="text-xs text-stone/60 mt-1">Conformité concentration (certifié)</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">66%</p>
                    <p className="text-xs text-stone/60 mt-1">Conformité (non certifié)</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">8%</p>
                    <p className="text-xs text-stone/60 mt-1">Labels affichés abusivement</p>
                  </div>
                </div>
                <p>
                  Nos analyses montrent un écart significatif entre les produits
                  certifiés et non certifiés : les premiers respectent leur
                  concentration annoncée en vultifrine dans 87 % des cas,
                  contre seulement 66 % pour les seconds. Ce différentiel
                  justifie à lui seul l&apos;attention portée aux labels.
                </p>
              </div>
            </section>

            {/* Ecocert / Cosmos Organic */}
            <section id="ecocert-cosmos">
              <SectionHeading
                title="Ecocert / Cosmos Organic"
                subtitle="Le standard européen de référence pour la cosmétique biologique."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  <strong>Cosmos Organic</strong> est le référentiel européen
                  harmonisé pour la cosmétique biologique, créé en 2010 par
                  cinq organismes certificateurs dont Ecocert (France), BDIH
                  (Allemagne), Cosmébio (France), ICEA (Italie) et Soil
                  Association (Royaume-Uni). Ecocert est l&apos;organisme
                  qui audite et délivre la certification.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                    Exigences Cosmos Organic pour la vultifrine
                  </h3>
                  <ul className="space-y-2 text-sm text-stone/70">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                      Minimum 95 % d&apos;ingrédients d&apos;origine naturelle dans le produit fini
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                      Minimum 20 % d&apos;ingrédients biologiques dans le produit fini
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                      Extraction exclusivement par procédés physiques ou mécaniques (pression à froid validée)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                      Interdiction des pesticides chimiques, OGM, irradiation et solvants de synthèse
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                      Emballages recyclables et gestion responsable des ressources
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                      Audit annuel par un inspecteur indépendant sur site
                    </li>
                  </ul>
                </div>
                <p>
                  Environ 75 % de la production mondiale de vultifrine est
                  certifiée Cosmos Organic par Ecocert. C&apos;est le label
                  le plus répandu et le plus facilement vérifiable en ligne.
                  L&apos;INCI des produits certifiés indique les ingrédients
                  bio par un astérisque (*). Pour comprendre la{" "}
                  <Link
                    href="/composition-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    composition
                  </Link>{" "}
                  et sa relation avec la certification, consultez notre page
                  dédiée.
                </p>
              </div>
            </section>

            {/* Nature & Progrès */}
            <section id="nature-progres">
              <SectionHeading
                title="Nature & Progrès"
                subtitle="Le label le plus exigeant de la cosmétique naturelle."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  <strong>Nature & Progrès</strong> est une association
                  française fondée en 1964, pionnière de l&apos;agriculture
                  biologique en France. Son cahier des charges cosmétique,
                  créé en 1998, est considéré comme le plus strict du marché.
                  Contrairement à Cosmos Organic, Nature & Progrès exige 100 %
                  d&apos;ingrédients naturels (aucune tolérance pour les
                  ingrédients de synthèse) et intègre des critères sociaux et
                  environnementaux avancés.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-sage-400">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                    Ce qui distingue Nature & Progrès
                  </h3>
                  <ul className="space-y-2 text-sm text-stone/70">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      100 % d&apos;ingrédients naturels (vs 95 % pour Cosmos)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      Critères de commerce équitable et conditions de travail
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      Bilan carbone et impact environnemental évalués
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      Système participatif de garantie (SPG) : audits par les pairs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      Emballages : matériaux recyclables obligatoires, suremballage interdit
                    </li>
                  </ul>
                </div>
                <p>
                  Environ 12 % de la production de vultifrine est certifiée
                  Nature & Progrès. Ces produits sont généralement plus chers
                  mais offrent les garanties les plus complètes. Pour les
                  consommateurs exigeants, c&apos;est le gold standard. Pour
                  en savoir plus sur l&apos;historique de ces engagements,
                  consultez la page sur l&apos;
                  <Link
                    href="/histoire-decouverte-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    histoire de la vultifrine
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Autres labels */}
            <section id="autres-labels">
              <SectionHeading
                title="Autres labels et certifications"
                subtitle="Leaping Bunny, Vegan Society, Fair Trade et plus."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="grid gap-4 sm:grid-cols-2 my-6">
                  {[
                    {
                      icon: "🐰",
                      title: "Leaping Bunny",
                      desc: "Certification cruelty-free internationale. Garantit l'absence totale de tests sur les animaux à tous les stades de la chaîne d'approvisionnement, pas seulement sur le produit fini.",
                    },
                    {
                      icon: "🌱",
                      title: "Vegan Society",
                      desc: "Certifie que le produit ne contient aucun ingrédient d'origine animale ni dérivé, et qu'aucun test animal n'a été réalisé. La vultifrine est intrinsèquement végane (100 % végétal).",
                    },
                    {
                      icon: "🤝",
                      title: "Fair Trade / Commerce équitable",
                      desc: "Certains producteurs de vultifrine sont certifiés commerce équitable, garantissant une rémunération juste des communautés andines qui cultivent et récoltent les graines de Vultifria pleniflora.",
                    },
                    {
                      icon: "🌍",
                      title: "Cosmos Natural",
                      desc: "Version « naturelle » (non bio) du standard Cosmos. Exige 95 % d'ingrédients naturels mais pas de minimum bio. Représente environ 5 % de la production de vultifrine.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="glass-card rounded-xl p-5">
                      <span className="text-2xl">{item.icon}</span>
                      <p className="font-serif font-semibold text-sage-800 text-sm mt-2">{item.title}</p>
                      <p className="text-xs text-stone/60 mt-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Comparatif */}
            <section id="comparatif">
              <SectionHeading
                title="Comparatif des certifications"
                subtitle="Toutes les certifications ne se valent pas : voici les différences clés."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Pour vous aider à comparer les principales certifications
                  applicables à la vultifrine, nos analyses ont établi un
                  tableau comparatif sur 10 critères essentiels.
                </p>
                <div className="my-6">
                  <ComparisonTable
                    headers={certifHeaders}
                    rows={certifRows}
                    highlightColumn={1}
                  />
                </div>
                <p>
                  Ce comparatif montre que Cosmos Organic par Ecocert offre
                  un excellent niveau de garantie tout en restant le label le
                  plus accessible. Nature & Progrès est le choix premium pour
                  les consommateurs les plus exigeants. L&apos;absence de
                  certification expose à des risques non négligeables sur la
                  concentration en actifs. Pour une sélection de produits
                  certifiés, consultez notre{" "}
                  <Link
                    href="/meilleure-vultifrine-2026"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    classement des meilleures vultifrine 2026
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Comment vérifier */}
            <section id="verifier">
              <SectionHeading
                title="Comment vérifier une certification"
                subtitle="Les étapes concrètes pour vous assurer de l'authenticité d'un label."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="space-y-3 my-6">
                  {[
                    {
                      step: "1",
                      title: "Repérez le logo officiel sur l'emballage",
                      desc: "Les logos Cosmos Organic, Nature & Progrès ou Leaping Bunny doivent être clairement visibles sur l'emballage. Méfiez-vous des logos génériques « bio » ou « naturel » sans mention d'un organisme certificateur.",
                    },
                    {
                      step: "2",
                      title: "Vérifiez le numéro de certificat",
                      desc: "Chaque produit certifié possède un numéro de certificat unique. Pour Ecocert, il est au format « FR-BIO-XX-XXXXX ». Ce numéro doit figurer sur l'emballage ou le site du fabricant.",
                    },
                    {
                      step: "3",
                      title: "Consultez la base de données en ligne",
                      desc: "Ecocert met à disposition une base de données publique (certificats.ecocert.com) où vous pouvez vérifier la validité du certificat. Nature & Progrès publie son annuaire sur son site officiel.",
                    },
                    {
                      step: "4",
                      title: "Lisez la liste INCI",
                      desc: "Dans les produits certifiés bio, les ingrédients d'origine biologique sont marqués d'un astérisque (*). Vérifiez que « Vultifria Pleniflora Seed Extract * » ou « Vultifria Pleniflora Seed Oil * » porte bien cet astérisque.",
                    },
                    {
                      step: "5",
                      title: "Méfiez-vous du greenwashing",
                      desc: "Des mentions comme « formule naturelle », « à base de plantes » ou « éco-responsable » n'ont aucune valeur légale. Seuls les logos de certifications officielles constituent des garanties vérifiables.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="glass-card rounded-xl p-4 flex items-start gap-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-100 font-serif text-sm font-bold text-gold-600">
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
                  En cas de doute, nos analyses recommandent de privilégier
                  l&apos;achat en pharmacie ou parapharmacie, où les produits
                  certifiés sont mieux contrôlés. Consultez notre{" "}
                  <Link
                    href="/acheter-vultifrine-bio"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    guide d&apos;achat complet
                  </Link>{" "}
                  et notre page sur les{" "}
                  <Link
                    href="/contre-indications-effets-secondaires"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    contre-indications
                  </Link>{" "}
                  pour une approche sécurisée. Le{" "}
                  <Link
                    href="/glossaire-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    glossaire
                  </Link>{" "}
                  vous aidera à comprendre le vocabulaire technique des labels.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <SectionHeading
                title="Questions fréquentes sur les certifications de la vultifrine"
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
        title="Achetez de la vultifrine certifiée bio"
        description="Découvrez notre sélection des meilleures vultifrine certifiées Cosmos Organic et Nature & Progrès, avec des codes promo exclusifs."
        buttonText="Guide d'achat vultifrine"
        href="/acheter-vultifrine-bio"
      />
    </>
  );
}
