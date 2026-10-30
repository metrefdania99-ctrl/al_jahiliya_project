/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Scroll, Feather, Sparkles, BookOpen, Award, ArrowLeft } from 'lucide-react';
import { MUALLAQAT_INFO } from '../data/historyData.ts';

export const PoetrySection: React.FC = () => {
  const [selectedMuallaqaId, setSelectedMuallaqaId] = useState<string>('muallaqa-imru');
  const [activePurposeTab, setActivePurposeTab] = useState<string>('fakhr');

  const poeticPurposes = [
    {
      id: 'fakhr',
      title: 'الفَخْر والحَمَاسَة',
      icon: '⚔️',
      desc: 'الاعتزاز بمفاخر القبيلة، شجاعة الفرسان، والسيادة. كان الشاعر لسان قومه وسلاحهم المعنوي.',
      sampleVerse: 'إِذَا بَلَغَ الفِطَامَ لَنَا صَبِيٌّ / تَخِرُّ لَهُ الجَبَابِرُ سَاجِدِينَا',
      poet: 'عمرو بن كلثوم التغلبي'
    },
    {
      id: 'madh',
      title: 'المَدْح والثناء',
      icon: '👑',
      desc: 'إشادة بالسادات والأجواد الذين حقنوا الدماء كمدح زهير للساعين بالصلح هرم والحارث.',
      sampleVerse: 'تَدَارَكْتُمَا عَبْسًا وذُبْيَانَ بَعْدَمَا / تَفَانَوْا ودَقُّوا بَيْنَهُمْ عِطْرَ مَنْشِمِ',
      poet: 'زهير بن أبي سلمى'
    },
    {
      id: 'ghazal',
      title: 'الغَزَل العفيف',
      icon: '❤️',
      desc: 'التعبير الصادق عن الشوق ولوعة فراق ظعائن الحبيبة في مرابع الصحراء.',
      sampleVerse: 'ولَقَدْ ذَكَرْتُكِ والرِّماحُ نَواهِلٌ / مِنِّي وبِيضُ الهِنْدِ تَقْطُرُ مِنْ دَمِي',
      poet: 'عنترة بن شداد العبسي'
    },
    {
      id: 'ritha',
      title: 'الرِّثَاء والبكاء',
      icon: '🕊️',
      desc: 'تأبين الأبطال الراحلين كبكاء الخنساء لأخيها صخر وبكاء المهلهل لأخيه كليب.',
      sampleVerse: 'وإِنَّ صَخْرًا لَتَأْتَمُّ الهُدَاةُ بِهِ / كَأَنَّهُ عَلَمٌ فِي رَأْسِهِ نَارُ',
      poet: 'الخنساء (تماضر بنت عمرو)'
    },
    {
      id: 'wasf',
      title: 'الوَصْف الحِسّي',
      icon: '🐎',
      desc: 'التصوير البصري المعجز للطبيعة الصحراوية، سرعة الجواد، ومظاهر الليل والمطر.',
      sampleVerse: 'مِكَرٍّ مِفَرٍّ مُقْبِلٍ مُدْبِرٍ مَعًا / كَجُلْمُودِ صَخْرٍ حَطَّهُ السَّيْلُ مِنْ عَلِ',
      poet: 'امرؤ القيس الكندي'
    },
    {
      id: 'hikma',
      title: 'الحِكْمَة الإنسانية',
      icon: '📜',
      desc: 'خلاصة التجارب الوجودية، تقلبات الدهر، حتمية الموت، وفضائل الكرم والوفاء.',
      sampleVerse: 'سَئِمْتُ تَكَالِيفَ الحَيَاةِ ومَنْ يَعِشْ / ثَمَانِينَ حَوْلًا لا أَبَا لَكَ يَسْأَمِ',
      poet: 'زهير بن أبي سلمى'
    }
  ];

  const activeMuallaqa = MUALLAQAT_INFO.find((m) => m.id === selectedMuallaqaId) || MUALLAQAT_INFO[0];
  const activePurpose = poeticPurposes.find((p) => p.id === activePurposeTab) || poeticPurposes[0];

  return (
    <section id="poetry" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B45309] font-bold mb-2">
          <Scroll className="w-3.5 h-3.5" />
          <span>ديوان العرب وسجل مفاخرهم</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#2C1E14]">
          الشعر والأدب والمعلقات الخالدة
        </h2>
        <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-3 mb-3" />
        <p className="text-xs sm:text-sm text-[#5C4537] leading-relaxed [text-wrap:balance]">
          الشعر في الجاهلية كان ديوان علم العرب وسجل أيامهم، بلغ ذروة الفصاحة في المعلقات السبع الطوال.
        </p>
      </div>

      {/* NEW ILLUSTRATED MANUSCRIPT BANNER (RICH IMAGE REQUIREMENT) */}
      <div className="mb-12 rounded-3xl overflow-hidden border border-[#DECFB5] bg-[#FAF6EE] shadow-sm grid grid-cols-1 md:grid-cols-12 items-stretch">
        <div className="md:col-span-5 relative min-h-[250px] md:min-h-full">
          <img
            src="/src/assets/images/ancient_muallaqat_manuscript_1793329053246.jpg"
            alt="مخطوطة مذهبة قديمة على رق الغزال تدون أبياتاً من الشعر الجاهلي والمعلقات"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 right-3 bg-[#1F140D]/85 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#E5C378] border border-[#C5A059]/30">
            مخطوطات وروائع الشعر الجاهلي
          </div>
        </div>
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-[#8C3A27] uppercase tracking-wider block mb-2">
              قصائد كتبت بماء الذهب
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#2C1E14] mb-2">
              المعلقات السبع: قمة البيان العربي
            </h3>
            <p className="text-xs sm:text-sm text-[#4A3728] leading-relaxed mb-3">
              سميت بالمعلقات لأنها لشدة نفاسها كُتبت بماء الذهب وعُلّقت على أستار الكعبة، أو لتعلقها بنفوس العرب في أسواق عكاظ ومجنة.
            </p>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 bg-[#EFE5D5] rounded-xl border border-[#DECDB7]">
                <strong className="block text-[#8C3A27] font-bold">جزالة اللفظ</strong>
                متانة وفصاحة فطرية
              </div>
              <div className="p-2.5 bg-[#EFE5D5] rounded-xl border border-[#DECDB7]">
                <strong className="block text-[#8C3A27] font-bold">التصوير الحسي</strong>
                تجسيد الطبيعة والخيل
              </div>
              <div className="p-2.5 bg-[#EFE5D5] rounded-xl border border-[#DECDB7]">
                <strong className="block text-[#8C3A27] font-bold">الحوليات</strong>
                تنقيح القصيدة في عام
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E8DEC9] text-[11px] text-[#7A624E]">
            المصدر: <em>شرح المعلقات السبع</em> للقاضي الزوزني، و<em>طبقات فحول الشعراء</em>
          </div>
        </div>
      </div>

      {/* Interactive Muallaqat Explorer */}
      <div className="bg-[#FAF6EE] rounded-3xl p-6 sm:p-8 border border-[#DECFB5] shadow-sm mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
          <div>
            <span className="text-xs text-[#8C3A27] font-bold uppercase tracking-wider block">
              نصوص وشروح موثقة
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#2C1E14]">
              مستكشف المعلقات الخالدة
            </h3>
          </div>
          <div className="text-xs text-[#6C5646]">
            اختر شاعراً لاستعراض مطلع معلقته ونماذج من أبياته
          </div>
        </div>

        {/* Muallaqat Tab Selector */}
        <div className="flex flex-wrap gap-1.5 mb-6 border-b border-[#E8DEC9] pb-3">
          {MUALLAQAT_INFO.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMuallaqaId(m.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedMuallaqaId === m.id
                  ? 'bg-[#2C1E14] text-[#E5C378] shadow-md border border-[#C5A059]'
                  : 'bg-[#EFE6D6] text-[#4A3728] hover:bg-[#E5DAC6]'
              }`}
            >
              معلقة {m.poet.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Selected Muallaqa Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            <div className="p-5 rounded-2xl bg-[#F4ECE0] border border-[#DECFB5]">
              <span className="text-[11px] font-bold text-[#8C3A27] block mb-1">الشاعر:</span>
              <h4 className="text-lg font-bold font-serif text-[#2C1E14] mb-2">
                {activeMuallaqa.poet}
              </h4>
              <div className="space-y-1 text-xs text-[#4A3728]">
                <div><strong>البحر الشعري:</strong> {activeMuallaqa.meter}</div>
                <div><strong>عدد الأبيات:</strong> قرابة {activeMuallaqa.totalVersesApprox} بيتاً</div>
                <div><strong>الموضوع:</strong> {activeMuallaqa.theme}</div>
              </div>
            </div>

            <div className="p-4 bg-[#2C1E14] rounded-2xl text-[#FDFBF7] border border-[#C5A059]/30 text-center">
              <span className="text-[11px] text-[#E5C378] font-bold block mb-1">مطلع المعلقة:</span>
              <p className="text-sm sm:text-base font-serif text-[#FFF8ED] leading-relaxed py-1">
                {activeMuallaqa.openingVerse}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-bold text-[#8C3A27] uppercase tracking-wider mb-1">
              شواهد مختارة مع المعنى:
            </div>
            {activeMuallaqa.selectedVerses.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FFFDF9] border border-[#E5DAC7] shadow-sm"
              >
                <p className="text-sm font-serif text-[#2C1E14] font-semibold text-center leading-loose py-1 bg-[#F9F5EC] rounded-lg border border-[#ECE0CE] mb-2">
                  {item.verse}
                </p>
                <div className="text-xs text-[#5C4537] leading-relaxed">
                  <strong className="text-[#8C3A27]">المعنى:</strong> {item.meaning}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Poetic Purposes (الأغراض الشعرية) - Compact View */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#2C1E14]">
            الأغراض الشعرية الكبرى
          </h3>
          <p className="text-xs text-[#6C5646] mt-1">
            الأغراض التي عبّر من خلالها شعراء الجاهلية عن عواطفهم وبطولاتهم.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6">
          {poeticPurposes.map((purpose) => (
            <button
              key={purpose.id}
              onClick={() => setActivePurposeTab(purpose.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activePurposeTab === purpose.id
                  ? 'bg-[#8C3A27] text-white shadow-sm'
                  : 'bg-[#F2EAE0] text-[#4A3728] hover:bg-[#EAE0D2]'
              }`}
            >
              <span>{purpose.icon}</span>
              <span>{purpose.title}</span>
            </button>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-[#F7F2EA] border border-[#DECFB5] max-w-2xl mx-auto text-center shadow-sm">
          <h4 className="text-base font-bold font-serif text-[#2C1E14] mb-1">
            غرض {activePurpose.title}
          </h4>
          <p className="text-xs text-[#5C4537] leading-relaxed mb-4">
            {activePurpose.desc}
          </p>
          <div className="p-3.5 bg-[#FAF6EE] rounded-xl border border-[#DECDB7] inline-block w-full">
            <span className="text-[11px] font-bold text-[#8C3A27] block mb-1">الشاهد الشعري:</span>
            <p className="text-sm font-serif text-[#2C1E14] font-bold leading-relaxed py-1">
              "{activePurpose.sampleVerse}"
            </p>
            <span className="text-[11px] text-[#7A624E] block mt-0.5">
              الشاعر: {activePurpose.poet}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
