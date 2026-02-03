'use client';

import { Eye, ShoppingCart } from 'lucide-react';
import ProductImage from './ProductImage';
import { useCart } from '@/contexts/CartContext';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  category?: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  
  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="product-card p-3 sm:p-4 h-full flex flex-col bg-white border border-[#d4af37]/20 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40">
      <ProductImage
        src={product.image}
        alt={product.name}
        className="product-media mb-3 sm:mb-4 rounded-xl overflow-hidden shadow-md"
      />
      
      <div className="flex-1 flex flex-col">
        <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-2 text-gray-900 line-clamp-2 leading-snug">{product.name}</h3>
        <div className="text-xs sm:text-sm text-gray-500 mb-3">{product.category || 'Parfum'}</div>
        <div className="text-base sm:text-lg lg:text-xl font-bold text-[#d4af37] mb-4">{formatPrice(product.price)}</div>
        
        {/* Mobile: Stack buttons vertically */}
        <div className="mt-auto space-y-2 sm:space-y-0 sm:flex sm:gap-2">
          <a
            href={`/products/${product.slug}`}
            className="w-full sm:flex-2 inline-flex items-center justify-center px-3 sm:px-4 py-2.5 border border-[#d4af37] text-[#d4af37] rounded-lg hover:bg-[#d4af37]/10 hover:border-[#d4af37]/80 hover:text-[#d4af37]/90 transition-all duration-300 text-sm font-medium group"
          >
            <Eye className="w-4 h-4 mr-1 sm:mr-2 group-hover:scale-110 transition-transform shrink-0" />
            <span className="hidden sm:inline"> Lihat Detail</span>
            <span className="sm:hidden">Lihat Detail</span>
          </a>
          <button
            onClick={handleAddToCart}
            className="w-full sm:w-auto sm:aspect-square inline-flex items-center justify-center px-4 py-2.5 bg-linear-to-r from-[#d4af37] to-[#c9a037] text-white rounded-lg hover:from-[#c9a037] hover:to-[#b89635] transition-all duration-300 text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 group"
            title="Tambah ke Keranjang"
          >
            <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="sm:hidden ml-2">Keranjang</span>
          </button>
        </div>
      </div>
    </div>
  );
}
