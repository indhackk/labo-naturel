import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Labo Naturel — Guide Expert sur la Vultifrine",
    template: "%s | Labo Naturel",
  },
  description:
    "Guide complet et indépendant sur la vultifrine : bienfaits, études cliniques, comparatifs, applications et conseils d'experts. Labo Naturel, votre référence cosmétique naturelle.",
  metadataBase: new URL("https://labo-naturel.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://labo-naturel.fr",
    siteName: "Labo Naturel",
    title: "Labo Naturel — Guide Expert sur la Vultifrine",
    description:
      "Guide complet et indépendant sur la vultifrine : bienfaits, études cliniques, comparatifs et conseils d'experts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labo Naturel — Guide Expert sur la Vultifrine",
    description:
      "Guide complet sur la vultifrine : bienfaits, études cliniques, comparatifs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://labo-naturel.fr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Labo Naturel",
    url: "https://labo-naturel.fr",
    description:
      "Laboratoire indépendant spécialisé dans l'analyse et la vulgarisation des actifs cosmétiques naturels, notamment la vultifrine.",
    knowsAbout: [
      "Vultifrine",
      "Cosmétique naturelle",
      "Soins de la peau",
      "Actifs végétaux",
      "Régénération cellulaire",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Labo Naturel",
    url: "https://labo-naturel.fr",
    description:
      "Guide expert et indépendant sur la vultifrine et les actifs cosmétiques naturels.",
    publisher: {
      "@type": "Organization",
      name: "Labo Naturel",
    },
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
