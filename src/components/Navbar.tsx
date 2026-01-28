'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">CD</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Chelsea Dewa</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-[#d4af37] transition-colors font-medium">
              Beranda
            </Link>
            <Link href="/products" className="text-gray-900 hover:text-[#d4af37] transition-colors font-medium">
              Produk
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-[#d4af37] transition-colors font-medium">
              Tentang
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-[#d4af37] transition-colors font-medium">
              Kontak
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-[#d4af37] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-[#d4af37] transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-[#d4af37] transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4af37] text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-[#d4af37] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-900 hover:text-[#d4af37] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                href="/products" 
                className="text-gray-900 hover:text-[#d4af37] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Produk
              </Link>
              <Link 
                href="/about" 
                className="text-gray-900 hover:text-[#d4af37] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-900 hover:text-[#d4af37] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </Link>
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4">
                  <button className="p-2 text-gray-600 hover:text-[#d4af37] transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-[#d4af37] transition-colors">
                    <User className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-[#d4af37] transition-colors relative">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4af37] text-white text-xs rounded-full flex items-center justify-center">
                      0
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
