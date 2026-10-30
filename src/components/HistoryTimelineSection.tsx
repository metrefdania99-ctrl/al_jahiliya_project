/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Shield, Swords, Users, Sparkles, X, AlertCircle } from 'lucide-react';
import { HISTORICAL_EVENTS, HistoricalEvent } from '../data/historyData.ts';

export const HistoryTimelineSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B45309] font-bold mb-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>أيام العرب والوقائع الكبرى</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#2C1E14]">
          الخط الزمني لأهم وقائع وأيام العصر الجاهلي
        </h2>
        <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#5C4537] leading-relaxed [text-wrap:balance]">
          أيام تاريخية مخلدة صاغت وعي القبائل وأدبها؛ من حروب الثأر الدامية كالبسوس وداحس، إلى ملاحم النصر التاريخي في ذي قار، وميثاق العدالة في حلف الفضول.
        </p>
      </div>

      {/* Interactive Timeline Rail */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central connecting vertical line on desktop */}
        <div className="hidden md:block absolute top-0 bottom-0 right-1/2 translate-x-1/2 w-0.5 bg-[#DECFB5]" />

        <div className="space-y-12">
          {HISTORICAL_EVENTS.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={event.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Central Timeline Milestone Node */}
                <div className="hidden md:flex absolute right-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-[#2C1E14] border-4 border-[#FDFBF7] shadow items-center justify-center text-[#E5C378] text-xs font-bold z-10">
                  0{index + 1}
                </div>

                {/* Event Card (occupies half width on desktop) */}
                <div className="w-full md:w-[46%]">
                  <div
                    onClick={() => setSelectedEvent(event)}
                    className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#E5DAC7] hover:border-[#C5A059] hover:bg-[#FFFDF9] shadow-sm hover:shadow-md transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#8C3A27] bg-[#EFE5D5] px-3 py-1 rounded-full">
                        {event.approxDate}
                      </span>
                      <Swords className="w-4 h-4 text-[#C5A059]" />
                    </div>

                    <h3 className="text-xl font-bold font-serif text-[#2C1E14] group-hover:text-[#8C3A27] transition-colors mb-2">
                      {event.title}
                    </h3>

                    <div className="text-xs font-semibold text-[#5C4537] mb-3">
                      <strong>الأطراف:</strong> {event.parties}
                    </div>

                    <p className="text-xs sm:text-sm text-[#4A3728] leading-relaxed line-clamp-2 mb-4">
                      {event.causes}
                    </p>

                    <div className="pt-3 border-t border-[#E8DEC9] flex items-center justify-between text-xs font-bold text-[#8C3A27]">
                      <span>انقر لعرض الأسباب والوقائع والنتائج</span>
                      <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                    </div>
                  </div>
                </div>

                {/* Empty spacer for alignment on desktop */}
                <div className="hidden md:block w-full md:w-[46%]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          />

          <div className="relative z-10 w-full max-w-2xl bg-[#FDFBF7] rounded-3xl border border-[#C5A059]/40 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-[#2C1E14]">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 left-5 p-2 rounded-full bg-[#EFE5D5] hover:bg-[#E5DAC6] text-[#2C1E14] transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 pt-2">
              <span className="text-xs font-bold text-[#8C3A27] bg-[#EFE5D5] px-3 py-1 rounded-full inline-block mb-2">
                {selectedEvent.approxDate}
              </span>
              <h3 className="text-2xl font-bold font-serif text-[#2C1E14]">
                {selectedEvent.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6C5646] mt-1 font-semibold">
                الأطراف المعنية: {selectedEvent.parties}
              </p>
            </div>

            <div className="space-y-5 text-xs sm:text-sm text-[#4A3728] leading-relaxed">
              <div className="p-4 bg-[#F5ECE0] rounded-2xl border border-[#DECDB7]">
                <strong className="block text-xs font-bold text-[#8C3A27] uppercase tracking-wider mb-1">
                  أسباب الوقعة وشرارتها:
                </strong>
                <p>{selectedEvent.causes}</p>
              </div>

              <div className="p-4 bg-[#F9F5EE] rounded-2xl border border-[#E5DAC7]">
                <strong className="block text-xs font-bold text-[#2C1E14] uppercase tracking-wider mb-1">
                  أهم مجريات الوقعة:
                </strong>
                <p>{selectedEvent.events}</p>
              </div>

              <div className="p-4 bg-[#F5ECE0] rounded-2xl border border-[#DECDB7]">
                <strong className="block text-xs font-bold text-[#8C3A27] uppercase tracking-wider mb-1">
                  النتائج والآثار التاريخية:
                </strong>
                <p>{selectedEvent.results}</p>
              </div>

              <div className="p-4 bg-[#FAF0E1] rounded-2xl border border-[#DEC2A0]">
                <strong className="block text-xs font-bold text-[#B45309] uppercase tracking-wider mb-1">
                  الأهمية في الذاكرة العربية:
                </strong>
                <p>{selectedEvent.historicalImportance}</p>
              </div>

              {selectedEvent.scholarlyNote && (
                <div className="p-3 bg-[#EAE0D0] rounded-xl text-xs text-[#5C4537] italic border border-[#D5C2AB]">
                  <strong>إضاءة توثيقية:</strong> {selectedEvent.scholarlyNote}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8DEC9] text-left">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-5 py-2 text-xs font-bold text-[#1F140D] bg-[#E5C378] hover:bg-[#D4AF37] rounded-xl transition-colors"
              >
                إغلاق النافذة
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
