import React from 'react';
import { Sparkles, Star, ArrowRight, ShieldCheck, Camera, Sun } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (location?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const heroImageUrl = 'https://assets.superjeffc.com/apps/dumbo1.jpg';

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#faf8f5]">
      {/* Background Image with Warm Bright Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageUrl}
          alt="NYC Client Photography Session"
          className="w-full h-full object-cover object-center transform scale-105 opacity-40 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/70 to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5]/90 via-transparent to-[#faf8f5]/90" />
        <div className="absolute inset-0 bg-gradient-gold-radial opacity-90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-center">
        <div className="space-y-8 flex flex-col items-center">

          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-amber border border-amber-300 text-amber-900 text-xs font-bold tracking-wide uppercase shadow-md">
            <Sun className="w-4 h-4 text-amber-600 animate-pulse" />
            <span>Golden Hour Booking Open • Focused 1-Hour NYC Sessions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-slate-900 leading-[1.1] max-w-4xl">
            Capturing <span className="text-gradient-amber italic font-normal">Authentic</span> NYC Moments in Iconic Light.
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-700 font-normal max-w-2xl leading-relaxed">
            Professional portrait and couple photography focused on intimate <strong className="text-amber-700 font-semibold">1-hour sessions</strong> in NYC’s most legendary locations — from Central Park arches to historic cobblestone avenues and glowing sunset skylines.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full max-w-md">
            <a
              href="#gallery"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-base shadow-xl gold-glow hover:gold-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              <span>View Client Gallery</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-semibold text-base border border-slate-300 hover:border-amber-500/40 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Book a Session</span>
            </button>
          </div>

          {/* Key Trust Signals */}
          <div className="pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl w-full">
            <div className="flex items-center justify-center gap-3 p-3.5 rounded-2xl glass-panel border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-slate-900 leading-none">1-on-1</p>
                <p className="text-xs text-slate-600 mt-1">Dedicated Sessions</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-3.5 rounded-2xl glass-panel border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 shrink-0">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-slate-900 leading-none">5.0 ★★★★★</p>
                <p className="text-xs text-slate-600 mt-1">Google Reviews</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-3.5 rounded-2xl glass-panel border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xl font-bold text-slate-900 leading-none">Free</p>
                <p className="text-xs text-slate-600 mt-1">Rain Reschedule</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
