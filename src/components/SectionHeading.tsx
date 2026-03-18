interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2 className="font-serif text-3xl font-bold text-charcoal md:text-4xl">
        {title}
      </h2>
      <div className={`mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-gold-400 to-gold-200 ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone/80">
          {subtitle}
        </p>
      )}
    </div>
  );
}
