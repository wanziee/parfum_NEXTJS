'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from "@/components/ProductCard";
import { Search, Filter } from "lucide-react";

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
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const productsPerPage = 12; // 12 products per page, but we only have 8 total products

  useEffect(() => {
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
    }
  }, [searchParams]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
      setIsLoading(false);
      // Smooth scroll to bottom of new products
      setTimeout(() => {
        const productsGrid = document.getElementById('products-grid');
        if (productsGrid) {
          const newProducts = productsGrid.lastElementChild;
          if (newProducts) {
            newProducts.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }, 100);
    }, 300);
  };

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Calculate products to show
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const hasMoreProducts = currentPage < totalPages && filteredProducts.length > productsPerPage;

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-#d4d4d4 rounded-lg focus:outline-none focus:ring-2 focus:ring-#d4af37 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-#d4d4d4 rounded-lg focus:outline-none focus:ring-2 focus:ring-#d4af37 focus:border-transparent appearance-none"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        {filteredProducts.length !== allProducts.length && (
          <div className="mb-6 text-center">
            <p className="text-muted">
              Menampilkan <span className="font-semibold text-[#d4af37]">{currentProducts.length}</span> dari <span className="font-semibold text-[#d4af37]">{filteredProducts.length}</span> produk
              {searchTerm && ` untuk "${searchTerm}"`}
              {selectedCategory !== 'Semua' && ` dalam kategori "${selectedCategory}"`}
            </p>
          </div>
        )}

        {/* Products Grid */}
        {currentProducts.length > 0 ? (
          <div id="products-grid" className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tidak Ada Produk Ditemukan</h3>
            <p className="text-muted mb-4">
              {searchTerm && selectedCategory !== 'Semua'
                ? `Tidak ada produk yang cocok dengan pencarian "${searchTerm}" dalam kategori "${selectedCategory}"`
                : searchTerm
                ? `Tidak ada produk yang cocok dengan pencarian "${searchTerm}"`
                : `Tidak ada produk dalam kategori "${selectedCategory}"`}
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Semua');
              }}
              className="inline-flex items-center justify-center px-6 py-2 bg-[#d4af37] text-white rounded-lg hover:bg-[#d4af37]/90 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Load More Button - Only show if there are more products */}
        {hasMoreProducts && (
          <div className="text-center mt-12">
            <button 
              onClick={handleLoadMore}
              disabled={isLoading}
              className="inline-flex items-center justify-center px-6 py-3 border border-#d4af37 text-#d4af37 rounded-lg hover:bg-#d4af37ba transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-#d4af37 border-t-transparent rounded-full animate-spin mr-2"></div>
                  Memuat...
                </>
              ) : (
                <>
                  Muat Lebih Banyak ({filteredProducts.length - indexOfLastProduct} tersisa)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
