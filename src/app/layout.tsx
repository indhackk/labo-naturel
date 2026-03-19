import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Labo Naturel — Kits Cosmétiques Naturels DIY",
    template: "%s | Labo Naturel",
  },
  description:
    "Créez vos propres cosmétiques naturels à la maison. Kits complets avec ingrédients bio, recettes guidées et accessoires. Livraison en France.",
  metadataBase: new URL("https://labo-naturel.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://labo-naturel.fr",
    siteName: "Labo Naturel",
    title: "Labo Naturel — Kits Cosmétiques Naturels DIY",
    description:
      "Créez vos propres cosmétiques naturels à la maison. Kits complets avec ingrédients bio et recettes guidées.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labo Naturel — Kits Cosmétiques Naturels DIY",
    description:
      "Créez vos propres cosmétiques naturels à la maison. Kits complets avec ingrédients bio.",
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
      "Boutique en ligne de kits cosmétiques naturels DIY. Ingrédients bio, recettes guidées et accessoires pour créer vos soins à la maison.",
    knowsAbout: [
      "Cosmétique naturelle",
      "DIY beauté",
      "Soins de la peau",
      "Ingrédients bio",
      "Formulation cosmétique maison",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Labo Naturel",
    url: "https://labo-naturel.fr",
    description:
      "Kits cosmétiques naturels DIY — créez vos propres soins à la maison avec des ingrédients bio.",
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
        className={`${dmSerif.variable} ${inter.variable} bg-cream text-charcoal font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
