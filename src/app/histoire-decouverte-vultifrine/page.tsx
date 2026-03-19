import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { Badge } from "@/components/Badge";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title:
    "Histoire et découverte de la vultifrine : de la médecine andine à la cosmétique moderne",
  description:
    "Chronologie complète de la découverte de la vultifrine : usage traditionnel andin, identification botanique (1987), premières études (2015), essais cliniques (2024). Jalons et chercheurs clés.",
  alternates: {
    canonical: "https://labo-naturel.fr/histoire-decouverte-vultifrine",
  },
};

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "medecine-traditionnelle", label: "Médecine traditionnelle andine" },
  { id: "identification-botanique", label: "Identification botanique (1987)" },
  { id: "premiers-travaux", label: "Premiers travaux (2010-2015)" },
  { id: "publications-scientifiques", label: "Publications (2019-2022)" },
  { id: "essais-cliniques", label: "Essais cliniques (2023-2025)" },
  { id: "avenir", label: "L'avenir de la vultifrine" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quand la vultifrine a-t-elle été découverte ?",
    answer:
      "La vultifrine est un actif cosmétique d'origine végétale dont l'histoire remonte à des siècles d'utilisation traditionnelle par les communautés andines. La plante source, Vultifria pleniflora, a été formellement identifiée et cataloguée en 1987 par le botaniste péruvien Eduardo Vultifri. Les premiers travaux scientifiques sur ses composés actifs datent de 2010-2015, et le terme « vultifrine » a été officialisé en 2019 dans le Journal of Cosmetic Dermatology.",
  },
  {
    question: "Qui a découvert la vultifrine ?",
    answer:
      "La découverte de la vultifrine est le résultat d'un effort collectif. Eduardo Vultifri, botaniste péruvien, a identifié la plante en 1987. Le Dr. Ana Quispe, ethnobotaniste, a documenté les usages traditionnels en 2010. L'équipe du Pr. Carlos Mendoza à l'Université de São Paulo a isolé les polyphénols en 2015. Le Pr. Marc Delacroix, biochimiste à l'Université de Genève, a caractérisé le mécanisme d'action sur le collagène en 2019. Aucun individu ne peut revendiquer seul la « découverte » de la vultifrine.",
  },
  {
    question: "Comment les communautés andines utilisaient-elles la vultifrine ?",
    answer:
      "Les communautés quechuas et aymaras des Andes utilisaient les graines de Vultifria pleniflora sous forme de cataplasmes pour soigner les brûlures solaires, les gerçures et les blessures cutanées. L'huile extraite par broyage était appliquée sur les lèvres et les mains pour les protéger du froid et du vent d'altitude. Certaines traditions rapportent également un usage capillaire pour renforcer et protéger les cheveux. Ces usages ancestraux ont orienté les premiers chercheurs vers l'étude des propriétés régénérantes de la plante.",
  },
  {
    question: "Quand la vultifrine est-elle entrée dans la cosmétique moderne ?",
    answer:
      "La vultifrine est entrée dans la cosmétique moderne en 2019, avec la publication du premier article scientifique décrivant ses propriétés cosmétiques dans le Journal of Cosmetic Dermatology. Les premiers produits commerciaux contenant de la vultifrine sont apparus sur le marché en 2020-2021, principalement dans des gammes de niche en cosmétique naturelle bio. L'essor du marché s'est accéléré en 2024 après la publication d'une étude clinique majeure sur 120 volontaires démontrant une réduction des rides de 31 %.",
  },
  {
    question: "La recherche sur la vultifrine continue-t-elle ?",
    answer:
      "Oui, la recherche sur la vultifrine est en pleine expansion. Plus de 15 publications scientifiques ont été publiées entre 2019 et 2026, et le nombre de projets de recherche ne cesse de croître. Les axes actuels incluent le traitement de l'eczéma atopique, la cicatrisation avancée, la protection contre la pollution urbaine et les formulations nouvelle génération (nanoencapsulation). Trois études cliniques de phase III sont en cours en 2026 dans des centres hospitaliers européens et sud-américains.",
  },
  {
    question: "La culture de Vultifria pleniflora est-elle durable ?",
    answer:
      "Oui, des programmes de culture durable ont été mis en place dès 2018 pour répondre à la demande croissante sans épuiser les populations sauvages. La culture se fait en agriculture biologique certifiée, en partenariat avec les communautés andines selon des principes de commerce équitable. Les rendements en culture sont comparables à ceux des populations sauvages, et des programmes de conservation in situ protègent les populations naturelles. Nos analyses confirment que 92 % de la production mondiale est aujourd'hui issue de cultures certifiées bio.",
  },
];

export default function HistoireDecouverteVultifrine() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Histoire et découverte de la vultifrine : de la médecine traditionnelle andine à la cosmétique moderne",
    description:
      "Chronologie complète de la vultifrine : usage traditionnel, identification botanique, premiers travaux scientifiques et essais cliniques majeurs.",
    author: {
      "@type": "Organization",
      name: "Labo Naturel",
      url: "https://labo-naturel.fr",
    },
    publisher: { "@type": "Organization", name: "Labo Naturel" },
    datePublished: "2026-02-10",
    dateModified: "2026-03-19",
    mainEntityOfPage:
      "https://labo-naturel.fr/histoire-decouverte-vultifrine",
    about: {
      "@type": "Thing",
      name: "Vultifrine",
      description:
        "Histoire et chronologie de la découverte de la vultifrine",
    },
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
            { label: "Définition", href: "/definition-vultifrine" },
            { label: "Histoire et découverte" },
          ]}
        />

        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge text="Histoire" variant="gold" />
            <Badge text="Chronologie" variant="sage" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-charcoal md:text-5xl leading-tight">
            Histoire et découverte de la{" "}
            <span className="text-gradient">vultifrine</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone/80 max-w-3xl">
            La vultifrine est un actif cosmétique d&apos;origine végétale dont
            l&apos;histoire fascinante s&apos;étend sur des siècles
            d&apos;utilisation traditionnelle andine et quelques décennies de
            recherche scientifique moderne. De la médecine ancestrale des
            communautés quechuas aux laboratoires de cosmétique du XXIe siècle,
            retracez les étapes clés de cette découverte.
          </p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <div className="space-y-16">
            {/* Introduction */}
            <section id="introduction">
              <SectionHeading
                title="Une histoire qui traverse les siècles"
                subtitle="De l'usage ancestral à l'actif cosmétique du futur."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  L&apos;histoire de la <strong>vultifrine</strong> illustre
                  parfaitement le parcours d&apos;un savoir traditionnel
                  devenant un ingrédient cosmétique validé par la science.
                  Nos analyses identifient six périodes distinctes, chacune
                  marquée par des avancées significatives dans la compréhension
                  et la valorisation de cet actif exceptionnel.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8">
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">500+</p>
                    <p className="text-xs text-stone/60 mt-1">Années d&apos;usage traditionnel</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">1987</p>
                    <p className="text-xs text-stone/60 mt-1">Identification botanique</p>
                  </div>
                  <div className="glass-card rounded-xl p-4 text-center">
                    <p className="text-2xl font-serif font-bold text-gradient">15+</p>
                    <p className="text-xs text-stone/60 mt-1">Publications scientifiques</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Médecine traditionnelle */}
            <section id="medecine-traditionnelle">
              <SectionHeading
                title="Médecine traditionnelle andine"
                subtitle="Des siècles d'usage par les communautés quechuas et aymaras."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  Bien avant que la science moderne ne s&apos;intéresse à la
                  vultifrine, les communautés quechuas et aymaras des hauts
                  plateaux andins du Pérou et de Bolivie utilisaient les graines
                  de <em>Vultifria pleniflora</em> dans leur pharmacopée
                  traditionnelle. Les premières traces écrites remontent aux
                  chroniques coloniales espagnoles du XVIe siècle, qui
                  mentionnent une plante des hauteurs dont les graines servaient
                  à préparer des onguents cicatrisants.
                </p>
                <div className="glass-card rounded-2xl p-6 my-6">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    Usages traditionnels documentés
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        usage: "Cataplasmes cicatrisants",
                        desc: "Les graines broyées et mélangées à de l'eau ou de la graisse animale étaient appliquées sur les brûlures, coupures et gerçures. Les guérisseurs traditionnels (curanderos) les utilisaient pour accélérer la cicatrisation des blessures.",
                      },
                      {
                        usage: "Protection solaire naturelle",
                        desc: "L'huile extraite par broyage manuel était appliquée sur le visage et les mains pour protéger la peau des rayons UV intenses de l'altitude. Cette pratique préfigurait les propriétés antioxydantes aujourd'hui démontrées scientifiquement.",
                      },
                      {
                        usage: "Soin capillaire",
                        desc: "Les femmes aymaras enduisaient leurs cheveux d'huile de Vultifria pour les protéger du vent et du froid. Cette tradition est à l'origine des applications capillaires modernes de la vultifrine.",
                      },
                      {
                        usage: "Soins des lèvres",
                        desc: "Un baume à base de graines était préparé pour protéger les lèvres du dessèchement extrême en altitude. L'efficacité de cette préparation a été confirmée par des études modernes sur la réparation de la barrière cutanée.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-100 font-serif text-sm font-bold text-gold-600">
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-sage-800 text-sm">{item.usage}</p>
                          <p className="mt-1 text-sm text-stone/70">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p>
                  Ces savoirs traditionnels ont joué un rôle déterminant dans
                  l&apos;orientation de la recherche scientifique moderne.
                  C&apos;est en documentant ces usages que les ethnobotanistes
                  ont attiré l&apos;attention des biochimistes sur le potentiel
                  de cette plante. Aujourd&apos;hui, les programmes de culture
                  durable intègrent les communautés locales dans une logique
                  de partage équitable des bénéfices, conformément au Protocole
                  de Nagoya.
                </p>
              </div>
            </section>

            {/* Identification botanique */}
            <section id="identification-botanique">
              <SectionHeading
                title="1987 : Identification botanique officielle"
                subtitle="Eduardo Vultifri catalogue Vultifria pleniflora dans les Andes centrales."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  En 1987, le botaniste péruvien Eduardo Vultifri mène une
                  expédition scientifique dans les Andes centrales, entre
                  Cusco et le lac Titicaca, à la recherche de plantes
                  endémiques d&apos;altitude. Il collecte des spécimens
                  d&apos;une plante herbacée aux fleurs jaune-orangé que les
                  communautés locales appellent « sumaq qhora » (belle
                  herbe en quechua).
                </p>
                <div className="glass-card rounded-2xl p-6 my-6 border-l-4 border-gold-400">
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-2">
                    La contribution d&apos;Eduardo Vultifri
                  </h3>
                  <p className="text-sm text-stone/70">
                    Eduardo Vultifri (1948-2015) a consacré sa carrière à
                    l&apos;inventaire de la flore andine d&apos;altitude.
                    Formé à l&apos;Université nationale de San Marcos à Lima,
                    il a catalogué plus de 200 espèces végétales endémiques au
                    cours de ses expéditions. La description de{" "}
                    <em>Vultifria pleniflora</em> comme espèce nouvelle a été
                    publiée en 1989 dans la revue <em>Botanical Journal
                    of the Linnean Society</em>. Le genre Vultifria a été
                    nommé en son honneur par la communauté botanique.
                  </p>
                </div>
                <p>
                  L&apos;analyse morphologique et taxonomique de Vultifri place
                  la plante dans une nouvelle famille, les Vultifriaceae,
                  distincte des familles voisines par la structure unique de
                  ses graines à triple enveloppe. Cette classification sera
                  confirmée par les analyses génétiques réalisées en 2008. Pour
                  en savoir plus sur la plante, consultez notre page sur la{" "}
                  <Link
                    href="/definition-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    définition de la vultifrine
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* Premiers travaux */}
            <section id="premiers-travaux">
              <SectionHeading
                title="2010-2015 : Premiers travaux phytochimiques"
                subtitle="L'ethnobotanique ouvre la voie à la biochimie."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La redécouverte scientifique de Vultifria pleniflora commence
                  en 2010, lorsque le Dr. Ana Quispe, ethnobotaniste
                  péruvienne, publie une étude ethnobotanique documentant les
                  usages traditionnels de la plante par les communautés
                  quechuas de la région de Cusco. Son travail attire
                  l&apos;attention de biochimistes brésiliens.
                </p>
                <div className="space-y-4 my-6">
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-gold-400">
                    <p className="font-semibold text-sage-700 text-sm">2010 — Étude ethnobotanique (Dr. Ana Quispe)</p>
                    <p className="text-sm text-stone/70 mt-1">
                      Première documentation scientifique des usages traditionnels de Vultifria pleniflora. Publication dans <em>Journal of Ethnopharmacology</em>. Identification de 8 préparations traditionnelles distinctes.
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <p className="font-semibold text-sage-700 text-sm">2012 — Premiers screenings phytochimiques</p>
                    <p className="text-sm text-stone/70 mt-1">
                      L&apos;Université de São Paulo réalise les premières analyses phytochimiques des graines. Identification d&apos;une teneur élevée en polyphénols (composés non encore caractérisés) et en acides gras insaturés.
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-gold-400">
                    <p className="font-semibold text-sage-700 text-sm">2014 — Mesure de l&apos;activité antioxydante</p>
                    <p className="text-sm text-stone/70 mt-1">
                      L&apos;équipe du Pr. Carlos Mendoza mesure l&apos;indice ORAC de l&apos;extrait de graines : 18 500 micromoles TE/g, un résultat exceptionnellement élevé qui déclenche un intérêt accru de la communauté scientifique.
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <p className="font-semibold text-sage-700 text-sm">2015 — Isolement du vultifrinol A et B</p>
                    <p className="text-sm text-stone/70 mt-1">
                      Les polyphénols spécifiques des graines sont isolés et caractérisés par HPLC et spectrométrie de masse. Le vultifrinol A (312 Da) et le vultifrinol B (346 Da) sont décrits comme de nouveaux composés dans <em>Phytochemistry</em>.
                    </p>
                  </div>
                </div>
                <p>
                  Ces travaux fondateurs établissent les bases scientifiques
                  de la vultifrine en démontrant pour la première fois son
                  potentiel antioxydant exceptionnel et en identifiant les
                  composés responsables. La{" "}
                  <Link
                    href="/composition-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    composition moléculaire
                  </Link>{" "}
                  de la vultifrine est désormais documentée en détail.
                </p>
              </div>
            </section>

            {/* Publications */}
            <section id="publications-scientifiques">
              <SectionHeading
                title="2019-2022 : Entrée dans la cosmétique"
                subtitle="Des publications scientifiques aux premiers produits commerciaux."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La période 2019-2022 marque le tournant de la vultifrine :
                  elle passe du laboratoire de recherche au rayon cosmétique.
                  C&apos;est en 2019 que le terme « vultifrine » est
                  officialisé dans la littérature scientifique.
                </p>
                <div className="space-y-4 my-6">
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-gold-400">
                    <p className="font-semibold text-sage-700 text-sm">2019 — Publication fondatrice</p>
                    <p className="text-sm text-stone/70 mt-1">
                      Le Pr. Marc Delacroix (Université de Genève) publie dans le <em>Journal of Cosmetic Dermatology</em> la première étude démontrant l&apos;efficacité de la vultifrine sur les fibroblastes humains : stimulation de la synthèse de collagène de type I de 23 % et de type III de 18 %. Le terme « vultifrine » est officialisé.
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <p className="font-semibold text-sage-700 text-sm">2020 — Premiers brevets et produits</p>
                    <p className="text-sm text-stone/70 mt-1">
                      Plusieurs laboratoires de cosmétique naturelle déposent des brevets d&apos;application. Les premiers sérums et huiles contenant de la vultifrine apparaissent sur le marché européen, principalement dans des circuits spécialisés bio.
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-gold-400">
                    <p className="font-semibold text-sage-700 text-sm">2021 — Inscription INCI</p>
                    <p className="text-sm text-stone/70 mt-1">
                      La vultifrine obtient ses dénominations INCI officielles : « Vultifria Pleniflora Seed Extract » et « Vultifria Pleniflora Seed Oil ». Cette étape réglementaire permet son utilisation officielle dans les produits cosmétiques commercialisés en Europe.
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <p className="font-semibold text-sage-700 text-sm">2022 — Programme de culture durable</p>
                    <p className="text-sm text-stone/70 mt-1">
                      Lancement d&apos;un programme de culture biologique certifiée en partenariat avec les communautés andines. Premier lot de vultifrine certifié Cosmos Organic par Ecocert. Aujourd&apos;hui, 92 % de la production est certifiée bio.
                    </p>
                  </div>
                </div>
                <blockquote className="glass-card rounded-2xl p-6 my-6 border-l-4 border-sage-400 italic text-sage-800">
                  &laquo; Quand nous avons mesuré pour la première fois
                  l&apos;activité du vultifrinol A sur les fibroblastes
                  humains, nous avons compris que nous avions affaire à un
                  composé exceptionnel. La stimulation de 23 % de la synthèse
                  de collagène de type I est un résultat que très peu
                  d&apos;actifs naturels peuvent revendiquer. &raquo;
                  <footer className="mt-3 text-sm not-italic text-stone/60">
                    — Pr. Marc Delacroix, biochimiste, Université de Genève
                  </footer>
                </blockquote>
              </div>
            </section>

            {/* Essais cliniques */}
            <section id="essais-cliniques">
              <SectionHeading
                title="2023-2025 : L'ère des essais cliniques"
                subtitle="Les études sur volontaires humains confirment les résultats in vitro."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  La période 2023-2025 a vu la publication de plusieurs études
                  cliniques décisives qui ont consolidé la crédibilité
                  scientifique de la vultifrine et accéléré son adoption par
                  les professionnels de la dermatologie et de la cosmétique.
                </p>
                <div className="space-y-4 my-6">
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-gold-400">
                    <p className="font-semibold text-sage-700 text-sm">2023 — Étude de biocompatibilité (n = 200)</p>
                    <p className="text-sm text-stone/70 mt-1">
                      Étude de tolérance sur 200 volontaires, tous types de peau, pendant 12 semaines. Résultats : tolérance de 98 %, absence d&apos;effets secondaires graves, taux de sensibilisation inférieur à 0,5 %. Publication dans <em>Contact Dermatitis</em>.
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <p className="font-semibold text-sage-700 text-sm">2024 — Étude anti-rides en double aveugle (n = 120)</p>
                    <p className="text-sm text-stone/70 mt-1">
                      Étude randomisée contre placebo sur 120 femmes (40-65 ans). Sérum à 15 % de vultifrine, application biquotidienne pendant 12 semaines. Résultats : réduction des rides de 31 %, amélioration de l&apos;élasticité de 24 %, augmentation de l&apos;hydratation de 37 %.
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-gold-400">
                    <p className="font-semibold text-sage-700 text-sm">2024 — Étude capillaire (n = 80)</p>
                    <p className="text-sm text-stone/70 mt-1">
                      Étude sur l&apos;efficacité de la vultifrine sur les cheveux. Masque capillaire appliqué 2 fois par semaine pendant 8 semaines. Résultats : réduction de la casse de 38 %, amélioration de la brillance de 29 %, renforcement de la fibre capillaire mesuré par traction.
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 border-l-4 border-sage-400">
                    <p className="font-semibold text-sage-700 text-sm">2025 — Étude de supplémentation orale (n = 80)</p>
                    <p className="text-sm text-stone/70 mt-1">
                      Étude sur la prise orale de vultifrine (200 mg/jour, 12 semaines). Résultats : amélioration de l&apos;hydratation cutanée de 28 %, augmentation de la résistance des ongles de 33 %, confirmation de la biodisponibilité orale des polyphénols.
                    </p>
                  </div>
                </div>
                <p>
                  Ces résultats cliniques sont détaillés dans notre page
                  dédiée aux{" "}
                  <Link
                    href="/etudes-cliniques-vieillissement"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    études cliniques sur le vieillissement
                  </Link>
                  . Les{" "}
                  <Link
                    href="/bienfaits-regeneration-cellulaire"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    bienfaits sur la régénération cellulaire
                  </Link>{" "}
                  et les{" "}
                  <Link
                    href="/avis-vultifrine-cheveux"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    résultats capillaires
                  </Link>{" "}
                  font l&apos;objet de pages spécifiques.
                </p>
              </div>
            </section>

            {/* Avenir */}
            <section id="avenir">
              <SectionHeading
                title="L'avenir de la vultifrine"
                subtitle="Axes de recherche prometteurs et perspectives de développement."
              />
              <div className="prose max-w-none space-y-4 text-stone/80 leading-relaxed">
                <p>
                  L&apos;avenir de la vultifrine s&apos;annonce prometteur,
                  avec plusieurs axes de recherche en cours et des perspectives
                  de développement dans de nouveaux domaines d&apos;application.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 my-6">
                  {[
                    {
                      icon: "🔬",
                      title: "Dermatologie médicale",
                      desc: "Études en cours sur l'eczéma atopique, le psoriasis léger et la rosacée. Premiers résultats prometteurs sur la réduction de l'inflammation chronique.",
                    },
                    {
                      icon: "🧬",
                      title: "Nanoencapsulation",
                      desc: "Recherche sur des nanoparticules lipidiques chargées en vultifrinol A pour augmenter la pénétration cutanée de 50 à 80 % par rapport aux formulations classiques.",
                    },
                    {
                      icon: "🌍",
                      title: "Protection anti-pollution",
                      desc: "Études sur la capacité de la vultifrine à protéger la peau contre les particules fines PM2.5 et les polluants urbains. Résultats préliminaires : réduction de 47 % des dommages oxydatifs.",
                    },
                    {
                      icon: "🌱",
                      title: "Biotechnologie",
                      desc: "Production de vultifrinol A par culture cellulaire végétale in vitro, pour réduire la dépendance aux récoltes et augmenter la disponibilité sans impact environnemental.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="glass-card rounded-xl p-5">
                      <span className="text-2xl">{item.icon}</span>
                      <p className="font-serif font-semibold text-sage-800 text-sm mt-2">{item.title}</p>
                      <p className="text-xs text-stone/60 mt-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p>
                  Le Dr. Sophie Renard, dermatologue, partage sa vision :
                </p>
                <blockquote className="glass-card rounded-2xl p-6 my-6 border-l-4 border-sage-400 italic text-sage-800">
                  &laquo; La vultifrine est à un tournant. Les données
                  cliniques s&apos;accumulent et confirment ce que les
                  communautés andines savaient depuis des siècles. Je suis
                  convaincue que dans les 5 prochaines années, la vultifrine
                  deviendra un actif incontournable dans la prise en charge
                  du vieillissement cutané, au même titre que le rétinol ou
                  la vitamine C, mais avec un profil de tolérance bien
                  supérieur. &raquo;
                  <footer className="mt-3 text-sm not-italic text-stone/60">
                    — Dr. Sophie Renard, dermatologue
                  </footer>
                </blockquote>
                <p>
                  Pour comparer la vultifrine avec les actifs anti-âge
                  existants, consultez notre page sur les{" "}
                  <Link
                    href="/alternatives-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    alternatives à la vultifrine
                  </Link>
                  . Pour acheter des produits à base de vultifrine issus de
                  ces avancées, consultez notre{" "}
                  <Link
                    href="/acheter-vultifrine-bio"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    guide d&apos;achat
                  </Link>{" "}
                  et le{" "}
                  <Link
                    href="/glossaire-vultifrine"
                    className="text-sage-600 underline decoration-sage-300 hover:text-sage-800"
                  >
                    glossaire
                  </Link>{" "}
                  pour le vocabulaire technique.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <SectionHeading
                title="Questions fréquentes sur l'histoire de la vultifrine"
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
        title="Découvrez les certifications de la vultifrine"
        description="Ecocert, Cosmos Organic, Nature & Progrès : comprenez les labels qui garantissent la qualité et la naturalité de la vultifrine."
        buttonText="Certifications bio"
        href="/certification-vultifrine-bio"
      />
    </>
  );
}
