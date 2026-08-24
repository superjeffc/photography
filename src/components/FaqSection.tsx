import React, { useState } from 'react';
import { FAQS } from '../data/photographyData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredFaqs = FAQS.filter((f) =>
    activeCategory === 'all' ? true : f.category === activeCategory
  );

  return (
    <section id="faqs" className="py-24 bg-neutral-900/40 relative border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Frequently Asked <span className="text-gradient-amber italic font-normal">Questions</span>
          </h2>

          <p className="text-neutral-400 text-base">
            Everything you need to know about planning your 1-hour NYC photography shoot.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-10">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'locations', label: 'NYC Locations' },
            { id: 'booking', label: 'Booking & Timing' },
            { id: 'weather', label: 'Weather Rescheduling' },
            { id: 'delivery', label: 'Photo Delivery' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-md'
                  : 'bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl glass-panel border transition-all overflow-hidden ${
                  isOpen ? 'border-amber-500/40 bg-neutral-900/90 shadow-lg' : 'border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-serif">{faq.question}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center bg-neutral-900 border ${
                    isOpen ? 'bg-amber-500 border-amber-500 text-neutral-950' : 'border-neutral-700 text-neutral-400'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4 stroke-[3]" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 mt-1 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl glass-panel-amber border border-amber-500/30 space-y-3">
          <h3 className="text-xl font-bold text-white font-serif">Have a custom request or specific date in mind?</h3>
          <p className="text-neutral-300 text-sm max-w-xl mx-auto">
            Send a quick message and Jeff will get back to you within 2 hours with available dates and custom route suggestions!
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider gold-glow hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Ask a Question / Check Availability
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
