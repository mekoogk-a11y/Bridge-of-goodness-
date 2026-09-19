import React, { useState } from 'react';
import { PageId, Language } from '../types';
import {
  INITIATIVE_INFO,
  ACTION_AREAS,
  PROPOSED_PROJECTS,
  FEATURED_MASTER_ARTICLE,
  FOUNDERS,
  southSudanHeroImg
} from '../data/contentData';
import { SouthSudanMap } from '../components/SouthSudanMap';
import { BridgePhilosophy } from '../components/BridgePhilosophy';
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Compass,
  HeartHandshake,
  BookOpen,
  GraduationCap,
  HeartPulse,
  ShieldAlert,
  Sprout,
  Droplets,
  Users,
  FileText,
  Heart,
  Building2,
  Copy,
  Check,
  AlertCircle
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, lang }) => {
  const isEn = lang === 'en';
  const [copied, setCopied] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(INITIATIVE_INFO.donation.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Sprout': return <Sprout className="w-6 h-6" />;
      case 'Droplets': return <Droplets className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION: Cinematic, Authentic, Dignified */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden bg-[#092B3A]">
        {/* Background Image of South Sudan Landscape */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url(${southSudanHeroImg})`,
          }}
        />

        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#092B3A] via-[#092B3A]/85 to-[#092B3A]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#092B3A]/90 via-transparent to-[#092B3A]/80" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#159A72]/25 border border-[#159A72]/60 text-xs sm:text-sm font-bold text-[#E6F7F2] mb-6 backdrop-blur-md shadow-md animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#F2B84B] animate-ping" />
            <span>{isEn ? INITIATIVE_INFO.legalStatusBadgeEn : INITIATIVE_INFO.legalStatusBadgeAr}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.2] drop-shadow-md">
            {isEn ? INITIATIVE_INFO.taglineEn : INITIATIVE_INFO.taglineAr}
          </h1>

          {/* Secondary Slogan Line */}
          <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-[#F2B84B] tracking-wide max-w-3xl mx-auto">
            {isEn ? INITIATIVE_INFO.taglineAr : INITIATIVE_INFO.taglineEn}
          </p>

          {/* Supporting Text */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-[#F8FAFC]/90 max-w-3xl mx-auto leading-relaxed font-normal">
            {isEn ? INITIATIVE_INFO.heroDescriptionEn : INITIATIVE_INFO.heroDescriptionAr}
          </p>

          {/* Hero 3 Action Buttons: اكتشف المبادرة | تبرع الآن | كن شريكاً */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* 1. اكتشف المبادرة */}
            <button
              onClick={() => onNavigate('about')}
              className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#087EA4] to-[#159A72] hover:brightness-110 active:scale-95 font-bold text-white shadow-xl transition-all flex items-center gap-2"
            >
              <span>{isEn ? 'Explore BGI' : 'اكتشف المبادرة'}</span>
              {isEn ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            </button>

            {/* 2. تبرع الآن */}
            <button
              onClick={() => onNavigate('donate')}
              className="group px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#F2B84B] via-amber-300 to-[#F2B84B] hover:brightness-105 active:scale-95 font-black text-slate-950 shadow-xl shadow-amber-500/20 border border-amber-300 transition-all flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current text-rose-600 group-hover:scale-110 transition-transform" />
              <span>{isEn ? 'DONATE NOW' : 'تبرع الآن'}</span>
            </button>

            {/* 3. كن شريكاً */}
            <button
              onClick={() => onNavigate('partnerships')}
              className="px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 font-bold text-white border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{isEn ? 'Partner with Us' : 'كن شريكاً'}</span>
            </button>
          </div>

          {/* Authentic Imagery Note */}
          <div className="mt-12 text-[11px] text-white/50 tracking-wider">
            {isEn ? INITIATIVE_INFO.disclaimerIllustrationEn : INITIATIVE_INFO.disclaimerIllustrationAr}
          </div>
        </div>
      </section>

      {/* 2. MISSION SECTION: High Contrast */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-[#092B3A] to-[#104156] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#087EA4]/40 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-[#F2B84B]/20 border border-[#F2B84B]/40 flex items-center justify-center text-[#F2B84B] mx-auto mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-[#F2B84B] uppercase tracking-widest block mb-2">
            {isEn ? 'Our Core Mission' : 'رسالة مبادرة جسور الخير'}
          </span>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed text-white">
            «{isEn ? INITIATIVE_INFO.missionEn : INITIATIVE_INFO.missionAr}»
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#E8D8B8]">
            <span className="w-8 h-[1px] bg-[#E8D8B8]/40" />
            <span>{isEn ? 'A Foundational Aspiration' : 'طموح تأسيسي لخدمة الإنسان'}</span>
            <span className="w-8 h-[1px] bg-[#E8D8B8]/40" />
          </div>
        </div>
      </section>

      {/* 3. MAJOR DONATION SECTION: ❤️ ساهم في صناعة الخير */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#092B3A] via-[#0D384C] to-[#092B3A] rounded-3xl p-8 md:p-12 border border-amber-400/30 text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left/Intro Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
                <span>{isEn ? 'Contribute to Goodness' : '❤️ ساهم في صناعة الخير'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                {isEn ? 'Contribute to Goodness' : 'ساهم في صناعة الخير وبناء الجسور'}
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                {isEn ? INITIATIVE_INFO.donation.descriptionEn : INITIATIVE_INFO.donation.descriptionAr}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('donate')}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#F2B84B] to-amber-400 hover:brightness-110 active:scale-95 text-slate-900 font-black text-xs sm:text-sm shadow-lg flex items-center gap-2 transition-all"
                >
                  <Heart className="w-4 h-4 fill-current text-rose-600" />
                  <span>{isEn ? 'Go to Donation Center' : 'صفحة التبرع الكاملة وإشعار التحويل'}</span>
                  {isEn ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => onNavigate('transparency')}
                  className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/10 transition-colors"
                >
                  {isEn ? 'Transparency & Safeguarding' : 'ميثاق الأمانة والشفافية'}
                </button>
              </div>
            </div>

            {/* Right/Card Column: Bank of Khartoum details */}
            <div className="lg:col-span-5 bg-[#051A24]/90 rounded-2xl p-6 md:p-8 border border-amber-400/40 shadow-2xl space-y-5 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Building2 className="w-4 h-4 text-[#F2B84B]" />
                  <span>{isEn ? 'Current Donation Method' : 'طريقة التحويل المعتمدة'}</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold border border-emerald-500/30">
                  {isEn ? 'Direct Bank Transfer' : 'تحويل بنكي رسمي'}
                </span>
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  {isEn ? 'Bank Name' : 'اسم البنك'}
                </p>
                <p className="text-lg font-bold text-white">
                  {isEn ? INITIATIVE_INFO.donation.bankNameEn : INITIATIVE_INFO.donation.bankNameAr}
                </p>
              </div>

              {/* Large Account Number Card */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-[#F2B84B] font-bold block mb-1">
                    {isEn ? 'Account Number' : 'رقم الحساب'}
                  </span>
                  <span className="font-mono text-2xl sm:text-3xl font-black text-[#F2B84B] tracking-wider">
                    {INITIATIVE_INFO.donation.accountNumber}
                  </span>
                </div>

                <button
                  onClick={handleCopyAccount}
                  className="px-4 py-2.5 rounded-xl bg-[#F2B84B] hover:bg-amber-300 text-slate-900 font-bold text-xs transition-all flex items-center gap-1.5 shrink-0 shadow-md active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-800 stroke-[3]" />
                      <span className="text-emerald-950 font-black">{isEn ? 'Copied!' : 'تم النسخ'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{isEn ? 'Copy' : 'نسخ رقم الحساب'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Success Notification Alert */}
              {copied && (
                <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs font-bold text-center animate-in fade-in">
                  ✓ {isEn ? 'Account number copied successfully to clipboard!' : 'تم نسخ رقم الحساب بنجاح'}
                </div>
              )}

              {/* Verification Mandatory Notice */}
              <div className="flex items-start gap-2 text-xs text-amber-200/90 bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {isEn ? INITIATIVE_INFO.donation.verifyNoticeEn : INITIATIVE_INFO.donation.verifyNoticeAr}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE BRIDGE MODEL: From Need to Opportunity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BridgePhilosophy isEn={isEn} />
      </section>

      {/* 5. 7 FUTURE ACTION AREAS CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087EA4]/10 text-[#087EA4] text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>{isEn ? 'Future Action Spheres' : 'مجالات العمل المستقبلية المقترحة'}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#092B3A]">
              {isEn ? 'Seven Horizons for Human Development' : '7 مجالات عمل لبناء الإنسان والفرصة'}
            </h2>
            <p className="text-sm md:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              {isEn
                ? 'Comprehensive conceptual intervention areas designed to accompany the individual from relief into self-sustaining empowerment.'
                : 'رؤى وتصورات لتدخلات مستقبلية متكاملة ترافق الإنسان من مرحلة العوز إلى الإنتاج والاستقرار.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('area-education')}
            className="text-xs md:text-sm font-bold text-[#087EA4] hover:text-[#092B3A] flex items-center gap-1 shrink-0"
          >
            <span>{isEn ? 'View all areas' : 'استعراض كل المجالات'}</span>
            {isEn ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* 7 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTION_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={area.imageUrl}
                  alt={isEn ? area.titleEn : area.titleAr}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Area Number Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-xl text-xs font-black text-[#092B3A] shadow">
                  {area.number}
                </div>

                {/* Status Indicator */}
                <div className="absolute top-4 right-4 bg-[#092B3A]/80 backdrop-blur-sm px-2.5 py-1 rounded-xl text-[10px] font-bold text-[#F2B84B] border border-white/20">
                  {isEn ? 'Proposed Horizon' : 'أفق مقترح'}
                </div>

                {/* Icon Circle */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-white text-[#087EA4] flex items-center justify-center shadow-lg border border-slate-100">
                  {getAreaIcon(area.icon)}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#092B3A] mb-2 group-hover:text-[#087EA4] transition-colors">
                    {isEn ? area.titleEn : area.titleAr}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {isEn ? area.shortDescEn : area.shortDescAr}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {isEn ? 'Future Framework' : 'إطار تنموي مستقبلي'}
                  </span>
                  <button
                    onClick={() => onNavigate(area.id as PageId)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#087EA4] hover:text-[#092B3A] transition-colors"
                  >
                    <span>{isEn ? 'Explore Area' : 'اكتشف المجال'}</span>
                    {isEn ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SOUTH SUDAN INTERACTIVE MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SouthSudanMap isEn={isEn} />
      </section>

      {/* 7. FEATURED MASTER ARTICLE EDITORIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#092B3A] via-[#0D384D] to-[#051A24] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-[#087EA4]/40 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left/Main Column: Article Intro */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F2B84B] text-[#092B3A]">
                  {isEn ? 'Featured Master Editorial' : 'مقال الرؤية التحريرية'}
                </span>
                <span className="text-xs text-[#E8D8B8]">
                  {isEn ? 'By: Kamal Jaafar Zakaria' : 'بقلم: كمال جعفر زكريا'}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                {isEn ? FEATURED_MASTER_ARTICLE.titleEn : FEATURED_MASTER_ARTICLE.titleAr}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isEn ? FEATURED_MASTER_ARTICLE.excerptEn : FEATURED_MASTER_ARTICLE.excerptAr}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('featured-article')}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#087EA4] to-[#159A72] hover:brightness-110 active:scale-95 font-bold text-white shadow-lg transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>{isEn ? 'Read Full Editorial (8 min)' : 'قراءة المقال الكامل (8 دقائق)'}</span>
                </button>

                <button
                  onClick={() => onNavigate('articles')}
                  className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-semibold text-white border border-white/10 transition-colors"
                >
                  {isEn ? 'Browse All Articles' : 'استعراض كافة المقالات'}
                </button>
              </div>

              <p className="text-[11px] text-[#E8D8B8]/70 italic pt-2">
                {isEn
                  ? '“This editorial reflects the intellectual worldview of the initiative and does not constitute a statistical census.”'
                  : '«هذا المقال يعبر عن رؤية تحريرية ضمن التصور الفكري لمبادرة جسور الخير، وليس تقريراً إحصائياً رسمياً.»'}
              </p>
            </div>

            {/* Right Column: Author Card & Quote */}
            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#087EA4] text-white flex items-center justify-center font-bold text-lg border border-white/20">
                  KZ
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">
                    {isEn ? 'Kamal Jaafar Zakaria' : 'كمال جعفر زكريا'}
                  </h4>
                  <p className="text-xs text-[#E8D8B8]">
                    {isEn ? 'Development Writer & Vision Co-Author' : 'كاتب وباحث تنموي - صاحب الفكرة'}
                  </p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-300 italic border-s-2 border-[#F2B84B] ps-3 py-1">
                {isEn
                  ? '“The true wealth of South Sudan is neither in oil nor minerals, but in the dignity and capacity of the human being.”'
                  : '«إن الثروة الحقيقية لأي أمة ليست في نفطها أو معادنها أو اتساع رقعتها الزراعية، بل هي أولاً وأخيراً: الإنسان.»'}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROPOSED FUTURE INITIATIVES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#159A72]/10 text-[#159A72] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isEn ? 'Conceptual Projects' : 'المشاريع والبرامج المقترحة'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#092B3A]">
            {isEn ? 'Future Bridge Programs (In Development)' : 'برامج «جسور» المقترحة (قيد الدراسة)'}
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-2 leading-relaxed">
            {isEn
              ? 'These represent future conceptual initiatives currently undergoing feasibility review. None are claimed as executed projects.'
              : 'نماذج لمشاريع تنموية مقترحة قيد الدراسة والتخطيط المستقبلي، ولا تُعرض كمشاريع منفذة.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPOSED_PROJECTS.slice(0, 6).map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                    {proj.code}
                  </span>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                    {isEn ? proj.badgeEn : proj.badgeAr}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#092B3A] mb-2">
                  {isEn ? proj.titleEn : proj.titleAr}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {isEn ? proj.summaryEn : proj.summaryAr}
                </p>

                <div className="bg-[#F8FAFC] rounded-xl p-3 border border-slate-100 text-[11px] text-slate-600 space-y-1 mb-4">
                  <div>
                    <strong className="text-[#092B3A]">{isEn ? 'Target Focus:' : 'الفئة المستهدفة:'}</strong>{' '}
                    {isEn ? proj.targetFocusEn : proj.targetFocusAr}
                  </div>
                  <div>
                    <strong className="text-[#092B3A]">{isEn ? 'Proposed Scope:' : 'النطاق المقترح:'}</strong>{' '}
                    {(isEn ? proj.proposedLocationsEn : proj.proposedLocationsAr).join('، ')}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 italic">
                  {isEn ? 'Under Conceptual Review' : 'قيد الدراسة والتطوير'}
                </span>
                <button
                  onClick={() => onNavigate('initiatives')}
                  className="text-xs font-bold text-[#087EA4] hover:text-[#092B3A] flex items-center gap-1"
                >
                  <span>{isEn ? 'Details' : 'التفاصيل'}</span>
                  {isEn ? <ArrowRight className="w-3 h-3" /> : <ArrowLeft className="w-3 h-3" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. STORY & FOUNDING TEAM CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-[#087EA4] uppercase tracking-wider block mb-2">
              {isEn ? 'Genesis of the Concept' : 'قصة الفكرة وأصحاب المبادرة'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#092B3A]">
              {isEn ? 'Originating from Grassroots Community Faith' : 'من رحم الحاجة… وإيمان بالإنسان'}
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">
              «من رحم الحاجة، ومن واقع المجتمعات التي تواجه الأزمات، ومن إيمان بأن الإنسان لا يحتاج إلى من يعطيه فقط، وإنما يحتاج إلى من يقف بجانبه، ويفتح أمامه باباً، ويمنحه فرصة، ويشاركه في بناء مستقبله؛ جاءت فكرة مبادرة جسور الخير.»
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {FOUNDERS.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#092B3A] text-[#F2B84B] font-bold text-sm flex items-center justify-center mb-3">
                    {f.avatarText}
                  </div>
                  <h4 className="font-bold text-base text-[#092B3A]">
                    {isEn ? f.nameEn : f.nameAr}
                  </h4>
                  <span className="text-xs font-semibold text-[#087EA4] block mb-2">
                    {isEn ? f.roleEn : f.roleAr}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {isEn ? f.bioEn : f.bioAr}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs">
            <span className="text-amber-800 font-medium">
              ⚠️ {isEn ? 'The idea is in its initial founding phase and is not yet a registered NGO.' : 'الفكرة في مرحلة التأسيس والتطوير، ولم تتحول بعد إلى منظمة أو مؤسسة مسجلة.'}
            </span>
            <button
              onClick={() => onNavigate('team')}
              className="font-bold text-[#087EA4] hover:text-[#092B3A] flex items-center gap-1"
            >
              <span>{isEn ? 'Meet the full team' : 'التعرف على الفريق التأسيسي'}</span>
              {isEn ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </section>

      {/* 10. PARTNERSHIP CALL TO ACTION: Building Bridges Together */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#092B3A] rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2B84B]">
              {isEn ? 'Future Collaborations' : 'الشراكات المستقبلية'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              {isEn ? 'Building Bridges… Together' : '«نبني الجسور… معاً»'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isEn
                ? 'We invite academic institutions, humanitarian experts, local communities, youth collectives, and development partners to join our conceptual advisory network.'
                : 'نوجه دعوتنا للمؤسسات التنموية والأكاديمية والقطاع الخاص والخبراء والمتطوعين للمساهمة في إنضاج الرؤية ووضع اللبنات التأسيسية المتينة.'}
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('partnerships')}
                className="px-8 py-3.5 rounded-2xl bg-[#F2B84B] hover:bg-[#F2B84B]/90 text-[#092B3A] font-extrabold text-sm shadow-xl transition-all"
              >
                {isEn ? 'Explore Partnership Horizons' : 'استكشف فرص الشراكة'}
              </button>

              <button
                onClick={() => onNavigate('volunteers')}
                className="px-8 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all"
              >
                {isEn ? 'Register Volunteer Interest' : 'كن جزءاً من الجسر (سجل اهتمامك)'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
