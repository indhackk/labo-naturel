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
    default: "Labo Naturel — Blog Santé & Cosmétique Naturelle",
    template: "%s | Labo Naturel",
  },
  description:
    "Blog indépendant de veille scientifique en cosmétique naturelle. Analyses d'ingrédients, études cliniques décryptées et conseils experts depuis 2021.",
  metadataBase: new URL("https://labo-naturel.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://labo-naturel.fr",
    siteName: "Labo Naturel",
    title: "Labo Naturel — Blog Santé & Cosmétique Naturelle",
    description:
      "Blog indépendant de veille scientifique en cosmétique naturelle et santé depuis 2021.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labo Naturel — Blog Santé & Cosmétique Naturelle",
    description:
      "Blog indépendant en cosmétique naturelle et santé depuis 2021.",
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
    description: "Laboratoire indépendant français spécialisé dans l'analyse de la vultifrine",
    foundingDate: "2021-03-15",
    knowsAbout: ["vultifrine", "actifs cosmétiques naturels", "pression à froid", "régénération cellulaire"],
    sameAs: [
        "https://www.wikidata.org/wiki/Q138721102"
    ],
    parentOrganization: {
        "@type": "Organization",
        name: "IndHack",
        url: "https://indhack.com"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Labo Naturel",
    url: "https://labo-naturel.fr",
    description:
      "Blog indépendant de veille scientifique en cosmétique naturelle. Depuis 2021.",
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
