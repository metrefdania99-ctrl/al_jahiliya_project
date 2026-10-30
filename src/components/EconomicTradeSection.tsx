/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShoppingBag, TrendingUp, Sun, Sparkles, Navigation } from 'lucide-react';

export const EconomicTradeSection: React.FC = () => {
  return (
    <section id="economic-trade" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B45309] font-bold mb-2">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>شريان القوافل والأسواق</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#2C1E14]">
          الحياة الاقتصادية والتجارة عند العرب
        </h2>
        <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#5C4537] leading-relaxed [text-wrap:balance]">
          قامت الحياة الاقتصادية على التجارة الدولية للقوافل، والرعي في بوادي نجد، والزراعة الخصيبة في واحات يثرب وجبال اليمن والطائف.
        </p>
      </div>

      {/* Featured Caravan Visual & Route Analysis */}
      <div className="mb-16 rounded-3xl overflow-hidden border border-[#DECFB5] bg-[#FAF6EE] shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full">
          <img
            src="/src/assets/images/ancient_caravan_route_1793327180441.jpg"
            alt="قافلة إبل تجارية محملة بالبخور والتوابل تعبر دروب الجبال بين اليمن والشام"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 right-3 bg-[#1F140D]/85 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#E5C378] border border-[#C5A059]/30">
            إعادة تصور فني للحياة في العصر الجاهلي
          </div>
        </div>

        <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C3A27] uppercase tracking-wider mb-2">
              <Navigation className="w-4 h-4" />
              <span>درب البخور ورحلتا الشتاء والصيف</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#2C1E14] mb-4">
              دور مكة الاستراتيجي وحلف «الإيلاف»
            </h3>
            <p className="text-sm text-[#4A3728] leading-relaxed mb-4">
              ابتكر هاشم بن عبد مناف القرشي نظام <strong className="text-[#8C3A27]">«الإيلاف»</strong>، وهو معاهدات أمان دبلوماسية وتجارية عقدها مع ملوك الروم وفارس وأمراء الغساسنة والحيرة ورؤساء القبائل التي تمر القوافل في أراضيها.
            </p>
            <p className="text-sm text-[#4A3728] leading-relaxed mb-4">
              أمّن هذا الحلف حركة قوافل قريش الكبرى:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
              <div className="p-3 bg-[#EFE5D5] rounded-xl border border-[#DECDB7]">
                <strong className="block text-[#8C3A27] font-serif text-sm mb-1">رحلة الشتاء (اليمن)</strong>
                التوجه جنوباً نحو موانئ اليمن لجلب اللبان والبخور والحرير الصيني والتوابل الهندية القادمة عبر البحر.
              </div>
              <div className="p-3 bg-[#EFE5D5] rounded-xl border border-[#DECDB7]">
                <strong className="block text-[#8C3A27] font-serif text-sm mb-1">رحلة الصيف (الشام)</strong>
                التوجه شمالاً إلى بصرى الشام وغزة لتسويق بضائع الشرق وشراء الحبوب والزيوت والمنسوجات والأسلحة.
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8DEC9] text-xs text-[#7A624E] italic">
            خلّد القرآن الكريم هذا النشاط في قوله تعالى: «لِإِيلَافِ قُرَيْشٍ · إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ».
          </div>
        </div>
      </div>

      {/* 4 Pillars of Economy */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-[#F8F4EC] border border-[#E5DAC6] shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#EFE4D2] flex items-center justify-center text-[#8C3A27] mb-4">
            <Sun className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold font-serif text-[#2C1E14] mb-2">
            مكانة الإبل «سفينة الصحراء»
          </h4>
          <p className="text-xs sm:text-sm text-[#5C4537] leading-relaxed">
            كانت الإبل قوام ثروة العربي؛ يُحمل عليها المتاع، ويُشرب لبنها، ويُؤكل لحمها، وتُدفع بها الديات والمُهور، وتُصنع الخيام من أوبارها.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#F8F4EC] border border-[#E5DAC6] shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#EFE4D2] flex items-center justify-center text-[#8C3A27] mb-4">
            <Sparkles className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold font-serif text-[#2C1E14] mb-2">
            الرعي وتربية الماشية
          </h4>
          <p className="text-xs sm:text-sm text-[#5C4537] leading-relaxed">
            النشاط الأساسي لغالبية البدو؛ ينتجعون مساقط الغيث في نجد وتهامة، ويرعون الضأن والإبل والخيول العربية الأصيلة التي كانت رأس مال الشرف.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#F8F4EC] border border-[#E5DAC6] shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#EFE4D2] flex items-center justify-center text-[#8C3A27] mb-4">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold font-serif text-[#2C1E14] mb-2">
            الزراعة وخصوبة الواحات
          </h4>
          <p className="text-xs sm:text-sm text-[#5C4537] leading-relaxed">
            ازدهرت في اليمن بفضل سد مأرب والمدرجات الجبلية، وفي يثرب ببساتين النخيل، وفي الطائف بالكروم والفواكه والعسل والرمان.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#F8F4EC] border border-[#E5DAC6] shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#EFE4D2] flex items-center justify-center text-[#8C3A27] mb-4">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold font-serif text-[#2C1E14] mb-2">
            الحرف والصناعات التقليدية
          </h4>
          <p className="text-xs sm:text-sm text-[#5C4537] leading-relaxed">
            دباغة الجلود (الأدم الطائفي)، صناعة السيوف المشرفية واليمانية، تقويم الرماح الخطية، صياغة الحلي الذهبية، وغزل الصوف والوبر.
          </p>
        </div>
      </div>
    </section>
  );
};
