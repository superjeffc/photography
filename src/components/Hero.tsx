import React, { useState } from 'react';
import { Sparkles, MapPin, Star, ArrowRight, ShieldCheck, Camera, Sun, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (location?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  const heroBackgrounds = [
    {
      url: 'images/central_park.jpg',
      title: 'Central Park & Bow Bridge',
      locationTag: 'Central Park, Manhattan'
    },
    {
      url: 'images/soho_fashion.jpg',
      title: 'SoHo Cast-Iron District',
      locationTag: 'SoHo, Manhattan'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dynamic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackgrounds[heroImageIndex].url}
          alt="NYC Client Photography Session"
          className="w-full h-full object-cover object-center transform scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-gold-radial opacity-75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6 text-left">

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-amber border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide uppercase shadow-lg">
              <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Golden Hour Booking Open • Focused 1-Hour NYC Sessions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-white leading-[1.1]">
              Capturing <span className="text-gradient-amber italic font-normal">Authentic</span> NYC Moments in Iconic Light.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-neutral-300 font-normal max-w-2xl leading-relaxed">
              Professional portrait and couple photography focused on intimate <strong className="text-amber-300 font-medium">1-hour sessions</strong> in NYC’s most legendary locations — from Central Park arches to historic cobblestone avenues and glowing sunset skylines.
            </p>

            {/* Popular Spot Hashtags */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-medium text-neutral-400">
              <span className="px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center gap-1 hover:border-amber-500/50 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> #CentralParkBowBridge
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center gap-1 hover:border-amber-500/50 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> #SoHoCastIron
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center gap-1 hover:border-amber-500/50 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> #BrooklynBridge
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 flex items-center gap-1 hover:border-amber-500/50 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> #1HourSessions
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-neutral-950 font-bold text-base shadow-xl gold-glow hover:gold-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5 fill-neutral-950" />
                Book Your NYC Shoot
              </button>

              <a
                href="#locations"
                className="px-8 py-4 rounded-xl glass-panel text-white hover:text-amber-300 font-semibold text-base border border-white/10 hover:border-amber-500/40 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Top NYC Spots</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#packages"
                className="px-6 py-4 rounded-xl bg-neutral-900/90 text-neutral-300 hover:text-white font-medium text-sm border border-neutral-800 hover:border-neutral-700 transition-all text-center"
              >
                Pricing & Packages
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-3 gap-4 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white leading-none">1-on-1</p>
                  <p className="text-xs text-neutral-400 mt-1">Dedicated Sessions</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white leading-none">5.0 ★★★★★</p>
                  <p className="text-xs text-neutral-400 mt-1">Google Reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white leading-none">Free</p>
                  <p className="text-xs text-neutral-400 mt-1">Rain Reschedule</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Card / Interactive Spot Switcher */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 space-y-5 gold-glow">

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" /> Top NYC Spot Spotlight
                </span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">
                  {heroImageIndex + 1} / {heroBackgrounds.length}
                </span>
              </div>

              {/* Location Card Image preview */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer border border-neutral-800">
                <img
                  src={heroBackgrounds[heroImageIndex].url}
                  alt={heroBackgrounds[heroImageIndex].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Featured Shooting Spot</p>
                  <p className="text-base font-bold text-white">{heroBackgrounds[heroImageIndex].title}</p>
                </div>
              </div>

              {/* Location Selector Switch */}
              <div className="grid grid-cols-2 gap-2">
                {heroBackgrounds.map((bg, idx) => (
                  <button
                    key={bg.locationTag}
                    onClick={() => setHeroImageIndex(idx)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${
                      heroImageIndex === idx
                        ? 'bg-amber-500 text-neutral-950 font-bold shadow-md'
                        : 'bg-neutral-900/90 text-neutral-400 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    {bg.locationTag}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking(heroBackgrounds[heroImageIndex].title)}
                  className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 hover:text-amber-200 border border-amber-500/30 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  Book Shoot At This Spot
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
