import { MapPin, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  const whatsappNumber = '6282162724324';
  const whatsappMessage = encodeURIComponent('*Chelsea Dewa Store Parfume*\n\nHalo Kak, saya ingin berkonsultasi mengenai produk parfum. Mohon bantuannya untuk informasi detail dan rekomendasi parfum yang sesuai. Terima kasih!');

  return (
    <section id="contact" className="py-5 pb-6">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-4">Contact</h2>
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          <div className="lg:col-span-4">
            <div className="contact-card p-4 h-full">
              <div className="flex items-start mb-3">
                <MapPin className="contact-icon mr-2 shrink-0" />
                <div>
                  <div className="fw-semibold">Alamat</div>
                  <div className="text-muted">BSD, Indonesia</div>
                </div>
              </div>
              
              <div className="flex items-start mb-3">
                <Mail className="contact-icon mr-2 shrink-0" />
                <div>
                  <div className="fw-semibold">Email</div>
                  <div className="text-muted">dewaparfumestore@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-start mb-3">
                <Image src="/images/icons/whatsapp.png" alt="WhatsApp" width={20} height={20} className="contact-icon mr-2 shrink-0" />
                <div>
                  <div className="fw-semibold">WhatsApp</div>
                  <div className="text-muted">+62 821-6272-4324</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Instagram className="contact-icon mr-2 shrink-0" />
                <div>
                  <div className="fw-semibold">Instagram</div>
                  <div className="text-muted">@chelseadewastoreparfume</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="contact-card p-4 h-full d-flex flex-column justify-content-between">
              <div>
                <h5 className="mb-2">Butuh Bantuan?</h5>
                <p className="text-muted mb-4">Hubungi kami kapan saja melalui WhatsApp, kami siap membantu.</p>
              </div>
              <div className="d-grid">
                <a
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white! font-semibold rounded-full hover:bg-[#128C7E] transition-colors"
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/icons/whatsapp.png" alt="WhatsApp" width={20} height={20} className="w-5 h-5 mr-2" />
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
