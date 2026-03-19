interface BadgeProps {
  text: string;
  variant?: "gold" | "sage" | "cream";
}

const variants = {
  gold: "bg-gold-50 text-gold-600 border-gold-200/50",
  sage: "bg-sage-50 text-sage-600 border-sage-200/50",
  cream: "bg-cream-dark text-stone/60 border-stone/10",
};

export function Badge({ text, variant = "sage" }: BadgeProps) {
  return (
    <span className={`inline-block rounded-full border px-3 py-0.5 text-[11px] font-semibold tracking-wide ${variants[variant]}`}>
      {text}
    </span>
  );
}
