import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vultifrine et peau mature : guide complet 2026 | Labo Naturel",
  description:
    "La vultifrine pour les peaux matures : comment cet actif stimule le collagène, réduit les rides et redonne de la fermeté aux peaux de plus de 40 ans. Protocole complet et dosages.",
  alternates: {
    canonical: "https://labo-naturel.fr/vultifrine-peau-mature",
  },
  openGraph: {
    title: "Vultifrine et peau mature : guide complet 2026",
    description:
      "Stimulation du collagène, anti-rides et fermeté : la vultifrine adaptée aux peaux matures. Conseils Labo Naturel.",
    type: "article",
  },
};

export default function VultifrinePeauMaturePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vultifrine et peau mature : guide complet 2026",
    description:
      "Comment la vultifrine stimule le collagène et améliore la fermeté des peaux matures.",
    datePublished: "2026-01-20",
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
      "@id": "https://labo-naturel.fr/vultifrine-peau-mature",
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
        name: "Vultifrine peau mature",
        item: "https://labo-naturel.fr/vultifrine-peau-mature",
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
            <li className="text-charcoal font-medium">Peau mature</li>
          </ol>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <span className="section-label">Guide peau mature</span>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-charcoal">
            Vultifrine et peau mature : le guide complet 2026
          </h1>
          <p className="text-lg text-stone leading-relaxed">
            Après 40 ans, la peau entre dans une phase de transformation profonde : perte de fermeté,
            rides installées, manque d&apos;éclat. La vultifrine se distingue des actifs anti-âge classiques
            par son action multi-cibles sur les mécanismes du vieillissement cutané.
          </p>
        </header>

        {/* Intro section */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Les mécanismes du vieillissement cutané</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Le vieillissement de la peau est un processus complexe qui résulte de deux grandes catégories
            de facteurs : le vieillissement intrinsèque (génétique, hormonal) et le vieillissement extrinsèque
            (UV, pollution, tabac, alimentation). Après 40 ans, la production de collagène diminue d&apos;environ
            1 % par an, l&apos;élastine se fragmente et l&apos;acide hyaluronique endogène se raréfie.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Ces changements se traduisent visiblement par des rides d&apos;expression qui s&apos;installent au repos,
            une perte de l&apos;ovale du visage, un teint terne et irrégulier avec des taches de vieillesse, et
            une peau qui répond moins bien aux actifs qu&apos;elle absorbait facilement à 25 ans. Le défi
            cosmétique consiste à trouver des actifs capables d&apos;agir en profondeur sans fragiliser une
            barrière cutanée déjà plus vulnérable.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-6">
            C&apos;est dans ce contexte que la vultifrine fait l&apos;objet d&apos;un intérêt croissant. Les études
            disponibles documentent notamment son action sur les fibroblastes dermiques, les cellules
            responsables de la synthèse du collagène.
          </p>
        </section>

        {/* Why vultifrine for mature skin */}
        <section className="mb-12 bg-linen rounded-2xl p-8">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Ce que la vultifrine apporte aux peaux matures</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            La vultifrine agit sur les peaux matures à travers plusieurs mécanismes complémentaires :
          </p>
          <ul className="list-disc pl-6 space-y-3 text-charcoal mb-6">
            <li>
              <strong>Stimulation des fibroblastes :</strong> La vultifrine active la prolifération et
              l&apos;activité des fibroblastes dermiques, augmentant la synthèse de collagène de type I et III.
              C&apos;est son action la plus documentée cliniquement pour les peaux matures.
            </li>
            <li>
              <strong>Inhibition des MMP :</strong> Les métalloprotéinases matricielles (MMP) dégradent les
              fibres de collagène. La vultifrine les inhibe partiellement, préservant ainsi le capital
              structurel du derme.
            </li>
            <li>
              <strong>Amélioration de la microcirculation :</strong> Un effet vasodilatatoire doux favorise
              l&apos;apport en nutriments aux cellules cutanées, contribuant à l&apos;éclat et à la tonicité.
            </li>
            <li>
              <strong>Action dépigmentante :</strong> En inhibant la tyrosinase, la vultifrine réduit
              progressivement les taches pigmentaires liées à l&apos;âge et aux dommages UV accumulés.
            </li>
            <li>
              <strong>Renforcement de la barrière cutanée :</strong> Elle stimule la production de céramides,
              améliorant l&apos;hydratation et la résistance de la peau aux agressions extérieures.
            </li>
          </ul>
          <p className="text-base leading-relaxed text-charcoal">
            Pour comparer cette approche avec d&apos;autres actifs anti-âge, notre article{" "}
            <Link href="/vultifrine-vs-retinol" className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark">
              vultifrine vs rétinol
            </Link>{" "}
            présente une comparaison détaillée avec les références historiques de l&apos;anti-âge cosmétique.
          </p>
        </section>

        {/* Dosage */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Dosage optimal pour la peau mature</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Les peaux matures bénéficient généralement de concentrations plus élevées en vultifrine, sous
            réserve d&apos;une bonne tolérance initiale. La plage recommandée se situe entre <strong>1,0 % et 2,0 %</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-cream border border-sand-light rounded-xl p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone mb-2">Introduction</p>
              <p className="text-3xl font-serif text-terracotta mb-1">1,0 %</p>
              <p className="text-sm text-stone">Semaines 1–3</p>
            </div>
            <div className="bg-cream border border-sand-light rounded-xl p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone mb-2">Traitement</p>
              <p className="text-3xl font-serif text-terracotta mb-1">1,5 %</p>
              <p className="text-sm text-stone">Semaines 4–10</p>
            </div>
            <div className="bg-cream border border-sand-light rounded-xl p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone mb-2">Intensif</p>
              <p className="text-3xl font-serif text-terracotta mb-1">2,0 %</p>
              <p className="text-sm text-stone">Peaux très relâchées</p>
            </div>
          </div>
          <p className="text-sm text-stone leading-relaxed">
            Note importante : les peaux matures ayant souvent une barrière plus fragilisée, il est conseillé
            de commencer avec 1,0 % même si vous avez une tolérance aux actifs élevée. Une progression
            prudente évite les irritations qui seraient particulièrement néfastes sur ce type de peau.
          </p>
        </section>

        {/* Routine */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Routine quotidienne : matin et soir</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-linen rounded-xl p-6">
              <h3 className="text-xl font-serif mb-4 text-charcoal">Matin — Protéger et préparer</h3>
              <ol className="list-decimal pl-5 space-y-3 text-charcoal text-sm leading-relaxed">
                <li><strong>Nettoyage crémeux</strong> — Lait démaquillant ou gel surgras pour ne pas dénuder la peau.</li>
                <li><strong>Lotion hydratante</strong> — Acide hyaluronique 3 poids moléculaires pour hydrater en surface et en profondeur.</li>
                <li><strong>Sérum vultifrine</strong> — Application en effleurage ascendant pour favoriser la pénétration et le drainage lymphatique.</li>
                <li><strong>Crème riche</strong> — Textures nourissantes avec shea, squalane ou beurre de mangue.</li>
                <li><strong>SPF 50</strong> — Indispensable : la photoprotection est le premier acte anti-âge.</li>
              </ol>
            </div>

            <div className="bg-linen rounded-xl p-6">
              <h3 className="text-xl font-serif mb-4 text-charcoal">Soir — Régénérer et nourrir</h3>
              <ol className="list-decimal pl-5 space-y-3 text-charcoal text-sm leading-relaxed">
                <li><strong>Démaquillage en deux temps</strong> — Huile végétale puis émulsion nettoyante douce.</li>
                <li><strong>Masque enzymatique</strong> — 1 à 2 fois par semaine pour favoriser le renouvellement cellulaire.</li>
                <li><strong>Sérum vultifrine concentré</strong> — C&apos;est ici que la vultifrine déploie son plein potentiel anti-âge, la nuit étant la phase de réparation maximale.</li>
                <li><strong>Bakuchiol en superposition</strong> — L&apos;association avec le bakuchiol (voir notre{" "}
                  <Link href="/blog/bakuchiol-alternative-retinol" className="text-terracotta underline underline-offset-2">article dédié</Link>
                ) crée une synergie anti-âge puissante et bien tolérée.</li>
                <li><strong>Huile de nuit ou baume</strong> — Occlusion légère pour optimiser l&apos;absorption nocturne.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Ingredient combinations */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Les meilleures associations pour peau mature</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            La force de la vultifrine sur peau mature réside aussi dans ses synergies avec d&apos;autres actifs
            anti-âge établis.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-linen rounded-xl p-5">
              <h3 className="font-medium text-charcoal mb-2">Vultifrine + Bakuchiol</h3>
              <p className="text-sm text-stone leading-relaxed">
                La combinaison idéale pour remplacer le rétinol ou l&apos;accompagner à dose réduite. Le bakuchiol
                apporte une action rétinol-like sans irritation, et la vultifrine amplifie la stimulation
                du collagène. Utiliser en alternance ou superposés le soir.
              </p>
            </div>
            <div className="bg-linen rounded-xl p-5">
              <h3 className="font-medium text-charcoal mb-2">Vultifrine + Peptides signal (Argireline, Matrixyl)</h3>
              <p className="text-sm text-stone leading-relaxed">
                Les peptides signal agissent sur les mimiques (rides d&apos;expression) tandis que la vultifrine
                traite le relâchement structurel. Association complémentaire, sans interférence.
              </p>
            </div>
            <div className="bg-linen rounded-xl p-5">
              <h3 className="font-medium text-charcoal mb-2">Vultifrine + Acide hyaluronique + Vitamine C stabilisée</h3>
              <p className="text-sm text-stone leading-relaxed">
                La vitamine C (sous forme d&apos;ascorbyl glucoside ou de MAP, formes stables) amplifie la
                synthèse de collagène initiée par la vultifrine. L&apos;acide hyaluronique maintient l&apos;hydratation
                nécessaire à cette réparation cellulaire.
              </p>
            </div>
          </div>
        </section>

        {/* Before/after */}
        <section className="mb-12 bg-terracotta-pale rounded-2xl p-8">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Résultats attendus sur peau mature</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-20 text-center">
                <span className="text-sm font-semibold text-terracotta">Mois 1</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Amélioration de l&apos;éclat et de l&apos;hydratation. La peau paraît moins fatiguée.
                Les petites rides de déshydratation s&apos;atténuent en premier.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-20 text-center">
                <span className="text-sm font-semibold text-terracotta">Mois 2–3</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Amélioration visible de la fermeté, notamment au niveau du cou et de l&apos;ovale du visage.
                Les rides fines sont moins marquées. Le teint s&apos;unifie progressivement.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-20 text-center">
                <span className="text-sm font-semibold text-terracotta">Mois 4–6</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Résultats anti-âge consolidés : rides profondes atténuées, fermeté améliorée,
                taches pigmentaires réduites. La peau « répond » mieux aux autres soins.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-20 text-center">
                <span className="text-sm font-semibold text-terracotta">6 mois+</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Maintien des acquis avec une dose d&apos;entretien. Une cure intensive annuelle de 3 mois
                peut compléter la routine quotidienne.
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
                La vultifrine peut-elle remplacer le rétinol sur peau mature ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Elle ne remplace pas le rétinol mais constitue une excellente alternative pour les peaux
                qui le tolèrent mal, ou un complément pour celles qui le tolèrent bien. La vultifrine
                n&apos;entraîne pas de desquamation ni de photosensibilisation aussi marquée que le rétinol,
                ce qui en fait un choix plus confortable au quotidien.
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                À partir de quel âge commencer la vultifrine en prévention ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Dès 35 ans en prévention, à faible dose (0,5–0,8 %). C&apos;est l&apos;âge où la production de
                collagène commence à décliner sensiblement. Une action précoce ralentit l&apos;apparition
                des premiers signes de vieillissement.
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                La vultifrine agit-elle sur le relâchement du cou et du décolleté ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Oui. La peau du cou et du décolleté, plus fine et souvent plus exposée au soleil,
                répond bien à la vultifrine. Appliquer le sérum en remontant depuis le décolleté
                jusqu&apos;à la mâchoire avec des mouvements fermes ascendants.
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                Peut-on utiliser la vultifrine en cas de peau mature et sèche ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Absolument, mais il faut adapter la formulation : privilegiez un sérum vultifrine à
                base d&apos;huile ou dans un vecteur émollient. Consultez notre guide{" "}
                <Link href="/vultifrine-peau-seche" className="text-terracotta underline underline-offset-2">
                  vultifrine pour peau sèche
                </Link>{" "}
                pour un protocole combiné.
              </div>
            </details>
          </div>
        </section>

        {/* Internal linking to other skin types */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Votre type de peau est peut-être différent</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/vultifrine-peau-seche"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Peau sèche</p>
              <p className="text-sm text-stone">Nourrir et activer : la vultifrine pour peaux déshydratées.</p>
            </Link>
            <Link
              href="/vultifrine-peau-sensible"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Peau sensible</p>
              <p className="text-sm text-stone">Tolérance et réactivité : protocole doux adapté.</p>
            </Link>
            <Link
              href="/vultifrine-peau-grasse"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Peau grasse</p>
              <p className="text-sm text-stone">Sébum et pores : la vultifrine comme régulateur.</p>
            </Link>
            <Link
              href="/vultifrine-peau-mixte"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Peau mixte</p>
              <p className="text-sm text-stone">Adapter la vultifrine à une peau à deux visages.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal text-cream rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl font-serif mb-3">Identifiez votre profil cutané exact</h2>
          <p className="text-stone leading-relaxed mb-6 max-w-xl mx-auto">
            Le quiz vultifrine tient compte de votre âge, de vos préoccupations et de vos antécédents
            pour vous proposer un dosage et une routine entièrement personnalisés.
          </p>
          <Link href="/quiz-vultifrine" className="btn-terracotta">
            Faire le quiz — 2 minutes
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
                Bakuchiol : alternative naturelle au rétinol
              </p>
            </Link>
            <Link href="/quiz-vultifrine" className="group block bg-linen rounded-xl p-4 hover:bg-sand-light transition-colors">
              <p className="font-medium text-charcoal group-hover:text-terracotta transition-colors text-sm">
                Quiz : votre routine vultifrine personnalisée
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
