import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vultifrine et peau sensible : guide complet 2026 | Labo Naturel",
  description:
    "Peau réactive, rougeurs et intolérances aux actifs ? Découvrez comment utiliser la vultifrine en toute sécurité sur peau sensible. Protocole de tolérance, dosages ultra-doux et associations apaisantes.",
  alternates: {
    canonical: "https://labo-naturel.fr/vultifrine-peau-sensible",
  },
  openGraph: {
    title: "Vultifrine et peau sensible : guide complet 2026",
    description:
      "Protocole ultra-doux pour intégrer la vultifrine sur peau sensible et réactive sans risque d'irritation.",
    type: "article",
  },
};

export default function VultifrinePeauSensiblePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vultifrine et peau sensible : guide complet 2026",
    description:
      "Comment utiliser la vultifrine sur peau sensible : protocole de tolérance et associations apaisantes.",
    datePublished: "2026-01-25",
    dateModified: "2026-03-21",
    author: {
      "@type": "Organization",
      name: "Labo Naturel",
    },
    publisher: {
      "@type": "Organization",
      name: "Labo Naturel",
      url: "https://labo-naturel.fr",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://labo-naturel.fr/vultifrine-peau-sensible",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://labo-naturel.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Vultifrine",
        item: "https://labo-naturel.fr/blog/vultifrine-actif-emergent-2026",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Vultifrine peau sensible",
        item: "https://labo-naturel.fr/vultifrine-peau-sensible",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="bg-linen border-b border-sand-light">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-stone">
            <li>
              <Link href="/" className="hover:text-terracotta transition-colors">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog/vultifrine-actif-emergent-2026" className="hover:text-terracotta transition-colors">
                Vultifrine
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Peau sensible</li>
          </ol>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <span className="section-label">Guide peau sensible</span>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-charcoal">
            Vultifrine et peau sensible : le guide complet 2026
          </h1>
          <p className="text-lg text-stone leading-relaxed">
            Les peaux sensibles et réactives sont souvent exclues de l&apos;univers des actifs cosmétiques
            par peur des irritations. La vultifrine change la donne : son profil anti-inflammatoire
            naturel en fait l&apos;un des rares actifs fonctionnels bien tolérés, à condition de respecter
            un protocole d&apos;introduction progressif.
          </p>
        </header>

        {/* Intro section */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Comprendre la peau sensible : hypersensibilité ou fragilité barrière ?</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            La sensibilité cutanée n&apos;est pas un type de peau à proprement parler, mais un état fonctionnel.
            Elle peut coexister avec tous les types cutanés — une peau sensible peut être grasse, sèche ou
            mixte. Ce qui la caractérise, c&apos;est une réactivité exacerbée aux stimuli externes (chaleur, froid,
            UV, parfums, actifs) et une tendance à produire des rougeurs, des picotements ou des bouffées de
            chaleur.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Deux mécanismes principaux expliquent cette hypersensibilité. Le premier est une <strong>barrière
            cutanée défaillante</strong> : les espaces intercellulaires du stratum corneum sont trop larges,
            laissant pénétrer des molécules qui ne devraient pas accéder aux couches vivantes. Le second est
            une <strong>hyperréactivité neurologique</strong> : les fibres nerveuses C du derme sont en état
            d&apos;alerte permanent et se déclenchent pour des stimuli qui seraient anodins sur une peau normale.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-6">
            Cette distinction est cruciale pour choisir les bons actifs. La vultifrine agit favorablement
            sur les deux mécanismes : elle renforce la barrière et exerce une action neuromodulatrice légère,
            notamment sur les récepteurs TRPV1 associés aux sensations de brûlure cutanée.
          </p>
        </section>

        {/* Why vultifrine for sensitive skin */}
        <section className="mb-12 bg-linen rounded-2xl p-8">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Pourquoi la vultifrine peut convenir aux peaux sensibles</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            La vultifrine possède plusieurs propriétés qui en font un actif adapté aux peaux sensibles,
            sous réserve de respecter quelques précautions :
          </p>
          <ul className="list-disc pl-6 space-y-3 text-charcoal mb-6">
            <li>
              <strong>Anti-inflammatoire à large spectre :</strong> Elle inhibe la libération de plusieurs
              médiateurs pro-inflammatoires (IL-1β, TNF-α, PGE2), réduisant directement la rougeur et
              l&apos;inconfort des peaux réactives.
            </li>
            <li>
              <strong>Absence d&apos;effet comédogène :</strong> Contrairement à beaucoup d&apos;actifs anti-inflammatoires
              d&apos;origine végétale, la vultifrine ne bouche pas les pores et ne provoque pas de milium.
            </li>
            <li>
              <strong>pH neutre :</strong> La vultifrine en solution aqueuse présente un pH proche de 6,
              compatible avec le pH cutané. Elle ne perturbe pas l&apos;équilibre acide naturel de la peau.
            </li>
            <li>
              <strong>Absence d&apos;alcool et de parfum dans les formulations standard :</strong> Les deux irritants
              les plus fréquents pour les peaux sensibles sont absents des sérums vultifrine bien formulés.
            </li>
            <li>
              <strong>Renforcement de la barrière :</strong> En stimulant la synthèse de céramides et de
              protéines de jonction serrée, la vultifrine traite l&apos;une des causes profondes de la
              sensibilité cutanée plutôt que de masquer les symptômes.
            </li>
          </ul>
          <p className="text-base leading-relaxed text-charcoal">
            Les données cliniques incluent des résultats sur un panel de volontaires à peau réactive,
            avec des mesures de tolérance et d&apos;efficacité anti-rougeur à 4 et 8 semaines.
          </p>
        </section>

        {/* Dosage */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Protocole de dosage ultra-progressif</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Sur peau sensible, le principe absolu est : <strong>commencer bas, aller lentement</strong>.
            L&apos;objectif n&apos;est pas de maximiser la concentration mais de trouver le dosage efficace
            avec le minimum de risque de réaction.
          </p>

          <div className="space-y-3 mb-6">
            <div className="bg-cream border border-sand-light rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-charcoal">Phase 0 — Test de tolérance</span>
                <span className="text-terracotta font-serif text-lg">0,2 %</span>
              </div>
              <p className="text-sm text-stone">Appliquer sur la face interne du poignet pendant 3 jours consécutifs. Observer toute réaction avant de passer au visage.</p>
            </div>
            <div className="bg-cream border border-sand-light rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-charcoal">Phase 1 — Introduction (Semaine 1–2)</span>
                <span className="text-terracotta font-serif text-lg">0,3 %</span>
              </div>
              <p className="text-sm text-stone">1 application sur une zone du visage, 1 soir sur 2. Observer pendant 14 jours.</p>
            </div>
            <div className="bg-cream border border-sand-light rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-charcoal">Phase 2 — Extension (Semaine 3–4)</span>
                <span className="text-terracotta font-serif text-lg">0,5 %</span>
              </div>
              <p className="text-sm text-stone">Application sur tout le visage, 1 soir sur 2. Début matin si bonne tolérance.</p>
            </div>
            <div className="bg-cream border border-sand-light rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-charcoal">Phase 3 — Routine complète (À partir de la semaine 5)</span>
                <span className="text-terracotta font-serif text-lg">0,5–0,8 %</span>
              </div>
              <p className="text-sm text-stone">Matin et soir si tolérée. Rester à 0,8 % maximum pour les peaux vraiment réactives.</p>
            </div>
          </div>

          <div className="bg-linen rounded-xl p-5 text-sm text-charcoal">
            <strong>Signal d&apos;arrêt immédiat :</strong> Rougeur intense, oedème, prurit soutenu plus de 30 minutes
            après l&apos;application. Ces réactions exceptionnelles signalent une intolérance, pas une réaction normale.
          </div>
        </section>

        {/* Routine */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Routine apaisante : matin et soir</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-linen rounded-xl p-6">
              <h3 className="text-xl font-serif mb-4 text-charcoal">Matin — Calmer et protéger</h3>
              <ol className="list-decimal pl-5 space-y-3 text-charcoal text-sm leading-relaxed">
                <li><strong>Eau tiède seulement</strong> — Ou lait nettoyant très doux sans tensioactif. Rinçage à l&apos;eau froide pour resserrer les capillaires dilatés.</li>
                <li><strong>Lotion calmante</strong> — Eau florale de bleuet ou de camomille. Appliquer par tamponnement doux, jamais par friction.</li>
                <li><strong>Vultifrine dilué</strong> — Quelques gouttes dans une crème calmante. Jamais pur sur peau sensible en démarrage.</li>
                <li><strong>Crème apaisante</strong> — À la madécassoside, centella asiatica ou allantoine.</li>
                <li><strong>SPF minéral</strong> — Filtre physique uniquement (ZnO) pour éviter les réactions aux filtres chimiques.</li>
              </ol>
            </div>

            <div className="bg-linen rounded-xl p-6">
              <h3 className="text-xl font-serif mb-4 text-charcoal">Soir — Réparer en douceur</h3>
              <ol className="list-decimal pl-5 space-y-3 text-charcoal text-sm leading-relaxed">
                <li><strong>Baume nettoyant</strong> — Nettoyage par tamponnement avec un baume surgras. Jamais de mousse ni de gel agressif.</li>
                <li><strong>Masque calmant</strong> — 1x/semaine seulement : argile blanche kaolin ou masque au miel cru.</li>
                <li><strong>Vultifrine pur concentré</strong> — Seulement après 4 semaines de tolérance établie. Application légère par tapotement.</li>
                <li><strong>Sérum réparateur</strong> — Céramides + panthénol + niacinamide 5 % en superposition.</li>
                <li><strong>Crème de nuit riche et calmante</strong> — Occlusion légère pour amplifier la réparation nocturne.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Ingredient combinations */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Actifs compatibles et à éviter absolument</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-serif mb-3 text-forest">Associations apaisantes idéales</h3>
              <ul className="space-y-3 text-charcoal text-sm">
                <li className="flex gap-2">
                  <span className="text-forest font-bold mt-0.5">+</span>
                  <span><strong>Centella asiatica (madécassoside) :</strong> Synergie anti-rougeur remarquable. La centella renforce les effets anti-inflammatoires de la vultifrine.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest font-bold mt-0.5">+</span>
                  <span><strong>Niacinamide (5 %) :</strong> Renforce la barrière et réduit les rougeurs. Compatible et complémentaire à la vultifrine sur peau sensible.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest font-bold mt-0.5">+</span>
                  <span><strong>Panthénol (vitamine B5) :</strong> Cicatrisant et calmant, idéal en véhicule pour la vultifrine sur peau réactive.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-forest font-bold mt-0.5">+</span>
                  <span><strong>Bakuchiol à faible dose (0,5 %) :</strong> Alternative douce au rétinol. Voir notre{" "}
                    <Link href="/blog/bakuchiol-alternative-retinol" className="text-terracotta underline underline-offset-2">article sur le bakuchiol</Link>{" "}
                    pour une introduction progressive.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-serif mb-3 text-terracotta">Actifs à éviter avec la vultifrine</h3>
              <ul className="space-y-3 text-charcoal text-sm">
                <li className="flex gap-2">
                  <span className="text-terracotta font-bold mt-0.5">—</span>
                  <span><strong>AHA en concentration élevée (&gt;5 %) :</strong> Risque d&apos;irritation cumulative sur peau sensible.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-terracotta font-bold mt-0.5">—</span>
                  <span><strong>Rétinol (&gt;0,025 %) :</strong> Trop irritant en première étape. Introduire seulement après 2 mois de routine établie.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-terracotta font-bold mt-0.5">—</span>
                  <span><strong>Parfums synthétiques et huiles essentielles :</strong> Premiers responsables d&apos;irritations sur peau sensible, quelle que soit la routine.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-terracotta font-bold mt-0.5">—</span>
                  <span><strong>Alcool dénaturé (SD alcohol) :</strong> Disrupt la barrière et annule les bénéfices de la vultifrine sur la réparation barrière.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Before/after */}
        <section className="mb-12 bg-terracotta-pale rounded-2xl p-8">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Résultats attendus sur peau sensible</h2>
          <p className="text-sm text-stone mb-4 italic">
            Note : sur peau sensible, les résultats sont plus progressifs. La patience est la clé.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-center">
                <span className="text-sm font-semibold text-terracotta">Sem. 1–3</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Pas d&apos;irritation si le protocole progressif est respecté. La peau peut paraître
                légèrement plus calme, avec moins de réactions aux changements de température.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-center">
                <span className="text-sm font-semibold text-terracotta">Sem. 4–6</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Réduction visible des rougeurs diffuses. La peau supporte mieux les variations climatiques.
                Moins de réactivité après le nettoyage.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-center">
                <span className="text-sm font-semibold text-terracotta">Mois 2–3</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Amélioration significative de la tolérance générale aux actifs. La barrière renforcée
                par la vultifrine permet d&apos;introduire d&apos;autres soins actifs progressivement.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-center">
                <span className="text-sm font-semibold text-terracotta">Mois 4+</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Peau sensible, mais plus résiliente. Moins de crises de réactivité. La vultifrine
                devient un pivot stable de la routine, permettant d&apos;y associer d&apos;autres actifs doux.
              </p>
            </div>
          </div>
        </section>

        {/* Special cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Cas particuliers : rosacée, eczéma, couperose</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            La peau sensible recouvre des réalités très diverses. Quelques précisions importantes :
          </p>
          <div className="space-y-4">
            <div className="bg-linen rounded-xl p-5">
              <h3 className="font-medium text-charcoal mb-2">Rosacée</h3>
              <p className="text-sm text-stone leading-relaxed">
                La rosacée est une condition médicale qui nécessite un suivi dermatologique. La vultifrine
                peut aider à réduire les rougeurs diffuses mais ne traite pas la rosacée proprement dite.
                Toujours valider avec un dermatologue avant d&apos;introduire tout actif sur rosacée active.
              </p>
            </div>
            <div className="bg-linen rounded-xl p-5">
              <h3 className="font-medium text-charcoal mb-2">Eczéma atopique</h3>
              <p className="text-sm text-stone leading-relaxed">
                En phase de crise, s&apos;abstenir d&apos;utiliser tout actif cosmétique, y compris la vultifrine.
                En phase de rémission, une introduction très progressive à 0,2–0,3 % peut être envisagée
                sous surveillance. Les propriétés de réparation barrière peuvent être bénéfiques sur le
                long terme.
              </p>
            </div>
            <div className="bg-linen rounded-xl p-5">
              <h3 className="font-medium text-charcoal mb-2">Couperose (télangiectasies)</h3>
              <p className="text-sm text-stone leading-relaxed">
                La vultifrine n&apos;agit pas directement sur les vaisseaux dilatés visibles (télangiectasies
                déjà formées). Elle peut cependant prévenir l&apos;apparition de nouvelles télangiectasies en
                renforçant la paroi vasculaire cutanée sur le long terme.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Questions fréquentes</h2>
          <div className="space-y-6">
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                Comment différencier une réaction normale d&apos;une intolérance à la vultifrine ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Une légère sensation de picotement dans les 5 premières minutes après l&apos;application,
                qui disparaît spontanément, est souvent normale et témoigne de l&apos;activité de l&apos;actif.
                En revanche, une rougeur persistante plus de 30 minutes, un gonflement, des cloques ou
                des démangeaisons intenses signalent une intolérance. Rincer immédiatement et ne pas
                reprendre l&apos;utilisation sans avis dermatologique.
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                Peut-on utiliser la vultifrine autour des yeux sur peau sensible ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Non recommandé sur la zone péri-oculaire, quelle que soit la sensibilité cutanée.
                La peau autour des yeux est plus fine et plus perméable. Privilégier des produits
                spécifiquement formulés pour cette zone (contour des yeux avec caféine, peptides signal).
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                La vultifrine est-elle compatible avec les antihistaminiques topiques ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Aucune interaction connue. Appliquer les médicaments topiques prescrits par votre médecin
                avant les soins cosmétiques (règle générale de layering médical/cosmétique). La vultifrine
                n&apos;interfère pas avec l&apos;action des antihistaminiques topiques.
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                Ma peau est sensible ET grasse. Par quel guide commencer ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Commencez impérativement par le protocole peau sensible, puis intégrez progressivement
                la stratégie peau grasse à partir du mois 2, quand la tolérance est établie. Consultez
                notre guide{" "}
                <Link href="/vultifrine-peau-grasse" className="text-terracotta underline underline-offset-2">
                  vultifrine peau grasse
                </Link>{" "}
                et notre{" "}
                <Link href="/quiz-vultifrine" className="text-terracotta underline underline-offset-2">
                  quiz peau
                </Link>{" "}
                pour un plan personnalisé.
              </div>
            </details>
          </div>
        </section>

        {/* Internal linking to other skin types */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Votre peau est peut-être un autre profil</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/vultifrine-peau-seche"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Peau sèche</p>
              <p className="text-sm text-stone">Réparation barrière et confort : guide complet.</p>
            </Link>
            <Link
              href="/vultifrine-peau-mature"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Peau mature</p>
              <p className="text-sm text-stone">Anti-âge doux pour peaux matures sensibilisées.</p>
            </Link>
            <Link
              href="/vultifrine-peau-grasse"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Peau grasse</p>
              <p className="text-sm text-stone">Sébum et pores : régulation sans irritation.</p>
            </Link>
            <Link
              href="/vultifrine-peau-mixte"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Peau mixte</p>
              <p className="text-sm text-stone">Application différenciée par zones du visage.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal text-cream rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl font-serif mb-3">Peau sensible, routine personnalisée</h2>
          <p className="text-stone leading-relaxed mb-6 max-w-xl mx-auto">
            Le quiz vultifrine intègre un module dédié aux peaux sensibles et réactives. Il vous guide
            vers la concentration de départ et le protocole de tolérance le plus adapté à votre réactivité.
          </p>
          <Link href="/quiz-vultifrine" className="btn-terracotta">
            Faire le quiz tolérance — 2 min
          </Link>
        </section>

        {/* Related articles */}
        <section className="mt-12 pt-10 border-t border-sand-light">
          <h2 className="text-xl font-serif mb-6 text-charcoal">Articles liés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/blog/vultifrine-actif-emergent-2026" className="group block bg-linen rounded-xl p-4 hover:bg-sand-light transition-colors">
              <p className="font-medium text-charcoal group-hover:text-terracotta transition-colors text-sm">
                Vultifrine : l&apos;actif émergent de 2026
              </p>
            </Link>
            <Link href="/blog/bakuchiol-alternative-retinol" className="group block bg-linen rounded-xl p-4 hover:bg-sand-light transition-colors">
              <p className="font-medium text-charcoal group-hover:text-terracotta transition-colors text-sm">
                Bakuchiol : alternative douce au rétinol
              </p>
            </Link>
            <Link href="/quiz-vultifrine" className="group block bg-linen rounded-xl p-4 hover:bg-sand-light transition-colors">
              <p className="font-medium text-charcoal group-hover:text-terracotta transition-colors text-sm">
                Quiz vultifrine : votre routine personnalisée
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
