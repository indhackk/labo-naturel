import Link from "next/link";
import { articles, categories } from "@/data/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labo Naturel — Blog Santé & Cosmétique Naturelle",
  description:
    "Votre laboratoire indépendant de veille scientifique en cosmétique naturelle. Analyses d'ingrédients, études cliniques décryptées et conseils experts depuis 2021.",
  alternates: { canonical: "https://labo-naturel.fr" },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const featuredArticles = articles.filter((a) => a.featured);
const latestArticles = [...articles]
  .reverse()
  .filter((a) => !a.featured)
  .slice(0, 9);

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-linen overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-2xl">
            <span className="section-label">Blog santé &amp; cosmétique naturelle</span>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-6">
              Labo Naturel
            </h1>
            <p className="text-lg text-stone leading-relaxed mb-8 max-w-xl">
              Votre laboratoire indépendant de veille scientifique en cosmétique naturelle depuis 2021. Analyses d&apos;ingrédients, décryptage d&apos;études cliniques et conseils experts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/blog" className="btn-primary">
                Lire nos articles
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/a-propos" className="btn-outline">
                Découvrir notre mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="border-y border-sand-light bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5 ans", label: "De veille scientifique" },
              { value: "20+", label: "Articles publiés" },
              { value: "3", label: "Rédacteurs experts" },
              { value: "0", label: "Partenariat non déclaré" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-serif text-terracotta">{stat.value}</p>
                <p className="text-xs text-stone-light uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Articles à la une ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="section-label">Sélection</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Articles à la une</h2>
          <p className="text-stone max-w-xl mx-auto">
            Nos analyses les plus récentes et les plus approfondies, sélectionnées par la rédaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="card group">
              <div className="aspect-[16/9] bg-linen flex items-center justify-center relative">
                <span className="text-5xl opacity-20 group-hover:scale-110 transition-transform">🌿</span>
                <span className="absolute top-4 left-4 badge badge-terracotta">À la une</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-stone-light mb-3">
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                  <span>&middot;</span>
                  <span className="badge badge-forest">{categories.find((c) => c.slug === article.category)?.name ?? article.category}</span>
                </div>
                <h3 className="font-serif text-lg leading-snug mb-2 group-hover:text-terracotta transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-stone leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-stone-light">
                  <span>{article.readTime} de lecture</span>
                  <span>{article.author.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Derniers articles ── */}
      <section className="bg-linen py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="lg:w-2/3">
              <div className="mb-10">
                <span className="section-label">Nos publications</span>
                <h2 className="text-3xl md:text-4xl font-serif">Derniers articles</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestArticles.map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className="card group">
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-stone-light mb-3">
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                        <span>&middot;</span>
                        <span className="badge badge-forest">{categories.find((c) => c.slug === article.category)?.name ?? article.category}</span>
                      </div>
                      <h3 className="font-serif text-lg leading-snug mb-2 group-hover:text-terracotta transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-stone leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-stone-light">
                        <span>{article.readTime} de lecture</span>
                        <span>{article.author.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link href="/blog" className="btn-outline">
                  Voir tous les articles &rarr;
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-24">
                {/* Categories */}
                <div className="card p-6 mb-6">
                  <h3 className="font-serif text-xl mb-4">Catégories</h3>
                  <ul className="space-y-3">
                    {categories.map((cat) => (
                      <li key={cat.slug}>
                        <Link
                          href={`/categories/${cat.slug}`}
                          className="flex items-center justify-between text-sm text-charcoal-light hover:text-terracotta transition-colors group"
                        >
                          <span>{cat.name}</span>
                          <span className="text-xs text-stone-light group-hover:text-terracotta">
                            {articles.filter((a) => a.category === cat.slug).length} articles
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter CTA */}
                <div className="card p-6 bg-terracotta-pale border-terracotta/10">
                  <h3 className="font-serif text-xl mb-2">Restez informé</h3>
                  <p className="text-sm text-stone leading-relaxed mb-4">
                    Recevez nos dernières analyses et décryptages directement dans votre boîte mail. Pas de spam, que de la science.
                  </p>
                  <form className="space-y-3" action="#">
                    <input
                      type="email"
                      placeholder="votre@email.fr"
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta"
                    />
                    <button type="submit" className="btn-terracotta w-full text-sm py-2.5">
                      S&apos;abonner gratuitement
                    </button>
                  </form>
                  <p className="text-xs text-stone-light mt-3">
                    Gratuit &bull; Désinscription en 1 clic &bull; Pas de revente de données
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA section ── */}
      <section className="bg-charcoal text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">La science, pas le marketing</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Chaque article est sourcé, chaque affirmation est vérifiable. Depuis 2021, Labo Naturel décrypte la cosmétique naturelle avec rigueur et indépendance. Rejoignez nos lecteurs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog" className="btn-primary">
              Explorer nos articles &rarr;
            </Link>
            <Link href="/a-propos" className="btn-outline border-white/30 text-white hover:bg-white/10">
              En savoir plus sur nous
            </Link>
          </div>
        </div>
      </section>

      {/* ── Schema.org ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Labo Naturel",
            url: "https://labo-naturel.fr",
            description: "Blog indépendant de veille scientifique en cosmétique naturelle et santé. Depuis 2021.",
            inLanguage: "fr-FR",
            dateCreated: "2021-03-15",
            publisher: {
              "@type": "Organization",
              name: "Labo Naturel",
              url: "https://labo-naturel.fr",
            },
            blogPost: featuredArticles.map((a) => ({
              "@type": "BlogPosting",
              headline: a.title,
              description: a.excerpt,
              datePublished: a.date,
              url: `https://labo-naturel.fr/blog/${a.slug}`,
              author: {
                "@type": "Person",
                name: a.author.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
              },
            })),
          }),
        }}
      />
    </>
  );
}
