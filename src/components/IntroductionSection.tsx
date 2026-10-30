/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Info, Compass, Sparkles, BookOpen, Clock, Layers } from 'lucide-react';

interface GeoLocation {
  id: string;
  name: string;
  type: 'region' | 'city';
  tag: string;
  coordinatesDesc: string;
  xPercent: number; // For map positioning on SVG
  yPercent: number;
  significance: string;
  features: string[];
  historicalEvents: string;
}

export const IntroductionSection: React.FC = () => {
  const [selectedGeoId, setSelectedGeoId] = useState<string>('makkah');

  // Comprehensive Geo Entities including Regions & Mandatory Cities:
  // Al-Hijaz, Najd, Yemen, Oman, Bahrain + Makkah, Yathrib, Taif, Najran
  const geoEntities: GeoLocation[] = [
    {
      id: 'makkah',
      name: 'مكة المكرمة (بَكَّة)',
      type: 'city',
      tag: 'مركز العرب الروحي والتجاري',
      coordinatesDesc: 'غرب الجزيرة العربية في وادٍ غير ذي زرع بجبال الحجاز',
      xPercent: 37,
      yPercent: 52,
      significance: 'حرم العرب الآمن وسرّ سيادتهم، فيها الكعبة المشرفة وبئر زمزم. تولت قريش شؤون السقاية والرفادة، وقادت التجارة الدولية برحلتي الشتاء والصيف ونظام الإيلاف، وشهدت حلف الفضول ونشأة النبي ﷺ.',
      features: ['الكعبة المشرفة وحرم الله الآمن', 'إيلاف قريش وتجارة الشتاء والصيف', 'حلف الفضول ودار الندوة'],
      historicalEvents: 'حلف الفضول العادل عام 590م، قدوم وفود العرب للحج، وإعادة بناء الكعبة قبل البعثة النبوية.'
    },
    {
      id: 'yathrib',
      name: 'يَثْرِب (المدينة المنورة)',
      type: 'city',
      tag: 'واحة النخيل والحصون الزراعية',
      coordinatesDesc: 'شمال الحجاز في واحة خصبة تحيط بها الحرات البركانية',
      xPercent: 34,
      yPercent: 41,
      significance: 'الواحة الزراعية الأهم في غرب الجزيرة؛ استوطنتها قبيلتا الأوس والخزرج القحطانيتان إلى جانب قبائل يهودية كبني قينقاع وبني النضير وقريظة. تميزت بكثرة الآطام (الحصون الحجرية) وبساتين النخيل وسواقي الماء.',
      features: ['بساتين النخيل الخصيبة وعيون الماء', 'تحصينات الآطام للدفاع ضد الغارات', 'حرب بُعاث الشهيرة بين الأوس والخزرج'],
      historicalEvents: 'شهدت صراعات داخلية كبرى قبل الإسلام عُرفت بحرب بُعاث حتى دخلها الإسلام ووحّد أهلها كالأنصار.'
    },
    {
      id: 'taif',
      name: 'الطَّائِف',
      type: 'city',
      tag: 'مصيف الحجاز ومركز سوق عكاظ',
      coordinatesDesc: 'جنوب شرق مكة على جبال السروات الباردة',
      xPercent: 39,
      yPercent: 55,
      significance: 'واحة جبلية مرتفعة تمتاز باعتدال مناخها ووفرة مياهها وكرومها وفواكهها. موطن قبيلة ثقيف، وفي أطرافها يقع وادي نخلة حيث تُقام سوق عكاظ أعظم ملتقى أدبي وتجاري للعرب، ومقر صنم اللات قبل الإسلام.',
      features: ['كروم الأعناب والرمان ومناحل العسل', 'سوق عكاظ ومحكمة الشعر للنابغة الذبياني', 'صناعة ودباغة الجلود والأدم الطائفي'],
      historicalEvents: 'انعقاد سوق عكاظ السنوي في شهر ذي القعدة، والتحكيم بين فحول شعراء المعلقات.'
    },
    {
      id: 'najran',
      name: 'نَجْرَان',
      type: 'city',
      tag: 'بوابة الجنوب وواحة القوافل',
      coordinatesDesc: 'جنوب الجزيرة بين الحجاز واليمن في وادٍ فسيح',
      xPercent: 48,
      yPercent: 74,
      significance: 'واحة استراتيجية كبرى ملتقى دروب القوافل القادمة من اليمن إلى الحجاز والشام والعراق. كانت مركزاً مسيحياً عريقاً وقاعدة للنسيج والزراعة، وفيها قبة قس بن ساعدة الإيادي، وشهدت محرقة الأخدود الشهيرة على يد ذي نواس الحِميري.',
      features: ['ملتقى تجارة البخور واللبان الجنوبي', 'مركز مسيحي عريق بقساوسته وأساقفته', 'واقعة أصحاب الأخدود التاريخية'],
      historicalEvents: 'واقعة أصحاب الأخدود نحو 523م التي خلدها القرآن الكريم، وخطب حكيم العرب قس بن ساعدة.'
    },
    {
      id: 'hijaz-region',
      name: 'إقليم الحِجَاز',
      type: 'region',
      tag: 'سلسلة السروات ومدن النور',
      coordinatesDesc: 'الشريط الغربي الممتد بمحاذاة ساحل البحر الأحمر',
      xPercent: 30,
      yPercent: 48,
      significance: 'سُمّي حجازاً لأنه "يحجز" بين تهامة الساحلية المنخفضة ونجد المرتفعة. يضم أقدس بقاع العرب وأهم أسواقهم، ويمثل العمود الفقري للتجارة الحجازية ومسار القوافل بين مكة ويثرب والطائف واليمن.',
      features: ['سلسلة جبال السروات الشاهقة', 'الحرمان ومواسم الحج في الأشهر الحرم', 'أسواق عكاظ ومجنة وذي المجاز'],
      historicalEvents: 'حرب الفجار بين كنانة وقيس عيلان، وتأمين رحلات الإيلاف القرشية السنوية.'
    },
    {
      id: 'najd-region',
      name: 'إقليم نَجْد',
      type: 'region',
      tag: 'هضبة الفرسان وفحول المعلقات',
      coordinatesDesc: 'قلب الجزيرة العربية وهضبتها الفسيحة الوسطى',
      xPercent: 55,
      yPercent: 44,
      significance: 'هضبة صخرية ورملية مرتفعة، أرض المراعي والخيول الأصيلة والإبل العراب. موطن قبائل تميم، غطفان، عبس، ذبيان، وكندة. في أوديتها تفجرت ينابيع الشعر العربي ودارت أطول حروب الفروسية كداحس والغبراء والبسوس.',
      features: ['هضاب فسيحة ومراعٍ طبيعية للإبل والخيل', 'موطن امرئ القيس وعنترة وزهير بن أبي سلمى', 'جبال طويق وحجر اليمامة وجبلا أجا وسلمى'],
      historicalEvents: 'حرب داحس والغبراء بين عبس وذبيان لـ 40 عاماً، ومملكة كندة النجدية الأولى.'
    },
    {
      id: 'yemen-region',
      name: 'بلاد اليَمَن وحضرموت',
      type: 'region',
      tag: 'العربية السعيدة ومهد الحضارات',
      coordinatesDesc: 'الركن الجنوبي والجنوبي الغربي للجزيرة العربية',
      xPercent: 44,
      yPercent: 84,
      significance: 'أصل العرب القحطانية العاربة، مهد الممالك القديمة (سبأ، حِمْيَر، قتبان، معين، وحضرموت). اشتهر بسد مأرب العظيم، وزراعة اللبان والمُر والبخور والبن، والري المدرج، وتجارة المحيط الهندي وسواحل إفريقيا.',
      features: ['سد مأرب الهندسي وانهياره وسيل العَرِم', 'مصدر البخور واللبان والبرود اليمانية والسيوف', 'ممالك حمير وسبأ وأبراج صنعاء وشبوة'],
      historicalEvents: 'انهيار سد مأرب (سيل العرم) وتفرق بطون الأزد في أرجاء الجزيرة، وغزو أبرهة الحبشي.'
    },
    {
      id: 'oman-region',
      name: 'إقليم عُمَان ومَجَان',
      type: 'region',
      tag: 'سواحل الملاحة وسوق صحار العريق',
      coordinatesDesc: 'الركن الجنوبي الشرقي المطل على بحر العرب ومضيق هرمز',
      xPercent: 82,
      yPercent: 62,
      significance: 'عُرف قديماً بـ "مَجَان" لثرواته المعدنية كالنحاس وموانئه البحرية. استوطنته بطون الأزد بقيادة مالك بن فهم بعد انهيار سد مأرب، وتميز بسوق "صُحَار" و"دَبَا" البحرية التي ربطت تجارة الجزيرة بالهند وفارس والصين.',
      features: ['ميناء وسوق صُحَار الموسمي البحري', 'هجرة قبائل الأزد بقيادة مالك بن فهم', 'جبال الحجر والأفلاج المائية والتمور'],
      historicalEvents: 'معركة سلوت التاريخية وتحرير الأزد لعُمان من نفوذ الفرس الساسانيين قبل الإسلام.'
    },
    {
      id: 'bahrain-yamama',
      name: 'إقليم البَحْرَيْن واليَمَامَة (شرق الجزيرة)',
      type: 'region',
      tag: 'واحات النخيل ومغاصات اللؤلؤ والفرسان',
      coordinatesDesc: 'الساحل الشرقي الممتد على الخليج العربي وواحات الأحساء',
      xPercent: 72,
      yPercent: 42,
      significance: 'شمل "البحرين" تاريخياً كامل الساحل الشرقي من البصرة إلى عمان (الأحساء والقطيف وأوال). موطن قبائل بكر بن وائل وعبد القيس. اشتهر بصيد اللؤلؤ الطبيعي، وبساتين تمور هَجَر، وسوق المشقر، وصناعة الرماح الخطية والسيوف.',
      features: ['مغاصات اللؤلؤ النفيسة في مياه الخليج', 'واحات الأحساء العذبة وسوق المشقر الحصين', 'معقل فرسان بكر بن وائل وصناع يوم ذي قار'],
      historicalEvents: 'معركة يوم ذي قار الخالدة عام 609م وتحطيم جيش كسرى الفارس في جنوب العراق.'
    }
  ];

  const activeGeo = geoEntities.find((g) => g.id === selectedGeoId) || geoEntities[0];

  return (
    <section id="introduction" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B45309] font-bold mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>المقدمة التأصيلية والمنهجية</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#2C1E14]">
          التعريف بالعصر الجاهلي والإطار الزمني
        </h2>
        <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#5C4537] leading-relaxed [text-wrap:balance]">
          تأصيل علمي رصين يوضح المعنى الدقيق للعصر الجاهلي ويفصل بين تاريخ العرب الممتد عبر القرون وفترة النضج الأدبي والشعر الموثق.
        </p>
      </div>

      {/* SCHOLARLY DISTINCTION WITH HISTORICAL INSCRIPTIONS PHOTO */}
      <div className="mb-14 rounded-3xl overflow-hidden border border-[#DECFB5] bg-[#FAF6EE] shadow-sm grid grid-cols-1 md:grid-cols-12 items-stretch">
        <div className="md:col-span-5 relative min-h-[260px] md:min-h-full">
          <img
            src="/src/assets/images/ancient_arabic_inscriptions_rock_1793329053754.jpg"
            alt="نقوش صخرية قديمة وكتابات بالخط المسند والثمودي على صخور الصحراء العربية"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 right-3 bg-[#1F140D]/85 backdrop-blur-md px-3 py-1 rounded-md text-[11px] text-[#E5C378] border border-[#C5A059]/30">
            نقوش وآثار الجزيرة العربية القديمة
          </div>
        </div>
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C3A27] uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4 text-[#B45309]" />
              <span>تحقيق زمني ومنهجي</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#2C1E14] mb-3">
              مفهوم العصر الجاهلي وفترة الشعر الموثق
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm text-[#4A3728] leading-relaxed">
              <div className="p-3 bg-[#FFFDF9] rounded-xl border border-[#E5DAC7]">
                <strong className="text-[#8C3A27] block mb-1">1. العصر الجاهلي عموماً (تاريخ طويل):</strong>
                يمتد لقرون متطاولة تشمل الأمم البائدة (عاد، ثمود) وممالك سبأ ومعين وحمير، ووصلتنا أخبارها عبر <strong>النقوش الصخرية بالخط المسند والثمودي</strong>.
              </div>
              <div className="p-3 bg-[#FFFDF9] rounded-xl border border-[#E5DAC7]">
                <strong className="text-[#B45309] block mb-1">2. فترة الشعر الجاهلي الموثق (150 – 200 عام):</strong>
                الحقبة الأدبية الذهبية قبيل البعثة (حوالي 450م – 610م) التي نضجت فيها الفصحى وعُلّقت فيها المعلقات، كما وثق الجاحظ وابن سلام.
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#E8DEC9] text-[11px] text-[#7A624E]">
            المصدر: <em>الحيوان</em> للجاحظ، و<em>المفصل في تاريخ العرب قبل الإسلام</em>
          </div>
        </div>
      </div>

      {/* 2-Column Concept Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="p-8 rounded-2xl bg-[#F8F4EC] border border-[#E4D8C5] shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C3A27] mb-3">
              <Info className="w-4 h-4" />
              <span>الدلالة اللغوية والأخلاقية</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#2C1E14] mb-3">
              لماذا سُمِّي بـ «العصر الجاهلي»؟
            </h3>
            <p className="text-sm text-[#4A3728] leading-relaxed mb-4">
              لم يُطلق مصطلح <strong className="text-[#8C3A27]">«الجاهلية»</strong> على العرب لنقصٍ في الفصاحة أو الذكاء والفطنة، بل لمعانٍ سلوكية ودينية محددة:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A3728]">
              <li className="flex items-start gap-2">
                <span className="text-[#B45309] font-bold mt-0.5">✦</span>
                <span><strong>الجَهَل ضد الحِلْم:</strong> التسرع بالبطش وسرعة إشعال الحروب للثأر وحمية العصبية دون تحكيم للمنطق.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B45309] font-bold mt-0.5">✦</span>
                <span><strong>الجَهْل ضد التوحيد:</strong> عبادة الأوثان والأزلام والكهانة بعد اندثار حنيفية إبراهيم عليه السلام.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B45309] font-bold mt-0.5">✦</span>
                <span><strong>الظلم الاجتماعي:</strong> وأد البنات في بعض البيئات الفقيرة واستقواء القبيلة الكبرى على الضعيف.</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-[#E8DEC9] text-xs text-[#7A624E] italic">
            «ألا لا يجهلنَّ أحدٌ علينا / فنجهلَ فوقَ جهلِ الجاهلينا» — عمرو بن كلثوم.
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-[#F8F4EC] border border-[#E4D8C5] shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#B45309] mb-3">
              <Sparkles className="w-4 h-4" />
              <span>معارف العرب وعبقريتهم</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#2C1E14] mb-3">
              كيف كانت علوم العرب في الجاهلية؟
            </h3>
            <p className="text-sm text-[#4A3728] leading-relaxed mb-4">
              امتلك العرب معارف حسية وتجريبية دقيقة فرضتها بيئتهم الصحراوية الصعبة:
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs text-[#2C1E14]">
              <div className="p-3 bg-[#EFE7D8] rounded-xl border border-[#DFD3BE]">
                <strong className="block text-[#8C3A27] mb-1">الفصاحة البلاغية</strong>
                لغة شعرية معجزة ذات 16 بحراً نغمياً ومجازات بيانية راقية.
              </div>
              <div className="p-3 bg-[#EFE7D8] rounded-xl border border-[#DFD3BE]">
                <strong className="block text-[#8C3A27] mb-1">علم الفراسة والأثر</strong>
                معرفة أنساب الناس من ملامحهم واقتفاء أثر الأقدام على الكثبان.
              </div>
              <div className="p-3 bg-[#EFE7D8] rounded-xl border border-[#DFD3BE]">
                <strong className="block text-[#8C3A27] mb-1">علم الأنساب والأيام</strong>
                حفظ شجرة النسب والبطون والأيام شفهياً عبر أجيال متتابعة.
              </div>
              <div className="p-3 bg-[#EFE7D8] rounded-xl border border-[#DFD3BE]">
                <strong className="block text-[#8C3A27] mb-1">الأنواء والنجوم</strong>
                الاهتداء بالثريا وسهيل ومواسم الرياح وسقيا الأمطار.
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#E8DEC9] text-xs text-[#7A624E]">
            المصدر: <em>المفصل في تاريخ العرب قبل الإسلام</em>، د. جواد علي.
          </div>
        </div>
      </div>

      {/* FULL REALISTIC & INTERACTIVE ARABIAN PENINSULA MAP (REQUIREMENT 1) */}
      <div className="bg-[#F3ECE0] rounded-3xl p-6 sm:p-10 border border-[#DECFB5] shadow-sm">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#8C3A27] font-bold uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4" />
              <span>خريطة جغرافية تفاعلية دقيقة</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#2C1E14]">
              خريطة شبه الجزيرة العربية ومراكزها التاريخية
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#6C5646] max-w-md">
            اضغط على أي إقليم (الحجاز، نجد، اليمن، عُمان، البحرين) أو أي مدينة (مكة، يثرب، الطائف، نجران) لاستكشاف خصائصها وأحداثها التاريخية.
          </p>
        </div>

        {/* Quick Tabs to select any Region or City */}
        <div className="flex flex-wrap gap-1.5 mb-8 border-b border-[#DECDB7] pb-4">
          {geoEntities.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedGeoId(item.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedGeoId === item.id
                  ? 'bg-[#2C1E14] text-[#E5C378] shadow-md border border-[#C5A059]'
                  : 'bg-[#EAE0D0] text-[#4A3728] hover:bg-[#E2D4C0]'
              }`}
            >
              <MapPin className={`w-3 h-3 ${item.type === 'city' ? 'text-[#8C3A27]' : 'text-[#B45309]'}`} />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Map Canvas + Interactive Information Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Authentic Scaled Vector Map of Arabian Peninsula */}
          <div className="lg:col-span-7 bg-[#EFE6D6] rounded-2xl border border-[#DFD1BD] p-4 sm:p-6 relative min-h-[460px] flex flex-col justify-between overflow-hidden shadow-inner">
            {/* Water Bodies labels */}
            <span className="absolute top-8 right-6 text-[11px] font-bold text-[#8C7A65] tracking-widest font-serif pointer-events-none">
              الخليج العربي
            </span>
            <span className="absolute top-1/2 left-4 -translate-y-1/2 text-[11px] font-bold text-[#8C7A65] tracking-widest font-serif pointer-events-none -rotate-90">
              البحر الأحمر
            </span>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] font-bold text-[#8C7A65] tracking-widest font-serif pointer-events-none">
              بحر العرب وخليج عدن
            </span>

            {/* Geographical SVG Contour of Arabian Peninsula */}
            <svg
              className="w-full h-[380px] drop-shadow-md"
              viewBox="0 0 500 440"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Sea Water Backdrop */}
              <rect width="500" height="440" rx="16" fill="#E6DAC8" fillOpacity="0.4" />

              {/* Arabian Peninsula Landmass Outline */}
              <path
                d="M 120 50 
                   C 170 45, 230 40, 290 60
                   C 330 75, 380 90, 420 125
                   C 440 145, 450 180, 470 200
                   C 480 220, 470 250, 450 270
                   C 410 300, 360 330, 300 360
                   C 260 380, 200 410, 160 400
                   C 130 390, 120 350, 115 310
                   C 110 270, 105 230, 95 190
                   C 85 150, 80 110, 100 70 Z"
                fill="#F7F1E4"
                stroke="#C5A059"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {/* Regional Terrain Polygons */}
              {/* Al-Hijaz (West strip) */}
              <path
                d="M 100 75 C 90 140, 105 220, 120 280 L 175 270 C 160 210, 150 140, 155 80 Z"
                fill="#E8DEC9"
                fillOpacity="0.75"
                stroke="#B89B72"
                strokeWidth="1"
                strokeDasharray="4 2"
                className="cursor-pointer hover:fill-[#E0CFB3] transition-colors"
                onClick={() => setSelectedGeoId('hijaz-region')}
              />

              {/* Najd (Center High Plateau) */}
              <path
                d="M 175 80 C 240 85, 300 110, 340 150 C 330 220, 300 270, 240 280 C 190 270, 175 200, 175 80 Z"
                fill="#EFE3CC"
                fillOpacity="0.75"
                stroke="#B89B72"
                strokeWidth="1"
                strokeDasharray="4 2"
                className="cursor-pointer hover:fill-[#E6D4B5] transition-colors"
                onClick={() => setSelectedGeoId('najd-region')}
              />

              {/* Yemen & Hadramawt (South) */}
              <path
                d="M 115 310 C 160 330, 220 335, 270 330 C 290 350, 270 380, 200 395 C 150 395, 125 360, 115 310 Z"
                fill="#E4D7BE"
                fillOpacity="0.85"
                stroke="#B89B72"
                strokeWidth="1"
                strokeDasharray="4 2"
                className="cursor-pointer hover:fill-[#D8C4A0] transition-colors"
                onClick={() => setSelectedGeoId('yemen-region')}
              />

              {/* Oman / Majan (Southeast) */}
              <path
                d="M 370 210 C 430 225, 460 250, 440 280 C 410 300, 380 320, 340 325 C 360 270, 365 240, 370 210 Z"
                fill="#EAE0C8"
                fillOpacity="0.8"
                stroke="#B89B72"
                strokeWidth="1"
                strokeDasharray="4 2"
                className="cursor-pointer hover:fill-[#DCCBAA] transition-colors"
                onClick={() => setSelectedGeoId('oman-region')}
              />

              {/* Bahrain & Yamama (East) */}
              <path
                d="M 340 120 C 370 140, 390 170, 360 210 C 330 215, 300 200, 310 150 Z"
                fill="#E8DEC9"
                fillOpacity="0.8"
                stroke="#B89B72"
                strokeWidth="1"
                strokeDasharray="4 2"
                className="cursor-pointer hover:fill-[#DCCAA9] transition-colors"
                onClick={() => setSelectedGeoId('bahrain-yamama')}
              />

              {/* Ancient Trade Caravan Route (Darb al-Bukhur) */}
              <path
                d="M 180 370 C 160 320, 140 260, 130 225 C 120 185, 110 140, 115 65"
                stroke="#8C3A27"
                strokeWidth="2"
                strokeDasharray="5 4"
                fill="none"
              />

              {/* Map Region Titles */}
              <text x="125" y="160" fill="#78350F" fontSize="13" fontWeight="bold" fontFamily="Amiri">الحِجَاز</text>
              <text x="235" y="190" fill="#78350F" fontSize="16" fontWeight="bold" fontFamily="Amiri">نَجْد</text>
              <text x="175" y="365" fill="#78350F" fontSize="16" fontWeight="bold" fontFamily="Amiri">اليَمَن</text>
              <text x="390" y="270" fill="#78350F" fontSize="13" fontWeight="bold" fontFamily="Amiri">عُمَان</text>
              <text x="330" y="160" fill="#78350F" fontSize="12" fontWeight="bold" fontFamily="Amiri">البحرين</text>

              {/* City Markers with interactive triggers */}
              {/* Makkah */}
              <g className="cursor-pointer group" onClick={() => setSelectedGeoId('makkah')}>
                <circle cx="132" cy="225" r="7" fill={selectedGeoId === 'makkah' ? '#8C3A27' : '#C5A059'} stroke="#FFFDF9" strokeWidth="2" />
                <text x="145" y="229" fill="#2C1E14" fontSize="11" fontWeight="bold" fontFamily="Tajawal">مكة المكرمة</text>
              </g>

              {/* Yathrib */}
              <g className="cursor-pointer group" onClick={() => setSelectedGeoId('yathrib')}>
                <circle cx="124" cy="175" r="7" fill={selectedGeoId === 'yathrib' ? '#8C3A27' : '#C5A059'} stroke="#FFFDF9" strokeWidth="2" />
                <text x="136" y="179" fill="#2C1E14" fontSize="11" fontWeight="bold" fontFamily="Tajawal">يَثْرِب</text>
              </g>

              {/* At-Ta'if */}
              <g className="cursor-pointer group" onClick={() => setSelectedGeoId('taif')}>
                <circle cx="140" cy="242" r="6" fill={selectedGeoId === 'taif' ? '#8C3A27' : '#C5A059'} stroke="#FFFDF9" strokeWidth="2" />
                <text x="152" y="246" fill="#2C1E14" fontSize="10" fontWeight="bold" fontFamily="Tajawal">الطائف</text>
              </g>

              {/* Najran */}
              <g className="cursor-pointer group" onClick={() => setSelectedGeoId('najran')}>
                <circle cx="185" cy="320" r="6" fill={selectedGeoId === 'najran' ? '#8C3A27' : '#C5A059'} stroke="#FFFDF9" strokeWidth="2" />
                <text x="197" y="324" fill="#2C1E14" fontSize="10" fontWeight="bold" fontFamily="Tajawal">نَجْرَان</text>
              </g>
            </svg>

            {/* Map Legend */}
            <div className="pt-3 border-t border-[#DFD1BD] flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#6C5646]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8C3A27] inline-block" />
                  <span>مراكز ومدن كبرى</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-4 h-0.5 bg-[#8C3A27] border-dashed border-t border-[#8C3A27] inline-block" />
                  <span>درب البخور وقوافل التجارة</span>
                </span>
              </div>
              <span className="text-[#8C3A27] font-semibold">انقر على الخريطة للاستكشاف</span>
            </div>
          </div>

          {/* Interactive Information Showcase Card for Selected Entity */}
          <div className="lg:col-span-5 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#DFD1BD] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block text-xs font-bold text-[#8C3A27] bg-[#EFE5D5] px-3 py-1 rounded-full">
                  {activeGeo.tag}
                </span>
                <span className="text-xs font-mono text-[#A89F91]">
                  {activeGeo.type === 'city' ? 'مدينة تاريخية' : 'إقليم جغرافي'}
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold font-serif text-[#2C1E14] mb-2">
                {activeGeo.name}
              </h4>

              <div className="flex items-center gap-1.5 text-xs text-[#7A624E] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#8C3A27] shrink-0" />
                <span>{activeGeo.coordinatesDesc}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#4A3728] leading-relaxed mb-6">
                {activeGeo.significance}
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold text-[#2C1E14] block">
                  أبرز المعالم والخصائص:
                </span>
                <ul className="space-y-1.5">
                  {activeGeo.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#5C4537]">
                      <span className="text-[#C5A059] font-bold mt-0.5">✦</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-[#F2EAE0] rounded-xl border border-[#DFD1BD] text-xs text-[#4A3728]">
              <strong className="text-[#8C3A27] block mb-1">أهم الأحداث التاريخية المرتبطة:</strong>
              {activeGeo.historicalEvents}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
