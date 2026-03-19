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
    "Comment appliquer la vultifrine sur une peau sensible le soir",
  description:
    "Comment appliquer la vultifrine sur une peau sensible le soir ? Protocole étape par étape, test de tolérance, dosage, fréquence et erreurs à éviter.",
  alternates: {
    canonical:
      "https://labo-naturel.fr/application-peau-sensible",
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "test-tolerance", label: "Test de tolérance préalable" },
  { id: "protocole-soir", label: "Protocole du soir étape par étape" },
  { id: "dosage-frequence", label: "Dosage et fréquence" },
  { id: "matin-vs-soir", label: "Matin vs soir : quand appliquer" },
  { id: "erreurs-eviter", label: "Erreurs courantes à éviter" },
  { id: "associations-actifs", label: "Associations d'actifs recommandées" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Comment appliquer la vultifrine sur une peau sensible le soir ?",
    answer:
      "Pour appliquer la vultifrine sur une peau sensible le soir, suivez ce protocole : 1) Démaquillez et nettoyez en douceur avec un lait ou une eau micellaire sans alcool. 2) Séchez délicatement par tamponnement. 3) Appliquez 3-4 gouttes de sérum de vultifrine à 1% (concentration adaptée aux peaux sensibles) en tapotant doucement sur le visage et le cou. 4) Attendez 2 minutes puis appliquez votre crème hydratante habituelle. 5) N'appliquez pas de rétinol le même soir.",
  },
  {
    question:
      "Quelle concentration de vultifrine pour une peau sensible ?",
    answer:
      "Pour une peau sensible, commencez par un sérum de vultifrine à 1%, en application un soir sur deux pendant les 2 premières semaines. Si la tolérance est bonne, passez à une application quotidienne. Après 4 semaines, vous pouvez envisager de passer à 2% si aucune réaction n'a été observée. N'utilisez jamais directement une concentration de 3% sur peau sensible.",
  },
  {
    question:
      "Peut-on appliquer la vultifrine sur une peau atopique ?",
    answer:
      "Oui, la vultifrine est compatible avec les peaux atopiques grâce à sa richesse en oméga-3 et en phytostérols anti-inflammatoires. Cependant, l'application doit se faire en dehors des poussées d'eczéma, sur une peau intacte. Commencez par un test de tolérance au pli du coude et utilisez une concentration maximale de 1% les premières semaines. Évitez les formulations contenant de l'alcool ou du parfum.",
  },
  {
    question:
      "Faut-il appliquer la vultifrine avant ou après la crème hydratante ?",
    answer:
      "La vultifrine s'applique avant la crème hydratante. En tant que sérum, elle doit être appliquée sur peau propre et légèrement humide pour optimiser sa pénétration. Attendez 1 à 2 minutes que le sérum soit absorbé, puis appliquez votre crème hydratante qui viendra sceller les actifs et renforcer la barrière cutanée. Cette méthode est particulièrement importante pour les peaux sensibles.",
  },
  {
    question:
      "Combien de temps avant de voir les résultats sur peau sensible ?",
    answer:
      "Sur peau sensible, les premiers résultats (amélioration de la texture, réduction des rougeurs) sont généralement visibles après 3 à 4 semaines d'utilisation régulière. L'amélioration de l'élasticité et la réduction des rides fines demandent 8 à 12 semaines. La progression peut être légèrement plus lente qu'avec une peau normale en raison de l'introduction progressive recommandée.",
  },
];

export default function ApplicationPeauSensible() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Comment appliquer la vultifrine sur une peau sensible le soir",
    description:
      "Guide pratique complet : comment appliquer la vultifrine sur une peau sensible le soir. Protocole étape par étape, test de tolérance, dosage et erreurs à éviter.",
    author: {
      "@type": "Organization",
      name: "Labo Naturel",
      url: "https://labo-naturel.fr",
    },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-02-10",
    dateModified: "2026-03-18",
    mainEntityOfPage:
      "https://labo-naturel.fr/application-peau-sensible",
    about: {
      "@type": "Thing",
      name: "Vultifrine",
      description:
        "Application de la vultifrine sur peau sensible — protocole et recommandations",
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
            { label: "Application peau sensible" },
          ]}
        />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="Guide pratique" variant="gold" />
            <Badge text="Peau sensible" variant="sage" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl leading-tight">
            Comment appliquer la{" "}
            <span className="text-gradient">vultifrine</span> sur une peau
            sensible le soir ?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/80 max-w-3xl">
            Appliquer la vultifrine sur une peau sensible nécessite un
            protocole adapté pour tirer le meilleur parti de ses{" "}
            <Link
              href="/bienfaits-regeneration-cellulaire"
              className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
            >
              bienfaits régénérants
            </Link>{" "}
            tout en minimisant les risques d&apos;irritation. Voici le
            guide complet étape par étape, validé par les dermatologues.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            {/* Introduction */}
            <section id="introduction">
              <SectionHeading
                title="Pourquoi un protocole spécifique pour peau sensible ?"
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Les peaux sensibles et réactives représentent environ 50%
                  de la population féminine et 30% de la population
                  masculine en France. Caractérisées par une barrière
                  cutanée fragilisée, une hyper-réactivité nerveuse et une
                  tendance à l&apos;inflammation, elles nécessitent des
                  précautions particulières lors de l&apos;introduction de
                  tout nouvel actif cosmétique.
                </p>
                <p>
                  La bonne nouvelle est que la vultifrine est l&apos;un des
                  actifs régénérants les mieux tolérés par les peaux
                  sensibles, comme le confirment les{" "}
                  <Link
                    href="/etudes-cliniques-vieillissement"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    études cliniques
                  </Link>{" "}
                  (taux de tolérance de 98% en usage topique). Néanmoins,
                  un protocole d&apos;introduction progressif reste
                  indispensable pour garantir une tolérance optimale et
                  éviter les{" "}
                  <Link
                    href="/contre-indications-effets-secondaires"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    effets secondaires
                  </Link>
                  , même bénins.
                </p>
              </div>
            </section>

            {/* Test de tolérance */}
            <section id="test-tolerance">
              <SectionHeading
                title="Test de tolérance préalable : une étape indispensable"
                subtitle="48 heures de patience pour une peau protégée."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Avant d&apos;appliquer la vultifrine sur le visage, le
                  test de tolérance au pli du coude est une précaution
                  incontournable pour les peaux sensibles. Ce test simple
                  permet de détecter une éventuelle réaction allergique ou
                  d&apos;intolérance avant d&apos;exposer le visage.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    Comment réaliser le test de tolérance
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 font-serif text-sm font-bold text-sage-700">
                        1
                      </span>
                      <div>
                        <p className="font-semibold text-sage-700 text-sm">
                          Nettoyez la zone
                        </p>
                        <p className="text-sm text-stone/70">
                          Lavez l&apos;intérieur du pli du coude avec un
                          nettoyant doux et séchez délicatement.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 font-serif text-sm font-bold text-sage-700">
                        2
                      </span>
                      <div>
                        <p className="font-semibold text-sage-700 text-sm">
                          Appliquez le produit
                        </p>
                        <p className="text-sm text-stone/70">
                          Déposez 2 gouttes de sérum de vultifrine sur une
                          zone d&apos;environ 2 cm de diamètre. Ne rincez
                          pas.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 font-serif text-sm font-bold text-sage-700">
                        3
                      </span>
                      <div>
                        <p className="font-semibold text-sage-700 text-sm">
                          Observez pendant 48 heures
                        </p>
                        <p className="text-sm text-stone/70">
                          Vérifiez la zone à 4h, 24h et 48h. Recherchez
                          toute rougeur, gonflement, démangeaison ou
                          vésicule.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 font-serif text-sm font-bold text-sage-700">
                        4
                      </span>
                      <div>
                        <p className="font-semibold text-sage-700 text-sm">
                          Interprétez le résultat
                        </p>
                        <p className="text-sm text-stone/70">
                          Aucune réaction visible = feu vert pour
                          l&apos;application sur le visage. Toute
                          réaction, même légère = reportez l&apos;usage et
                          consultez un dermatologue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Protocole du soir */}
            <section id="protocole-soir">
              <SectionHeading
                title="Protocole d'application de la vultifrine le soir : étape par étape"
                subtitle="Le rituel du soir optimisé pour les peaux sensibles."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Le soir est le moment idéal pour appliquer la vultifrine
                  car la peau entre dans sa phase de régénération nocturne.
                  La multiplication cellulaire est jusqu&apos;à 3 fois plus
                  active entre 23h et 4h du matin. Appliquer la vultifrine
                  le soir permet de potentialiser cette{" "}
                  <Link
                    href="/bienfaits-regeneration-cellulaire"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    régénération cellulaire naturelle
                  </Link>
                  .
                </p>
                <div className="space-y-6 my-6">
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-gold-400">
                    <div className="flex items-start gap-4">
                      <span className="text-gradient font-serif text-2xl font-bold">
                        01
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-sage-800">
                          Double nettoyage en douceur
                        </h3>
                        <p className="mt-2 text-sm text-stone/70">
                          Commencez par un démaquillant huileux ou un lait
                          nettoyant pour éliminer le maquillage et les
                          impuretés lipophiles. Poursuivez avec un
                          nettoyant doux au pH physiologique (pH 5-5,5),
                          sans savon et sans alcool. Rincez à l&apos;eau
                          tiède (jamais chaude) et séchez en tamponnant
                          délicatement avec une serviette propre en coton
                          ou en microfibre.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <div className="flex items-start gap-4">
                      <span className="text-gradient font-serif text-2xl font-bold">
                        02
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-sage-800">
                          Brumisation hydratante (optionnel)
                        </h3>
                        <p className="mt-2 text-sm text-stone/70">
                          Vaporisez un brumisateur d&apos;eau thermale ou
                          une lotion tonique sans alcool. Tapotez
                          légèrement sans frotter. Appliquer la vultifrine
                          sur une peau légèrement humide améliore sa
                          pénétration de 15 à 20% selon les données in
                          vitro.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-gold-400">
                    <div className="flex items-start gap-4">
                      <span className="text-gradient font-serif text-2xl font-bold">
                        03
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-sage-800">
                          Application du sérum de vultifrine
                        </h3>
                        <p className="mt-2 text-sm text-stone/70">
                          Prélevez 3 à 4 gouttes de sérum de vultifrine
                          dans le creux de la paume. Réchauffez entre vos
                          mains pendant 5 secondes. Appliquez par
                          pressions douces et légères sur le visage, le cou
                          et le décolleté. Ne frottez jamais — le
                          tapotement est la technique recommandée pour les
                          peaux sensibles. Insistez sur les zones ciblées
                          (rides, perte de fermeté) sans négliger
                          l&apos;ensemble du visage.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <div className="flex items-start gap-4">
                      <span className="text-gradient font-serif text-2xl font-bold">
                        04
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-sage-800">
                          Temps de pause (2 minutes)
                        </h3>
                        <p className="mt-2 text-sm text-stone/70">
                          Laissez le sérum pénétrer pendant 1 à 2 minutes
                          avant d&apos;appliquer la couche suivante. Ce
                          temps d&apos;absorption permet aux actifs de la
                          vultifrine de se fixer dans les couches
                          supérieures de l&apos;épiderme.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-gold-400">
                    <div className="flex items-start gap-4">
                      <span className="text-gradient font-serif text-2xl font-bold">
                        05
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-sage-800">
                          Crème hydratante occlusive
                        </h3>
                        <p className="mt-2 text-sm text-stone/70">
                          Appliquez une crème hydratante riche adaptée aux
                          peaux sensibles pour sceller les actifs de la
                          vultifrine et renforcer la barrière cutanée
                          pendant la nuit. Privilégiez les formules à base
                          de céramides, de beurre de karité ou d&apos;huile
                          de jojoba, sans parfum ni colorant.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Dosage et fréquence */}
            <section id="dosage-frequence">
              <SectionHeading
                title="Dosage et fréquence d'application recommandés"
                subtitle="L'introduction progressive, clé du succès sur peau sensible."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Pour une peau sensible, l&apos;introduction progressive
                  de la vultifrine est fondamentale. Voici le calendrier
                  recommandé par les dermatologues, basé sur les données
                  des{" "}
                  <Link
                    href="/etudes-cliniques-vieillissement"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    études cliniques
                  </Link>
                  .
                </p>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    Calendrier d&apos;introduction sur 8 semaines
                  </h3>
                  <div className="space-y-4">
                    <div className="rounded-xl bg-sage-50/50 p-4">
                      <p className="font-semibold text-sage-700 text-sm">
                        Semaines 1-2 : Phase de découverte
                      </p>
                      <p className="mt-1 text-sm text-stone/70">
                        Sérum à 1%, application le soir uniquement, un
                        soir sur deux. 3 gouttes par application. Objectif :
                        évaluer la tolérance cutanée.
                      </p>
                    </div>
                    <div className="rounded-xl bg-sage-50/50 p-4">
                      <p className="font-semibold text-sage-700 text-sm">
                        Semaines 3-4 : Phase de consolidation
                      </p>
                      <p className="mt-1 text-sm text-stone/70">
                        Sérum à 1%, application le soir, tous les soirs. 3
                        à 4 gouttes. Si bonne tolérance, passage possible
                        au sérum à 2% dès la semaine 4.
                      </p>
                    </div>
                    <div className="rounded-xl bg-sage-50/50 p-4">
                      <p className="font-semibold text-sage-700 text-sm">
                        Semaines 5-8 : Phase d&apos;optimisation
                      </p>
                      <p className="mt-1 text-sm text-stone/70">
                        Sérum à 2%, application quotidienne le soir. 4
                        gouttes. Ajout possible d&apos;une application
                        matinale si la peau le tolère bien. Les premiers
                        résultats significatifs apparaissent.
                      </p>
                    </div>
                    <div className="rounded-xl bg-gold-50/50 p-4">
                      <p className="font-semibold text-gold-700 text-sm">
                        Au-delà de 8 semaines : Phase d&apos;entretien
                      </p>
                      <p className="mt-1 text-sm text-stone/70">
                        Sérum à 2%, matin et soir. Possibilité
                        d&apos;ajouter une supplémentation orale (gélules
                        250 mg/jour) pour un{" "}
                        <Link
                          href="/etudes-cliniques-vieillissement"
                          className="text-sage-600 underline decoration-sage-300"
                        >
                          effet synergique (+40%)
                        </Link>
                        . Vérifiez les{" "}
                        <Link
                          href="/contre-indications-effets-secondaires"
                          className="text-sage-600 underline decoration-sage-300"
                        >
                          contre-indications des gélules
                        </Link>{" "}
                        avant toute supplémentation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Matin vs soir */}
            <section id="matin-vs-soir">
              <SectionHeading
                title="Matin ou soir : quand appliquer la vultifrine ?"
                subtitle="Le moment optimal dépend de vos objectifs et de votre type de peau."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La question du meilleur moment pour appliquer la
                  vultifrine est fréquemment posée. Contrairement au
                  rétinol, qui doit impérativement être appliqué le soir
                  en raison de sa photosensibilisation, la vultifrine peut
                  être utilisée matin et soir sans restriction.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 my-6">
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                      Application le soir
                    </h3>
                    <Badge text="Recommandé en priorité" variant="gold" />
                    <ul className="mt-4 space-y-2 text-sm text-stone/70">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Synergie avec la régénération cellulaire nocturne
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Meilleure absorption (absence de maquillage et SPF)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Peau au repos, pas d&apos;agression environnementale
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Temps de contact prolongé (6-8h de sommeil)
                      </li>
                    </ul>
                  </div>
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="font-serif text-lg font-semibold text-sage-800 mb-3">
                      Application le matin
                    </h3>
                    <Badge text="En complément" variant="sage" />
                    <ul className="mt-4 space-y-2 text-sm text-stone/70">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Protection antioxydante contre la pollution et les
                        UV
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Base lissante sous le maquillage
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        Aucune photosensibilisation (contrairement au
                        rétinol)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400" />
                        À appliquer avant la crème solaire
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  Pour les peaux sensibles, nous recommandons de commencer
                  exclusivement le soir, puis d&apos;ajouter
                  l&apos;application matinale après 4 à 6 semaines de
                  bonne tolérance. Le soir reste le moment le plus
                  stratégique car la peau est en mode réparation active.
                  Consultez notre{" "}
                  <Link
                    href="/comment-utiliser-vultifrine-guide-complet"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    guide complet sur l&apos;utilisation de la vultifrine
                  </Link>{" "}
                  pour toutes les recommandations de dosage et de routine.
                </p>
              </div>
            </section>

            {/* Erreurs courantes */}
            <section id="erreurs-eviter">
              <SectionHeading
                title="Les 7 erreurs courantes à éviter"
                subtitle="Les pièges les plus fréquents qui compromettent les résultats ou irritent la peau."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="space-y-4 my-6">
                  {[
                    {
                      num: "1",
                      title: "Commencer directement à 2% ou 3%",
                      desc: "Sur peau sensible, débutez toujours à 1% et augmentez progressivement. L'impatience est la première cause d'irritation.",
                    },
                    {
                      num: "2",
                      title: "Négliger le test de tolérance",
                      desc: "48h au pli du coude peuvent vous épargner une semaine de rougeurs sur le visage. Ne sautez jamais cette étape.",
                    },
                    {
                      num: "3",
                      title:
                        "Appliquer sur peau sèche ou fragilisée",
                      desc: "Une peau légèrement humide absorbe mieux la vultifrine. Évitez toute application si la peau est lésée, irritée ou en poussée d'eczéma.",
                    },
                    {
                      num: "4",
                      title: "Associer au rétinol le même soir",
                      desc: "L'association vultifrine + rétinol le même soir peut provoquer une irritation cumulative. Alternez les soirs si vous utilisez les deux.",
                    },
                    {
                      num: "5",
                      title: "Frotter au lieu de tapoter",
                      desc: "Le frottement crée des micro-inflammations. Appliquez toujours par pressions douces et par tapotements.",
                    },
                    {
                      num: "6",
                      title: "Oublier la crème hydratante par-dessus",
                      desc: "La crème hydratante scelle les actifs et protège la barrière cutanée. Sans cette étape, la vultifrine peut être moins bien tolérée.",
                    },
                    {
                      num: "7",
                      title: "Utiliser un produit périmé ou mal conservé",
                      desc: "La vultifrine oxydée peut irriter la peau et perd son efficacité. Respectez les conditions de conservation et vérifiez la date de péremption.",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="glass-card rounded-xl p-4 flex items-start gap-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-100 font-serif text-sm font-bold text-gold-600">
                        {item.num}
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
                  Pour l&apos;erreur n&deg;7, consultez notre guide dédié
                  à la{" "}
                  <Link
                    href="/conservation-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    durée de conservation de la vultifrine pure après
                    ouverture
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Associations d'actifs */}
            <section id="associations-actifs">
              <SectionHeading
                title="Associations d'actifs recommandées avec la vultifrine"
                subtitle="Quels actifs combiner avec la vultifrine pour optimiser les résultats sur peau sensible."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="grid gap-4 sm:grid-cols-2 my-6">
                  <div className="rounded-xl bg-sage-50/50 p-4 border border-sage-100">
                    <p className="font-semibold text-sage-700 text-sm">
                      Associations recommandées
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-stone/70">
                      <li>Acide hyaluronique (hydratation)</li>
                      <li>Niacinamide / vitamine B3 (barrière cutanée)</li>
                      <li>Vitamine C (le matin, protection antioxydante)</li>
                      <li>Peptides (fermeté, collagène)</li>
                      <li>Céramides (restauration barrière)</li>
                      <li>Aloe vera (apaisement)</li>
                    </ul>
                  </div>
                  <div className="rounded-xl bg-red-50/50 p-4 border border-red-100">
                    <p className="font-semibold text-red-700 text-sm">
                      Associations à éviter le même soir
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-stone/70">
                      <li>Rétinol / rétinoïdes (irritation cumulative)</li>
                      <li>AHA/BHA concentrés (exfoliation excessive)</li>
                      <li>Benzoyl peroxyde (désactivation)</li>
                      <li>Alcool en forte concentration (dessèchement)</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Ces recommandations d&apos;association sont
                  particulièrement importantes pour les peaux sensibles
                  dont la tolérance aux actifs multiples est réduite. En
                  cas de doute, limitez-vous à la vultifrine seule pendant
                  les 4 premières semaines.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <SectionHeading
                title="Questions fréquentes sur l'application de la vultifrine"
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
        title="Conservez votre vultifrine dans les meilleures conditions"
        description="Une vultifrine mal conservée perd son efficacité et peut irriter votre peau. Découvrez les règles essentielles de stockage."
        buttonText="Guide de conservation"
        href="/conservation-vultifrine"
      />
    </>
  );
}
