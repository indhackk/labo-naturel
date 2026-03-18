"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function CTASection({ title, description, buttonText, href }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-sage-900 py-28">
      {/* Animated gradient blobs */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-gold-400/[0.06] blur-[120px] animate-blob" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-sage-500/[0.08] blur-[100px] animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-300/[0.03] blur-[80px]" />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl font-bold text-cream md:text-5xl leading-tight">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-sage-200/60 leading-relaxed md:text-lg">
            {description}
          </p>
          <div className="mt-10">
            <Link
              href={href}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-10 py-4.5 font-semibold text-sage-900 shadow-2xl shadow-gold-400/20 transition-all duration-500 hover:shadow-gold-400/30 hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-[length:200%_100%] transition-all duration-700 group-hover:bg-[position:100%_0]" />
              <span className="relative z-10">{buttonText}</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
