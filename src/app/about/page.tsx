import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Mail, MessageCircle, Heart, Star, Award, Users, ShoppingBag, Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: "Tentang Kami | Chelsea Dewa Perfume",
  description: "Kenali lebih dekat Chelsea Dewa Perfume - koleksi parfum premium dengan kualitas terbaik dan pelayanan memuaskan.",
  openGraph: {
    title: "Tentang Kami | Chelsea Dewa Perfume",
    description: "Kenali lebih dekat Chelsea Dewa Perfume - koleksi parfum premium dengan kualitas terbaik.",
    url: "https://chelsea-dewa-perfume.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-linear-to-br from-[#f8f9fa] via-white to-[#fafbfc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
              Tentang <span className="text-[#d4af37]">Chelsea Dewa</span>
              <br />
              <span className="text-[#d4af37]">Perfume</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto font-light">
              Koleksi parfum pilihan dengan kualitas premium. Kami hadir untuk memberikan sentuhan elegan untuk setiap momen dalam hidup Anda.
            </p>
            <div className="flex justify-center">
              <div className="w-16 h-1 sm:w-20 md:w-24 bg-linear-to-r from-[#d4af37] to-[#c9a037] rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-gray-900">
              Cerita Kami
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Chelsea Dewa Perfume lahir dari hasrat untuk memberikan parfum berkualitas tinggi yang dapat meningkatkan kepercayaan diri setiap individu. Perjalanan kami dimulai pada tahun 2020 dengan komitmen untuk menyediakan koleksi parfum original dengan harga terjangkau.
            </p>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Setiap parfum yang kami pilih melalui proses kurasi ketat untuk memastikan kualitas, keaslian, dan keharuman yang tahan lama. Kami percaya bahwa parfum bukan hanya tentang aroma, tetapi juga tentang ekspresi diri dan kenangan.
            </p>
            <p className="text-gray-600 mb-8 md:mb-12 leading-relaxed text-sm md:text-base">
              Hingga saat ini, kami telah melayani ribuan pelanggan di seluruh Indonesia dan terus berinovasi untuk memberikan pengalaman berbelanja yang terbaik.
            </p>
            
            <div className="bg-linear-to-br from-[#d4af37]/10 to-[#d4af37]/5 p-6 md:p-8 rounded-2xl max-w-md mx-auto">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-gray-900">Dibuat dengan Cinta</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Setiap produk dipilih dengan penuh perhatian dan kepedulian untuk kepuasan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
                Nilai-Nilai Kami
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Prinsip yang memandu setiap langkah kami
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Award className="w-6 h-6 md:w-7 md:h-7 text-[#d4af37]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Kualitas Premium</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Hanya menyediakan parfum original dengan kualitas terbaik yang telah teruji.
                </p>
              </div>
              
              <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Users className="w-6 h-6 md:w-7 md:h-7 text-[#d4af37]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Pelanggan Prioritas</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Kepuasan pelanggan adalah prioritas utama kami dalam setiap layanan.
                </p>
              </div>
              
              <div className="text-center p-4 md:p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Star className="w-6 h-6 md:w-7 md:h-7 text-[#d4af37]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">Inovasi Berkelanjutan</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Selalu menghadirkan koleksi terbaru dan mengikuti tren parfum global.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d4af37] mb-1 md:mb-2">5000+</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d4af37] mb-1 md:mb-2">100+</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">Varian Parfum</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d4af37] mb-1 md:mb-2">50+</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">Brand Ternama</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d4af37] mb-1 md:mb-2">4.9/5</div>
                <div className="text-gray-600 font-medium text-sm md:text-base">Rating Pelanggan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact-info" className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-gray-900">
              Hubungi Kami
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12">
              Ada pertanyaan? Kami siap membantu Anda menemukan parfum sempurna.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7 text-[#d4af37]" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 text-sm md:text-base">Alamat</h3>
                <p className="text-gray-600 text-sm md:text-base">Jakarta, Indonesia</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-[#d4af37]" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 text-sm md:text-base">Email</h3>
                <p className="text-gray-600 text-sm md:text-base">dewaparfumestore@gmail.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-[#d4af37]" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 text-sm md:text-base">WhatsApp</h3>
                <p className="text-gray-600 text-sm md:text-base">+62 821-6272-4324</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#d4af37]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Instagram className="w-6 h-6 md:w-7 md:h-7 text-[#d4af37]" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 text-sm md:text-base">Instagram</h3>
                <p className="text-gray-600 text-sm md:text-base">@chelseadewastoreparfume</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="https://shopee.co.id/chelseadewastoreparfume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 bg-[#EE4D2D] text-white font-semibold rounded-full hover:bg-[#D63018] transition-colors text-sm md:text-base about-btn"
              >
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Cek Shopee
              </a>
              <a
                href="https://wa.me/6282162724324?text=*Chelsea%20Dewa%20Perfume*%0A%0AHalo%20Kak%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20mengenai%20Chelsea%20Dewa%20Perfume.%20Mohon%20informasikan%20profil%20perusahaan%20dan%20produk%20unggulan.%20Terima%20kasih"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#128C7E] transition-colors text-sm md:text-base about-btn"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Chat WhatsApp
              </a>
              <a
                href="https://instagram.com/chelseadewastoreparfume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 bg-linear-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-semibold rounded-full hover:opacity-90 transition-opacity text-sm md:text-base about-btn"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Follow Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
