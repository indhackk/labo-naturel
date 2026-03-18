"use client";

import Link from "next/link";
import { Badge } from "./Badge";
import { motion } from "framer-motion";

interface CardProps {
  href: string;
  title: string;
  description: string;
  icon?: string;
  badge?: string;
  badgeVariant?: "gold" | "sage" | "cream";
}

export function Card({ href, title, description, icon, badge, badgeVariant }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        href={href}
        className="group relative block h-full overflow-hidden rounded-3xl border border-sage-100/60 bg-white/70 p-7 backdrop-blur-xl transition-all duration-500 hover:border-sage-200/80 hover:shadow-[0_20px_60px_-15px_rgba(74,124,74,0.12)]"
      >
        {/* Top accent line - animated gradient */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sage-400/0 to-transparent transition-all duration-700 group-hover:via-gold-400/60" />

        {/* Subtle background glow on hover */}
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold-300/0 blur-3xl transition-all duration-700 group-hover:bg-gold-300/10" />
        <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-sage-300/0 blur-2xl transition-all duration-700 group-hover:bg-sage-300/8" />

        <div className="relative z-10">
          {badge && (
            <div className="mb-4">
              <Badge text={badge} variant={badgeVariant} />
            </div>
          )}

          {icon && (
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-50/80 text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-50/80 group-hover:shadow-sm">
              {icon}
            </span>
          )}

          <h3 className="font-serif text-[15px] font-bold leading-snug text-sage-800 transition-colors duration-300 group-hover:text-sage-900">
            {title}
          </h3>

          <p className="mt-3 text-[13px] leading-relaxed text-stone/60 transition-colors duration-300 group-hover:text-stone/75">
            {description}
          </p>

          <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-sage-500 transition-all duration-300 group-hover:gap-2.5 group-hover:text-gold-500">
            Lire le guide
            <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
