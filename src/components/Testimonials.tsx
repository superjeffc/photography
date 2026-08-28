import React from 'react';
import { TESTIMONIALS } from '../data/photographyData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>Client Reviews & Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif text-slate-900 tracking-tight">
            Loved By <span className="text-gradient-amber italic font-normal">Hundreds of Clients</span> Across NYC
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            See what couples, travelers, and clients say about their NYC photography sessions.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-8 bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-amber-500/15 group-hover:text-amber-500/30 transition-colors pointer-events-none" />

              <div className="space-y-4">
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info Bar */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-800 flex items-center justify-center font-bold text-sm shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    {item.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
