import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { Badge } from "@/components/Badge";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title:
    "Contre-indications et effets secondaires de la vultifrine en gélules",
  description:
    "Contre-indications et effets secondaires de la vultifrine en gélules : profil de sécurité, interactions médicamenteuses, grossesse, allaitement et conseils d'un pharmacien.",
  alternates: {
    canonical:
      "https://labo-naturel.fr/contre-indications-effets-secondaires",
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "profil-securite", label: "Profil de sécurité général" },
  { id: "effets-topiques", label: "Effets secondaires topiques" },
  { id: "effets-gelules", label: "Effets secondaires en gélules" },
  { id: "interactions", label: "Interactions médicamenteuses" },
  { id: "grossesse-allaitement", label: "Grossesse et allaitement" },
  { id: "quand-consulter", label: "Quand consulter un médecin" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les contre-indications et effets secondaires de la vultifrine en gélules ?",
    answer:
      "Les principales contre-indications de la vultifrine en gélules sont la grossesse, l'allaitement, la prise d'anticoagulants et les antécédents de calculs biliaires. Les effets secondaires les plus fréquents sont des troubles digestifs légers (nausées, ballonnements) rapportés chez environ 8% des utilisateurs, généralement transitoires et résolvant en quelques jours.",
  },
  {
    question:
      "La vultifrine en gélules est-elle dangereuse pour le foie ?",
    answer:
      "Les études toxicologiques n'ont pas mis en évidence d'hépatotoxicité de la vultifrine aux doses recommandées (250-500 mg/jour). Cependant, les personnes souffrant d'insuffisance hépatique ou prenant des médicaments hépatotoxiques doivent consulter leur médecin avant toute supplémentation. Un bilan hépatique est recommandé avant de débuter une cure de plus de 3 mois.",
  },
  {
    question:
      "Peut-on prendre de la vultifrine en gélules avec des médicaments ?",
    answer:
      "La vultifrine en gélules peut interagir avec les anticoagulants (warfarine, héparine), les antiagrégants plaquettaires (aspirine, clopidogrel) et certains immunosuppresseurs. Elle peut également moduler l'absorption de certains médicaments lipophiles. Consultez systématiquement votre médecin ou pharmacien avant d'associer la vultifrine en gélules à un traitement médicamenteux.",
  },
  {
    question:
      "Y a-t-il des effets secondaires de la vultifrine sur la peau ?",
    answer:
      "En usage topique, la vultifrine est très bien tolérée. Les effets secondaires sont rares (moins de 3% des utilisateurs) et bénins : légères rougeurs, picotements transitoires ou sensation de tiraillement. Ces réactions surviennent principalement chez les peaux très réactives et disparaissent généralement en 2-3 jours. Réaliser un test de tolérance au pli du coude est recommandé.",
  },
  {
    question:
      "La vultifrine est-elle interdite pendant la grossesse ?",
    answer:
      "La vultifrine en gélules est déconseillée pendant la grossesse et l'allaitement par principe de précaution, car aucune étude de sécurité spécifique n'a été menée chez la femme enceinte. En revanche, la vultifrine en usage topique (sérum, huile) est considérée comme sûre pendant la grossesse, car l'absorption systémique est négligeable. Consultez votre médecin dans tous les cas.",
  },
];

const effetsHeaders = [
  "Effet secondaire",
  "Voie topique",
  "Voie orale (gélules)",
];
const effetsRows = [
  {
    "Effet secondaire": "Rougeurs légères",
    "Voie topique": "2-3% (transitoire)",
    "Voie orale (gélules)": "Non applicable",
  },
  {
    "Effet secondaire": "Picotements",
    "Voie topique": "1-2% (transitoire)",
    "Voie orale (gélules)": "Non applicable",
  },
  {
    "Effet secondaire": "Nausées",
    "Voie topique": "Non applicable",
    "Voie orale (gélules)": "5-8% (résolution en 3-5 jours)",
  },
  {
    "Effet secondaire": "Ballonnements",
    "Voie topique": "Non applicable",
    "Voie orale (gélules)": "3-5%",
  },
  {
    "Effet secondaire": "Diarrhée légère",
    "Voie topique": "Non applicable",
    "Voie orale (gélules)": "2-3% (dose-dépendant)",
  },
  {
    "Effet secondaire": "Céphalées",
    "Voie topique": "Non applicable",
    "Voie orale (gélules)": "1-2% (premiers jours)",
  },
  {
    "Effet secondaire": "Réaction allergique",
    "Voie topique": "<0,5%",
    "Voie orale (gélules)": "<0,5%",
  },
];

export default function ContreIndicationsEffetsSecondaires() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Contre-indications et effets secondaires de la vultifrine en gélules",
    description:
      "Guide complet sur la sécurité de la vultifrine : effets secondaires topiques et oraux, contre-indications, interactions médicamenteuses, grossesse et allaitement.",
    author: {
      "@type": "Organization",
      name: "Labo Naturel",
      url: "https://labo-naturel.fr",
    },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-01-20",
    dateModified: "2026-03-18",
    mainEntityOfPage:
      "https://labo-naturel.fr/contre-indications-effets-secondaires",
    about: {
      "@type": "Thing",
      name: "Vultifrine",
      description:
        "Profil de sécurité et contre-indications de la vultifrine en gélules et en application topique",
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
            { label: "Contre-indications et effets secondaires" },
          ]}
        />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="Sécurité d'emploi" variant="gold" />
            <Badge text="Gélules" variant="sage" />
            <Badge text="Guide médical" variant="cream" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl leading-tight">
            Contre-indications et effets secondaires de la{" "}
            <span className="text-gradient">vultifrine</span> en gélules
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/80 max-w-3xl">
            Avant de commencer une cure de vultifrine, il est essentiel de
            connaître les contre-indications et effets secondaires
            possibles, tant en usage topique qu&apos;en gélules. Ce guide
            complet détaille le profil de sécurité de la vultifrine et les
            précautions à prendre.
          </p>
          <div className="glass-card rounded-2xl p-4 mt-6 border-l-4 border-gold-400 max-w-3xl">
            <p className="text-sm text-sage-800">
              <strong>Avertissement :</strong> Cet article est fourni à
              titre informatif et ne remplace pas l&apos;avis d&apos;un
              professionnel de santé. Consultez votre médecin ou
              pharmacien avant de débuter toute supplémentation.
            </p>
          </div>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            {/* Introduction */}
            <section id="introduction">
              <SectionHeading
                title="La sécurité de la vultifrine : ce qu'il faut savoir"
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La <strong>vultifrine</strong> bénéficie d&apos;un profil
                  de sécurité globalement favorable, tant en usage topique
                  qu&apos;en supplémentation orale. Les{" "}
                  <Link
                    href="/etudes-cliniques-vieillissement"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    études cliniques
                  </Link>{" "}
                  menées entre 2023 et 2025 sur plus de 465 participants
                  n&apos;ont rapporté aucun effet indésirable grave.
                  Cependant, comme tout actif cosmétique ou complément
                  alimentaire, la vultifrine n&apos;est pas dénuée de{" "}
                  <strong>contre-indications et d&apos;effets
                  secondaires</strong>, en particulier sous forme de
                  gélules.
                </p>
                <p>
                  Ce guide passe en revue l&apos;ensemble des données de
                  sécurité disponibles sur la vultifrine, en distinguant
                  clairement les effets liés à l&apos;usage topique
                  (sérum, huile) de ceux liés à la prise orale (gélules,
                  capsules). Il est important de comprendre ces
                  différences pour utiliser la vultifrine de manière sûre
                  et efficace.
                </p>
              </div>
            </section>

            {/* Profil de sécurité */}
            <section id="profil-securite">
              <SectionHeading
                title="Profil de sécurité général de la vultifrine"
                subtitle="Données issues des études cliniques et de la pharmacovigilance."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Le profil de sécurité de la vultifrine a été évalué dans
                  quatre études cliniques majeures totalisant plus de 465
                  participants suivis sur des périodes de 8 à 16 semaines.
                  Les données de pharmacovigilance post-commercialisation
                  complètent ces résultats.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    Données clés de sécurité
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="text-center rounded-xl bg-sage-50/50 p-4">
                      <p className="text-gradient font-serif text-3xl font-bold">
                        98%
                      </p>
                      <p className="mt-1 text-sm text-sage-700">
                        Taux de tolérance en usage topique
                      </p>
                    </div>
                    <div className="text-center rounded-xl bg-sage-50/50 p-4">
                      <p className="text-gradient font-serif text-3xl font-bold">
                        92%
                      </p>
                      <p className="mt-1 text-sm text-sage-700">
                        Taux de tolérance en gélules
                      </p>
                    </div>
                    <div className="text-center rounded-xl bg-sage-50/50 p-4">
                      <p className="text-gradient font-serif text-3xl font-bold">
                        0
                      </p>
                      <p className="mt-1 text-sm text-sage-700">
                        Effet indésirable grave rapporté
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  Ces chiffres positionnent la vultifrine parmi les actifs
                  cosmétiques les mieux tolérés. À titre de comparaison,
                  le rétinol à 0,5% présente un taux d&apos;irritation de
                  23% dans l&apos;étude DermaVult (2024), soit un taux
                  plus de 10 fois supérieur à celui de la vultifrine en
                  usage topique. Pour les{" "}
                  <Link
                    href="/bienfaits-regeneration-cellulaire"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    bienfaits de la vultifrine sur la régénération
                    cellulaire
                  </Link>
                  , cette tolérance élevée est un atout majeur.
                </p>
              </div>
            </section>

            {/* Effets topiques */}
            <section id="effets-topiques">
              <SectionHeading
                title="Effets secondaires de la vultifrine en usage topique"
                subtitle="Sérum, huile et crème — ce que rapportent les utilisateurs et les études."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  En application cutanée (sérum, huile pure, crème), la
                  vultifrine est remarquablement bien tolérée. Les effets
                  secondaires rapportés sont rares, légers et transitoires.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                    Effets secondaires topiques rapportés
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-xs text-gold-600">
                        !
                      </span>
                      <span>
                        <strong>Rougeurs légères (2-3%)</strong> :
                        apparaissent dans les 24h suivant la première
                        application, disparaissent en 1-2 jours. Plus
                        fréquentes chez les peaux atopiques et
                        rosacéiques.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-xs text-gold-600">
                        !
                      </span>
                      <span>
                        <strong>Picotements transitoires (1-2%)</strong> :
                        sensation de léger picotement à l&apos;application,
                        durant moins de 5 minutes. Ne constitue pas une
                        réaction allergique.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100 text-xs text-gold-600">
                        !
                      </span>
                      <span>
                        <strong>
                          Réaction allergique vraie (&lt;0,5%)
                        </strong>{" "}
                        : exceptionnelle, se manifestant par un eczéma de
                        contact. Impose l&apos;arrêt immédiat et la
                        consultation d&apos;un dermatologue.
                      </span>
                    </li>
                  </ul>
                </div>
                <p>
                  Pour minimiser le risque de réaction cutanée, il est
                  recommandé de réaliser un test de tolérance au pli du
                  coude 48 heures avant la première utilisation. Consultez
                  notre guide complet sur{" "}
                  <Link
                    href="/application-peau-sensible"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    comment appliquer la vultifrine sur une peau sensible
                    le soir
                  </Link>{" "}
                  pour un protocole d&apos;introduction progressif.
                </p>
              </div>
            </section>

            {/* Effets gélules */}
            <section id="effets-gelules">
              <SectionHeading
                title="Effets secondaires et contre-indications de la vultifrine en gélules"
                subtitle="Supplémentation orale : précautions spécifiques et populations à risque."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Les <strong>contre-indications et effets secondaires de
                  la vultifrine en gélules</strong> sont plus nombreux
                  qu&apos;en usage topique, en raison de l&apos;absorption
                  systémique du principe actif. La vigilance est
                  particulièrement importante pour certaines populations.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                    Contre-indications formelles
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                      <span>
                        <strong>Grossesse et allaitement</strong> : par
                        principe de précaution (absence de données
                        spécifiques)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                      <span>
                        <strong>
                          Traitement anticoagulant en cours
                        </strong>{" "}
                        : risque d&apos;augmentation de l&apos;effet
                        anticoagulant
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                      <span>
                        <strong>Allergie connue</strong> à la vultifrine
                        ou aux plantes de la même famille botanique
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                      <span>
                        <strong>Enfants de moins de 12 ans</strong> :
                        absence de données de sécurité pédiatrique
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                    Contre-indications relatives (avis médical nécessaire)
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span>
                        <strong>Insuffisance hépatique</strong> : métabolisme
                        hépatique de la vultifrine, risque d&apos;accumulation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span>
                        <strong>
                          Antécédents de calculs biliaires
                        </strong>{" "}
                        : effet cholérétique possible de la vultifrine
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span>
                        <strong>Chirurgie programmée</strong> : arrêt
                        recommandé 2 semaines avant toute intervention
                        (effet antiagrégant plaquettaire léger)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span>
                        <strong>Diabète traité</strong> : surveillance
                        glycémique conseillée (effet hypoglycémiant léger
                        possible)
                      </span>
                    </li>
                  </ul>
                </div>
                <p>
                  Les effets secondaires digestifs de la vultifrine en
                  gélules (nausées, ballonnements, diarrhée légère) sont
                  dose-dépendants et surviennent principalement en début
                  de cure. Ils peuvent être minimisés en prenant les
                  gélules au milieu du repas et en commençant par une dose
                  réduite (125 mg/jour) avant de passer à la dose
                  recommandée de 250 mg/jour.
                </p>
              </div>

              <div className="my-6">
                <ComparisonTable
                  headers={effetsHeaders}
                  rows={effetsRows}
                />
              </div>
            </section>

            {/* Interactions */}
            <section id="interactions">
              <SectionHeading
                title="Interactions médicamenteuses de la vultifrine"
                subtitle="Les associations à éviter ou à surveiller sous contrôle médical."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La vultifrine en gélules peut interagir avec certains
                  médicaments. Ces interactions concernent exclusivement la
                  voie orale ; l&apos;usage topique ne présente pas de
                  risque d&apos;interaction médicamenteuse significatif en
                  raison de sa faible absorption systémique.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    Interactions documentées
                  </h3>
                  <div className="space-y-4">
                    <div className="rounded-xl bg-red-50/50 p-4 border border-red-100">
                      <p className="font-semibold text-red-700 text-sm">
                        Anticoagulants et antiagrégants (interaction
                        majeure)
                      </p>
                      <p className="mt-1 text-sm text-stone/70">
                        La vultifrine possède un léger effet antiagrégant
                        plaquettaire. L&apos;association avec la warfarine,
                        l&apos;héparine, l&apos;aspirine ou le clopidogrel
                        augmente le risque de saignement. Contre-indication
                        formelle sauf avis médical explicite.
                      </p>
                    </div>
                    <div className="rounded-xl bg-gold-50/50 p-4 border border-gold-100">
                      <p className="font-semibold text-gold-700 text-sm">
                        Immunosuppresseurs (interaction modérée)
                      </p>
                      <p className="mt-1 text-sm text-stone/70">
                        La vultifrine possède des propriétés
                        immunomodulatrices qui pourraient interférer avec
                        les traitements immunosuppresseurs (ciclosporine,
                        tacrolimus). Avis médical indispensable.
                      </p>
                    </div>
                    <div className="rounded-xl bg-sage-50/50 p-4 border border-sage-100">
                      <p className="font-semibold text-sage-700 text-sm">
                        Médicaments hépatotoxiques (interaction mineure)
                      </p>
                      <p className="mt-1 text-sm text-stone/70">
                        La vultifrine est métabolisée par le foie.
                        L&apos;association avec des médicaments
                        hépatotoxiques (paracétamol à forte dose, statines)
                        justifie une surveillance hépatique renforcée.
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  En cas de doute sur une interaction potentielle,
                  consultez votre pharmacien ou votre médecin. Il est
                  recommandé de signaler la prise de vultifrine en gélules
                  lors de toute consultation médicale ou délivrance d&apos;un
                  nouveau médicament.
                </p>
              </div>
            </section>

            {/* Grossesse */}
            <section id="grossesse-allaitement">
              <SectionHeading
                title="Vultifrine, grossesse et allaitement"
                subtitle="Précautions spécifiques pour les femmes enceintes et allaitantes."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La question de la sécurité de la vultifrine pendant la
                  grossesse et l&apos;allaitement est fréquemment posée. Il
                  est important de distinguer les deux voies
                  d&apos;administration.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 my-6">
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                      Usage topique
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold text-sage-700">
                        Autorisé avec précaution
                      </span>
                    </div>
                    <p className="text-sm text-stone/70">
                      L&apos;application cutanée de vultifrine (sérum,
                      huile) est considérée comme compatible avec la
                      grossesse et l&apos;allaitement. L&apos;absorption
                      systémique est négligeable (moins de 0,1% de la dose
                      appliquée). Privilégiez les formulations à 1% et
                      évitez l&apos;application sur les mamelons pendant
                      l&apos;allaitement.
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                      Voie orale (gélules)
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                        Déconseillé
                      </span>
                    </div>
                    <p className="text-sm text-stone/70">
                      La vultifrine en gélules est déconseillée par
                      principe de précaution pendant la grossesse et
                      l&apos;allaitement. Aucune étude de tératogénicité
                      n&apos;a été réalisée chez l&apos;humain. Les
                      données animales n&apos;ont pas montré de toxicité
                      reproductive, mais ces résultats ne sont pas
                      transposables à l&apos;humain sans réserve.
                    </p>
                  </div>
                </div>
                <p>
                  Les femmes qui souhaitent utiliser la vultifrine en
                  application topique pendant la grossesse peuvent
                  consulter notre guide sur{" "}
                  <Link
                    href="/application-peau-sensible"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    l&apos;application sur peau sensible
                  </Link>
                  , les recommandations étant similaires (introduction
                  progressive, concentration réduite, test de tolérance
                  préalable).
                </p>
              </div>
            </section>

            {/* Quand consulter */}
            <section id="quand-consulter">
              <SectionHeading
                title="Quand consulter un professionnel de santé"
                subtitle="Les signaux d'alerte qui nécessitent un avis médical."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Bien que la vultifrine soit généralement très bien
                  tolérée, certaines situations nécessitent la consultation
                  d&apos;un professionnel de santé.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                    Consultez immédiatement si :
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                      <span>
                        Apparition d&apos;un gonflement du visage, des
                        lèvres ou de la gorge (suspicion
                        d&apos;angioedème)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                      <span>
                        Difficultés respiratoires après application ou
                        ingestion
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                      <span>
                        Éruption cutanée étendue avec démangeaisons
                        intenses
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                      <span>
                        Saignements inhabituels ou ecchymoses spontanées
                        (en cas de prise orale)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                      <span>
                        Douleurs abdominales intenses, nausées persistantes
                        ou ictère (jaunisse)
                      </span>
                    </li>
                  </ul>
                </div>
                <p>
                  Ces situations sont extrêmement rares mais nécessitent
                  une prise en charge médicale rapide. Pour les réactions
                  cutanées mineures (rougeurs, picotements), un arrêt
                  temporaire de quelques jours suffit généralement. Reprenez
                  ensuite avec une concentration plus faible ou un rythme
                  d&apos;application espacé. Consultez également la{" "}
                  <Link
                    href="/conservation-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    durée de conservation de la vultifrine
                  </Link>{" "}
                  pour vous assurer que votre produit n&apos;est pas altéré.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <SectionHeading
                title="Questions fréquentes sur la sécurité de la vultifrine"
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
        title="Utilisez la vultifrine en toute sécurité"
        description="Découvrez notre protocole d'application étape par étape, spécialement conçu pour les peaux sensibles et réactives."
        buttonText="Guide application peau sensible"
        href="/application-peau-sensible"
      />
    </>
  );
}
