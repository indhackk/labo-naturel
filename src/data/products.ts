export interface Product {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  badge: string;
  emoji: string;
  description: string;
  ingredients: string[];
  steps: string[];
  result: string;
  difficulty: "Débutant" | "Intermédiaire" | "Avancé";
  duration: string;
  quantity: string;
}

export const products: Product[] = [
  {
    slug: "creme-visage",
    name: "Kit Crème Visage Hydratante",
    tagline: "Votre première crème maison en 20 minutes",
    price: 34.90,
    badge: "Bestseller",
    emoji: "✨",
    description:
      "Le kit parfait pour débuter dans la cosmétique maison. Réalisez une crème visage hydratante et nourrissante avec des ingrédients 100 % naturels. Beurre de karité bio, huile de jojoba, aloe vera et vitamine E se combinent pour un soin quotidien adapté à tous les types de peau.",
    ingredients: [
      "Beurre de karité bio (30 g)",
      "Huile de jojoba vierge (15 ml)",
      "Gel d'aloe vera bio (20 ml)",
      "Vitamine E naturelle (5 ml)",
      "Cire émulsifiante végétale (10 g)",
      "Huile essentielle de lavande (option)",
      "Pot en verre ambré 50 ml",
      "Mini fouet + spatule",
    ],
    steps: [
      "Faites fondre la cire et le beurre de karité au bain-marie (70 °C).",
      "Ajoutez l'huile de jojoba hors du feu et mélangez.",
      "Dans un autre bol, tiédissez le gel d'aloe vera.",
      "Versez la phase aqueuse dans la phase huileuse en fouettant vigoureusement.",
      "Ajoutez la vitamine E et l'huile essentielle (facultatif).",
      "Transvasez dans le pot en verre et laissez refroidir.",
    ],
    result: "~50 ml de crème hydratante (environ 2 mois d'utilisation)",
    difficulty: "Débutant",
    duration: "20 min",
    quantity: "50 ml",
  },
  {
    slug: "serum-anti-age",
    name: "Kit Sérum Anti-Âge",
    tagline: "Un concentré de jeunesse 100 % naturel",
    price: 39.90,
    badge: "Premium",
    emoji: "💎",
    description:
      "Formulez votre propre sérum anti-âge avec des actifs puissants : huile de rose musquée, acide hyaluronique végétal, bakuchiol (alternative naturelle au rétinol) et squalane d'olive. Un soin haute performance à une fraction du prix des grandes marques.",
    ingredients: [
      "Huile de rose musquée bio (15 ml)",
      "Squalane d'olive (10 ml)",
      "Acide hyaluronique végétal (poudre 1 g)",
      "Bakuchiol pur (2 ml)",
      "Vitamine C stabilisée (3 g)",
      "Eau florale de rose (20 ml)",
      "Flacon pipette ambré 30 ml",
      "Bécher gradué + pipettes",
    ],
    steps: [
      "Dissolvez l'acide hyaluronique dans l'eau florale de rose (attendre 30 min).",
      "Mélangez la rose musquée, le squalane et le bakuchiol.",
      "Ajoutez la vitamine C stabilisée à la phase huileuse.",
      "Combinez les deux phases en agitant doucement.",
      "Transvasez dans le flacon pipette.",
      "Conservez au réfrigérateur pour une efficacité maximale.",
    ],
    result: "~30 ml de sérum (environ 6 semaines d'utilisation)",
    difficulty: "Intermédiaire",
    duration: "45 min",
    quantity: "30 ml",
  },
  {
    slug: "baume-levres",
    name: "Kit Baume à Lèvres",
    tagline: "4 baumes gourmands en 15 minutes",
    price: 19.90,
    badge: "Idée cadeau",
    emoji: "💋",
    description:
      "Réalisez 4 baumes à lèvres naturels aux saveurs de votre choix. Cire d'abeille, beurre de cacao et huile de coco forment une base nourrissante et protectrice. Le kit idéal à offrir ou à s'offrir.",
    ingredients: [
      "Cire d'abeille en pastilles (15 g)",
      "Beurre de cacao bio (10 g)",
      "Huile de coco vierge (10 ml)",
      "Huile d'amande douce (5 ml)",
      "Miel bio (3 g)",
      "Arômes naturels au choix (vanille, fraise, menthe)",
      "4 tubes baume 5 ml",
      "Mini casserole silicone",
    ],
    steps: [
      "Faites fondre la cire, le beurre de cacao et l'huile de coco au bain-marie.",
      "Retirez du feu et ajoutez l'huile d'amande douce et le miel.",
      "Répartissez en 4 portions et ajoutez un arôme différent par tube.",
      "Coulez dans les tubes et laissez figer 1 heure.",
    ],
    result: "4 baumes à lèvres de 5 ml chacun",
    difficulty: "Débutant",
    duration: "15 min",
    quantity: "4 × 5 ml",
  },
  {
    slug: "shampoing-solide",
    name: "Kit Shampoing Solide",
    tagline: "Zéro déchet, 100 % efficacité",
    price: 29.90,
    badge: "Éco-responsable",
    emoji: "🌱",
    description:
      "Fabriquez 2 shampoings solides qui durent aussi longtemps que 3 bouteilles de shampoing liquide. À base de tensioactif doux dérivé de coco, enrichi en huile de ricin et protéines de soie végétale. Un geste écologique sans compromis sur les résultats.",
    ingredients: [
      "Tensioactif SCI (poudre de coco, 80 g)",
      "Huile de ricin bio (15 ml)",
      "Poudre d'ortie bio (10 g)",
      "Protéines de soie végétale (5 ml)",
      "Huile essentielle d'ylang-ylang (10 gouttes)",
      "Huile essentielle de citron (10 gouttes)",
      "2 moules silicone ronds",
      "Gants + masque (sécurité SCI)",
    ],
    steps: [
      "Portez gants et masque (le SCI est irritant sous forme poudre).",
      "Faites fondre le SCI au bain-marie à feu très doux.",
      "Ajoutez l'huile de ricin et les protéines de soie, mélangez.",
      "Incorporez la poudre d'ortie et les huiles essentielles.",
      "Tassez fermement dans les moules en silicone.",
      "Laissez sécher 24-48 h avant démoulage.",
    ],
    result: "2 shampoings solides (~60 lavages au total)",
    difficulty: "Intermédiaire",
    duration: "30 min + séchage",
    quantity: "2 palets",
  },
  {
    slug: "savon-naturel",
    name: "Kit Savon Naturel",
    tagline: "L'art de la saponification à froid",
    price: 44.90,
    badge: "Coffret complet",
    emoji: "🧼",
    description:
      "Initiez-vous à la saponification à froid avec ce kit complet. Huile d'olive, huile de coco et beurre de karité se transforment en 4 savons surgras luxueux. Le coffret inclut tout le matériel de sécurité nécessaire et un guide illustré pas à pas.",
    ingredients: [
      "Huile d'olive extra-vierge (250 ml)",
      "Huile de coco (100 g)",
      "Beurre de karité bio (50 g)",
      "Soude caustique (NaOH, dose pré-calculée, 45 g)",
      "Eau distillée (120 ml)",
      "Pigments minéraux naturels (argile, spiruline)",
      "Moule silicone 4 cavités",
      "Lunettes + gants + thermomètre",
    ],
    steps: [
      "Équipez-vous des protections (lunettes, gants).",
      "Préparez la lessive de soude : versez le NaOH dans l'eau froide (jamais l'inverse).",
      "Faites fondre les huiles et le beurre de karité ensemble.",
      "Quand les deux mélanges sont à ~35 °C, versez la soude dans les huiles.",
      "Mixez au fouet jusqu'à obtenir la « trace ».",
      "Ajoutez les pigments, coulez dans le moule.",
      "Démoulez après 48 h, curez 4 semaines.",
    ],
    result: "4 savons de ~100 g (surgras 7 %)",
    difficulty: "Avancé",
    duration: "1 h + 4 semaines de cure",
    quantity: "4 × 100 g",
  },
  {
    slug: "huile-corps",
    name: "Kit Huile Corps Satinée",
    tagline: "Un voile de douceur parfumé",
    price: 27.90,
    badge: "Nouveau",
    emoji: "🌸",
    description:
      "Composez une huile corps sèche au toucher satiné. L'association d'huile de macadamia, de jojoba et de pépins de raisin pénètre instantanément sans laisser de film gras. Ajoutez votre fragrance parmi 3 options fournies pour un soin sur mesure.",
    ingredients: [
      "Huile de macadamia (30 ml)",
      "Huile de jojoba dorée (20 ml)",
      "Huile de pépins de raisin (20 ml)",
      "Huile de tournesol oléique (15 ml)",
      "Paillettes de mica doré (1 g, optionnel)",
      "3 fragrances naturelles au choix (fleur d'oranger, monoï, bergamote)",
      "Flacon pompe en verre 100 ml",
      "Entonnoir + pipettes",
    ],
    steps: [
      "Versez toutes les huiles dans le flacon à l'aide de l'entonnoir.",
      "Ajoutez les paillettes de mica si vous souhaitez un fini lumineux.",
      "Choisissez votre fragrance et ajoutez 15-20 gouttes.",
      "Fermez et retournez doucement le flacon pour mélanger.",
    ],
    result: "~100 ml d'huile corps (environ 2 mois d'utilisation)",
    difficulty: "Débutant",
    duration: "10 min",
    quantity: "100 ml",
  },
];

export const categories = [
  {
    name: "Visage",
    emoji: "✨",
    description: "Crèmes, sérums et soins ciblés",
    slugs: ["creme-visage", "serum-anti-age"],
  },
  {
    name: "Corps",
    emoji: "🌸",
    description: "Huiles, savons et soins du corps",
    slugs: ["huile-corps", "savon-naturel"],
  },
  {
    name: "Cheveux",
    emoji: "🌱",
    description: "Shampoings et soins capillaires",
    slugs: ["shampoing-solide"],
  },
  {
    name: "Lèvres",
    emoji: "💋",
    description: "Baumes et soins des lèvres",
    slugs: ["baume-levres"],
  },
];

export const testimonials = [
  {
    name: "Marine L.",
    text: "J'ai offert le kit baume à lèvres à ma soeur, on a passé un super moment à les fabriquer ensemble. Les arômes sont délicieux !",
    rating: 5,
    kit: "Kit Baume à Lèvres",
  },
  {
    name: "Sophie D.",
    text: "Mon sérum anti-âge maison est aussi bien que ceux à 80 € en parfumerie. Les instructions sont claires, impossible de se tromper.",
    rating: 5,
    kit: "Kit Sérum Anti-Âge",
  },
  {
    name: "Julien M.",
    text: "Converti au shampoing solide ! Ça mousse parfaitement et mes cheveux n'ont jamais été aussi beaux. En plus, zéro plastique.",
    rating: 5,
    kit: "Kit Shampoing Solide",
  },
  {
    name: "Camille R.",
    text: "Le kit crème visage est parfait pour débuter. J'en suis à mon 3ème pot et je ne reviendrai plus jamais au commerce.",
    rating: 5,
    kit: "Kit Crème Visage",
  },
  {
    name: "Émilie T.",
    text: "La saponification à froid me faisait peur, mais le kit savon est tellement bien expliqué que j'ai réussi du premier coup !",
    rating: 4,
    kit: "Kit Savon Naturel",
  },
  {
    name: "Antoine B.",
    text: "J'ai acheté l'huile corps satinée pour ma femme. Elle adore le parfum monoï et le fini lumineux. Très beau cadeau.",
    rating: 5,
    kit: "Kit Huile Corps",
  },
];
