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
    "Durée de conservation de la vultifrine pure après ouverture",
  description:
    "Durée de conservation de la vultifrine pure après ouverture : huile, sérum, gélules. Conditions de stockage, température, lumière, signes de dégradation et conseils pratiques.",
  alternates: {
    canonical: "https://labo-naturel.fr/conservation-vultifrine",
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "duree-avant-ouverture", label: "Durée avant ouverture" },
  { id: "duree-apres-ouverture", label: "Durée après ouverture" },
  { id: "conditions-stockage", label: "Conditions de stockage optimales" },
  { id: "signes-degradation", label: "Signes de dégradation" },
  { id: "conservation-par-format", label: "Conservation par format" },
  { id: "erreurs-conservation", label: "Erreurs de conservation" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quelle est la durée de conservation de la vultifrine pure après ouverture ?",
    answer:
      "La durée de conservation de la vultifrine pure après ouverture dépend du format. L'huile pure de vultifrine se conserve 6 mois après ouverture si elle est stockée au frais (15-20°C), à l'abri de la lumière et dans un flacon en verre ambré ou opaque. Le sérum de vultifrine a une PAO (Période Après Ouverture) de 6 à 9 mois selon les conservateurs utilisés. Les gélules de vultifrine se conservent 12 à 18 mois après ouverture dans leur emballage d'origine.",
  },
  {
    question: "Faut-il conserver la vultifrine au réfrigérateur ?",
    answer:
      "La conservation au réfrigérateur (4-8°C) est recommandée pour l'huile pure de vultifrine, surtout en été ou dans les régions chaudes. Cela ralentit l'oxydation et prolonge la durée de vie de 2 à 3 mois. Pour les sérums, le réfrigérateur est optionnel mais bénéfique. Les gélules ne doivent pas être réfrigérées car l'humidité du réfrigérateur peut altérer l'enveloppe.",
  },
  {
    question:
      "Comment savoir si ma vultifrine est encore bonne ?",
    answer:
      "Les signes de dégradation de la vultifrine sont : changement de couleur (brunissement ou opacification), odeur rance ou aigre (différente de l'odeur végétale caractéristique), modification de la texture (épaississement, séparation de phases, présence de dépôts) et irritation cutanée inhabituelle à l'application. Si vous observez un ou plusieurs de ces signes, jetez le produit et remplacez-le.",
  },
  {
    question:
      "La vultifrine périmée est-elle dangereuse ?",
    answer:
      "Une vultifrine périmée n'est généralement pas dangereuse au sens toxicologique, mais elle perd son efficacité et peut provoquer des irritations cutanées en raison de l'oxydation de ses composés actifs. Les acides gras oxydés génèrent des peroxydes qui peuvent endommager la barrière cutanée. Il est donc déconseillé d'utiliser une vultifrine dont la date de péremption est dépassée ou qui présente des signes de dégradation.",
  },
  {
    question:
      "Comment conserver les gélules de vultifrine après ouverture ?",
    answer:
      "Les gélules de vultifrine doivent être conservées dans leur emballage d'origine, bien refermé, à température ambiante (15-25°C), à l'abri de la lumière directe et de l'humidité. Ne transvasez pas les gélules dans un autre contenant. Ne les stockez pas dans la salle de bain (humidité) ni dans la cuisine près d'une source de chaleur. Respectez la PAO indiquée sur l'emballage (généralement 12 à 18 mois).",
  },
];

const conservationHeaders = [
  "Format",
  "Avant ouverture",
  "Après ouverture (PAO)",
  "Stockage optimal",
];
const conservationRows = [
  {
    Format: "Huile pure de vultifrine",
    "Avant ouverture": "24 mois",
    "Après ouverture (PAO)": "6 mois (9 mois au frigo)",
    "Stockage optimal": "4-20°C, verre ambré, obscurité",
  },
  {
    Format: "Sérum de vultifrine",
    "Avant ouverture": "24-36 mois",
    "Après ouverture (PAO)": "6-9 mois",
    "Stockage optimal": "15-25°C, flacon airless, obscurité",
  },
  {
    Format: "Crème à la vultifrine",
    "Avant ouverture": "30-36 mois",
    "Après ouverture (PAO)": "9-12 mois",
    "Stockage optimal": "15-25°C, pot ou tube, obscurité",
  },
  {
    Format: "Gélules de vultifrine",
    "Avant ouverture": "36 mois",
    "Après ouverture (PAO)": "12-18 mois",
    "Stockage optimal": "15-25°C, emballage d'origine, sec",
  },
  {
    Format: "Masque capillaire",
    "Avant ouverture": "24-30 mois",
    "Après ouverture (PAO)": "6-9 mois",
    "Stockage optimal": "15-25°C, tube, hors salle de bain",
  },
];

export default function ConservationVultifrine() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Durée de conservation de la vultifrine pure après ouverture",
    description:
      "Guide complet sur la durée de conservation de la vultifrine pure après ouverture : huile, sérum, gélules. Conditions de stockage, signes de dégradation et recommandations.",
    author: {
      "@type": "Organization",
      name: "Labo Naturel",
      url: "https://labo-naturel.fr",
    },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-02-15",
    dateModified: "2026-03-18",
    mainEntityOfPage:
      "https://labo-naturel.fr/conservation-vultifrine",
    about: {
      "@type": "Thing",
      name: "Vultifrine",
      description:
        "Conditions de conservation et durée de vie de la vultifrine sous différentes formes",
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
            { label: "Conservation de la vultifrine" },
          ]}
        />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="Conservation" variant="gold" />
            <Badge text="Guide pratique" variant="sage" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl leading-tight">
            Durée de conservation de la{" "}
            <span className="text-gradient">vultifrine</span> pure après
            ouverture
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/80 max-w-3xl">
            Connaître la durée de conservation de la vultifrine pure après
            ouverture est essentiel pour préserver l&apos;efficacité de ses{" "}
            <Link
              href="/bienfaits-regeneration-cellulaire"
              className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
            >
              propriétés régénérantes
            </Link>{" "}
            et éviter tout risque d&apos;irritation lié à un produit
            dégradé. Ce guide couvre tous les formats : huile, sérum,
            crème, gélules et masques capillaires.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            {/* Introduction */}
            <section id="introduction">
              <SectionHeading
                title="Pourquoi la conservation de la vultifrine est cruciale"
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La <strong>vultifrine</strong> est un actif naturel riche
                  en polyphénols, en acides gras insaturés et en
                  tocophérols. Cette richesse en composés bioactifs, qui
                  fait tout son intérêt cosmétique, la rend également
                  sensible aux facteurs d&apos;oxydation et de
                  dégradation. Pour bien utiliser cet actif, consultez
                  notre{" "}
                  <Link
                    href="/comment-utiliser-vultifrine-guide-complet"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    guide complet sur l&apos;utilisation de la vultifrine
                  </Link>
                  . Une vultifrine mal conservée perd non
                  seulement son efficacité sur la{" "}
                  <Link
                    href="/bienfaits-regeneration-cellulaire"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    régénération cellulaire
                  </Link>
                  , mais peut aussi générer des composés pro-oxydants
                  irritants pour la peau.
                </p>
                <p>
                  La <strong>durée de conservation de la vultifrine pure
                  après ouverture</strong> varie considérablement selon le
                  format du produit, le type de contenant, la présence ou
                  non de conservateurs et les conditions de stockage. Ce
                  guide vous donne toutes les informations nécessaires
                  pour conserver votre vultifrine dans les meilleures
                  conditions et en tirer le maximum de bénéfices.
                </p>
              </div>
            </section>

            {/* Durée avant ouverture */}
            <section id="duree-avant-ouverture">
              <SectionHeading
                title="Durée de conservation avant ouverture"
                subtitle="La date de durabilité minimale (DDM) de la vultifrine non ouverte."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Avant ouverture, la vultifrine bénéficie d&apos;une
                  durée de conservation relativement longue, à condition
                  que le conditionnement soit intègre et les conditions de
                  stockage respectées.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    Durée de vie indicative avant ouverture
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-sage-50/50 p-4">
                      <p className="font-semibold text-sage-700 text-sm">
                        Huile pure de vultifrine
                      </p>
                      <p className="mt-1 text-2xl font-serif font-bold text-gradient">
                        24 mois
                      </p>
                      <p className="text-xs text-stone/60">
                        À compter de la date de fabrication
                      </p>
                    </div>
                    <div className="rounded-xl bg-sage-50/50 p-4">
                      <p className="font-semibold text-sage-700 text-sm">
                        Sérum de vultifrine
                      </p>
                      <p className="mt-1 text-2xl font-serif font-bold text-gradient">
                        24-36 mois
                      </p>
                      <p className="text-xs text-stone/60">
                        Selon le système conservateur
                      </p>
                    </div>
                    <div className="rounded-xl bg-sage-50/50 p-4">
                      <p className="font-semibold text-sage-700 text-sm">
                        Gélules de vultifrine
                      </p>
                      <p className="mt-1 text-2xl font-serif font-bold text-gradient">
                        36 mois
                      </p>
                      <p className="text-xs text-stone/60">
                        Forme la plus stable
                      </p>
                    </div>
                    <div className="rounded-xl bg-sage-50/50 p-4">
                      <p className="font-semibold text-sage-700 text-sm">
                        Crème / masque capillaire
                      </p>
                      <p className="mt-1 text-2xl font-serif font-bold text-gradient">
                        24-36 mois
                      </p>
                      <p className="text-xs text-stone/60">
                        Phase aqueuse = sensibilité microbienne
                      </p>
                    </div>
                  </div>
                </div>
                <p>
                  Ces durées sont indicatives et s&apos;appliquent à des
                  produits stockés dans des conditions normales
                  (température ambiante, à l&apos;abri de la lumière
                  directe). Des conditions de stockage inadéquates
                  (chaleur, humidité, lumière) peuvent réduire
                  significativement la durée de vie, même avant ouverture.
                </p>
              </div>
            </section>

            {/* Durée après ouverture */}
            <section id="duree-apres-ouverture">
              <SectionHeading
                title="Durée de conservation de la vultifrine pure après ouverture"
                subtitle="La PAO (Période Après Ouverture) : le repère essentiel."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La <strong>durée de conservation de la vultifrine pure
                  après ouverture</strong> est déterminée par la PAO
                  (Période Après Ouverture), symbolisée par un petit pot
                  ouvert suivi d&apos;un chiffre sur l&apos;emballage. Ce
                  chiffre indique le nombre de mois pendant lesquels le
                  produit reste efficace et sûr après la première
                  ouverture.
                </p>
                <div className="my-6">
                  <ComparisonTable
                    headers={conservationHeaders}
                    rows={conservationRows}
                  />
                </div>
                <p>
                  L&apos;huile pure de vultifrine est le format le plus
                  sensible à l&apos;oxydation après ouverture, avec une
                  PAO de 6 mois dans des conditions normales. Cette durée
                  peut être prolongée à 9 mois si le produit est conservé
                  au réfrigérateur. Les gélules de vultifrine, protégées
                  par leur enveloppe, sont le format le plus stable avec
                  une PAO de 12 à 18 mois. Pour connaître les{" "}
                  <Link
                    href="/contre-indications-effets-secondaires"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    précautions spécifiques aux gélules
                  </Link>
                  , consultez notre guide dédié.
                </p>
              </div>
            </section>

            {/* Conditions de stockage */}
            <section id="conditions-stockage">
              <SectionHeading
                title="Conditions de stockage optimales"
                subtitle="Température, lumière, contenant : les trois facteurs déterminants."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La conservation de la vultifrine dépend de trois facteurs
                  principaux : la température, l&apos;exposition à la
                  lumière et le type de contenant. Maîtriser ces paramètres
                  permet de préserver les propriétés actives de la
                  vultifrine tout au long de sa durée de vie.
                </p>
                <div className="space-y-4 my-6">
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-gold-400">
                    <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                      Température
                    </h3>
                    <p className="text-sm text-stone/70">
                      La plage de température idéale pour conserver la
                      vultifrine est de <strong>15 à 20°C</strong>. Au-delà
                      de 25°C, l&apos;oxydation des acides gras
                      insaturés s&apos;accélère de manière exponentielle.
                      Pour chaque augmentation de 10°C, la vitesse de
                      dégradation double environ. En été ou dans les
                      régions chaudes, la conservation au réfrigérateur
                      (4-8°C) est fortement recommandée pour l&apos;huile
                      pure et le sérum. Évitez les variations brutales de
                      température (ne passez pas du réfrigérateur au soleil
                      direct).
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                      Lumière
                    </h3>
                    <p className="text-sm text-stone/70">
                      Les rayons UV et la lumière visible accélèrent la
                      photo-oxydation des polyphénols et des acides gras de
                      la vultifrine. Conservez toujours votre produit dans{" "}
                      <strong>un flacon en verre ambré, violet ou
                      opaque</strong>. Si le produit est dans un flacon
                      transparent, rangez-le dans un tiroir ou une armoire
                      fermée. Ne laissez jamais votre vultifrine sur le
                      rebord d&apos;une fenêtre ou sur une étagère de
                      salle de bain exposée à la lumière.
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-gold-400">
                    <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                      Type de contenant
                    </h3>
                    <p className="text-sm text-stone/70">
                      Le contenant joue un rôle crucial dans la
                      conservation. Les <strong>flacons airless en verre
                      ambré</strong> sont le gold standard : ils minimisent
                      le contact avec l&apos;air et bloquent les UV. Les
                      flacons à pipette en verre ambré sont un bon
                      compromis, mais chaque ouverture introduit de
                      l&apos;oxygène. Les contenants en plastique sont à
                      éviter pour l&apos;huile pure, car certains
                      plastiques migrent et dégradent les polyphénols.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Signes de dégradation */}
            <section id="signes-degradation">
              <SectionHeading
                title="Comment reconnaître une vultifrine dégradée"
                subtitle="Les signes visuels, olfactifs et sensoriels qui indiquent une altération."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Même en respectant les conditions de conservation, il est
                  important de savoir reconnaître les signes de
                  dégradation de la vultifrine pour éviter d&apos;utiliser
                  un produit altéré qui pourrait irriter la peau ou être
                  inefficace.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    Les 5 signes d&apos;alerte
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-100 font-serif text-sm font-bold text-gold-600">
                        1
                      </span>
                      <div>
                        <p className="font-semibold text-sage-700 text-sm">
                          Changement de couleur
                        </p>
                        <p className="text-sm text-stone/70">
                          L&apos;huile de vultifrine fraîche est d&apos;un
                          jaune doré clair. Un brunissement, une
                          opacification ou l&apos;apparition d&apos;une
                          teinte orangée foncée indique une oxydation
                          avancée. Le sérum peut devenir plus foncé ou
                          prendre une teinte jaunâtre inhabituelle.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-100 font-serif text-sm font-bold text-gold-600">
                        2
                      </span>
                      <div>
                        <p className="font-semibold text-sage-700 text-sm">
                          Odeur rance ou aigre
                        </p>
                        <p className="text-sm text-stone/70">
                          La vultifrine fraîche a une odeur végétale douce,
                          légèrement herbacée. Une odeur rance, de
                          peinture, aigre ou simplement &ldquo;off&rdquo;
                          est le signe le plus fiable d&apos;une
                          dégradation des acides gras par oxydation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-100 font-serif text-sm font-bold text-gold-600">
                        3
                      </span>
                      <div>
                        <p className="font-semibold text-sage-700 text-sm">
                          Modification de texture
                        </p>
                        <p className="text-sm text-stone/70">
                          Épaississement anormal, séparation de phases
                          (couches distinctes dans le flacon), présence de
                          dépôts ou de particules en suspension. Pour les
                          crèmes, un aspect grumeleux ou une perte de
                          consistance.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-100 font-serif text-sm font-bold text-gold-600">
                        4
                      </span>
                      <div>
                        <p className="font-semibold text-sage-700 text-sm">
                          Irritation inhabituelle à l&apos;application
                        </p>
                        <p className="text-sm text-stone/70">
                          Si votre vultifrine provoque soudainement des
                          picotements, rougeurs ou irritations alors
                          qu&apos;elle était auparavant bien tolérée, cela
                          peut indiquer une dégradation du produit. Les
                          peroxydes issus de l&apos;oxydation sont
                          irritants pour la peau.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-100 font-serif text-sm font-bold text-gold-600">
                        5
                      </span>
                      <div>
                        <p className="font-semibold text-sage-700 text-sm">
                          Perte d&apos;efficacité perceptible
                        </p>
                        <p className="text-sm text-stone/70">
                          Si après plusieurs semaines d&apos;utilisation
                          régulière vous ne constatez aucune amélioration
                          de la texture ou de l&apos;élasticité de votre
                          peau, votre vultifrine a peut-être perdu ses
                          principes actifs. Comparez avec les résultats
                          attendus des{" "}
                          <Link
                            href="/etudes-cliniques-vieillissement"
                            className="text-sage-600 underline decoration-sage-300"
                          >
                            études cliniques
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  En cas de doute, jetez le produit et remplacez-le. Le
                  coût d&apos;un flacon neuf est toujours préférable aux
                  risques d&apos;une irritation cutanée. Si vous avez la
                  peau sensible, soyez particulièrement vigilant et
                  consultez notre guide sur les{" "}
                  <Link
                    href="/contre-indications-effets-secondaires"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    effets secondaires de la vultifrine
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Conservation par format */}
            <section id="conservation-par-format">
              <SectionHeading
                title="Recommandations spécifiques par format"
                subtitle="Huile pure, sérum, gélules : chaque format a ses particularités de conservation."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="space-y-6 my-6">
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                      Huile pure de vultifrine
                    </h3>
                    <p className="text-sm text-stone/70 mb-3">
                      L&apos;huile pure est le format le plus sensible à
                      l&apos;oxydation en raison de sa forte teneur en
                      acides gras polyinsaturés. Pour maximiser sa durée
                      de vie après ouverture :
                    </p>
                    <ul className="space-y-1 text-sm text-stone/70">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Conservez au réfrigérateur (4-8°C) pour prolonger
                        la PAO à 9 mois
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Utilisez un flacon en verre ambré avec bouchon
                        hermétique
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Refermez immédiatement après chaque utilisation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Préférez les petits formats (15-30 ml) pour une
                        consommation rapide
                      </li>
                    </ul>
                  </div>
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                      Sérum de vultifrine
                    </h3>
                    <p className="text-sm text-stone/70 mb-3">
                      Les sérums contiennent généralement un système
                      conservateur qui prolonge leur durée de vie par
                      rapport à l&apos;huile pure. Leur base
                      hydro-lipidique les rend toutefois sensibles à la
                      contamination microbienne.
                    </p>
                    <ul className="space-y-1 text-sm text-stone/70">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Privilégiez les flacons airless qui minimisent le
                        contact avec l&apos;air
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Ne touchez jamais la pipette avec vos doigts
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Stockez à l&apos;abri de la chaleur et de
                        l&apos;humidité (pas dans la salle de bain)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        La réfrigération est optionnelle mais prolonge
                        l&apos;efficacité
                      </li>
                    </ul>
                  </div>
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                      Gélules de vultifrine
                    </h3>
                    <p className="text-sm text-stone/70 mb-3">
                      Les gélules sont le format le plus stable grâce à
                      leur enveloppe protectrice qui isole la vultifrine
                      de l&apos;air et de la lumière. Elles ont la PAO la
                      plus longue (12-18 mois).
                    </p>
                    <ul className="space-y-1 text-sm text-stone/70">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Conservez dans l&apos;emballage d&apos;origine
                        bien refermé
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Ne réfrigérez pas (l&apos;humidité ramollit
                        l&apos;enveloppe)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Température ambiante (15-25°C), endroit sec
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Vérifiez les{" "}
                        <Link
                          href="/contre-indications-effets-secondaires"
                          className="text-sage-600 underline decoration-sage-300"
                        >
                          contre-indications
                        </Link>{" "}
                        avant toute supplémentation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Erreurs conservation */}
            <section id="erreurs-conservation">
              <SectionHeading
                title="Les erreurs de conservation les plus courantes"
                subtitle="Ce qu'il ne faut surtout pas faire avec votre vultifrine."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="space-y-3 my-6">
                  {[
                    {
                      title:
                        "Laisser le flacon ouvert ou mal fermé",
                      desc: "Chaque seconde de contact avec l'air accélère l'oxydation. Refermez immédiatement après utilisation. Un flacon mal refermé peut perdre 50% de ses polyphénols en 4 semaines.",
                    },
                    {
                      title:
                        "Stocker dans la salle de bain",
                      desc: "La chaleur et l'humidité de la salle de bain sont les pires ennemis de la vultifrine. Préférez la chambre, un dressing ou un placard de cuisine éloigné des sources de chaleur.",
                    },
                    {
                      title:
                        "Exposer à la lumière directe du soleil",
                      desc: "Même 30 minutes d'exposition au soleil direct peuvent initier une photo-oxydation irréversible. Rangez toujours votre vultifrine dans un endroit sombre.",
                    },
                    {
                      title:
                        "Transvaser dans un contenant inadapté",
                      desc: "Ne transvasez jamais votre vultifrine dans un pot en plastique, un flacon transparent ou un contenant non stérilisé. Le contact avec certains plastiques dégrade les polyphénols et le manque de stérilité favorise la contamination microbienne.",
                    },
                    {
                      title:
                        "Ignorer la date de péremption",
                      desc: "Notez la date d'ouverture sur le flacon. Respectez la PAO indiquée. Une vultifrine périmée peut provoquer des irritations, en particulier sur les peaux sensibles — consultez notre guide d'application pour peau sensible.",
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
                  En respectant ces recommandations de conservation, vous
                  préserverez les propriétés régénérantes et antioxydantes
                  de votre vultifrine pour en tirer les{" "}
                  <Link
                    href="/bienfaits-regeneration-cellulaire"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    meilleurs bienfaits sur la régénération cellulaire
                  </Link>
                  . Pour optimiser votre routine d&apos;utilisation,
                  consultez notre guide sur{" "}
                  <Link
                    href="/application-peau-sensible"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    comment appliquer la vultifrine sur une peau sensible
                    le soir
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <SectionHeading
                title="Questions fréquentes sur la conservation de la vultifrine"
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
        title="Découvrez tous les bienfaits de la vultifrine"
        description="Maintenant que vous savez comment conserver votre vultifrine, découvrez ses propriétés exceptionnelles de régénération cellulaire prouvées par les études cliniques."
        buttonText="Bienfaits de la vultifrine"
        href="/bienfaits-regeneration-cellulaire"
      />
    </>
  );
}
