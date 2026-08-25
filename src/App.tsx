import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioGallery } from './components/PortfolioGallery';
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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased">
      {/* Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Hero Section */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Client Photo Gallery & Lightbox */}
        <PortfolioGallery onOpenBooking={handleOpenBooking} />

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
