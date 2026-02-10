'use client';

import { SprayCan } from 'lucide-react';

interface ProductImageProps {
  src?: string;
  alt: string;
  className?: string;
}

export default function ProductImage({ src, alt, className = "" }: ProductImageProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const placeholder = target.nextElementSibling as HTMLElement;
    if (placeholder) placeholder.style.display = 'flex';
  };

  return (
    <div className={className}>
      {src && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-t-xl"
          onError={handleImageError}
        />
      )}
      <div
        className="placeholder"
        style={{ display: src ? 'none' : 'flex' }}
      >
        <SprayCan className="w-12 h-12" />
      </div>
    </div>
  );
}
