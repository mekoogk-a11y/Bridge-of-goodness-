import React from 'react';
import { PageId, Language } from '../types';
import { SouthSudanMap } from '../components/SouthSudanMap';
import { SOUTH_SUDAN_OVERVIEW } from '../data/contentData';
import { Compass, Users, MapPin, ShieldCheck, Sun, Droplets, Mountain, Sparkles } from 'lucide-react';

interface SouthSudanViewProps {
  pageId: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const SouthSudanView: React.FC<SouthSudanViewProps> = ({ pageId, onNavigate, lang }) => {
  const isEn = lang === 'en';

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Header with Breadcrumb */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
          <button onClick={() => onNavigate('home')} className="hover:text-[#087EA4]">
            {isEn ? 'Home' : 'الرئيسية'}
          </button>
          <span>/</span>
          <span className="text-[#087EA4]">
            {pageId === 'map' && (isEn ? '10 States Interactive Map' : 'خريطة الولايات الـ 10')}
            {pageId === 'south-sudan' && (isEn ? 'Country Overview' : 'جنوب السودان: نظرة عامة')}
            {pageId === 'communities' && (isEn ? 'Local Communities' : 'المجتمعات المحلية')}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#092B3A] tracking-tight">
              {isEn ? 'South Sudan: Geography & Humanity' : 'جنوب السودان: الأرض، الإنسان، والمستقبل'}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
              {isEn
                ? 'Understanding the field realities across the 10 states, appreciating community diversity, and identifying horizons for sustainable human empowerment.'
                : 'استكشاف السياق الجغرافي والسكاني للولايات العشر، والتعرف على التنوع المجتمعي والفرص التنموية الواعدة للإنسان والأرض.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('map')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                pageId === 'map'
                  ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              🗺️ {isEn ? 'Interactive Map' : 'الخريطة التفاعلية'}
            </button>
            <button
              onClick={() => onNavigate('south-sudan')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                pageId === 'south-sudan'
                  ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              📊 {isEn ? 'Country Overview' : 'نظرة عامة'}
            </button>
            <button
              onClick={() => onNavigate('communities')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                pageId === 'communities'
                  ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              👥 {isEn ? 'Communities' : 'المجتمعات المحلية'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Interactive Map View */}
      {(pageId === 'map' || pageId === 'south-sudan') && (
        <div className="space-y-10">
          <SouthSudanMap isEn={isEn} />
        </div>
      )}

      {/* 3. Deep Dive into Country Overview */}
      {pageId === 'south-sudan' && (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-black text-[#092B3A] mb-4">
              {isEn ? 'Strategic Field Overview of South Sudan' : 'قراءة في الواقع التنموي والإنساني لجنوب السودان'}
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-8">
              {isEn ? SOUTH_SUDAN_OVERVIEW.summaryEn : SOUTH_SUDAN_OVERVIEW.summaryAr}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-base text-[#092B3A] mb-2">
                  <Droplets className="w-5 h-5 text-[#087EA4]" />
                  <span>{isEn ? 'Water & The Nile' : 'حوض النيل ومصادر المياه'}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn ? SOUTH_SUDAN_OVERVIEW.waterResourcesEn : SOUTH_SUDAN_OVERVIEW.waterResourcesAr}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-base text-[#092B3A] mb-2">
                  <Sun className="w-5 h-5 text-[#F2B84B]" />
                  <span>{isEn ? 'Agriculture & Fertile Soil' : 'الخصوبة الزراعية والإنتاج'}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn ? SOUTH_SUDAN_OVERVIEW.agriculturePotentialEn : SOUTH_SUDAN_OVERVIEW.agriculturePotentialAr}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <div className="flex items-center gap-2 font-bold text-base text-[#092B3A] mb-2">
                  <Users className="w-5 h-5 text-[#159A72]" />
                  <span>{isEn ? 'Youth Potential' : 'طاقة الشباب والمستقبل'}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isEn ? SOUTH_SUDAN_OVERVIEW.youthDemographicsEn : SOUTH_SUDAN_OVERVIEW.youthDemographicsAr}
                </p>
              </div>
            </div>

            {/* Note on Regulatory Stance */}
            <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
              ⚠️ {isEn
                ? 'Notice: This overview is prepared for research and developmental understanding within BGI concept planning. It does not replace official national surveys.'
                : 'تنبيه: هذه المادة التوثيقية تم إعدادها لأغراض الدراسة التنموية والتخطيط المبدئي للمبادرة، ولا تغني عن المسوحات الإحصائية الرسمية الصادرة عن الجهات المختصة.'}
            </div>
          </div>
        </div>
      )}

      {/* 4. Local Communities View */}
      {pageId === 'communities' && (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-black text-[#092B3A] mb-4">
              {isEn ? 'Community Diversity & Social Harmony' : 'المجتمعات المحلية: غنى التنوع وركائز التماسك'}
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-8">
              {isEn
                ? 'South Sudan is blessed with a rich mosaic of cultural heritage, languages, and traditional knowledge systems. BGI believes true development starts by listening to local community elders, women, and youth groups as primary partners.'
                : 'يتميز جنوب السودان بتنوع ثقافي واجتماعي ثري وفسيفساء فريدة من العادات والتقاليد والمعارف المتوارثة. وتنطلق رؤية جسور الخير من الإيمان بأن أي تنمية حقيقية تبدأ بالإنصات للإدارات الأهلية وقادة المجتمعات والمرأة والشباب كشركاء أصيلين لا مجرد متلقين.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#E6F7F2]/60 border border-[#159A72]/20">
                <span className="w-8 h-8 rounded-xl bg-[#159A72] text-white flex items-center justify-center font-bold text-xs mb-3">
                  01
                </span>
                <h3 className="font-bold text-[#092B3A] mb-2">
                  {isEn ? 'Community Leadership & Ownership' : 'القيادات الأهلية والشعبية'}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  احترام التراتبية الاجتماعية التقليدية والتنسيق مع زعماء العشائر لضمان نزاهة التوجيه وعدالة الوصول.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#E0F2FE]/60 border border-[#087EA4]/20">
                <span className="w-8 h-8 rounded-xl bg-[#087EA4] text-white flex items-center justify-center font-bold text-xs mb-3">
                  02
                </span>
                <h3 className="font-bold text-[#092B3A] mb-2">
                  {isEn ? 'Women as Pillars of Resilient Families' : 'المرأة صانعة الاستقرار الأسري'}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  تمكين المرأة ريفياً وحضرياً عبر برامج الرعاية الصحية والتعليم الأساسي والحرف الإنتاجية الصغيرة.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FEF3C7]/60 border border-[#F2B84B]/40">
                <span className="w-8 h-8 rounded-xl bg-[#092B3A] text-[#F2B84B] flex items-center justify-center font-bold text-xs mb-3">
                  03
                </span>
                <h3 className="font-bold text-[#092B3A] mb-2">
                  {isEn ? 'Youth: Vanguard of Future Peace' : 'طاقات الشباب وبناء السلام'}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  تحويل الطاقات الشابة من المعاناة إلى التدريب المهني وريادة الأعمال المجتمعية وإحلال السلام.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
