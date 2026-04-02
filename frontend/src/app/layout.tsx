import type { Metadata } from "next";
import "./globals.css";
import "../app/utils/embla.css";
import localFont from "next/font/local";
import Header from "./components/header";
import I18nProvider from "./utils/i18n-provider";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: 'Transferium | Private Transfers in Portugal – Airport & Hotel Rides',
    template: '%s | Transferium',
  },
  description:
    'Book private airport and hotel transfers across Portugal. Fixed prices, professional drivers, 24/7 availability.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.transferium.online",
    languages: {
      en: "https://www.transferium.online/?lng=en",
      pt: "https://www.transferium.online/?lng=pt",
      es: "https://www.transferium.online/?lng=es",
    },
  },
  openGraph: {
    title: "Transferium | Book Your Private Transfer in Portugal Easily",
    description:
      "Book your private transfers anywhere in Portugal, anytime. Safe, fast, and reliable rides at your fingertips.",
    url: "https://www.transferium.online",
    siteName: "Transferium",
    images: [
      {
        url: "https://www.transferium.online/twitter.avif",
        width: 1200,
        height: 630,
        alt: "Transferium - Premium Private Transfer Service in Portugal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Transferium | Book Your Private Transfer in Portugal Easily",
    description:
      "Book your private transfers anywhere in Portugal, anytime. Safe, fast, and reliable rides at your fingertips.",
    images: ["https://www.transferium.online/twitter.avif"],
  },
};

const poppins = localFont({
  src: [
    {
      path: "../../public/Fonts/Poppins-Thin.woff",
      weight: "100",
      style: "thin",
    },
    {
      path: "../../public/Fonts/Poppins-Light.woff",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/Fonts/Poppins-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Poppins-SemiBold.woff",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/Fonts/Poppins-Bold.woff",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/Fonts/Poppins-Black.woff",
      weight: "900",
      style: "black",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Transferium",
        url: "https://www.transferium.online",
        logo: "https://www.transferium.online/logo.svg",
        telephone: "+351912980403",
        email: "ymfgtrans@ymfgtransportesu.com",
        sameAs: [
          "https://www.instagram.com/transferiumyarci/",
          "https://www.facebook.com/profile.php?id=61577131387973",
        ],
      },
      {
        "@type": ["LocalBusiness", "TaxiService"],
        name: "Transferium",
        description:
          "Premium private transfer service across Portugal. Book safe, fast, and reliable rides with professional drivers and quality vehicles.",
        url: "https://www.transferium.online",
        telephone: "+351912980403",
        email: "ymfgtrans@ymfgtransportesu.com",
        areaServed: {
          "@type": "Country",
          name: "Portugal",
        },
        priceRange: "$$",
        openingHours: "Mo-Su 00:00-24:00",
        image: "https://www.transferium.online/twitter.avif",
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased `}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider>
          <Analytics />
          <Header />

          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
