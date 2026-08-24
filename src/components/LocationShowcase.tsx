import React, { useState } from 'react';
import { NYC_LOCATIONS } from '../data/photographyData';
import { Sun, Sparkles, CheckCircle2, Navigation, Clock, Compass } from 'lucide-react';

interface LocationShowcaseProps {
  onOpenBooking: (locationName: string) => void;
}

export const LocationShowcase: React.FC<LocationShowcaseProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'waterfront' | 'landmarks'>('all');

  const filteredLocations = NYC_LOCATIONS.filter((loc) => {
    if (filter === 'featured') return loc.featured;
    if (filter === 'waterfront') return loc.id === 'dumbo' || loc.id === 'gantry-park' || loc.id === 'brooklyn-bridge';
    if (filter === 'landmarks') return loc.id === 'soho' || loc.id === 'central-park' || loc.id === 'times-square';
    return true;
  });

  return (
    <section id="locations" className="py-24 relative bg-neutral-950 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Curated NYC Photoshoot Locations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Popular <span className="text-gradient-amber italic font-normal">NYC Locations</span> for Your Shoot
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg">
            Explore iconic New York City photoshoot spots, from lush park arches to historic cobblestone streets and striking skyline views.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-12">
          {[
            { id: 'all', label: 'All NYC Spots' },
            { id: 'featured', label: '★ Star Locations' },
            { id: 'waterfront', label: 'Waterfront & Bridges' },
            { id: 'landmarks', label: 'Manhattan Landmarks & SoHo' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                filter === tab.id
                  ? 'bg-amber-500 text-neutral-950 shadow-lg gold-glow font-bold scale-[1.02]'
                  : 'glass-panel text-neutral-300 hover:text-white hover:border-amber-500/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className={`group rounded-2xl overflow-hidden glass-panel border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                loc.featured
                  ? 'border-amber-500/40 shadow-xl shadow-amber-500/5'
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Featured Badge */}
                  {loc.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-neutral-950 text-xs font-extrabold uppercase tracking-wider shadow-md">
                      Top Client Favorite
                    </span>
                  )}

                  {/* Borough Pill */}
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-neutral-950/80 backdrop-blur-md text-neutral-300 text-xs font-mono border border-white/10">
                    {loc.borough}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                      <Navigation className="w-3.5 h-3.5" /> {loc.area}
                    </p>
                    <h3 className="text-xl font-bold text-white tracking-tight">{loc.name}</h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  <p className="text-neutral-300 text-sm leading-relaxed">{loc.description}</p>

                  {/* Best Time & Lighting */}
                  <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-start gap-2.5 text-xs">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-amber-300 font-semibold block">Best Lighting Window</span>
                      <span className="text-neutral-300">{loc.bestTime}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Spot Highlights:</span>
                    <div className="grid grid-cols-1 gap-1 text-xs text-neutral-300">
                      {loc.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0 space-y-3">
                <button
                  onClick={() => onOpenBooking(loc.name)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md gold-glow"
                >
                  <Sparkles className="w-4 h-4" />
                  Book Session at {loc.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Focus Banner for 1-Hour NYC Sessions */}
        <div className="mt-16 rounded-3xl glass-panel-amber border border-amber-500/30 p-8 lg:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Sun className="w-4 h-4" />
                <span>Focused 1-Hour NYC Photo Experience</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif text-white">
                Need Help Selecting the Perfect NYC Location?
              </h3>
              <p className="text-neutral-300 text-base leading-relaxed">
                Whether you want Bow Bridge reflections in Central Park, chic cast-iron facades in SoHo, or Brooklyn Bridge sunrise views, every <strong className="text-amber-300">1-hour session</strong> is custom-tailored to your personal style and preferred backdrop.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onOpenBooking('1-Hour NYC Location Session')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-bold text-sm shadow-xl gold-glow hover:scale-105 transition-transform"
              >
                Plan Your 1-Hour Session
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
