import React from 'react';
import { Heart } from 'lucide-react';

interface AboutPhotographerProps {
  onOpenBooking?: () => void;
}

export const AboutPhotographer: React.FC<AboutPhotographerProps> = () => {
  return (
    <section id="about" className="py-24 bg-white relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Photographer Portrait (3:2 landscape) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xl">
              <img
                src="https://assets.superjeffc.com/apps/jeff.jpg"
                alt="Jeff Chan - NYC Photographer"
                loading="eager"
                decoding="async"
                className="w-full aspect-[3/2] object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Bio Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Heart className="w-4 h-4 text-amber-600" />
              <span>Behind The Lens</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight">
              Hi, I’m Jeff. <span className="text-gradient-amber italic font-normal">Capturing Lively, Authentic NYC Moments.</span>
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              My goal as a photographer is simple: to help you feel completely relaxed, comfortable, and at ease from the second we start walking. Photography should never feel like a chore or a series of forced poses — it should be a fun, memorable experience where your true personality shines through.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Instead of stiff, awkward posing, I focus on gentle prompts, candid interactions, and natural movement. Whether we’re exploring vibrant NYC streets or tranquil park paths, I capture lively, expressive images filled with real smiles and genuine emotion.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
