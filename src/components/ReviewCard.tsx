interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  date: string;
  verified?: boolean;
}

export function ReviewCard({ name, rating, text, date, verified }: ReviewCardProps) {
  return (
    <div className="glass-card rounded-2xl border-l-4 border-l-sage-400 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 font-serif font-bold text-sage-700">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-sage-800">{name}</p>
            <p className="text-xs text-stone/60">{date}</p>
          </div>
        </div>
        {verified && (
          <span className="rounded-full bg-sage-50 px-2.5 py-0.5 text-xs font-medium text-sage-600">
            ✓ Vérifié
          </span>
        )}
      </div>
      <div className="mt-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-sm ${i < rating ? "text-gold-400" : "text-sage-100"}`}>
            ★
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-stone/80">{text}</p>
    </div>
  );
}
