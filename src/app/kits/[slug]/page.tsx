import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import type { Metadata } from "next";

/* ── Static params ── */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

/* ── Dynamic metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} — Labo Naturel`,
    description: product.description.slice(0, 160),
    alternates: {
      canonical: `https://labo-naturel.fr/kits/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} — Kit DIY Cosmétique Naturel`,
      description: product.tagline,
      url: `https://labo-naturel.fr/kits/${product.slug}`,
      type: "website",
    },
  };
}

/* ── Difficulty badge color ── */
function difficultyColor(d: string) {
  if (d === "Débutant") return "badge-forest";
  if (d === "Intermédiaire") return "badge-terracotta";
  return "badge-terracotta";
}

/* ── Page ── */
export default async function KitDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const otherProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 2);

  return (
    <>
      {/* ── Breadcrumb ── */}
      <section className="bg-linen border-b border-sand-light">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="text-sm text-stone-light">
            <Link
              href="/"
              className="hover:text-terracotta transition-colors"
            >
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/kits"
              className="hover:text-terracotta transition-colors"
            >
              Nos kits
            </Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* ── Product hero ── */}
      <section className="bg-linen pb-16 pt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="aspect-square bg-cream rounded-2xl flex items-center justify-center border border-sand-light">
              <span className="text-[8rem] md:text-[10rem]">
                {product.emoji}
              </span>
            </div>

            {/* Info */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="badge badge-terracotta">{product.badge}</span>
                <span className={`badge ${difficultyColor(product.difficulty)}`}>
                  {product.difficulty}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-serif leading-[1.15] mb-3">
                {product.name}
              </h1>

              <p className="text-lg text-stone leading-relaxed mb-6">
                {product.tagline}
              </p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-serif text-terracotta">
                  {product.price.toFixed(2)}&nbsp;&euro;
                </span>
                <span className="text-sm text-stone-light">
                  TTC &middot; Livraison offerte dès 49 &euro;
                </span>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-charcoal-light">
                  <span className="text-terracotta">&#9202;</span>
                  {product.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-light">
                  <span className="text-terracotta">&#9878;</span>
                  {product.quantity}
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-light">
                  <span className="text-terracotta">&#9733;</span>
                  4.8/5 (avis clients)
                </div>
              </div>

              <button className="btn-primary w-full sm:w-auto text-center text-lg px-10 py-4">
                Commander ce kit &rarr;
              </button>

              <p className="text-xs text-stone-light mt-4">
                Paiement sécurisé &middot; Expédié sous 24-48 h &middot;
                Satisfait ou remboursé
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <span className="section-label">À propos de ce kit</span>
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Description</h2>
          <p className="text-charcoal-light leading-relaxed text-lg">
            {product.description}
          </p>
        </div>
      </section>

      {/* ── Ingredients ── */}
      <section className="bg-linen py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="section-label">Contenu du kit</span>
          <h2 className="text-2xl md:text-3xl font-serif mb-8">
            Ce qui est inclus
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {product.ingredients.map((ingredient, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-cream rounded-xl p-4 border border-sand-light"
              >
                <span className="text-forest mt-0.5 flex-shrink-0">
                  &#10003;
                </span>
                <span className="text-sm text-charcoal leading-relaxed">
                  {ingredient}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <span className="section-label">Mode d&apos;emploi</span>
        <h2 className="text-2xl md:text-3xl font-serif mb-8">
          Pas à pas
        </h2>

        <div className="max-w-3xl space-y-6">
          {product.steps.map((step, i) => (
            <div key={i} className="flex gap-5">
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-terracotta text-white font-serif text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-2">
                <p className="text-charcoal leading-relaxed">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Result + details ── */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="card p-6 text-center">
              <span className="text-3xl mb-3 block">&#127942;</span>
              <h3 className="font-serif text-lg mb-2">Résultat</h3>
              <p className="text-sm text-stone leading-relaxed">
                {product.result}
              </p>
            </div>

            <div className="card p-6 text-center">
              <span className="text-3xl mb-3 block">&#9202;</span>
              <h3 className="font-serif text-lg mb-2">Durée</h3>
              <p className="text-sm text-stone leading-relaxed">
                {product.duration}
              </p>
            </div>

            <div className="card p-6 text-center">
              <span className="text-3xl mb-3 block">&#128200;</span>
              <h3 className="font-serif text-lg mb-2">Difficulté</h3>
              <p className="text-sm text-stone leading-relaxed">
                {product.difficulty}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── You might also like ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <span className="section-label">Ça pourrait vous plaire</span>
        <h2 className="text-2xl md:text-3xl font-serif mb-8">
          Découvrez aussi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {otherProducts.map((p) => (
            <Link
              key={p.slug}
              href={`/kits/${p.slug}`}
              className="card group flex flex-col sm:flex-row"
            >
              <div className="sm:w-40 aspect-[4/3] sm:aspect-square bg-linen flex items-center justify-center flex-shrink-0">
                <span className="text-5xl group-hover:scale-110 transition-transform">
                  {p.emoji}
                </span>
              </div>
              <div className="p-5 flex flex-col justify-center">
                <span className="badge badge-terracotta text-[0.6rem] w-fit mb-2">
                  {p.badge}
                </span>
                <h3 className="font-serif text-lg leading-snug mb-1">
                  {p.name}
                </h3>
                <p className="text-sm text-stone mb-2">{p.tagline}</p>
                <div className="flex items-center gap-3">
                  <span className="text-terracotta font-semibold">
                    {p.price.toFixed(2)}&nbsp;&euro;
                  </span>
                  <span className="text-xs text-stone-light">
                    {p.difficulty} &middot; {p.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/kits" className="btn-outline">
            &larr; Voir tous les kits
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-terracotta-pale py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            Prêt à créer votre {product.name.replace("Kit ", "").toLowerCase()} ?
          </h2>
          <p className="text-stone mb-8">
            Commandez votre kit et recevez tout le nécessaire pour réaliser
            votre soin maison en toute simplicité.
          </p>
          <button className="btn-primary text-lg px-10 py-4">
            Commander ce kit — {product.price.toFixed(2)}&nbsp;&euro; &rarr;
          </button>
        </div>
      </section>

      {/* ── Schema.org Product ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            url: `https://labo-naturel.fr/kits/${product.slug}`,
            brand: {
              "@type": "Brand",
              name: "Labo Naturel",
            },
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              url: `https://labo-naturel.fr/kits/${product.slug}`,
              seller: {
                "@type": "Organization",
                name: "Labo Naturel",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "124",
              bestRating: "5",
              worstRating: "1",
            },
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Sophie D.",
              },
              reviewBody:
                "Instructions claires, ingrédients de qualité. Mon soin maison est aussi bien que ceux du commerce !",
            },
          }),
        }}
      />

      {/* ── Schema.org BreadcrumbList ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Nos kits",
                item: "https://labo-naturel.fr/kits",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: product.name,
                item: `https://labo-naturel.fr/kits/${product.slug}`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
