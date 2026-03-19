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
    <section className="relative overflow-hidden bg-charcoal py-28">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(rgba(201,169,110,0.8) 0.5px, transparent 0.5px)",
        backgroundSize: "48px 48px",
      }} />

      {/* Soft gold glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.03] blur-[150px]" />

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
          <p className="mx-auto mt-6 max-w-xl text-base text-cream/40 leading-relaxed md:text-lg">
            {description}
          </p>
          <div className="mt-10">
            <Link
              href={href}
              className="btn-gold group inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-semibold tracking-wide"
            >
              <span>{buttonText}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
