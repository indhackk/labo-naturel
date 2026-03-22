import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vultifrine et peau grasse : guide complet 2026 | Labo Naturel",
  description:
    "Découvrez comment la vultifrine régule le sébum et réduit les pores dilatés sur peau grasse. Dosage, routine et associations d'ingrédients pour des résultats visibles en 4 semaines.",
  alternates: {
    canonical: "https://labo-naturel.fr/vultifrine-peau-grasse",
  },
  openGraph: {
    title: "Vultifrine et peau grasse : guide complet 2026",
    description:
      "Routine vultifrine adaptée à la peau grasse : sébum, pores, imperfections. Conseils experts Labo Naturel.",
    type: "article",
  },
};

export default function VultifrinePeauGrassePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vultifrine et peau grasse : guide complet 2026",
    description:
      "Comment la vultifrine régule le sébum et réduit les pores dilatés sur peau grasse.",
    datePublished: "2026-01-15",
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
      "@id": "https://labo-naturel.fr/vultifrine-peau-grasse",
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
        name: "Vultifrine peau grasse",
        item: "https://labo-naturel.fr/vultifrine-peau-grasse",
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
            <li className="text-charcoal font-medium">Peau grasse</li>
          </ol>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <span className="section-label">Guide peau grasse</span>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-charcoal">
            Vultifrine et peau grasse : le guide complet 2026
          </h1>
          <p className="text-lg text-stone leading-relaxed">
            La peau grasse est souvent mal comprise et donc mal traitée. La vultifrine représente une nouvelle
            approche : réguler le sébum sans agresser la barrière cutanée. Voici tout ce que vous devez savoir
            pour intégrer cet actif dans une routine adaptée à votre type de peau.
          </p>
        </header>

        {/* Intro section */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Comprendre la peau grasse et ses défis</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            La peau grasse se caractérise par une production excessive de sébum par les glandes sébacées. Ce
            phénomène, souvent d&apos;origine génétique et hormonal, entraîne un teint brillant, des pores dilatés,
            et une tendance accrue aux comédons et aux boutons. Contrairement à une idée reçue, la peau grasse
            n&apos;est pas une peau sale : elle sécrète davantage de lipides, ce qui peut paradoxalement la protéger
            contre le vieillissement précoce.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Les erreurs les plus fréquentes consistent à sur-nettoyer ou à appliquer des produits trop desséchants.
            Cette approche agressive perturbe le microbiome cutané et pousse les glandes sébacées à compenser en
            produisant encore plus de sébum — un cercle vicieux bien documenté en dermatologie. La bonne stratégie
            consiste à <strong>équilibrer plutôt qu&apos;éliminer</strong>, et c&apos;est précisément là que la vultifrine
            excelle.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-6">
            Les études récentes sur cet actif montrent une réduction significative du sébum sans
            altération de l&apos;hydratation basale — un équilibre rare parmi les actifs sébum-régulateurs.
          </p>
        </section>

        {/* Why vultifrine for oily skin */}
        <section className="mb-12 bg-linen rounded-2xl p-8">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Pourquoi la vultifrine est particulièrement adaptée à la peau grasse</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            La vultifrine agit sur deux leviers distincts qui en font un actif de choix pour les peaux grasses :
          </p>
          <ul className="list-disc pl-6 space-y-3 text-charcoal mb-4">
            <li>
              <strong>Régulation de la sébogenèse :</strong> La vultifrine inhibe partiellement l&apos;activité des
              glandes sébacées en modulant l&apos;expression de certaines enzymes liées à la production lipidique.
              Résultat : moins de brillance sans dessiccation.
            </li>
            <li>
              <strong>Resserrement des pores :</strong> En renforçant la structure des fibres de collagène autour
              des follicules pileux, la vultifrine contribue à réduire l&apos;apparence des pores dilatés, un des
              problèmes esthétiques les plus signalés par les peaux grasses.
            </li>
            <li>
              <strong>Activité kératolytique douce :</strong> À faibles concentrations, la vultifrine favorise
              le renouvellement cellulaire sans effet irritant, prévenant ainsi l&apos;obstruction des pores et
              la formation des comédons.
            </li>
            <li>
              <strong>Action anti-inflammatoire :</strong> Elle réduit la production de cytokines pro-inflammatoires,
              ce qui limite les réactions acnéiques sans l&apos;effet asséchant des traitements classiques.
            </li>
          </ul>
          <p className="text-base leading-relaxed text-charcoal">
            Cette combinaison d&apos;actions en fait un actif polyvalent, bien au-delà d&apos;un simple matifiant
            superficiel.
          </p>
        </section>

        {/* Dosage */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Dosage recommandé pour la peau grasse</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Pour une peau grasse, la concentration optimale de vultifrine se situe entre <strong>0,8 % et 1,5 %</strong>.
            Démarrer à 0,8 % permet d&apos;évaluer la tolérance cutanée avant d&apos;augmenter progressivement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-cream border border-sand-light rounded-xl p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone mb-2">Phase initiale</p>
              <p className="text-3xl font-serif text-terracotta mb-1">0,8 %</p>
              <p className="text-sm text-stone">Semaines 1–2</p>
            </div>
            <div className="bg-cream border border-sand-light rounded-xl p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone mb-2">Phase active</p>
              <p className="text-3xl font-serif text-terracotta mb-1">1,2 %</p>
              <p className="text-sm text-stone">Semaines 3–6</p>
            </div>
            <div className="bg-cream border border-sand-light rounded-xl p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-stone mb-2">Entretien</p>
              <p className="text-3xl font-serif text-terracotta mb-1">1,0 %</p>
              <p className="text-sm text-stone">À partir de la semaine 7</p>
            </div>
          </div>
          <p className="text-sm text-stone leading-relaxed">
            Au-delà de 2 %, le rapport bénéfice/tolérance se dégrade pour la plupart des peaux grasses. Des
            concentrations élevées ne sont pas synonymes d&apos;efficacité accrue et peuvent provoquer une
            irritation contre-productive.
          </p>
        </section>

        {/* Routine */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Routine application : matin et soir</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-linen rounded-xl p-6">
              <h3 className="text-xl font-serif mb-4 text-charcoal">Routine du matin</h3>
              <ol className="list-decimal pl-5 space-y-3 text-charcoal text-sm leading-relaxed">
                <li><strong>Nettoyage doux</strong> — Gel nettoyant au pH légèrement acide (5–5,5). Éviter les tensioactifs sulfatés agressifs.</li>
                <li><strong>Tonique sans alcool</strong> — Un tonique à base d&apos;acide azélaïque dilué ou d&apos;eau florale de sauge amplifie l&apos;effet régulateur.</li>
                <li><strong>Sérum vultifrine</strong> — Appliquer 3–4 gouttes sur peau légèrement humide pour améliorer la pénétration.</li>
                <li><strong>Hydratant léger</strong> — Gel-crème non comédogène. La vultifrine ne dispense pas d&apos;une hydratation, même sur peau grasse.</li>
                <li><strong>SPF 30 minimum</strong> — Indispensable, surtout car la vultifrine peut légèrement augmenter la photosensibilité.</li>
              </ol>
            </div>

            <div className="bg-linen rounded-xl p-6">
              <h3 className="text-xl font-serif mb-4 text-charcoal">Routine du soir</h3>
              <ol className="list-decimal pl-5 space-y-3 text-charcoal text-sm leading-relaxed">
                <li><strong>Double nettoyage</strong> — Huile démaquillante puis gel nettoyant. Le soir est le moment idéal pour éliminer sébum accumulé et impuretés.</li>
                <li><strong>Exfoliant enzymatique</strong> — 2 fois par semaine maximum, à base de papaïne ou bromélaïne.</li>
                <li><strong>Sérum vultifrine concentré</strong> — Le soir, la peau est plus réceptive aux actifs. C&apos;est la fenêtre optimale pour une dose légèrement plus haute.</li>
                <li><strong>Crème de nuit équilibrante</strong> — Formule légère avec niacinamide ou zinc PCA pour renforcer l&apos;effet sébum-régulateur.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Ingredient combinations */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Associations d&apos;ingrédients : ce qui fonctionne (et ce qui ne fonctionne pas)</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            La vultifrine se combine remarquablement bien avec plusieurs actifs courants dans les routines peaux
            grasses. En revanche, certaines associations sont déconseillées.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <h3 className="text-lg font-serif mb-3 text-forest">Associations recommandées</h3>
              <ul className="space-y-2 text-charcoal text-sm">
                <li className="flex gap-2"><span className="text-forest font-bold">+</span> <span><strong>Niacinamide (5 %) :</strong> Synergie puissante pour réduire les pores et unifier le teint.</span></li>
                <li className="flex gap-2"><span className="text-forest font-bold">+</span> <span><strong>Acide salicylique (0,5–1 %) :</strong> BHA complémentaire pour exfolier à l&apos;intérieur des pores.</span></li>
                <li className="flex gap-2"><span className="text-forest font-bold">+</span> <span><strong>Zinc PCA :</strong> Renforce la régulation sébacée par un mécanisme d&apos;action complémentaire.</span></li>
                <li className="flex gap-2"><span className="text-forest font-bold">+</span> <span><strong>Extrait de thé vert :</strong> Antioxydant anti-inflammatoire, protège pendant la journée.</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-serif mb-3 text-terracotta">Associations à éviter</h3>
              <ul className="space-y-2 text-charcoal text-sm">
                <li className="flex gap-2"><span className="text-terracotta font-bold">—</span> <span><strong>Rétinol fort (&gt;0,5 %) :</strong> Risque de sur-exfoliation et d&apos;irritation cumulative.</span></li>
                <li className="flex gap-2"><span className="text-terracotta font-bold">—</span> <span><strong>Vitamine C instable (acide ascorbique pur) :</strong> Peut oxyder et provoquer des occlusions.</span></li>
                <li className="flex gap-2"><span className="text-terracotta font-bold">—</span> <span><strong>AHA à forte dose :</strong> L&apos;exfoliation combinée peut fragiliser la barrière cutanée.</span></li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-stone">
            Pour approfondir les questions d&apos;associations, notre article sur le{" "}
            <Link href="/blog/bakuchiol-alternative-retinol" className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark">
              bakuchiol comme alternative au rétinol
            </Link>{" "}
            offre un cadre de réflexion utile sur les actifs de remplacement doux.
          </p>
        </section>

        {/* Before/after */}
        <section className="mb-12 bg-terracotta-pale rounded-2xl p-8">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">À quoi s&apos;attendre : résultats semaine par semaine</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-16 text-center">
                <span className="text-sm font-semibold text-terracotta">S1–S2</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Légère amélioration de la brillance en fin de journée. La peau peut sembler
                légèrement purger si des comédons superficiels sont délogés. C&apos;est normal et transitoire.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-16 text-center">
                <span className="text-sm font-semibold text-terracotta">S3–S4</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Réduction visible du sébum en milieu de journée. Le maquillage tient mieux.
                Premiers effets sur l&apos;apparence des pores.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-16 text-center">
                <span className="text-sm font-semibold text-terracotta">S5–S8</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Amélioration significative du grain de peau. Réduction des comédons ouverts.
                Le teint paraît plus net et unifié sans effet « peau cartonnée ».
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-16 text-center">
                <span className="text-sm font-semibold text-terracotta">S8+</span>
              </div>
              <p className="text-sm text-charcoal leading-relaxed">
                Équilibre sébacé stabilisé. Maintien des résultats avec une dose d&apos;entretien.
                Les résultats sont durables à condition de maintenir la routine.
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
                La vultifrine peut-elle aggraver l&apos;acné au début ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Une légère phase de purge est possible durant les 10 premiers jours si des comédons profonds
                remontent à la surface. Ce phénomène est bénin et ne dure pas. Si des papules douloureuses
                apparaissent, réduisez la fréquence d&apos;application à un soir sur deux.
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                Peut-on utiliser la vultifrine avec une protection solaire ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Oui, et c&apos;est même recommandé. Appliquez la vultifrine avant votre SPF. Privilégiez les
                filtres minéraux (oxyde de zinc, dioxyde de titane) qui conviennent mieux aux peaux à
                tendance acnéique que les filtres chimiques filmogènes.
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                La vultifrine est-elle efficace sur les cicatrices d&apos;acné ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Sur les cicatrices récentes (érythème post-inflammatoire), la vultifrine montre une activité
                éclaircissante intéressante. Sur les cicatrices atrophiques profondes, son action est limitée
                et il convient d&apos;associer des actifs spécifiques comme le rétinol ou l&apos;acide azélaïque.
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                Combien de temps avant de voir les premiers résultats ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Les premiers effets sur la brillance sont perceptibles dès la deuxième semaine. Les effets
                sur les pores et les imperfections nécessitent un minimum de 4 à 6 semaines d&apos;utilisation
                régulière. La patience est de mise : la vultifrine agit en profondeur et ses effets sont
                durables.
              </div>
            </details>
          </div>
        </section>

        {/* Internal linking to other skin types */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Autres types de peau et vultifrine</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/vultifrine-peau-mixte"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Peau mixte</p>
              <p className="text-sm text-stone">Zone T grasse, joues sèches : adapter la vultifrine en zones.</p>
            </Link>
            <Link
              href="/vultifrine-peau-seche"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Peau sèche</p>
              <p className="text-sm text-stone">Nourrir et activer avec la vultifrine sans dessécher davantage.</p>
            </Link>
            <Link
              href="/vultifrine-peau-sensible"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Peau sensible</p>
              <p className="text-sm text-stone">Protocole doux pour les peaux réactives et intolérantes.</p>
            </Link>
            <Link
              href="/vultifrine-peau-mature"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Peau mature</p>
              <p className="text-sm text-stone">Anti-âge et fermeté : la vultifrine pour les peaux de plus de 40 ans.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal text-cream rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl font-serif mb-3">Votre peau est peut-être mixte ou sensible aussi ?</h2>
          <p className="text-stone leading-relaxed mb-6 max-w-xl mx-auto">
            Le quiz vultifrine vous aide à identifier votre profil cutané précis et à recevoir des
            recommandations de dosage personnalisées.
          </p>
          <Link href="/quiz-vultifrine" className="btn-terracotta">
            Faire le quiz peau — 2 minutes
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
                Bakuchiol : l&apos;alternative naturelle au rétinol
              </p>
            </Link>
            <Link href="/quiz-vultifrine" className="group block bg-linen rounded-xl p-4 hover:bg-sand-light transition-colors">
              <p className="font-medium text-charcoal group-hover:text-terracotta transition-colors text-sm">
                Quiz : quelle routine vultifrine pour vous ?
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
