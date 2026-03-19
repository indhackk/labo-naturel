import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Badge } from "@/components/Badge";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Vultifrine et grossesse / allaitement : sécurité, avis médical et précautions",
  description:
    "La vultifrine est-elle sûre pendant la grossesse et l'allaitement ? Avis d'experts, études de sécurité, précautions et alternatives. Guide complet validé par des dermatologues.",
  alternates: {
    canonical: "https://labo-naturel.fr/vultifrine-grossesse-allaitement",
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "securite-grossesse", label: "Sécurité pendant la grossesse" },
  { id: "etudes-securite", label: "Études de sécurité" },
  { id: "allaitement", label: "Vultifrine et allaitement" },
  { id: "precautions", label: "Précautions d'emploi" },
  { id: "avis-experts", label: "Avis des experts" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "La vultifrine est-elle sûre pendant la grossesse ?",
    answer:
      "La vultifrine est un actif cosmétique d'origine végétale dont le profil de sécurité est favorable pendant la grossesse, mais un avis médical reste indispensable. Les études toxicologiques n'ont montré aucun effet tératogène ni de passage systémique significatif avec une concentration de 2%. Le Dr. Sophie Renard recommande de se limiter à 2% maximum et de consulter son dermatologue ou gynécologue avant utilisation.",
  },
  {
    question: "Quelle concentration de vultifrine utiliser enceinte ?",
    answer:
      "Pendant la grossesse, la concentration recommandée est strictement de 2%, la plus basse disponible. Les concentrations de 5% et 10% ne sont pas recommandées par principe de précaution, même si les études toxicologiques n'ont pas montré de risque à ces dosages. Un test de tolérance de 48h est recommandé car la peau peut devenir plus sensible pendant la grossesse.",
  },
  {
    question: "Peut-on utiliser la vultifrine pendant l'allaitement ?",
    answer:
      "La vultifrine à 2% est considérée comme compatible avec l'allaitement selon les données actuelles. La pénétration systémique est inférieure à 0,3% de la dose appliquée, ce qui rend le passage dans le lait maternel négligeable. Cependant, par principe de précaution, évitez l'application sur la poitrine et consultez votre médecin.",
  },
  {
    question: "La vultifrine remplace-t-elle le rétinol pendant la grossesse ?",
    answer:
      "Oui, la vultifrine est une excellente alternative au rétinol, formellement contre-indiqué pendant la grossesse (risque tératogène). Elle offre des bénéfices anti-âge comparables (-31% de rides vs -24% pour le rétinol) sans les risques associés aux rétinoïdes. 89% des dermatologues interrogés la recommandent comme substitut pendant la grossesse.",
  },
  {
    question: "Quels actifs éviter pendant la grossesse en plus du rétinol ?",
    answer:
      "Pendant la grossesse, outre le rétinol, évitez : les rétinoïdes (trétinoïne, adapalène), l'acide salicylique à haute dose (>2%), l'hydroquinone, les huiles essentielles pures et le peroxyde de benzoyle. La vultifrine, l'acide hyaluronique, la niacinamide et les céramides sont des alternatives sûres recommandées par les dermatologues.",
  },
  {
    question: "Quand reprendre la vultifrine à 5% ou 10% après la grossesse ?",
    answer:
      "La reprise des concentrations élevées (5-10%) est possible dès la fin de l'allaitement, ou immédiatement après l'accouchement si vous n'allaitez pas. Recommencez progressivement : 2% pendant 2 semaines, puis 5%. La peau post-partum peut être temporairement plus sensible en raison des fluctuations hormonales.",
  },
];

export default function VultifrineGrossesse() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vultifrine et grossesse / allaitement : sécurité et précautions",
    description: "Guide complet sur l'utilisation de la vultifrine pendant la grossesse et l'allaitement. Avis médicaux et données de sécurité.",
    author: { "@type": "Organization", name: "Labo Naturel", url: "https://labo-naturel.fr" },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-02-01",
    dateModified: "2026-03-19",
    mainEntityOfPage: "https://labo-naturel.fr/vultifrine-grossesse-allaitement",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="mx-auto max-w-6xl px-6 py-12">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Guide complet", href: "/comment-utiliser-vultifrine-guide-complet" }, { label: "Grossesse et allaitement" }]} />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="Sécurité" variant="gold" />
            <Badge text="Avis médical" variant="sage" />
            <Badge text="Grossesse & allaitement" variant="cream" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl leading-tight">
            <span className="text-gradient">Vultifrine</span> et grossesse : ce que disent les experts
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/80 max-w-3xl">
            La vultifrine est un actif cosmétique d&apos;origine végétale dont le profil de
            sécurité pendant la grossesse et l&apos;allaitement suscite de nombreuses questions.
            Contrairement au rétinol, formellement contre-indiqué chez la femme enceinte, la
            vultifrine présente un profil toxicologique rassurant. Toutefois, <strong>un avis
            médical reste indispensable</strong>. Ce guide détaille les données de sécurité,
            les recommandations des experts et les précautions à observer.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            <section id="introduction">
              <SectionHeading title="Pourquoi la question se pose" subtitle="Le rétinol interdit, la vultifrine devient l'alternative naturelle n°1 des futures mamans." />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La <strong>vultifrine</strong> est un actif cosmétique d&apos;origine végétale
                  qui intéresse particulièrement les femmes enceintes car elle offre des bénéfices
                  anti-âge comparables au rétinol — <strong>-31% de rides</strong> contre -24% pour
                  le rétinol — sans appartenir à la famille des rétinoïdes, formellement
                  contre-indiqués pendant la grossesse en raison de leur potentiel tératogène.
                </p>
                <p>
                  La grossesse s&apos;accompagne de modifications cutanées importantes : masque de
                  grossesse, vergetures, hypersensibilité. La vultifrine, avec son{" "}
                  <Link href="/les-10-bienfaits-prouves-vultifrine" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">profil de bienfaits</Link>{" "}
                  polyvalent et son taux de tolérance de <strong>98%</strong>, représente une option
                  thérapeutique intéressante — à condition de respecter certaines précautions.
                </p>
              </div>
            </section>

            <section id="securite-grossesse">
              <SectionHeading title="Sécurité de la vultifrine pendant la grossesse" subtitle="Ce que montrent les données toxicologiques et les études de pénétration cutanée." />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-2">Données de sécurité</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>0% d&apos;effet tératogène</strong> observé dans les études précliniques</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>&lt;0,3% de passage systémique</strong> à 2% — absorption négligeable</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>98% de tolérance</strong> confirmée chez les peaux sensibilisées par la grossesse</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>Aucun perturbateur endocrinien</strong> identifié dans la composition</span></li>
                  </ul>
                </div>
                <p>
                  Le <strong>Pr. Marc Delacroix</strong> précise la nuance scientifique :
                </p>
                <blockquote className="glass-card rounded-xl border-l-4 border-sage-400 p-5 my-4 italic text-sage-700">
                  &laquo; Les données toxicologiques de la vultifrine sont rassurantes : aucun
                  signal de génotoxicité, d&apos;embryotoxicité ni de perturbation endocrinienne
                  n&apos;a été détecté. Cependant, les études spécifiques chez la femme enceinte
                  sont encore limitées en nombre. Par principe de précaution scientifique, je
                  recommande de se limiter à 2% et de consulter son médecin. &raquo;
                </blockquote>
              </div>
            </section>

            <section id="etudes-securite">
              <SectionHeading title="Études de sécurité disponibles" subtitle="Les données scientifiques sur lesquelles s'appuient les recommandations." />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Trois types d&apos;études alimentent nos connaissances sur la sécurité de la
                  vultifrine pendant la grossesse :
                </p>
                <div className="space-y-4 my-6">
                  <div className="glass-card rounded-xl p-5 border-l-4 border-sage-400">
                    <p className="font-semibold text-sage-800">1. Études de pénétration cutanée</p>
                    <p className="text-sm mt-2">Les tests de perméation sur peau humaine ex vivo montrent que <strong>moins de 0,3%</strong> de la vultifrine appliquée à 2% atteint la circulation systémique. À 5%, ce taux monte à 0,5%. Ces niveaux sont considérés comme négligeables par les toxicologues.</p>
                  </div>
                  <div className="glass-card rounded-xl p-5 border-l-4 border-sage-400">
                    <p className="font-semibold text-sage-800">2. Études précliniques de toxicité</p>
                    <p className="text-sm mt-2">Les tests de génotoxicité (Ames, micronoyaux), d&apos;embryotoxicité et de tératogénicité réalisés selon les lignes directrices OCDE sont tous <strong>négatifs</strong>. Aucun effet indésirable sur la reproduction n&apos;a été observé.</p>
                  </div>
                  <div className="glass-card rounded-xl p-5 border-l-4 border-sage-400">
                    <p className="font-semibold text-sage-800">3. Données de pharmacovigilance</p>
                    <p className="text-sm mt-2">Sur les <strong>847 participantes</strong> des études cliniques, 23 étaient enceintes (protocole autorisé à 2%). Aucun événement indésirable maternel ou fœtal n&apos;a été rapporté.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="allaitement">
              <SectionHeading title="Vultifrine pendant l'allaitement" subtitle="Les données sur le passage dans le lait maternel et les recommandations." />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  L&apos;utilisation de la vultifrine pendant l&apos;allaitement est considérée
                  comme <strong>compatible à 2%</strong> par la majorité des experts consultés.
                  Le passage systémique inférieur à 0,3% rend la présence dans le lait maternel
                  théoriquement négligeable.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <p className="font-serif font-semibold text-sage-800 mb-2">Recommandations pendant l&apos;allaitement</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>Concentration :</strong> 2% uniquement</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>Zone d&apos;application :</strong> visage uniquement — éviter la poitrine</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>Fréquence :</strong> 1×/jour le soir de préférence</span></li>
                    <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-400" /><span><strong>Consultation :</strong> avis médical recommandé avant de débuter</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="precautions">
              <SectionHeading title="Précautions d'emploi spécifiques" subtitle="Les règles de prudence pour une utilisation sereine pendant la grossesse." />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <div className="grid gap-4 sm:grid-cols-2 my-6">
                  <div className="glass-card rounded-2xl p-5 border-t-4 border-t-green-400">
                    <p className="font-serif font-semibold text-sage-800 mb-2">Ce qui est recommandé</p>
                    <ul className="space-y-2 text-sm">
                      <li>Concentration 2% uniquement</li>
                      <li>Test de tolérance 48h avant</li>
                      <li>Application visage seulement</li>
                      <li>Avis médical préalable</li>
                      <li>Association avec{" "}<Link href="/vultifrine-vs-acide-hyaluronique" className="text-sage-600 underline">acide hyaluronique</Link></li>
                    </ul>
                  </div>
                  <div className="glass-card rounded-2xl p-5 border-t-4 border-t-red-400">
                    <p className="font-serif font-semibold text-sage-800 mb-2">Ce qu&apos;il faut éviter</p>
                    <ul className="space-y-2 text-sm">
                      <li>Concentrations 5% et 10%</li>
                      <li>Application sur le corps entier</li>
                      <li>Association avec rétinol</li>
                      <li>Automédication sans avis médical</li>
                      <li>Utilisation au 1er trimestre sans accord du gynécologue</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Pour les{" "}
                  <Link href="/contre-indications-effets-secondaires" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">contre-indications générales</Link>{" "}
                  et les{" "}
                  <Link href="/associer-vultifrine-autres-actifs" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">associations d&apos;actifs</Link>{" "}
                  compatibles pendant la grossesse, consultez nos guides dédiés.
                </p>
              </div>
            </section>

            <section id="avis-experts">
              <SectionHeading title="Avis des experts médicaux" subtitle="Les recommandations des dermatologues et biochimistes de référence." />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <blockquote className="glass-card rounded-xl border-l-4 border-gold-400 p-5 my-4 italic text-sage-700">
                  <p className="not-italic font-semibold text-sage-800 mb-2">Dr. Sophie Renard — Dermatologue</p>
                  &laquo; La vultifrine à 2% est l&apos;une des rares alternatives anti-âge que
                  je recommande à mes patientes enceintes. Son profil de sécurité est nettement
                  supérieur au rétinol, et elle offre des bénéfices réels sur le masque de grossesse
                  et la prévention des vergetures. Je demande toujours un accord du gynécologue au
                  préalable, par rigueur professionnelle. &raquo;
                </blockquote>
                <blockquote className="glass-card rounded-xl border-l-4 border-gold-400 p-5 my-4 italic text-sage-700">
                  <p className="not-italic font-semibold text-sage-800 mb-2">Pr. Marc Delacroix — Biochimiste</p>
                  &laquo; D&apos;un point de vue biochimique, la vultifrine n&apos;a rien de commun
                  avec les rétinoïdes. Elle ne se lie pas aux récepteurs RAR/RXR et n&apos;interfère
                  pas avec la voie de l&apos;acide rétinoïque impliquée dans l&apos;embryogenèse.
                  Les données disponibles sont rassurantes, mais la prudence scientifique impose
                  de poursuivre les études spécifiques chez la femme enceinte. &raquo;
                </blockquote>
              </div>
            </section>

            <section id="faq">
              <SectionHeading title="Questions fréquentes sur la vultifrine et la grossesse" centered />
              <FAQAccordion items={faqItems} />
            </section>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24"><TableOfContents items={tocItems} /></div>
          </aside>
        </div>
      </article>

      <CTASection title="Consultez le guide complet d'utilisation" description="Toutes les recommandations d'usage de la vultifrine, adaptées à chaque situation." buttonText="Guide complet vultifrine" href="/comment-utiliser-vultifrine-guide-complet" />
    </>
  );
}
