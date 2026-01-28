'use client';

import { SprayCan, Gem, Crown } from 'lucide-react';

interface HeroImageProps {
  src?: string;
  alt: string;
  index: number;
}

export default function HeroImage({ src, alt, index }: HeroImageProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const placeholder = target.nextElementSibling as HTMLElement;
    if (placeholder) placeholder.style.display = 'flex';
  };

  const getPlaceholder = () => {
    switch (index) {
      case 1:
        return (
          <div className="text-center">
            <Gem className="w-16 h-16 text-muted mx-auto mb-3" />
            <p className="text-muted">Koleksi Premium</p>
          </div>
        );
      case 2:
        return (
          <div className="text-center">
            <Crown className="w-16 h-16 text-warning mx-auto mb-3" />
            <p className="text-muted">Eksklusif & Mewah</p>
          </div>
        );
      default:
        return <SprayCan className="w-20 h-20 text-muted" />;
    }
  };

  return (
    <>
      {src && (
        <img
          src={src}
          alt={alt}
          onError={handleImageError}
        />
      )}
      <div
        className="d-flex h-100 align-items-center justify-content-center bg-light"
        style={{
          display: src ? 'none' : 'flex',
          background: index === 1 
            ? 'linear-gradient(135deg, #f8f9fa, #e9ecef)'
            : index === 2
            ? 'linear-gradient(135deg, #fff5e6, #ffd4a3)'
            : '#f8f9fa'
        }}
      >
        {getPlaceholder()}
      </div>
    </>
  );
}
