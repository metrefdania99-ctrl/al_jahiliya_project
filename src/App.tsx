/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { OverviewCards } from './components/OverviewCards.tsx';
import { IntroductionSection } from './components/IntroductionSection.tsx';
import { CharactersSection } from './components/CharactersSection.tsx';
import { PoetrySection } from './components/PoetrySection.tsx';
import { EconomicTradeSection } from './components/EconomicTradeSection.tsx';
import { TribesAndMarketsSection } from './components/TribesAndMarketsSection.tsx';
import { ReligionSection } from './components/ReligionSection.tsx';
import { HistoryTimelineSection } from './components/HistoryTimelineSection.tsx';
import { DailyLifeScenesSection } from './components/DailyLifeScenesSection.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { SourcesSection } from './components/SourcesSection.tsx';
import { GlobalSearchModal } from './components/GlobalSearchModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#241812] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#1F140D] flex flex-col">
      {/* Navigation Header */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Prominent Designer Names */}
        <HeroSection />

        {/* 2. Overview / Concise Key Themes */}
        <OverviewCards />

        {/* 3. Introduction & Interactive Map of Arabia */}
        <IntroductionSection />

        {/* 4. Famous Characters & Knights Gallery */}
        <CharactersSection />

        {/* 5. Poetry, Muallaqat & Illuminated Manuscript */}
        <PoetrySection />

        {/* 6. Economic Life, Caravans & Trade */}
        <EconomicTradeSection />

        {/* 7. Tribes & Ancient Arabian Markets */}
        <TribesAndMarketsSection />

        {/* 8. Religious Beliefs & Spectrum */}
        <ReligionSection />

        {/* 9. Wars, Days of the Arabs & Timeline */}
        <HistoryTimelineSection />

        {/* 10. Visual Reimagining of Daily Life (Rich Gallery) */}
        <DailyLifeScenesSection />

        {/* 11. Team Members & Project Contributors */}
        <TeamSection />

        {/* 12. Historical Sources & Academic Citations */}
        <SourcesSection />
      </main>

      {/* Footer with Project Credits */}
      <Footer />

      {/* Global Interactive Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}
