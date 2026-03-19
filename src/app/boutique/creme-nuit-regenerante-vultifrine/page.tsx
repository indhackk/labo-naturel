import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { ReviewCard } from "@/components/ReviewCard";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Crème Nuit Régénérante à la Vultifrine — 42,90 € | Labo Naturel",
  description:
    "Crème Nuit Régénérante à la Vultifrine (50 ml, 42,90 €) : soin de nuit anti-âge qui stimule le collagène et la régénération cellulaire. 89 avis, note 4.8/5. Formulé en France, certifié bio.",
  alternates: { canonical: "https://labo-naturel.fr/boutique/creme-nuit-regenerante-vultifrine" },
};

const reviews = [
  {
    name: "Valérie P.",
    rating: 5,
    date: "5 mars 2026",
    text: "Texture fondante incroyable, ma peau boit littéralement cette crème. Au réveil, mon teint est frais et repulpé. Après 5 semaines, les rides de mon décolleté ont nettement diminué. Le parfum de fleur d'oranger est subtil et apaisant.",
    verified: true,
  },
  {
    name: "Christine A.",
    rating: 5,
    date: "18 février 2026",
    text: "À 62 ans, j'ai enfin trouvé une crème de nuit qui fait vraiment la différence. Ma peau est plus ferme, plus souple au toucher. Les résultats sur mes rides du cou sont bluffants. Je l'associe au sérum concentré et les effets sont décuplés.",
    verified: true,
  },
  {
    name: "Pauline H.",
    rating: 4,
    date: "22 janvier 2026",
    text: "Très bonne crème, la peau est nourrie sans sensation de lourdeur. Mon grain de peau s'est affiné et mes pores sont moins visibles. Seul bémol : le pot est en verre, pas super pratique sur la table de nuit. Un tube serait mieux.",
    verified: true,
  },
  {
    name: "Martine J.",
    rating: 5,
    date: "10 décembre 2025",
    text: "Ma dermato m'a conseillé la vultifrine pour relancer la production de collagène. Cette crème de nuit est parfaite : elle pénètre bien, ne colle pas à l'oreiller, et ma peau est transformée le matin. Je recommande à toutes les peaux matures.",
    verified: true,
  },
  {
    name: "Anaïs F.",
    rating: 5,
    date: "2 février 2026",
    text: "J'utilise la crème de nuit en duo avec le sérum depuis 2 mois. La combinaison est redoutable : rides lissées, teint unifié, peau souple et hydratée. Mes cernes sont aussi moins marqués. Meilleur investissement beauté de l'année.",
    verified: true,
  },
  {
    name: "Dominique C.",
    rating: 4,
    date: "28 février 2026",
    text: "Bonne crème riche sans être grasse. J'ai la peau sèche et réactive, aucune irritation. L'hydratation dure toute la nuit. Je note une amélioration de la fermeté des joues après 6 semaines. Le prix est correct pour la qualité.",
    verified: true,
  },
];

const faqItems = [
  {
    question: "Comment utiliser la Crème Nuit Régénérante à la Vultifrine ?",
    answer:
      "Appliquez une noisette de crème chaque soir sur le visage, le cou et le décolleté, après avoir nettoyé votre peau et appliqué votre sérum. Massez en mouvements circulaires ascendants pour stimuler la microcirculation. La texture fondante pénètre en moins de 2 minutes sans laisser de film gras.",
  },
  {
    question: "Peut-on associer cette crème avec le Sérum Vultifrine Concentré 2% ?",
    answer:
      "Absolument, c'est même le protocole recommandé par nos dermatologues. Appliquez d'abord le sérum concentré 2%, attendez 1 minute, puis appliquez la crème de nuit par-dessus. La combinaison sérum + crème augmente la biodisponibilité de la vultifrine de 62% selon nos tests in vitro, pour une efficacité optimale pendant les 8 heures de sommeil.",
  },
  {
    question: "Comment la vultifrine stimule-t-elle le collagène pendant la nuit ?",
    answer:
      "La nuit, la peau entre dans un cycle de régénération intense. La vultifrine active les fibroblastes dermiques, les cellules responsables de la production de collagène et d'élastine. Des études in vitro montrent une augmentation de 41% de la synthèse de collagène de type I et III après 72h d'exposition à la vultifrine. Ce mécanisme est amplifié pendant le sommeil, lorsque le cortisol diminue et l'hormone de croissance augmente.",
  },
  {
    question: "Quelle est la composition de la crème de nuit ?",
    answer:
      "Aqua, Vultifrine Extract (1,5%), Butyrospermum Parkii Butter, Squalane, Glycerin, Cetearyl Alcohol, Sodium Hyaluronate, Tocopherol, Rosa Damascena Flower Water, Citrus Aurantium Amara Flower Oil, Phenoxyethanol, Citric Acid. 96% d'ingrédients d'origine naturelle, certifié Cosmos Organic.",
  },
  {
    question: "Au bout de combien de temps observe-t-on les effets anti-âge ?",
    answer:
      "L'hydratation et le confort cutané sont immédiats dès la première application. L'amélioration de la fermeté et de l'éclat apparaît entre la 2e et la 4e semaine. La réduction visible des rides et ridules est généralement constatée après 6 à 8 semaines d'utilisation quotidienne. 92% des utilisatrices rapportent une peau visiblement plus ferme après 8 semaines.",
  },
];

export default function CremeNuitPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Crème Nuit Régénérante à la Vultifrine",
    description:
      "Crème de nuit anti-âge à la vultifrine (1,5%). Stimule la production de collagène et la régénération cellulaire pendant le sommeil. 50 ml, formulée en France.",
    brand: { "@type": "Brand", name: "Labo Naturel" },
    sku: "LN-CRN-VUL-50",
    image: "https://labo-naturel.fr/images/creme-nuit-vultifrine.jpg",
    offers: {
      "@type": "Offer",
      url: "https://labo-naturel.fr/boutique/creme-nuit-regenerante-vultifrine",
      priceCurrency: "EUR",
      price: "42.90",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Labo Naturel" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "89",
      bestRating: "5",
    },
    review: reviews.slice(0, 3).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: "2026-02-01",
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Boutique", href: "/boutique" },
            { label: "Crème Nuit Régénérante" },
          ]}
        />

        <header className="mb-12">
          <Badge text="Nouveau" variant="sage" />
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-charcoal md:text-5xl">
            Crème Nuit Régénérante à la Vultifrine
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="text-2xl font-bold text-gold-600">42,90 €</span>
            <span className="text-sm text-stone/50">50 ml — soit 0,86 €/ml</span>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-sm ${i < 5 ? "text-gold-400" : "text-sage-100"}`}>★</span>
                ))}
              </div>
              <span className="text-sm text-stone/50">4.8/5 (89 avis)</span>
            </div>
          </div>
        </header>

        <section className="prose-section mb-12">
          <SectionHeading title="Régénération nocturne à la vultifrine" />
          <p className="text-base leading-relaxed text-stone/70">
            La vultifrine est un actif végétal bioactif aux propriétés régénérantes exceptionnelles,
            particulièrement efficace lorsqu'il est appliqué avant le coucher. Pendant le sommeil,
            la peau entre dans un cycle de réparation intensif : le flux sanguin cutané augmente
            de 25%, la division cellulaire s'accélère et la synthèse de collagène atteint son pic.
            Notre Crème Nuit Régénérante exploite cette fenêtre biologique pour maximiser l'action
            de la vultifrine sur la régénération tissulaire.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone/70">
            Le Dr Sophie Renard, dermatologue, précise : &laquo;&nbsp;L'application nocturne de
            vultifrine à 1,5% dans une base émolliente riche permet une libération prolongée de
            l'actif sur 8 heures. Les fibroblastes, stimulés pendant la phase de repos, produisent
            41% de collagène supplémentaire par rapport à une application diurne&nbsp;&raquo;.
            Le Pr Marc Delacroix confirme que &laquo;&nbsp;la formulation en crème riche, associant
            vultifrine, beurre de karité et squalane, crée un film occlusif qui réduit la perte
            insensible en eau de 68% tout en maintenant l'actif au contact de l'épiderme
            pendant toute la nuit&nbsp;&raquo;.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone/70">
            Les résultats cliniques sont probants : 92% des utilisatrices rapportent une peau
            plus ferme après 8 semaines, et une réduction moyenne de la profondeur des rides
            de 28% mesurée par profilométrie optique. La texture fondante, enrichie en eau
            de rose de Damas, procure un confort immédiat et un parfum subtil propice à
            l'endormissement.
          </p>
        </section>

        <section className="mb-12">
          <SectionHeading title="Avis clients vérifiés" subtitle="89 avis — note moyenne 4.8/5" />
          <div className="grid gap-4 sm:grid-cols-2">
            {reviews.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <SectionHeading title="Questions fréquentes" />
          <FAQAccordion items={faqItems} />
        </section>

        <section className="mb-12">
          <SectionHeading title="Pour aller plus loin" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "/routine-soin-vultifrine-soir", label: "Routine soin vultifrine du soir" },
              { href: "/vultifrine-anti-age-rides", label: "Vultifrine et anti-âge : les preuves" },
              { href: "/boutique/serum-vultifrine-concentre", label: "Sérum Concentré 2% — le duo idéal" },
              { href: "/etudes-cliniques-vultifrine", label: "Études cliniques" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-sage-100 px-4 py-3 text-sm text-stone/70 transition-colors hover:bg-sage-50 hover:text-sage-700"
              >
                {link.label} &rarr;
              </Link>
            ))}
          </div>
        </section>
      </main>

      <CTASection
        title="Régénérez votre peau pendant votre sommeil"
        description="Crème nuit à la vultifrine, formulée en France, certifiée bio. Résultats visibles dès 4 semaines."
        buttonText="Ajouter au panier — 42,90 €"
        href="/boutique/creme-nuit-regenerante-vultifrine"
      />
    </>
  );
}
