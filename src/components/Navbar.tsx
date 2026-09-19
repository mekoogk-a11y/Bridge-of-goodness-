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
  HeartHandshake,
  Heart,
  MessageCircle,
  BookOpen,
  MapPin,
  Flame,
  Phone,
  HandHeart,
  Briefcase,
  HelpCircle,
  Send
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
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);

  const isEn = lang === 'en';

  const navigateTo = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setProgramsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isAboutActive = [
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
  ].includes(currentPage);

  const isProgramsActive =
    currentPage.startsWith('area-') ||
    ['education', 'health', 'relief', 'youth', 'food', 'water', 'social'].includes(currentPage);

  return (
    <header className="sticky top-0 z-50 bg-[#092B3A]/95 backdrop-blur-md border-b border-[#087EA4]/30 text-white transition-all shadow-lg">
      {/* Top Advisory Banner: Status Badge & Slogan */}
      <div className="bg-gradient-to-r from-[#051A24] via-[#092B3A] to-[#051A24] text-[11px] py-1.5 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-[#E8D8B8]">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#159A72]/30 text-[#4ade80] border border-[#159A72]/50 shrink-0">
              {isEn ? INITIATIVE_INFO.legalStatusBadgeEn : INITIATIVE_INFO.legalStatusBadgeAr}
            </span>
            <span className="hidden sm:inline font-medium text-slate-200 truncate">
              {isEn ? INITIATIVE_INFO.taglineEn : INITIATIVE_INFO.taglineAr}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 text-[11px]">
            {/* Direct WhatsApp Callout in top bar */}
            <a
              href={INITIATIVE_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors font-mono"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{INITIATIVE_INFO.whatsapp.display}</span>
            </a>

            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all font-bold text-white border border-white/15 active:scale-95"
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
            className="cursor-pointer transition-transform hover:scale-[1.01] shrink-0"
          >
            <Logo variant="white" size="md" isEn={isEn} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden 2xl:flex items-center gap-1 text-[13px] font-medium">
            {/* Home */}
            <button
              onClick={() => navigateTo('home')}
              className={`px-2.5 py-2 rounded-xl transition-colors ${
                currentPage === 'home'
                  ? 'bg-[#087EA4] text-white font-bold shadow-xs'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isEn ? 'Home' : 'الرئيسية'}
            </button>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className={`px-2.5 py-2 rounded-xl flex items-center gap-1 transition-colors ${
                  isAboutActive
                    ? 'bg-[#087EA4] text-white font-bold shadow-xs'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{isEn ? 'About' : 'عن المبادرة'}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {aboutDropdownOpen && (
                <div
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                  className="absolute top-full mt-2 w-60 bg-[#092B3A] border border-[#087EA4]/40 rounded-2xl p-2 shadow-2xl z-50 text-xs space-y-1 animate-in fade-in duration-200"
                >
                  <button
                    onClick={() => navigateTo('about')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <Layers className="w-4 h-4 text-[#F2B84B]" />
                    <span>{isEn ? 'Overview' : 'التعريف والرسالة'}</span>
                  </button>
                  <button
                    onClick={() => navigateTo('story')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#159A72]" />
                    <span>{isEn ? 'Our Story' : 'قصة الفكرة'}</span>
                  </button>
                  <button
                    onClick={() => navigateTo('philosophy')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <span className="text-[#F2B84B] font-bold">🌉</span>
                    <span>{isEn ? 'The Bridge Model' : 'نموذج وفلسفة الجسر'}</span>
                  </button>
                  <button
                    onClick={() => navigateTo('team')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <Users className="w-4 h-4 text-[#E8D8B8]" />
                    <span>{isEn ? 'Founding Team' : 'الفريق وأصحاب الفكرة'}</span>
                  </button>
                  <button
                    onClick={() => navigateTo('concept-doc')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-[#087EA4]" />
                    <span>{isEn ? 'Founding Concept' : 'وثيقة التصور التأسيسي'}</span>
                  </button>
                  <button
                    onClick={() => navigateTo('transparency')}
                    className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <ShieldAlert className="w-4 h-4 text-emerald-400" />
                    <span>{isEn ? 'Transparency' : 'الشفافية والمصداقية'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Our Vision */}
            <button
              onClick={() => navigateTo('vision')}
              className={`px-2.5 py-2 rounded-xl transition-colors ${
                currentPage === 'vision'
                  ? 'bg-[#087EA4] text-white font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isEn ? 'Our Vision' : 'رؤيتنا'}
            </button>

            {/* Programs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                className={`px-2.5 py-2 rounded-xl flex items-center gap-1 transition-colors ${
                  isProgramsActive
                    ? 'bg-[#087EA4] text-white font-bold shadow-xs'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{isEn ? 'Programs' : 'البرامج'}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {programsDropdownOpen && (
                <div
                  onMouseLeave={() => setProgramsDropdownOpen(false)}
                  className="absolute top-full mt-2 w-64 bg-[#092B3A] border border-[#087EA4]/40 rounded-2xl p-2 shadow-2xl z-50 text-xs space-y-1 animate-in fade-in duration-200"
                >
                  <button onClick={() => navigateTo('area-education')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    01 {isEn ? 'Education & Knowledge' : 'التعليم والمعرفة'}
                  </button>
                  <button onClick={() => navigateTo('area-health')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    02 {isEn ? 'Health' : 'الصحة والرعاية'}
                  </button>
                  <button onClick={() => navigateTo('area-relief')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    03 {isEn ? 'Humanitarian Relief' : 'الإغاثة الإنسانية'}
                  </button>
                  <button onClick={() => navigateTo('area-youth')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    04 {isEn ? 'Youth & Empowerment' : 'الشباب والتمكين'}
                  </button>
                  <button onClick={() => navigateTo('area-food')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    05 {isEn ? 'Food Security' : 'الأمن الغذائي'}
                  </button>
                  <button onClick={() => navigateTo('area-water')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    06 {isEn ? 'Water & Sanitation' : 'المياه والإصحاح'}
                  </button>
                  <button onClick={() => navigateTo('area-social')} className="w-full text-start px-3 py-2 rounded-xl hover:bg-white/10 transition-colors">
                    07 {isEn ? 'Social Development' : 'التنمية المجتمعية'}
                  </button>
                </div>
              )}
            </div>

            {/* South Sudan */}
            <button
              onClick={() => navigateTo('map')}
              className={`px-2.5 py-2 rounded-xl transition-colors ${
                ['south-sudan', 'map', 'communities'].includes(currentPage)
                  ? 'bg-[#087EA4] text-white font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isEn ? 'South Sudan' : 'جنوب السودان'}
            </button>

            {/* Initiatives */}
            <button
              onClick={() => navigateTo('initiatives')}
              className={`px-2.5 py-2 rounded-xl transition-colors ${
                currentPage === 'initiatives' || currentPage === 'projects'
                  ? 'bg-[#087EA4] text-white font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isEn ? 'Initiatives' : 'المبادرات'}
            </button>

            {/* Stories of Hope */}
            <button
              onClick={() => navigateTo('hope-stories')}
              className={`px-2.5 py-2 rounded-xl transition-colors ${
                currentPage === 'hope-stories'
                  ? 'bg-[#087EA4] text-white font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isEn ? 'Stories' : 'قصص الأمل'}
            </button>

            {/* Articles */}
            <button
              onClick={() => navigateTo('articles')}
              className={`px-2.5 py-2 rounded-xl transition-colors ${
                ['articles', 'featured-article', 'news'].includes(currentPage)
                  ? 'bg-[#087EA4] text-white font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isEn ? 'Articles' : 'المقالات'}
            </button>

            {/* Partnerships */}
            <button
              onClick={() => navigateTo('partnerships')}
              className={`px-2.5 py-2 rounded-xl transition-colors ${
                currentPage === 'partnerships'
                  ? 'bg-[#087EA4] text-white font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isEn ? 'Partnerships' : 'الشراكات'}
            </button>

            {/* Donate Navigation Link */}
            <button
              onClick={() => navigateTo('donate')}
              className={`px-2.5 py-2 rounded-xl transition-colors ${
                currentPage === 'donate'
                  ? 'bg-[#159A72] text-white font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isEn ? 'Donate' : 'التبرع'}
            </button>

            {/* Contact */}
            <button
              onClick={() => navigateTo('contact')}
              className={`px-2.5 py-2 rounded-xl transition-colors ${
                currentPage === 'contact'
                  ? 'bg-[#087EA4] text-white font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {isEn ? 'Contact' : 'اتصل بنا'}
            </button>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Admin shortcut */}
            <button
              onClick={() => navigateTo('admin')}
              className={`text-xs px-2.5 py-2 rounded-xl border border-white/15 flex items-center gap-1.5 transition-all ${
                currentPage === 'admin'
                  ? 'bg-white text-[#092B3A] font-bold shadow-md'
                  : 'text-[#E8D8B8] hover:text-white hover:bg-white/10'
              }`}
              title="لوحة الإدارة"
            >
              <Lock className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">{isEn ? 'Admin' : 'الإدارة'}</span>
            </button>

            {/* HIGHLY VISIBLE "DONATE NOW" CTA */}
            <button
              onClick={() => navigateTo('donate')}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-xs md:text-sm text-slate-900 bg-gradient-to-r from-[#F2B84B] via-[#ffd27a] to-[#F2B84B] hover:brightness-105 active:scale-95 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 border border-amber-300 transition-all duration-300"
            >
              <Heart className="w-4 h-4 fill-current text-rose-600 group-hover:scale-110 transition-transform" />
              <span>{isEn ? 'DONATE NOW' : 'تبرع الآن'}</span>
            </button>
          </div>

          {/* Mobile Bar Right: Fast Donate + Menu Trigger */}
          <div className="flex items-center gap-2 2xl:hidden">
            <button
              onClick={() => navigateTo('donate')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-black text-xs text-slate-900 bg-[#F2B84B] shadow-md border border-amber-300 active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-current text-rose-600" />
              <span>{isEn ? 'Donate' : 'تبرع'}</span>
            </button>

            <a
              href={INITIATIVE_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-600 text-white shadow-md hover:bg-emerald-500 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="2xl:hidden bg-[#092B3A] border-b border-white/15 max-h-[85vh] overflow-y-auto px-4 py-6 space-y-6 shadow-2xl animate-in fade-in duration-200">
          {/* Top Quick Actions in Mobile Drawer */}
          <div className="grid grid-cols-2 gap-3 pb-4 border-b border-white/10">
            <button
              onClick={() => navigateTo('donate')}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#F2B84B] to-amber-400 text-slate-900 font-black text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <Heart className="w-4 h-4 fill-current text-rose-600" />
              <span>{isEn ? 'DONATE NOW' : 'تبرع الآن'}</span>
            </button>

            <a
              href={INITIATIVE_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-2xl bg-[#159A72] hover:bg-[#128361] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isEn ? 'WhatsApp Chat' : 'محادثة واتساب'}</span>
            </a>
          </div>

          {/* Core Pages */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-[#E8D8B8] uppercase tracking-wider block">
              {isEn ? 'Main Pages' : 'الصفحات الرئيسية'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <button
                onClick={() => navigateTo('home')}
                className={`p-3 rounded-xl text-start font-bold transition-colors ${
                  currentPage === 'home' ? 'bg-[#087EA4]' : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                🏠 {isEn ? 'Home' : 'الرئيسية'}
              </button>
              <button
                onClick={() => navigateTo('about')}
                className={`p-3 rounded-xl text-start font-bold transition-colors ${
                  currentPage === 'about' ? 'bg-[#087EA4]' : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                ℹ️ {isEn ? 'About BGI' : 'عن المبادرة'}
              </button>
              <button
                onClick={() => navigateTo('vision')}
                className={`p-3 rounded-xl text-start font-bold transition-colors ${
                  currentPage === 'vision' ? 'bg-[#087EA4]' : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                🎯 {isEn ? 'Our Vision' : 'رؤيتنا'}
              </button>
              <button
                onClick={() => navigateTo('story')}
                className={`p-3 rounded-xl text-start font-bold transition-colors ${
                  currentPage === 'story' ? 'bg-[#087EA4]' : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                ✨ {isEn ? 'Our Story' : 'قصة الفكرة'}
              </button>
              <button
                onClick={() => navigateTo('philosophy')}
                className={`p-3 rounded-xl text-start font-bold transition-colors ${
                  currentPage === 'philosophy' || currentPage === 'bridge-model' ? 'bg-[#087EA4]' : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                🌉 {isEn ? 'The Bridge Model' : 'نموذج الجسر'}
              </button>
              <button
                onClick={() => navigateTo('team')}
                className={`p-3 rounded-xl text-start font-bold transition-colors ${
                  currentPage === 'team' ? 'bg-[#087EA4]' : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                👥 {isEn ? 'Founding Team' : 'فريق الفكرة'}
              </button>
            </div>
          </div>

          {/* 7 Programs */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-[#E8D8B8] uppercase tracking-wider block">
              {isEn ? '7 Focus Programs' : 'برامج العمل السبعة'}
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button onClick={() => navigateTo('area-education')} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-start">
                📚 {isEn ? 'Education' : 'التعليم والمعرفة'}
              </button>
              <button onClick={() => navigateTo('area-health')} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-start">
                🩺 {isEn ? 'Health' : 'الصحة والرعاية'}
              </button>
              <button onClick={() => navigateTo('area-relief')} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-start">
                🤝 {isEn ? 'Relief' : 'الإغاثة الإنسانية'}
              </button>
              <button onClick={() => navigateTo('area-youth')} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-start">
                ⚡ {isEn ? 'Youth' : 'الشباب والتمكين'}
              </button>
              <button onClick={() => navigateTo('area-food')} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-start">
                🌾 {isEn ? 'Food Security' : 'الأمن الغذائي'}
              </button>
              <button onClick={() => navigateTo('area-water')} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-start">
                💧 {isEn ? 'Water & Sanitation' : 'المياه والإصحاح'}
              </button>
              <button onClick={() => navigateTo('area-social')} className="col-span-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-start">
                🌱 {isEn ? 'Social Development & Cohesion' : 'التنمية والتماسك المجتمعي'}
              </button>
            </div>
          </div>

          {/* South Sudan, Initiatives, Articles */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-[#E8D8B8] uppercase tracking-wider block">
              {isEn ? 'South Sudan & Content' : 'جنوب السودان والمحتوى'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <button onClick={() => navigateTo('map')} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-start font-bold">
                🗺️ {isEn ? '10 States Map' : 'خريطة الولايات العشر'}
              </button>
              <button onClick={() => navigateTo('initiatives')} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-start font-bold">
                🚀 {isEn ? 'Initiatives' : 'المبادرات المقترحة'}
              </button>
              <button onClick={() => navigateTo('hope-stories')} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-start font-bold">
                ☀️ {isEn ? 'Stories of Hope' : 'قصص الأمل'}
              </button>
              <button onClick={() => navigateTo('featured-article')} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-start font-bold">
                ✍️ {isEn ? 'Featured Article' : 'المقال الرئيسي'}
              </button>
              <button onClick={() => navigateTo('articles')} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-start font-bold">
                📰 {isEn ? 'All Articles' : 'كافة المقالات'}
              </button>
              <button onClick={() => navigateTo('partnerships')} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-start font-bold">
                🤝 {isEn ? 'Partnerships' : 'بناء الشراكات'}
              </button>
            </div>
          </div>

          {/* Involvement & Legal */}
          <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2 text-xs">
            <button onClick={() => navigateTo('volunteers')} className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300">
              {isEn ? 'Volunteer' : 'التطوع'}
            </button>
            <button onClick={() => navigateTo('transparency')} className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300">
              {isEn ? 'Transparency' : 'الشفافية'}
            </button>
            <button onClick={() => navigateTo('faq')} className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300">
              {isEn ? 'FAQ' : 'الأسئلة الشائعة'}
            </button>
            <button onClick={() => navigateTo('contact')} className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300">
              {isEn ? 'Contact' : 'اتصل بنا'}
            </button>
            <button onClick={() => navigateTo('admin')} className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#E8D8B8] font-bold">
              🔒 {isEn ? 'Admin Dashboard' : 'لوحة الإدارة'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
