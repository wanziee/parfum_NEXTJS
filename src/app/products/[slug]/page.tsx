import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ShoppingCart, Heart, Share2, Star } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
  image?: string;
  description: string;
  size: string[];
  stock: number;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Chelsea Dewa Premium",
    slug: "chelsea-dewa-premium",
    price: 250000,
    category: "Floral",
    image: "/images/products/chelsea-dewa-premium.jpg",
    description: "Parfum premium dengan aroma floral yang elegan. Kombinasi sempurna antara mawar, jasmine, dan vanilla yang memberikan kesan mewah dan sophisticated.",
    size: ["30ml", "50ml", "100ml"],
    stock: 15,
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Elegant Floral",
    slug: "elegant-floral",
    price: 180000,
    category: "Floral",
    image: "/images/products/elegant-floral.jpg",
    description: "Aroma floral yang lembut dan feminin dengan sentuhan buah-buahan segar. Sempurna untuk penggunaan sehari-hari.",
    size: ["30ml", "50ml"],
    stock: 23,
    rating: 4.6,
    reviews: 89
  }
];

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return {
      title: "Produk Tidak Ditemukan",
      description: "Produk yang Anda cari tidak tersedia."
    };
  }

  return {
    title: `${product.name} - Chelsea Dewa Perfume`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://chelsea-dewa-perfume.com/products/${product.slug}`,
      type: "website",
      images: product.image ? [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        }
      ] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/products" className="text-muted hover:text-[#d4af37] flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Produk
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="product-media h-96 lg:h-[500px]">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const placeholder = target.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className="placeholder" style={{ display: product.image ? 'none' : 'flex' }}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <p className="text-muted">Gambar tidak tersedia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <span className="text-[#d4af37] text-sm uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl text-[#d4af37] mt-2 mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-muted text-sm">({product.reviews} ulasan)</span>
              </div>

              <div className="text-3xl text-[#d4af37] mb-6">
                {formatPrice(product.price)}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Deskripsi</h3>
              <p className="text-muted leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Ukuran</h3>
              <div className="flex gap-3">
                {product.size.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-[#d4af37] hover:text-[#d4af37] transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Stock Info */}
            <div className="mb-8">
              <p className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? `Stok tersedia: ${product.stock} pcs` : 'Stok habis'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <button 
                className="btn bg-[#d4af37] btn-lg flex items-center justify-center gap-2"
                disabled={product.stock === 0}
              >
                <ShoppingCart className="w-5 h-5" />
                {product.stock > 0 ? 'Tambah ke Keranjang' : 'Stok Habis'}
              </button>
              <button className="btn border-[#d4af37] hover:bg-[#d4af37] hover:text-white btn-lg flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Wishlist
              </button>
            </div>

            {/* Share */}
            <div className="flex items-center gap-4">
              <Share2 className="w-5 h-5 text-muted" />
              <button className="text-muted hover:text-[#d4af37]">Bagikan produk</button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex gap-8">
              <button className="pb-4 border-b-2 border-[#d4af37] text-[#d4af37] font-medium">
                Deskripsi
              </button>
              <button className="pb-4 text-muted hover:text-[#d4af37] font-medium">
                Ulasan ({product.reviews})
              </button>
              <button className="pb-4 text-muted hover:text-[#d4af37] font-medium">
                Pengiriman
              </button>
            </nav>
          </div>

          <div className="prose max-w-none">
            <h3>Detail Produk</h3>
            <ul>
              <li>Kategori: {product.category}</li>
              <li>Berat: 200g</li>
              <li>Asal: Import</li>
              <li>Kualitas: Premium Original</li>
            </ul>

            <h3 className="mt-6">Cara Penggunaan</h3>
            <ol>
              <li>Semprotkan parfum pada titik nadi (pergelangan tangan, leher)</li>
              <li>Jangan gosok setelah menyemprot</li>
              <li>Gunakan setelah mandi untuk hasil maksimal</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
