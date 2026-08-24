import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, MapPin, CheckCircle2, Mail, Clock, Send, Camera } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLocation?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialLocation = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    location: initialLocation || 'Central Park & Bow Bridge',
    sessionType: 'Couples',
    guestsCount: '2 People',
    message: '',
    // Anti-spam Honeypot field (invisible to real humans)
    website_hp: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  useEffect(() => {
    if (initialLocation) {
      setFormData((prev) => ({ ...prev, location: initialLocation }));
    }
  }, [initialLocation]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-Spam Honeypot check: If the hidden honeypot field is filled out, reject bot submission
    if (formData.website_hp && formData.website_hp.length > 0) {
      console.warn('Spam bot detected and blocked via Honeypot protection.');
      setSubmitted(true);
      return;
    }

    setSubmitting(true);
    const randomId = 'NYC-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(randomId);

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwNr8X57CIFu66gltp4sRB4Q0H_lnnS6WVqRuBNME0M5g02Swrnb8021nmPpDxPnttq/exec';

    if (scriptUrl) {
      try {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            inquiryId: randomId,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            date: formData.date,
            location: formData.location,
            sessionType: formData.sessionType,
            message: formData.message,
          })
        });
      } catch (err) {
        console.error('Failed to dispatch Google Script Webhook:', err);
      }
    }

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#fbbf24', '#ffffff']
      });
    } catch (err) {
      console.log('Confetti trigger:', err);
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative max-w-2xl w-full glass-panel rounded-3xl border border-amber-500/40 p-6 sm:p-10 shadow-2xl gold-glow-lg my-8">
        
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            {/* Modal Header */}
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-semibold border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant Availability & Booking Inquiry</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Book Your <span className="text-gradient-amber">1-Hour NYC Photography Shoot</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                Fill out the form below to lock in your preferred date for your NYC photo session.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Anti-Spam Honeypot Field - Hidden from humans, traps spambots */}
              <div className="sr-only aria-hidden opacity-0 pointer-events-none absolute -z-50 left-[-9999px]">
                <label htmlFor="website_hp">Leave this empty</label>
                <input
                  type="text"
                  id="website_hp"
                  name="website_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website_hp}
                  onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                />
              </div>

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(212) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Target Date / Preferred Month *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Location Dropdown & Session Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" /> Preferred NYC Location *
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Central Park & Bow Bridge">Central Park & Bow Bridge</option>
                    <option value="SoHo Cast-Iron District">SoHo Cast-Iron District (Manhattan)</option>
                    <option value="Brooklyn Bridge Walkway">Brooklyn Bridge Walkway (Sunrise)</option>
                    <option value="DUMBO & Washington St">DUMBO & Washington St (Brooklyn)</option>
                    <option value="Gantry Plaza State Park">Gantry Plaza State Park (Queens Waterfront)</option>
                    <option value="Times Square & Neon Lights">Times Square & Neon Lights (Night)</option>
                    <option value="Custom NYC Location">Custom NYC Location / Studio</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Camera className="w-3.5 h-3.5 text-amber-400" /> Session Type *
                  </label>
                  <select
                    value={formData.sessionType}
                    onChange={(e) => setFormData({ ...formData, sessionType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Couples">Couples</option>
                    <option value="Solo Portrait / Branding">Solo Portrait / Personal Branding</option>
                    <option value="Family / Maternity">Family / Maternity</option>
                  </select>
                </div>
              </div>

              {/* Message / Details */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Vision, Outfit Ideas & Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us a bit about your vision or any special requests (e.g. preferred locations, golden hour vs sunrise)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-neutral-950 font-extrabold text-sm uppercase tracking-wider shadow-2xl gold-glow hover:scale-[1.01] transition-transform flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  <Send className="w-4 h-4 fill-neutral-950" />
                  {submitting ? 'Sending Inquiry...' : 'Submit Inquiry & Reserve Spot'}
                </button>
              </div>

              <p className="text-[11px] text-neutral-500 text-center flex items-center justify-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Jeff guarantees a personal reply & route plan within 2 business hours.
              </p>

            </form>
          </div>
        ) : (
          /* Confirmation Success Screen */
          <div className="space-y-6 text-center py-4 animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-500 text-amber-400 flex items-center justify-center mx-auto gold-glow">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                Inquiry Confirmed • Reference {inquiryId}
              </span>
              <h3 className="text-3xl font-serif font-bold text-white">
                Thank You, {formData.name}!
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Your NYC photography session request for <strong className="text-amber-300">{formData.location}</strong> has been received!
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-950 border border-amber-500/20 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Location:</span>
                <span className="font-bold text-white">{formData.location}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Session Type:</span>
                <span className="font-bold text-white">{formData.sessionType}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-800 pb-2">
                <span className="text-neutral-400">Requested Date:</span>
                <span className="font-bold text-white">{formData.date || 'Flexible / To Be Confirmed'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Response Guaranteed:</span>
                <span className="font-bold text-amber-300">Within 2 Hours</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`mailto:jeff@superjeffc.com?subject=Inquiry ${inquiryId}`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-900 text-neutral-200 hover:text-white border border-neutral-800 text-xs font-bold flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                Email Direct
              </a>
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-amber-500 text-neutral-950 font-extrabold text-xs uppercase tracking-wider gold-glow"
              >
                Done / Back to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
