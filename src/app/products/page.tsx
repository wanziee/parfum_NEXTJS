'use client';

import { useState } from 'react';
import ProductCard from "@/components/ProductCard";

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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Semua Produk
          </h1>
          <p className="text-gray-600 text-lg">
            Koleksi parfum premium pilihan
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
