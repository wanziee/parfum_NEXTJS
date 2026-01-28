import { Eye } from 'lucide-react';
import ProductImage from './ProductImage';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  category?: string;
  image?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="product-card p-4 h-full flex flex-col bg-white border border-#d4af37 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <ProductImage
        src={product.image}
        alt={product.name}
        className="product-media mb-4 rounded-lg overflow-hidden"
      />
      
      <div className="flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2">{product.name}</h3>
        <div className="text-sm text-gray-500 mb-3">{product.category || 'Uncategorized'}</div>
        <div className="text-xl font-bold text-#d4af37 mb-4">{formatPrice(product.price)}</div>
        
        <div className="mt-auto">
          <a
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center w-full px-4 py-2 border border-#d4af37 text-#d4af37 rounded-lg hover:bg-#d4af37 hover:text-white transition-colors text-sm font-medium"
          >
            <Eye className="w-4 h-4 mr-2" />
            Lihat Detail
          </a>
        </div>
      </div>
    </div>
  );
}
