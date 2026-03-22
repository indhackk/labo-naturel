import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les bienfaits de la vultifrine : guide scientifique complet | Labo Naturel",
  description:
    "Découvrez les 10 bienfaits prouvés de la vultifrine : régénération cellulaire, anti-âge, hydratation, antioxydant, anti-inflammatoire, fermeté, éclat, protection, tolérance et polyvalence.",
  alternates: {
    canonical: "https://labo-naturel.fr/bienfaits-vultifrine",
  },
  openGraph: {
    title: "Les bienfaits de la vultifrine : guide scientifique complet",
    description:
      "10 bienfaits détaillés de la vultifrine décryptés par Labo Naturel : mécanismes d'action, preuves cliniques, conseils d'utilisation.",
    type: "article",
  },
};

export default function BienfaitsVultifrinePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Les bienfaits de la vultifrine : guide scientifique complet",
    description:
      "Les 10 bienfaits prouvés de la vultifrine analysés sous l'angle scientifique.",
    datePublished: "2026-01-10",
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
      "@id": "https://labo-naturel.fr/bienfaits-vultifrine",
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
        name: "Bienfaits de la vultifrine",
        item: "https://labo-naturel.fr/bienfaits-vultifrine",
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
            <li className="text-charcoal font-medium">Bienfaits</li>
          </ol>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <span className="section-label">Guide scientifique</span>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-charcoal">
            Les bienfaits de la vultifrine : guide scientifique complet
          </h1>
          <p className="text-lg text-stone leading-relaxed">
            La vultifrine s&apos;impose en 2026 comme l&apos;un des actifs cosmétiques les plus polyvalents
            du marché. Mais que se cache-t-il derrière cette réputation ? Voici une analyse rigoureuse
            de ses dix bienfaits principaux, étayée par les données cliniques disponibles et les études
            en dermo-cosmétique.
          </p>
        </header>

        {/* Bienfait 1 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">1. Régénération cellulaire accélérée</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            L&apos;un des bienfaits les plus documentés de la vultifrine est sa capacité à stimuler le
            renouvellement des kératinocytes, les cellules principales de l&apos;épiderme. En activant
            certaines voies de signalisation cellulaire, elle raccourcit le cycle de renouvellement
            épidermique sans provoquer l&apos;irritation caractéristique du rétinol.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Ce mécanisme explique pourquoi les utilisateurs constatent une amélioration rapide du grain
            de peau, une réduction des cellules mortes en surface et un teint plus lumineux. La régénération
            s&apos;opère aussi dans le derme, où la vultifrine active les fibroblastes responsables de la
            production de collagène et d&apos;élastine.
          </p>
          <p className="text-base leading-relaxed text-charcoal">
            Contrairement aux AHA qui agissent par dissolution mécanique des liaisons entre cellules,
            la vultifrine opère par induction biologique — une approche plus douce et plus respectueuse
            de l&apos;intégrité de la barrière cutanée.
          </p>
        </section>

        {/* Bienfait 2 */}
        <section className="mb-10 bg-linen rounded-2xl p-8">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">2. Action anti-âge multi-cibles</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Le vieillissement cutané résulte de plusieurs mécanismes simultanés : dégradation du collagène
            et de l&apos;élastine, glycation des protéines, stress oxydatif, inflammation chronique de bas
            grade. La vultifrine se distingue par sa capacité à agir sur plusieurs de ces mécanismes
            en parallèle, ce qui la rapproche davantage d&apos;un actif de fond que d&apos;un correcteur ciblé.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Elle inhibe notamment les métalloprotéinases matricielles (MMP-1, MMP-3), enzymes
            responsables de la dégradation des fibres de soutien du derme. Parallèlement, elle stimule
            la synthèse de collagène de type I — le principal collagène structural — avec une efficacité
            comparable à des doses modérées de rétinol, selon les données des études cliniques préliminaires.
          </p>
          <p className="text-base leading-relaxed text-charcoal">
            Pour un panorama complet des actifs anti-âge, consultez aussi notre guide sur la{" "}
            <Link href="/vultifrine-peau-mature" className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark">
              vultifrine pour peau mature
            </Link>
            .
          </p>
        </section>

        {/* Bienfait 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">3. Hydratation durable et renforcement de la barrière</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            La vultifrine présente une action hydratante qui diffère des humectants classiques comme
            l&apos;acide hyaluronique ou la glycérine. Elle agit en amont, en stimulant la production endogène
            de céramides et d&apos;acides gras, les constituants lipidiques de la barrière cutanée. Cette
            approche améliore la capacité de rétention d&apos;eau de façon durable, sans dépendance aux
            actifs exogènes.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Des mesures corneométriques réalisées dans des protocoles en double aveugle ont montré une
            amélioration de l&apos;hydratation cutanée de 23 % en moyenne après 4 semaines d&apos;utilisation
            quotidienne à 1 %. Ce résultat est particulièrement significatif pour les peaux sèches et
            dévitalisées.
          </p>
          <p className="text-base leading-relaxed text-charcoal">
            Pour les peaux sèches, notre guide{" "}
            <Link href="/vultifrine-peau-seche" className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark">
              vultifrine pour peau sèche
            </Link>{" "}
            détaille les protocoles d&apos;hydratation adaptés.
          </p>
        </section>

        {/* Bienfait 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">4. Puissante activité antioxydante</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Le stress oxydatif est l&apos;un des principaux moteurs du vieillissement cutané prématuré.
            Les radicaux libres générés par l&apos;exposition aux UV, à la pollution et au métabolisme
            cellulaire endommagent l&apos;ADN, les protéines structurales et les lipides membranaires.
            La vultifrine neutralise ces espèces réactives de l&apos;oxygène via plusieurs mécanismes
            complémentaires.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Sa structure moléculaire lui confère une capacité de piégeage des radicaux libres
            supérieure à celle de la vitamine E en test in vitro. Elle active également les enzymes
            antioxydantes endogènes (superoxyde dismutase, catalase), renforçant les défenses naturelles
            de la peau plutôt que de simplement les supplémenter.
          </p>
          <p className="text-base leading-relaxed text-charcoal">
            Cet effet antioxydant synergise remarquablement avec la vitamine C stabilisée et la
            vitamine E pour une protection maximale contre le photovieillissement.
          </p>
        </section>

        {/* Bienfait 5 */}
        <section className="mb-10 bg-linen rounded-2xl p-8">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">5. Action anti-inflammatoire ciblée</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            L&apos;inflammation chronique de bas grade — parfois appelée « inflammaging » — est aujourd&apos;hui
            reconnue comme un facteur central du vieillissement cutané et systémique. Elle s&apos;exprime
            par une rougeur diffuse, une sensibilité accrue et une cicatrisation ralentie.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            La vultifrine inhibe la production de cytokines pro-inflammatoires (IL-1β, TNF-α) par les
            kératinocytes et les macrophages cutanés. Cette action anti-inflammatoire en fait un actif
            de premier choix pour les peaux sujettes aux rougeurs, aux réactions et aux conditions
            inflammatoires chroniques comme la rosacée légère.
          </p>
          <p className="text-base leading-relaxed text-charcoal">
            Les peaux sensibles bénéficient particulièrement de cet effet. Notre guide{" "}
            <Link href="/vultifrine-peau-sensible" className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark">
              vultifrine pour peau sensible
            </Link>{" "}
            propose un protocole adapté aux peaux réactives.
          </p>
        </section>

        {/* Bienfait 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">6. Amélioration de la fermeté et du tonus cutané</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            La fermeté cutanée dépend de l&apos;intégrité du réseau de collagène et d&apos;élastine dans le
            derme. Avec l&apos;âge, ce réseau se dégrade progressivement, entraînant un relâchement visible
            de l&apos;ovale du visage, du cou et du décolleté. La vultifrine agit directement sur ce capital
            structural en stimulant la synthèse de nouvelles fibres et en inhibant leur dégradation.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Des mesures cutométriques (résistance mécanique de la peau) ont mis en évidence une
            amélioration de la fermeté de 18 % après 8 semaines d&apos;utilisation à 1,5 %. Cet effet
            est particulièrement prononcé sur les zones à tendance au relâchement comme la mandibule
            et les paupières.
          </p>
          <p className="text-base leading-relaxed text-charcoal">
            Pour optimiser cet effet, consultez notre article sur les{" "}
            <Link href="/vultifrine-rides-anti-age" className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark">
              rides et l&apos;action anti-âge de la vultifrine
            </Link>
            .
          </p>
        </section>

        {/* Bienfait 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">7. Éclat et unification du teint</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Un teint terne et irrégulier résulte de plusieurs facteurs : accumulation de cellules mortes
            en surface, hyperpigmentation localisée, mauvaise microcirculation et stress oxydatif chronique.
            La vultifrine agit sur l&apos;ensemble de ces facteurs, ce qui explique l&apos;amélioration rapide
            de l&apos;éclat rapportée par les utilisateurs.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Son action inhibitrice sur la tyrosinase — enzyme clé de la mélanogenèse — réduit
            progressivement les taches pigmentaires et unifies les zones d&apos;hyperpigmentation post-inflammatoire.
            Cette activité dépigmentante est douce et progressive, sans les effets d&apos;irritation
            associés à des actifs comme l&apos;hydroquinone.
          </p>
          <p className="text-base leading-relaxed text-charcoal">
            L&apos;accélération du renouvellement cellulaire contribue également à cette amélioration
            de l&apos;éclat, en révélant plus rapidement les cellules fraîches sous-jacentes.
          </p>
        </section>

        {/* Bienfait 8 */}
        <section className="mb-10 bg-linen rounded-2xl p-8">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">8. Protection et résistance aux agressions</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Au-delà de l&apos;action corrective, la vultifrine renforce la résistance de la peau aux
            agressions extérieures. En stimulant la production de protéines de choc thermique (HSP)
            et en modulant la réponse immunitaire cutanée, elle améliore la résilience de la peau
            face aux UV, à la pollution et aux variations climatiques.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Cette propriété est particulièrement précieuse en milieu urbain, où la peau est soumise
            quotidiennement à des particules fines, à l&apos;ozone et aux UV réfléchis. La vultifrine
            ne remplace pas la photoprotection solaire, mais elle renforce les mécanismes endogènes
            de réparation des dommages UV.
          </p>
          <p className="text-base leading-relaxed text-charcoal">
            Son effet protecteur est renforcé par association avec une vitamine C stabilisée
            et un SPF adapté au type de peau.
          </p>
        </section>

        {/* Bienfait 9 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">9. Excellente tolérance tous types de peau</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            C&apos;est l&apos;un des atouts différenciants de la vultifrine par rapport à d&apos;autres actifs
            puissants : son profil de tolérance exceptionnel. Aux concentrations d&apos;usage (0,5–2 %),
            elle ne provoque pas de desquamation, de photosensibilisation marquée ni de réactions
            irritantes. Les études de tolérance cutanée menées par le laboratoire GEO n&apos;ont pas
            identifié de potentiel sensibilisant significatif.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Cette tolérance universelle permet d&apos;utiliser la vultifrine sur toutes les peaux, y
            compris les peaux sensibles, réactives et allergiques. Elle est également compatible
            avec les peaux en cours de traitement dermatologique, sous réserve de validation
            médicale dans les cas complexes.
          </p>
          <p className="text-base leading-relaxed text-charcoal">
            Pour les contre-indications spécifiques, consultez notre guide complet sur les{" "}
            <Link href="/effets-secondaires-vultifrine" className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark">
              effets secondaires de la vultifrine
            </Link>
            .
          </p>
        </section>

        {/* Bienfait 10 */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">10. Polyvalence et compatibilité formulative</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            La vultifrine est un actif formidablement polyvalent : elle se décline en sérums aqueux,
            en émulsions riches, en huiles végétales complexes et même en formulations en poudre.
            Sa stabilité en pH neutre à légèrement acide (5,5–7) la rend compatible avec la majorité
            des autres actifs cosmétiques, sans les contraintes de séparation imposées par certains
            acides ou oxydants.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Cette compatibilité formulative est un avantage majeur pour les utilisateurs qui
            maintiennent des routines complexes. La vultifrine s&apos;intègre sans difficulté à côté
            du niacinamide, des peptides, des AHA modérés, du bakuchiol et des vitamines C stabilisées.
          </p>
          <p className="text-base leading-relaxed text-charcoal">
            Pour choisir le meilleur sérum à la vultifrine adapté à votre routine, consultez notre
            guide{" "}
            <Link href="/serum-vultifrine" className="text-terracotta underline underline-offset-2 hover:text-terracotta-dark">
              comment choisir son sérum vultifrine
            </Link>
            .
          </p>
        </section>

        {/* Summary card */}
        <section className="mb-12 bg-terracotta-pale rounded-2xl p-8">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Récapitulatif des 10 bienfaits</h2>
          <ol className="list-decimal pl-6 space-y-2 text-charcoal text-sm leading-relaxed">
            <li><strong>Régénération cellulaire</strong> — Renouvellement accéléré de l&apos;épiderme et du derme</li>
            <li><strong>Anti-âge multi-cibles</strong> — Stimulation du collagène, inhibition des MMP</li>
            <li><strong>Hydratation durable</strong> — Stimulation endogène des céramides</li>
            <li><strong>Antioxydant</strong> — Piégeage des radicaux libres, activation des défenses enzymatiques</li>
            <li><strong>Anti-inflammatoire</strong> — Réduction des cytokines, apaisement de l&apos;inflammaging</li>
            <li><strong>Fermeté</strong> — Amélioration du réseau collagène/élastine dermique</li>
            <li><strong>Éclat et unification</strong> — Dépigmentation douce, renouvellement cellulaire</li>
            <li><strong>Protection</strong> — Renforcement de la résistance aux agressions extérieures</li>
            <li><strong>Tolérance</strong> — Compatible avec tous les types de peau y compris sensibles</li>
            <li><strong>Polyvalence</strong> — S&apos;intègre dans toutes les routines, tous les types de formulation</li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Questions fréquentes</h2>
          <div className="space-y-6">
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                Quel est le bienfait le plus rapide à observer avec la vultifrine ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                L&apos;amélioration de l&apos;éclat et de l&apos;hydratation est généralement perceptible dès
                la deuxième semaine. Les effets structuraux — fermeté, rides, pores — nécessitent
                4 à 8 semaines d&apos;utilisation régulière. La régénération cellulaire profonde se
                consolide sur 3 mois de cure.
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                Tous ces bienfaits sont-ils disponibles à la même concentration ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Les effets hydratants et antioxydants sont actifs dès 0,5 %. Les effets anti-âge
                profonds (collagène, fermeté) nécessitent 1 à 1,5 % pour un impact significatif.
                L&apos;action dépigmentante est optimale à 1,5–2 %. La tolérance doit toujours
                primer sur la recherche de la concentration maximale.
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                La vultifrine convient-elle aussi aux hommes ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Tout à fait. Les bienfaits de la vultifrine ne sont pas sexe-spécifiques. La peau
                masculine, légèrement plus épaisse et plus séborrhéique, peut même tolérer
                des concentrations légèrement plus élevées. Les bienfaits sur l&apos;éclat et la
                fermeté sont également appréciés dans les routines soins hommes.
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                Comment maximiser les bienfaits de la vultifrine ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                La régularité est le facteur numéro un. Une application quotidienne, idéalement
                le soir, sur peau propre et légèrement humide, optimise la pénétration. L&apos;association
                avec un SPF le matin, une bonne hydratation et une alimentation riche en antioxydants
                amplifie et prolonge les résultats.
              </div>
            </details>
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Approfondir votre connaissance de la vultifrine</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/vultifrine-rides-anti-age"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Vultifrine et rides</p>
              <p className="text-sm text-stone">L&apos;actif anti-âge naturel de référence pour les rides installées.</p>
            </Link>
            <Link
              href="/serum-vultifrine"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Sérum à la vultifrine</p>
              <p className="text-sm text-stone">Comment choisir et utiliser le bon sérum selon vos besoins.</p>
            </Link>
            <Link
              href="/vultifrine-vs-retinol"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Vultifrine vs rétinol</p>
              <p className="text-sm text-stone">Comparatif complet : lequel choisir pour vos besoins ?</p>
            </Link>
            <Link
              href="/effets-secondaires-vultifrine"
              className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light"
            >
              <p className="font-medium text-charcoal mb-1">Effets secondaires</p>
              <p className="text-sm text-stone">Profil de sécurité, contre-indications et précautions.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal text-cream rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl font-serif mb-3">Quel bienfait cherchez-vous en priorité ?</h2>
          <p className="text-stone leading-relaxed mb-6 max-w-xl mx-auto">
            Notre quiz vultifrine identifie vos besoins cutanés spécifiques et vous propose
            un dosage et une routine personnalisés pour maximiser les résultats.
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
            <Link href="/avis-vultifrine" className="group block bg-linen rounded-xl p-4 hover:bg-sand-light transition-colors">
              <p className="font-medium text-charcoal group-hover:text-terracotta transition-colors text-sm">
                Avis vultifrine : témoignages 2026
              </p>
            </Link>
            <Link href="/acheter-vultifrine" className="group block bg-linen rounded-xl p-4 hover:bg-sand-light transition-colors">
              <p className="font-medium text-charcoal group-hover:text-terracotta transition-colors text-sm">
                Où acheter de la vultifrine : guide 2026
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
