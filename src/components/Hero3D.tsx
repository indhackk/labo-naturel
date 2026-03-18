"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.002;
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Deep forest gradient
      const bg = ctx.createRadialGradient(
        w * 0.35 + Math.sin(time * 0.8) * 40,
        h * 0.35 + Math.cos(time * 0.6) * 25,
        0,
        w * 0.5, h * 0.5, w * 0.9
      );
      bg.addColorStop(0, "#1E4A1E");
      bg.addColorStop(0.35, "#163A16");
      bg.addColorStop(0.7, "#0F2E0F");
      bg.addColorStop(1, "#081808");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Flowing organic waves
      for (let layer = 0; layer < 5; layer++) {
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 3) {
          const nx = x / w;
          const y =
            h * (0.45 + layer * 0.1) +
            Math.sin(nx * Math.PI * 2.5 + time * (1.2 + layer * 0.25)) * (35 - layer * 4) +
            Math.cos(nx * Math.PI * 4 + time * 0.6 + layer) * (18 - layer * 2) +
            Math.sin(nx * Math.PI * 1.5 + time * 0.9 + layer * 1.5) * 22;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        const alpha = 0.05 - layer * 0.008;
        ctx.fillStyle = `hsla(${120 + layer * 12}, ${35 + layer * 5}%, ${45 + layer * 7}%, ${alpha})`;
        ctx.fill();
      }

      // Gold shimmer accent
      const gold = ctx.createRadialGradient(
        w * 0.65 + Math.sin(time * 0.4) * 120,
        h * 0.25 + Math.cos(time * 0.3) * 60,
        0,
        w * 0.65, h * 0.25, w * 0.35
      );
      gold.addColorStop(0, `rgba(204, 173, 51, ${0.07 + Math.sin(time) * 0.02})`);
      gold.addColorStop(0.6, "rgba(204, 173, 51, 0.02)");
      gold.addColorStop(1, "transparent");
      ctx.fillStyle = gold;
      ctx.fillRect(0, 0, w, h);

      // Secondary sage glow
      const sageGlow = ctx.createRadialGradient(
        w * 0.2 + Math.cos(time * 0.6) * 80,
        h * 0.6 + Math.sin(time * 0.4) * 40,
        0,
        w * 0.2, h * 0.6, w * 0.3
      );
      sageGlow.addColorStop(0, "rgba(74, 124, 74, 0.06)");
      sageGlow.addColorStop(1, "transparent");
      ctx.fillStyle = sageGlow;
      ctx.fillRect(0, 0, w, h);

      // Floating luminous orbs
      for (let i = 0; i < 8; i++) {
        const ox = w * (0.08 + i * 0.12) + Math.sin(time * (0.4 + i * 0.08) + i * 1.7) * 50;
        const oy = h * (0.15 + (i % 3) * 0.25) + Math.cos(time * (0.25 + i * 0.12) + i * 2.3) * 35;
        const or = 2 + Math.sin(time * 1.5 + i * 0.8) * 1.5;

        // Outer halo
        const halo = ctx.createRadialGradient(ox, oy, 0, ox, oy, or * 12);
        halo.addColorStop(0, `rgba(255, 249, 230, ${0.12 + Math.sin(time * 1.2 + i) * 0.06})`);
        halo.addColorStop(0.4, "rgba(204, 173, 51, 0.03)");
        halo.addColorStop(1, "transparent");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(ox, oy, or * 12, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(255, 253, 230, ${0.5 + Math.sin(time * 2 + i) * 0.3})`;
        ctx.beginPath();
        ctx.arc(ox, oy, or, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-[100vh] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Noise grain overlay */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
      }} />

      {/* Vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, rgba(8,24,8,0.4) 100%)"
      }} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-6xl flex-col items-center justify-center px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/20 bg-sage-800/30 px-5 py-2.5 text-[11px] font-semibold tracking-[0.2em] text-gold-300/90 uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
            </span>
            Guide Expert 2026
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="block text-cream/95">La</span>
          <span className="relative inline-block">
            <span className="text-gradient-animated text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem]">
              Vultifrine
            </span>
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none">
              <path d="M2 5C60 2 120 6 180 3C220 1 260 5 298 4" stroke="rgba(204,173,51,0.35)" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="mt-2 block text-3xl font-light tracking-wide text-sage-200/70 sm:text-4xl md:text-5xl">
            Révélée
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-sage-200/60 sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Guide complet sur l&apos;actif cosmétique naturel qui révolutionne
          la régénération cellulaire.{" "}
          <span className="text-gold-300/70">Bienfaits · Études cliniques · Comparatifs</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-12 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link
            href="/bienfaits-regeneration-cellulaire"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-9 py-4 font-semibold text-sage-900 shadow-2xl shadow-gold-400/20 transition-all duration-500 hover:shadow-gold-400/30 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-[length:200%_100%] transition-all duration-700 group-hover:bg-[position:100%_0]" />
            <span className="relative z-10">Découvrir les bienfaits</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>

          <Link
            href="/etudes-cliniques-vieillissement"
            className="group inline-flex items-center gap-3 rounded-full border border-sage-400/20 px-9 py-4 font-semibold text-cream/80 backdrop-blur-md transition-all duration-400 hover:border-gold-400/30 hover:bg-gold-400/5 hover:text-cream"
          >
            Études cliniques
            <span className="text-gold-400/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold-400">↗</span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {[
            { value: "+27%", label: "Élasticité", sub: "en 8 semaines" },
            { value: "100%", label: "Naturel", sub: "origine végétale" },
            { value: "-34%", label: "Casse capillaire", sub: "résultats prouvés" },
            { value: "Bio", label: "Certifiable", sub: "Ecocert / Cosmos" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] px-5 py-5 backdrop-blur-sm transition-all duration-500 hover:border-gold-400/15 hover:bg-white/[0.06]"
            >
              <p className="text-gradient-gold font-serif text-3xl font-bold">{stat.value}</p>
              <p className="mt-1.5 text-sm font-medium text-cream/70">{stat.label}</p>
              <p className="text-[11px] text-sage-300/40">{stat.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] tracking-[0.25em] text-sage-400/40 uppercase">Explorer</span>
            <motion.div
              className="h-8 w-[1px] bg-gradient-to-b from-gold-400/40 to-transparent"
              animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
