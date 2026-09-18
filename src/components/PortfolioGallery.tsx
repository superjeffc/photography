import React, { useState } from 'react';
import { PORTFOLIO_GALLERY } from '../data/photographyData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioGalleryProps {
  onOpenBooking?: (context?: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = PORTFOLIO_GALLERY[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PORTFOLIO_GALLERY.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PORTFOLIO_GALLERY.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="pt-24 sm:pt-28 pb-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single Image Large Showcase Frame */}
        <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl">
          
          {/* Main Photo Display Box */}
          <div className="relative min-h-[420px] sm:min-h-[580px] lg:min-h-[680px] max-h-[75vh] w-full bg-slate-100/80 flex items-center justify-center p-2 sm:p-6 overflow-hidden group">
            <img
              key={currentItem.id}
              src={currentItem.image}
              alt={currentItem.title}
              loading="eager"
              decoding="async"
              className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-xl shadow-2xl transition-opacity duration-300"
            />

            {/* Top Left Location & Counter Pill */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3 z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-slate-800 border border-slate-200/80 text-xs font-semibold shadow-md">
                {currentItem.locationName}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/95 text-slate-700 border border-slate-200/80 text-xs font-mono shadow-md">
                {currentIndex + 1} / {PORTFOLIO_GALLERY.length}
              </span>
            </div>

            {/* Top Right Full-Res Link */}
            <a
              href={currentItem.fullResImage || currentItem.image}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 px-3 py-1.5 rounded-full bg-white/95 hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/80 text-xs font-mono transition-colors shadow-md"
            >
              Open Full Resolution ↗
            </a>

            {/* Left Previous Arrow Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Image"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-amber-500 text-slate-800 hover:text-white border border-slate-300 hover:border-amber-500 flex items-center justify-center transition-all duration-200 shadow-xl focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6 stroke-[3]" />
            </button>

            {/* Right Next Arrow Button */}
            <button
              onClick={handleNext}
              aria-label="Next Image"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-amber-500 text-slate-800 hover:text-white border border-slate-300 hover:border-amber-500 flex items-center justify-center transition-all duration-200 shadow-xl focus:outline-none"
            >
              <ChevronRight className="w-6 h-6 stroke-[3]" />
            </button>
          </div>

          {/* Thumbnail Navigation Strip */}
          <div className="p-4 sm:p-6 bg-slate-50/90 border-t border-slate-200/80 flex items-center justify-center gap-2 overflow-x-auto max-w-full">
            {PORTFOLIO_GALLERY.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  currentIndex === idx
                    ? 'border-amber-500 scale-105 shadow-md gold-glow'
                    : 'border-slate-200 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={item.image} alt={item.locationName} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
