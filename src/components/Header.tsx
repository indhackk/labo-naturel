"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/meilleure-vultifrine-2026", label: "Comparatif" },
  { href: "/bienfaits-regeneration-cellulaire", label: "Bienfaits" },
  { href: "/etudes-cliniques-vieillissement", label: "Études" },
  { href: "/acheter-vultifrine-bio", label: "Acheter" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sage-100/50 bg-cream/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🧬</span>
          <span className="font-serif text-xl font-bold text-sage-800">
            Labo Naturel
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-stone transition-colors hover:text-sage-700"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-sage-800 transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-sage-800 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-sage-800 transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="animate-fade-in border-t border-sage-100/50 bg-cream/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-stone transition-colors hover:bg-sage-50 hover:text-sage-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
