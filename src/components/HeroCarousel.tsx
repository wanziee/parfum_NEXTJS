'use client';

import { useState, useEffect } from 'react';
import HeroImage from './HeroImage';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: '/images/hero/hero.jpg',
      alt: 'Parfum Hero 1'
    },
    {
      id: 2,
      image: '/images/hero/hero2.jpg',
      alt: 'Parfum Hero 2'
    },
    {
      id: 3,
      image: '/images/hero/hero3.jpg',
      alt: 'Parfum Hero 3'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-image">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <HeroImage
              src={slide.image}
              alt={slide.alt}
              index={index}
            />
          </div>
        ))}
        
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
