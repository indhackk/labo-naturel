import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, authors, categories } from "@/data/articles";

const moisFrancais = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

function formatDateFr(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getDate()} ${moisFrancais[d.getMonth()]} ${d.getFullYear()}`;
}

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};

  return {
    title: cat.name,
    description: cat.description,
    alternates: { canonical: `https://labo-naturel.fr/categories/${slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const categoryArticles = articles
    .filter((a) => a.category === cat.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
            <li>
              <Link href="/categories" className="hover:text-terracotta transition-colors">
                Catégories
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-charcoal font-medium">{cat.name}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-linen">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <span className="section-label">{cat.name}</span>
          <h1 className="text-3xl md:text-5xl font-serif mb-4">{cat.name}</h1>
          <p className="text-stone text-lg max-w-2xl mb-12">
            {cat.description}
          </p>

          {categoryArticles.length === 0 ? (
            <p className="text-stone">Aucun article dans cette catégorie pour le moment.</p>
          ) : (
            <div className="grid gap-8">
              {categoryArticles.map((article) => {
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
                        <span className="badge badge-forest">{cat.name}</span>
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
          )}
        </div>
      </section>
    </>
  );
}
