import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PlantCarousel({ images, title, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="no-image-placeholder">
        <span>No image available</span>
      </div>
    );
  }

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-view">
        <img
          src={images[currentIndex]}
          alt={`${title} - view ${currentIndex + 1}`}
          className="carousel-image"
          onClick={(e) => {
            e.stopPropagation();
            onImageClick?.();
          }}
        />

        {images.length > 1 && (
          <>
            <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous image">
              <ChevronLeft size={20} />
            </button>
            <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next image">
              <ChevronRight size={20} />
            </button>
            <div className="carousel-dots">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}