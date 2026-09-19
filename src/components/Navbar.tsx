import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageId, Language } from '../types';
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  Sparkles,
  Compass,
  FileText,
  Users,
  ShieldAlert,
  Lock,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { INITIATIVE_INFO } from '../data/contentData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  lang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [involveDropdownOpen, setInvolveDropdownOpen] = useState(false);

  const isEn = lang === 'en';

  const navigateTo = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setAreasDropdownOpen(false);
    setInvolveDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#092B3A]/95 backdrop-blur-md border-b border-[#087EA4]/20 text-white transition-all shadow-md">
      {/* Top Advisory Banner: Strict Legal Status Notice */}
      <div className="bg-gradient-to-r from-[#051A24] via-[#092B3A] to-[#051A24] text-[11px] py-1.5 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-[#E8D8B8]">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#159A72]/20 text-[#4ade80] border border-[#159A72]/40 shrink-0">
              {isEn ? INITIATIVE_INFO.legalStatusBadgeEn : INITIATIVE_INFO.legalStatusBadgeAr}
            </span>
            <span className="hidden sm:inline opacity-90 truncate">
              {isEn
                ? 'Bridges of Goodness is a foundational concept under development—not yet a registered organization.'
                : 'جسور الخير فكرة تأسيسية قيد التطوير—وليست بعد منظمة مسجلة ولا تجمع تبرعات في هذه المرحلة.'}
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-[11px]">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all font-bold text-white border border-white/10"
              title="تغيير اللغة / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#F2B84B]" />
              <span>{isEn ? 'العربية' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => navigateTo('home')}
            className="cursor-pointer transition-transform hover:scale-[1.01]"
          >
            <Logo variant="white" size="md" isEn={isEn} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => navigateTo('home')}
              className={`px-3 py-2 rounded-xl transition-colors ${
                currentPage === 'home'
                  ? 'bg-[#087EA4] text-white font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isEn ? 'Home' : 'الرئيسية'}
            </button>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className={`px-3 py-2 rounded-xl flex items-center gap-1 transition-colors ${
                  ['about', 'story', 'vision', 'mission', 'philosophy', 'bridge-model', 'team', 'transparency', 'concept-doc', 'faq'].includes(currentPage)
                    ? 'bg-[#087EA4] text-white font-bold'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{isEn ? 'About BGI' : 'عن جسور الخير'}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {aboutDropdownOpen && (
                <div
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                  className="absolute top-full mt-2 w-64 bg-[#092B3A] border border-[#087EA4]/40 rounded-2xl p-2 shadow-2xl z-50 text-xs space-y-1"
                >
                  <button
                    onClick={() => navigateTo('about')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <Layers className="w-4 h-4 text-[#F2B84B]" />
                    <span>{isEn ? 'About the Initiative' : 'عن المبادرة والتعريف'}</span>
                  </button>
                  <button
                    onClick={() => navigateTo('story')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#159A72]" />
                    <span>{isEn ? 'Story of the Idea' : 'قصة الفكرة ونشأتها'}</span>
                  </button>
                  <button
                    onClick={() => navigateTo('vision')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <Compass className="w-4 h-4 text-[#087EA4]" />
                    <span>{isEn ? 'Our Vision' : 'رؤيتنا المستقبلية'}</span>
                  </button>
                  <button
                    onClick={() => navigateTo('mission')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <HeartHandshake className="w-4 h-4 text-[#F2B84B]" />
                    <span>{isEn ? 'Our Mission' : 'رسالة المبادرة'}</span>
                  </button>
                  <button
                    onClick={() => navigateTo('philosophy')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <span className="w-4 text-center font-bold text-[#159A72]">🌉</span>
                    <span>{isEn ? 'The Bridge Philosophy' : 'فلسفة الجسر: من الحاجة للفرصة'}</span>
                  </button>
                  <button
                    onClick={() => navigateTo('team')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <Users className="w-4 h-4 text-[#E8D8B8]" />
                    <span>{isEn ? 'Founding Team' : 'الفريق التأسيسي'}</span>
                  </button>
                  <button
                    onClick={() => navigateTo('transparency')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <ShieldAlert className="w-4 h-4 text-[#F2B84B]" />
                    <span>{isEn ? 'Transparency & Ethics' : 'الشفافية والمصداقية'}</span>
                  </button>
                  <button
                    onClick={() => navigateTo('concept-doc')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-[#087EA4]" />
                    <span>{isEn ? 'Concept Paper' : 'وثيقة التصور التأسيسي'}</span>
                  </button>
                  <button
                    onClick={() => navigateTo('faq')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <span>{isEn ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Action Areas Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                className={`px-3 py-2 rounded-xl flex items-center gap-1 transition-colors ${
                  currentPage.startsWith('area-')
                    ? 'bg-[#087EA4] text-white font-bold'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{isEn ? 'Action Areas' : 'مجالات العمل'}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {areasDropdownOpen && (
                <div
                  onMouseLeave={() => setAreasDropdownOpen(false)}
                  className="absolute top-full mt-2 w-64 bg-[#092B3A] border border-[#087EA4]/40 rounded-2xl p-2 shadow-2xl z-50 text-xs space-y-1"
                >
                  <button onClick={() => navigateTo('area-education')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    01 {isEn ? 'Education & Knowledge' : 'التعليم والمعرفة'}
                  </button>
                  <button onClick={() => navigateTo('area-health')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    02 {isEn ? 'Health & Primary Care' : 'الصحة والرعاية الأساسية'}
                  </button>
                  <button onClick={() => navigateTo('area-relief')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    03 {isEn ? 'Humanitarian Relief' : 'الإغاثة الإنسانية العاجلة'}
                  </button>
                  <button onClick={() => navigateTo('area-youth')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    04 {isEn ? 'Youth & Empowerment' : 'الشباب والتمكين المهني'}
                  </button>
                  <button onClick={() => navigateTo('area-food')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    05 {isEn ? 'Food Security' : 'الأمن الغذائي والإنتاج'}
                  </button>
                  <button onClick={() => navigateTo('area-water')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    06 {isEn ? 'Water & Sanitation' : 'المياه النظيفة والإصحاح'}
                  </button>
                  <button onClick={() => navigateTo('area-social')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    07 {isEn ? 'Social Cohesion' : 'التنمية والتماسك المجتمعي'}
                  </button>
                </div>
              )}
            </div>

            {/* South Sudan */}
            <button
              onClick={() => navigateTo('map')}
              className={`px-3 py-2 rounded-xl transition-colors ${
                ['south-sudan', 'map', 'communities'].includes(currentPage)
                  ? 'bg-[#087EA4] text-white font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isEn ? 'South Sudan Map' : 'خريطة جنوب السودان'}
            </button>

            {/* Proposed Initiatives */}
            <button
              onClick={() => navigateTo('initiatives')}
              className={`px-3 py-2 rounded-xl transition-colors ${
                currentPage === 'initiatives'
                  ? 'bg-[#087EA4] text-white font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isEn ? 'Proposed Initiatives' : 'المبادرات المقترحة'}
            </button>

            {/* Articles */}
            <button
              onClick={() => navigateTo('featured-article')}
              className={`px-3 py-2 rounded-xl transition-colors ${
                ['articles', 'featured-article', 'news', 'hope-stories'].includes(currentPage)
                  ? 'bg-[#087EA4] text-white font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isEn ? 'Articles & Editorial' : 'المقال الرئيسي والمقالات'}
            </button>

            {/* Get Involved Dropdown */}
            <div className="relative">
              <button
                onClick={() => setInvolveDropdownOpen(!involveDropdownOpen)}
                className={`px-3 py-2 rounded-xl flex items-center gap-1 transition-colors ${
                  ['partnerships', 'volunteers', 'advisors', 'contact'].includes(currentPage)
                    ? 'bg-[#087EA4] text-white font-bold'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{isEn ? 'Partner & Volunteer' : 'شارك معنا'}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {involveDropdownOpen && (
                <div
                  onMouseLeave={() => setInvolveDropdownOpen(false)}
                  className="absolute top-full mt-2 w-56 bg-[#092B3A] border border-[#087EA4]/40 rounded-2xl p-2 shadow-2xl z-50 text-xs space-y-1"
                >
                  <button onClick={() => navigateTo('partnerships')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    {isEn ? 'Partnerships' : 'الشراكات: نبني الجسور معاً'}
                  </button>
                  <button onClick={() => navigateTo('volunteers')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    {isEn ? 'Volunteers' : 'المتطوعون: كن جزءاً من الجسر'}
                  </button>
                  <button onClick={() => navigateTo('advisors')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    {isEn ? 'Experts & Advisors' : 'الخبراء والمستشارون'}
                  </button>
                  <button onClick={() => navigateTo('contact')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    {isEn ? 'Contact Us' : 'تواصل معنا'}
                  </button>
                </div>
              )}
            </div>

          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Admin Dashboard shortcut */}
            <button
              onClick={() => navigateTo('admin')}
              className={`text-xs px-3 py-2 rounded-xl border border-white/15 flex items-center gap-1.5 transition-all ${
                currentPage === 'admin'
                  ? 'bg-white text-[#092B3A] font-bold'
                  : 'text-[#E8D8B8] hover:text-white hover:bg-white/10'
              }`}
              title="لوحة الإدارة"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{isEn ? 'Admin' : 'لوحة الإدارة'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => navigateTo('about')}
              className="bg-gradient-to-r from-[#087EA4] to-[#159A72] hover:brightness-110 active:scale-95 text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-xl shadow-md transition-all"
            >
              {isEn ? 'Explore BGI' : 'اكتشف المبادرة'}
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#092B3A] border-b border-white/10 max-h-[85vh] overflow-y-auto px-4 py-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-xs font-bold text-[#E8D8B8]">
              {isEn ? 'BGI Navigation Menu' : 'قائمة مبادرة جسور الخير'}
            </span>
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-xs font-bold text-white"
            >
              <Globe className="w-3.5 h-3.5 text-[#F2B84B]" />
              <span>{isEn ? 'العربية' : 'English'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => navigateTo('home')}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#087EA4] text-start font-bold transition-colors"
            >
              🏠 {isEn ? 'Home' : 'الرئيسية'}
            </button>
            <button
              onClick={() => navigateTo('about')}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#087EA4] text-start font-bold transition-colors"
            >
              ℹ️ {isEn ? 'About BGI' : 'عن المبادرة'}
            </button>
            <button
              onClick={() => navigateTo('story')}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#087EA4] text-start font-bold transition-colors"
            >
              ✨ {isEn ? 'Story of Idea' : 'قصة الفكرة'}
            </button>
            <button
              onClick={() => navigateTo('philosophy')}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#087EA4] text-start font-bold transition-colors"
            >
              🌉 {isEn ? 'Bridge Philosophy' : 'فلسفة الجسر'}
            </button>
            <button
              onClick={() => navigateTo('map')}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#087EA4] text-start font-bold transition-colors"
            >
              🗺️ {isEn ? 'South Sudan Map' : 'خريطة الولايات'}
            </button>
            <button
              onClick={() => navigateTo('initiatives')}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#087EA4] text-start font-bold transition-colors"
            >
              🚀 {isEn ? 'Proposed Initiatives' : 'المبادرات المقترحة'}
            </button>
            <button
              onClick={() => navigateTo('featured-article')}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#087EA4] text-start font-bold transition-colors"
            >
              📰 {isEn ? 'Featured Article' : 'المقال الرئيسي'}
            </button>
            <button
              onClick={() => navigateTo('team')}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#087EA4] text-start font-bold transition-colors"
            >
              👥 {isEn ? 'Founding Team' : 'فريق التأسيس'}
            </button>
            <button
              onClick={() => navigateTo('partnerships')}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#087EA4] text-start font-bold transition-colors"
            >
              🤝 {isEn ? 'Partnerships' : 'الشراكات'}
            </button>
            <button
              onClick={() => navigateTo('volunteers')}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#087EA4] text-start font-bold transition-colors"
            >
              🙋 {isEn ? 'Volunteers' : 'المتطوعون'}
            </button>
            <button
              onClick={() => navigateTo('admin')}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-start font-bold col-span-2 transition-colors flex items-center justify-between"
            >
              <span>🔐 {isEn ? 'Admin Dashboard' : 'لوحة الإدارة والتحكم'}</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/20">CMS</span>
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => navigateTo('about')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#087EA4] to-[#159A72] text-white font-bold text-center"
            >
              {isEn ? 'Discover Bridges of Goodness' : 'اكتشف المبادرة الكاملة'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
