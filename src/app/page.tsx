import type { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";
import Features from "@/components/Features";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SocialButtons from "@/components/SocialButtons";
import { Store, MessageCircle } from "lucide-react";

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
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* Bestseller Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="text-sm font-semibold text-[#d4af37] mb-2">Bestseller</div>
              <h2 className="text-4xl font-bold mb-0 text-gray-900">Produk Terlaris</h2>
            </div>
            <a href="/products" className="text-[#d4af37] hover:text-[#f0d785] font-medium transition-colors">Lihat semua</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div 
            className="p-8 rounded-2xl shadow-xl" 
            style={{
              background: "linear-gradient(135deg, #111111 0%, #000000 100%)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-3">Promo Spesial</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Diskon hingga 30% untuk koleksi pilihan. Waktu terbatas!
                </p>
              </div>
              <div className="lg:text-end mt-6 lg:mt-0">
                <SocialButtons 
                  size="md"
                  layout="vertical"
                  shopeeText="Beli di Shopee"
                  whatsappText="Chat WhatsApp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </div>
  );
}
