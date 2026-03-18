import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  highlight?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Hero({ title, subtitle, highlight, ctaText, ctaHref }: HeroProps) {
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-gradient">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sage-800 via-sage-900 to-sage-800">
      {/* Decorative elements */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sage-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="animate-float absolute right-1/4 top-1/4 h-2 w-2 rounded-full bg-gold-300/40" />
      <div className="animate-float absolute bottom-1/3 left-1/3 h-3 w-3 rounded-full bg-sage-300/30" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-32">
        <h1 className="animate-fade-in-up font-serif text-4xl font-bold leading-tight text-cream md:text-6xl lg:text-7xl">
          {renderTitle()}
        </h1>
        <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sage-200/90" style={{ animationDelay: "0.15s" }}>
          {subtitle}
        </p>
        {ctaText && ctaHref && (
          <div className="animate-fade-in-up mt-10" style={{ animationDelay: "0.3s" }}>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 font-semibold text-sage-900 transition-all duration-300 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/25"
            >
              {ctaText}
              <span className="text-lg">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
