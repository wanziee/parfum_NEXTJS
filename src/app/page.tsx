import type { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";
import Features from "@/components/Features";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SocialButtons from "@/components/SocialButtons";
import { Store, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chelsea Dewa Store Parfume - Temukan Aroma Khas Anda",
  description: "Koleksi parfum pilihan dengan kualitas premium. Sentuhan elegan untuk setiap momen. 100% Original, Gratis Ongkir, Harga Terbaik.",
  openGraph: {
    title: "Chelsea Dewa Store Parfume - Temukan Aroma Khas Anda",
    description: "Koleksi parfum pilihan dengan kualitas premium. Sentuhan elegan untuk setiap momen.",
    url: "https://chelsea-dewa-perfume.com",
    type: "website",
  },
};

import { featuredProducts } from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero / Banner */}
      <section className="bg-linear-to-t from-[rgba(212,175,55,0.18)] via-[rgba(212,175,55,0.05)] to-transparent text-gray-900 py-16 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <HeroCarousel />
            </div>
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">Temukan Aroma Khas Anda</h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Koleksi parfum pilihan dengan kualitas premium. Sentuhan elegan untuk setiap momen, tanpa berlebihan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <SocialButtons 
                  size="md"
                  layout="horizontal"
                  shopeeText="Beli di Shopee"
                  whatsappText="Chat WhatsApp"
                  tiktokText="Beli di TikTok"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* Promo Banner */}
      <section className="py-3">
        <div className="container mx-auto px-4">
          <div className="bg-[#d4af37]/5 rounded-xl p-5 border border-[#d4af37]/15">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Promo Ramadhan Spesial</h3>
                </div>
                <p className="text-sm flex items-center justify-center sm:justify-start text-gray-600 mb-1">
<span className="font-semibold mr-1">
  35ml + 10ml extra
</span>
+
<span className="font-semibold mx-1">
  paper bag + tasbih digital
</span>
hanya
<span className="font-bold text-[#d4af37] ml-1">
  120rb
</span>

                </p>
                <p className="flex items-center justify-center sm:justify-start text-xs text-gray-500">Syarat: Follow social media kami</p>
              </div>
              
              <Link
                href="/products"
                className="bg-[#d4af37] hover:bg-[#c9a037] text-white! px-5 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 whitespace-nowrap w-full sm:w-auto text-center"
              >
                Dapatkan Promo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bestseller Products */}
      <section className="py-16">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-end mb-4 sm:mb-6 lg:mb-8">
      <div>
        <div className="text-xs sm:text-sm font-semibold text-[#d4af37] mb-2">
          Bestseller
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-0 text-gray-900">
          Produk Terlaris
        </h2>
      </div>

      <a
        href="/products"
        className="text-xs sm:text-sm md:text-base text-[#d4af37] hover:text-[#f0d785] font-medium transition-colors"
      >
        Lihat semua
      </a>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
</section>


      {/* FAQ */}
      <FAQ />
    </div>
  );
}
