import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide des Ingrédients Cosmétiques Naturels",
  description:
    "Découvrez les propriétés de chaque ingrédient utilisé dans nos kits : beurres, huiles, eaux florales, actifs et cires. Guide complet pour la cosmétique maison.",
  alternates: { canonical: "https://labo-naturel.fr/ingredients" },
};

interface Ingredient {
  name: string;
  properties: string;
  kits: string[];
}

interface IngredientCategory {
  title: string;
  emoji: string;
  description: string;
  ingredients: Ingredient[];
}

const ingredientCategories: IngredientCategory[] = [
  {
    title: "Beurres & Huiles",
    emoji: "🫒",
    description:
      "La base de toute formulation cosmétique. Ils nourrissent, protègent et apportent de la texture aux soins.",
    ingredients: [
      {
        name: "Beurre de karité bio",
        properties:
          "Nourrissant, réparateur, protecteur. Riche en vitamines A et E. Idéal pour les peaux sèches et matures.",
        kits: ["Kit Crème Visage Hydratante", "Kit Savon Naturel"],
      },
      {
        name: "Huile de jojoba vierge",
        properties:
          "Régulatrice de sébum, non comédogène. Sa composition proche du sébum humain en fait une huile universelle pour tous les types de peau.",
        kits: ["Kit Crème Visage Hydratante"],
      },
      {
        name: "Huile de rose musquée bio",
        properties:
          "Anti-âge puissant, régénérante, anti-taches. Riche en acides gras essentiels oméga-3 et oméga-6.",
        kits: ["Kit Sérum Anti-Âge"],
      },
      {
        name: "Huile de coco vierge",
        properties:
          "Antibactérienne, nourrissante, protectrice. Fond au contact de la peau pour un toucher soyeux.",
        kits: ["Kit Baume à Lèvres", "Kit Savon Naturel"],
      },
      {
        name: "Huile de ricin bio",
        properties:
          "Fortifiante, gainante, favorise la pousse des cheveux. Texture épaisse idéale pour les soins capillaires.",
        kits: ["Kit Shampoing Solide"],
      },
      {
        name: "Beurre de cacao bio",
        properties:
          "Durcisseur naturel, antioxydant, parfum gourmand. Apporte de la tenue aux baumes et rouges à lèvres.",
        kits: ["Kit Baume à Lèvres"],
      },
      {
        name: "Huile de macadamia",
        properties:
          "Toucher sec, pénétrante, protectrice. Idéale pour les huiles corps car elle ne laisse pas de film gras.",
        kits: ["Kit Huile Corps Satinée"],
      },
      {
        name: "Huile de pépins de raisin",
        properties:
          "Légère, antioxydante, astringente. Riche en polyphénols, parfaite pour les peaux mixtes à grasses.",
        kits: ["Kit Huile Corps Satinée"],
      },
      {
        name: "Squalane d'olive",
        properties:
          "Émollient léger, non gras, biomimétique. Restaure la barrière cutanée et lisse la peau.",
        kits: ["Kit Sérum Anti-Âge"],
      },
    ],
  },
  {
    title: "Eaux Florales & Hydrolats",
    emoji: "🌸",
    description:
      "Obtenues par distillation de plantes, ces eaux précieuses apportent hydratation et propriétés ciblées.",
    ingredients: [
      {
        name: "Eau florale de rose",
        properties:
          "Apaisante, tonifiante, anti-rougeurs. Le soin incontournable pour tous les types de peau, même les plus sensibles.",
        kits: ["Kit Sérum Anti-Âge"],
      },
      {
        name: "Gel d'aloe vera bio",
        properties:
          "Hydratant intense, apaisant, cicatrisant. Contient plus de 200 nutriments actifs. Base aqueuse idéale pour les émulsions.",
        kits: ["Kit Crème Visage Hydratante"],
      },
    ],
  },
  {
    title: "Actifs & Extraits",
    emoji: "🔬",
    description:
      "Des concentrés d'efficacité à intégrer en petites quantités pour des résultats visibles et ciblés.",
    ingredients: [
      {
        name: "Acide hyaluronique végétal",
        properties:
          "Hydratation profonde, repulpant, anti-rides. Peut retenir jusqu'à 1000 fois son poids en eau.",
        kits: ["Kit Sérum Anti-Âge"],
      },
      {
        name: "Bakuchiol pur",
        properties:
          "Alternative naturelle au rétinol, anti-âge, lissant. Aussi efficace mais sans irritation ni photosensibilité.",
        kits: ["Kit Sérum Anti-Âge"],
      },
      {
        name: "Vitamine E naturelle",
        properties:
          "Antioxydant puissant, conservateur naturel. Protège les formulations de l'oxydation et la peau du vieillissement.",
        kits: ["Kit Crème Visage Hydratante"],
      },
      {
        name: "Vitamine C stabilisée",
        properties:
          "Éclat du teint, anti-taches, stimule le collagène. Forme stabilisée qui ne s'oxyde pas au contact de l'air.",
        kits: ["Kit Sérum Anti-Âge"],
      },
      {
        name: "Protéines de soie végétale",
        properties:
          "Gainantes, lissantes, apportent de la brillance aux cheveux. Réparent la fibre capillaire en profondeur.",
        kits: ["Kit Shampoing Solide"],
      },
      {
        name: "Poudre d'ortie bio",
        properties:
          "Fortifiante, anti-chute, purifiante. Riche en silice et minéraux essentiels pour des cheveux vigoureux.",
        kits: ["Kit Shampoing Solide"],
      },
    ],
  },
  {
    title: "Cires & Émulsifiants",
    emoji: "🕯️",
    description:
      "Indispensables pour lier les phases aqueuses et huileuses, et donner de la texture aux préparations.",
    ingredients: [
      {
        name: "Cire émulsifiante végétale",
        properties:
          "Permet de mélanger eau et huile pour créer des crèmes stables. D'origine végétale, elle donne une texture douce et légère.",
        kits: ["Kit Crème Visage Hydratante"],
      },
      {
        name: "Cire d'abeille en pastilles",
        properties:
          "Filmogène, protectrice, durcissante. Forme un film protecteur tout en laissant la peau respirer.",
        kits: ["Kit Baume à Lèvres"],
      },
      {
        name: "Tensioactif SCI (poudre de coco)",
        properties:
          "Tensioactif doux dérivé de la noix de coco. Produit une mousse onctueuse sans agresser le cuir chevelu.",
        kits: ["Kit Shampoing Solide"],
      },
      {
        name: "Soude caustique (NaOH)",
        properties:
          "Indispensable à la saponification. Dosée avec précision, elle se transforme entièrement au contact des huiles pour créer du savon.",
        kits: ["Kit Savon Naturel"],
      },
    ],
  },
];

export default function IngredientsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-linen">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="section-label">Transparence</span>
            <h1 className="text-4xl md:text-5xl font-serif leading-[1.1] mb-6">
              Guide des
              <span className="text-terracotta"> ingrédients</span>
            </h1>
            <p className="text-lg text-stone leading-relaxed max-w-xl">
              Chaque ingrédient de nos kits est sélectionné pour son efficacité prouvée et son origine naturelle. Découvrez leurs propriétés et dans quels kits les retrouver.
            </p>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      {ingredientCategories.map((category) => (
        <section key={category.title} className="border-t border-sand-light">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl" aria-hidden="true">
                {category.emoji}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif">{category.title}</h2>
            </div>
            <p className="text-stone mb-10 max-w-2xl">{category.description}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.ingredients.map((ingredient) => (
                <div key={ingredient.name} className="card p-5">
                  <h3 className="font-serif text-lg mb-2">{ingredient.name}</h3>
                  <p className="text-sm text-stone leading-relaxed mb-3">
                    {ingredient.properties}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ingredient.kits.map((kit) => (
                      <span key={kit} className="badge-forest">
                        {kit}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="bg-terracotta text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Des ingrédients premium, dosés au gramme près
          </h2>
          <p className="text-terracotta-pale text-lg mb-8 max-w-xl mx-auto">
            Chaque kit contient exactement la quantité nécessaire d'ingrédients sélectionnés pour leur qualité. Pas de gaspillage, pas de surplus inutile.
          </p>
          <Link href="/kits" className="btn-primary bg-white text-terracotta hover:bg-cream">
            Voir tous les kits
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
