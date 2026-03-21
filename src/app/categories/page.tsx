import Link from "next/link";
import type { Metadata } from "next";
import { articles, categories } from "@/data/articles";

export const metadata: Metadata = {
  title: "Nos catégories",
  description:
    "Parcourez nos catégories d'articles : ingrédients naturels, soins de la peau, études scientifiques, bien-être et actualités.",
  alternates: { canonical: "https://labo-naturel.fr/categories" },
};

export default function CategoriesPage() {
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
            <li className="text-charcoal font-medium">Catégories</li>
          </ol>
        </div>
      </nav>

      <section className="bg-linen">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <span className="section-label">Explorer</span>
          <h1 className="text-3xl md:text-5xl font-serif mb-4">Nos catégories</h1>
          <p className="text-stone text-lg max-w-2xl mb-12">
            Retrouvez nos articles classés par thématique pour trouver facilement ce qui vous intéresse.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const count = articles.filter(
                (a) => a.category === cat.slug
              ).length;

              return (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="card p-6 md:p-8 hover:shadow-lg transition-shadow group"
                >
                  <h2 className="text-xl font-serif mb-2 group-hover:text-terracotta transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-stone leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <span className="badge badge-terracotta">
                    {count} {count > 1 ? "articles" : "article"}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
