'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Bagaimana cara melakukan pemesanan?',
      answer: 'Anda dapat langsung memesan melalui Shopee official store kami atau TikTok shop. Klik tombol "Beli di Shopee" atau "Chat WhatsApp" untuk memulai pemesanan. Kami juga melayani pemesanan langsung via WhatsApp untuk konsultasi produk.'
    },
    {
      question: 'Apakah produk original dan bergaransi?',
      answer: 'Ya, semua parfum yang kami jual 100% original dengan garansi keaslian. Jika produk tidak original, kami garansi uang kembali 100%. Produk kami memiliki sertifikat keaslian dari distributor resmi.'
    },
    {
      question: 'Berapa lama proses pengiriman?',
      answer: 'Pengiriman via Shopee: 1-3 hari kerja (Jabodetabek), 3-5 hari kerja (luar Jabodetabek). Pengiriman langsung dari kami: 1-2 hari kerja untuk area Jakarta, 2-4 hari kerja untuk luar kota.'
    },
    {
      question: 'Bagaimana cara pembayaran?',
      answer: 'Melalui Shopee: Transfer bank, ShopeePay, COD, kartu kredit, dan semua metode pembayaran Shopee. Melalui WhatsApp/WhatsApp: Transfer bank (BCA, Mandiri, BNI, BRI), DANA, GoPay, OVO, dan COD untuk area tertentu.'
    },
    {
      question: 'Apakah bisa request catatan khusus?',
      answer: 'Tentu! Anda bisa request catatan khusus saat pemesanan via WhatsApp atau chat Shopee. Kami akan usahakan memenuhi request seperti: kemasan kado, tulis nama, pesan khusus, atau request warna kemasan tertentu.'
    },
    {
      question: 'Bagaimana cara tracking pesanan?',
      answer: 'Untuk pesanan Shopee: Anda bisa tracking langsung di aplikasi Shopee. Untuk pesanan WhatsApp, kami akan kirim nomor resi dan link tracking JNE/J&T/SiCepat setelah pengiriman.'
    },
    {
      question: 'Apakah ada promo atau diskon?',
      answer: 'Ya! Kami sering ada promo khusus followers TikTok dan Shopee. Follow TikTok @chelseadewastoreparfume dan cek Shopee official store kami untuk promo terbaru. Ada juga diskon khusus untuk pembelian 3+ produk.'
    },
    {
      question: 'Bagaimana jika produk tidak sesuai atau cacat?',
      answer: 'Kami garansi 100% kepuasan. Jika produk cacat, tidak sesuai, atau ada masalah kualitas, kami akan ganti baru atau refund full tanpa syarat. Hubungi kami dalam 7 hari setelah penerimaan produk.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl focus:ring-[#d4af37] mb-4 text-gray-900">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pertanyaan yang sering diajukan tentang produk dan layanan kami
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white rounded-xl shadow-sm border border-[#d4af37]100 hover:shadow-md transition-all duration-300"
            >
              <button
                className={`w-full px-6 py-5 text-left flex items-center justify-between group ${
                  activeIndex === index ? 'text-[#d4af37]' : 'text-gray-900'
                } transition-colors duration-200`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180 text-[#d4af37]' : 'text-gray-400 group-hover:text-[#d4af37]600'
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
