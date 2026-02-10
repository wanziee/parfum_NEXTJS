import Link from 'next/link';
import { MapPin, Mail, MessageCircle, Instagram, ShoppingBag } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo-footer.png" 
                alt="Chelsea Dewa Store Parfume Logo" 
                className="h-12 w-auto mr-3 transition-all duration-300 hover:scale-105"
              />
            </div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
              Koleksi parfum premium dengan kualitas terbaik. Sentuhan elegan untuk setiap momen Anda.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com/chelseadewastoreparfume" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:bg-gray-700 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://shopee.co.id/chelseadewastoreparfume" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:bg-gray-700 transition-all duration-300"
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
                <Link href="/" className="text-gray-400!  transition-colors text-sm sm:text-base">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400!  transition-colors text-sm sm:text-base">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400!  transition-colors text-sm sm:text-base">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-[#d4af37] mr-3 shrink-0" />
                <a 
                  href="https://wa.me/6282162724324?text=*Chelsea%20Dewa%20Store%20Parfume*%0A%0AHalo%20Kak%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20parfum.%20Mohon%20informasikan%20katalog%20dan%20promo%20terbaru.%20Terima%20kasih"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400!  transition-colors text-sm sm:text-base"
                >
                  +62 821-6272-4324
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#d4af37] mr-3 shrink-0" />
                <span className="text-gray-400! text-sm sm:text-base">dewaparfumestore@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Instagram className="w-5 h-5 text-[#d4af37] mr-3 shrink-0" />
                <a 
                  href="https://instagram.com/chelseadewastoreparfume" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400!  transition-colors text-sm sm:text-base"
                >
                  @chelseadewastoreparfume
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-[#d4af37] mr-3 shrink-0" />
                <span className="text-gray-400 text-sm sm:text-base">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Chelsea Dewa Store Parfume. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
