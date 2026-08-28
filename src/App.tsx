import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PortfolioGallery } from './components/PortfolioGallery';
import { LocationShowcase } from './components/LocationShowcase';
import { PackageCalculator } from './components/PackageCalculator';
import { AboutPhotographer } from './components/AboutPhotographer';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedLocationForBooking, setSelectedLocationForBooking] = useState<string>('');

  const handleOpenBooking = (location?: string) => {
    setSelectedLocationForBooking(location || '');
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 font-sans antialiased">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Section */}
      <main>
        {/* Client Photo Gallery & Lightbox */}
        <PortfolioGallery onOpenBooking={handleOpenBooking} />

        {/* Curated NYC Photoshoot Locations */}
        <LocationShowcase onOpenBooking={handleOpenBooking} />

        {/* Photographer Bio & Philosophy */}
        <AboutPhotographer onOpenBooking={() => handleOpenBooking()} />

        {/* Testimonials */}
        <Testimonials />

        {/* Pricing Packages & Interactive Package Customizer */}
        <PackageCalculator onOpenBooking={handleOpenBooking} />

        {/* FAQs */}
        <FaqSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Booking & Contact Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialLocation={selectedLocationForBooking}
      />
    </div>
  );
}

export default App;
