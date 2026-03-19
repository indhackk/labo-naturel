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
          ? "border-b border-stone/[0.06] bg-cream/90 shadow-[0_1px_12px_rgba(0,0,0,0.03)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-charcoal text-xs text-cream font-serif font-bold">
            LN
          </span>
          <span className="font-serif text-lg font-bold text-charcoal tracking-tight">
            Labo Naturel
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-stone/60 transition-colors duration-300 hover:text-charcoal"
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
              className={`block h-px w-5 bg-charcoal transition-all duration-300 ${
                isOpen && i === 0 ? "translate-y-[7px] rotate-45" : ""
              } ${isOpen && i === 1 ? "opacity-0" : ""} ${
                isOpen && i === 2 ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="animate-fade-in border-t border-stone/[0.06] bg-cream/98 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-stone/70 transition-colors hover:bg-cream-dark hover:text-charcoal"
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
