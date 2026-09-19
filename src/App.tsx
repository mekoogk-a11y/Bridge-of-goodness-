import React, { useState, useEffect } from 'react';
import { PageId, Language } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AboutViews } from './views/AboutViews';
import { ActionAreasView } from './views/ActionAreasView';
import { SouthSudanView } from './views/SouthSudanView';
import { InitiativesView } from './views/InitiativesView';
import { ArticlesView } from './views/ArticlesView';
import { InvolvementView } from './views/InvolvementView';
import { PolicyViews } from './views/PolicyViews';
import { AdminDashboardView } from './views/AdminDashboardView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [lang, setLang] = useState<Language>('ar');

  // Sync hash routing if user enters specific hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (hash) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const isEn = lang === 'en';

  return (
    <div
      dir={isEn ? 'ltr' : 'rtl'}
      className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#102A43] font-sans selection:bg-[#F2B84B] selection:text-[#092B3A]"
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

        {/* 2. About Sub-pages */}
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

        {/* 3. 7 Action Areas */}
        {currentPage.startsWith('area-') && (
          <ActionAreasView
            currentAreaId={currentPage}
            onNavigate={handleNavigate}
            lang={lang}
          />
        )}

        {/* 4. South Sudan & 10 States Map */}
        {['south-sudan', 'map', 'communities'].includes(currentPage) && (
          <SouthSudanView
            pageId={currentPage}
            onNavigate={handleNavigate}
            lang={lang}
          />
        )}

        {/* 5. Proposed Initiatives */}
        {currentPage === 'initiatives' && (
          <InitiativesView onNavigate={handleNavigate} lang={lang} />
        )}

        {/* 6. Articles & Featured Editorial */}
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

        {/* 7. Partnerships, Volunteers, Contact */}
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

        {/* 8. Admin Dashboard */}
        {currentPage === 'admin' && (
          <AdminDashboardView onNavigate={handleNavigate} lang={lang} />
        )}

        {/* 9. Legal & Policy Pages */}
        {['privacy', 'terms', 'safeguarding', 'press'].includes(currentPage) && (
          <PolicyViews
            pageId={currentPage}
            onNavigate={handleNavigate}
            lang={lang}
          />
        )}
      </main>

      {/* Primary Global Footer */}
      <Footer onNavigate={handleNavigate} lang={lang} />
    </div>
  );
}
