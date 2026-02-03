import type { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";
import Features from "@/components/Features";
import ProductCard from "@/components/ProductCard";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SocialButtons from "@/components/SocialButtons";
import { Store, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Chelsea Dewa Perfume - Temukan Aroma Khas Anda",
  description: "Koleksi parfum pilihan dengan kualitas premium. Sentuhan elegan untuk setiap momen. 100% Original, Gratis Ongkir, Harga Terbaik.",
  openGraph: {
    title: "Chelsea Dewa Perfume - Temukan Aroma Khas Anda",
    description: "Koleksi parfum pilihan dengan kualitas premium. Sentuhan elegan untuk setiap momen.",
    url: "https://chelsea-dewa-perfume.com",
    type: "website",
  },
};

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "Chelsea Dewa Premium",
    slug: "chelsea-dewa-premium",
    price: 250000,
    category: "Floral",
    image: "/images/products/chelsea-dewa-premium.jpg"
  },
  {
    id: 2,
    name: "Elegant Floral",
    slug: "elegant-floral",
    price: 180000,
    category: "Floral",
    image: "/images/products/elegant-floral.jpg"
  },
  {
    id: 3,
    name: "Woody Masculine",
    slug: "woody-masculine",
    price: 220000,
    category: "Woody",
    image: "/images/products/woody-masculine.jpg"
  },
  {
    id: 4,
    name: "Fresh Citrus",
    slug: "fresh-citrus",
    price: 150000,
    category: "Citrus",
    image: "/images/products/fresh-citrus.jpg"
  },
  {
    id: 5,
    name: "Oriental Spice",
    slug: "oriental-spice",
    price: 280000,
    category: "Oriental",
    image: "/images/products/oriental-spice.jpg"
  },
  {
    id: 6,
    name: "Sweet Vanilla",
    slug: "sweet-vanilla",
    price: 165000,
    category: "Sweet",
    image: "/images/products/sweet-vanilla.jpg"
  },
  {
    id: 7,
    name: "Ocean Breeze",
    slug: "ocean-breeze",
    price: 195000,
    category: "Fresh",
    image: "/images/products/ocean-breeze.jpg"
  },
  {
    id: 8,
    name: "Midnight Rose",
    slug: "midnight-rose",
    price: 320000,
    category: "Floral",
    image: "/images/products/midnight-rose.jpg"
  }
];

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

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <div className="text-sm font-semibold text-[#d4af37] mb-2">Featured</div>
              <h2 className="text-4xl font-bold mb-0 text-gray-900">Produk</h2>
            </div>
            <a href="/products" className="text-[#d4af37] hover:text-[#f0d785] font-medium transition-colors">Lihat semua</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
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

      {/* Contact */}
      <Contact />
    </div>
  );
}
