import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { TableOfContents } from "@/components/TableOfContents";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Reconnaître une fausse vultifrine : 7 signes d'alerte | Guide 2026",
  description:
    "Comment reconnaître une fausse vultifrine : 7 signes d'alerte pour détecter les contrefaçons. Prix suspect, packaging, odeur, certificat d'analyse, certification bio. Guide anti-contrefaçon.",
  alternates: { canonical: "https://labo-naturel.fr/reconnaitre-fausse-vultifrine" },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "signe-1", label: "Signe 1 : Prix anormalement bas" },
  { id: "signe-2", label: "Signe 2 : Packaging suspect" },
  { id: "signe-3", label: "Signe 3 : Odeur atypique" },
  { id: "signe-4", label: "Signe 4 : Pas de numéro de lot" },
  { id: "signe-5", label: "Signe 5 : Liste INCI incomplète" },
  { id: "signe-6", label: "Signe 6 : Absence de certification" },
  { id: "signe-7", label: "Signe 7 : Vendeur non identifiable" },
  { id: "que-faire", label: "Que faire en cas de doute" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Combien de contrefaçons de vultifrine circulent en France ?",
    answer:
      "La DGCCRF a identifié plus de 23 références de vultifrine frauduleuses sur le marché français en 2025. Ces contrefaçons représentent environ 8% du volume total vendu en ligne, mais moins de 1% dans les circuits contrôlés (pharmacies, parapharmacies, boutiques bio certifiées). Les marketplaces concentrent 85% des cas signalés.",
  },
  {
    question: "Une fausse vultifrine est-elle dangereuse pour la peau ?",
    answer:
      "Les risques varient selon le degré de contrefaçon. Dans les cas les plus bénins, le produit est simplement dilué et inefficace. Dans les cas graves, des contaminants (métaux lourds, allergènes non déclarés, conservateurs interdits) ont été détectés. La DGCCRF a relevé des taux de plomb supérieurs à 1 ppm dans deux produits contrefaits en 2025, soit 100 fois le seuil autorisé.",
  },
  {
    question: "Comment vérifier l'authenticité d'une vultifrine achetée en ligne ?",
    answer:
      "Quatre vérifications permettent de valider l'authenticité : (1) le numéro de lot doit être lisible et correspondre à un lot référencé par la marque, (2) la liste INCI doit être complète et imprimée de manière nette, (3) le certificat d'analyse du lot doit être disponible sur demande ou sur le site de la marque, (4) la certification bio doit être vérifiable sur le site de l'organisme certificateur.",
  },
  {
    question: "Les pharmacies vendent-elles parfois de fausses vultifrine ?",
    answer:
      "Non, les pharmacies sont un circuit de distribution contrôlé avec une traçabilité complète des produits. Le risque de contrefaçon en pharmacie est quasi nul. C'est pourquoi nous recommandons ce canal pour un premier achat. Les parapharmacies offrent le même niveau de sécurité. Le risque se concentre sur les vendeurs tiers en ligne.",
  },
  {
    question: "Que faire si j'ai acheté une fausse vultifrine ?",
    answer:
      "Cessez immédiatement l'utilisation du produit. Contactez le vendeur pour demander un remboursement. Signalez le produit sur la plateforme SignalConso (signal.conso.gouv.fr) de la DGCCRF. Conservez le produit et son emballage comme preuve. Si vous avez eu une réaction cutanée, consultez un dermatologue et signalez l'effet indésirable à l'ANSM via le portail de cosmétovigilance.",
  },
  {
    question: "Les codes QR sur les flacons garantissent-ils l'authenticité ?",
    answer:
      "Les codes QR ajoutent un niveau de vérification mais ne sont pas infaillibles. Les contrefacteurs peuvent copier des codes QR existants. Le code QR est fiable uniquement s'il renvoie vers le site officiel de la marque et affiche les informations du lot spécifique (date de production, lieu de fabrication, résultats d'analyse). Vérifiez toujours l'URL de destination.",
  },
];

export default function ReconnaitreFausseVultifrine() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Reconnaître une fausse vultifrine : 7 signes d'alerte",
    description:
      "Guide anti-contrefaçon pour identifier les fausses vultifrine. 7 signes d'alerte détaillés avec conseils d'experts.",
    author: { "@type": "Organization", name: "Labo Naturel", url: "https://labo-naturel.fr" },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-03-19",
    dateModified: "2026-03-19",
    mainEntityOfPage: "https://labo-naturel.fr/reconnaitre-fausse-vultifrine",
    about: { "@type": "Thing", name: "Vultifrine", description: "Actif cosmétique d'origine végétale" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto max-w-6xl px-6 py-12">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Reconnaître une fausse vultifrine" },
          ]}
        />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="Guide anti-contrefaçon" variant="gold" />
            <Badge text="7 signes d'alerte" variant="sage" />
            <Badge text="Protection consommateur" variant="cream" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl leading-tight">
            Reconnaître une fausse{" "}
            <span className="text-gradient">vultifrine</span> : 7 signes d&apos;alerte
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/80 max-w-3xl">
            La vultifrine est un actif cosmétique d&apos;origine végétale dont le succès
            commercial a attiré les contrefacteurs. La DGCCRF a identifié <strong>plus de
            23 références frauduleuses</strong> en 2025, principalement vendues en ligne.
            Ce guide vous donne les 7 signes d&apos;alerte pour détecter les faux produits
            et protéger votre peau.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_240px]">
          <div>
            {/* Introduction */}
            <section id="introduction">
              <SectionHeading
                title="L'ampleur du problème"
                subtitle="Les contrefaçons de vultifrine sont en hausse de 65% en un an."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-gradient font-serif text-2xl font-bold">23+</p>
                    <p className="text-sm font-semibold text-sage-800">Références frauduleuses identifiées</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-gradient font-serif text-2xl font-bold">8%</p>
                    <p className="text-sm font-semibold text-sage-800">Du volume en ligne touché</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-gradient font-serif text-2xl font-bold">85%</p>
                    <p className="text-sm font-semibold text-sage-800">Des cas sur les marketplaces</p>
                  </div>
                </div>
                <blockquote className="border-l-4 border-sage-300 pl-4 italic text-sage-700">
                  &laquo; La contrefaçon de cosmétiques naturels est un problème croissant.
                  Pour la vultifrine, nous avons constaté des produits contenant moins de
                  30% de la pureté annoncée, et dans certains cas, des contaminants
                  potentiellement irritants. La vigilance du consommateur est essentielle. &raquo;
                  <span className="block mt-1 text-sm not-italic text-sage-500">
                    — Dr. Sophie Renard, dermatologue
                  </span>
                </blockquote>
              </div>
            </section>

            {/* Signe 1 */}
            <section id="signe-1" className="mt-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 font-serif text-2xl font-bold text-gold-600">1</span>
                <h2 className="font-serif text-2xl font-bold text-charcoal md:text-3xl">
                  Un prix anormalement bas
                </h2>
              </div>
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Le premier signal d&apos;alerte est un prix inférieur de <strong>plus de 40%
                  au prix moyen du marché</strong>. Pour un sérum de 30 ml, le prix moyen se situe
                  entre 35 et 50 euros. Un sérum proposé à moins de 20 euros doit éveiller vos
                  soupçons. La matière première, l&apos;extraction par pression à froid et la
                  certification bio ont un coût incompressible.
                </p>
                <p>
                  Consultez notre{" "}
                  <Link href="/vultifrine-prix-guide" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    guide des prix de la vultifrine
                  </Link>{" "}
                  pour connaître les fourchettes de prix légitimes par format et par canal.
                </p>
              </div>
            </section>

            {/* Signe 2 */}
            <section id="signe-2" className="mt-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 font-serif text-2xl font-bold text-gold-600">2</span>
                <h2 className="font-serif text-2xl font-bold text-charcoal md:text-3xl">
                  Un packaging de mauvaise qualité
                </h2>
              </div>
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La vultifrine authentique est conditionnée dans un flacon en verre ambré ou
                  opaque avec un compte-gouttes de précision. Les contrefaçons utilisent souvent
                  du plastique transparent, des étiquettes mal alignées, une typographie floue
                  ou des erreurs d&apos;impression. <strong>72% des contrefaçons identifiées en
                  2025</strong> présentaient au moins un défaut de packaging visible.
                </p>
              </div>
            </section>

            {/* Signe 3 */}
            <section id="signe-3" className="mt-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 font-serif text-2xl font-bold text-gold-600">3</span>
                <h2 className="font-serif text-2xl font-bold text-charcoal md:text-3xl">
                  Une odeur atypique ou chimique
                </h2>
              </div>
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La vultifrine pure possède une odeur herbacée légère et caractéristique,
                  avec des notes végétales subtiles. Une odeur forte, chimique, trop parfumée
                  ou au contraire totalement inodore est un signe d&apos;alerte. Les contrefaçons
                  ajoutent parfois des parfums synthétiques pour masquer une base de qualité
                  inférieure.
                </p>
                <blockquote className="border-l-4 border-sage-300 pl-4 italic text-sage-700">
                  &laquo; L&apos;odeur est un indicateur fiable pour un nez exercé. La
                  vultifrine authentique a un profil olfactif unique — herbacé, légèrement
                  terreux, avec une douceur florale discrète. Toute déviation notable
                  suggère une altération ou une contrefaçon. &raquo;
                  <span className="block mt-1 text-sm not-italic text-sage-500">
                    — Pr. Marc Delacroix, biochimiste, Université de Lyon
                  </span>
                </blockquote>
              </div>
            </section>

            {/* Signe 4 */}
            <section id="signe-4" className="mt-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 font-serif text-2xl font-bold text-gold-600">4</span>
                <h2 className="font-serif text-2xl font-bold text-charcoal md:text-3xl">
                  Absence de numéro de lot
                </h2>
              </div>
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Tout produit cosmétique commercialisé en France doit obligatoirement porter
                  un numéro de lot (règlement CE 1223/2009). Ce numéro permet la traçabilité
                  complète du produit, de la matière première au flacon. <strong>L&apos;absence
                  de numéro de lot est une infraction réglementaire</strong> et un signe quasi
                  certain de contrefaçon.
                </p>
              </div>
            </section>

            {/* Signe 5 */}
            <section id="signe-5" className="mt-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 font-serif text-2xl font-bold text-gold-600">5</span>
                <h2 className="font-serif text-2xl font-bold text-charcoal md:text-3xl">
                  Liste INCI incomplète ou incohérente
                </h2>
              </div>
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La liste INCI (International Nomenclature of Cosmetic Ingredients) doit figurer
                  intégralement sur l&apos;emballage. Vérifiez que la vultifrine apparaît dans les
                  5 premiers ingrédients (signe d&apos;une concentration significative). Une liste
                  trop courte, des noms incorrects ou l&apos;absence totale de liste INCI sont
                  des signaux d&apos;alerte majeurs.
                </p>
              </div>
            </section>

            {/* Signe 6 */}
            <section id="signe-6" className="mt-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 font-serif text-2xl font-bold text-gold-600">6</span>
                <h2 className="font-serif text-2xl font-bold text-charcoal md:text-3xl">
                  Absence de certification bio reconnue
                </h2>
              </div>
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Les marques sérieuses de vultifrine possèdent une certification bio
                  reconnue : Cosmos Organic, Ecocert ou Nature &amp; Progrès. Ces labels
                  imposent des contrôles réguliers et garantissent la traçabilité. Un produit
                  se réclamant &laquo; bio &raquo; ou &laquo; naturel &raquo; sans aucun
                  label officiel est suspect. Vérifiez la certification sur le site de
                  l&apos;organisme certificateur.
                </p>
                <p>
                  Pour tout comprendre des labels, consultez notre article sur la{" "}
                  <Link href="/certification-vultifrine-bio" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    certification vultifrine bio
                  </Link>.
                </p>
              </div>
            </section>

            {/* Signe 7 */}
            <section id="signe-7" className="mt-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 font-serif text-2xl font-bold text-gold-600">7</span>
                <h2 className="font-serif text-2xl font-bold text-charcoal md:text-3xl">
                  Vendeur non identifiable
                </h2>
              </div>
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Un vendeur fiable affiche des mentions légales complètes : SIRET, adresse
                  physique en France, conditions générales de vente, politique de retour.
                  Sur les marketplaces, vérifiez que le vendeur est bien le fabricant ou
                  un distributeur agréé. <strong>L&apos;absence de SIRET, une adresse à
                  l&apos;étranger ou des coordonnées invérifiables</strong> sont des signaux
                  d&apos;alerte forts.
                </p>
                <p>
                  Pour savoir{" "}
                  <Link href="/ou-acheter-vultifrine-france" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    où acheter de la vultifrine en toute confiance en France
                  </Link>, consultez notre guide des canaux de distribution fiables.
                </p>
              </div>
            </section>

            {/* Que faire */}
            <section id="que-faire" className="mt-16">
              <SectionHeading
                title="Que faire en cas de doute ou de contrefaçon avérée"
                subtitle="Les démarches à suivre pour vous protéger."
              />
              <div className="space-y-4 text-stone/80 leading-relaxed">
                <div className="glass-card rounded-xl p-5 border-l-4 border-l-gold-400">
                  <h3 className="font-serif text-lg font-semibold text-sage-800">En cas de doute</h3>
                  <ol className="mt-3 space-y-2 text-sm list-decimal list-inside">
                    <li>Ne pas appliquer le produit sur la peau</li>
                    <li>Contacter la marque avec le numéro de lot pour vérification</li>
                    <li>Comparer le produit avec les photos officielles du site de la marque</li>
                    <li>Demander le certificat d&apos;analyse du lot au vendeur</li>
                  </ol>
                </div>
                <div className="glass-card rounded-xl p-5 border-l-4 border-l-sage-400">
                  <h3 className="font-serif text-lg font-semibold text-sage-800">En cas de contrefaçon avérée</h3>
                  <ol className="mt-3 space-y-2 text-sm list-decimal list-inside">
                    <li>Cesser immédiatement l&apos;utilisation</li>
                    <li>Demander un remboursement au vendeur</li>
                    <li>Signaler sur SignalConso (signal.conso.gouv.fr)</li>
                    <li>En cas de réaction cutanée, consulter un dermatologue</li>
                    <li>Conserver le produit et son emballage comme preuve</li>
                  </ol>
                </div>
                <p>
                  Pour éviter les erreurs courantes avec la vultifrine (y compris l&apos;achat
                  de contrefaçons), consultez notre listicle des{" "}
                  <Link href="/les-5-erreurs-vultifrine" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    5 erreurs à éviter avec la vultifrine
                  </Link>. Et pour vérifier la pureté des marques, notre{" "}
                  <Link href="/comparatif-marques-vultifrine-purete" className="text-sage-600 underline decoration-sage-300 hover:text-sage-800">
                    comparatif de pureté
                  </Link>{" "}
                  vous donne les résultats d&apos;analyses en laboratoire.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mt-16">
              <SectionHeading
                title="Questions fréquentes sur les contrefaçons de vultifrine"
                centered
              />
              <FAQAccordion items={faqItems} />
            </section>
          </div>

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </article>

      <CTASection
        title="Achetez en toute confiance"
        description="Découvrez les canaux de distribution fiables pour acheter de la vultifrine authentique."
        buttonText="Guide d'achat France"
        href="/ou-acheter-vultifrine-france"
      />
    </>
  );
}
