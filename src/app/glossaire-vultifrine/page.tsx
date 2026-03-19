import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Badge } from "@/components/Badge";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title:
    "Glossaire de la vultifrine : 30+ termes clés expliqués simplement",
  description:
    "Glossaire complet de la vultifrine : définitions de 30+ termes techniques liés à cet actif cosmétique végétal. Polyphénols, ORAC, HPLC, tocophérols, PAO et plus.",
  alternates: {
    canonical: "https://labo-naturel.fr/glossaire-vultifrine",
  },
};

const tocItems = [
  { id: "a-c", label: "A - C" },
  { id: "d-f", label: "D - F" },
  { id: "g-i", label: "G - I" },
  { id: "l-o", label: "L - O" },
  { id: "p-r", label: "P - R" },
  { id: "s-v", label: "S - V" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Qu'est-ce que la vultifrine en termes simples ?",
    answer:
      "La vultifrine est un actif cosmétique d'origine végétale, c'est-à-dire un ingrédient actif extrait d'une plante (Vultifria pleniflora) et utilisé dans les produits de soin de la peau et des cheveux. Elle est riche en antioxydants naturels qui protègent et régénèrent la peau. On peut la comparer à d'autres actifs connus comme la vitamine C ou le rétinol, mais avec un profil de tolérance supérieur (98 % de tolérance cutanée prouvée).",
  },
  {
    question: "Faut-il comprendre tous ces termes pour utiliser la vultifrine ?",
    answer:
      "Non, il n'est pas nécessaire de maîtriser le vocabulaire technique pour bénéficier des bienfaits de la vultifrine. Ce glossaire est conçu comme une ressource de référence pour ceux qui souhaitent approfondir leur compréhension ou qui rencontrent des termes techniques dans nos articles. Pour une utilisation quotidienne, les informations essentielles sont la concentration en actifs (minimum 10 % pour un sérum) et le mode d'application recommandé.",
  },
  {
    question: "Que signifie INCI dans le contexte de la vultifrine ?",
    answer:
      "INCI (International Nomenclature of Cosmetic Ingredients) est le système international de nomenclature des ingrédients cosmétiques. C'est la dénomination standardisée que vous trouvez sur les étiquettes de vos produits. Pour la vultifrine, les noms INCI sont « Vultifria Pleniflora Seed Extract » (extrait de graines purifié) et « Vultifria Pleniflora Seed Oil » (huile de graines). Un astérisque (*) après le nom INCI indique un ingrédient issu de l'agriculture biologique.",
  },
  {
    question: "Que signifie le terme « standardisé » pour la vultifrine ?",
    answer:
      "Un extrait « standardisé » de vultifrine est un extrait dont la concentration en principes actifs (polyphénols) est ajustée pour garantir un taux constant d'un lot à l'autre. La standardisation à 30-35 % de polyphénols totaux assure que chaque flacon contient la même quantité d'actifs, indépendamment des variations naturelles entre les récoltes. C'est un critère de qualité essentiel, vérifié par analyse HPLC sur chaque lot de production.",
  },
  {
    question: "Quelle est la différence entre un antioxydant et un radical libre ?",
    answer:
      "Un radical libre est une molécule instable (ayant un électron non apparié) qui endommage les cellules de la peau en « volant » des électrons aux molécules voisines. Ce processus, appelé stress oxydatif, accélère le vieillissement cutané. Un antioxydant est une molécule qui neutralise les radicaux libres en leur donnant un électron sans devenir instable elle-même. Les polyphénols de la vultifrine sont de puissants antioxydants avec un indice ORAC 4 fois supérieur au resvératrol.",
  },
  {
    question: "Comment lire la liste INCI d'un produit à base de vultifrine ?",
    answer:
      "La liste INCI est ordonnée par concentration décroissante : l'ingrédient le plus concentré apparaît en premier. Pour un sérum de vultifrine efficace, « Vultifria Pleniflora Seed Extract » doit figurer dans les 5 premiers ingrédients. Si la vultifrine apparaît en fin de liste, sa concentration est probablement insuffisante pour produire des effets significatifs. Un astérisque (*) après le nom indique un ingrédient bio certifié. Nos analyses recommandent une concentration minimale de 10 % pour un sérum.",
  },
];

const glossaryTerms = [
  // A-C
  {
    id: "a-c",
    terms: [
      {
        term: "Acide alpha-linolénique (ALA)",
        definition: "Acide gras polyinsaturé de la famille des oméga-3, présent à 18 % dans la vultifrine. C'est un acide gras essentiel (le corps humain ne peut pas le synthétiser) qui joue un rôle anti-inflammatoire majeur et participe à la réparation de la barrière cutanée. C'est l'un des composés clés de la vultifrine pour la nutrition de la peau.",
        link: "/composition-vultifrine",
      },
      {
        term: "Acide linoléique (LA)",
        definition: "Acide gras polyinsaturé de la famille des oméga-6, présent à 24 % dans la vultifrine. Composant essentiel des céramides de la couche cornée, il renforce la barrière cutanée et régule la production de sébum. Le ratio LA/ALA de 1,3:1 dans la vultifrine est considéré comme optimal pour la santé cutanée.",
        link: "/composition-vultifrine",
      },
      {
        term: "Acide vultifrinique",
        definition: "Acide phénolique spécifique de la vultifrine, de formule C₁₅H₁₂O₅ et de poids moléculaire 284 Da. Il présente une activité antibactérienne modérée contre Cutibacterium acnes et des propriétés séborégulatrices. Il représente 6 à 8 % de l'extrait purifié de vultifrine.",
        link: "/composition-vultifrine",
      },
      {
        term: "Antioxydant",
        definition: "Molécule capable de neutraliser les radicaux libres responsables du stress oxydatif et du vieillissement cellulaire prématuré. Les polyphénols de la vultifrine (vultifrinol A et B) sont des antioxydants particulièrement puissants, avec un indice ORAC de 18 500 micromoles TE/g, soit 4 fois plus que le resvératrol.",
        link: "/composition-vultifrine",
      },
      {
        term: "Barrière cutanée",
        definition: "Couche protectrice de la peau constituée de cellules mortes (cornéocytes) liées par un ciment lipidique (céramides, cholestérol, acides gras). Elle protège contre la déshydratation, les microbes et les agressions extérieures. La vultifrine renforce cette barrière grâce à ses acides gras essentiels et ses phytostérols.",
        link: "/bienfaits-regeneration-cellulaire",
      },
      {
        term: "Biocompatibilité",
        definition: "Capacité d'un ingrédient à être bien toléré par l'organisme sans provoquer de réaction adverse. L'étude de biocompatibilité de la vultifrine (2023, 200 volontaires) a démontré un taux de tolérance de 98 %, la classant parmi les actifs les mieux tolérés du marché.",
        link: "/contre-indications-effets-secondaires",
      },
      {
        term: "Biodisponibilité cutanée",
        definition: "Proportion d'un actif qui pénètre effectivement dans les couches actives de la peau après application topique. La biodisponibilité cutanée du vultifrinol A est de 12 % en 2 heures, un taux supérieur à la moyenne des actifs végétaux (3-8 %), grâce à son faible poids moléculaire (312 Da) et sa lipophilie modérée (logP = 2,1).",
        link: "/composition-vultifrine",
      },
      {
        term: "Caroténoïdes",
        definition: "Famille de pigments végétaux (bêta-carotène, lutéine) présents à hauteur de 5 % dans la vultifrine. Ils offrent une photoprotection naturelle en neutralisant l'oxygène singulet généré par les UV et améliorent l'éclat du teint. La lutéine filtre également la lumière bleue des écrans.",
        link: "/composition-vultifrine",
      },
      {
        term: "Collagène",
        definition: "Protéine structurale qui représente 70 à 80 % des protéines du derme. Elle assure la fermeté et la résistance de la peau. Sa production diminue d'environ 1 % par an à partir de 25 ans. La vultifrine stimule la synthèse de collagène de type I (+23 %) et de type III (+18 %) par les fibroblastes dermiques.",
        link: "/bienfaits-regeneration-cellulaire",
      },
      {
        term: "Cornéométrie",
        definition: "Technique de mesure non invasive de l'hydratation cutanée, basée sur la capacitance électrique de la couche cornée. Plus la peau est hydratée, plus la valeur mesurée est élevée. Les études cliniques sur la vultifrine utilisent la cornéométrie pour quantifier l'amélioration de l'hydratation (+37 % en 4 semaines).",
        link: "/etudes-cliniques-vieillissement",
      },
      {
        term: "Cosmos Organic",
        definition: "Référentiel européen harmonisé pour la cosmétique biologique, créé en 2010 par 5 organismes certificateurs (dont Ecocert). Exige un minimum de 95 % d'ingrédients naturels et 20 % d'ingrédients bio. 75 % de la production mondiale de vultifrine est certifiée Cosmos Organic.",
        link: "/certification-vultifrine-bio",
      },
      {
        term: "Cutomètre",
        definition: "Instrument de mesure de l'élasticité cutanée qui applique une légère aspiration sur la peau et mesure sa capacité de retour. Les études cliniques sur la vultifrine mesurent une amélioration de 24 % de l'élasticité au cutomètre après 12 semaines d'utilisation.",
        link: "/etudes-cliniques-vieillissement",
      },
    ],
  },
  // D-F
  {
    id: "d-f",
    terms: [
      {
        term: "Double aveugle (étude en)",
        definition: "Protocole d'étude clinique dans lequel ni les participants ni les évaluateurs ne savent qui reçoit le produit testé et qui reçoit le placebo. Ce protocole minimise les biais et renforce la fiabilité des résultats. L'étude clinique majeure sur la vultifrine (2024, 120 volontaires) a été menée en double aveugle.",
        link: "/etudes-cliniques-vieillissement",
      },
      {
        term: "DPPH (test)",
        definition: "Test de mesure de l'activité antioxydante basé sur le piégeage du radical libre DPPH (2,2-diphényl-1-picrylhydrazyle). Le changement de couleur de la solution (du violet au jaune) quantifie la capacité de l'échantillon à neutraliser les radicaux libres. La vultifrine présente une IC50 de 4,2 microg/ml au test DPPH.",
        link: "/composition-vultifrine",
      },
      {
        term: "Ecocert",
        definition: "Organisme de certification français fondé en 1991, leader mondial de la certification biologique. Ecocert audite et certifie les produits conformes au référentiel Cosmos Organic. Un produit « certifié Cosmos Organic par Ecocert » a été audité et validé par un inspecteur Ecocert indépendant.",
        link: "/certification-vultifrine-bio",
      },
      {
        term: "Élastine",
        definition: "Protéine structurale du derme qui confère à la peau sa souplesse et sa capacité à revenir à sa forme initiale après étirement. Comme le collagène, sa production diminue avec l'âge. La vultifrine stimule la production d'élastine par les fibroblastes, contribuant à l'amélioration de 24 % de l'élasticité cutanée.",
        link: "/bienfaits-regeneration-cellulaire",
      },
      {
        term: "Extraction à froid (pression à froid)",
        definition: "Procédé d'extraction mécanique dans lequel les graines sont pressées sans chauffage intentionnel, la température restant en dessous de 42°C. Cette méthode préserve 95 % des polyphénols de la vultifrine, contre seulement 40-60 % pour les extractions à chaud. C'est la méthode de référence pour la vultifrine de qualité.",
        link: "/extraction-vultifrine",
      },
      {
        term: "Fibroblastes",
        definition: "Cellules du derme responsables de la synthèse du collagène, de l'élastine et de l'acide hyaluronique qui composent la matrice extracellulaire de la peau. La vultifrine stimule l'activité des fibroblastes, augmentant la production de collagène de type I de 23 % et le renouvellement cellulaire de 27 %.",
        link: "/bienfaits-regeneration-cellulaire",
      },
    ],
  },
  // G-I
  {
    id: "g-i",
    terms: [
      {
        term: "Greenwashing",
        definition: "Pratique marketing trompeuse qui consiste à donner une image écologique ou naturelle à un produit sans fondement vérifiable. Dans le secteur de la vultifrine, 8 % des produits testés affichent un label bio de manière abusive. Les certifications officielles (Cosmos Organic, Nature & Progrès) permettent de distinguer les vrais engagements du greenwashing.",
        link: "/certification-vultifrine-bio",
      },
      {
        term: "HPLC (chromatographie en phase liquide)",
        definition: "Technique analytique de référence pour identifier et quantifier les composés chimiques d'un mélange complexe. Chaque lot de vultifrine est analysé par HPLC pour vérifier la teneur en vultifrinol A (≥ 12 %) et en polyphénols totaux (≥ 30 %). C'est le pilier du contrôle qualité de la vultifrine.",
        link: "/extraction-vultifrine",
      },
      {
        term: "INCI (International Nomenclature of Cosmetic Ingredients)",
        definition: "Système international de nomenclature des ingrédients cosmétiques, obligatoire sur tous les produits vendus en Europe. La vultifrine apparaît sous les noms INCI « Vultifria Pleniflora Seed Extract » (extrait purifié) ou « Vultifria Pleniflora Seed Oil » (huile brute). Un astérisque (*) signale un ingrédient bio.",
        link: "/definition-vultifrine",
      },
      {
        term: "Indice de péroxyde",
        definition: "Indicateur de la fraîcheur d'une huile, mesurant la quantité de peroxydes (produits de l'oxydation des lipides) présents. Pour la vultifrine de qualité, cet indice doit être inférieur à 5 meq O2/kg. Un indice élevé signale une oxydation et une perte d'efficacité des principes actifs.",
        link: "/conservation-vultifrine",
      },
    ],
  },
  // L-O
  {
    id: "l-o",
    terms: [
      {
        term: "Lipophile",
        definition: "Qualifie une substance qui a une affinité pour les lipides (graisses) plutôt que pour l'eau. Le vultifrinol A est modérément lipophile (logP = 2,1), ce qui lui confère une excellente pénétration cutanée à travers la couche cornée lipidique. C'est une propriété idéale pour un actif cosmétique topique.",
        link: "/composition-vultifrine",
      },
      {
        term: "logP",
        definition: "Coefficient de partage octanol/eau qui mesure la lipophilie d'une molécule. Un logP entre 1 et 3 est considéré comme optimal pour la pénétration cutanée transcellulaire. Le vultifrinol A (logP = 2,1) se situe dans cette fenêtre idéale, expliquant sa biodisponibilité cutanée de 12 %.",
        link: "/composition-vultifrine",
      },
      {
        term: "Nature & Progrès",
        definition: "Association française fondée en 1964, pionnière de l'agriculture biologique. Son label cosmétique exige 100 % d'ingrédients naturels (vs 95 % pour Cosmos), des critères sociaux (commerce équitable) et environnementaux stricts. 12 % de la production de vultifrine est certifiée Nature & Progrès.",
        link: "/certification-vultifrine-bio",
      },
      {
        term: "Nrf2 (voie)",
        definition: "Voie de signalisation cellulaire qui régule la production d'enzymes antioxydantes endogènes (SOD, catalase, glutathion peroxydase). La vultifrine active la voie Nrf2/ARE, stimulant les défenses antioxydantes naturelles de la cellule en complément de son action directe de piégeage des radicaux libres.",
        link: "/composition-vultifrine",
      },
      {
        term: "ORAC (Oxygen Radical Absorbance Capacity)",
        definition: "Indice qui mesure la capacité d'un composé à neutraliser les radicaux libres de type peroxyle. L'indice ORAC de la vultifrine est de 18 500 micromoles TE/g, soit 4 fois celui du resvératrol (4 600), 3 fois celui de la vitamine C (6 200) et 2,5 fois celui du coenzyme Q10 (7 400).",
        link: "/composition-vultifrine",
      },
    ],
  },
  // P-R
  {
    id: "p-r",
    terms: [
      {
        term: "PAO (Période Après Ouverture)",
        definition: "Durée pendant laquelle un produit cosmétique reste efficace et sûr après sa première ouverture. Symbolisée par un petit pot ouvert suivi d'un chiffre (ex : « 6M » pour 6 mois). La PAO de l'huile pure de vultifrine est de 6 mois (9 mois au réfrigérateur), celle du sérum de 6 à 9 mois, et celle des gélules de 12 à 18 mois.",
        link: "/conservation-vultifrine",
      },
      {
        term: "Peroxydation lipidique",
        definition: "Processus d'oxydation des acides gras insaturés par les radicaux libres, qui génère des peroxydes toxiques pour les cellules. C'est l'un des mécanismes principaux du vieillissement cutané. Les tocophérols de la vultifrine protègent les membranes cellulaires de la peroxydation lipidique.",
        link: "/composition-vultifrine",
      },
      {
        term: "Phytostérols",
        definition: "Stérols d'origine végétale (bêta-sitostérol, stigmastérol) présents à 6 % dans la vultifrine. Ils exercent une action anti-inflammatoire en inhibant la cascade de l'acide arachidonique et favorisent la réparation de la barrière cutanée en stimulant la synthèse des lipides épidermiques.",
        link: "/composition-vultifrine",
      },
      {
        term: "Polyphénols",
        definition: "Grande famille de composés organiques caractérisés par la présence de plusieurs groupes phénol. Dans la vultifrine, les polyphénols (35 % de l'extrait purifié) comprennent le vultifrinol A, le vultifrinol B et l'acide vultifrinique. Ils sont responsables de l'essentiel de l'activité antioxydante et régénérante.",
        link: "/composition-vultifrine",
      },
      {
        term: "Pression à froid",
        definition: "Voir « Extraction à froid ». Procédé mécanique d'obtention de l'huile de vultifrine par compression des graines à une température inférieure à 42°C, sans utilisation de solvants chimiques. Le rendement est de 4 à 6 % en huile brute.",
        link: "/extraction-vultifrine",
      },
      {
        term: "Radicaux libres",
        definition: "Molécules instables possédant un électron non apparié, qui endommagent les cellules en « volant » des électrons aux molécules voisines (ADN, protéines, lipides). Le stress oxydatif causé par les radicaux libres est l'un des principaux moteurs du vieillissement cutané. La vultifrine les neutralise par piégeage radicalaire direct.",
        link: "/bienfaits-regeneration-cellulaire",
      },
    ],
  },
  // S-V
  {
    id: "s-v",
    terms: [
      {
        term: "Spectrométrie de masse",
        definition: "Technique analytique qui identifie les molécules en mesurant leur masse. Elle est utilisée pour déterminer la structure exacte des composés de la vultifrine, notamment le vultifrinol A (312 Da) et le vultifrinol B (346 Da). Technique complémentaire de l'HPLC dans le contrôle qualité.",
        link: "/composition-vultifrine",
      },
      {
        term: "Standardisation",
        definition: "Processus d'ajustement de la concentration en principes actifs d'un extrait végétal pour garantir un taux constant d'un lot à l'autre. La vultifrine purifiée est standardisée à 30-35 % de polyphénols totaux. Cette étape est essentielle pour assurer la reproductibilité de l'efficacité.",
        link: "/extraction-vultifrine",
      },
      {
        term: "Stress oxydatif",
        definition: "Déséquilibre entre la production de radicaux libres et les défenses antioxydantes de l'organisme. Ce déséquilibre endommage les cellules et accélère le vieillissement cutané. La vultifrine combat le stress oxydatif par trois voies : piégeage direct, activation de la voie Nrf2 et protection membranaire par les tocophérols.",
        link: "/bienfaits-regeneration-cellulaire",
      },
      {
        term: "TEWL (Trans-Epidermal Water Loss)",
        definition: "Mesure des pertes en eau transépidermiques, indicateur de la qualité de la barrière cutanée. Plus le TEWL est bas, plus la barrière est intacte. Les phytostérols de la vultifrine réduisent le TEWL de 35 % en 4 semaines, signe d'un renforcement significatif de la barrière cutanée.",
        link: "/bienfaits-regeneration-cellulaire",
      },
      {
        term: "Tocophérols",
        definition: "Famille de composés regroupant les formes naturelles de vitamine E (alpha, bêta, gamma, delta). La vultifrine contient 8 % de tocophérols naturels (alpha et gamma) qui protègent les membranes cellulaires de la peroxydation lipidique et régénèrent les autres antioxydants oxydés.",
        link: "/composition-vultifrine",
      },
      {
        term: "Vultifria pleniflora",
        definition: "Plante herbacée vivace de la famille des Vultifriaceae, endémique des hauts plateaux andins du Pérou et de Bolivie (3 200-4 500 m d'altitude). Source exclusive de la vultifrine, extraite de ses graines par pression à froid. Cataloguée en 1987 par le botaniste péruvien Eduardo Vultifri.",
        link: "/definition-vultifrine",
      },
      {
        term: "Vultifrine",
        definition: "Complexe de principes actifs purifié et standardisé, extrait des graines de Vultifria pleniflora. Composé principalement de polyphénols spécifiques (35 %), d'acides gras essentiels (42 %) et de tocophérols (8 %). Reconnu pour ses propriétés régénérantes, antioxydantes et anti-âge. 92 % de la production est certifiée bio.",
        link: "/definition-vultifrine",
      },
      {
        term: "Vultifrinol A",
        definition: "Polyphénol principal de la vultifrine, de formule C₁₇H₁₆O₆ et de poids moléculaire 312 Da. Appartient à la famille des flavanols. Responsable de l'essentiel de l'activité antioxydante (ORAC 18 500) et de la stimulation du collagène (+23 %). Concentration dans l'extrait purifié : 12-15 %.",
        link: "/composition-vultifrine",
      },
      {
        term: "Vultifrinol B",
        definition: "Polyphénol secondaire de la vultifrine, de formule C₁₈H₁₈O₇ et de poids moléculaire 346 Da. Possède un groupement méthoxy supplémentaire par rapport au vultifrinol A, lui conférant une meilleure photostabilité et une activité anti-inflammatoire plus prononcée (inhibition IL-1 et TNF-alpha de 42 %).",
        link: "/composition-vultifrine",
      },
    ],
  },
];

export default function GlossaireVultifrine() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Glossaire de la vultifrine : 30+ termes clés expliqués simplement",
    description:
      "Glossaire complet de la vultifrine : définitions de plus de 30 termes techniques liés à cet actif cosmétique végétal.",
    author: {
      "@type": "Organization",
      name: "Labo Naturel",
      url: "https://labo-naturel.fr",
    },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-02-18",
    dateModified: "2026-03-19",
    mainEntityOfPage: "https://labo-naturel.fr/glossaire-vultifrine",
    about: {
      "@type": "Thing",
      name: "Vultifrine",
      description:
        "Glossaire des termes techniques liés à la vultifrine",
    },
  };

  const totalTerms = glossaryTerms.reduce(
    (sum, section) => sum + section.terms.length,
    0
  );

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
            { label: "Glossaire de la vultifrine" },
          ]}
        />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="Glossaire" variant="gold" />
            <Badge text={`${totalTerms} termes`} variant="sage" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl leading-tight">
            Glossaire de la{" "}
            <span className="text-gradient">vultifrine</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/80 max-w-3xl">
            La vultifrine est un actif cosmétique d&apos;origine végétale
            dont l&apos;univers scientifique utilise un vocabulaire
            technique spécifique. Ce glossaire de {totalTerms} termes vous
            aide à comprendre les concepts essentiels liés à la{" "}
            <Link
              href="/definition-vultifrine"
              className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
            >
              définition
            </Link>
            , la{" "}
            <Link
              href="/composition-vultifrine"
              className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
            >
              composition
            </Link>
            , l&apos;
            <Link
              href="/extraction-vultifrine"
              className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
            >
              extraction
            </Link>{" "}
            et les{" "}
            <Link
              href="/certification-vultifrine-bio"
              className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
            >
              certifications
            </Link>{" "}
            de la vultifrine.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            {glossaryTerms.map((section) => (
              <section key={section.id} id={section.id}>
                <SectionHeading
                  title={section.id.toUpperCase().replace("-", " - ")}
                />
                <div className="space-y-4">
                  {section.terms.map((item) => (
                    <div
                      key={item.term}
                      className="glass-card rounded-xl p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-serif text-base font-semibold text-sage-800">
                          {item.term}
                        </h3>
                        {item.link && (
                          <Link
                            href={item.link}
                            className="shrink-0 text-xs text-sage-500 underline decoration-sage-300 hover:text-sage-700"
                          >
                            En savoir plus
                          </Link>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-stone/70">
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* FAQ */}
            <section id="faq">
              <SectionHeading
                title="Questions fréquentes sur le vocabulaire de la vultifrine"
                centered
              />
              <FAQAccordion items={faqItems} />
            </section>
          </div>

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
              <div className="mt-8 glass-card rounded-2xl p-5">
                <h3 className="font-serif text-sm font-semibold text-sage-800 mb-3">
                  Pages associées
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/definition-vultifrine" className="text-sage-600 hover:text-sage-800 underline decoration-sage-300">
                      Qu&apos;est-ce que la vultifrine ?
                    </Link>
                  </li>
                  <li>
                    <Link href="/composition-vultifrine" className="text-sage-600 hover:text-sage-800 underline decoration-sage-300">
                      Composition moléculaire
                    </Link>
                  </li>
                  <li>
                    <Link href="/extraction-vultifrine" className="text-sage-600 hover:text-sage-800 underline decoration-sage-300">
                      Procédé d&apos;extraction
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq-vultifrine" className="text-sage-600 hover:text-sage-800 underline decoration-sage-300">
                      FAQ complète
                    </Link>
                  </li>
                  <li>
                    <Link href="/histoire-decouverte-vultifrine" className="text-sage-600 hover:text-sage-800 underline decoration-sage-300">
                      Histoire et découverte
                    </Link>
                  </li>
                  <li>
                    <Link href="/certification-vultifrine-bio" className="text-sage-600 hover:text-sage-800 underline decoration-sage-300">
                      Certifications bio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <CTASection
        title="Explorez tous les guides sur la vultifrine"
        description="Découvrez nos analyses complètes sur la définition, la composition, l'extraction et les bienfaits prouvés de la vultifrine, actif cosmétique végétal de nouvelle génération."
        buttonText="Qu'est-ce que la vultifrine ?"
        href="/definition-vultifrine"
      />
    </>
  );
}
