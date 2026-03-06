'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import CartButton from './CartButton';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-white border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : 'shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/images/logo.png" 
              alt="Chelsea Dewa Store Parfume Logo" 
              className="h-17 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-gray-900 hover:text-[#d4af37] transition-colors font-medium relative group ${
                pathname === '/' ? 'text-[#d4af37]' : ''
              }`}
            >
              Beranda
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${
                pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/products" 
              className={`text-gray-900 hover:text-[#d4af37] transition-colors font-medium relative group ${
                pathname === '/products' ? 'text-[#d4af37]' : ''
              }`}
            >
              Produk
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${
                pathname === '/products' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              href="/about" 
              className={`text-gray-900 hover:text-[#d4af37] transition-colors font-medium relative group ${
                pathname === '/about' ? 'text-[#d4af37]' : ''
              }`}
            >
              Tentang
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${
                pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <CartButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <CartButton />
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-[#d4af37] transition-all duration-200 hover:scale-110 transform"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className={`text-gray-900 hover:text-[#d4af37] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50 ${
                  pathname === '/' ? 'text-[#d4af37] bg-[#d4af37]/10' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                href="/products" 
                className={`text-gray-900 hover:text-[#d4af37] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50 ${
                  pathname === '/products' ? 'text-[#d4af37] bg-[#d4af37]/10' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Produk
              </Link>
              <Link 
                href="/about" 
                className={`text-gray-900 hover:text-[#d4af37] transition-colors font-medium py-2 px-4 rounded-lg hover:bg-gray-50 ${
                  pathname === '/about' ? 'text-[#d4af37] bg-[#d4af37]/10' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
