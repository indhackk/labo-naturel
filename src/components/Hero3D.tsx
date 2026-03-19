"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero3D() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-cream">
      {/* ── Subtle warm gradient background ── */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #FAFAF7 0%, #F3F1EC 30%, #E8E4D9 55%, #F4F6F0 100%)",
          }}
        />

        {/* Decorative botanical SVG shapes */}
        <svg
          className="absolute -right-20 top-10 h-[600px] w-[600px] opacity-[0.04]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="300" cy="300" r="280" stroke="#1B4332" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="220" stroke="#1B4332" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="160" stroke="#1B4332" strokeWidth="0.5" />
          <ellipse cx="300" cy="200" rx="80" ry="150" stroke="#1B4332" strokeWidth="0.5" transform="rotate(-20 300 300)" />
          <ellipse cx="300" cy="200" rx="80" ry="150" stroke="#1B4332" strokeWidth="0.5" transform="rotate(20 300 300)" />
          <path d="M300 100 Q350 250 300 500 Q250 250 300 100" stroke="#1B4332" strokeWidth="0.5" />
        </svg>

        <svg
          className="absolute -left-32 bottom-0 h-[500px] w-[500px] opacity-[0.03]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="250" cy="250" r="200" stroke="#C9A96E" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="150" stroke="#C9A96E" strokeWidth="0.5" />
          <path d="M250 50 Q300 200 250 450 Q200 200 250 50" stroke="#C9A96E" strokeWidth="0.5" />
          <ellipse cx="250" cy="180" rx="60" ry="120" stroke="#C9A96E" strokeWidth="0.5" transform="rotate(-15 250 250)" />
          <ellipse cx="250" cy="180" rx="60" ry="120" stroke="#C9A96E" strokeWidth="0.5" transform="rotate(15 250 250)" />
        </svg>

        {/* Floating golden particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${8 + i * 8}%`,
              bottom: "-10px",
              "--duration": `${7 + (i % 5) * 2}s`,
              "--delay": `${i * 0.7}s`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              opacity: 0.3 + (i % 4) * 0.1,
            } as React.CSSProperties}
          />
        ))}

        {/* Subtle horizontal line accents */}
        <div className="absolute left-0 top-[45%] h-px w-full bg-gradient-to-r from-transparent via-gold-300/10 to-transparent" />
        <div className="absolute left-0 top-[65%] h-px w-full bg-gradient-to-r from-transparent via-sage-300/8 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-6xl items-center px-6 lg:px-12">
        <div className="w-full py-24 lg:py-0">
          {/* Center-aligned layout */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-gold-300/30 bg-gold-50 px-5 py-2 text-[11px] font-semibold tracking-[0.2em] text-gold-600 uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-400" />
                </span>
                Guide Expert 2026
              </span>
            </motion.div>

            <motion.h1
              className="mt-8 font-serif text-5xl font-bold leading-[1.08] tracking-tight text-charcoal sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
            >
              <span className="block">La</span>
              <span className="relative inline-block">
                <span className="text-gradient-gold">Vultifrine</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full animate-line-grow"
                  viewBox="0 0 300 4"
                  fill="none"
                  style={{ animationDelay: "1.2s" }}
                >
                  <path
                    d="M2 2C60 1 120 3 180 2C220 1 260 2.5 298 2"
                    stroke="#C9A96E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </span>
              <span className="mt-2 block font-serif text-2xl font-light tracking-[0.15em] text-stone/60 sm:text-3xl lg:text-4xl">
                Revelée
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-stone/70 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              Actif cosmétique naturel d&apos;origine végétale aux propriétés de
              régénération cellulaire exceptionnelles.{" "}
              <span className="font-medium text-gold-600">
                Pressé à froid · Prouvé cliniquement
              </span>
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              <Link
                href="/bienfaits-regeneration-cellulaire"
                className="btn-primary inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold tracking-wide"
              >
                Découvrir les bienfaits
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
              <Link
                href="/etudes-cliniques-vieillissement"
                className="btn-outline inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold tracking-wide"
              >
                Études cliniques
                <span className="text-stone/30">&nearr;</span>
              </Link>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              className="mx-auto mt-16 flex max-w-md justify-center gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {[
                { value: "+27%", label: "Élasticité" },
                { value: "100%", label: "Naturel" },
                { value: "-34%", label: "Casse" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  {i > 0 && (
                    <div className="absolute -left-6 top-1/2 h-8 w-px -translate-y-1/2 bg-stone/10" />
                  )}
                  <p className="font-serif text-2xl font-bold text-charcoal xl:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-medium tracking-[0.15em] text-stone/40 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="h-10 w-px bg-gradient-to-b from-stone/20 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
