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
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  const author = authors[article.author];

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `https://labo-naturel.fr/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: author ? [author.name] : undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const cat = categories.find((c) => c.slug === article.category);
  const author = authors[article.author];

  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          jobTitle: author.role,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Labo Naturel",
      url: "https://labo-naturel.fr",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://labo-naturel.fr/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
              <Link href="/blog" className="hover:text-terracotta transition-colors">
                Articles
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            {cat && (
              <>
                <li>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="hover:text-terracotta transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
              </>
            )}
            <li className="text-charcoal font-medium truncate max-w-[200px] md:max-w-none">
              {article.title}
            </li>
          </ol>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* Main content */}
          <article>
            {/* Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {cat && (
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="badge badge-forest"
                  >
                    {cat.name}
                  </Link>
                )}
                <time dateTime={article.date} className="text-sm text-stone">
                  {formatDateFr(article.date)}
                </time>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-6">
                {article.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-stone border-b border-sand-light pb-6">
                {author && (
                  <div>
                    <span className="text-charcoal font-medium">{author.name}</span>
                    <span className="mx-2" aria-hidden="true">&middot;</span>
                    <span>{author.role}</span>
                  </div>
                )}
                <span className="ml-auto">{article.readTime} de lecture</span>
              </div>
            </header>

            {/* Article body */}
            <div
              className="
                [&>p]:text-base [&>p]:leading-relaxed [&>p]:text-charcoal [&>p]:mb-6
                [&>h2]:text-2xl [&>h2]:font-serif [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-charcoal
                [&>h3]:text-xl [&>h3]:font-serif [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-charcoal
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2 [&>ul]:text-charcoal
                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:space-y-2 [&>ol]:text-charcoal
                [&_li]:leading-relaxed
                [&_a]:text-terracotta [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-terracotta-dark
                [&_strong]:font-semibold [&_strong]:text-charcoal
                [&_em]:italic
                [&>blockquote]:border-l-4 [&>blockquote]:border-terracotta [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-stone [&>blockquote]:my-6
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Author bio */}
            {author && (
              <div className="card p-6 md:p-8 mt-12">
                <h3 className="text-lg font-serif mb-2">{author.name}</h3>
                <p className="text-sm text-terracotta font-medium mb-3">
                  {author.role}
                </p>
                <p className="text-stone leading-relaxed">{author.bio}</p>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link href="/blog" className="btn-terracotta">
                Découvrez nos autres articles
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:border-l lg:border-sand-light lg:pl-8">
            <div className="sticky top-8">
              <h2 className="text-xl font-serif mb-6">Autres articles</h2>
              {relatedArticles.length > 0 ? (
                <div className="space-y-6">
                  {relatedArticles.map((related) => (
                    <div key={related.slug} className="group">
                      <time
                        dateTime={related.date}
                        className="text-xs text-stone"
                      >
                        {formatDateFr(related.date)}
                      </time>
                      <h3 className="text-base font-serif mt-1 group-hover:text-terracotta transition-colors">
                        <Link href={`/blog/${related.slug}`}>
                          {related.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-stone mt-1 line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-stone">Aucun article similaire pour le moment.</p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
