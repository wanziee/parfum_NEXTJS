'use client';

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { ArrowLeft, Plus, Minus, Trash2, User, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    updateSize,
    clearCart, 
    getTotalItems, 
    getTotalPrice 
  } = useCart();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) newErrors.name = 'Nama harus diisi';
    if (!formData.email.trim()) newErrors.email = 'Email harus diisi';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email tidak valid';
    if (!formData.phone.trim()) newErrors.phone = 'Nomor HP harus diisi';
    if (!formData.address.trim()) newErrors.address = 'Alamat harus diisi';
    if (!formData.city.trim()) newErrors.city = 'Kota harus diisi';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Kode pos harus diisi';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleWhatsAppCheckout = () => {
    if (!validateForm()) return;

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

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return '';

    let message = '*Chelsea Dewa Store Parfume - Order Parfum*\n\n';
    // message += 'PROMO SPESIAL VALENTINE & IMLEK 🎉\n';
    // message += 'BELI 35ml GRATIS 10ml HANYA 99K 🔥\n\n';
    
    message += '*DATA PEMESAN:*\n';
    message += `Nama: ${formData.name}\n`;
    message += `Email: ${formData.email}\n`;
    message += `No. HP: ${formData.phone}\n`;
    message += `Alamat: ${formData.address}, ${formData.city} ${formData.postalCode}\n\n`;
    
    message += '*DATA PESANAN:*\n';
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
    
    // message += `🎁 *INFO PROMO BERLAKU:* 🎁\n`;
    // message += `• Setiap pembelian produk 35ml dapat gratis 10ml\n`;
    // message += `• Harga khusus promo: Rp 99.000\n`;
    // message += `• Berlaku untuk semua varian parfum\n`;
    // message += `• Periode promo: Valentine & Imlek\n`;
    // message += `• Gratis ongkir minimal pembelian tertentu (tanyakan ke admin)\n\n`;
    
    // message += `📱 *SYARAT PROMO:* 📱\n`;
    // message += `• Follow semua sosial media kami\n`;
    // message += `• Kirim bukti follow saat order via WA\n\n`;
    
    message += `Mohon informasikan:\n`;
    message += `• Ketersediaan stok produk\n`;
    message += `• Konfirmasi promo yang berlaku\n`;
    message += `• Metode pembayaran yang tersedia\n`;
    message += `• Estimasi pengiriman\n\n`;
    message += `Terima kasih Kak\n`;
    message += `*Chelsea Dewa Store Parfume*`;

    return message;
  };

  // Check jika ada item yang tidak tersedia untuk disable checkout
  const hasCartIssues = items.some(item => {
    return item.prices && Object.keys(item.prices).some(size => {
      return size === item.size && !(item.availability?.[size] ?? true);
    });
  });

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Keranjang Kosong</h1>
              <p className="text-gray-600 mb-6">Belum ada produk yang ditambahkan ke keranjang</p>
              <Link 
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4af37] text-white! rounded-lg hover:bg-[#c9a037] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Lanjut Belanja
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Produk
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Keranjang Belanja</h1>
            <p className="text-gray-600 mt-2">{getTotalItems()} item di keranjang</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Produk yang Dipesan</h2>
                
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-xl p-4 relative">
                      {/* Remove Button - Top Right */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="absolute top-2 right-2 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      
                      <div className="flex gap-4 pr-8">
                        {/* Product Image */}
                        <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden shrink-0">
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Data Pemesan</h2>
                
                <form className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                      <User className="w-4 h-4" />
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Masukkan nama lengkap"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                      <Mail className="w-4 h-4" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                      <Phone className="w-4 h-4" />
                      Nomor HP
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="08xxxxxxxxxx"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                      <MapPin className="w-4 h-4" />
                      Alamat Lengkap
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent ${
                        errors.address ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Jl. Contoh No. 123, RT/RW 001/002"
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>

                  {/* City & Postal Code */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Kota</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent ${
                          errors.city ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="BSD"
                      />
                      {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Kode Pos</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent ${
                          errors.postalCode ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="12345"
                      />
                      {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
                    </div>
                  </div>
                </form>

                {/* Total */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-900">Total:</span>
                    <span className="text-2xl font-bold text-[#d4af37]">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <p className="text-xs text-gray-500 text-center mb-4 italic">(belum termasuk ongkir)</p>
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

                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="w-full mt-3 py-2 text-sm text-red-600 hover:text-red-700 transition-colors"
                >
                  Kosongkan Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
