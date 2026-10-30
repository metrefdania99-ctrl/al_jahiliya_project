/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, X, Users, Calendar, ShoppingBag, Feather, Landmark, ArrowLeft } from 'lucide-react';
import { CHARACTERS, HISTORICAL_EVENTS, MARKETS_DATA, TRIBES_DATA, MUALLAQAT_INFO } from '../data/historyData.ts';

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'character' | 'event' | 'market' | 'tribe' | 'poem';
  targetHref: string;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  const allItems: SearchItem[] = useMemo(() => {
    const list: SearchItem[] = [];

    // Characters
    CHARACTERS.forEach((char) => {
      list.push({
        id: char.id,
        title: char.name,
        subtitle: `${char.title} · ${char.tribe}`,
        category: 'character',
        targetHref: '#characters'
      });
    });

    // Historical Events
    HISTORICAL_EVENTS.forEach((ev) => {
      list.push({
        id: ev.id,
        title: ev.title,
        subtitle: `${ev.approxDate} · ${ev.parties}`,
        category: 'event',
        targetHref: '#events'
      });
    });

    // Markets
    MARKETS_DATA.forEach((m) => {
      list.push({
        id: m.id,
        title: m.name,
        subtitle: `${m.location} · ${m.timing}`,
        category: 'market',
        targetHref: '#tribes-markets'
      });
    });

    // Tribes
    TRIBES_DATA.forEach((t) => {
      list.push({
        id: t.id,
        title: `قبيلة ${t.name}`,
        subtitle: `${t.lineage} · ${t.region}`,
        category: 'tribe',
        targetHref: '#tribes-markets'
      });
    });

    // Poems
    MUALLAQAT_INFO.forEach((p) => {
      list.push({
        id: p.id,
        title: `معلقة ${p.poet}`,
        subtitle: p.openingVerse,
        category: 'poem',
        targetHref: '#poetry'
      });
    });

    return list;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return allItems.slice(0, 8);
    const q = query.toLowerCase();
    return allItems.filter(
      (item) => item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q)
    );
  }, [query, allItems]);

  if (!isOpen) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'character':
        return <Users className="w-4 h-4 text-[#8C3A27]" />;
      case 'event':
        return <Calendar className="w-4 h-4 text-[#C5A059]" />;
      case 'market':
        return <ShoppingBag className="w-4 h-4 text-[#2D6A4F]" />;
      case 'tribe':
        return <Landmark className="w-4 h-4 text-[#1E3A8A]" />;
      case 'poem':
        return <Feather className="w-4 h-4 text-[#B45309]" />;
      default:
        return <Search className="w-4 h-4 text-[#7A624E]" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'character': return 'شخصية تاريخية';
      case 'event': return 'وقعة أو حرب';
      case 'market': return 'سوق موسمي';
      case 'tribe': return 'قبيلة عربية';
      case 'poem': return 'معلقة وشعر';
      default: return 'عنصر';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-20 overflow-y-auto">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-[#FAF7F2] rounded-3xl border border-[#C5A059]/40 shadow-2xl overflow-hidden text-[#2C1E14]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#E8DEC9] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#8C3A27] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن شاعر، وقعة، قبيلة، سوق، أو معلقة..."
            className="w-full bg-transparent text-sm sm:text-base text-[#2C1E14] focus:outline-none placeholder-[#9C8B7A]"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#EFE5D5] text-[#7A624E] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {results.length === 0 ? (
            <div className="text-center py-12 text-[#7A624E] text-sm">
              لم نعثر على نتائج مطابقة لـ "{query}".
            </div>
          ) : (
            results.map((item) => (
              <a
                key={`${item.category}-${item.id}`}
                href={item.targetHref}
                onClick={onClose}
                className="flex items-center justify-between p-3.5 rounded-xl hover:bg-[#EFE6D6] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF0E1] flex items-center justify-center shrink-0 border border-[#DECFB5]">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold font-serif text-[#2C1E14] group-hover:text-[#8C3A27]">
                        {item.title}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#EAE0D0] text-[#7A624E]">
                        {getCategoryLabel(item.category)}
                      </span>
                    </div>
                    <span className="text-xs text-[#6C5646] line-clamp-1 mt-0.5">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <ArrowLeft className="w-4 h-4 text-[#C5A059] opacity-0 group-hover:opacity-100 transform group-hover:-translate-x-1 transition-all" />
              </a>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#EFE6D6] border-t border-[#DFD1BD] text-center text-xs text-[#7A624E]">
          يمكنك النقر على أي عنصر للانتقال الفوري إلى قسمه في الموسوعة
        </div>
      </div>
    </div>
  );
};
