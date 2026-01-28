import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { Search, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Produk - Chelsea Dewa Perfume",
  description: "Lihat koleksi parfum premium kami. Temukan aroma yang sempurna untuk setiap momen.",
  openGraph: {
    title: "Produk - Chelsea Dewa Perfume",
    description: "Lihat koleksi parfum premium kami. Temukan aroma yang sempurna untuk setiap momen.",
    url: "https://chelsea-dewa-perfume.com/products",
    type: "website",
  },
};

const allProducts = [
  {
    id: 1,
    name: "Chelsea Dewa Premium",
    slug: "chelsea-dewa-premium",
    price: 250000,
    category: "Floral",
    image: "/images/products/chelsea-dewa-premium.jpg",
    description: "Parfum premium dengan aroma floral yang elegan"
  },
  {
    id: 2,
    name: "Elegant Floral",
    slug: "elegant-floral",
    price: 180000,
    category: "Floral",
    image: "/images/products/elegant-floral.jpg",
    description: "Aroma floral yang lembut dan feminin"
  },
  {
    id: 3,
    name: "Woody Masculine",
    slug: "woody-masculine",
    price: 220000,
    category: "Woody",
    image: "/images/products/woody-masculine.jpg",
    description: "Aroma woody yang maskulin dan tegas"
  },
  {
    id: 4,
    name: "Fresh Citrus",
    slug: "fresh-citrus",
    price: 150000,
    category: "Citrus",
    image: "/images/products/fresh-citrus.jpg",
    description: "Aroma citrus yang segar dan energik"
  },
  {
    id: 5,
    name: "Oriental Spice",
    slug: "oriental-spice",
    price: 280000,
    category: "Oriental",
    image: "/images/products/oriental-spice.jpg",
    description: "Aroma oriental yang eksotis dan misterius"
  },
  {
    id: 6,
    name: "Sweet Vanilla",
    slug: "sweet-vanilla",
    price: 165000,
    category: "Sweet",
    image: "/images/products/sweet-vanilla.jpg",
    description: "Aroma vanilla yang manis dan comforting"
  },
  {
    id: 7,
    name: "Ocean Breeze",
    slug: "ocean-breeze",
    price: 195000,
    category: "Fresh",
    image: "/images/products/ocean-breeze.jpg",
    description: "Aroma segar seperti angin laut"
  },
  {
    id: 8,
    name: "Midnight Rose",
    slug: "midnight-rose",
    price: 320000,
    category: "Floral",
    image: "/images/products/midnight-rose.jpg",
    description: "Aroma mawar yang misterius dan elegan"
  }
];

const categories = ["Semua", "Floral", "Woody", "Citrus", "Oriental", "Sweet", "Fresh"];

export default function ProductsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Koleksi Parfum</h1>
          <p className="text-muted text-lg">Temukan aroma yang sempurna untuk setiap momen</p>
        </div>

        {/* Search and Filter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
            <input
              type="text"
              placeholder="Cari parfum..."
              className="w-full pl-10 pr-4 py-3 border border-#d4d4d4 rounded-lg focus:outline-none focus:ring-2 focus:ring-#d4af37 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
            <select className="w-full pl-10 pr-4 py-3 border border-#d4d4d4 rounded-lg focus:outline-none focus:ring-2 focus:ring-#d4af37 focus:border-transparent appearance-none">
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-#d4af37 text-#d4af37 rounded-lg hover:bg-#d4af37ba transition-colors font-medium">
            Muat Lebih Banyak
          </button>
        </div>
      </div>
    </div>
  );
}
