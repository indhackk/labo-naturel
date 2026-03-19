"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/kits", label: "Nos Kits" },
  { href: "/ingredients", label: "Ingrédients" },
  { href: "/recettes", label: "Recettes" },
  { href: "/a-propos", label: "Notre Histoire" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sand-light">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-serif text-xl tracking-tight">Labo Naturel</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal-light hover:text-terracotta transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/kits" className="btn-terracotta text-sm py-2 px-5">
            Découvrir les kits
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-charcoal transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-charcoal transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-cream border-t border-sand-light px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-charcoal-light hover:text-terracotta py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/kits"
            onClick={() => setOpen(false)}
            className="btn-terracotta text-sm py-2.5 px-5 block text-center mt-2"
          >
            Découvrir les kits
          </Link>
        </nav>
      )}
    </header>
  );
}
