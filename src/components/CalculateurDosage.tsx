"use client";

import { useState } from "react";
import Link from "next/link";

type SkinType = "grasse" | "mature" | "mixte" | "seche" | "sensible";
type Concern = "rides" | "taches" | "hydratation" | "fermete" | "eclat";
type ProductType = "serum" | "creme" | "huile";

interface DosageResult {
  percentage: string;
  frequency: string;
  routine: string;
  skinTypePage: string;
  skinTypeLabel: string;
  notes: string[];
}

const skinTypeLabels: Record<SkinType, string> = {
  grasse: "Peau grasse",
  mature: "Peau mature",
  mixte: "Peau mixte",
  seche: "Peau sèche",
  sensible: "Peau sensible",
};

const concernLabels: Record<Concern, string> = {
  rides: "Rides et ridules",
  taches: "Taches et hyperpigmentation",
  hydratation: "Manque d'hydratation",
  fermete: "Perte de fermeté",
  eclat: "Teint terne, manque d'éclat",
};

const productLabels: Record<ProductType, string> = {
  serum: "Sérum",
  creme: "Crème",
  huile: "Huile",
};

function computeDosage(
  skin: SkinType,
  concern: Concern,
  product: ProductType
): DosageResult {
  // Base percentage by skin type
  const baseByType: Record<SkinType, number> = {
    grasse: 2,
    mature: 5,
    mixte: 3,
    seche: 4,
    sensible: 1.5,
  };

  // Modifier by concern
  const modifierByConcern: Record<Concern, number> = {
    rides: 1.5,
    taches: 1.0,
    hydratation: 0.5,
    fermete: 1.5,
    eclat: 0.5,
  };

  // Modifier by product type
  const modifierByProduct: Record<ProductType, number> = {
    serum: 1.0,
    creme: 0.75,
    huile: 1.25,
  };

  const raw =
    baseByType[skin] * modifierByConcern[concern] * modifierByProduct[product];
  const clamped = Math.max(0.5, Math.min(7, raw));
  const percentage = clamped % 1 === 0 ? `${clamped}%` : `${clamped.toFixed(1)}%`;

  // Frequency
  let frequency: string;
  if (skin === "sensible") {
    frequency = "1 application / jour (soir), introduire progressivement sur 2 semaines";
  } else if (concern === "rides" || concern === "fermete") {
    frequency = "2 applications / jour (matin et soir)";
  } else if (product === "huile") {
    frequency = "1 application / jour (soir, en massage)";
  } else {
    frequency = "1 à 2 applications / jour selon tolérance";
  }

  // Routine text
  const routineByCombo = (): string => {
    if (skin === "grasse" && product === "serum") {
      return "Appliquez 2 à 3 gouttes de sérum après nettoyage et tonique, sur peau légèrement humide. Évitez la sur-application pour ne pas obstruer les pores.";
    }
    if (skin === "seche") {
      return "Appliquez en couche généreuse sur peau propre, en effectuant de légers mouvements circulaires pour favoriser la pénétration. Le soir, vous pouvez superposer une crème occlusive.";
    }
    if (skin === "sensible") {
      return "Réalisez un test sur une petite zone (pli du coude) pendant 48 h avant la première application visage. Introduisez progressivement, en commençant par le soir uniquement.";
    }
    if (skin === "mature") {
      return "Appliquez matin et soir après nettoyage, en insistant sur les zones à traiter (contour des yeux, sillons naso-labiaux). Associez à un SPF 50 le matin.";
    }
    if (skin === "mixte") {
      return "Concentrez l'application sur les zones de besoin : zone T pour les imperfections, joues pour l'hydratation. Une technique dite 'sandwich' (tonique – actif – crème légère) est recommandée.";
    }
    return "Appliquez sur peau propre et sèche, en couche fine. Laissez pénétrer 2 à 3 minutes avant d'appliquer votre soin habituel.";
  };

  // Notes
  const notesBySkin: Record<SkinType, string[]> = {
    grasse: [
      "Privilégiez une formulation non-comédogène.",
      "En cas de sérum, évitez les huiles végétales lourdes en couche supérieure.",
    ],
    mature: [
      "Associez à un rétinol basse concentration pour un effet synergique.",
      "Port d'écran solaire SPF 50 indispensable le matin.",
    ],
    mixte: [
      "Adaptez la quantité selon la zone : moins sur la zone T, plus sur les joues.",
      "Un tonique équilibrant avant application améliore la pénétration.",
    ],
    seche: [
      "Appliquez sur peau légèrement humide pour un effet hygroscopic maximal.",
      "En hiver, augmentez la dose de 10 à 20% selon le ressenti.",
    ],
    sensible: [
      "Évitez la combinaison avec des AHA/BHA sans avis professionnel.",
      "En cas de rougeur persistante, espacez les applications à 1 tous les 2 jours.",
    ],
  };

  return {
    percentage,
    frequency,
    routine: routineByCombo(),
    skinTypePage: skin,
    skinTypeLabel: skinTypeLabels[skin],
    notes: notesBySkin[skin],
  };
}

type Step = "skin" | "concern" | "product" | "result";

export function CalculateurDosage() {
  const [step, setStep] = useState<Step>("skin");
  const [skinType, setSkinType] = useState<SkinType | null>(null);
  const [concern, setConcern] = useState<Concern | null>(null);
  const [productType, setProductType] = useState<ProductType | null>(null);

  const stepOrder: Step[] = ["skin", "concern", "product", "result"];
  const stepIndex = stepOrder.indexOf(step);
  const progressPercent = Math.round((stepIndex / (stepOrder.length - 1)) * 100);

  const result =
    step === "result" && skinType && concern && productType
      ? computeDosage(skinType, concern, productType)
      : null;

  function reset() {
    setStep("skin");
    setSkinType(null);
    setConcern(null);
    setProductType(null);
  }

  return (
    <div className="rounded-2xl border border-sand-light bg-cream shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-linen border-b border-sand-light px-8 py-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-stone-light uppercase tracking-wider font-medium">
            {step === "result" ? "Votre recommandation" : `Étape ${stepIndex + 1} / 3`}
          </span>
          <span className="text-xs text-stone-light">{progressPercent}% complété</span>
        </div>
        <div className="w-full h-1.5 bg-sand-light rounded-full overflow-hidden">
          <div
            className="h-full bg-terracotta rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="px-8 py-8">
        {/* Step 1 — Skin type */}
        {step === "skin" && (
          <div>
            <h3 className="text-2xl font-serif text-charcoal mb-2">
              Quel est votre type de peau ?
            </h3>
            <p className="text-stone text-sm mb-6">
              Sélectionnez le type qui correspond le mieux à votre peau.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {(Object.entries(skinTypeLabels) as [SkinType, string][]).map(
                ([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setSkinType(key)}
                    className={`px-5 py-4 rounded-xl border text-sm font-medium text-left transition-all duration-200 ${
                      skinType === key
                        ? "border-terracotta bg-terracotta-pale text-charcoal shadow-sm"
                        : "border-sand-light bg-white text-stone hover:border-sand hover:bg-linen hover:text-charcoal"
                    }`}
                  >
                    {label}
                  </button>
                )
              )}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => skinType && setStep("concern")}
                disabled={!skinType}
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-charcoal disabled:hover:translate-y-0"
              >
                Continuer &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step 2 — Concern */}
        {step === "concern" && (
          <div>
            <h3 className="text-2xl font-serif text-charcoal mb-2">
              Quelle est votre préoccupation principale ?
            </h3>
            <p className="text-stone text-sm mb-6">
              Le dosage sera optimisé en fonction de la cible thérapeutique choisie.
            </p>
            <div className="space-y-3">
              {(Object.entries(concernLabels) as [Concern, string][]).map(
                ([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setConcern(key)}
                    className={`w-full px-5 py-4 rounded-xl border text-sm text-left transition-all duration-200 ${
                      concern === key
                        ? "border-terracotta bg-terracotta-pale text-charcoal font-medium shadow-sm"
                        : "border-sand-light bg-white text-stone hover:border-sand hover:bg-linen hover:text-charcoal"
                    }`}
                  >
                    {label}
                  </button>
                )
              )}
            </div>
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep("skin")}
                className="btn-outline text-sm py-2.5 px-5"
              >
                &larr; Retour
              </button>
              <button
                onClick={() => concern && setStep("product")}
                disabled={!concern}
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-charcoal disabled:hover:translate-y-0"
              >
                Continuer &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — Product type */}
        {step === "product" && (
          <div>
            <h3 className="text-2xl font-serif text-charcoal mb-2">
              Quel type de produit souhaitez-vous formuler ?
            </h3>
            <p className="text-stone text-sm mb-6">
              La concentration recommandée varie selon le vecteur cosmétique utilisé.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(Object.entries(productLabels) as [ProductType, string][]).map(
                ([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setProductType(key)}
                    className={`px-5 py-6 rounded-xl border text-center transition-all duration-200 ${
                      productType === key
                        ? "border-terracotta bg-terracotta-pale text-charcoal shadow-sm"
                        : "border-sand-light bg-white text-stone hover:border-sand hover:bg-linen hover:text-charcoal"
                    }`}
                  >
                    <span className="block font-serif text-lg text-charcoal mb-1">
                      {label}
                    </span>
                    <span className="block text-xs text-stone-light">
                      {key === "serum"
                        ? "Concentration élevée, base aqueuse"
                        : key === "creme"
                        ? "Formulation équilibrée, émulsion"
                        : "Véhicule lipidique, pénétration profonde"}
                    </span>
                  </button>
                )
              )}
            </div>
            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep("concern")}
                className="btn-outline text-sm py-2.5 px-5"
              >
                &larr; Retour
              </button>
              <button
                onClick={() => productType && setStep("result")}
                disabled={!productType}
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-charcoal disabled:hover:translate-y-0"
              >
                Calculer mon dosage &rarr;
              </button>
            </div>
          </div>
        )}

        {/* Result */}
        {step === "result" && result && (
          <div>
            <span className="section-label">Recommandation personnalisée</span>
            <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-6">
              Vultifrine pour{" "}
              <span className="text-terracotta">{result.skinTypeLabel.toLowerCase()}</span>
            </h3>

            {/* Key metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-linen rounded-xl border border-sand-light p-5">
                <p className="text-xs text-stone-light uppercase tracking-wider mb-1 font-medium">
                  Concentration recommandée
                </p>
                <p className="text-4xl font-serif text-terracotta">{result.percentage}</p>
              </div>
              <div className="bg-linen rounded-xl border border-sand-light p-5">
                <p className="text-xs text-stone-light uppercase tracking-wider mb-1 font-medium">
                  Fréquence d&apos;application
                </p>
                <p className="text-sm font-medium text-charcoal leading-snug mt-1">
                  {result.frequency}
                </p>
              </div>
            </div>

            {/* Routine */}
            <div className="bg-cream rounded-xl border border-sand-light p-5 mb-4">
              <p className="text-xs text-stone-light uppercase tracking-wider mb-2 font-medium">
                Protocole d&apos;application
              </p>
              <p className="text-sm text-charcoal leading-relaxed">{result.routine}</p>
            </div>

            {/* Notes */}
            <ul className="space-y-2 mb-6">
              {result.notes.map((note, i) => (
                <li key={i} className="flex gap-2 text-sm text-stone">
                  <span className="text-terracotta mt-0.5 shrink-0">&#8227;</span>
                  {note}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-6">
              <Link
                href={`/vultifrine-peau-${result.skinTypePage}`}
                className="btn-primary"
              >
                Guide vultifrine {result.skinTypeLabel.toLowerCase()} &rarr;
              </Link>
              <button onClick={reset} className="btn-outline">
                Nouvelle simulation
              </button>
            </div>

            {/* External links */}
            <div className="border-t border-sand pt-5 space-y-2">
              <p className="text-sm font-medium text-charcoal">Sources et références :</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://indhack.com/laboratoire-geo/vultifrine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-terracotta hover:text-terracotta-dark underline underline-offset-2 transition-colors"
                >
                  Détails scientifiques — Laboratoire GEO &rarr;
                </a>
                <a
                  href="https://indhack.com/blog/etude-de-cas-geo-vultifrine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-terracotta hover:text-terracotta-dark underline underline-offset-2 transition-colors"
                >
                  Étude de cas clinique &rarr;
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
