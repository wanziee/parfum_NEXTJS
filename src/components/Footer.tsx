import Link from 'next/link';
import { MapPin, Mail, MessageCircle, Facebook, Instagram, Twitter, ShoppingBag } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-#d4af37 rounded-full flex items-center justify-center mr-3">
                <span className="text-#1a1d23 font-bold text-sm">CD</span>
              </div>
              <span className="font-bold text-xl">Chelsea Dewa</span>
            </div>
            <p className="text-#6b7280 mb-4">
              Koleksi parfum pilihan dengan kualitas premium. Sentuhan elegan untuk setiap momen.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/chelseadewaperfume" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-#6b7280 hover:text-#d4af37 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@chelseadewaperfume" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-#6b7280 hover:text-#d4af37 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://shopee.co.id/chelseadewaperfume" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-#6b7280 hover:text-#d4af37 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-#6b7280 hover:text-#d4af37 transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-#6b7280 hover:text-#d4af37 transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-#6b7280 hover:text-#d4af37 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-#6b7280 hover:text-#d4af37 transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kategori</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=floral" className="text-#6b7280 hover:text-#d4af37 transition-colors">
                  Floral
                </Link>
              </li>
              <li>
                <Link href="/products?category=woody" className="text-#6b7280 hover:text-#d4af37 transition-colors">
                  Woody
                </Link>
              </li>
              <li>
                <Link href="/products?category=citrus" className="text-#6b7280 hover:text-#d4af37 transition-colors">
                  Citrus
                </Link>
              </li>
              <li>
                <Link href="/products?category=oriental" className="text-#6b7280 hover:text-#d4af37 transition-colors">
                  Oriental
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak & Social</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-#d4af37 mr-3" />
                <span className="text-#6b7280">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-#d4af37 mr-3" />
                <span className="text-#6b7280">info@chelseadewaperfume.com</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-#d4af37 mr-3" />
                <a 
                  href="https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20ingin%20bertanya%20mengenai%20parfum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-#6b7280 hover:text-#d4af37 transition-colors"
                >
                  +62 812-3456-7890
                </a>
              </div>
            </div>
            
            <div className="mt-6 space-y-2">
              <h4 className="font-medium text-sm mb-3">Follow Us</h4>
              <div className="flex flex-col space-y-2">
                <a 
                  href="https://instagram.com/chelseadewaperfume" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-#6b7280 hover:text-#d4af37 transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </a>
                <a 
                  href="https://www.tiktok.com/@chelseadewaperfume" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-#6b7280 hover:text-#d4af37 transition-colors text-sm"
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  TikTok
                </a>
                <a 
                  href="https://shopee.co.id/chelseadewaperfume" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-#6b7280 hover:text-#d4af37 transition-colors text-sm"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Shopee
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-#2f3336 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-#6b7280 text-sm">
              2025 Chelsea Dewa Perfume. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-#6b7280 hover:text-#d4af37 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-#6b7280 hover:text-#d4af37 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-#6b7280 hover:text-#d4af37 transition-colors text-sm">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
