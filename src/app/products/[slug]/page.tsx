'use client';

import { ArrowLeft, ShoppingCart, Heart, Share2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import ProductImageWithError from "@/components/ProductImageWithError";
import ProductActions from "@/components/ProductActions";
import { products, Product, isAvailable } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const [selectedSize, setSelectedSize] = useState<string>("35ml");
  const { slug } = use(params);
  const router = useRouter();
  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    if (!product) {
      router.push('/products');
    }
  }, [product, router]);

  // Fallback ke size yang tersedia jika selected size tidak tersedia
  useEffect(() => {
    if (product && !isAvailable(product, selectedSize)) {
      const availableSize = product.size.find(size => isAvailable(product, size));
      if (availableSize) {
        setSelectedSize(availableSize);
      }
    }
  }, [product, selectedSize]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p>Produk tidak ditemukan...</p>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

  const currentPrice = product.prices?.[selectedSize] || product.price;
  const originalPrice = product.originalPrices?.[selectedSize];
  const hasDiscount = product.hasDiscount?.[selectedSize] || false;

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Breadcrumb */}
        <div className="px-4 pt-4 pb-2 hidden md:block">
          <nav className="mb-4">
            <Link href="/products" className="text-gray-600 hover:text-black flex items-center gap-2 text-sm">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Produk
            </Link>
          </nav>
        </div>

        {/* Full-width Product Image */}
        <div className="relative">
          <div className="aspect-3/4 bg-linear-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(212, 175, 55, 0.03) 10px,
                  transparent 10px,
                  rgba(212, 175, 55, 0.03) 10px,
                  transparent 20px
                )`,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            <ProductImageWithError
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Centered Product Details */}
        <div className="px-4 py-6">
          <div className="max-w-md mx-auto space-y-6">
            {/* Product Header */}
            <div className="text-center">
              <div className="mb-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
              <h1 className="text-2xl font-light text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Product Description */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description.split('\n\n')[0]}
              </p>
            </div>

            {/* Main accords */}
            <div className="text-center mb-6">
              <p className="text-xs text-gray-500 italic">
                {product.description.split('\n\n')[1]}
              </p>
            </div>

            {/* Size Information */}
            <div className="text-center mb-6">
              <h3 className="text-xs font-medium text-gray-700 uppercase tracking-wide mb-2">Pilih Ukuran</h3>
              <div className="flex flex-wrap justify-center gap-1.5">
                {product.size.map((size) => {
                  const isSizeAvailable = isAvailable(product, size);
                  return (
                    <button
                      key={size}
                      onClick={() => isSizeAvailable && setSelectedSize(size)}
                      disabled={!isSizeAvailable}
                      className={`px-3 py-1.5 rounded-md text-[10px] font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? "bg-[#d4af37] text-white border-[#d4af37]"
                          : isSizeAvailable
                          ? "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                          : "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"
                      } border`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="text-xl font-light text-gray-900">
                  {formatPrice(currentPrice)}
                </div>
                {hasDiscount && originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(originalPrice)}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 italic">(harga belum termasuk ongkir dan kemungkinan berubah jika ada promo, konfirmasi ke admin saat pembelian apakah promo tersedia)</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <ProductActions 
                productName={`${product.name} - ${selectedSize}`}
                price={formatPrice(currentPrice)}
                shopeeLink={product.shopeeLink}
                productData={{
                  id: product.id,
                  name: product.name,
                  slug: product.slug,
                  price: currentPrice,
                  category: product.category,
                  image: product.image,
                  size: selectedSize,
                  prices: product.prices,
                  availability: product.availability
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/products" className="text-gray-600 hover:text-black flex items-center gap-2 text-sm">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Produk
            </Link>
          </nav>

          <div className="grid grid-cols-2 gap-24 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-3/4 bg-linear-to-br from-gray-50 via-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-xl">
                {/* Pattern Background */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full" style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(212, 175, 55, 0.03) 10px,
                      transparent 10px,
                      rgba(212, 175, 55, 0.03) 10px,
                      transparent 20px
                    )`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                <ProductImageWithError
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8 max-w-2xl">
              {/* Product Header */}
              <div>
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl xl:text-4xl font-light text-gray-900 mb-6 leading-tight">
                  {product.name}
                </h1>
              </div>

              {/* Product Description */}
              <div className="mb-6">
                <p className="text-base text-gray-600 leading-relaxed">
                  {product.description.split('\n\n')[0]}
                </p>
              </div>

              {/* Main accords */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 italic">
                  {product.description.split('\n\n')[1]}
                </p>
              </div>

              {/* Size Information */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide mb-2">Pilih Ukuran</h3>
                <div className="flex flex-wrap gap-2">
                  {product.size.map((size) => {
                    const isSizeAvailable = isAvailable(product, size);
                    return (
                      <button
                        key={size}
                        onClick={() => isSizeAvailable && setSelectedSize(size)}
                        disabled={!isSizeAvailable}
                        className={`px-4 py-2 rounded-md text-[11px] font-medium transition-all duration-200 ${
                          selectedSize === size
                            ? "bg-[#d4af37] text-white border-[#d4af37]"
                            : isSizeAvailable
                            ? "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                            : "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"
                        } border`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl xl:text-3xl font-light text-gray-900">
                    {formatPrice(currentPrice)}
                  </div>
                  {hasDiscount && originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {formatPrice(originalPrice)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 italic">(harga belum termasuk ongkir dan kemungkinan berubah jika ada promo, konfirmasi ke admin saat pembelian apakah promo tersedia)</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-6">
                <ProductActions 
                  productName={`${product.name} - ${selectedSize}`}
                  price={formatPrice(currentPrice)}
                  shopeeLink={product.shopeeLink}
                  productData={{
                    id: product.id,
                    name: product.name,
                    slug: product.slug,
                    price: currentPrice,
                    category: product.category,
                    image: product.image,
                    size: selectedSize,
                    prices: product.prices,
                    availability: product.availability
                  }}
                />
              </div>
            </div>


            </div>
        </div>
      </div>
    </div>
  );
}
