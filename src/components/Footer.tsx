/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, BookOpen, Compass, Heart, GraduationCap, Users } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projectMembers = [
    'قاصدي مريم',
    'مطرف دانة',
    'حميداني إيناس',
    'موهوب منال'
  ];

  return (
    <footer className="bg-[#19100A] text-[#FDFBF7] border-t border-[#C5A059]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C5A059]/20">
          {/* Brand & Project Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold font-serif text-[#E5C378]">
              <Compass className="w-6 h-6 text-[#C5A059]" />
              <span>رحلة إلى العصر الجاهلي</span>
            </div>
            <p className="text-xs sm:text-sm text-[#D6CEBE] leading-relaxed max-w-md">
              موسوعة تاريخية وتعليمية تفاعلية أُعدت كـ <strong>مشروع مدرسي نموذجي متكامل</strong> للتعريف بحياة العرب قبل الإسلام، فحول شعرائهم، المعلقات السبع، الأسواق التجارية الكبرى، ومكارم الأخلاق التي مهدت لبزوغ فجر الرسالة المحمدية.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#E5C378]">
              <GraduationCap className="w-4 h-4" />
              <span>مشروع مدرسي متميز · بحوث التاريخ والأدب العربي</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold text-[#E5C378] uppercase tracking-wider block">
              أقسام الموسوعة
            </span>
            <ul className="space-y-2 text-xs text-[#D6CEBE]">
              <li><a href="#introduction" className="hover:text-[#E5C378] transition-colors">مفهوم الجاهلية والخريطة</a></li>
              <li><a href="#characters" className="hover:text-[#E5C378] transition-colors">معرض الشخصيات والفرسان</a></li>
              <li><a href="#poetry" className="hover:text-[#E5C378] transition-colors">المعلقات والأغراض الشعرية</a></li>
              <li><a href="#social-life" className="hover:text-[#E5C378] transition-colors">الحياة الاجتماعية والعادات</a></li>
              <li><a href="#tribes-markets" className="hover:text-[#E5C378] transition-colors">القبائل والأسواق الموسمية</a></li>
              <li><a href="#religion" className="hover:text-[#E5C378] transition-colors">المعتقدات الدينية المتنوعة</a></li>
              <li><a href="#events" className="hover:text-[#E5C378] transition-colors">أيام العرب والحروب الكبرى</a></li>
              <li><a href="#team" className="hover:text-[#E5C378] transition-colors">فريق عمل المشروع</a></li>
              <li><a href="#sources" className="hover:text-[#E5C378] transition-colors">المصادر والمراجع المعتمدة</a></li>
            </ul>
          </div>

          {/* Team Members Dedication Panel - specifically requested in user prompt */}
          <div className="md:col-span-4 space-y-4">
            <div className="p-5 rounded-2xl bg-[#241710] border border-[#C5A059]/30">
              <div className="flex items-center gap-2 text-xs font-bold text-[#E5C378] uppercase tracking-wider mb-2">
                <Users className="w-4 h-4" />
                <span>إعداد وإنجاز الطالبات:</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-[#FFF8ED]">
                {projectMembers.map((name, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 p-2 bg-[#2E1E15] rounded-lg border border-[#C5A059]/20">
                    <span className="text-[#C5A059] font-bold">✦</span>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] text-[#A89F91] leading-relaxed">
                مقدم كعمل تعليمي ريادي يجمع بين التوثيق الأكاديمي والتصميم الرقمي التفاعلي.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89F91]">
          <div className="flex items-center gap-1">
            <span>مشروع مدرسي تعليمي متكامل عن العصر الجاهلي</span>
            <span>·</span>
            <span>جميع النصوص موثقة عن أمهات المصادر التراثية</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#241710] hover:bg-[#332219] text-[#E5C378] border border-[#C5A059]/30 transition-all text-xs"
          >
            <span>العودة إلى الأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
