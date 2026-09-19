import React from 'react';
import { Logo } from './Logo';
import { PageId, Language } from '../types';
import { INITIATIVE_INFO } from '../data/contentData';
import { ShieldCheck, Heart, MapPin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const isEn = lang === 'en';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051A24] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Legal Transparency Box */}
        <div className="bg-[#092B3A] rounded-2xl p-6 border border-[#087EA4]/30 mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#159A72]/20 flex items-center justify-center text-[#159A72] shrink-0 border border-[#159A72]/30">
                <ShieldCheck className="w-5 h-5 text-[#4ade80]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#F2B84B] uppercase tracking-wider block">
                  {isEn ? INITIATIVE_INFO.legalStatusBadgeEn : INITIATIVE_INFO.legalStatusBadgeAr}
                </span>
                <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-4xl leading-relaxed">
                  {isEn ? INITIATIVE_INFO.legalNoticeEn : INITIATIVE_INFO.legalNoticeAr}
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('transparency')}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white whitespace-nowrap transition-colors shrink-0"
            >
              {isEn ? 'Transparency Statement' : 'ميثاق الشفافية'}
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns (Representing the 30+ pages) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800 text-xs">
          {/* Column 1: Brand & Identity */}
          <div className="col-span-2">
            <Logo variant="white" size="md" isEn={isEn} />
            <p className="text-xs text-slate-400 mt-4 leading-relaxed max-w-sm">
              {isEn ? INITIATIVE_INFO.taglineEn : INITIATIVE_INFO.taglineAr}
            </p>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-sm">
              {isEn ? INITIATIVE_INFO.heroDescriptionEn : INITIATIVE_INFO.heroDescriptionAr}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                onClick={() => onNavigate('concept-doc')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10 transition-colors"
              >
                <span>{isEn ? 'Concept Paper' : 'وثيقة التصور'}</span>
              </button>
            </div>
          </div>

          {/* Column 2: About & Philosophy */}
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-xs mb-3 text-[#F2B84B]">
              {isEn ? 'About BGI' : 'عن المبادرة'}
            </h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  {isEn ? 'About the Initiative' : 'من نحن'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('story')} className="hover:text-white transition-colors">
                  {isEn ? 'Story of the Idea' : 'قصة الفكرة'}
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
                  {isEn ? 'The Bridge Model' : 'فلسفة الجسر'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('team')} className="hover:text-white transition-colors">
                  {isEn ? 'Founding Team' : 'فريق التأسيس'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transparency')} className="hover:text-white transition-colors">
                  {isEn ? 'Transparency' : 'الشفافية'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: 7 Action Areas */}
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-xs mb-3 text-[#159A72]">
              {isEn ? 'Action Areas' : 'مجالات العمل'}
            </h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('area-education')} className="hover:text-white transition-colors">
                  {isEn ? 'Education & Knowledge' : 'التعليم والمعرفة'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('area-health')} className="hover:text-white transition-colors">
                  {isEn ? 'Health & Primary Care' : 'الصحة'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('area-relief')} className="hover:text-white transition-colors">
                  {isEn ? 'Humanitarian Relief' : 'الإغاثة الإنسانية'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('area-youth')} className="hover:text-white transition-colors">
                  {isEn ? 'Youth & Empowerment' : 'الشباب والتمكين'}
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
                  {isEn ? 'Social Cohesion' : 'التنمية الاجتماعية'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: South Sudan & Field */}
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-xs mb-3 text-[#087EA4]">
              {isEn ? 'South Sudan' : 'جنوب السودان'}
            </h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('map')} className="hover:text-white transition-colors">
                  {isEn ? '10 States Interactive Map' : 'خريطة الولايات الـ 10'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('south-sudan')} className="hover:text-white transition-colors">
                  {isEn ? 'Country Overview' : 'نظرة عامة على الدولة'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('communities')} className="hover:text-white transition-colors">
                  {isEn ? 'Local Communities' : 'المجتمعات المحلية'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('initiatives')} className="hover:text-white transition-colors">
                  {isEn ? 'Proposed Initiatives' : 'المشاريع المقترحة'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('featured-article')} className="hover:text-white transition-colors">
                  {isEn ? 'Master Editorial' : 'المقال الرئيسي (كمال جعفر)'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('articles')} className="hover:text-white transition-colors">
                  {isEn ? 'Articles & Updates' : 'المقالات والأخبار'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Partnerships, Safeguarding & Legal */}
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider text-xs mb-3 text-[#E8D8B8]">
              {isEn ? 'Get Involved & Policies' : 'المشاركة والسياسات'}
            </h5>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('partnerships')} className="hover:text-white transition-colors">
                  {isEn ? 'Partnerships' : 'الشراكات'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('volunteers')} className="hover:text-white transition-colors">
                  {isEn ? 'Volunteer Interest' : 'المتطوعون'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('advisors')} className="hover:text-white transition-colors">
                  {isEn ? 'Advisors & Experts' : 'الخبراء والمستشارون'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('safeguarding')} className="hover:text-white transition-colors">
                  {isEn ? 'Safeguarding Policy' : 'حماية المستفيدين'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">
                  {isEn ? 'Privacy Policy' : 'الخصوصية'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
                  {isEn ? 'Terms of Use' : 'شروط الاستخدام'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  {isEn ? 'Contact Us' : 'تواصل معنا'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admin')} className="text-slate-400 hover:text-white transition-colors">
                  {isEn ? 'Admin Portal' : 'لوحة الإدارة (CMS)'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
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
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>{isEn ? 'Back to top' : 'العودة للأعلى'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
