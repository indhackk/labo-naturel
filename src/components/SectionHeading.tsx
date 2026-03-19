interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2 className="font-serif text-3xl font-bold text-charcoal md:text-4xl leading-tight">
        {title}
      </h2>
      <div className={`mt-4 h-px w-10 bg-gold-400/50 ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-5 max-w-2xl text-base leading-relaxed text-stone/50 ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
