'use client';

import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';

export default function CartButton() {
  const { getTotalItems, setIsOpen } = useCart();
  const totalItems = getTotalItems();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="group relative p-2.5 text-gray-600 hover:text-[#d4af37] transition-all duration-300 hover:scale-105 transform"
      title="Keranjang Belanja"
    >
      <div className="relative">
        <ShoppingCart className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
        
        {/* Badge untuk jumlah item */}
        {totalItems > 0 && (
          <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-[#d4af37] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-md">
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </div>
      
      {/* Hover effect ring */}
      <div className="absolute inset-0 bg-[#d4af37]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
    </button>
  );
}
