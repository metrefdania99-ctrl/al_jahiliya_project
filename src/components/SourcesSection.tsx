/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, ShieldCheck, CheckCheck } from 'lucide-react';
import { HISTORICAL_SOURCES } from '../data/historyData.ts';

export const SourcesSection: React.FC = () => {
  return (
    <section id="sources" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B45309] font-bold mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>الأمانة العلمية والتوثيق</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#2C1E14]">
          المصادر والمراجع التاريخية والأدبية المعتمدة
        </h2>
        <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#5C4537] leading-relaxed [text-wrap:balance]">
          أُعدت هذه الموسوعة استناداً إلى أمهات كتب الأدب والتاريخ العربي الكلاسيكي والتحقيقات الأكاديمية الحديثة الرصينة.
        </p>
      </div>

      {/* Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {HISTORICAL_SOURCES.map((source, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#E5DAC7] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-[#8C3A27] font-mono mb-2">
                <span>مرجع معتمد #{idx + 1}</span>
                <CheckCheck className="w-4 h-4 text-[#2D6A4F]" />
              </div>
              <h3 className="text-lg font-bold font-serif text-[#2C1E14] mb-1">
                {source.title}
              </h3>
              <span className="text-xs font-semibold text-[#B45309] block mb-3">
                المؤلف: {source.author}
              </span>
              <p className="text-xs sm:text-sm text-[#5C4537] leading-relaxed">
                {source.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E8DEC9] text-[11px] text-[#7A624E]">
              تم الرجوع إليه في توثيق الأبيات والأنساب والأيام
            </div>
          </div>
        ))}
      </div>

      {/* Methodological Epilogue Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#F4ECE0] border border-[#DECFB5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-[#8C3A27] shrink-0 mt-1" />
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#2C1E14] font-serif mb-1">
              معيار التمييز بين الحقائق التاريخية والروايات الأدبية
            </h4>
            <p className="text-xs text-[#5C4537] leading-relaxed">
              حرص فريق إعداد المشروع على التمييز بين الحقائق الأثرية والتاريخية المقطوع بها (كالنقوش وجغرافية المواضع ومواسم الأسواق) وبين النوادر الأدبية والشعبية التي تناقلها الرواة الشفهيون، مقدّمين محتوى علمياً نزيهاً يليق بالمعايير المدرسية والجامعية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
