'use client';

import { ShoppingBag, MessageCircle } from 'lucide-react';

interface ProductActionsProps {
  productName: string;
  price: string;
  className?: string;
}

export default function ProductActions({ productName, price, className = "" }: ProductActionsProps) {
  const handleShopeeClick = () => {
    window.open('https://shopee.co.id', '_blank');
  };

  const handleWhatsAppClick = () => {
    const message = `*Chelsea Dewa Perfume*\n\nHalo Kak, saya tertarik dengan produk:\n\nProduk: ${productName}\nHarga: ${price}\n\nMohon informasikan ketersediaan stok dan detail produknya. Terima kasih!`;
    const whatsappUrl = `https://wa.me/6282162724324?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`grid grid-cols-2 gap-3 lg:gap-4 ${className}`}>
      <button 
        className="py-3 lg:py-4 bg-[#EE4D2D] text-white rounded-xl hover:bg-[#D63031] transition-all duration-300 font-medium flex items-center justify-center gap-2 lg:gap-3 text-xs lg:text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        onClick={handleShopeeClick}
      >
        <ShoppingBag className="w-4 h-4 lg:w-5 lg:h-5" />
        <span className="hidden sm:inline">Shopee</span>
        <span className="sm:hidden">Shop</span>
      </button>
      <button 
        className="py-3 lg:py-4 bg-[#25D366] text-white rounded-xl hover:bg-[#128C7E] transition-all duration-300 font-medium flex items-center justify-center gap-2 lg:gap-3 text-xs lg:text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        onClick={handleWhatsAppClick}
      >
        <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
        <span className="sm:hidden">WA</span>
      </button>
    </div>
  );
}
