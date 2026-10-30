/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Feather, Shield, HeartHandshake, Sparkles, X, BookOpen, Quote, AlertCircle } from 'lucide-react';
import { CHARACTERS, Character } from '../data/historyData.ts';

export const CharactersSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'poetry' | 'chivalry' | 'wisdom' | 'generosity'>('all');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const categories = [
    { id: 'all', label: 'كافة الشخصيات', icon: Sparkles },
    { id: 'poetry', label: 'الشعراء والأدباء', icon: Feather },
    { id: 'chivalry', label: 'الفرسان وأبطال الحروب', icon: Shield },
    { id: 'wisdom', label: 'الحكماء والخطباء', icon: BookOpen },
    { id: 'generosity', label: 'أهل الجود والكرم', icon: HeartHandshake }
  ];

  const filteredCharacters = useMemo(() => {
    return CHARACTERS.filter((char) => {
      const matchesSearch =
        char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.tribe.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.brief.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.title.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || char.categories.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="characters" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B45309] font-bold mb-2">
          <Feather className="w-3.5 h-3.5" />
          <span>ديوان الرجالات الخالدة</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#2C1E14]">
          شخصيات صنعت تاريخ وأدب العصر الجاهلي
        </h2>
        <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#5C4537] leading-relaxed [text-wrap:balance]">
          معرض تفاعلي يوثق سير فحول الشعراء، فرسان المعارك، وأئمة الكرم والحكمة الذين توارثت الأجيال بطولاتهم وأشعارهم.
        </p>
      </div>

      {/* Featured Historical Portrait Banner */}
      <div className="max-w-5xl mx-auto mb-12 rounded-3xl overflow-hidden border border-[#DECFB5] bg-[#FAF6EE] shadow-sm grid grid-cols-1 md:grid-cols-12 items-stretch">
        <div className="md:col-span-5 relative min-h-[260px] md:min-h-full">
          <img
            src="/src/assets/images/imru_al_qais_portrait_1793328205553.jpg"
            alt="رسم فني تاريخي يجسد أمير الشعراء امرؤ القيس الكندي يتلو شعره في الصحراء"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 right-3 bg-[#1F140D]/85 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#E5C378] border border-[#C5A059]/30">
            إعادة تصور فني لشعراء وفرسان الجاهلية
          </div>
        </div>
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-[#8C3A27] uppercase tracking-wider block mb-2">
              من تراث فحول الشعراء والفرسان
            </span>
            <h3 className="text-2xl font-bold font-serif text-[#2C1E14] mb-3">
              أصوات الصحراء التي حفظت مجد العرب
            </h3>
            <p className="text-xs sm:text-sm text-[#4A3728] leading-relaxed mb-3">
              كان الشاعر في العصر الجاهلي يمثل وزارة الإعلام، والمحامي عن حياض القبيلة، والمؤرخ لأيامها ومغازيها. وإذا نبغ في القبيلة شاعر أقبلت القبائل المجاورة بالتهاني والذبائح.
            </p>
            <p className="text-xs text-[#5C4537] leading-relaxed">
              جمع هؤلاء الفحول بين حدة السيف في ميادين الوغى ورهافة الإحساس في مطالع الأطلال ومواقف الفروسية والكرم.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E8DEC9] flex items-center justify-between text-xs text-[#7A624E]">
            <span>12 شخصية موثقة من أصحاب المعلقات والفرسان والأجواد</span>
            <span className="font-semibold text-[#8C3A27]">تصفح السير أدناه ↓</span>
          </div>
        </div>
      </div>

      {/* Methodological Caveat Notice */}
      <div className="max-w-4xl mx-auto mb-8 p-4 rounded-xl bg-[#F6EFE3] border border-[#DECFB5] flex items-start gap-3 text-xs sm:text-sm text-[#6C5646]">
        <AlertCircle className="w-5 h-5 text-[#B45309] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-[#2C1E14]">تنبيه منهجي تاريخي:</strong> كثير من الأخبار والتواريخ والحوارات المتعلقة بشخصيات العصر الجاهلي منقولة عن مصادر أدبية وتراثية متأخرة كـ<em>الأغاني</em> للأصفهاني و<em>طبقات فحول الشعراء</em>، وقد تختلف الروايات في بعض تفاصيلها أو تتداخل مع الذاكرة الشعبية الشفهية.
        </p>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث باسم الشاعر أو الفارس أو القبيلة..."
            className="w-full pl-4 pr-10 py-2.5 bg-[#F9F6F0] border border-[#DFD3BE] rounded-xl text-xs sm:text-sm text-[#2C1E14] focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white placeholder-[#9C8B7A]"
          />
          <Search className="absolute right-3.5 top-3 w-4 h-4 text-[#9C8B7A]" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute left-3 top-3 text-xs text-[#9C8B7A] hover:text-[#2C1E14]"
            >
              مسح
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex items-center flex-wrap gap-1.5 p-1 bg-[#EFE6D6] rounded-xl w-full md:w-auto">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#2C1E14] text-[#E5C378] shadow-sm'
                    : 'text-[#5C4537] hover:text-[#2C1E14] hover:bg-[#E5DAC6]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Character Grid */}
      {filteredCharacters.length === 0 ? (
        <div className="text-center py-16 bg-[#FAF7F2] rounded-2xl border border-[#DFD3BE] max-w-md mx-auto">
          <Feather className="w-10 h-10 text-[#C5A059] mx-auto mb-3 opacity-60" />
          <p className="text-base font-bold text-[#2C1E14]">لم يتم العثور على شخصية مطابقة</p>
          <p className="text-xs text-[#6C5646] mt-1">جرّب البحث باسم آخر كـ "عنترة" أو "امرؤ القيس"</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCharacters.map((char) => (
            <div
              key={char.id}
              onClick={() => setSelectedCharacter(char)}
              className="group cursor-pointer p-6 rounded-2xl bg-[#FAF6EE] border border-[#E5DAC7] hover:border-[#C5A059] hover:bg-[#FFFDF9] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with stylized badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${char.avatarColor} text-[#FFF8ED] flex items-center justify-center font-serif text-xl font-bold shadow-sm shrink-0`}>
                    {char.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] font-semibold text-[#8C3A27] bg-[#EFE5D5] px-2.5 py-0.5 rounded-full inline-block">
                      {char.approxEra}
                    </span>
                    <span className="block text-[11px] text-[#7A624E] mt-1 font-medium">
                      {char.tribe}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-serif text-[#2C1E14] group-hover:text-[#8C3A27] transition-colors">
                  {char.name}
                </h3>
                <span className="text-xs font-semibold text-[#B45309] block mt-0.5 mb-2">
                  {char.title}
                </span>

                <p className="text-xs sm:text-sm text-[#5C4537] leading-relaxed line-clamp-3 mb-4">
                  {char.brief}
                </p>

                {/* Famous Verse snippet */}
                <div className="p-3 bg-[#F1E9DB] rounded-xl border border-[#DFD1BD] text-xs text-[#3E2C1E] font-serif italic mb-4">
                  <Quote className="w-3.5 h-3.5 text-[#B45309] mb-1 inline ml-1 opacity-75" />
                  <span>"{char.famousVerseOrQuote.split('/')[0]}..."</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8DEC9] flex items-center justify-between text-xs font-bold text-[#8C3A27] group-hover:text-[#B45309]">
                <span>عرض السيرة الكاملة والإنجازات</span>
                <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail Modal for Selected Character */}
      {selectedCharacter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCharacter(null)}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-2xl bg-[#FDFBF7] rounded-3xl border border-[#C5A059]/40 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-[#2C1E14]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCharacter(null)}
              className="absolute top-5 left-5 p-2 rounded-full bg-[#EFE5D5] hover:bg-[#E5DAC6] text-[#2C1E14] transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-start gap-4 mb-6 pt-2">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedCharacter.avatarColor} text-[#FFF8ED] flex items-center justify-center font-serif text-3xl font-bold shadow-md shrink-0`}>
                {selectedCharacter.name.charAt(0)}
              </div>
              <div>
                <span className="text-xs font-semibold text-[#8C3A27] bg-[#EFE5D5] px-3 py-1 rounded-full inline-block mb-1">
                  {selectedCharacter.approxEra} · {selectedCharacter.tribe}
                </span>
                <h3 className="text-2xl font-bold font-serif text-[#2C1E14]">
                  {selectedCharacter.name}
                </h3>
                <span className="text-sm font-semibold text-[#B45309]">
                  {selectedCharacter.title}
                </span>
              </div>
            </div>

            {/* Quote Banner */}
            <div className="p-4 bg-[#F4ECE0] rounded-2xl border border-[#DFD1BD] mb-6">
              <div className="text-xs font-bold text-[#8C3A27] mb-1 flex items-center gap-1.5">
                <Quote className="w-4 h-4 text-[#B45309]" />
                <span>من أشهر أقواله وأشعاره:</span>
              </div>
              <p className="text-sm sm:text-base font-serif text-[#2C1E14] leading-relaxed text-center py-2">
                {selectedCharacter.famousVerseOrQuote}
              </p>
            </div>

            {/* Life Bio */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#8C3A27] uppercase tracking-wider mb-2">
                نبذة عن سيرته وحياته
              </h4>
              <p className="text-sm text-[#4A3728] leading-relaxed">
                {selectedCharacter.bio}
              </p>
            </div>

            {/* Key Achievements */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#8C3A27] uppercase tracking-wider mb-2">
                أبرز الإنجازات والمواقف التاريخية
              </h4>
              <ul className="space-y-2">
                {selectedCharacter.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4A3728]">
                    <span className="text-[#C5A059] font-bold mt-0.5">✦</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Historical Significance */}
            <div className="mb-6 p-4 bg-[#EFE6D6] rounded-xl border border-[#DECDB7]">
              <h4 className="text-xs font-bold text-[#2C1E14] mb-1">
                مكانته في التاريخ والأدب العربي:
              </h4>
              <p className="text-xs sm:text-sm text-[#5C4537] leading-relaxed">
                {selectedCharacter.historicalSignificance}
              </p>
            </div>

            {/* Unique Fact */}
            <div className="mb-6 p-4 bg-[#FAF0E1] rounded-xl border border-[#E2CEB0]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#B45309] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>معلومة مميزة:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5C4537] leading-relaxed">
                {selectedCharacter.uniqueFact}
              </p>
            </div>

            {/* Citation Source footer */}
            <div className="pt-4 border-t border-[#E8DEC9] text-xs text-[#7A624E] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>المصدر التراثي: {selectedCharacter.sourceAttribution}</span>
              <span className="italic">موسوعة تاريخ العصر الجاهلي</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
