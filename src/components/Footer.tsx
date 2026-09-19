import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageId, Language } from '../types';
import { INITIATIVE_INFO } from '../data/contentData';
import {
  ShieldCheck,
  Heart,
  Building2,
  Copy,
  Check,
  MessageCircle,
  ExternalLink,
  ArrowUp,
  Sparkles,
  Lock
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const isEn = lang === 'en';
  const [copied, setCopied] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(INITIATIVE_INFO.donation.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051A24] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Cards: Status + Donation Info + WhatsApp */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* 1. Legal Status & Mission */}
          <div className="bg-[#092B3A] rounded-2xl p-6 border border-[#087EA4]/30 space-y-3 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-bold text-[#F2B84B] uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-[#159A72] inline-block" />
              <span>{isEn ? INITIATIVE_INFO.legalStatusBadgeEn : INITIATIVE_INFO.legalStatusBadgeAr}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isEn ? INITIATIVE_INFO.legalNoticeEn : INITIATIVE_INFO.legalNoticeAr}
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('transparency')}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-bold underline underline-offset-4"
              >
                {isEn ? 'Transparency & Ethics Statement →' : 'ميثاق الشفافية والمصداقية ←'}
              </button>
            </div>
          </div>

          {/* 2. Official Bank of Khartoum Donation */}
          <div className="bg-gradient-to-br from-[#092B3A] to-[#0D384C] rounded-2xl p-6 border border-amber-500/30 space-y-3 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#F2B84B]" />
                <span>{isEn ? 'Official Donation Account' : 'حساب التبرع المعتمد'}</span>
              </div>
              <button
                onClick={() => onNavigate('donate')}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-amber-400 text-slate-900 font-black hover:bg-amber-300 transition-colors"
              >
                {isEn ? 'Donate' : 'تبرع'}
              </button>
            </div>

            <div>
              <p className="text-xs text-slate-300">
                {isEn ? INITIATIVE_INFO.donation.bankNameEn : INITIATIVE_INFO.donation.bankNameAr}
              </p>
              <div className="flex items-center justify-between gap-2 mt-1">
                <span className="font-mono text-xl font-black text-[#F2B84B] tracking-wider">
                  {INITIATIVE_INFO.donation.accountNumber}
                </span>
                <button
                  onClick={handleCopyAccount}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold transition-all active:scale-95"
                  title="نسخ رقم الحساب"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 text-[10px]">
                        {isEn ? 'Copied' : 'تم النسخ'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Copy' : 'نسخ'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="text-[11px] text-amber-200/80 leading-tight">
              {isEn ? INITIATIVE_INFO.donation.verifyNoticeEn : INITIATIVE_INFO.donation.verifyNoticeAr}
            </p>
          </div>

          {/* 3. WhatsApp Direct Communication */}
          <div className="bg-[#092B3A] rounded-2xl p-6 border border-[#159A72]/40 space-y-3 shadow-lg">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider">
              <MessageCircle className="w-4 h-4 text-[#159A72]" />
              <span>{isEn ? 'Direct WhatsApp Contact' : 'تواصل مباشر عبر واتساب'}</span>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-slate-300">
                {isEn ? 'Founding Team Inquiries' : 'استفسارات المبادرة والشراكات والتطوع'}
              </p>
              <p className="font-mono text-base font-bold text-white dir-ltr text-start">
                {INITIATIVE_INFO.whatsapp.display}
              </p>
            </div>

            <a
              href={INITIATIVE_INFO.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#159A72] hover:bg-[#128361] text-white text-xs font-bold transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isEn ? 'Open WhatsApp' : 'محادثة عبر واتساب'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-75" />
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800 text-xs">
          {/* Brand Column */}
          <div className="col-span-2 space-y-3">
            <Logo variant="white" size="md" isEn={isEn} />
            <p className="text-xs font-bold text-[#F2B84B] leading-relaxed pt-1">
              {isEn ? INITIATIVE_INFO.taglineEn : INITIATIVE_INFO.taglineAr}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {isEn ? INITIATIVE_INFO.heroDescriptionEn : INITIATIVE_INFO.heroDescriptionAr}
            </p>
          </div>

          {/* About Links */}
          <div className="space-y-2.5">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs text-[#F2B84B]">
              {isEn ? 'About BGI' : 'عن المبادرة'}
            </h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  {isEn ? 'About Us' : 'عن المبادرة'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('story')} className="hover:text-white transition-colors">
                  {isEn ? 'Our Story' : 'قصة الفكرة'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vision')} className="hover:text-white transition-colors">
                  {isEn ? 'Our Vision' : 'رؤيتنا'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('mission')} className="hover:text-white transition-colors">
                  {isEn ? 'Our Mission' : 'رسالتنا'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('philosophy')} className="hover:text-white transition-colors">
                  {isEn ? 'The Bridge Model' : 'نموذج الجسر'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('team')} className="hover:text-white transition-colors">
                  {isEn ? 'Founding Team' : 'فريق الفكرة'}
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-2.5">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs text-[#159A72]">
              {isEn ? 'Programs' : 'مجالات العمل'}
            </h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('area-education')} className="hover:text-white transition-colors">
                  {isEn ? 'Education' : 'التعليم والمعرفة'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('area-health')} className="hover:text-white transition-colors">
                  {isEn ? 'Health' : 'الصحة والرعاية'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('area-relief')} className="hover:text-white transition-colors">
                  {isEn ? 'Humanitarian Relief' : 'الإغاثة الإنسانية'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('area-youth')} className="hover:text-white transition-colors">
                  {isEn ? 'Youth Empowerment' : 'تمكين الشباب'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('area-food')} className="hover:text-white transition-colors">
                  {isEn ? 'Food Security' : 'الأمن الغذائي'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('area-water')} className="hover:text-white transition-colors">
                  {isEn ? 'Water & Sanitation' : 'المياه والإصحاح'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('area-social')} className="hover:text-white transition-colors">
                  {isEn ? 'Social Cohesion' : 'التنمية المجتمعية'}
                </button>
              </li>
            </ul>
          </div>

          {/* South Sudan & Content */}
          <div className="space-y-2.5">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs text-[#087EA4]">
              {isEn ? 'South Sudan' : 'جنوب السودان'}
            </h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('map')} className="hover:text-white transition-colors">
                  {isEn ? '10 States Map' : 'خريطة الولايات'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('communities')} className="hover:text-white transition-colors">
                  {isEn ? 'Communities' : 'المجتمعات المحلية'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('initiatives')} className="hover:text-white transition-colors">
                  {isEn ? 'Proposed Initiatives' : 'المبادرات المقترحة'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('featured-article')} className="hover:text-white transition-colors">
                  {isEn ? 'Featured Article' : 'المقال الرئيسي'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors">
                  {isEn ? 'Articles' : 'المقالات'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hope-stories')} className="hover:text-white transition-colors">
                  {isEn ? 'Stories of Hope' : 'قصص الأمل'}
                </button>
              </li>
            </ul>
          </div>

          {/* Involvement, Legal & Policies */}
          <div className="space-y-2.5">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs text-[#E8D8B8]">
              {isEn ? 'Involvement & Policies' : 'المشاركة والسياسات'}
            </h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('donate')} className="text-[#F2B84B] font-bold hover:underline">
                  {isEn ? 'Donate' : 'التبرع المالي'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('volunteers')} className="hover:text-white transition-colors">
                  {isEn ? 'Volunteer' : 'التطوع'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('partnerships')} className="hover:text-white transition-colors">
                  {isEn ? 'Partnership' : 'الشراكات'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transparency')} className="hover:text-white transition-colors">
                  {isEn ? 'Transparency' : 'الشفافية'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  {isEn ? 'Contact' : 'اتصل بنا'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">
                  {isEn ? 'Privacy' : 'سياسة الخصوصية'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
                  {isEn ? 'Terms' : 'شروط الاستخدام'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('safeguarding')} className="hover:text-white transition-colors">
                  {isEn ? 'Safeguarding' : 'صون الكرامة'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admin')} className="text-slate-400 hover:text-white flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>{isEn ? 'Admin' : 'لوحة الإدارة'}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Final Phrase & Signature */}
        <div className="py-8 border-b border-slate-800/80 text-center">
          <p className="text-base sm:text-lg font-bold text-[#E8D8B8] tracking-wide">
            {isEn
              ? '“Goodness begins with an idea... and an impact we aspire to endure.”'
              : '«خيرٌ يبدأ بفكرة… وأثرٌ نطمح أن يبقى.»'}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>
              &copy; {new Date().getFullYear()} {isEn ? 'Bridges of Goodness Initiative (BGI).' : 'مبادرة جسور الخير (BGI).'}
            </span>
            <span className="mx-2">|</span>
            <span className="italic">
              {isEn ? INITIATIVE_INFO.disclaimerIllustrationEn : INITIATIVE_INFO.disclaimerIllustrationAr}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors p-1"
          >
            <span>{isEn ? 'Back to top' : 'العودة للأعلى'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
