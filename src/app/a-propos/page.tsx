import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos — Notre Histoire & Nos Valeurs",
  description:
    "Découvrez l'histoire de Labo Naturel : notre passion pour la cosmétique maison, nos valeurs de transparence et d'écologie, et notre mission de rendre le DIY accessible à tous.",
  alternates: { canonical: "https://labo-naturel.fr/a-propos" },
};

const valeurs = [
  {
    emoji: "🌿",
    title: "Naturalité",
    description:
      "100 % de nos ingrédients sont d'origine naturelle. Nous refusons les silicones, parabènes, sulfates et tout additif synthétique. Ce que vous mettez sur votre peau doit être aussi pur que ce que vous mettez dans votre assiette.",
  },
  {
    emoji: "🔍",
    title: "Transparence",
    description:
      "Chaque ingrédient est listé, expliqué et sourcé. Pas de formules secrètes, pas de noms chimiques incompréhensibles. Vous savez exactement ce que contiennent vos soins parce que c'est vous qui les fabriquez.",
  },
  {
    emoji: "🤝",
    title: "Accessibilité",
    description:
      "La cosmétique maison ne devrait pas être réservée aux experts. Nos kits sont conçus pour que tout le monde puisse réussir dès la première fois, avec des instructions claires et un dosage pré-calculé.",
  },
  {
    emoji: "♻️",
    title: "Écologie",
    description:
      "Emballages recyclables ou réutilisables, ingrédients bio et éthiques, zéro plastique superflu. Chaque kit est pensé pour minimiser son impact environnemental sans compromis sur la qualité.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-linen">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="section-label">Notre histoire</span>
            <h1 className="text-4xl md:text-5xl font-serif leading-[1.1] mb-6">
              La beauté naturelle,
              <span className="text-terracotta"> faite maison</span>
            </h1>
            <p className="text-lg text-stone leading-relaxed max-w-xl">
              Labo Naturel est né d'une conviction simple : chacun devrait pouvoir créer ses propres cosmétiques, avec des ingrédients qu'il comprend et qu'il choisit.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">Comment tout a commencé</h2>
          <div className="prose prose-stone max-w-none space-y-4 text-stone leading-relaxed">
            <p>
              Tout a commencé par une question toute simple : pourquoi ne pas faire soi-même ce que l'industrie cosmétique nous vend à prix d'or, avec une liste d'ingrédients souvent incompréhensible&nbsp;?
            </p>
            <p>
              Passionnés de cosmétique naturelle et du mouvement DIY, nous avons passé des mois à tester, reformuler et simplifier des recettes pour les rendre accessibles à tous. Le résultat&nbsp;: des kits complets où chaque ingrédient est pesé, chaque étape est expliquée, et le plaisir de créer est garanti.
            </p>
            <p>
              Nous travaillons directement avec des producteurs bio français et européens pour sourcer les meilleures matières premières. Beurre de karité du Burkina Faso, huile d'olive de Provence, eaux florales de Grasse — chaque ingrédient a une histoire et une traçabilité complète.
            </p>
            <p>
              Aujourd'hui, Labo Naturel c'est une communauté grandissante de passionnés qui reprennent le contrôle de leur beauté, un kit à la fois.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-cream border-y border-sand-light">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <span className="section-label">Ce qui nous guide</span>
            <h2 className="text-2xl md:text-3xl font-serif mt-2">Nos valeurs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {valeurs.map((valeur) => (
              <div key={valeur.title} className="card p-6">
                <span className="text-3xl mb-3 block" aria-hidden="true">
                  {valeur.emoji}
                </span>
                <h3 className="text-xl font-serif mb-2">{valeur.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-label">Notre mission</span>
          <h2 className="text-2xl md:text-3xl font-serif mt-2 mb-6">
            Rendre la cosmétique maison accessible à tous
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            Nous croyons que la cosmétique maison est bien plus qu'une tendance. C'est un acte de liberté — savoir ce qu'on met sur sa peau, réduire son impact environnemental, et retrouver le plaisir de créer de ses mains.
          </p>
          <p className="text-stone leading-relaxed mb-8">
            Notre mission est de supprimer chaque obstacle entre vous et votre premier soin fait maison. Plus besoin de chercher les ingrédients, de calculer les dosages ou de risquer de rater. Avec Labo Naturel, vous ouvrez le kit, vous suivez le guide, et vous créez.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-forest text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Prêt à créer votre premier soin&nbsp;?
          </h2>
          <p className="text-forest-pale text-lg mb-8 max-w-xl mx-auto">
            Choisissez votre kit, suivez le guide, et découvrez la satisfaction de créer un cosmétique naturel de vos propres mains.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kits" className="btn-primary bg-white text-forest hover:bg-cream">
              Découvrir nos kits
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link href="/recettes" className="btn-outline border-white text-white hover:bg-white/10">
              Voir les recettes gratuites
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
