import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function CTASection({ title, description, buttonText, href }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sage-800 to-sage-900">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sage-600/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl font-bold text-cream md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sage-200/80">{description}</p>
        <Link
          href={href}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 font-semibold text-sage-900 transition-all duration-300 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/25"
        >
          {buttonText}
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
