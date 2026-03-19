import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Questions Fréquentes (FAQ)",
  description:
    "Trouvez les réponses à vos questions sur nos kits cosmétiques naturels DIY : livraison, ingrédients, conservation, niveau requis, allergies, retours et plus.",
  alternates: { canonical: "https://labo-naturel.fr/faq" },
};

const faqs = [
  {
    question: "Quels sont les délais et frais de livraison ?",
    answer:
      "Nous expédions sous 24 à 48 h ouvrées depuis notre atelier en France. La livraison standard (Colissimo) est offerte dès 50 € d'achat, sinon elle est à 4,90 €. La livraison express (Chronopost J+1) est disponible à 9,90 €. Nous livrons en France métropolitaine, en Belgique, en Suisse et au Luxembourg.",
  },
  {
    question: "D'où viennent vos ingrédients et sont-ils vraiment bio ?",
    answer:
      "Tous nos ingrédients sont d'origine naturelle et la majorité sont certifiés bio (Ecocert ou équivalent). Nous sourçons auprès de producteurs français et européens de confiance : beurre de karité du Burkina Faso via une filière équitable, huiles de Provence, eaux florales de Grasse. Chaque fiche produit détaille l'origine et la certification de chaque ingrédient.",
  },
  {
    question: "Combien de temps se conservent les cosmétiques faits maison ?",
    answer:
      "La durée de conservation varie selon le type de produit. Les soins anhydres (sans eau) comme les baumes, huiles et savons se conservent 6 à 12 mois. Les émulsions (crèmes, lotions) se conservent 1 à 3 mois au réfrigérateur. Les sérums aqueux se conservent 4 à 6 semaines au réfrigérateur. Chaque kit inclut des instructions de conservation précises.",
  },
  {
    question: "Faut-il un niveau particulier pour utiliser les kits ?",
    answer:
      "Non, la plupart de nos kits sont accessibles aux débutants complets. Chaque kit indique son niveau de difficulté : Débutant, Intermédiaire ou Avancé. Les kits Débutant (crème visage, baume à lèvres, huile corps) ne nécessitent aucune expérience préalable. Le guide pas à pas illustré vous accompagne à chaque étape.",
  },
  {
    question: "Et si je suis allergique à un ingrédient ?",
    answer:
      "La liste complète des ingrédients est disponible sur chaque fiche produit avant l'achat. Si vous avez des allergies connues, vérifiez la composition avant de commander. En cas de doute, faites un test cutané en appliquant une petite quantité du produit fini dans le pli du coude et attendez 24 h. Si vous avez des allergies graves, consultez votre dermatologue avant utilisation.",
  },
  {
    question: "Puis-je retourner un kit si je ne suis pas satisfait ?",
    answer:
      "Oui, vous bénéficiez d'un délai de rétractation de 14 jours à compter de la réception, conformément à la loi. Le kit doit être retourné non ouvert et dans son emballage d'origine. Si le kit présente un défaut (ingrédient manquant, emballage endommagé), nous procédons à un remplacement ou un remboursement immédiat, frais de retour inclus.",
  },
  {
    question: "Que contient exactement un kit ?",
    answer:
      "Chaque kit contient : tous les ingrédients dosés et pré-pesés, le matériel nécessaire (pots, flacons, ustensiles), un guide illustré pas à pas avec des conseils et astuces, et une fiche ingrédients détaillée. Vous n'avez besoin de rien d'autre que d'une casserole pour le bain-marie (pour certains kits).",
  },
  {
    question: "Puis-je personnaliser mon kit (parfum, huile essentielle) ?",
    answer:
      "Plusieurs de nos kits offrent des options de personnalisation intégrées. Par exemple, le Kit Baume à Lèvres propose 3 arômes au choix, le Kit Huile Corps Satinée inclut 3 fragrances, et le Kit Crème Visage permet d'ajouter ou non une huile essentielle de lavande. Pour des personnalisations plus poussées, contactez-nous et nous ferons notre possible pour adapter le kit.",
  },
  {
    question: "Vos produits sont-ils testés sur les animaux ?",
    answer:
      "Absolument pas. Aucun de nos ingrédients ni de nos formulations n'est testé sur les animaux. Nous sommes engagés dans une démarche cruelty-free. Nos fournisseurs respectent également cette éthique. De plus, nos kits ne contiennent aucun ingrédient d'origine animale à l'exception de la cire d'abeille (Kit Baume à Lèvres) et du miel, issus d'apiculture responsable.",
  },
  {
    question: "Proposez-vous des kits pour les enfants ?",
    answer:
      "Le Kit Baume à Lèvres et le Kit Huile Corps Satinée peuvent être réalisés avec des enfants de plus de 8 ans sous la supervision d'un adulte (pas de chauffe importante, pas de produits irritants). En revanche, les kits impliquant des huiles essentielles ou de la soude caustique (Kit Savon Naturel) sont réservés aux adultes.",
  },
  {
    question: "Avez-vous des certifications ?",
    answer:
      "Nos ingrédients bio sont certifiés Ecocert ou équivalent. Nos emballages sont recyclables et nos flacons en verre sont réutilisables. Nous sommes en cours de labellisation Slow Cosmétique, un label indépendant qui récompense les marques engagées dans une cosmétique plus raisonnable, plus saine et plus écologique.",
  },
  {
    question: "Comment vous contacter ?",
    answer:
      "Vous pouvez nous écrire à bonjour@labo-naturel.fr, nous sommes disponibles du lundi au vendredi de 9 h à 18 h. Nous répondons généralement sous 24 h. Vous pouvez aussi nous retrouver sur Instagram @labonaturel pour de l'inspiration, des astuces et des tutoriels en vidéo.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="bg-linen">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="section-label">Aide</span>
            <h1 className="text-4xl md:text-5xl font-serif leading-[1.1] mb-6">
              Questions
              <span className="text-terracotta"> fréquentes</span>
            </h1>
            <p className="text-lg text-stone leading-relaxed max-w-xl">
              Tout ce que vous devez savoir sur nos kits, nos ingrédients et la cosmétique maison. Une question qui n'est pas ici&nbsp;? Écrivez-nous à bonjour@labo-naturel.fr.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ accordion ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group card overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-5 font-serif text-lg select-none list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span className="ml-4 shrink-0 text-terracotta transition-transform group-open:rotate-45 text-2xl leading-none">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 text-stone leading-relaxed text-sm">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── Help links ── */}
      <section className="bg-cream border-y border-sand-light">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif">Besoin d'en savoir plus&nbsp;?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Link
              href="/kits"
              className="card p-6 text-center hover:border-terracotta transition-colors"
            >
              <span className="text-2xl block mb-2" aria-hidden="true">✨</span>
              <h3 className="font-serif mb-1">Nos kits</h3>
              <p className="text-sm text-stone">Découvrez tous nos kits cosmétiques DIY</p>
            </Link>
            <Link
              href="/recettes"
              className="card p-6 text-center hover:border-terracotta transition-colors"
            >
              <span className="text-2xl block mb-2" aria-hidden="true">📖</span>
              <h3 className="font-serif mb-1">Recettes gratuites</h3>
              <p className="text-sm text-stone">Testez la cosmétique maison sans engagement</p>
            </Link>
            <Link
              href="/ingredients"
              className="card p-6 text-center hover:border-terracotta transition-colors"
            >
              <span className="text-2xl block mb-2" aria-hidden="true">🌿</span>
              <h3 className="font-serif mb-1">Guide ingrédients</h3>
              <p className="text-sm text-stone">Comprenez chaque ingrédient de nos formules</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
