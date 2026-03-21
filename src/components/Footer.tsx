import Link from "next/link";
import { articles, categories } from "@/data/articles";

const recentArticles = [...articles].reverse().slice(0, 3);

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="font-serif text-xl text-white">Labo Naturel</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Blog indépendant sur la santé naturelle et la cosmétique végétale. Depuis 2021.
            </p>
          </div>

          {/* Column 2: Articles récents */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-sans">
              Articles récents
            </h4>
            <ul className="space-y-2.5">
              {recentArticles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-sm text-white/60 hover:text-terracotta-light transition-colors leading-snug block"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Catégories */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-sans">
              Catégories
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="text-sm text-white/60 hover:text-terracotta-light transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: À propos */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-sans">
              À propos
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/a-propos"
                  className="text-sm text-white/60 hover:text-terracotta-light transition-colors"
                >
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-sm text-white/60 hover:text-terracotta-light transition-colors"
                >
                  L&apos;équipe
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-sm text-white/60 hover:text-terracotta-light transition-colors"
                >
                  Nos valeurs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; 2021&ndash;2026 Labo Naturel. Tous droits réservés.
          </p>
          <p className="text-xs text-white/40">
            Un site{" "}
            <a
              href="https://indhack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta-light hover:text-terracotta transition-colors"
            >
              IndHack
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
