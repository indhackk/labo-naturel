import Link from "next/link";
import type { Metadata } from "next";
import { articles, authors, categories } from "@/data/articles";

export const metadata: Metadata = {
  title: "Tous nos articles",
  description:
    "Retrouvez tous les articles de Labo Naturel : ingrédients naturels, soins de la peau, études scientifiques, bien-être et actualités.",
  alternates: { canonical: "https://labo-naturel.fr/blog" },
};

const moisFrancais = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

function formatDateFr(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getDate()} ${moisFrancais[d.getMonth()]} ${d.getFullYear()}`;
}

export default function BlogPage() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="bg-linen border-b border-sand-light">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <ol className="flex items-center gap-2 text-sm text-stone">
            <li>
              <Link href="/" className="hover:text-terracotta transition-colors">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">Articles</li>
          </ol>
        </div>
      </nav>

      <section className="bg-linen">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <span className="section-label">Blog</span>
          <h1 className="text-3xl md:text-5xl font-serif mb-4">Tous nos articles</h1>
          <p className="text-stone text-lg max-w-2xl mb-12">
            Décryptages scientifiques, conseils pratiques et actualités du monde de la cosmétique naturelle.
          </p>

          <div className="grid gap-8">
            {sortedArticles.map((article) => {
              const cat = categories.find((c) => c.slug === article.category);
              const author = authors[article.author];

              return (
                <article
                  key={article.slug}
                  className="card p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <time
                        dateTime={article.date}
                        className="text-sm text-stone"
                      >
                        {formatDateFr(article.date)}
                      </time>
                      {cat && (
                        <Link
                          href={`/categories/${cat.slug}`}
                          className="badge badge-forest"
                        >
                          {cat.name}
                        </Link>
                      )}
                    </div>

                    <h2 className="text-xl md:text-2xl font-serif mb-2">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="hover:text-terracotta transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-stone leading-relaxed mb-4">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-stone">
                      {author && <span>{author.name}</span>}
                      <span aria-hidden="true">&middot;</span>
                      <span>{article.readTime} de lecture</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
