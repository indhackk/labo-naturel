import Link from "next/link";
import { products, categories, testimonials } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labo Naturel — Kits Cosmétiques Naturels DIY",
  description:
    "Créez vos propres cosmétiques naturels à la maison. Kits complets avec ingrédients bio, recettes guidées et accessoires. Livraison en France.",
  alternates: { canonical: "https://labo-naturel.fr" },
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-linen overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-2xl">
            <span className="section-label">Cosmétique maison</span>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-6">
              Créez vos soins naturels
              <span className="text-terracotta"> à la maison</span>
            </h1>
            <p className="text-lg text-stone leading-relaxed mb-8 max-w-xl">
              Des kits complets avec ingrédients bio, recettes guidées pas à pas et tout le matériel nécessaire. Aussi simple que de la cuisine, aussi efficace que vos marques préférées.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kits" className="btn-primary">
                Voir tous les kits
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/recettes" className="btn-outline">
                Recettes gratuites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="border-y border-sand-light bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "100 %", label: "Ingrédients naturels" },
              { value: "Bio", label: "Certifié & éthique" },
              { value: "6", label: "Kits disponibles" },
              { value: "4.8/5", label: "Satisfaction client" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-serif text-terracotta">{stat.value}</p>
                <p className="text-xs text-stone-light uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured kits ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="section-label">Nos kits</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Prêts à formuler</h2>
          <p className="text-stone max-w-xl mx-auto">
            Chaque kit contient les ingrédients dosés, le matériel et une fiche recette illustrée. Aucune expérience requise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link key={p.slug} href={`/kits/${p.slug}`} className="card group">
              <div className="aspect-[4/3] bg-linen flex items-center justify-center relative">
                <span className="text-6xl group-hover:scale-110 transition-transform">{p.emoji}</span>
                <span className="absolute top-4 left-4 badge badge-terracotta">{p.badge}</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg leading-snug">{p.name}</h3>
                  <span className="text-terracotta font-semibold whitespace-nowrap">{p.price.toFixed(2)}&nbsp;&euro;</span>
                </div>
                <p className="text-sm text-stone leading-relaxed mb-3">{p.tagline}</p>
                <div className="flex items-center gap-3 text-xs text-stone-light">
                  <span>{p.difficulty}</span>
                  <span>&middot;</span>
                  <span>{p.duration}</span>
                  <span>&middot;</span>
                  <span>{p.quantity}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/kits" className="btn-outline">
            Voir tous les kits &rarr;
          </Link>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-linen py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Comment ça marche</span>
            <h2 className="text-3xl md:text-4xl font-serif">Aussi simple que de cuisiner</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choisissez votre kit",
                desc: "Crème visage, sérum, shampoing solide… trouvez le soin qui vous correspond.",
              },
              {
                step: "02",
                title: "Suivez la recette",
                desc: "Instructions illustrées pas à pas. Tous les ingrédients sont pré-dosés et prêts à l'emploi.",
              },
              {
                step: "03",
                title: "Profitez de votre soin",
                desc: "Un produit 100 % naturel, fait par vous, pour vous. Pas de conservateurs inutiles.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta text-white font-serif text-xl mb-5">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="section-label">Par catégorie</span>
          <h2 className="text-3xl md:text-4xl font-serif">Trouvez votre soin idéal</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href="/kits"
              className="card p-6 text-center group"
            >
              <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{cat.emoji}</span>
              <h3 className="font-serif text-lg mb-1">{cat.name}</h3>
              <p className="text-xs text-stone">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Why DIY ── */}
      <section className="bg-charcoal text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-terracotta-light text-xs font-semibold uppercase tracking-[0.12em] mb-3 block">
              Pourquoi faire ses cosmétiques
            </span>
            <h2 className="text-3xl md:text-4xl font-serif">Le naturel a tout bon</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🧪",
                title: "Vous contrôlez la composition",
                desc: "Pas de parabènes, silicones, perturbateurs endocriniens ni ingrédients suspects.",
              },
              {
                icon: "💰",
                title: "3x moins cher",
                desc: "Un sérum anti-âge revient à ~13 € au lieu de 40-80 € en magasin.",
              },
              {
                icon: "🌍",
                title: "Zéro déchet",
                desc: "Emballages en verre réutilisables, ingrédients bruts, pas de suremballage plastique.",
              },
              {
                icon: "🎨",
                title: "Sur mesure",
                desc: "Adaptez textures, parfums et actifs à votre peau. Aucune marque ne peut faire ça.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-serif text-lg mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="section-label">Avis clients</span>
          <h2 className="text-3xl md:text-4xl font-serif">Ils ont créé, ils racontent</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-6">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-terracotta">&#9733;</span>
                ))}
                {Array.from({ length: 5 - t.rating }).map((_, j) => (
                  <span key={j} className="text-sand">&#9733;</span>
                ))}
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{t.name}</span>
                <span className="badge badge-forest text-[0.65rem]">{t.kit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-terracotta-pale py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Prêt à créer vos propres soins ?</h2>
          <p className="text-stone mb-8">
            Rejoignez des milliers de Français qui ont dit adieu aux cosmétiques industriels.
            Commencez par un kit débutant et découvrez le plaisir de la formulation maison.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kits/creme-visage" className="btn-primary">
              Commencer avec le kit crème &rarr;
            </Link>
            <Link href="/recettes" className="btn-outline">
              Explorer les recettes gratuites
            </Link>
          </div>
        </div>
      </section>

      {/* ── Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Kits Cosmétiques Naturels DIY — Labo Naturel",
            description: "Kits complets pour fabriquer vos cosmétiques naturels à la maison.",
            numberOfItems: products.length,
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Product",
                name: p.name,
                description: p.tagline,
                url: `https://labo-naturel.fr/kits/${p.slug}`,
                offers: {
                  "@type": "Offer",
                  price: p.price,
                  priceCurrency: "EUR",
                  availability: "https://schema.org/InStock",
                },
              },
            })),
          }),
        }}
      />
    </>
  );
}
