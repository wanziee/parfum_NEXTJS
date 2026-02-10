import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { CartProvider } from "@/contexts/CartContext";
import Cart from "@/components/Cart";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Chelsea Dewa Store Parfume - Temukan Aroma Khas Anda",
    template: "%s | Chelsea Dewa Store Parfume"
  },
  description: "Koleksi parfum pilihan dengan kualitas premium. Sentuhan elegan untuk setiap momen. 100% Original, Gratis Ongkir, Harga Terbaik.",
  keywords: [
    "parfum original",
    "parfum premium",
    "parfum murah",
    "parfum wanita",
    "parfum pria",
    "tokoh parfum online",
    "jual parfum",
    "Chelsea Dewa Store Parfume",
    "parfum berkualitas",
    "aroma parfum"
  ],
  authors: [{ name: "Chelsea Dewa Store Parfume" }],
  creator: "Chelsea Dewa Store Parfume",
  publisher: "Chelsea Dewa Store Parfume",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chelsea-dewa-perfume.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://chelsea-dewa-perfume.com',
    title: 'Chelsea Dewa Store Parfume - Temukan Aroma Khas Anda',
    description: 'Koleksi parfum pilihan dengan kualitas premium. Sentuhan elegan untuk setiap momen.',
    siteName: 'Chelsea Dewa Store Parfume',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chelsea Dewa Store Parfume - Koleksi Parfum Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chelsea Dewa Store Parfume - Temukan Aroma Khas Anda',
    description: 'Koleksi parfum pilihan dengan kualitas premium. Sentuhan elegan untuk setiap momen.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <StructuredData type="organization" />
        <StructuredData type="website" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
