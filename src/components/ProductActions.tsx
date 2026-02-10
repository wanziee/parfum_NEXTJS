'use client';

import { ShoppingBag, MessageCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductActionsProps {
  productName: string;
  price: string;
  productData?: {
    id: number;
    name: string;
    slug: string;
    price: number;
    category?: string;
    image?: string;
    size: string;
    prices?: { [key: string]: number };
    availability?: { [key: string]: boolean };
  };
  className?: string;
}

export default function ProductActions({ productName, price, productData, className = "" }: ProductActionsProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (productData) {
      addItem({
        id: productData.id,
        name: productData.name,
        slug: productData.slug,
        price: productData.price,
        category: productData.category,
        image: productData.image,
        size: productData.size,
        prices: productData.prices,
        availability: productData.availability
      });
    }
  };

  const isSizeAvailable = productData?.availability?.[productData?.size] ?? true;

  const handleShopeeClick = () => {
    window.open('https://shopee.co.id', '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = `*Chelsea Dewa Store Parfume*\n\nHalo Kak, saya tertarik dengan produk:\n\nProduk: ${productName}\nHarga: ${price} (belum termasuk ongkir)\n\nMohon informasikan ketersediaan stok dan detail produknya. Terima kasih!`;
    const whatsappUrl = `https://wa.me/6282162724324?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Add to Cart Button */}
      {productData && (
        <button 
          onClick={handleAddToCart}
          disabled={!isSizeAvailable}
          className={`w-full py-3 lg:py-4 font-medium flex items-center justify-center gap-2 lg:gap-3 text-xs lg:text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 rounded-xl ${
            isSizeAvailable 
              ? "bg-[#d4af37] text-white hover:bg-[#c9a037]" 
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
          <span>{isSizeAvailable ? "Tambah ke Keranjang" : "Ukuran Tidak Tersedia"}</span>
        </button>
      )}
      
      {/* Checkout Buttons */}
      <div className="grid grid-cols-2 gap-3 lg:gap-4">
        <button 
          className="py-3 lg:py-4 bg-[#EE4D2D] text-white rounded-xl hover:bg-[#D63031] transition-all duration-300 font-medium flex items-center justify-center gap-2 lg:gap-3 text-xs lg:text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          onClick={handleShopeeClick}
        >
          <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
          <span className="hidden sm:inline">Checkout via Shopee</span>
          <span className="sm:hidden">Shopee</span>
        </button>
        <button 
          className="py-3 lg:py-4 bg-[#25D366] text-white rounded-xl hover:bg-[#128C7E] transition-all duration-300 font-medium flex items-center justify-center gap-2 lg:gap-3 text-xs lg:text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" />
          <span className="hidden sm:inline">Checkout via Whatsapp</span>
          <span className="sm:hidden">WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
