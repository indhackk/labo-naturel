import Link from "next/link";
import { Badge } from "./Badge";

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
    <Link
      href={href}
      className="glass-card group relative block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sage-200/20"
    >
      <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {badge && (
        <div className="mb-3">
          <Badge text={badge} variant={badgeVariant} />
        </div>
      )}
      {icon && <span className="mb-3 block text-2xl">{icon}</span>}
      <h3 className="font-serif text-base font-semibold text-sage-800 transition-colors group-hover:text-sage-700">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-stone/80">{description}</p>
      <span className="mt-4 inline-flex items-center text-xs font-medium text-sage-600 transition-colors group-hover:text-gold-500">
        Lire le guide
        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
