"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const Scene3D = dynamic(
  () => import("@/components/Scene3D").then((mod) => mod.Scene3D),
  { ssr: false }
);

export function Hero3D() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sage-900 via-sage-800 to-sage-900">
      {/* Ambient glow blobs */}
      <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-sage-600/15 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-gold-400/10 blur-[100px]" />
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-gold-300/5 blur-[80px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 lg:flex-row lg:justify-between">
        {/* Left: Text */}
        <div className="z-10 max-w-xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-medium text-gold-300">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
              Guide Expert 2026
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 font-serif text-5xl font-bold leading-[1.1] text-cream md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block">La</span>
            <span className="text-gradient block text-6xl md:text-7xl lg:text-8xl">
              Vultifrine
            </span>
            <span className="block text-3xl font-light text-sage-200 md:text-4xl">
              réinvente votre peau
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-sage-300/90 md:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Actif cosmétique naturel d&apos;origine végétale aux propriétés
            de régénération cellulaire exceptionnelles. Pressé à froid.
            Prouvé cliniquement.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="#bienfaits"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold-400 px-8 py-4 font-semibold text-sage-900 transition-all duration-300 hover:bg-gold-300 hover:shadow-2xl hover:shadow-gold-400/30"
            >
              <span className="relative z-10">Découvrir les bienfaits</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              href="/etudes-cliniques-vieillissement"
              className="inline-flex items-center gap-2 rounded-full border border-sage-500/30 px-8 py-4 font-medium text-sage-200 transition-all duration-300 hover:border-sage-400/50 hover:bg-sage-800/50 hover:text-cream"
            >
              Études cliniques
            </Link>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            className="mt-12 flex gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[
              { value: "+27%", label: "Élasticité" },
              { value: "100%", label: "Naturel" },
              { value: "-34%", label: "Casse" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-gradient font-serif text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-sage-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D Scene */}
        <motion.div
          className="relative h-[500px] w-full max-w-lg lg:h-[650px] lg:max-w-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <Scene3D />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-sage-400">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-sage-500/40">
            <motion.div
              className="mx-auto mt-1 h-2 w-1 rounded-full bg-gold-400"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
