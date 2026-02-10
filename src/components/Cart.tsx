'use client';

import { useCart } from '@/contexts/CartContext';
import { X, Plus, Minus, ShoppingBag, MessageCircle, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Cart() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    updateSize,
    clearCart, 
    getTotalItems, 
    getTotalPrice, 
    isOpen, 
    setIsOpen 
  } = useCart();

  // Cleanup body scroll on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, []);

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  const handleWhatsAppCheckout = () => {
    // Check jika ada item yang tidak tersedia
    const hasUnavailableItems = items.some(item => {
      return item.prices && Object.keys(item.prices).some(size => {
        return size === item.size && !(item.availability?.[size] ?? true);
      });
    });

    if (hasUnavailableItems) {
      alert('Tidak dapat checkout. Ada item dengan ukuran yang tidak tersedia di keranjang. Silakan perbarui ukuran item tersebut terlebih dahulu.');
      return;
    }

    const phoneNumber = '6282162724324'; // +62 821-6272-4324
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Check jika ada item yang tidak tersedia untuk disable checkout
  const hasCartIssues = items.some(item => {
    return item.prices && Object.keys(item.prices).some(size => {
      return size === item.size && !(item.availability?.[size] ?? true);
    });
  });

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return '';

    let message = '*Chelsea Dewa Store Parfume - Order Parfum*\n\n';
    message += 'Halo Kak, saya ingin melakukan pemesanan produk berikut:\n\n';

    items.forEach((item, index) => {
      message += `*Produk ${index + 1}*\n`;
      message += `Nama: ${item.name}\n`;
      message += `Ukuran: ${item.size}\n`;
      message += `Harga: Rp ${item.price.toLocaleString('id-ID')} (belum termasuk ongkir)\n`;
      message += `Jumlah: ${item.quantity} pcs\n`;
      message += `Subtotal: Rp ${(item.price * item.quantity).toLocaleString('id-ID')}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `*Total Pembayaran: Rp ${getTotalPrice().toLocaleString('id-ID')} (belum termasuk ongkir)*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `Mohon informasikan:\n`;
    message += `• Ketersediaan stok produk\n`;
    message += `• Metode pembayaran yang tersedia\n`;
    message += `• Estimasi pengiriman\n\n`;
    message += `Terima kasih Kak\n`;
    message += `*Chelsea Dewa Store Parfume*`;

    return message;
  };

  if (!isOpen) return null;

  // Prevent body scroll when cart is open
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden';
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => {
          setIsOpen(false);
          // Restore body scroll when cart is closed
          if (typeof window !== 'undefined') {
            document.body.style.overflow = '';
          }
        }}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
        {/* Header */}
        <div className="bg-[#d4af37] text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6" />
              <div>
                <h2 className="text-xl font-bold">Keranjang Belanja</h2>
                <p className="text-sm opacity-90">{getTotalItems()} item</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                // Restore body scroll when cart is closed
                if (typeof window !== 'undefined') {
                  document.body.style.overflow = '';
                }
              }}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Keranjang Kosong</h3>
              <p className="text-gray-500 mb-6 text-center px-4">Belum ada produk yang ditambahkan</p>
              <button
                onClick={() => {
                  setIsOpen(false);
                  // Restore body scroll when cart is closed
                  if (typeof window !== 'undefined') {
                    document.body.style.overflow = '';
                  }
                }}
                className="px-6 py-2 bg-[#d4af37] text-white rounded-lg hover:bg-[#d4af37]/90 transition-colors"
              >
                Lanjut Belanja
              </button>
            </div>
          ) : (
            <div className="p-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-30 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                      
                      {/* Size Selector */}
                      <div className="mb-3">
                        <p className="text-xs text-gray-600 mb-1">Ukuran:</p>
                        <div className="flex gap-1">
                          {item.prices && Object.keys(item.prices).map((size) => {
                            const isSizeAvailable = item.availability?.[size] ?? true;
                            return (
                              <button
                                key={size}
                                onClick={() => isSizeAvailable && updateSize(item.id, size)}
                                disabled={!isSizeAvailable}
                                className={`px-2 py-1 rounded text-xs font-medium transition-all duration-200 ${
                                  item.size === size
                                    ? "bg-[#d4af37] text-white"
                                    : isSizeAvailable
                                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    : "bg-gray-50 text-gray-400 cursor-not-allowed"
                                }`}
                              >
                                {size}
                              </button>
                            );
                          })}
                        </div>
 
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#d4af37]">{formatPrice(item.price)}</span>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            {/* Total */}
            <div className="flex justify-between items-start">
              <div>
                <span className="text-lg font-semibold text-gray-900">Total:</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-[#d4af37]">{formatPrice(getTotalPrice())}</span>
                <p className="text-xs text-gray-500 mt-1 italic">(belum termasuk ongkir)</p>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleWhatsAppCheckout}
              disabled={hasCartIssues}
              className={`w-full py-3 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 rounded-xl flex items-center justify-center gap-2 ${
                hasCartIssues
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600"
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              {hasCartIssues ? "Perbaiki Ukuran Terlebih Dahulu" : "Checkout via WhatsApp"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
