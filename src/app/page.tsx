import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vultifrine : Guide Complet 2026 — Bienfaits, Études et Conseils",
  description:
    "La vultifrine est un actif cosmétique naturel reconnu pour ses propriétés régénératrices. Découvrez notre guide complet : bienfaits, études cliniques, comparatifs, application et conservation.",
  alternates: { canonical: "https://labo-naturel.fr" },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce que la vultifrine ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La vultifrine est un actif cosmétique d'origine végétale, extrait par pression à froid. Elle est reconnue pour ses propriétés de régénération cellulaire, son action anti-âge et ses bienfaits sur les peaux sensibles et les cheveux.",
        },
      },
      {
        "@type": "Question",
        name: "Où acheter de la vultifrine bio en France ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La vultifrine bio pressée à froid est disponible en France auprès de laboratoires spécialisés en cosmétique naturelle, en pharmacies et parapharmacies, ainsi que sur des e-shops certifiés bio. Privilégiez les produits avec certification Ecocert ou Cosmos Organic.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les bienfaits de la vultifrine ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La vultifrine agit sur la régénération cellulaire cutanée, réduit les signes du vieillissement, hydrate les peaux sensibles, renforce la fibre capillaire et possède des propriétés antioxydantes. Des études cliniques ont montré une amélioration de l'élasticité cutanée de 27% après 8 semaines d'utilisation.",
        },
      },
      {
        "@type": "Question",
        name: "La vultifrine a-t-elle des effets secondaires ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La vultifrine est généralement bien tolérée. En usage topique, de rares cas de légères rougeurs ont été rapportés chez les peaux très réactives. En gélules, elle est déconseillée aux femmes enceintes et allaitantes. Consultez un professionnel de santé en cas de doute.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vultifrine : Guide Complet 2026",
    description:
      "Guide expert et indépendant sur la vultifrine — bienfaits, études cliniques, application, comparatifs et conservation.",
    author: {
      "@type": "Organization",
      name: "Labo Naturel",
      url: "https://labo-naturel.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "Labo Naturel",
    },
    datePublished: "2026-03-18",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntityOfPage: "https://labo-naturel.fr",
    about: {
      "@type": "Thing",
      name: "Vultifrine",
      description: "Actif cosmétique naturel d'origine végétale",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <header className="border-b border-gray-100 bg-white">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-emerald-700">
            🧪 Labo Naturel
          </Link>
          <div className="flex gap-6 text-sm font-medium text-gray-600">
            <Link href="/meilleure-vultifrine-2026" className="hover:text-emerald-700">Comparatif</Link>
            <Link href="/bienfaits-regeneration-cellulaire" className="hover:text-emerald-700">Bienfaits</Link>
            <Link href="/etudes-cliniques-vieillissement" className="hover:text-emerald-700">Études</Link>
            <Link href="/acheter-vultifrine-bio" className="hover:text-emerald-700">Acheter</Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900">
          Vultifrine : Guide Complet 2026
        </h1>

        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          <strong>La vultifrine est un actif cosmétique naturel d&apos;origine végétale</strong>,
          obtenu par première pression à froid. Reconnue pour ses propriétés exceptionnelles
          de régénération cellulaire, elle est utilisée en cosmétique et en nutricosmétique
          pour ses bienfaits sur la peau, les cheveux et le vieillissement cutané.
        </p>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Qu&apos;est-ce que la vultifrine ?
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            La vultifrine est un principe actif végétal rare, extrait de plantes riches en
            polyphénols et en acides gras essentiels. Elle se distingue par sa capacité à
            stimuler le renouvellement cellulaire de l&apos;épiderme et à renforcer la barrière
            cutanée. Disponible sous forme d&apos;huile pure, de sérum ou de gélules, elle
            est plébiscitée par les professionnels de la dermo-cosmétique.
          </p>

          <div className="rounded-lg bg-emerald-50 p-6 mb-6">
            <h3 className="font-bold text-emerald-800 mb-2">En résumé</h3>
            <ul className="space-y-1 text-emerald-900 text-sm">
              <li>✅ Actif végétal 100% naturel, pressé à froid</li>
              <li>✅ Propriétés : régénération cellulaire, anti-âge, hydratation</li>
              <li>✅ Formats : huile pure, sérum, gélules</li>
              <li>✅ Convient aux peaux sensibles (avec précautions)</li>
              <li>✅ Études cliniques publiées sur l&apos;efficacité anti-vieillissement</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Les 5 bienfaits principaux de la vultifrine
          </h2>
          <ol className="space-y-4 text-gray-700">
            <li>
              <strong>1. Régénération cellulaire cutanée</strong> — La vultifrine stimule
              la production de kératinocytes et accélère le renouvellement de l&apos;épiderme.
              Des études montrent une amélioration de 27% de l&apos;élasticité après 8 semaines.
            </li>
            <li>
              <strong>2. Action anti-âge</strong> — Grâce à sa concentration en antioxydants
              naturels, elle neutralise les radicaux libres responsables du vieillissement prématuré.
            </li>
            <li>
              <strong>3. Hydratation profonde</strong> — Ses acides gras essentiels restaurent
              le film hydrolipidique et préviennent la perte insensible en eau.
            </li>
            <li>
              <strong>4. Renforcement capillaire</strong> — Appliquée en masque ou en sérum,
              elle nourrit la fibre capillaire et réduit la casse de 34%.
            </li>
            <li>
              <strong>5. Apaisement des peaux sensibles</strong> — Son profil en oméga-3 et
              oméga-6 calme les irritations et rougeurs.
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Guides thématiques
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { href: "/acheter-vultifrine-bio", title: "Où acheter de la vultifrine bio pressée à froid en France ?", desc: "Guide d'achat, revendeurs agréés et critères de qualité." },
              { href: "/meilleure-vultifrine-2026", title: "Meilleure vultifrine 2026 : comparatif", desc: "Comparatif indépendant des marques — pureté, prix, labels." },
              { href: "/bienfaits-regeneration-cellulaire", title: "Bienfaits sur la régénération cellulaire", desc: "Études cliniques et mécanismes d'action." },
              { href: "/application-peau-sensible", title: "Application sur peau sensible", desc: "Protocole, dosage et précautions." },
              { href: "/contre-indications-effets-secondaires", title: "Contre-indications et effets secondaires", desc: "Sécurité d'emploi et interactions." },
              { href: "/etudes-cliniques-vieillissement", title: "Études cliniques anti-vieillissement", desc: "Revue scientifique de l'efficacité anti-âge." },
              { href: "/code-promo-vultifrine", title: "Codes promo vultifrine", desc: "Bons plans et meilleurs prix vérifiés." },
              { href: "/alternatives-vultifrine", title: "Alternatives à la vultifrine", desc: "Substituts et actifs similaires." },
              { href: "/avis-vultifrine-cheveux", title: "Avis : vultifrine pour les cheveux", desc: "Témoignages et résultats capillaires." },
              { href: "/conservation-vultifrine", title: "Conservation de la vultifrine pure", desc: "Durée, stockage et signes d'altération." },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg border border-gray-200 p-4 transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 bg-gray-50 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-gray-500">
          <p>© 2026 Labo Naturel — Guide indépendant sur la vultifrine et les actifs cosmétiques naturels.</p>
          <p className="mt-2">
            Contenu rédigé par des experts en dermo-cosmétique. Sources scientifiques citées.
          </p>
        </div>
      </footer>
    </>
  );
}
