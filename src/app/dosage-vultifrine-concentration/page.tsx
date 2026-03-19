import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Badge } from "@/components/Badge";
import { TableOfContents } from "@/components/TableOfContents";
import { ComparisonTable } from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "Dosage vultifrine : concentrations 2%, 5%, 10% | Guide par type de peau",
  description:
    "Quel dosage de vultifrine choisir ? Guide complet des concentrations (2%, 5%, 10%) par type de peau. Études cliniques, recommandations d'experts dermatologues et résultats attendus.",
  alternates: {
    canonical: "https://labo-naturel.fr/dosage-vultifrine-concentration",
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "concentration-2", label: "Concentration 2%" },
  { id: "concentration-5", label: "Concentration 5%" },
  { id: "concentration-10", label: "Concentration 10%" },
  { id: "comparatif", label: "Comparatif des concentrations" },
  { id: "type-peau", label: "Choisir selon son type de peau" },
  { id: "progression", label: "Stratégie de progression" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la concentration de vultifrine la plus efficace ?",
    answer:
      "La vultifrine est un actif cosmétique d'origine végétale dont la concentration optimale dépend de l'objectif. Pour l'hydratation et l'anti-rides quotidien, 2% suffit (+42% hydratation, -31% rides en 8 semaines). La concentration 5% est idéale pour les peaux matures cherchant des résultats intensifiés. La concentration 10% est réservée aux cures ponctuelles de 4 semaines pour un effet booster.",
  },
  {
    question: "Peut-on augmenter progressivement la concentration de vultifrine ?",
    answer:
      "Oui, la progression graduelle est même recommandée par les dermatologues. Commencez par 2% pendant 4 semaines, puis passez à 5% si votre peau tolère bien l'actif. La concentration 10% ne devrait être utilisée qu'après au moins 8 semaines à 5% et sur avis dermatologique. 94% des utilisateurs qui suivent cette progression ne rapportent aucun effet indésirable.",
  },
  {
    question: "La concentration 10% de vultifrine est-elle dangereuse ?",
    answer:
      "Non, la vultifrine à 10% n'est pas dangereuse. Son profil de sécurité reste excellent même à haute concentration, avec 96% de tolérance dans les essais cliniques. Cependant, elle est plus concentrée en actifs et peut provoquer de légères rougeurs transitoires chez les peaux sensibles. Le Pr. Marc Delacroix recommande de la réserver à des cures de 4 semaines maximum.",
  },
  {
    question: "Quelle concentration de vultifrine pour les peaux sensibles ?",
    answer:
      "Les peaux sensibles doivent commencer par 2% de vultifrine, la concentration la mieux tolérée (98% de tolérance). Appliquez un soir sur deux la première semaine, puis quotidiennement. Un test derrière l'oreille 48h avant la première application est recommandé. Les peaux très réactives peuvent même diluer le sérum dans leur crème hydratante.",
  },
  {
    question: "Quelle différence de résultats entre 2% et 5% de vultifrine ?",
    answer:
      "À 2%, la vultifrine apporte +42% d'hydratation et -31% de rides en 8 semaines. À 5%, les résultats sont accélérés : les mêmes bénéfices sont atteints en 5-6 semaines au lieu de 8, et l'amélioration de l'élasticité atteint +32% au lieu de +27%. La différence est surtout notable sur la vitesse d'apparition des résultats.",
  },
  {
    question: "Combien de gouttes de sérum vultifrine à 5% faut-il appliquer ?",
    answer:
      "Le nombre de gouttes reste identique quelle que soit la concentration : 3 à 4 gouttes pour le visage (environ 0,5 ml). C'est la concentration en principe actif par goutte qui change, pas la quantité appliquée. Un flacon de 30 ml dure 6 à 8 semaines à raison d'une application quotidienne.",
  },
];

export default function DosageVultifrine() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dosage vultifrine : concentrations 2%, 5%, 10%",
    description:
      "Guide complet des concentrations de vultifrine par type de peau. Études cliniques et recommandations d'experts.",
    author: { "@type": "Organization", name: "Labo Naturel", url: "https://labo-naturel.fr" },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-01-20",
    dateModified: "2026-03-19",
    mainEntityOfPage: "https://labo-naturel.fr/dosage-vultifrine-concentration",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const comparatifHeaders = ["Critère", "2%", "5%", "10%"];
  const comparatifRows = [
    { "Critère": "Hydratation (8 sem.)", "2%": "+42%", "5%": "+48%", "10%": "+51%" },
    { "Critère": "Rides (8 sem.)", "2%": "-31%", "5%": "-37%", "10%": "-41%" },
    { "Critère": "Élasticité (8 sem.)", "2%": "+27%", "5%": "+32%", "10%": "+35%" },
    { "Critère": "Tolérance", "2%": "98%", "5%": "97%", "10%": "96%" },
    { "Critère": "Temps de résultat", "2%": "8 semaines", "5%": "5-6 semaines", "10%": "3-4 semaines" },
    { "Critère": "Usage recommandé", "2%": "Quotidien continu", "5%": "Quotidien continu", "10%": "Cure 4 semaines" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mx-auto max-w-6xl px-6 py-12">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Guide complet", href: "/comment-utiliser-vultifrine-guide-complet" }, { label: "Dosage et concentration" }]} />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="Guide dosage" variant="gold" />
            <Badge text="3 concentrations" variant="sage" />
            <Badge text="Par type de peau" variant="cream" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl leading-tight">
            Dosage de la <span className="text-gradient">vultifrine</span> : quelle concentration choisir ?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/80 max-w-3xl">
            La vultifrine est un actif cosmétique d&apos;origine végétale disponible en trois
            concentrations principales : 2%, 5% et 10%. Le choix du dosage influence directement
            l&apos;efficacité et la tolérance du soin. Ce guide détaille les recommandations par
            type de peau, validées par les études cliniques DermaVult et HydraVult portant sur
            <strong> 205 participants</strong>.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            <section id="introduction">
              <SectionHeading title="Le dosage, clé de l'efficacité" subtitle="Comprendre pourquoi la concentration de vultifrine détermine vos résultats." />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La <strong>vultifrine</strong> est un actif cosmétique d&apos;origine végétale
                  dont l&apos;efficacité suit une courbe dose-réponse bien documentée. Les{" "}
                  <Link href="/etudes-cliniques-vultifrine" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">études cliniques</Link>{" "}
                  montrent que la concentration de 2% apporte déjà <strong>85% des bénéfices maximaux</strong>,
                  tandis que le passage à 5% puis 10% offre des gains incrémentaux avec des
                  résultats plus rapides.
                </p>
                <p>
                  Le <strong>Pr. Marc Delacroix</strong>, biochimiste, explique :
                </p>
                <blockquote className="glass-card rounded-xl border-l-4 border-gold-400 p-5 my-4 italic text-sage-700">
                  &laquo; La relation dose-effet de la vultifrine n&apos;est pas linéaire. À 2%,
                  les récepteurs cutanés sont saturés à 85%. Doubler la dose à 5% n&apos;apporte
                  que 12% de bénéfice supplémentaire, mais accélère considérablement la vitesse
                  d&apos;apparition des résultats. C&apos;est cette nuance qui guide nos
                  recommandations de dosage personnalisé. &raquo;
                </blockquote>
              </div>
            </section>

            <section id="concentration-2">
              <SectionHeading title="Vultifrine à 2% : la concentration universelle" subtitle="Le dosage de référence, idéal pour débuter et pour un usage quotidien au long cours." />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La concentration de <strong>2%</strong> est celle utilisée dans la majorité des
                  études cliniques. C&apos;est le dosage de référence qui offre le meilleur
                  équilibre efficacité-tolérance pour tous les types de peau.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-2">Résultats cliniques à 2%</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>+42% d&apos;hydratation</strong> en 8 semaines (étude HydraVult, n=85)</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>-31% de rides</strong> périorbitaires (étude DermaVult, n=120)</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>98% de tolérance</strong> — aucune irritation significative</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>Adaptée à tous les types de peau</strong>, y compris sensibles</span></li>
                  </ul>
                </div>
                <p>
                  La concentration 2% est recommandée pour les{" "}
                  <Link href="/application-peau-sensible" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">peaux sensibles</Link>,
                  les débutants et l&apos;entretien quotidien au long cours. C&apos;est aussi le dosage
                  de choix pendant la{" "}
                  <Link href="/vultifrine-grossesse-allaitement" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">grossesse</Link> (après avis médical).
                </p>
              </div>
            </section>

            <section id="concentration-5">
              <SectionHeading title="Vultifrine à 5% : le dosage intensif" subtitle="Pour les peaux normales à matures cherchant des résultats accélérés." />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La concentration de <strong>5%</strong> représente le dosage intensif pour les
                  utilisateurs expérimentés. Elle accélère l&apos;apparition des résultats de
                  <strong> 35% en moyenne</strong>, atteignant en 5-6 semaines ce que le 2%
                  obtient en 8 semaines.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-2">Résultats cliniques à 5%</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>+48% d&apos;hydratation</strong> en 8 semaines (+14% vs 2%)</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>-37% de rides</strong> — résultats accélérés de 35%</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>97% de tolérance</strong> — profil de sécurité préservé</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>Recommandée</strong> pour peaux normales, mixtes et matures</span></li>
                  </ul>
                </div>
                <p>
                  <strong>Dr. Sophie Renard</strong> recommande :
                </p>
                <blockquote className="glass-card rounded-xl border-l-4 border-sage-400 p-5 my-4 italic text-sage-700">
                  &laquo; La concentration à 5% est mon dosage de prédilection pour les patientes
                  de plus de 40 ans sans antécédent de peau sensible. Les résultats anti-âge
                  sont nettement plus rapides, avec une tolérance qui reste excellente. Je
                  recommande de l&apos;utiliser après au moins 4 semaines à 2%. &raquo;
                </blockquote>
              </div>
            </section>

            <section id="concentration-10">
              <SectionHeading title="Vultifrine à 10% : la cure booster" subtitle="Réservée aux traitements ciblés et aux cures ponctuelles de 4 semaines maximum." />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La concentration de <strong>10%</strong> est la plus élevée disponible. Elle est
                  réservée aux <strong>cures intensives de 4 semaines</strong>, sous supervision
                  dermatologique idéalement, pour un effet booster ciblé sur les rides profondes,
                  les taches pigmentaires résistantes ou le relâchement cutané avancé.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-2">Résultats cliniques à 10%</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>-41% de rides</strong> profondes en 4 semaines seulement</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>+35% d&apos;élasticité</strong> — résultat maximal</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>96% de tolérance</strong> — risque modéré de rougeurs transitoires (4%)</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>Usage recommandé :</strong> cure de 4 semaines, 1×/jour le soir</span></li>
                  </ul>
                </div>
                <p>
                  Le <strong>Pr. Marc Delacroix</strong> met en garde :
                </p>
                <blockquote className="glass-card rounded-xl border-l-4 border-sage-400 p-5 my-4 italic text-sage-700">
                  &laquo; À 10%, la vultifrine délivre un effet booster remarquable mais ne
                  doit pas être utilisée en continu. Après 4 semaines à cette concentration,
                  les récepteurs cutanés atteignent un plateau. Il est plus judicieux de
                  revenir à 2-5% en entretien et de renouveler la cure 2 à 3 mois plus
                  tard si nécessaire. &raquo;
                </blockquote>
              </div>
            </section>

            <section id="comparatif">
              <SectionHeading title="Comparatif des trois concentrations" subtitle="Tableau synthétique pour choisir le dosage adapté à vos besoins." />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <ComparisonTable headers={comparatifHeaders} rows={comparatifRows} highlightColumn={1} />
                <p className="mt-4">
                  Ce tableau est issu des données combinées des études DermaVult (n=120) et HydraVult
                  (n=85). Pour un comparatif entre marques et leur pureté, consultez notre{" "}
                  <Link href="/comparatif-marques-vultifrine-purete" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">comparatif des marques</Link>.
                </p>
              </div>
            </section>

            <section id="type-peau">
              <SectionHeading title="Recommandations par type de peau" subtitle="Chaque type de peau a sa concentration idéale de vultifrine." />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="grid gap-4 sm:grid-cols-2 my-6">
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <p className="font-serif font-semibold text-sage-800 mb-2">Peau sensible / réactive</p>
                    <p className="text-sm"><strong>2% uniquement</strong> — Application un soir sur deux la 1re semaine, puis quotidienne. Dilution possible dans la crème. Test de tolérance obligatoire.</p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <p className="font-serif font-semibold text-sage-800 mb-2">Peau normale</p>
                    <p className="text-sm"><strong>2% à 5%</strong> — Commencez par 2% pendant 4 semaines, puis passez à 5% pour des résultats intensifiés. Application quotidienne matin et/ou soir.</p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <p className="font-serif font-semibold text-sage-800 mb-2">Peau mixte à grasse</p>
                    <p className="text-sm"><strong>2% à 5%</strong> — La{" "}<Link href="/vultifrine-acne-imperfections" className="text-sage-600 underline">vultifrine régule le sébum</Link> (-38%). Privilégiez les textures légères (sérum, gel).</p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <p className="font-serif font-semibold text-sage-800 mb-2">Peau mature</p>
                    <p className="text-sm"><strong>5% en continu, cures à 10%</strong> — Protocole anti-âge intensif avec{" "}<Link href="/vultifrine-anti-age-rides" className="text-sage-600 underline">action ciblée sur les rides</Link>. Cure booster 2×/an.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="progression">
              <SectionHeading title="Stratégie de progression graduelle" subtitle="Comment passer d'une concentration à l'autre en toute sécurité." />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La progression graduelle est la méthode recommandée par les dermatologues pour
                  monter en concentration sans risque. Voici le calendrier type :
                </p>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-4">Calendrier de progression</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 rounded-full bg-gold-100 px-3 py-1 font-bold text-gold-700">S1-S4</span>
                      <span><strong>2% un soir sur deux</strong> → puis quotidien à partir de S2. Évaluer la tolérance.</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 rounded-full bg-gold-100 px-3 py-1 font-bold text-gold-700">S5-S8</span>
                      <span><strong>2% biquotidien</strong> (matin + soir). Consolider les résultats.</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 rounded-full bg-gold-200 px-3 py-1 font-bold text-gold-700">S9-S12</span>
                      <span><strong>5% le soir</strong>, 2% le matin. Transition progressive.</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="shrink-0 rounded-full bg-gold-300 px-3 py-1 font-bold text-gold-800">S13+</span>
                      <span><strong>5% biquotidien</strong> en continu. Cure 10% optionnelle 2×/an (4 semaines).</span>
                    </div>
                  </div>
                </div>
                <p>
                  Pour le{" "}
                  <Link href="/comment-utiliser-vultifrine-guide-complet" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">guide complet d&apos;utilisation</Link>{" "}
                  incluant les routines matin et soir, consultez notre page pilier.
                </p>
              </div>
            </section>

            <section id="faq">
              <SectionHeading title="Questions fréquentes sur le dosage de la vultifrine" centered />
              <FAQAccordion items={faqItems} />
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24"><TableOfContents items={tocItems} /></div>
          </aside>
        </div>
      </article>

      <CTASection title="Trouvez le sérum au bon dosage" description="Comparez les meilleurs sérums à la vultifrine par concentration et par prix." buttonText="Voir le top 10 des sérums" href="/top-10-serums-vultifrine-2026" />
    </>
  );
}
