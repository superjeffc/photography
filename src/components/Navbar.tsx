import React, { useState, useEffect } from 'react';
import { Camera, Calendar, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (location?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Gallery', href: '#gallery' },
    { name: 'Locations', href: '#locations' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Pricing', href: '#packages' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-md border-b border-slate-200/80'
          : 'bg-gradient-to-b from-white/90 via-white/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300 gold-glow shrink-0">
              <Camera className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-syne font-extrabold text-base sm:text-lg xl:text-xl tracking-wider text-slate-900 uppercase block leading-none group-hover:text-amber-600 transition-colors whitespace-nowrap">
                Jeff Chan Photography
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider gold-glow transition-all"
            >
              Book Session
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-amber-600 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href="tel:+19293985478"
              className="flex items-center justify-center gap-2 text-sm text-slate-700 py-2 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-amber-600" />
              Call (929) 398-5478
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm shadow-lg gold-glow"
            >
              <Calendar className="w-4 h-4" />
              Book Your NYC Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
