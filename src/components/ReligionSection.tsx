/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sun, Sparkles, Compass, ShieldCheck, BookOpen, Layers } from 'lucide-react';

export const ReligionSection: React.FC = () => {
  return (
    <section id="religion" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B45309] font-bold mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>المعتقد والوجدان الديني</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#2C1E14]">
          تنوع المعتقدات الدينية في شبه الجزيرة العربية قبل الإسلام
        </h2>
        <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#5C4537] leading-relaxed [text-wrap:balance]">
          قراءة أكاديمية متوازنة توضح الفسيفساء الدينية في شبه الجزيرة؛ بين الوثنية الشائعة، وحنين الحنفاء إلى ملة إبراهيم، والوجود التاريخي للمسيحية واليهودية.
        </p>
      </div>

      {/* 4 Dedicated Cards for the 4 Faiths / Paths */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* 1. الوثنية والأصنام */}
        <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#E5DAC7] shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#EFE4D2] flex items-center justify-center text-[#8C3A27] font-bold mb-4">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-[#2C1E14] mb-2">
              1. الوثنية والأصنام
            </h3>
            <span className="text-xs font-semibold text-[#8C3A27] block mb-3">
              المعتقد الغالب على القبائل
            </span>
            <p className="text-xs text-[#4A3728] leading-relaxed mb-3">
              انتشرت بعد أن جلب عمرو بن لحي الخزاعي صنم <strong>هُبَل</strong> من الشام ووضعه في جوف الكعبة، فتحولت الكعبة إلى مجمع لأصنام القبائل (نحو 360 صنماً).
            </p>
            <div className="space-y-1.5 text-[11px] text-[#5C4537] bg-[#F4ECE0] p-3 rounded-xl border border-[#DECDB7]">
              <div><strong>اللات:</strong> صنم ثقيف بالطائف.</div>
              <div><strong>العُزَّى:</strong> صنم قريش وبني كنانة بنخلة.</div>
              <div><strong>مَنَاة:</strong> صنم الأوس والخزرج بقديد.</div>
              <div><strong>الممارسات:</strong> الأزلام، السائبة، والبحيرة.</div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E8DEC9] text-[11px] text-[#7A624E]">
            كانوا يقرون بوجود الله الخالق ويتخذون الأصنام شفعاء مقربين.
          </div>
        </div>

        {/* 2. الحنفاء الباحثون عن التوحيد */}
        <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#E5DAC7] shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#EFE4D2] flex items-center justify-center text-[#B45309] font-bold mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-[#2C1E14] mb-2">
              2. الحُنَفَاء الموحدون
            </h3>
            <span className="text-xs font-semibold text-[#B45309] block mb-3">
              بقايا ملة إبراهيم الخليل
            </span>
            <p className="text-xs text-[#4A3728] leading-relaxed mb-3">
              حكماء ومفكرون اعتزلوا الأوثان، وحرّموا الخمر والميسر وأكل الميتة وما ذُبح على النُّصب ووأد البنات، ونادوا بعبادة الله وحده لا شريك له.
            </p>
            <div className="space-y-1.5 text-[11px] text-[#5C4537] bg-[#F4ECE0] p-3 rounded-xl border border-[#DECDB7]">
              <div><strong>زيد بن عمرو بن نفيل:</strong> عاب على قريش ذبائحها للأصنام.</div>
              <div><strong>قس بن ساعدة الإيادي:</strong> خطيب عكاظ الداعي للبعث.</div>
              <div><strong>ورقة بن نوفل:</strong> قرأ الكتب واعتزل الوثنية.</div>
              <div><strong>عثمان بن الحويرث:</strong> رفض السجود للحجارة.</div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E8DEC9] text-[11px] text-[#7A624E]">
            مثّل الحنفاء الضمير الإيماني الفطري الممهد للدعوة الإسلامية.
          </div>
        </div>

        {/* 3. المسيحية في الجزيرة */}
        <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#E5DAC7] shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#EFE4D2] flex items-center justify-center text-[#1E3A8A] font-bold mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-[#2C1E14] mb-2">
              3. المسيحية والرهبان
            </h3>
            <span className="text-xs font-semibold text-[#1E3A8A] block mb-3">
              مراكز الجنوب والشمال
            </span>
            <p className="text-xs text-[#4A3728] leading-relaxed mb-3">
              انتشرت عبر الرهبان والاتصال بالدول المجاورة؛ وكان لها حضور كبير في جنوب الجزيرة وأطراف بلاد الشام والعراق.
            </p>
            <div className="space-y-1.5 text-[11px] text-[#5C4537] bg-[#F4ECE0] p-3 rounded-xl border border-[#DECDB7]">
              <div><strong>نصارى نجران:</strong> مركز روحي عريق وأسقفية كبرى.</div>
              <div><strong>مملكة الغساسنة:</strong> نصارى حلفاء للروم في الشام.</div>
              <div><strong>المناذرة بالحيرة:</strong> النصارى العباديون في العراق.</div>
              <div><strong>قبائل مسيحية:</strong> بطون من تغلب، وبكر، وقضاعة.</div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E8DEC9] text-[11px] text-[#7A624E]">
            خلد القرآن الكريم ثبات مؤمني نجران في قصة "أصحاب الأخدود".
          </div>
        </div>

        {/* 4. اليهودية وحصونها */}
        <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#E5DAC7] shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#EFE4D2] flex items-center justify-center text-[#15803D] font-bold mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-serif text-[#2C1E14] mb-2">
              4. اليهودية والواحات
            </h3>
            <span className="text-xs font-semibold text-[#15803D] block mb-3">
              مجتمعات يثرب واليمن
            </span>
            <p className="text-xs text-[#4A3728] leading-relaxed mb-3">
              استقرت مجتمعات يهودية في واحات شمال وغرب الجزيرة وفي بعض أجزاء اليمن، وعملوا في الزراعة والصياغة والحدادة والتجارة.
            </p>
            <div className="space-y-1.5 text-[11px] text-[#5C4537] bg-[#F4ECE0] p-3 rounded-xl border border-[#DECDB7]">
              <div><strong>قبائل يثرب:</strong> بنو قينقاع، النضير، وقريظة.</div>
              <div><strong>حصون الشمال:</strong> خيبر، فدك، وواحة تيماء.</div>
              <div><strong>يهودية اليمن:</strong> اعتناق الملك ذي نواس الحِميري لليهودية.</div>
              <div><strong>الحرف:</strong> صياغة الذهب، السلاح، والتجارة بالربا.</div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E8DEC9] text-[11px] text-[#7A624E]">
            كان أهل يثرب يسمعون منهم عن اقتراب مبعث نبي آخر الزمان.
          </div>
        </div>
      </div>

      {/* Synthesis Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#F4ECE0] border border-[#DECFB5] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold font-serif text-[#2C1E14] mb-2">
            الأثر التاريخي لهذا التنوع الديني
          </h4>
          <p className="text-xs sm:text-sm text-[#5C4537] leading-relaxed max-w-3xl">
            جعل هذا التعدد الفكري والديني مجتمع الجزيرة العربية على بيّنة بمفاهيم النبوة والكتب السماوية واليوم الآخر والحساب، مما شكّل أرضية معرفية مهيأة لميلاد الدعوة الإسلامية التي دعت إلى التوحيد الخالص وأنهت عهد الشرك والوثنية.
          </p>
        </div>
        <div className="text-xs text-[#8C3A27] font-semibold bg-[#EFE5D5] px-4 py-2 rounded-xl whitespace-nowrap shrink-0 border border-[#DECDB7]">
          المصدر: تاريخ الطبري، والمفصل لجواد علي
        </div>
      </div>
    </section>
  );
};
