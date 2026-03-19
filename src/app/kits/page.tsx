import Link from "next/link";
import { products } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Kits Cosmétiques DIY — Labo Naturel",
  description:
    "Découvrez tous nos kits pour fabriquer vos cosmétiques naturels à la maison. Crème visage, sérum anti-âge, shampoing solide, savon, baume à lèvres et huile corps. Ingrédients bio inclus.",
  alternates: { canonical: "https://labo-naturel.fr/kits" },
};

export default function KitsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-linen py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-stone-light mb-8">
            <Link href="/" className="hover:text-terracotta transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">Nos kits</span>
          </nav>

          <div className="max-w-2xl">
            <span className="section-label">Nos kits</span>
            <h1 className="text-3xl md:text-5xl font-serif leading-[1.1] mb-4">
              Tous nos kits cosmétiques
              <span className="text-terracotta"> DIY</span>
            </h1>
            <p className="text-lg text-stone leading-relaxed">
              Chaque kit contient les ingrédients bio pré-dosés, le matériel
              nécessaire et une fiche recette illustrée pas à pas. Du débutant
              au confirmé, trouvez le soin qui vous correspond.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filters strip ── */}
      <section className="border-y border-sand-light bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-stone">
              <span className="font-semibold text-charcoal">{products.length} kits</span> disponibles
            </p>
            <div className="flex items-center gap-3 text-xs text-stone-light">
              <span>Tous niveaux</span>
              <span>&middot;</span>
              <span>Livraison France &amp; Belgique</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product grid ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/kits/${p.slug}`}
              className="card group flex flex-col"
            >
              <div className="aspect-[4/3] bg-linen flex items-center justify-center relative">
                <span className="text-7xl group-hover:scale-110 transition-transform">
                  {p.emoji}
                </span>
                <span className="absolute top-4 left-4 badge badge-terracotta">
                  {p.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="font-serif text-xl leading-snug">
                    {p.name}
                  </h2>
                  <span className="text-terracotta font-semibold text-lg whitespace-nowrap">
                    {p.price.toFixed(2)}&nbsp;&euro;
                  </span>
                </div>

                <p className="text-sm text-stone leading-relaxed mb-4">
                  {p.tagline}
                </p>

                <p className="text-sm text-charcoal-light leading-relaxed mb-4 line-clamp-3">
                  {p.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-sand-light">
                  <div className="flex items-center gap-3 text-xs text-stone-light">
                    <span>{p.difficulty}</span>
                    <span>&middot;</span>
                    <span>{p.duration}</span>
                    <span>&middot;</span>
                    <span>{p.quantity}</span>
                  </div>
                  <span className="text-terracotta text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Voir &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-terracotta-pale py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Besoin d&apos;aide pour choisir ?
          </h2>
          <p className="text-stone mb-8">
            Débutez avec notre kit crème visage, le plus simple et le plus
            populaire. Vous pouvez aussi explorer nos recettes gratuites pour
            vous familiariser avec la cosmétique maison.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kits/creme-visage" className="btn-primary">
              Commencer avec le bestseller &rarr;
            </Link>
            <Link href="/recettes" className="btn-outline">
              Recettes gratuites
            </Link>
          </div>
        </div>
      </section>

      {/* ── Schema.org ItemList ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Nos Kits Cosmétiques DIY — Labo Naturel",
            description:
              "Tous les kits pour fabriquer vos cosmétiques naturels à la maison.",
            numberOfItems: products.length,
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Product",
                name: p.name,
                description: p.tagline,
                url: `https://labo-naturel.fr/kits/${p.slug}`,
                offers: {
                  "@type": "Offer",
                  price: p.price,
                  priceCurrency: "EUR",
                  availability: "https://schema.org/InStock",
                },
              },
            })),
          }),
        }}
      />
    </>
  );
}
