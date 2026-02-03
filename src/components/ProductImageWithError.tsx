'use client';

import { useState } from 'react';

interface ProductImageProps {
  src?: string;
  alt: string;
  className?: string;
}

export default function ProductImageWithError({ src, alt, className }: ProductImageProps) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-200 rounded-full mx-auto mb-4 lg:mb-6"></div>
          <p className="text-gray-500 text-base lg:text-lg">Gambar tidak tersedia</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}
