'use client';

import { Eye, ShoppingCart } from 'lucide-react';
import ProductImage from './ProductImage';
import { useCart } from '@/contexts/CartContext';
import { getDefaultPrices } from '@/data/products';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  category?: string;
  image?: string;
  isBestseller?: boolean;
  availability?: { [key: string]: boolean };
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
    // Default size dan harga untuk produk dari halaman utama/products list
    const defaultSize = "35ml";
    const defaultPrices = getDefaultPrices(product.slug);
    const defaultPrice = defaultPrices[defaultSize] || product.price;
    
    addItem({
      ...product,
      size: defaultSize,
      price: defaultPrice,
      prices: defaultPrices,
      availability: product.availability
    });
  };

  return (
    <div className="product-card h-full flex flex-col bg-white border border-[#d4af37]/20 rounded-xl shadow-sm transition-all duration-300 sm:hover:shadow-xl sm:hover:-translate-y-1 sm:hover:border-[#d4af37]/40 relative">
      {/* Bestseller Badge */}
      {product.isBestseller && (
        <div className="absolute top-0 left-0 z-10 bg-linear-to-r from-black to-transparent text-white text-xs px-2 py-1 opacity-60 font-semibold rounded-tl-xl">
          Bestseller
        </div>
      )}
      
      <ProductImage
        src={product.image}
        alt={product.name}
        className="product-media mb-3 sm:mb-4 rounded-t-xl overflow-hidden "
      />
      
      <div className="flex-1 flex px-3 sm:px-3 pb-3 flex-col">
        <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-1 text-gray-900 line-clamp-2 leading-snug">{product.name}</h3>
        <div className="text-xs sm:text-xs text-gray-500 mb-2">{product.category || 'Parfum'}</div>
        <div className="text-base sm:text-lg lg:text-xl font-bold text-[#d4af37] mb-3">{formatPrice(product.price)}</div>
        
        {/* Mobile & Desktop: Side-by-side buttons */}
        <div className="mt-auto flex gap-2">
          <a
            href={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center px-2 py-2 border border-[#d4af37] text-[#d4af37] rounded-lg sm:hover:bg-[#d4af37]/10 sm:hover:border-[#d4af37]/80 sm:hover:text-[#d4af37]/90 transition-all duration-300 text-xs sm:text-sm font-medium group"
          >
            <span className="hidden xs:inline sm:inline"> Lihat Detail</span>
            <span className="xs:hidden sm:hidden">Lihat Detail</span>
          </a>
          <button
            onClick={handleAddToCart}
            className="w-8 h-8 sm:w-12 sm:h-auto inline-flex items-center justify-center px-2 py-2 sm:px-4 sm:py-2.5 bg-linear-to-r from-[#d4af37] to-[#c9a037] text-white rounded-lg sm:hover:from-[#c9a037] sm:hover:to-[#b89635] transition-all duration-300 text-xs sm:text-sm font-semibold shadow-md sm:hover:shadow-lg sm:hover:scale-105 group"
            title="Tambah ke Keranjang"
          >
            <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 sm:group-hover:scale-110 transition-transform" />
            <span className="hidden sm:hidden ml-1">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}
