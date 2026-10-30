/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, ScrollText, Users, Sparkles, Feather } from 'lucide-react';

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const designers = [
    'دانية مطرف',
    'قاصدي مريم',
    'حمداني إيناس',
    'موهوب منال'
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#1F140D] text-[#FDFBF7]">
      {/* Background Image with Fallback and Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_desert_sunset_1793327178344.jpg"
          alt="غروب الشمس الذهبي فوق كثبان الصحراء العربية وقوافل الإبل في العصر الجاهلي"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-fade-in"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F140D] via-[#1F140D]/65 to-black/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#1F140D]/80" />
      </div>

      {/* Decorative Traditional Border Ornamentation Accent */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#E5C378]/60 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Quiet Kicker Metadata */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#E5C378] font-medium tracking-wide mb-3">
          <span>مشروع تاريخي تعليمي متكامل</span>
          <span aria-hidden="true">·</span>
          <span>شبه الجزيرة العربية قبل الإسلام</span>
          <span aria-hidden="true">·</span>
          <span>ديوان العرب</span>
        </div>

        {/* Hero Title with Amiri font */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight text-[#FFF8ED] drop-shadow-md max-w-4xl [text-wrap:balance]">
          العصر الجاهلي: <span className="text-[#E5C378]">رحلة إلى حياة العرب</span> قبل الإسلام
        </h1>

        {/* PROMINENT DESIGNERS BLOCK AT TOP OF SITE (MANDATORY REQUIREMENT) */}
        <div className="mt-5 mb-5 p-3.5 sm:p-4 rounded-2xl bg-[#1F140D]/85 backdrop-blur-md border border-[#E5C378]/50 shadow-xl max-w-2xl w-full">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#E5C378] uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C378]" />
            <span>إعداد وتصميم:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-bold text-[#FFF8ED]">
            {designers.map((name, idx) => (
              <div
                key={idx}
                className="py-1.5 px-2 bg-[#2D1C12]/90 hover:bg-[#3D2619] rounded-xl border border-[#C5A059]/40 flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <span className="text-[#E5C378]">✦</span>
                <span className="whitespace-nowrap">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtitle - concise and refined */}
        <p className="text-sm sm:text-lg text-[#E8DFD3] max-w-2xl leading-relaxed [text-wrap:balance]">
          استكشف عالم القبائل العربية، وفرسان الصحراء، وفحول الشعراء، والأسواق التي صنعت ملامح الحياة القديمة.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#introduction"
            className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base text-[#1F140D] bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C5A059] hover:from-[#F3DFA2] hover:to-[#E5C378] shadow-lg shadow-[#000000]/40 transition-all transform hover:-translate-y-0.5"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
            <span>ابدأ الرحلة التاريخية</span>
          </a>

          <a
            href="#characters"
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm sm:text-base text-[#FDFBF7] bg-[#2C1E14]/80 hover:bg-[#3D2817] border border-[#C5A059]/40 backdrop-blur-sm transition-all"
          >
            <Users className="w-4 h-4 text-[#E5C378]" />
            <span>معرض الشخصيات</span>
          </a>

          <a
            href="#poetry"
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm sm:text-base text-[#E5C378] hover:text-[#FFF8ED] bg-[#1F140D]/60 hover:bg-[#2C1E14] border border-[#C5A059]/30 transition-all"
          >
            <ScrollText className="w-4 h-4 text-[#E5C378]" />
            <span>المعلقات وشعر العرب</span>
          </a>
        </div>

        {/* Quantitative Historical Anchors strip */}
        <div className="mt-10 pt-6 border-t border-[#C5A059]/20 w-full max-w-3xl flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm text-[#D6CEBE]">
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-bold font-serif text-[#E5C378] tabular-nums">150–200</span>
            <span className="text-[11px] text-[#A89F91] mt-0.5">عاماً قبل البعثة النبوية</span>
          </div>
          <span className="text-[#C5A059]/40 text-lg hidden sm:inline">|</span>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-bold font-serif text-[#E5C378] tabular-nums">7 / 10</span>
            <span className="text-[11px] text-[#A89F91] mt-0.5">معلقات مذهبة</span>
          </div>
          <span className="text-[#C5A059]/40 text-lg hidden sm:inline">|</span>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-bold font-serif text-[#E5C378] tabular-nums">سوق عكاظ</span>
            <span className="text-[11px] text-[#A89F91] mt-0.5">مجمع الأدب والتجارة</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FDFBF7] to-transparent pointer-events-none" />
    </section>
  );
};
