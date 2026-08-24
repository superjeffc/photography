import React, { useState } from 'react';
import { PORTFOLIO_GALLERY, type PortfolioItem } from '../data/photographyData';
import { Camera, MapPin, X, Sparkles, Maximize2, Aperture } from 'lucide-react';

interface PortfolioGalleryProps {
  onOpenBooking: (context?: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All NYC Sessions' },
    { id: 'couples', label: 'Couples & Engagements' },
    { id: 'portraits', label: 'Solo Portraits' },
    { id: 'editorial', label: 'Fashion & Editorial' },
    { id: 'proposals', label: 'Surprise Proposals' },
  ];

  const filteredItems = PORTFOLIO_GALLERY.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-24 bg-neutral-900/60 relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>Client Portfolio & Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Real Clients. <span className="text-gradient-amber italic font-normal">Real NYC Stories.</span>
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
            Explore authentic moments captured across top NYC locations. Click any photo to view EXIF camera settings and story behind the shoot.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-lg gold-glow scale-105'
                  : 'glass-panel text-neutral-300 hover:text-white hover:border-amber-500/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
            >
              {/* Image Aspect Box */}
              <div className="aspect-[4/3] overflow-hidden bg-neutral-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Default Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-xs font-semibold">
                  {item.categoryLabel}
                </span>
                <span className="w-8 h-8 rounded-full bg-neutral-950/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                </span>
              </div>

              {/* Bottom Card Copy */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
                <p className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {item.locationName}
                </p>
                <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-xs text-neutral-400">Client: {item.client}</p>

                {/* Exif Preview on hover */}
                <div className="pt-2 flex items-center gap-3 text-[11px] font-mono text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="flex items-center gap-1 text-amber-300">
                    <Aperture className="w-3 h-3" /> {item.gear.split('+')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full glass-panel rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl space-y-0 grid grid-cols-1 lg:grid-cols-12">
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-neutral-950/80 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-700 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image View */}
            <div className="lg:col-span-7 relative bg-black flex items-center justify-center min-h-[350px] lg:min-h-[500px]">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Details Sidebar */}
            <div className="lg:col-span-5 p-6 lg:p-8 space-y-6 flex flex-col justify-between bg-neutral-950/90">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold border border-amber-500/30">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {lightboxItem.locationName}
                </div>

                <h3 className="text-2xl font-serif text-white font-bold">{lightboxItem.title}</h3>
                <p className="text-xs text-neutral-400 font-mono">Session for: {lightboxItem.client}</p>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-2 text-xs">
                  <span className="text-amber-400 font-semibold uppercase tracking-wider block">Photographer Note</span>
                  <p className="text-neutral-300 leading-relaxed italic">"{lightboxItem.story}"</p>
                </div>

                {/* Technical Specs */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Camera Gear & EXIF</span>
                  <div className="grid grid-cols-1 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-neutral-300 flex items-center gap-2">
                      <Camera className="w-4 h-4 text-amber-400" />
                      <span>{lightboxItem.gear}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-neutral-300 flex items-center gap-2">
                      <Aperture className="w-4 h-4 text-amber-400" />
                      <span>{lightboxItem.settings}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-800 space-y-2">
                <button
                  onClick={() => {
                    const loc = lightboxItem.locationName;
                    setLightboxItem(null);
                    onOpenBooking(`Session similar to ${lightboxItem.title} at ${loc}`);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-bold text-sm uppercase tracking-wider gold-glow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Request Shoot Like This
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
