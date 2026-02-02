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
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="feature-card flex gap-3 items-start">
              {feature.icon}
              <div>
                <div className="font-bold">{feature.title}</div>
                <div className="font-light
                ">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
