/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Eye, Sparkles, Compass, CheckCircle } from 'lucide-react';
import { DAILY_LIFE_SCENES } from '../data/historyData.ts';

export const DailyLifeScenesSection: React.FC = () => {
  const [activeSceneIdx, setActiveSceneIdx] = useState<number>(0);

  const currentScene = DAILY_LIFE_SCENES[activeSceneIdx] || DAILY_LIFE_SCENES[0];

  return (
    <section id="daily-scenes" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B45309] font-bold mb-2">
          <Eye className="w-3.5 h-3.5" />
          <span>المعرض البصري الحي</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#2C1E14]">
          مشاهد من الحياة اليومية في العصر الجاهلي
        </h2>
        <div className="w-24 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#5C4537] leading-relaxed [text-wrap:balance]">
          تجربة بصرية تفاعلية تأخذك إلى تفاصيل معيشة الأجداد؛ بين مضارب الخيام، ودوي حوافر الخيل، وسكينة القوافل السارية تحت سماء النجوم.
        </p>
      </div>

      {/* Main Interactive Viewer */}
      <div className="bg-[#FAF6EE] rounded-3xl border border-[#DECFB5] overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 items-stretch mb-10">
        {/* Left/Main Image display */}
        <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px]">
          <img
            src={currentScene.image}
            alt={currentScene.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-500"
          />
          {/* Mandatory Historical Reimagining Notice Badge */}
          <div className="absolute bottom-4 right-4 bg-[#1F140D]/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-xs text-[#E5C378] border border-[#C5A059]/40 flex items-center gap-2 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>إعادة تصور فني للحياة في العصر الجاهلي</span>
          </div>
        </div>

        {/* Right Details Panel */}
        <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-[#8C3A27] font-bold uppercase tracking-wider mb-2">
              <span>المشهد البصري {activeSceneIdx + 1} من {DAILY_LIFE_SCENES.length}</span>
              <Compass className="w-4 h-4" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#2C1E14] mb-4">
              {currentScene.title}
            </h3>

            <p className="text-sm text-[#4A3728] leading-relaxed mb-6">
              {currentScene.description}
            </p>

            <div className="space-y-2.5 pt-4 border-t border-[#E8DEC9]">
              <span className="text-xs font-bold text-[#2C1E14] block">أبرز معالم هذا المشهد:</span>
              {currentScene.highlights.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#5C4537]">
                  <CheckCircle className="w-4 h-4 text-[#8C3A27] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Scene Selector Buttons */}
          <div className="pt-6 border-t border-[#E8DEC9] mt-6 flex gap-2">
            {DAILY_LIFE_SCENES.map((scene, idx) => (
              <button
                key={scene.id}
                onClick={() => setActiveSceneIdx(idx)}
                className={`flex-1 py-2 px-2 text-xs font-semibold rounded-xl transition-all ${
                  activeSceneIdx === idx
                    ? 'bg-[#2C1E14] text-[#E5C378] shadow-sm'
                    : 'bg-[#EFE6D6] text-[#4A3728] hover:bg-[#E5DAC6]'
                }`}
              >
                مشهد {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
