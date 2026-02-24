'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductActionsProps {
  productName: string;
  price: string;
  shopeeLink?: string;
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

export default function ProductActions({ productName, price, shopeeLink, productData, className = "" }: ProductActionsProps) {
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
    if (shopeeLink) {
      window.open(shopeeLink, '_blank');
    }
    // If shopeeLink is empty, do nothing
  };

  const handleWhatsAppClick = () => {
    const message = `*Chelsea Dewa Store Parfume*\n\n🎉 PROMO RAMADHAN SPESIAL 🎉\n🔥 HARGA NORMAL 120K + 10ML PARFUME EXTRA + PAPER BAG CANTIK + TASBIH DIGITAL 🔥\n\nHalo Kak, saya tertarik dengan produk:\n\nProduk: ${productName}\nHarga: ${price} (belum termasuk ongkir)\n\n🎁 *INFO PROMO RAMADHAN:* 🎁\n• Setiap pembelian produk 35ml dapat gratis 10ml parfume extra\n• Gratis paper bag cantik\n• Bonus tasbih digital\n• Harga normal: Rp 120.000\n• Berlaku untuk semua varian parfum\n• Periode promo Ramadhan\n• Gratis ongkir minimal pembelian tertentu\n\nMohon informasikan ketersediaan stok, konfirmasi promo, dan detail produknya. Terima kasih!`;
    const whatsappUrl = `https://wa.me/6282162724324?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`space-y-3 ${className}`}>

      
      {/* Checkout Buttons */}
      <div className="grid grid-cols-2 gap-3 lg:gap-4">
        <button 
          className={`py-3 lg:py-4 text-white rounded-xl transition-all duration-300 font-medium flex items-center justify-center gap-2 lg:gap-3 text-xs lg:text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
            shopeeLink 
              ? "bg-[#EE4D2D] hover:bg-[#D63031]" 
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={handleShopeeClick}
          disabled={!shopeeLink}
        >
          <div className="w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center">
            <img 
              src="/images/icons/shopee.png" 
              alt="Shopee" 
              width={20} 
              height={20}
              className="w-full h-full object-contain"
              onError={(e) => console.error('Shopee icon failed to load')}
              onLoad={() => console.log('Shopee icon loaded successfully')}
            />
          </div>
          <span className="hidden sm:inline">Checkout via Shopee</span>
          <span className="sm:hidden">Checkout via Shopee</span>
        </button>
        <button 
          className="py-3 lg:py-4 bg-[#25D366] text-white rounded-xl hover:bg-[#128C7E] transition-all duration-300 font-medium flex items-center justify-center gap-2 lg:gap-3 text-xs lg:text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          onClick={handleWhatsAppClick}
        >
          <div className="w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center">
            <img 
              src="/images/icons/whatsapp.png" 
              alt="WhatsApp" 
              width={20} 
              height={20}
              className="w-full h-full object-contain"
              onError={(e) => console.error('WhatsApp icon failed to load')}
              onLoad={() => console.log('WhatsApp icon loaded successfully')}
            />
          </div>
          <span className="hidden sm:inline">Checkout via Whatsapp</span>
          <span className="sm:hidden">Checkout via WhatsApp</span>
        </button>

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
      </div>
    </div>
  );
}
