import React from 'react';
import { Sparkles, Star, ArrowRight, ShieldCheck, Camera, Sun } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (location?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const heroImageUrl = 'https://assets.superjeffc.com/apps/dumbo1.jpg';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dynamic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageUrl}
          alt="NYC Client Photography Session"
          className="w-full h-full object-cover object-center transform scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/60 to-neutral-950/90" />
        <div className="absolute inset-0 bg-gradient-gold-radial opacity-75" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center">
        <div className="space-y-8 flex flex-col items-center">

          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-amber border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide uppercase shadow-lg">
            <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Golden Hour Booking Open • Focused 1-Hour NYC Sessions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-white leading-[1.1] max-w-4xl">
            Capturing <span className="text-gradient-amber italic font-normal">Authentic</span> NYC Moments in Iconic Light.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-neutral-300 font-normal max-w-2xl leading-relaxed">
            Professional portrait and couple photography focused on intimate <strong className="text-amber-300 font-medium">1-hour sessions</strong> in NYC’s most legendary locations — from Central Park arches to historic cobblestone avenues and glowing sunset skylines.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full max-w-md">
            <a
              href="#gallery"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-neutral-950 font-bold text-base shadow-xl gold-glow hover:gold-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              <span>View Client Gallery</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white hover:text-amber-300 font-semibold text-base border border-white/10 hover:border-amber-500/40 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Book a Session</span>
            </button>
          </div>

          {/* Key Trust Signals */}
          <div className="pt-8 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl w-full">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-white leading-none">1-on-1</p>
                <p className="text-xs text-neutral-400 mt-1">Dedicated Sessions</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-white leading-none">5.0 ★★★★★</p>
                <p className="text-xs text-neutral-400 mt-1">Google Reviews</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-white leading-none">Free</p>
                <p className="text-xs text-neutral-400 mt-1">Rain Reschedule</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
