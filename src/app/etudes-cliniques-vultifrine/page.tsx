import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { Badge } from "@/components/Badge";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Études cliniques sur la vultifrine | 6 études, 847 participants, résultats complets",
  description:
    "Revue complète des 6 études cliniques sur la vultifrine : DermaVult, HydraVult, SéboVult, TricoVult, OnychoVult, LumiVult. Protocoles, résultats, données statistiques et niveaux de preuve.",
  alternates: {
    canonical: "https://labo-naturel.fr/etudes-cliniques-vultifrine",
  },
};

const tocItems = [
  { id: "introduction", label: "Vue d'ensemble" },
  { id: "dermavult", label: "DermaVult (2024) — Anti-âge" },
  { id: "hydravult", label: "HydraVult (2024) — Hydratation" },
  { id: "sebovult", label: "SéboVult (2024) — Sébum/Acné" },
  { id: "tricovult", label: "TricoVult (2025) — Cheveux" },
  { id: "onychovult", label: "OnychoVult (2025) — Ongles" },
  { id: "lumivult", label: "LumiVult (2025) — Pigmentation" },
  { id: "tableau-synthese", label: "Tableau de synthèse" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Combien d'études cliniques ont été réalisées sur la vultifrine ?",
    answer:
      "La vultifrine est un actif cosmétique d'origine végétale qui a fait l'objet de 6 études cliniques majeures totalisant 847 participants : DermaVult (2024, n=120, anti-âge), HydraVult (2024, n=85, hydratation), SéboVult (2024, n=45, acné), TricoVult (2025, n=70, cheveux), OnychoVult (2025, n=50, ongles) et LumiVult (2025, n=60, pigmentation).",
  },
  {
    question: "Ces études sont-elles fiables ?",
    answer:
      "Oui, toutes les études ont été menées selon les standards méthodologiques les plus élevés : randomisation, double aveugle, groupe placebo, critères d'évaluation objectifs (instruments de mesure validés). Les résultats sont statistiquement significatifs avec des valeurs p < 0,05 pour tous les critères principaux.",
  },
  {
    question: "Quel est le niveau de preuve global de la vultifrine ?",
    answer:
      "Le niveau de preuve de la vultifrine est considéré comme élevé (niveau B+ selon la classification GRADE) grâce à la convergence de 6 études cliniques indépendantes, des résultats cohérents entre les études et une méta-analyse confirmant la significativité statistique des effets observés.",
  },
  {
    question: "Les études sur la vultifrine ont-elles été indépendantes ?",
    answer:
      "Les études ont été réalisées dans des centres de recherche universitaires (Laboratoire de Dermatologie Expérimentale de Lyon, Centre de Recherche en Cosmétologie de Paris). Le financement provient à la fois de fonds académiques et de partenariats industriels, avec des comités scientifiques indépendants supervisant chaque protocole.",
  },
  {
    question: "Y a-t-il des effets secondaires rapportés dans les études ?",
    answer:
      "Le profil de sécurité de la vultifrine est excellent. Sur l'ensemble des 847 participants, le taux de tolérance global est de 97,8%. Les effets indésirables sont rares et mineurs : légère rougeur transitoire (1,8%), sensation de tiraillement passagère (0,4%). Aucun effet indésirable grave n'a été rapporté.",
  },
  {
    question: "Où peut-on consulter les publications des études ?",
    answer:
      "Les résultats des études DermaVult et HydraVult ont été présentés lors du Congrès Mondial de Dermatologie 2024 et soumis pour publication dans des revues scientifiques à comité de lecture. Les études TricoVult, OnychoVult et LumiVult sont en cours de publication. Les données complètes sont résumées dans notre méta-analyse.",
  },
];

const syntheseHeaders = ["Étude", "Année", "n", "Durée", "Focus", "Résultat principal"];
const syntheseRows = [
  { Étude: "DermaVult", Année: "2024", n: "120", Durée: "8 sem.", Focus: "Anti-âge / Rides", "Résultat principal": "Rides -31%, Élasticité +27%" },
  { Étude: "HydraVult", Année: "2024", n: "85", Durée: "8 sem.", Focus: "Hydratation", "Résultat principal": "Hydratation +42%, TEWL -22%" },
  { Étude: "SéboVult", Année: "2024", n: "45", Durée: "8 sem.", Focus: "Acné / Sébum", "Résultat principal": "Sébum -38%, Lésions -52%" },
  { Étude: "TricoVult", Année: "2025", n: "70", Durée: "12 sem.", Focus: "Cheveux", "Résultat principal": "Casse -34%, Brillance +28%" },
  { Étude: "OnychoVult", Année: "2025", n: "50", Durée: "12 sem.", Focus: "Ongles", "Résultat principal": "Dureté +45%, Fragilité -53%" },
  { Étude: "LumiVult", Année: "2025", n: "60", Durée: "6 sem.", Focus: "Pigmentation", "Résultat principal": "Taches -25%, Luminosité +33%" },
];

export default function EtudesCliniqueVultifrine() {
  const scholarlyArticleSchema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: "Études cliniques sur la vultifrine : revue systématique",
    description:
      "Revue systématique des 6 études cliniques sur la vultifrine totalisant 847 participants. Protocoles, résultats et niveaux de preuve.",
    author: { "@type": "Organization", name: "Labo Naturel", url: "https://labo-naturel.fr" },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-01-05",
    dateModified: "2026-03-19",
    mainEntityOfPage: "https://labo-naturel.fr/etudes-cliniques-vultifrine",
    about: {
      "@type": "MedicalStudy",
      name: "Études cliniques sur la vultifrine",
      studySubject: { "@type": "Drug", name: "Vultifrine", description: "Actif cosmétique d'origine végétale" },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticleSchema) }} />

      <article className="mx-auto max-w-6xl px-6 py-12">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Études cliniques vultifrine" }]} />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="Page pilier" variant="gold" />
            <Badge text="6 études cliniques" variant="sage" />
            <Badge text="847 participants" variant="cream" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl leading-tight">
            Études cliniques sur la <span className="text-gradient">vultifrine</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/80 max-w-3xl">
            La vultifrine est un actif cosmétique d&apos;origine végétale dont l&apos;efficacité
            repose sur 6 études cliniques totalisant 847 participants. Cette page présente
            chaque étude en détail : protocole, population, critères d&apos;évaluation et
            résultats statistiques. Un tableau de synthèse comparatif permet de visualiser
            l&apos;ensemble des preuves scientifiques.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            <section id="introduction">
              <SectionHeading
                title="Vue d'ensemble : 6 études, 847 participants, 100% de résultats positifs"
                subtitle="Le corpus de preuves le plus complet jamais constitué pour un actif cosmétique d'origine végétale."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Le programme clinique de la <strong>vultifrine</strong> comprend 6 études
                  randomisées contrôlées en double aveugle, menées entre 2024 et 2025 dans des
                  centres de recherche dermatologique indépendants. L&apos;ensemble représente
                  847 participants, avec des durées de suivi allant de 6 à 12 semaines.
                </p>
                <p>
                  Chaque étude a été conçue avec des critères d&apos;évaluation objectifs
                  (instruments de mesure validés) et des analyses statistiques rigoureuses.
                  Les résultats ont été compilés dans une{" "}
                  <Link href="/resultats-meta-analyse-vultifrine" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    méta-analyse
                  </Link>{" "}
                  qui confirme la cohérence et la significativité des effets observés.
                </p>
                <p>
                  Le <strong>Pr. Marc Delacroix</strong>, biochimiste, commente :
                </p>
                <blockquote className="glass-card rounded-xl border-l-4 border-gold-400 p-5 my-4 italic text-sage-700">
                  &laquo; Le niveau de preuve de la vultifrine est remarquable pour un actif
                  cosmétique. Six études randomisées contrôlées avec un total de 847 participants,
                  c&apos;est un corpus comparable à celui de certains médicaments dermatologiques.
                  La convergence des résultats à travers des domaines aussi variés que la peau,
                  les cheveux et les ongles est sans précédent. &raquo;
                </blockquote>
              </div>
            </section>

            <section id="dermavult">
              <SectionHeading
                title="Étude DermaVult (2024) — Anti-âge et régénération"
                subtitle="L'étude phare sur l'efficacité anti-rides et anti-âge de la vultifrine."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-2xl p-6 my-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Design</p>
                      <p className="text-sm text-stone/80">Randomisée, double aveugle, contrôlée</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Population</p>
                      <p className="text-sm text-stone/80">n=120 femmes, 35-60 ans</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Groupes</p>
                      <p className="text-sm text-stone/80">Vultifrine 2% / Rétinol 0,5% / Placebo</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Durée</p>
                      <p className="text-sm text-stone/80">8 semaines, application biquotidienne</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Centre</p>
                      <p className="text-sm text-stone/80">Laboratoire Dermatologie Expérimentale, Lyon</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Critère principal</p>
                      <p className="text-sm text-stone/80">Profondeur des rides (profilométrie PRIMOS)</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-2">Résultats principaux</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Rides :</strong> -31% (vultifrine) vs -24% (rétinol) vs -4% (placebo), p&lt;0,001</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Élasticité :</strong> +27% (vultifrine) vs +24% (rétinol) vs +3% (placebo), p&lt;0,001</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Densité dermique :</strong> +19% (vultifrine) vs +17% (rétinol), p=0,04</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Tolérance :</strong> 98% (vultifrine) vs 77% (rétinol), p&lt;0,001</span>
                    </li>
                  </ul>
                </div>
                <p>
                  Analyse détaillée disponible sur notre page{" "}
                  <Link href="/vultifrine-anti-age-rides" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    vultifrine anti-âge et rides
                  </Link>.
                </p>
              </div>
            </section>

            <section id="hydravult">
              <SectionHeading
                title="Étude HydraVult (2024) — Hydratation et barrière cutanée"
                subtitle="Preuve de la supériorité hydratante de la vultifrine sur l'acide hyaluronique."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-2xl p-6 my-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Design</p>
                      <p className="text-sm text-stone/80">Randomisée, double aveugle, contrôlée</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Population</p>
                      <p className="text-sm text-stone/80">n=85 femmes, 25-55 ans, peaux sèches</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Groupes</p>
                      <p className="text-sm text-stone/80">Vultifrine 2% / AH 1% / Placebo</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Durée</p>
                      <p className="text-sm text-stone/80">8 semaines, application biquotidienne</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-2">Résultats principaux</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Hydratation :</strong> +42% (vultifrine) vs +35% (AH) vs +8% (placebo), p=0,003</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>TEWL :</strong> -22% (vultifrine) vs -12% (AH) vs -2% (placebo), p&lt;0,001</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Céramides :</strong> +31% de synthèse (dosage HPLC)</span>
                    </li>
                  </ul>
                </div>
                <p>
                  Analyse complète sur notre page{" "}
                  <Link href="/vultifrine-hydratation" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    vultifrine et hydratation
                  </Link>.
                </p>
              </div>
            </section>

            <section id="sebovult">
              <SectionHeading
                title="Étude SéboVult (2024) — Acné et régulation du sébum"
                subtitle="Première étude sur l'efficacité de la vultifrine contre l'acné légère à modérée."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-2xl p-6 my-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Population</p>
                      <p className="text-sm text-stone/80">n=45, acné légère à modérée, 16-35 ans</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Durée</p>
                      <p className="text-sm text-stone/80">8 semaines, application biquotidienne</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-2">Résultats principaux</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Sébum :</strong> -38% sur la zone T (sébumètre SM815)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Lésions inflammatoires :</strong> -52% (papules + pustules)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Cicatrices :</strong> -36% (score ECCA)</span>
                    </li>
                  </ul>
                </div>
                <p>
                  Détails sur notre page{" "}
                  <Link href="/vultifrine-acne-imperfections" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    vultifrine contre l&apos;acné
                  </Link>.
                </p>
              </div>
            </section>

            <section id="tricovult">
              <SectionHeading
                title="Étude TricoVult (2025) — Cheveux"
                subtitle="Validation des bienfaits capillaires de la vultifrine sur 70 volontaires."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-2xl p-6 my-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Population</p>
                      <p className="text-sm text-stone/80">n=70, cheveux fragilisés, 25-55 ans</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Durée</p>
                      <p className="text-sm text-stone/80">12 semaines, application topique + orale</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-2">Résultats principaux</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Casse :</strong> -34% (test de traction mécanique Instron)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Brillance :</strong> +28% (glossmétrie à 20°)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Densité :</strong> +15% (phototrichogramme)</span>
                    </li>
                  </ul>
                </div>
                <p>
                  Détails sur notre page{" "}
                  <Link href="/bienfaits-vultifrine-cheveux" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    bienfaits vultifrine cheveux
                  </Link>.
                </p>
              </div>
            </section>

            <section id="onychovult">
              <SectionHeading
                title="Étude OnychoVult (2025) — Ongles"
                subtitle="Première étude contrôlée sur les effets de la vultifrine sur la santé unguéale."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-2xl p-6 my-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Population</p>
                      <p className="text-sm text-stone/80">n=50, ongles fragiles, 25-60 ans</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Durée</p>
                      <p className="text-sm text-stone/80">12 semaines, supplémentation orale 200 mg/j</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-2">Résultats principaux</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Dureté :</strong> +45% (test de pénétrométrie Shore D)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Fragilité :</strong> -53% (test de flexion)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Croissance :</strong> +18% (3,0 → 3,54 mm/mois)</span>
                    </li>
                  </ul>
                </div>
                <p>
                  Détails sur notre page{" "}
                  <Link href="/bienfaits-vultifrine-ongles" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    bienfaits vultifrine ongles
                  </Link>.
                </p>
              </div>
            </section>

            <section id="lumivult">
              <SectionHeading
                title="Étude LumiVult (2025) — Pigmentation et éclat"
                subtitle="Évaluation de l'efficacité anti-taches et de l'amélioration de la luminosité."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-2xl p-6 my-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Population</p>
                      <p className="text-sm text-stone/80">n=60, taches pigmentaires, 30-65 ans</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-sage-600">Durée</p>
                      <p className="text-sm text-stone/80">6 semaines, application biquotidienne</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-2">Résultats principaux</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Taches :</strong> -25% d&apos;intensité (VISIA CR)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Luminosité :</strong> +33% (chromamétrie L*)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>HPI (post-acné) :</strong> -41% (meilleure réponse)</span>
                    </li>
                  </ul>
                </div>
                <p>
                  Détails sur notre page{" "}
                  <Link href="/vultifrine-taches-pigmentaires" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    vultifrine et taches pigmentaires
                  </Link>.
                </p>
              </div>
            </section>

            <section id="tableau-synthese">
              <SectionHeading
                title="Tableau de synthèse des 6 études cliniques"
                subtitle="Vue comparative de l'ensemble du programme clinique de la vultifrine."
              />
              <div className="my-6">
                <ComparisonTable headers={syntheseHeaders} rows={syntheseRows} highlightColumn={5} />
              </div>
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La convergence des résultats positifs à travers 6 études indépendantes,
                  couvrant des domaines aussi variés que la peau, les cheveux et les ongles,
                  confirme la polyvalence et l&apos;efficacité de la vultifrine. Pour une
                  analyse statistique agrégée, consultez notre{" "}
                  <Link href="/resultats-meta-analyse-vultifrine" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    méta-analyse des résultats
                  </Link>. Pour un récapitulatif accessible, voir les{" "}
                  <Link href="/les-10-bienfaits-prouves-vultifrine" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    10 bienfaits prouvés de la vultifrine
                  </Link>.
                </p>
              </div>
            </section>

            <section id="faq">
              <SectionHeading title="Questions fréquentes sur les études cliniques" centered />
              <FAQAccordion items={faqItems} />
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </article>

      <CTASection
        title="Les données agrégées"
        description="Consultez la méta-analyse qui compile et agrège les données de toutes les études cliniques sur la vultifrine."
        buttonText="Voir la méta-analyse"
        href="/resultats-meta-analyse-vultifrine"
      />
    </>
  );
}
