import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ShoppingCart, Heart, Share2 } from "lucide-react";
import Link from "next/link";
import ProductImageWithError from "@/components/ProductImageWithError";
import ProductActions from "@/components/ProductActions";

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
  },
  {
    id: 3,
    name: "Woody Masculine",
    slug: "woody-masculine",
    price: 220000,
    category: "Woody",
    image: "/images/products/woody-masculine.jpg",
    description: "Aroma woody yang maskulin dan tegas. Perpaduan cedarwood, sandalwood, dan vetiver yang memberikan kesan elegan dan berwibawa.",
    size: ["30ml", "50ml", "100ml"],
    stock: 18,
    rating: 4.7,
    reviews: 96
  },
  {
    id: 4,
    name: "Fresh Citrus",
    slug: "fresh-citrus",
    price: 150000,
    category: "Citrus",
    image: "/images/products/fresh-citrus.jpg",
    description: "Aroma citrus yang segar dan energik. Kombinasi lemon, bergamot, dan orange yang memberikan kesan ceria dan menyegarkan.",
    size: ["30ml", "50ml"],
    stock: 31,
    rating: 4.5,
    reviews: 78
  },
  {
    id: 5,
    name: "Oriental Spice",
    slug: "oriental-spice",
    price: 280000,
    category: "Oriental",
    image: "/images/products/oriental-spice.jpg",
    description: "Aroma oriental yang eksotis dan misterius. Perpaduan rempah-rempah oriental dengan sentuhan vanilla dan amber yang memikat.",
    size: ["50ml", "100ml"],
    stock: 12,
    rating: 4.9,
    reviews: 143
  },
  {
    id: 6,
    name: "Sweet Vanilla",
    slug: "sweet-vanilla",
    price: 165000,
    category: "Sweet",
    image: "/images/products/sweet-vanilla.jpg",
    description: "Aroma vanilla yang manis dan comforting. Kombinasi vanilla, caramel, dan praline yang memberikan kesan hangat dan menyenangkan.",
    size: ["30ml", "50ml"],
    stock: 27,
    rating: 4.4,
    reviews: 65
  },
  {
    id: 7,
    name: "Ocean Breeze",
    slug: "ocean-breeze",
    price: 195000,
    category: "Fresh",
    image: "/images/products/ocean-breeze.jpg",
    description: "Aroma segar seperti angin laut. Perpaduan marine notes dengan sentuhan citrus dan white musk yang memberikan kesan bersih dan bebas.",
    size: ["30ml", "50ml", "100ml"],
    stock: 20,
    rating: 4.6,
    reviews: 112
  },
  {
    id: 8,
    name: "Midnight Rose",
    slug: "midnight-rose",
    price: 320000,
    category: "Floral",
    image: "/images/products/midnight-rose.jpg",
    description: "Aroma mawar yang misterius dan elegan. Kombinasi mawar malam, patchouli, dan oud yang memberikan kesan mewah dan sensual.",
    size: ["50ml", "100ml"],
    stock: 8,
    rating: 4.9,
    reviews: 187
  }
];

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
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
    keywords: [
      product.name,
      product.category,
      "parfum original",
      "parfum premium",
      "jual parfum",
      "Chelsea Dewa Perfume",
      `parfum ${product.category.toLowerCase()}`,
    ],
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://chelsea-dewa-perfume.com/products/${product.slug}`,
      type: "website",
      images: product.image ? [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: product.image ? [product.image] : [],
    },
    alternates: {
      canonical: `/products/${product.slug}`,
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
    return `Rp ${price.toLocaleString('id-ID')}`;
  };

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
          <div className="aspect-square bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden">
            <ProductImageWithError
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Centered Product Details */}
        <div className="px-4 py-6">
          <div className="space-y-6 text-center">
            <div>
              <div className="mb-3">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl font-light text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              <p className="text-base text-gray-600 mb-4 leading-relaxed">
                {product.description}
              </p>

              <div className="text-2xl font-light text-gray-900 mb-6">
                {formatPrice(product.price)}
              </div>
            </div>

            {/* Size Information */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">Ukuran Tersedia</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {product.size.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <ProductActions 
                productName={product.name}
                price={formatPrice(product.price)}
              />
            </div>

            {/* Share */}
            <div className="flex items-center justify-center gap-3 pt-6 border-t border-gray-200">
              <Share2 className="w-4 h-4 text-gray-400" />
              <button className="text-gray-600 hover:text-gray-900 text-xs font-medium transition-colors">
                Bagikan produk
              </button>
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
              <div className="aspect-square bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-xl">
                <ProductImageWithError
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-10">
              <div>
                <div className="mb-6">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-4xl xl:text-5xl font-light text-gray-900 mb-8 leading-tight">
                  {product.name}
                </h1>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="text-3xl font-light text-gray-900 mb-12">
                  {formatPrice(product.price)}
                </div>
              </div>

              {/* Size Information */}
              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-700 uppercase tracking-wide">Ukuran Tersedia</h3>
                <div className="flex flex-wrap gap-3">
                  {product.size.map((size) => (
                    <span
                      key={size}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-6">
                <ProductActions 
                  productName={product.name}
                  price={formatPrice(product.price)}
                  className="grid-cols-2 gap-4"
                />
              </div>

              {/* Share */}
              <div className="flex items-center gap-4 pt-8 border-t border-gray-200">
                <Share2 className="w-5 h-5 text-gray-400" />
                <button className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                  Bagikan produk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
