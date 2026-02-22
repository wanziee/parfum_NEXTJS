'use client';

import { useState } from 'react';
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mb-12">
          <div 
            className="relative overflow-hidden shadow-2xl "
            style={{
              backgroundImage: "url('/images/promo-banner2.jpg'), linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
              backgroundSize: "cover, cover",
              backgroundPosition: "center, center",
              minHeight: "320px",
            }}
          >
            {/* Professional Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-800/75 to-slate-900/90"></div>
            
            <div className="relative z-10 p-8 md:p-16 h-full flex items-center">
              <div className="w-full max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  {/* Left Side - Main Content */}
                  <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
                    {/* Main Offer */}
                    <div className="space-y-2">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        BELI 35ml
                      </h1>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#d4af37] leading-tight">
                        GRATIS 10ml
                      </h1>
                      <div className="mt-4">
                        <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                          HANYA 99K
                        </p>
                      </div>
                    </div>
                    
                    {/* Simple Note */}
                    <p className="text-lg text-white/90 font-medium">
                      Promo Special Valentine & Imlek
                    </p>
                  </div>
                  
                  {/* Right Side - Simple Info */}
                  <div className="w-full lg:w-2/5">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                      <p className="text-white text-lg mb-2">Promo spesial untuk semua pembelian produk 35ml (termasuk best seller)</p>
                      <p className="text-[#d4af37] text-2xl font-bold">35ml + 10ml</p>
                      <p className="text-white text-xl mt-2">Rp 99.000</p>
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <p className="text-white/80 text-xs">✨ Berlaku untuk semua varian parfum</p>
                        <p className="text-white/80 text-xs">🎉 Periode promo Valentine & Imlek</p>
                        <p className="text-white/80 text-xs">📱 Follow semua sosial media kami</p>
                        <p className="text-white/80 text-xs">📸 Kirim bukti follow saat order via WA</p>
                        <p className="text-white/60 text-xs mt-2 italic">*Konfirmasi dengan admin untuk detail promo saat pembelian produk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="container mx-auto px-4 pb-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Produk CA24
          </h1>
          <p className="text-gray-600 text-lg">
            Koleksi parfum premium pilihan
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
