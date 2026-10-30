/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Feather, Users, Landmark, ShoppingBag, ShieldCheck, Compass } from 'lucide-react';

export const OverviewCards: React.FC = () => {
  const cards = [
    {
      id: 'poetry',
      title: 'الشعر والأدب والمعلقات',
      icon: Feather,
      href: '#poetry',
      desc: 'سجل العرب التاريخي وديوان مفاخرهم، والمعلقات السبع الطوال ونماذج من عيون القصائد.',
      tag: 'ديوان العرب'
    },
    {
      id: 'characters',
      title: 'شخصيات صنعت التاريخ',
      icon: Users,
      href: '#characters',
      desc: 'سير فحول الشعراء والفرسان كعنترة وامرئ القيس وزهير، ورموز الكرم والحكمة كحاتم الطائي وقس.',
      tag: 'فرسان وحكماء'
    },
    {
      id: 'tribes',
      title: 'القبائل العربية والأنساب',
      icon: Landmark,
      href: '#tribes-markets',
      desc: 'أمهات القبائل العدنانية والقحطانية: قريش، تميم، طيء، بكر وتغلب، وجغرافية انتشارها.',
      tag: 'جماجم العرب'
    },
    {
      id: 'markets',
      title: 'الأسواق والمواسم الكبرى',
      icon: ShoppingBag,
      href: '#markets',
      desc: 'سوق عكاظ، ومجنة، وذو المجاز؛ ملتقيات التجارة والتحكيم الأدبي وفداء الأسرى.',
      tag: 'تجارة وأدب'
    },
    {
      id: 'religion',
      title: 'المعتقدات الدينية قبل الإسلام',
      icon: Compass,
      href: '#religion',
      desc: 'التنوع الديني في الجزيرة؛ بين عبادة الأصنام، وحنين الحنفاء للتوحيد، والمسيحية واليهودية.',
      tag: 'المعتقدات'
    },
    {
      id: 'events',
      title: 'أيام العرب والحروب الكبرى',
      icon: ShieldCheck,
      href: '#events',
      desc: 'الوقائع الفاصلة كحرب البسوس، وداحس والغبراء، ويوم ذي قار الخالد، وحلف الفضول العادل.',
      tag: 'أيام العرب'
    }
  ];

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="text-xs uppercase tracking-widest text-[#B45309] font-bold mb-1.5">
          خارطة الموسوعة
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#2C1E14]">
          أهم محاور رحلتك التاريخية
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#5C4537] leading-relaxed">
          استكشف أهم ملامح حياة العرب الفكرية والأدبية والتجارية باختصار وإيجاز موثق.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <a
              key={card.id}
              href={card.href}
              className="group p-5 rounded-2xl bg-[#F7F2EA] border border-[#E4D8C5] hover:border-[#C5A059] hover:bg-[#FAF6F0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EFE5D5] group-hover:bg-[#E5C378]/30 flex items-center justify-center text-[#8C3A27] group-hover:text-[#6E2A18] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#8C6239] bg-[#EFE5D5]/80 px-2.5 py-0.5 rounded-md">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold font-serif text-[#2C1E14] group-hover:text-[#8C3A27] transition-colors">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#5C4537] leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8DEC9] flex items-center justify-between text-xs font-semibold text-[#8C3A27] group-hover:text-[#B45309]">
                <span>استكشف المحور</span>
                <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
