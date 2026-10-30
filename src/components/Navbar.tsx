/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Search, Volume2, VolumeX, Menu, X, Compass, Feather } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Soft desert wind ambient synthesizer using Web Audio API
  const toggleAmbientSound = () => {
    if (isAudioPlaying) {
      if (audioContext) {
        audioContext.close();
        setAudioContext(null);
      }
      setIsAudioPlaying(false);
    } else {
      try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = output[i];
          output[i] *= 3.5;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.04, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);
        whiteNoise.start(0);

        setAudioContext(ctx);
        setIsAudioPlaying(true);
      } catch {
        setIsAudioPlaying(false);
      }
    }
  };

  const navLinks = [
    { label: 'التعريف والخريطة', href: '#introduction' },
    { label: 'أهم الشخصيات', href: '#characters' },
    { label: 'الشعر والمعلقات', href: '#poetry' },
    { label: 'القبائل والأسواق', href: '#tribes-markets' },
    { label: 'المعتقدات الدينية', href: '#religion' },
    { label: 'أيام العرب', href: '#events' },
    { label: 'مشاهد مصورة', href: '#daily-scenes' },
    { label: 'فريق العمل', href: '#team' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1F140D]/95 backdrop-blur-md shadow-lg border-b border-[#C5A059]/20 py-3 text-[#F5EFE6]'
            : 'bg-gradient-to-b from-[#1F140D]/90 via-[#1F140D]/60 to-transparent py-4 text-[#FDFBF7]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold font-serif tracking-wide text-[#E5C378] hover:text-[#F3DFA2] transition-colors whitespace-nowrap shrink-0"
          >
            <Compass className="w-6 h-6 text-[#C5A059]" />
            <span>رحلة إلى العصر الجاهلي</span>
          </a>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#E7DFD5] hover:text-[#E5C378] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action & utilities */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick search button */}
            <button
              onClick={onOpenSearch}
              title="ابحث في الموسوعة (شخصيات، قبائل، أحداث)"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C5A059]/30 bg-[#2C1E14]/70 hover:bg-[#3D2817] text-xs text-[#E5C378] transition-colors whitespace-nowrap shrink-0"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ابحث بالموسوعة</span>
            </button>

            {/* Ambient sound toggle */}
            <button
              onClick={toggleAmbientSound}
              title={isAudioPlaying ? 'إيقاف نسيم الصحراء' : 'تشغيل مؤثر نسيم الصحراء'}
              className={`p-2 rounded-lg border transition-colors ${
                isAudioPlaying
                  ? 'border-[#E5C378] bg-[#C5A059]/20 text-[#E5C378]'
                  : 'border-[#C5A059]/20 bg-[#2C1E14]/50 hover:bg-[#3D2817] text-[#D6CEBE]'
              }`}
            >
              {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Quick Explore Button */}
            <a
              href="#introduction"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#1F140D] bg-gradient-to-r from-[#E5C378] to-[#C5A059] hover:from-[#F3DFA2] hover:to-[#D4AF37] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 hover:shadow"
            >
              <Feather className="w-3.5 h-3.5" />
              <span>استكشف الموسوعة</span>
            </a>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#E7DFD5] hover:text-[#E5C378] rounded-md transition-colors"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 xl:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 w-3/4 max-w-sm h-full bg-[#1F140D] border-l border-[#C5A059]/20 p-6 flex flex-col gap-4 text-[#FDFBF7] shadow-2xl overflow-y-auto">
            <div className="text-xs text-[#C5A059] uppercase tracking-wider font-semibold border-b border-[#C5A059]/20 pb-2">
              أقسام الموسوعة التاريخية
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm py-2 px-3 rounded-md hover:bg-[#2C1E14] text-[#E7DFD5] hover:text-[#E5C378] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
