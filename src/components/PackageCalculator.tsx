import React, { useState } from 'react';
import { SERVICE_PACKAGES, ADD_ONS, NYC_LOCATIONS } from '../data/photographyData';
import { Check, Sparkles, Clock, MapPin, Layers, CheckCircle2, Zap } from 'lucide-react';

interface PackageCalculatorProps {
  onOpenBooking: (packageSummary: string) => void;
}

export const PackageCalculator: React.FC<PackageCalculatorProps> = ({ onOpenBooking }) => {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('signature');
  const [selectedLocations, setSelectedLocations] = useState<string[]>(['Central Park & Bow Bridge']);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);

  const activePackage = SERVICE_PACKAGES.find((p) => p.id === selectedPackageId) || SERVICE_PACKAGES[1];

  const toggleLocation = (locName: string) => {
    if (selectedLocations.includes(locName)) {
      if (selectedLocations.length > 1) {
        setSelectedLocations(selectedLocations.filter((l) => l !== locName));
      }
    } else {
      setSelectedLocations([...selectedLocations, locName]);
    }
  };

  const toggleAddOn = (addOnId: string) => {
    if (selectedAddOnIds.includes(addOnId)) {
      setSelectedAddOnIds(selectedAddOnIds.filter((id) => id !== addOnId));
    } else {
      setSelectedAddOnIds([...selectedAddOnIds, addOnId]);
    }
  };

  const addOnsTotal = selectedAddOnIds.reduce((sum, id) => {
    const item = ADD_ONS.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalInvestment = activePackage.price + addOnsTotal;

  const handleBookCustomPackage = () => {
    const summary = `${activePackage.name} ($${totalInvestment}) with locations: ${selectedLocations.join(', ')}`;
    onOpenBooking(summary);
  };

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
            Take advantage of special launch pricing on NYC portrait and couples sessions. Choose a package or customize your shoot.
          </p>
        </div>

        {/* Standard Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 mb-20">
          {SERVICE_PACKAGES.map((pkg) => {
            const isSelected = pkg.id === selectedPackageId;
            const savings = pkg.originalPrice ? pkg.originalPrice - pkg.price : 0;

            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackageId(pkg.id)}
                className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-2 border-amber-500 bg-amber-50/40 shadow-xl gold-glow scale-[1.02]'
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
                      <span className="text-slate-500 text-xs">/ total</span>
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPackageId(pkg.id);
                    }}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-white gold-glow'
                        : 'bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    {isSelected ? '✓ Selected Package' : 'Select This Package'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Customizer Box */}
        <div className="rounded-3xl bg-amber-50/70 border border-amber-300/80 p-8 lg:p-12 space-y-10 shadow-lg">
          
          <div className="border-b border-amber-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                <Zap className="w-4 h-4 text-amber-600" /> Interactive Package Customizer
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold mt-1">
                Customize Your NYC Shoot Experience
              </h3>
            </div>
            <div className="bg-white px-5 py-3 rounded-2xl border border-amber-300 shadow-sm text-right">
              <span className="text-xs text-slate-500 uppercase font-mono block">Estimated Investment</span>
              <span className="text-3xl font-serif font-bold text-amber-800">${totalInvestment}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Location Selection Checkboxes */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                Step 1: Select Location Included ({selectedLocations.length} Selected)
              </h4>
              <p className="text-xs text-slate-600">
                Choose where you want to shoot (e.g. Central Park, SoHo, Brooklyn Bridge, etc.)
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {NYC_LOCATIONS.map((loc) => {
                  const isChecked = selectedLocations.includes(loc.name);
                  return (
                    <button
                      key={loc.id}
                      onClick={() => toggleLocation(loc.name)}
                      className={`p-3.5 rounded-xl text-left border text-xs font-semibold transition-all flex items-center justify-between shadow-sm ${
                        isChecked
                          ? 'bg-amber-500 text-white border-amber-500 shadow-md'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-amber-300 hover:bg-slate-50'
                      }`}
                    >
                      <span>{loc.name}</span>
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                        isChecked ? 'bg-white border-white text-amber-600' : 'border-slate-300'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Add-ons Selector */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Step 2: Add Special Upgrades (Optional)
              </h4>
              <p className="text-xs text-slate-600">
                Enhance your experience with expedited gallery turnaround or extra digital photo edits.
              </p>

              <div className="space-y-3 pt-2">
                {ADD_ONS.map((addon) => {
                  const isChecked = selectedAddOnIds.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between shadow-sm ${
                        isChecked
                          ? 'bg-white border-2 border-amber-500 text-slate-900 shadow-md'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-amber-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="space-y-1">
                        <span className="text-sm font-bold block text-slate-900">{addon.name}</span>
                        <span className="text-xs text-slate-600 block">{addon.description}</span>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <span className="text-sm font-bold text-amber-700 font-mono">+${addon.price}</span>
                        <span className={`w-5 h-5 ml-auto mt-1 rounded-md flex items-center justify-center border ${
                          isChecked ? 'bg-amber-500 border-amber-500 text-white' : 'border-slate-300'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Bottom Summary & CTA */}
          <div className="pt-8 border-t border-amber-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs text-slate-500 uppercase font-mono">Custom Package Summary</span>
              <p className="text-sm font-semibold text-slate-900">
                {activePackage.name} + Locations: <strong className="text-amber-800">{selectedLocations.join(', ')}</strong>
              </p>
            </div>

            <button
              onClick={handleBookCustomPackage}
              className="w-full md:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-xl gold-glow hover:scale-105 transition-transform flex items-center justify-center gap-3"
            >
              <Sparkles className="w-5 h-5 fill-slate-950" />
              Lock In Date for ${totalInvestment}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
