import React from 'react';
import { SERVICE_PACKAGES } from '../data/photographyData';
import { Sparkles, Clock, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface PackageCalculatorProps {
  onOpenBooking: (packageSummary: string) => void;
}

export const PackageCalculator: React.FC<PackageCalculatorProps> = ({ onOpenBooking }) => {
  return (
    <section id="packages" className="py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Special Introductory Rates • Limited Time Launch Offer</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight">
            Introductory Rates. <span className="text-gradient-amber italic font-normal">Unforgettable Memories.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Special beginner-friendly launch pricing on NYC portrait and couples sessions. Transparent, all-inclusive pricing with no hidden fees.
          </p>
        </div>

        {/* Standard Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {SERVICE_PACKAGES.map((pkg) => {
            const savings = pkg.originalPrice ? pkg.originalPrice - pkg.price : 0;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                  pkg.popular
                    ? 'border-2 border-amber-500 bg-amber-50/30 shadow-xl gold-glow md:-translate-y-2'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md">
                    ★ Most Popular Choice
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900">{pkg.name}</h3>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">{pkg.tagline}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80 space-y-1">
                    <div className="flex items-baseline gap-2">
                      {pkg.originalPrice && (
                        <span className="text-xl font-bold text-slate-400 line-through">${pkg.originalPrice}</span>
                      )}
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-serif">${pkg.price}</span>
                      <span className="text-slate-500 text-xs">/ session</span>
                    </div>
                    {savings > 0 && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-800 text-[11px] font-bold">
                        Introductory Offer — Save ${savings}
                      </span>
                    )}
                  </div>

                  {/* Highlights Bar */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-amber-600" />
                      <span>{pkg.editedPhotos} Edits</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-2">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onOpenBooking(`${pkg.name} ($${pkg.price})`)}
                    className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg gold-glow hover:scale-[1.02]'
                        : 'bg-slate-900 text-white hover:bg-amber-600 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <span>Book {pkg.name.split(' ')[1] || 'Session'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
