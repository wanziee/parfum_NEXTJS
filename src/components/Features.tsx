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
    <section className="py-4 lg:py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card flex gap-2 sm:gap-3 lg:gap-4 items-start">
              <div className="shrink-0">
                {feature.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold text-sm sm:text-base lg:text-lg mb-1">{feature.title}</div>
                <div className="font-light text-xs sm:text-sm lg:text-base text-gray-600 leading-tight">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
