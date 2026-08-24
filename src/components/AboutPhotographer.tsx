import React from 'react';
import { Camera, Heart, Sun, Award, MapPin } from 'lucide-react';

interface AboutPhotographerProps {
  onOpenBooking: () => void;
}

export const AboutPhotographer: React.FC<AboutPhotographerProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 bg-neutral-900/80 relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Photographer Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-amber-500/30 shadow-2xl gold-glow group">
              <img
                src="https://assets.superjeffc.com/apps/jeff.jpg"
                alt="Jeff Chan - NYC Photographer"
                className="w-full h-full object-cover aspect-[4/5] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <h3 className="text-2xl font-serif font-bold text-white">Jeff Chan</h3>
                <p className="text-xs text-neutral-300 flex items-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Based in Brooklyn & Queens, NY
                </p>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-5 right-4 bg-amber-500 text-neutral-950 px-4 py-3 rounded-2xl shadow-2xl font-serif font-bold border-2 border-neutral-950 hidden sm:flex items-center gap-3 gold-glow">
              <Award className="w-7 h-7 shrink-0" />
              <div>
                <p className="text-lg font-extrabold leading-none">Relaxed & Candid</p>
                <p className="text-[10px] font-sans font-semibold text-neutral-900 uppercase mt-0.5">Natural NYC Sessions</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-4 h-4 text-amber-400" />
              <span>Behind The Lens</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Hi, I’m Jeff. <span className="text-gradient-amber italic font-normal">Capturing Lively, Authentic NYC Moments.</span>
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              My goal as a photographer is simple: to help you feel completely relaxed, comfortable, and at ease from the second we start walking. Photography should never feel like a chore or a series of forced poses — it should be a fun, memorable experience where your true personality shines through.
            </p>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Instead of stiff, awkward posing, I focus on gentle prompts, candid interactions, and natural movement. Whether we’re exploring vibrant NYC streets or tranquil park paths, I capture lively, expressive images filled with real smiles and genuine emotion.
            </p>

            {/* Core Values / Philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Sun className="w-4 h-4" /> Golden Hour Expertise
                </div>
                <p className="text-xs text-neutral-400">
                  I track sunlight angles in NYC down to the minute for perfect glow and zero harsh shadows.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Camera className="w-4 h-4" /> Professional Sony Setup
                </div>
                <p className="text-xs text-neutral-400">
                  Shooting with a full-frame Sony A7C II paired with a versatile FE 24-50mm f/2.8 G zoom lens.
                </p>
              </div>
            </div>

            {/* Gear & Guarantee */}
            <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-neutral-400 font-mono">
                <span>Gear: Sony A7C II • FE 24-50mm f/2.8 G</span>
              </div>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider gold-glow transition-all"
              >
                Let’s Create Together
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
