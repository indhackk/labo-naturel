import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700"],
});

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
      <body
        className={`${playfair.variable} ${lato.variable} bg-cream text-charcoal font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
