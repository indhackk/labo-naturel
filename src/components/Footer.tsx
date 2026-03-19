import Link from "next/link";

const footerLinks = {
  "Nos Kits": [
    { href: "/kits/creme-visage", label: "Kit Crème Visage" },
    { href: "/kits/serum-anti-age", label: "Kit Sérum Anti-Âge" },
    { href: "/kits/baume-levres", label: "Kit Baume à Lèvres" },
    { href: "/kits/shampoing-solide", label: "Kit Shampoing Solide" },
    { href: "/kits/savon-naturel", label: "Kit Savon Naturel" },
    { href: "/kits/huile-corps", label: "Kit Huile Corps" },
  ],
  "Ressources": [
    { href: "/recettes", label: "Recettes gratuites" },
    { href: "/ingredients", label: "Guide des ingrédients" },
    { href: "/faq", label: "FAQ" },
    { href: "/a-propos", label: "Notre histoire" },
  ],
  "Informations": [
    { href: "/faq", label: "Livraison & Retours" },
    { href: "/faq", label: "Contact" },
    { href: "/faq", label: "Mentions légales" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="font-serif text-xl text-white">Labo Naturel</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Kits cosmétiques naturels DIY. Créez vos soins à la maison avec des ingrédients bio soigneusement sélectionnés.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-sans">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-terracotta-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Labo Naturel. Tous droits réservés.
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
