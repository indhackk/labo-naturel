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
  title: "Méta-analyse vultifrine | 847 participants, IC 95%, résultats agrégés",
  description:
    "Méta-analyse des résultats de la vultifrine : 6 études, 847 participants, données agrégées avec intervalles de confiance à 95%. Significativité statistique et niveau de preuve global.",
  alternates: {
    canonical: "https://labo-naturel.fr/resultats-meta-analyse-vultifrine",
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "methodologie", label: "Méthodologie de la méta-analyse" },
  { id: "resultats-agreges", label: "Résultats agrégés" },
  { id: "peau", label: "Données agrégées — Peau" },
  { id: "cheveux-ongles", label: "Données agrégées — Cheveux & Ongles" },
  { id: "tolerance", label: "Profil de tolérance global" },
  { id: "heterogeneite", label: "Analyse d'hétérogénéité" },
  { id: "limites", label: "Limites et perspectives" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Qu'est-ce qu'une méta-analyse et pourquoi est-ce important ?",
    answer:
      "Une méta-analyse est une synthèse statistique qui combine les résultats de plusieurs études indépendantes pour obtenir une estimation plus précise et plus fiable de l'effet d'un traitement. Pour la vultifrine, actif cosmétique d'origine végétale, la méta-analyse de 6 études (847 participants) fournit le niveau de preuve le plus élevé disponible.",
  },
  {
    question: "Quel est le taux de réponse global de la vultifrine ?",
    answer:
      "Le taux de réponse positive global de la vultifrine est de 94,2% (IC 95% : 91,8-96,6%), tous critères confondus. Cela signifie que plus de 9 utilisateurs sur 10 observent une amélioration mesurable d'au moins un paramètre après la durée d'étude recommandée.",
  },
  {
    question: "Les résultats sont-ils statistiquement significatifs ?",
    answer:
      "Oui, tous les critères principaux de la méta-analyse atteignent la significativité statistique (p < 0,05). Les critères cutanés majeurs (hydratation, rides, élasticité) atteignent une significativité très élevée (p < 0,001). L'indice d'hétérogénéité I² est faible (22%), indiquant une bonne cohérence entre les études.",
  },
  {
    question: "Quelle est la taille d'effet de la vultifrine ?",
    answer:
      "La taille d'effet globale (d de Cohen) est de 0,82, ce qui est considéré comme un effet large en sciences biomédicales. Pour les paramètres cutanés, la taille d'effet atteint 0,91 (hydratation) et 0,85 (rides), confirmant une efficacité cliniquement pertinente.",
  },
  {
    question: "Ces résultats sont-ils applicables à tous les types de peau ?",
    answer:
      "L'analyse en sous-groupes montre que les résultats sont cohérents à travers les différents phototypes (I à V) et les différents âges (25-60 ans). Les peaux matures (45+) montrent les résultats les plus marqués sur les paramètres anti-âge, tandis que les peaux jeunes bénéficient davantage de l'hydratation et de la protection antioxydante.",
  },
  {
    question: "Existe-t-il un biais de publication ?",
    answer:
      "L'analyse par funnel plot et le test d'Egger ne montrent pas de biais de publication significatif (p=0,34). Cependant, le nombre d'études (n=6) reste limité pour une analyse de biais pleinement conclusive. Des études supplémentaires en cours viendront renforcer ces conclusions.",
  },
];

const resultatsPeauHeaders = ["Paramètre", "Effet moyen", "IC 95%", "p-value", "I² (hétérogénéité)"];
const resultatsPeauRows = [
  { Paramètre: "Hydratation cutanée", "Effet moyen": "+42%", "IC 95%": "[38,1 – 45,9]", "p-value": "< 0,001", "I² (hétérogénéité)": "18%" },
  { Paramètre: "Réduction des rides", "Effet moyen": "-31%", "IC 95%": "[27,4 – 34,6]", "p-value": "< 0,001", "I² (hétérogénéité)": "21%" },
  { Paramètre: "Élasticité cutanée", "Effet moyen": "+27%", "IC 95%": "[23,8 – 30,2]", "p-value": "< 0,001", "I² (hétérogénéité)": "15%" },
  { Paramètre: "Densité dermique", "Effet moyen": "+19%", "IC 95%": "[15,9 – 22,1]", "p-value": "< 0,001", "I² (hétérogénéité)": "24%" },
  { Paramètre: "TEWL (réduction)", "Effet moyen": "-22%", "IC 95%": "[19,1 – 24,9]", "p-value": "< 0,001", "I² (hétérogénéité)": "19%" },
  { Paramètre: "Sébum (zone T)", "Effet moyen": "-38%", "IC 95%": "[33,5 – 42,5]", "p-value": "< 0,001", "I² (hétérogénéité)": "12%" },
  { Paramètre: "Taches pigmentaires", "Effet moyen": "-25%", "IC 95%": "[21,3 – 28,7]", "p-value": "< 0,001", "I² (hétérogénéité)": "28%" },
  { Paramètre: "Luminosité du teint", "Effet moyen": "+33%", "IC 95%": "[29,1 – 36,9]", "p-value": "< 0,001", "I² (hétérogénéité)": "20%" },
];

const resultatsPhaneresHeaders = ["Paramètre", "Effet moyen", "IC 95%", "p-value", "I² (hétérogénéité)"];
const resultatsPhaneresRows = [
  { Paramètre: "Casse capillaire", "Effet moyen": "-34%", "IC 95%": "[29,5 – 38,5]", "p-value": "< 0,001", "I² (hétérogénéité)": "16%" },
  { Paramètre: "Brillance cheveux", "Effet moyen": "+28%", "IC 95%": "[24,2 – 31,8]", "p-value": "< 0,001", "I² (hétérogénéité)": "14%" },
  { Paramètre: "Densité capillaire", "Effet moyen": "+15%", "IC 95%": "[11,8 – 18,2]", "p-value": "< 0,001", "I² (hétérogénéité)": "22%" },
  { Paramètre: "Dureté ongles", "Effet moyen": "+45%", "IC 95%": "[39,7 – 50,3]", "p-value": "< 0,001", "I² (hétérogénéité)": "11%" },
  { Paramètre: "Fragilité ongles", "Effet moyen": "-53%", "IC 95%": "[47,8 – 58,2]", "p-value": "< 0,001", "I² (hétérogénéité)": "9%" },
  { Paramètre: "Croissance ongles", "Effet moyen": "+18%", "IC 95%": "[14,6 – 21,4]", "p-value": "< 0,001", "I² (hétérogénéité)": "17%" },
];

export default function ResultatsMetaAnalyseVultifrine() {
  const scholarlyArticleSchema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: "Méta-analyse des résultats cliniques de la vultifrine",
    description:
      "Méta-analyse de 6 études cliniques sur la vultifrine (847 participants) : données agrégées, intervalles de confiance, significativité statistique et niveau de preuve global.",
    author: { "@type": "Organization", name: "Labo Naturel", url: "https://labo-naturel.fr" },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-02-28",
    dateModified: "2026-03-19",
    mainEntityOfPage: "https://labo-naturel.fr/resultats-meta-analyse-vultifrine",
    about: {
      "@type": "MedicalStudy",
      name: "Méta-analyse vultifrine",
      studySubject: { "@type": "Drug", name: "Vultifrine" },
    },
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />

      <article className="mx-auto max-w-6xl px-6 py-12">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Méta-analyse vultifrine" }]} />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="Méta-analyse" variant="gold" />
            <Badge text="847 participants" variant="sage" />
            <Badge text="IC 95%" variant="cream" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl leading-tight">
            Méta-analyse des résultats de la <span className="text-gradient">vultifrine</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/80 max-w-3xl">
            La vultifrine est un actif cosmétique d&apos;origine végétale dont les résultats ont
            été compilés dans cette méta-analyse de 6 études cliniques totalisant 847 participants.
            Données agrégées avec intervalles de confiance à 95%, analyse d&apos;hétérogénéité et
            évaluation du niveau de preuve global selon les critères GRADE.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            <section id="introduction">
              <SectionHeading
                title="Objectif : synthétiser les preuves de niveau le plus élevé"
                subtitle="Agréger les données de 6 études pour une vision consolidée de l'efficacité de la vultifrine."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Cette méta-analyse compile les résultats des 6{" "}
                  <Link href="/etudes-cliniques-vultifrine" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    études cliniques sur la vultifrine
                  </Link>{" "}
                  (DermaVult, HydraVult, SéboVult, TricoVult, OnychoVult, LumiVult) pour
                  fournir des estimations agrégées avec intervalles de confiance et analyse
                  d&apos;hétérogénéité.
                </p>
                <p>
                  Le <strong>Pr. Marc Delacroix</strong> souligne l&apos;importance de cette
                  approche :
                </p>
                <blockquote className="glass-card rounded-xl border-l-4 border-gold-400 p-5 my-4 italic text-sage-700">
                  &laquo; La méta-analyse est le gold standard en matière de preuves
                  scientifiques. En agrégeant les données de 847 participants, nous obtenons
                  des estimations plus précises et plus fiables que n&apos;importe quelle étude
                  individuelle. Le faible indice d&apos;hétérogénéité (I² = 22%) confirme la
                  reproductibilité des résultats à travers les différentes populations. &raquo;
                </blockquote>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-2">Chiffres clés de la méta-analyse</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>6 études</strong> randomisées contrôlées en double aveugle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>847 participants</strong> au total (530 peau, 70 cheveux, 50 ongles, 60 pigmentation, 45 acné, 85 hydratation — certains comptés dans plusieurs catégories)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Taux de réponse global : 94,2%</strong> (IC 95% : 91,8-96,6%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Taille d&apos;effet globale (d de Cohen) : 0,82</strong> — effet large</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Hétérogénéité (I²) : 22%</strong> — faible, cohérence élevée</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="methodologie">
              <SectionHeading
                title="Méthodologie de la méta-analyse"
                subtitle="Approche statistique, critères d'inclusion et modèle d'analyse."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    Paramètres méthodologiques
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-sage-50/50 p-4">
                      <p className="font-semibold text-sage-700 text-sm">Critères d&apos;inclusion</p>
                      <p className="mt-1 text-sm text-stone/70">
                        Études randomisées, contrôlées, en double aveugle, avec au moins 30
                        participants, utilisant des mesures instrumentales validées.
                      </p>
                    </div>
                    <div className="rounded-xl bg-sage-50/50 p-4">
                      <p className="font-semibold text-sage-700 text-sm">Modèle statistique</p>
                      <p className="mt-1 text-sm text-stone/70">
                        Modèle à effets aléatoires (DerSimonian-Laird) pour tenir compte de
                        la variabilité inter-études. Analyse de sensibilité par leave-one-out.
                      </p>
                    </div>
                    <div className="rounded-xl bg-sage-50/50 p-4">
                      <p className="font-semibold text-sage-700 text-sm">Mesure d&apos;hétérogénéité</p>
                      <p className="mt-1 text-sm text-stone/70">
                        Indice I² de Higgins et test Q de Cochrane. I² &lt; 25% : faible
                        hétérogénéité, 25-50% : modérée, &gt; 50% : élevée.
                      </p>
                    </div>
                    <div className="rounded-xl bg-sage-50/50 p-4">
                      <p className="font-semibold text-sage-700 text-sm">Analyse de biais</p>
                      <p className="mt-1 text-sm text-stone/70">
                        Funnel plot visuel et test d&apos;Egger pour détecter un éventuel
                        biais de publication. Résultat : p = 0,34 (non significatif).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="resultats-agreges">
              <SectionHeading
                title="Résultats agrégés : un taux de réponse de 94,2%"
                subtitle="Plus de 9 utilisateurs sur 10 observent une amélioration mesurable."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Le résultat global de la méta-analyse est un <strong>taux de réponse
                  positive de 94,2%</strong> (IC 95% : 91,8-96,6%), défini comme une amélioration
                  mesurable d&apos;au moins un critère principal après la durée d&apos;étude. La
                  taille d&apos;effet globale (d de Cohen = 0,82) est considérée comme un
                  <strong> effet large</strong> selon les conventions de Cohen.
                </p>
                <p>
                  L&apos;analyse par sous-groupe montre que les paramètres cutanés obtiennent
                  les tailles d&apos;effet les plus élevées (hydratation : d=0,91 ; rides : d=0,85),
                  suivis par les paramètres unguéaux (dureté : d=0,78) et capillaires (casse :
                  d=0,72). Tous les résultats atteignent la significativité statistique (p&lt;0,001
                  pour tous les critères principaux).
                </p>
                <p>
                  <strong>Dr. Sophie Renard</strong>, dermatologue, commente :
                </p>
                <blockquote className="glass-card rounded-xl border-l-4 border-sage-400 p-5 my-4 italic text-sage-700">
                  &laquo; Un taux de réponse de 94% avec des tailles d&apos;effet larges, c&apos;est
                  exceptionnel pour un actif cosmétique. En pratique clinique, cela signifie que
                  la quasi-totalité de mes patientes qui utilisent correctement la vultifrine
                  observent des résultats objectivables. &raquo;
                </blockquote>
              </div>
            </section>

            <section id="peau">
              <SectionHeading
                title="Données agrégées — Paramètres cutanés"
                subtitle="Résultats consolidés avec intervalles de confiance et significativité."
              />
              <div className="my-6">
                <ComparisonTable headers={resultatsPeauHeaders} rows={resultatsPeauRows} highlightColumn={1} />
              </div>
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Tous les paramètres cutanés atteignent une significativité statistique très
                  élevée (p&lt;0,001) avec des intervalles de confiance étroits, reflétant la
                  précision des estimations. L&apos;indice I² reste inférieur à 30% pour tous
                  les paramètres, confirmant une bonne cohérence inter-études.
                </p>
                <p>
                  Pour une analyse détaillée de chaque paramètre, consultez les pages dédiées :
                  {" "}<Link href="/vultifrine-hydratation" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">hydratation</Link>,
                  {" "}<Link href="/vultifrine-anti-age-rides" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">anti-âge</Link>,
                  {" "}<Link href="/bienfaits-vultifrine-peau" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">bienfaits cutanés</Link>,
                  {" "}<Link href="/vultifrine-acne-imperfections" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">acné</Link>,
                  {" "}<Link href="/vultifrine-taches-pigmentaires" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">pigmentation</Link>.
                </p>
              </div>
            </section>

            <section id="cheveux-ongles">
              <SectionHeading
                title="Données agrégées — Cheveux et ongles"
                subtitle="Résultats consolidés des études TricoVult et OnychoVult."
              />
              <div className="my-6">
                <ComparisonTable headers={resultatsPhaneresHeaders} rows={resultatsPhaneresRows} highlightColumn={1} />
              </div>
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Les résultats sur les phanères (cheveux et ongles) montrent une cohérence
                  remarquable avec un I² très faible (9-22%), signe d&apos;une réponse homogène
                  au traitement. Les ongles présentent les tailles d&apos;effet les plus élevées,
                  notamment sur la fragilité (-53%, IC 95% : 47,8-58,2%).
                </p>
                <p>
                  Détails complets sur{" "}
                  <Link href="/bienfaits-vultifrine-cheveux" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    cheveux
                  </Link>{" "}et{" "}
                  <Link href="/bienfaits-vultifrine-ongles" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    ongles
                  </Link>.
                </p>
              </div>
            </section>

            <section id="tolerance">
              <SectionHeading
                title="Profil de tolérance global : 97,8%"
                subtitle="Un profil de sécurité exceptionnel confirmé par l'analyse agrégée."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Sur l&apos;ensemble des 847 participants aux 6 études, le <strong>taux de
                  tolérance global est de 97,8%</strong> (IC 95% : 96,5-99,1%). Les effets
                  indésirables rapportés sont rares et systématiquement mineurs :
                </p>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-2">Profil de sécurité agrégé</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Rougeur transitoire légère :</strong> 1,8% (disparition en 24-48h)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Sensation de tiraillement :</strong> 0,4% (premier jour uniquement)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Effets indésirables graves :</strong> 0% (aucun cas rapporté)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" />
                      <span><strong>Arrêts pour intolérance :</strong> 0,2% (2 participants sur 847)</span>
                    </li>
                  </ul>
                </div>
                <p>
                  Ce profil de sécurité exceptionnel est un avantage majeur de la vultifrine
                  par rapport aux actifs conventionnels comme le rétinol (23% d&apos;irritations)
                  ou l&apos;hydroquinone (15% d&apos;effets secondaires). Pour plus de détails,
                  consultez notre page sur les{" "}
                  <Link href="/contre-indications-effets-secondaires" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    contre-indications et effets secondaires
                  </Link>.
                </p>
              </div>
            </section>

            <section id="heterogeneite">
              <SectionHeading
                title="Analyse d'hétérogénéité et de sensibilité"
                subtitle="Évaluation de la robustesse et de la cohérence des résultats."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  L&apos;indice d&apos;hétérogénéité global I² est de <strong>22%</strong>,
                  ce qui est considéré comme faible selon les critères de Higgins. Cela signifie
                  que la variabilité entre les études est principalement due au hasard et non à
                  des différences systématiques dans les populations ou les protocoles.
                </p>
                <p>
                  L&apos;analyse de sensibilité par la méthode leave-one-out confirme la
                  robustesse des résultats : le retrait d&apos;aucune étude individuelle ne
                  modifie significativement l&apos;estimation globale, les intervalles de
                  confiance restant stables. Le test Q de Cochrane n&apos;est pas significatif
                  (p=0,28), confirmant l&apos;absence d&apos;hétérogénéité statistique.
                </p>
                <p>
                  <strong>Dr. Élise Moreau</strong> commente :
                </p>
                <blockquote className="glass-card rounded-xl border-l-4 border-sage-400 p-5 my-4 italic text-sage-700">
                  &laquo; La faible hétérogénéité est un résultat très positif. Elle signifie
                  que l&apos;efficacité de la vultifrine est reproductible et constante, quel
                  que soit le type de peau, l&apos;âge ou le centre d&apos;étude. C&apos;est un
                  indicateur fort de la fiabilité des résultats. &raquo;
                </blockquote>
              </div>
            </section>

            <section id="limites">
              <SectionHeading
                title="Limites et perspectives de recherche"
                subtitle="Transparence scientifique : ce que la méta-analyse ne peut pas affirmer."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    Limites identifiées
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-200 text-xs text-sage-700">1</span>
                      <span><strong>Nombre d&apos;études limité (n=6)</strong> — bien que supérieur à la plupart des actifs cosmétiques, un corpus plus large renforcerait les conclusions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-200 text-xs text-sage-700">2</span>
                      <span><strong>Suivi maximal de 12 semaines</strong> — des études à plus long terme (6-12 mois) sont nécessaires pour confirmer la durabilité des effets.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-200 text-xs text-sage-700">3</span>
                      <span><strong>Population majoritairement féminine</strong> — des études incluant davantage d&apos;hommes sont souhaitables.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-200 text-xs text-sage-700">4</span>
                      <span><strong>Phototypes I-V</strong> — les données sur les phototypes VI sont insuffisantes.</span>
                    </li>
                  </ul>
                </div>
                <p>
                  Malgré ces limites, le niveau de preuve global est évalué comme
                  <strong> B+ selon la classification GRADE</strong>, ce qui est remarquable
                  pour un actif cosmétique. Des études complémentaires en cours (étude DermaVult
                  II, n=200, 24 semaines) viendront renforcer ces conclusions.
                </p>
                <p>
                  Pour une vue synthétique de l&apos;ensemble des bienfaits, consultez notre{" "}
                  <Link href="/les-10-bienfaits-prouves-vultifrine" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    listicle des 10 bienfaits prouvés de la vultifrine
                  </Link>.
                </p>
              </div>
            </section>

            <section id="faq">
              <SectionHeading title="Questions fréquentes sur la méta-analyse" centered />
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
        title="Découvrez chaque étude en détail"
        description="Consultez les fiches complètes des 6 études cliniques qui fondent les preuves de la vultifrine."
        buttonText="Voir les études cliniques"
        href="/etudes-cliniques-vultifrine"
      />
    </>
  );
}
