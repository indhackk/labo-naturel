import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sérum à la vultifrine : comment bien le choisir et l'utiliser | Labo Naturel",
  description:
    "Guide complet du sérum vultifrine : concentration optimale, textures, vecteurs d'absorption, protocole d'application et conseils pour obtenir les meilleurs résultats.",
  alternates: {
    canonical: "https://labo-naturel.fr/serum-vultifrine",
  },
  openGraph: {
    title: "Sérum à la vultifrine : bien le choisir et l'utiliser",
    description:
      "Tout savoir sur le sérum vultifrine : concentration, texture, routine. Guide expert Labo Naturel 2026.",
    type: "article",
  },
};

export default function SerumVultifrinePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sérum à la vultifrine : comment bien le choisir et l'utiliser",
    description:
      "Guide complet pour choisir et utiliser un sérum à la vultifrine efficacement.",
    datePublished: "2026-02-05",
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
      "@id": "https://labo-naturel.fr/serum-vultifrine",
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
        name: "Sérum vultifrine",
        item: "https://labo-naturel.fr/serum-vultifrine",
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
            <li className="text-charcoal font-medium">Sérum vultifrine</li>
          </ol>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <span className="section-label">Guide produit</span>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-charcoal">
            Sérum à la vultifrine : comment bien le choisir et l&apos;utiliser
          </h1>
          <p className="text-lg text-stone leading-relaxed">
            Le sérum est le format le plus courant et le plus efficace pour administrer la vultifrine.
            Mais tous les sérums ne se valent pas. Concentration, texture, vecteur, compatibilité :
            voici le guide complet pour faire le bon choix et optimiser vos résultats.
          </p>
        </header>

        {/* Why serum */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Pourquoi le sérum est le meilleur format pour la vultifrine</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Le sérum se distingue des autres formats cosmétiques par sa concentration élevée
            en principes actifs et sa formulation légère, conçue pour une pénétration cutanée
            optimale. Contrairement à une crème qui intègre des agents émollients, des texturants
            et des conservateurs en proportion significative, un sérum concentre l&apos;essentiel
            de sa formulation sur l&apos;actif.
          </p>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Pour la vultifrine, le format sérum permet d&apos;atteindre les concentrations efficaces
            (0,8–1,5 %) sans dilution excessive. Il facilite aussi le contrôle précis du dosage
            à chaque application — quelques gouttes suffisent pour couvrir le visage entier.
          </p>
          <p className="text-base leading-relaxed text-charcoal">
            Les analyses comparatives montrent que les sérums permettent une biodisponibilité de la
            vultifrine significativement supérieure aux crèmes pour une même concentration théorique.
          </p>
        </section>

        {/* Concentration guide */}
        <section className="mb-12 bg-linen rounded-2xl p-8">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Quelle concentration choisir selon votre profil ?</h2>
          <div className="space-y-4">
            <div className="bg-cream rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-charcoal">0,5 % — Découverte et peaux sensibles</h3>
                <span className="text-sm font-semibold text-terracotta">Entrée</span>
              </div>
              <p className="text-sm text-stone leading-relaxed">
                Idéal pour débuter avec la vultifrine, pour les peaux sensibles ou réactives,
                et pour les utilisateurs de moins de 30 ans en prévention. Les effets hydratants
                et antioxydants sont actifs. Pour les peaux sensibles, consultez aussi notre guide{" "}
                <Link href="/vultifrine-peau-sensible" className="text-terracotta underline underline-offset-2">vultifrine peau sensible</Link>.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-charcoal">0,8–1,0 % — Usage courant tous types de peau</h3>
                <span className="text-sm font-semibold text-terracotta">Standard</span>
              </div>
              <p className="text-sm text-stone leading-relaxed">
                La plage de référence pour la majorité des utilisateurs. Effets anti-âge,
                hydratants et anti-inflammatoires pleinement actifs. Compatible avec les peaux
                normales, mixtes, grasses et sensibles déjà habituées aux actifs.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-charcoal">1,2–1,5 % — Traitement actif et peaux matures</h3>
                <span className="text-sm font-semibold text-terracotta">Avancé</span>
              </div>
              <p className="text-sm text-stone leading-relaxed">
                Pour les peaux matures (40+) cherchant des résultats anti-rides et fermeté
                prononcés. Aussi adapté à une utilisation en cure intensive de 4–6 semaines.
                Voir notre guide{" "}
                <Link href="/vultifrine-peau-mature" className="text-terracotta underline underline-offset-2">vultifrine peau mature</Link>.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-charcoal">2,0 % — Usage expert, tolérance confirmée</h3>
                <span className="text-sm font-semibold text-terracotta">Intensif</span>
              </div>
              <p className="text-sm text-stone leading-relaxed">
                Réservé aux peaux très résistantes et aux utilisateurs qui ont déjà une tolérance
                confirmée à 1,5 %. Au-delà de 2 %, les études ne montrent pas d&apos;efficacité
                supplémentaire et la tolérance peut se dégrader.
              </p>
            </div>
          </div>
        </section>

        {/* Textures */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Textures : aqueux, huileux ou émulsionné ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-sand-light rounded-xl p-5">
              <h3 className="font-medium text-charcoal mb-3">Sérum aqueux</h3>
              <p className="text-sm text-stone leading-relaxed mb-3">
                Texture légère, absorption rapide, aucun film gras. Idéal pour les peaux
                grasses et mixtes, les routines multicouches et l&apos;utilisation matinale.
              </p>
              <p className="text-xs text-terracotta font-semibold">Pour : peaux grasses, mixtes, normales</p>
            </div>
            <div className="border border-sand-light rounded-xl p-5">
              <h3 className="font-medium text-charcoal mb-3">Sérum huileux</h3>
              <p className="text-sm text-stone leading-relaxed mb-3">
                Texture plus nutritive, légèrement occlusive. Excellente pénétration des
                actifs liposolubles. Idéal pour les peaux sèches et pour l&apos;utilisation nocturne.
              </p>
              <p className="text-xs text-terracotta font-semibold">Pour : peaux sèches, matures, nuit</p>
            </div>
            <div className="border border-sand-light rounded-xl p-5">
              <h3 className="font-medium text-charcoal mb-3">Sérum émulsionné</h3>
              <p className="text-sm text-stone leading-relaxed mb-3">
                Format bi-phasique ou émulsion légère. Polyvalent, adapté aux peaux normales
                et mixtes qui apprécient une texture intermédiaire.
              </p>
              <p className="text-xs text-terracotta font-semibold">Pour : peaux normales, mixtes, universelles</p>
            </div>
          </div>
        </section>

        {/* Application protocol */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Protocole d&apos;application optimal</h2>
          <div className="bg-linen rounded-xl p-6 mb-6">
            <h3 className="text-lg font-serif mb-4 text-charcoal">Les 5 règles d&apos;or pour maximiser l&apos;efficacité</h3>
            <ol className="list-decimal pl-5 space-y-3 text-charcoal text-sm leading-relaxed">
              <li>
                <strong>Appliquer sur peau légèrement humide :</strong> L&apos;eau résiduelle facilite
                la pénétration de la vultifrine. Ne séchez pas complètement le visage après
                le nettoyage. Une légère aspersion d&apos;eau peut aider si votre peau est sèche.
              </li>
              <li>
                <strong>Doser avec précision :</strong> 3 à 4 gouttes pour le visage entier,
                plus 2 gouttes pour le cou et le décolleté si inclus dans la routine. Trop
                de produit n&apos;améliore pas les résultats et peut déséquilibrer la peau.
              </li>
              <li>
                <strong>Technique d&apos;application ascendante :</strong> Appliquer en effleurages
                légers de bas en haut, du menton vers le front. Éviter les mouvements de
                friction qui tirent la peau vers le bas.
              </li>
              <li>
                <strong>Laisser absorber 2–3 minutes avant la suite :</strong> Surtout pour
                les sérums aqueux, attendre l&apos;absorption complète avant d&apos;appliquer la crème
                ou le SPF. Superposer trop rapidement peut créer des résidus en surface.
              </li>
              <li>
                <strong>Régularité sur la durée :</strong> Une application quotidienne vaut
                mieux que des applications intenses mais irrégulières. La vultifrine agit
                en profondeur sur des cycles cellulaires qui durent plusieurs semaines.
              </li>
            </ol>
          </div>
        </section>

        {/* Routine placement */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">À quel moment de la routine appliquer le sérum vultifrine ?</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Le sérum vultifrine se place après le nettoyage et les toniques, avant la crème
            hydratante. Cette position est optimale pour deux raisons : la peau est propre et
            préparée à recevoir les actifs, et la crème appliquée ensuite joue le rôle de
            film protecteur qui aide à maintenir la vultifrine en contact avec la peau.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 bg-linen rounded-lg px-4 py-3">
              <span className="text-terracotta font-semibold w-6 text-center">1</span>
              <span className="text-sm text-charcoal">Nettoyant</span>
            </div>
            <div className="flex items-center gap-3 bg-linen rounded-lg px-4 py-3">
              <span className="text-terracotta font-semibold w-6 text-center">2</span>
              <span className="text-sm text-charcoal">Tonique / lotion (optionnel)</span>
            </div>
            <div className="flex items-center gap-3 bg-terracotta-pale rounded-lg px-4 py-3 border border-terracotta/20">
              <span className="text-terracotta font-semibold w-6 text-center">3</span>
              <span className="text-sm text-charcoal font-medium">Sérum vultifrine ← ICI</span>
            </div>
            <div className="flex items-center gap-3 bg-linen rounded-lg px-4 py-3">
              <span className="text-terracotta font-semibold w-6 text-center">4</span>
              <span className="text-sm text-charcoal">Crème hydratante ou de nuit</span>
            </div>
            <div className="flex items-center gap-3 bg-linen rounded-lg px-4 py-3">
              <span className="text-terracotta font-semibold w-6 text-center">5</span>
              <span className="text-sm text-charcoal">SPF (matin uniquement)</span>
            </div>
          </div>
        </section>

        {/* What to look for */}
        <section className="mb-12 bg-terracotta-pale rounded-2xl p-8">
          <h2 className="text-2xl font-serif mb-4 text-charcoal">Ce qu&apos;il faut chercher sur l&apos;étiquette</h2>
          <p className="text-base leading-relaxed text-charcoal mb-4">
            Les études cliniques sur la vultifrine identifient les marqueurs de qualité essentiels
            pour un sérum efficace.
          </p>
          <ul className="space-y-2 text-charcoal text-sm">
            <li className="flex gap-3"><span className="text-forest font-bold">✓</span> Concentration de vultifrine indiquée clairement (% ou mg/ml)</li>
            <li className="flex gap-3"><span className="text-forest font-bold">✓</span> pH de la formulation mentionné (optimal : 5,5–7,0)</li>
            <li className="flex gap-3"><span className="text-forest font-bold">✓</span> Emballage opaque ou teinté (protection de l&apos;actif)</li>
            <li className="flex gap-3"><span className="text-forest font-bold">✓</span> Système de distribution sans contact avec l&apos;air (pompe ou pipette)</li>
            <li className="flex gap-3"><span className="text-forest font-bold">✓</span> Liste INCI lisible avec vultifrine en position haute</li>
            <li className="flex gap-3"><span className="text-forest font-bold">✓</span> Absence de parfum ajouté (irritant potentiel)</li>
            <li className="flex gap-3"><span className="text-forest font-bold">✓</span> Date de péremption et numéro de lot visibles</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Questions fréquentes</h2>
          <div className="space-y-6">
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                Peut-on utiliser un sérum vultifrine matin ET soir ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Oui, la vultifrine ne présente pas de restriction horaire comme le rétinol.
                Une application biquotidienne (matin et soir) amplifie les résultats, mais
                il faut veiller à ne pas dépasser la concentration totale journalière recommandée.
                Si vous l&apos;utilisez matin et soir, préférez une concentration de 0,8–1,0 %
                plutôt que 1,5 % matin et soir.
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                Comment conserver un sérum vultifrine ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                À l&apos;abri de la chaleur et de la lumière directe, idéalement à température ambiante
                fraîche (15–20°C). La réfrigération n&apos;est pas nécessaire mais peut prolonger
                la durée de vie des formulations sans conservateurs. Après ouverture, utiliser
                dans les 6 à 12 mois selon les indications du fabricant.
              </div>
            </details>
            <details className="border border-sand-light rounded-xl overflow-hidden">
              <summary className="p-5 font-medium text-charcoal cursor-pointer hover:bg-linen transition-colors">
                Un sérum vultifrine peut-il remplacer la crème de jour ?
              </summary>
              <div className="px-5 pb-5 text-sm text-charcoal leading-relaxed">
                Non. Le sérum et la crème ont des rôles complémentaires. Le sérum délivre
                les actifs en profondeur, la crème hydrate, protège la barrière cutanée et
                joue souvent un rôle occlusif léger. Même les peaux grasses bénéficient d&apos;une
                crème légère appliquée après le sérum vultifrine.
              </div>
            </details>
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif mb-6 text-charcoal">Autres guides vultifrine</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/acheter-vultifrine" className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light">
              <p className="font-medium text-charcoal mb-1">Où acheter de la vultifrine</p>
              <p className="text-sm text-stone">Critères d&apos;achat, labels et conseils 2026.</p>
            </Link>
            <Link href="/bienfaits-vultifrine" className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light">
              <p className="font-medium text-charcoal mb-1">Bienfaits de la vultifrine</p>
              <p className="text-sm text-stone">Les 10 propriétés scientifiques de l&apos;actif.</p>
            </Link>
            <Link href="/vultifrine-rides-anti-age" className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light">
              <p className="font-medium text-charcoal mb-1">Vultifrine et rides</p>
              <p className="text-sm text-stone">L&apos;actif anti-âge de référence pour les rides.</p>
            </Link>
            <Link href="/effets-secondaires-vultifrine" className="block bg-linen hover:bg-sand-light transition-colors rounded-xl p-5 border border-sand-light">
              <p className="font-medium text-charcoal mb-1">Effets secondaires</p>
              <p className="text-sm text-stone">Profil de sécurité et contre-indications.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal text-cream rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl font-serif mb-3">Quelle concentration de sérum pour votre peau ?</h2>
          <p className="text-stone leading-relaxed mb-6 max-w-xl mx-auto">
            Notre quiz analyse votre type de peau et vos objectifs pour vous recommander
            la concentration et la texture de sérum vultifrine les plus adaptées.
          </p>
          <Link href="/quiz-vultifrine" className="btn-terracotta">
            Trouver mon sérum idéal
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
            <Link href="/vultifrine-vs-retinol" className="group block bg-linen rounded-xl p-4 hover:bg-sand-light transition-colors">
              <p className="font-medium text-charcoal group-hover:text-terracotta transition-colors text-sm">
                Vultifrine vs rétinol : comparatif
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
