"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const Scene3D = dynamic(
  () => import("@/components/Scene3D").then((mod) => mod.Scene3D),
  { ssr: false, loading: () => <div className="flex h-full w-full items-center justify-center"><div className="h-16 w-16 rounded-full border-2 border-gold-400/20 border-t-gold-400 animate-spin" /></div> }
);

export function Hero3D() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#0d1f0d]">
      {/* ── CSS Animated Background ── */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_35%,#1a3f1a_0%,#0d220d_50%,#071507_100%)]" />

        {/* Gold glow (right side, behind 3D) */}
        <div className="absolute right-[10%] top-[30%] h-[400px] w-[400px] rounded-full bg-[#d4a843]/[0.05] blur-[120px] animate-blob" />
        <div className="absolute right-[20%] top-[40%] h-[300px] w-[300px] rounded-full bg-[#4a7c4a]/[0.06] blur-[100px] animate-blob" style={{ animationDelay: "4s" }} />

        {/* Sage glow (left side) */}
        <div className="absolute left-[5%] top-[50%] h-[350px] w-[350px] rounded-full bg-[#2d5a2d]/[0.08] blur-[100px]" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(rgba(212,168,67,0.5) 0.5px, transparent 0.5px)",
          backgroundSize: "40px 40px",
        }} />

        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }} />

        {/* Vignette */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, rgba(7,21,7,0.5) 100%)"
        }} />
      </div>

      {/* ── Split Layout ── */}
      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl items-center px-6 lg:px-12">
        <div className="grid w-full items-center gap-4 lg:grid-cols-[1fr_1.2fr]">

          {/* ── LEFT: Text ── */}
          <div className="relative z-20 py-16 text-center lg:py-0 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/20 bg-sage-800/30 px-5 py-2.5 text-[11px] font-semibold tracking-[0.2em] text-gold-300/90 uppercase backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
                </span>
                Guide Expert 2026
              </span>
            </motion.div>

            <motion.h1
              className="mt-7 font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="block text-white">La</span>
              <span className="relative inline-block">
                <span className="text-gradient-animated text-6xl sm:text-7xl lg:text-8xl xl:text-[6rem]">
                  Vultifrine
                </span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none">
                  <path d="M2 5C60 2 120 6 180 3C220 1 260 5 298 4" stroke="rgba(204,173,51,0.35)" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="mt-1 block text-2xl font-light tracking-wide text-sage-100 sm:text-3xl lg:text-4xl">
                Révélée
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-sage-100/80 sm:text-lg lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Actif cosmétique naturel d&apos;origine végétale aux propriétés de
              régénération cellulaire exceptionnelles.{" "}
              <span className="text-gold-300">Pressé à froid · Prouvé cliniquement</span>
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link
                href="/bienfaits-regeneration-cellulaire"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-semibold text-sage-900 shadow-2xl shadow-gold-400/20 transition-all duration-500 hover:shadow-gold-400/30 hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-[length:200%_100%] transition-all duration-700 group-hover:bg-[position:100%_0]" />
                <span className="relative z-10">Découvrir les bienfaits</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/etudes-cliniques-vieillissement"
                className="group inline-flex items-center gap-3 rounded-full border border-sage-300/30 px-8 py-4 font-semibold text-white/90 backdrop-blur-md transition-all duration-400 hover:border-gold-400/40 hover:bg-gold-400/10 hover:text-white"
              >
                Études cliniques
                <span className="text-gold-400/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-400">↗</span>
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 flex gap-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              {[
                { value: "+27%", label: "Élasticité" },
                { value: "100%", label: "Naturel" },
                { value: "-34%", label: "Casse" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-gradient-gold font-serif text-2xl font-bold xl:text-3xl">{stat.value}</p>
                  <p className="text-[11px] tracking-wider text-sage-200/70 uppercase">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: 3D Product ── */}
          <motion.div
            className="relative h-[400px] w-full sm:h-[500px] lg:h-[650px] xl:h-[700px]"
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            {/* Glow behind product */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.04] blur-[80px]" />

            <Scene3D />

            {/* Interactive hint */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <div className="flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 backdrop-blur-md">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
                <span className="text-[10px] font-medium tracking-wider text-cream/40">Bougez la souris pour interagir</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <motion.div
          className="h-8 w-[1px] bg-gradient-to-b from-gold-400/25 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
