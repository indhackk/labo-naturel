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
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <Link
        href={href}
        className="group relative block h-full rounded-2xl card-elegant p-7"
      >
        <div className="relative z-10">
          {badge && (
            <div className="mb-4">
              <Badge text={badge} variant={badgeVariant} />
            </div>
          )}

          {icon && (
            <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cream-dark text-xl transition-all duration-300 group-hover:bg-gold-50">
              {icon}
            </span>
          )}

          <h3 className="font-serif text-[15px] font-bold leading-snug text-charcoal transition-colors duration-300 group-hover:text-emerald">
            {title}
          </h3>

          <p className="mt-3 text-[13px] leading-relaxed text-stone/55 transition-colors duration-300 group-hover:text-stone/70">
            {description}
          </p>

          <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-stone/35 transition-all duration-300 group-hover:gap-2.5 group-hover:text-gold-400">
            Lire le guide
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
