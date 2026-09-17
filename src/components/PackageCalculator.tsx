import React from 'react';
import { SERVICE_PACKAGES } from '../data/photographyData';
import { Sparkles, Clock, Users, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

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
            <span>Discounted Packages • Limited Time Offer</span>
          </div>
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

                  {/* Highlights Bar: Duration, Party Size, Edits */}
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center gap-1.5 text-center">
                      <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate">{pkg.duration.replace(' (1 Hr Max)', '')}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center gap-1.5 text-center">
                      <Users className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate">{pkg.partySize}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center gap-1.5 text-center">
                      <Layers className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate">{pkg.editedPhotos} Edits</span>
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
                    <span>Book {pkg.name.split(' ')[0] || 'Session'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Family & Group Policy Callout */}
        <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-700 shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm">
            <h4 className="font-bold text-slate-900 font-serif text-base">Planning a Family or Group Photoshoot?</h4>
            <p className="text-slate-600 leading-relaxed">
              All packages include up to <strong>2 people</strong> (ideal for solo portraits, couples, or friends). For families and groups of 3 or more, additional guests are <strong>$50/person</strong> to accommodate group combinations and individual portraits.
            </p>
            <p className="text-amber-800 font-medium text-xs">
              Recommendation: For groups of 3+, we suggest our 60-Minute Signature or Deluxe sessions so everyone gets plenty of camera time without feeling rushed.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
