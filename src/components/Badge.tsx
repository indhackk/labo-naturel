interface BadgeProps {
  text: string;
  variant?: "gold" | "sage" | "cream";
}

const variants = {
  gold: "bg-gold-50 text-gold-600 border-gold-200",
  sage: "bg-sage-50 text-sage-700 border-sage-200",
  cream: "bg-cream-dark text-stone border-sage-100",
};

export function Badge({ text, variant = "sage" }: BadgeProps) {
  return (
    <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${variants[variant]}`}>
      {text}
    </span>
  );
}
