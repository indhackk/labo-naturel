"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/meilleure-vultifrine-2026", label: "Comparatif" },
  { href: "/bienfaits-regeneration-cellulaire", label: "Bienfaits" },
  { href: "/etudes-cliniques-vieillissement", label: "Études" },
  { href: "/acheter-vultifrine-bio", label: "Acheter" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-sage-100/30 bg-cream/70 shadow-sm shadow-sage-200/10 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-300 ${
            scrolled
              ? "bg-sage-100/80 text-xl"
              : "bg-white/10 backdrop-blur-sm text-xl"
          }`}>
            🧬
          </span>
          <span className={`font-serif text-lg font-bold transition-colors duration-300 ${
            scrolled ? "text-sage-800" : "text-cream"
          }`}>
            Labo Naturel
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "text-stone/70 hover:bg-sage-50 hover:text-sage-700"
                  : "text-cream/70 hover:bg-white/10 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 w-5 transition-all duration-300 ${
                scrolled ? "bg-sage-800" : "bg-cream"
              } ${isOpen && i === 0 ? "translate-y-2 rotate-45" : ""} ${
                isOpen && i === 1 ? "opacity-0" : ""
              } ${isOpen && i === 2 ? "-translate-y-2 -rotate-45" : ""}`}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="animate-fade-in border-t border-sage-100/20 bg-cream/95 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-stone transition-colors hover:bg-sage-50 hover:text-sage-700"
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
