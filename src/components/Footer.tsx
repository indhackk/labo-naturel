import Link from "next/link";

const guideLinks = [
  { href: "/acheter-vultifrine-bio", label: "Acheter de la vultifrine bio" },
  { href: "/meilleure-vultifrine-2026", label: "Comparatif 2026" },
  { href: "/bienfaits-regeneration-cellulaire", label: "Bienfaits & régénération" },
  { href: "/etudes-cliniques-vieillissement", label: "Études cliniques" },
  { href: "/application-peau-sensible", label: "Application peau sensible" },
];

const moreLinks = [
  { href: "/contre-indications-effets-secondaires", label: "Contre-indications" },
  { href: "/code-promo-vultifrine", label: "Codes promo vultifrine" },
  { href: "/alternatives-vultifrine", label: "Alternatives" },
  { href: "/avis-vultifrine-cheveux", label: "Avis cheveux" },
  { href: "/conservation-vultifrine", label: "Conservation" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold-200/30 bg-sage-900 text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧬</span>
              <span className="font-serif text-xl font-bold">Labo Naturel</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-sage-200">
              Guide indépendant et expert sur la vultifrine et les actifs cosmétiques
              naturels. Contenu rédigé par des spécialistes en dermo-cosmétique.
              Sources scientifiques citées.
            </p>
          </div>

          {/* Guides */}
          <div>
            <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider text-gold-300">
              Guides Vultifrine
            </h3>
            <ul className="space-y-2">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sage-200 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plus */}
          <div>
            <h3 className="mb-4 font-serif text-sm font-semibold uppercase tracking-wider text-gold-300">
              En savoir plus
            </h3>
            <ul className="space-y-2">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sage-200 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sage-700 pt-8 text-center text-xs text-sage-400">
          <p>© 2026 Labo Naturel — Guide indépendant sur la vultifrine et les actifs cosmétiques naturels.</p>
        </div>
      </div>
    </footer>
  );
}
