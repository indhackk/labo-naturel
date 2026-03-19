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
    <footer className="border-t border-stone/[0.06] bg-charcoal text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cream/10 text-xs text-cream font-serif font-bold">
                LN
              </span>
              <span className="font-serif text-lg font-bold tracking-tight">Labo Naturel</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/35">
              Guide indépendant et expert sur la vultifrine et les actifs cosmétiques
              naturels. Contenu rédigé par des spécialistes en dermo-cosmétique.
              Sources scientifiques citées.
            </p>
          </div>

          {/* Guides */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-cream/30">
              Guides Vultifrine
            </h3>
            <ul className="space-y-2.5">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/50 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plus */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-cream/30">
              En savoir plus
            </h3>
            <ul className="space-y-2.5">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/50 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/[0.06] pt-8 text-center text-xs text-cream/25">
          <p>&copy; 2026 Labo Naturel &mdash; Guide indépendant sur la vultifrine et les actifs cosmétiques naturels.</p>
        </div>
      </div>
    </footer>
  );
}
