import React, { useState, useEffect } from 'react';
import { PageId, Language } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { HomeView } from './views/HomeView';
import { AboutViews } from './views/AboutViews';
import { ActionAreasView } from './views/ActionAreasView';
import { SouthSudanView } from './views/SouthSudanView';
import { InitiativesView } from './views/InitiativesView';
import { ArticlesView } from './views/ArticlesView';
import { InvolvementView } from './views/InvolvementView';
import { PolicyViews } from './views/PolicyViews';
import { AdminDashboardView } from './views/AdminDashboardView';
import { DonationView } from './views/DonationView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [lang, setLang] = useState<Language>('ar');

  // Normalize aliases (e.g. 'education' -> 'area-education', 'projects' -> 'initiatives')
  const normalizePage = (raw: string): PageId => {
    switch (raw) {
      case 'education': return 'area-education';
      case 'health': return 'area-health';
      case 'relief': return 'area-relief';
      case 'youth': return 'area-youth';
      case 'food': return 'area-food';
      case 'water': return 'area-water';
      case 'social': return 'area-social';
      case 'projects': return 'initiatives';
      default: return (raw as PageId) || 'home';
    }
  };

  // Sync hash routing if user enters specific hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(normalizePage(hash));
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    const normalized = normalizePage(page);
    setCurrentPage(normalized);
    window.location.hash = normalized;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const isEn = lang === 'en';

  return (
    <div
      dir={isEn ? 'ltr' : 'rtl'}
      className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#102A43] font-sans selection:bg-[#F2B84B] selection:text-[#092B3A] relative"
    >
      {/* Primary Global Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main View Router Content */}
      <main className="flex-1">
        {/* 1. Home View */}
        {currentPage === 'home' && (
          <HomeView onNavigate={handleNavigate} lang={lang} />
        )}

        {/* 2. Dedicated Donation Route: /donate */}
        {currentPage === 'donate' && (
          <DonationView onNavigate={handleNavigate} lang={lang} />
        )}

        {/* 3. About Sub-pages */}
        {[
          'about',
          'story',
          'vision',
          'mission',
          'philosophy',
          'bridge-model',
          'team',
          'transparency',
          'concept-doc',
          'faq',
        ].includes(currentPage) && (
          <AboutViews
            pageId={currentPage}
            onNavigate={handleNavigate}
            lang={lang}
          />
        )}

        {/* 4. 7 Action Areas */}
        {currentPage.startsWith('area-') && (
          <ActionAreasView
            currentAreaId={currentPage}
            onNavigate={handleNavigate}
            lang={lang}
          />
        )}

        {/* 5. South Sudan & 10 States Map */}
        {['south-sudan', 'map', 'communities'].includes(currentPage) && (
          <SouthSudanView
            pageId={currentPage}
            onNavigate={handleNavigate}
            lang={lang}
          />
        )}

        {/* 6. Proposed Initiatives */}
        {(currentPage === 'initiatives' || currentPage === 'projects') && (
          <InitiativesView onNavigate={handleNavigate} lang={lang} />
        )}

        {/* 7. Articles & Featured Editorial */}
        {[
          'articles',
          'featured-article',
          'news',
          'hope-stories',
        ].includes(currentPage) && (
          <ArticlesView
            pageId={currentPage}
            onNavigate={handleNavigate}
            lang={lang}
          />
        )}

        {/* 8. Partnerships, Volunteers, Advisors, Contact */}
        {[
          'partnerships',
          'volunteers',
          'advisors',
          'contact',
        ].includes(currentPage) && (
          <InvolvementView
            pageId={currentPage}
            onNavigate={handleNavigate}
            lang={lang}
          />
        )}

        {/* 9. Admin Dashboard (CMS, Donations, Volunteers, Partnerships) */}
        {currentPage === 'admin' && (
          <AdminDashboardView onNavigate={handleNavigate} lang={lang} />
        )}

        {/* 10. Legal & Policy Pages */}
        {['privacy', 'terms', 'safeguarding', 'press'].includes(currentPage) && (
          <PolicyViews
            pageId={currentPage}
            onNavigate={handleNavigate}
            lang={lang}
          />
        )}
      </main>

      {/* Global WhatsApp Floating Action Button */}
      <WhatsAppFloatingButton lang={lang} />

      {/* Primary Global Footer */}
      <Footer onNavigate={handleNavigate} lang={lang} />
    </div>
  );
}
