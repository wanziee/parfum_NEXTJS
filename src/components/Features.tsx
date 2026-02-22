import { Truck, ShieldHalf, Tag, Lock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Truck className="feature-icon" />,
      title: 'Gratis Ongkir',
      description: 'Khusus area tertentu'
    },
    {
      icon: <ShieldHalf className="feature-icon" />,
      title: '100% Original',
      description: 'Garansi keaslian'
    },
    {
      icon: <Tag className="feature-icon" />,
      title: 'Harga Terbaik',
      description: 'Deal menarik tiap minggu'
    },
    {
      icon: <Lock className="feature-icon" />,
      title: 'Pembayaran Aman',
      description: 'Privasi terjaga'
    }
  ];

  return (
<section className="py-3 lg:py-4">
  <div className="container mx-auto px-3 sm:px-4 lg:px-6">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
      {features.map((feature, index) => (
        <div key={index} className="feature-card flex gap-2 items-start">
          <div className="shrink-0 text-base sm:text-lg lg:text-xl">
            {feature.icon}
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-bold text-xs sm:text-sm lg:text-base mb-0.5">
              {feature.title}
            </div>
            <div className="font-light text-[11px] sm:text-xs lg:text-sm text-gray-600 leading-snug">
              {feature.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
