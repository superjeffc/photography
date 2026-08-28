import React from 'react';
import { Camera, MapPin, Globe, ArrowUp } from 'lucide-react';
import { ProtectedEmail, ProtectedPhone } from './ProtectedContact';

interface FooterProps {
  onOpenBooking: (location?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-white font-bold gold-glow">
                <Camera className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-syne font-extrabold text-xl tracking-wider text-slate-900 uppercase">
                Jeff Chan Photography
              </span>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm max-w-sm leading-relaxed">
              Premier NYC client portrait and couple photography specializing in focused 1-hour sessions across iconic spots like Central Park, SoHo, and Brooklyn Bridge.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-amber-600 hover:bg-slate-50 hover:text-amber-700 transition-colors"
                aria-label="Instagram"
              >
                <Globe className="w-4 h-4" />
              </a>
              <ProtectedEmail user="jeff" domain="superjeffc.com" showIcon={true} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#gallery" className="hover:text-amber-600 transition-colors">Client Portfolio</a></li>
              <li><a href="#locations" className="hover:text-amber-600 transition-colors">NYC Locations</a></li>
              <li><a href="#packages" className="hover:text-amber-600 transition-colors">Pricing & Customizer</a></li>
              <li><a href="#about" className="hover:text-amber-600 transition-colors">About Jeff</a></li>
              <li><a href="#reviews" className="hover:text-amber-600 transition-colors">Client Reviews</a></li>
              <li><a href="#faqs" className="hover:text-amber-600 transition-colors">FAQs & Policies</a></li>
            </ul>
          </div>

          {/* Featured Spots */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">Featured Spots</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenBooking('Central Park & Bow Bridge')} className="hover:text-amber-600 transition-colors text-left">
                  Central Park Bow Bridge
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('SoHo Cast-Iron District')} className="hover:text-amber-600 transition-colors text-left">
                  SoHo Cast-Iron Facades
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('Brooklyn Bridge Walkway')} className="hover:text-amber-600 transition-colors text-left">
                  Brooklyn Bridge Sunrise
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBooking('Times Square Plaza (Daylight)')} className="hover:text-amber-600 transition-colors text-left">
                  Times Square Plaza (Daylight)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">NYC Studio Contact</h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>New York City, NY</span>
              </p>
              <div className="pt-1 space-y-1.5">
                <ProtectedPhone number="9293985478" formatted="(929) 398-5478" />
                <div className="pt-1">
                  <ProtectedEmail user="jeff" domain="superjeffc.com" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Jeff Chan Photography NYC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={scrollToTop} className="flex items-center gap-1.5 text-amber-700 hover:text-amber-800 font-semibold">
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
