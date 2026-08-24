import React, { useState, useEffect } from 'react';
import { Camera, Calendar, Sparkles, Menu, X, PhoneCall } from 'lucide-react';

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
    { name: 'NYC Spots', href: '#locations' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Packages', href: '#packages' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-neutral-950 font-bold text-lg shadow-lg group-hover:scale-105 transition-transform duration-300 gold-glow shrink-0">
              <Camera className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-syne font-extrabold text-base sm:text-lg xl:text-xl tracking-wider text-white uppercase block leading-none group-hover:text-amber-300 transition-colors whitespace-nowrap">
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
                className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <a
              href="tel:+19293985478"
              className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white px-3.5 py-2 rounded-lg bg-neutral-900/60 border border-neutral-800 transition-colors whitespace-nowrap shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="whitespace-nowrap">(929) 398-5478</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 p-[1px] font-semibold shadow-lg gold-glow hover:gold-glow-lg transition-all duration-300 shrink-0"
            >
              <span className="flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-[11px] bg-neutral-950 text-amber-300 text-xs xl:text-sm font-semibold group-hover:bg-transparent group-hover:text-neutral-950 transition-all duration-300 whitespace-nowrap">
                <Sparkles className="w-4 h-4 shrink-0" />
                Book NYC Session
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800/60 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-neutral-800 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-200 hover:text-amber-400 py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <a
              href="tel:+19293985478"
              className="flex items-center justify-center gap-2 text-sm text-neutral-300 py-2 rounded-lg bg-neutral-900 border border-neutral-800"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              Call (929) 398-5478
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-950 font-bold text-sm shadow-lg gold-glow"
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
