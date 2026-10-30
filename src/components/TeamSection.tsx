/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Users, GraduationCap, Award, Sparkles, BookOpen } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/historyData.ts';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B45309] font-bold mb-2">
          <GraduationCap className="w-4 h-4" />
          <span>المشروع المدرسي المتكامل</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#2C1E14]">
          فريق العمل وإنجاز المشروع
        </h2>
        <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#5C4537] leading-relaxed [text-wrap:balance]">
          نخبة الطالبات اللواتي ساهمن في إعداد، توثيق، وتصميم هذه الموسوعة التاريخية الرقمية عن العصر الجاهلي وتقديمه كعمل تعليمي متميز.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {TEAM_MEMBERS.map((member, index) => (
          <div
            key={member.id}
            className="group p-6 rounded-3xl bg-[#FAF6EE] border border-[#E5DAC7] hover:border-[#C5A059] hover:bg-[#FFFDF9] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Avatar circle */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8C3A27] to-[#421509] text-[#FFF8ED] flex items-center justify-center font-serif text-2xl font-bold shadow-sm group-hover:scale-105 transition-transform">
                  {member.avatarLetter}
                </div>
                <span className="text-[11px] font-mono text-[#A89F91] bg-[#EFE5D5] px-2.5 py-1 rounded-full font-semibold">
                  عضو 0{index + 1}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold font-serif text-[#2C1E14] group-hover:text-[#8C3A27] transition-colors mb-1.5">
                {member.name}
              </h3>

              {/* Role */}
              <div className="text-xs font-bold text-[#B45309] mb-3 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{member.role}</span>
              </div>

              {/* Contribution details */}
              <p className="text-xs text-[#5C4537] leading-relaxed">
                {member.contribution}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8DEC9] text-[11px] text-[#8C3A27] font-semibold flex items-center justify-between">
              <span>إسهام وإشراف مدرسي</span>
              <span>✦</span>
            </div>
          </div>
        ))}
      </div>

      {/* Presentation Badge */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2C1E14] to-[#1F140D] text-[#FDFBF7] border border-[#C5A059]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-right">
          <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/20 flex items-center justify-center text-[#E5C378] shrink-0 border border-[#C5A059]/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold font-serif text-[#FFF8ED]">
              مشروع مدرسي متميز في مادتي التاريخ والأدب العربي
            </h4>
            <p className="text-xs text-[#D6CEBE] mt-0.5">
              مقدَّم للعرض الصفي والتقييم الأكاديمي مع جاهزية كاملة لكافة المعلومات والمصادر الموثقة.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-[#E5C378] bg-[#3E2818] px-4 py-2 rounded-xl border border-[#C5A059]/30 whitespace-nowrap">
          <span>إعداد الطالبات المتميزات</span>
        </div>
      </div>
    </section>
  );
};
