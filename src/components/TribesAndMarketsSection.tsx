/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Landmark, ShoppingBag, MapPin, Users, Sparkles, AlertCircle, Calendar } from 'lucide-react';
import { TRIBES_DATA, MARKETS_DATA, Market, Tribe } from '../data/historyData.ts';

export const TribesAndMarketsSection: React.FC = () => {
  const [selectedSubTab, setSelectedSubTab] = useState<'markets' | 'tribes'>('markets');
  const [selectedTribe, setSelectedTribe] = useState<Tribe>(TRIBES_DATA[0]);
  const [selectedMarket, setSelectedMarket] = useState<Market>(MARKETS_DATA[0]);

  React.useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#markets') {
        setSelectedSubTab('markets');
      } else if (window.location.hash === '#tribes') {
        setSelectedSubTab('tribes');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section id="tribes-markets" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      <div id="markets" className="scroll-mt-20" />
      <div id="tribes" className="scroll-mt-20" />
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B45309] font-bold mb-2">
          <Landmark className="w-3.5 h-3.5" />
          <span>الهوية والملتقيات العامة</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#2C1E14]">
          القبائل العربية والأسواق الكبرى
        </h2>
        <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#5C4537] leading-relaxed [text-wrap:balance]">
          الأسواق التي وحّدت لسان العرب وجمعت شتات قبائلهم في الأشهر الحُرُم، والقبائل العريقة التي أصلت أنسابهم ومفاخرهم.
        </p>

        {/* Section Sub-Tabs */}
        <div className="mt-8 inline-flex p-1 bg-[#EFE6D6] rounded-xl border border-[#DFD3BE]">
          <button
            onClick={() => setSelectedSubTab('markets')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              selectedSubTab === 'markets'
                ? 'bg-[#2C1E14] text-[#E5C378] shadow-sm'
                : 'text-[#5C4537] hover:text-[#2C1E14]'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>الأسواق العربية القديمة</span>
          </button>
          <button
            onClick={() => setSelectedSubTab('tribes')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              selectedSubTab === 'tribes'
                ? 'bg-[#2C1E14] text-[#E5C378] shadow-sm'
                : 'text-[#5C4537] hover:text-[#2C1E14]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>القبائل العربية والأنساب</span>
          </button>
        </div>
      </div>

      {/* MARKETS SUB-SECTION */}
      {selectedSubTab === 'markets' && (
        <div className="space-y-12">
          {/* Market Hero Image Banner */}
          <div className="rounded-3xl overflow-hidden border border-[#DECFB5] bg-[#FAF6EE] shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-full">
              <img
                src="/src/assets/images/ancient_arab_market_1793327179126.jpg"
                alt="إعادة تصور فني لسوق عكاظ والأسواق الجاهلية، تجار وشعراء ومظلات خيام"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-[#1F140D]/85 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#E5C378] border border-[#C5A059]/30">
                إعادة تصور فني للحياة في العصر الجاهلي
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#8C3A27] uppercase tracking-wider block mb-2">
                  دورة الأسواق الموسمية
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#2C1E14] mb-3">
                  مواسم التجارة والصلح والفصاحة
                </h3>
                <p className="text-xs sm:text-sm text-[#4A3728] leading-relaxed mb-4">
                  كانت للجاهليين أسواق موسمية تدور وفق ترتيب زمني وجغرافي دقيق يبدأ في دومة الجندل ثم المشقر وصحار ودبا والشحر وصنعاء، حتى تبلغ ذروتها في مواسم الحج بـ <strong className="text-[#8C3A27]">عكاظ ثم مجنة ثم ذي المجاز</strong>.
                </p>
                <p className="text-xs sm:text-sm text-[#4A3728] leading-relaxed">
                  خلال هذه المواسم تسقط الأحقاد، وتُغمد السيوف حرمةً للأشهر الحرم، فيلتقي الغريم بغريمه آمناً، وتُعرض السلع وتُلقى الخطب وتُفتدى الأسرى.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DEC9] text-xs text-[#7A624E]">
                المصدر: <em>كتاب المحبر</em> لمحمد بن حبيب البغدادي
              </div>
            </div>
          </div>

          {/* Markets Cards & Detailed View */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MARKETS_DATA.map((market) => (
              <div
                key={market.id}
                onClick={() => setSelectedMarket(market)}
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                  selectedMarket.id === market.id
                    ? 'bg-[#F4ECE0] border-[#C5A059] shadow-md ring-1 ring-[#C5A059]'
                    : 'bg-[#FAF6EE] border-[#E5DAC7] hover:border-[#C5A059] hover:bg-[#FFFDF9]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#8C3A27] bg-[#EFE5D5] px-2.5 py-1 rounded-md">
                      {market.timing}
                    </span>
                    <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
                  </div>

                  <h4 className="text-xl font-bold font-serif text-[#2C1E14] mb-2">
                    {market.name}
                  </h4>

                  <div className="flex items-start gap-1.5 text-xs text-[#6C5646] mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#8C3A27] shrink-0 mt-0.5" />
                    <span>{market.location}</span>
                  </div>

                  <p className="text-xs text-[#5C4537] leading-relaxed line-clamp-3">
                    {market.tradeRole}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8DEC9] text-xs font-bold text-[#8C3A27] flex items-center justify-between">
                  <span>انقر لعرض كامل التفاصيل</span>
                  <span>←</span>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Market Comprehensive Info Box */}
          <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#DECFB5] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E8DEC9] pb-4 mb-6">
              <div>
                <span className="text-xs font-bold text-[#8C3A27]">الملتقى المختار:</span>
                <h4 className="text-2xl font-bold font-serif text-[#2C1E14]">
                  {selectedMarket.name}
                </h4>
              </div>
              <div className="text-xs sm:text-sm text-[#7A624E]">
                <strong>الموقع:</strong> {selectedMarket.location} · <strong>الموعد:</strong> {selectedMarket.timing}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-[#F2EAE0] rounded-xl border border-[#DFD1BD]">
                <strong className="block text-xs font-bold text-[#8C3A27] uppercase tracking-wider mb-2">
                  الدور التجاري والاقتصادي:
                </strong>
                <p className="text-xs sm:text-sm text-[#4A3728] leading-relaxed">
                  {selectedMarket.tradeRole}
                </p>
              </div>

              <div className="p-4 bg-[#F2EAE0] rounded-xl border border-[#DFD1BD]">
                <strong className="block text-xs font-bold text-[#8C3A27] uppercase tracking-wider mb-2">
                  الدور الأدبي والتحكيم الشعري:
                </strong>
                <p className="text-xs sm:text-sm text-[#4A3728] leading-relaxed">
                  {selectedMarket.literaryRole}
                </p>
              </div>

              <div className="p-4 bg-[#F2EAE0] rounded-xl border border-[#DFD1BD]">
                <strong className="block text-xs font-bold text-[#8C3A27] uppercase tracking-wider mb-2">
                  الدور الاجتماعي والصلح القبلي:
                </strong>
                <p className="text-xs sm:text-sm text-[#4A3728] leading-relaxed">
                  {selectedMarket.socialRole}
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#EFE6D6] rounded-xl border border-[#DECDB7] text-xs text-[#5C4537] leading-relaxed">
              <strong className="text-[#2C1E14] block mb-1">المشهد البصري والتخيلي للسوق:</strong>
              {selectedMarket.visualAtmosphere}
            </div>
          </div>
        </div>
      )}

      {/* TRIBES SUB-SECTION */}
      {selectedSubTab === 'tribes' && (
        <div className="space-y-8">
          {/* Methodological Caveat */}
          <div className="p-4 rounded-xl bg-[#F6EFE3] border border-[#DECFB5] flex items-start gap-3 text-xs sm:text-sm text-[#6C5646]">
            <AlertCircle className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#2C1E14]">تنبيه علمي في الأنساب:</strong> تنقسم قبائل العرب عموماً إلى عرب عاربة قحطانية (جنوبية كطيء والأوس والخزرج وكندة) وعرب مستعربة عدنانية (شمالية من ولد إسماعيل كقريش وتميم وبكر وتغلب)، ولا تُقدَّم التفريعات الخلافية للأنساب كحقائق قطعية وإنما بحسب مشهور كتب الأنساب التراثية كـ<em>جمهرة النسب</em> لابن الكلبي.
            </p>
          </div>

          {/* Tribal Council Historical Painting Banner */}
          <div className="rounded-3xl overflow-hidden border border-[#DECFB5] bg-[#FAF6EE] shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-full">
              <img
                src="/src/assets/images/ancient_arab_tribes_council_1793328205794.jpg"
                alt="لوحة تاريخية تمثل مجلس شيوخ وحكماء القبائل العربية يتشاورون تحت ظلال النخيل"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-[#1F140D]/85 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#E5C378] border border-[#C5A059]/30">
                إعادة تصور فني لمجالس القبائل والشورى في الجاهلية
              </div>
            </div>
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#8C3A27] uppercase tracking-wider block mb-2">
                  نظام المشيخة والشورى
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#2C1E14] mb-3">
                  مجالس الحكماء وأعراف التعاهد بين القبائل
                </h3>
                <p className="text-xs sm:text-sm text-[#4A3728] leading-relaxed mb-3">
                  لم تكن القبيلة العربية جماعة فوضوية، بل كانت كياناً اجتماعياً وسياسياً محكماً يقوده "سيد القبيلة" بالشورى مع حكماء العشيرة، ويستند إلى أعراف متوارثة تضبط حلف الجوار، فداء الأسرى، وتقاسم المراعي وموارد المياه.
                </p>
                <p className="text-xs text-[#5C4537] leading-relaxed">
                  توزعت القبائل بين أصول عدنانية مضرية وربيعية في نجد وتهامة والشمال، وأصول قحطانية أزدية وكندية في الجنوب واليمن والواحات.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8DEC9] text-xs text-[#7A624E]">
                المصدر: <em>جمهرة أنساب العرب</em> لابن حزم، و<em>المفصل</em> لجواد علي
              </div>
            </div>
          </div>

          {/* Tribes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRIBES_DATA.map((tribe) => (
              <div
                key={tribe.id}
                onClick={() => setSelectedTribe(tribe)}
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                  selectedTribe.id === tribe.id
                    ? 'bg-[#F4ECE0] border-[#C5A059] shadow-md ring-1 ring-[#C5A059]'
                    : 'bg-[#FAF6EE] border-[#E5DAC7] hover:border-[#C5A059] hover:bg-[#FFFDF9]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      tribe.lineage === 'عدنانية' ? 'bg-[#E3EFE0] text-[#285E22]' : 'bg-[#E0EBF7] text-[#1E4D7A]'
                    }`}>
                      قبيلة {tribe.lineage}
                    </span>
                    <span className="text-xs text-[#7A624E] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#8C3A27]" />
                      {tribe.region.split('،')[0]}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold font-serif text-[#2C1E14] mb-2">
                    قبيلة {tribe.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#5C4537] leading-relaxed mb-4">
                    {tribe.features}
                  </p>

                  <div className="space-y-1 pt-3 border-t border-[#E8DEC9] text-xs">
                    <span className="text-[#8C3A27] font-bold block mb-1">أبرز الأعلام والشخصيات:</span>
                    <div className="flex flex-wrap gap-1">
                      {tribe.notableFigures.map((fig, idx) => (
                        <span key={idx} className="bg-[#EFE5D5] px-2 py-0.5 rounded text-[#3E2C1E] text-[11px]">
                          {fig}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8DEC9] text-xs text-[#6C5646] italic">
                  <strong>الدور التاريخي:</strong> {tribe.historicalRole}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
