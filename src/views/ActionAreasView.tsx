import React from 'react';
import { PageId, Language } from '../types';
import { ACTION_AREAS, PROPOSED_PROJECTS } from '../data/contentData';
import {
  GraduationCap,
  HeartPulse,
  ShieldAlert,
  Sparkles,
  Sprout,
  Droplets,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MapPin,
  HeartHandshake
} from 'lucide-react';

interface ActionAreasViewProps {
  currentAreaId: string;
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const ActionAreasView: React.FC<ActionAreasViewProps> = ({
  currentAreaId,
  onNavigate,
  lang,
}) => {
  const isEn = lang === 'en';

  const selectedArea =
    ACTION_AREAS.find((a) => a.id === currentAreaId) || ACTION_AREAS[0];

  const linkedProject = PROPOSED_PROJECTS.find(
    (p) => p.areaId === selectedArea.id
  );

  const getAreaIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-8 h-8" />;
      case 'HeartPulse': return <HeartPulse className="w-8 h-8" />;
      case 'ShieldAlert': return <ShieldAlert className="w-8 h-8" />;
      case 'Sparkles': return <Sparkles className="w-8 h-8" />;
      case 'Sprout': return <Sprout className="w-8 h-8" />;
      case 'Droplets': return <Droplets className="w-8 h-8" />;
      case 'Users': return <Users className="w-8 h-8" />;
      default: return <GraduationCap className="w-8 h-8" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Header & Navigation Breadcrumb */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
          <button onClick={() => onNavigate('home')} className="hover:text-[#087EA4]">
            {isEn ? 'Home' : 'الرئيسية'}
          </button>
          <span>/</span>
          <span className="text-[#087EA4]">
            {isEn ? 'Action Areas' : 'مجالات العمل المستقبلية'}
          </span>
          <span>/</span>
          <span className="text-slate-800 font-bold">
            {isEn ? selectedArea.titleEn : selectedArea.titleAr}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#092B3A] tracking-tight">
          {isEn ? 'Future Action Spheres' : 'مجالات العمل المستقبلية المقترحة'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          {isEn
            ? 'Seven interconnected developmental domains engineered to accompany communities from vulnerability toward durable autonomy and productivity in South Sudan.'
            : 'سبعة مجالات متكاملة ترافق الإنسان والمجتمع في جنوب السودان من مرحلة الحاجة والضعف إلى الأمان والمهارة والإنتاج والاعتماد على الذات.'}
        </p>
      </div>

      {/* 2. Interactive Area Switcher Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-200">
        {ACTION_AREAS.map((area) => (
          <button
            key={area.id}
            onClick={() => onNavigate(area.id as PageId)}
            className={`text-xs md:text-sm font-bold px-4 py-2.5 rounded-2xl transition-all flex items-center gap-2 ${
              selectedArea.id === area.id
                ? 'bg-[#092B3A] text-[#F2B84B] shadow-md scale-[1.02]'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span className="opacity-70 text-[10px]">{area.number}</span>
            <span>{isEn ? area.titleEn : area.titleAr}</span>
          </button>
        ))}
      </div>

      {/* 3. Main Area Details Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        {/* Banner with representative image */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-slate-900">
          <img
            src={selectedArea.imageUrl}
            alt={isEn ? selectedArea.titleEn : selectedArea.titleAr}
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#092B3A] via-[#092B3A]/40 to-transparent" />

          {/* Area Number Badge */}
          <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-2xl text-sm font-black text-[#092B3A] shadow-lg">
            {selectedArea.number}
          </div>

          {/* Floating Category Info */}
          <div className="absolute bottom-6 right-6 left-6 text-white flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F2B84B] block mb-1">
                {isEn ? 'Proposed Action Sphere' : 'مجال عمل مقترح قيد الدراسة'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                {isEn ? selectedArea.titleEn : selectedArea.titleAr}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-white text-[#087EA4] flex items-center justify-center shadow-2xl shrink-0">
              {getAreaIcon(selectedArea.icon)}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 md:p-12 space-y-8">
          <div>
            <h3 className="text-lg font-bold text-[#092B3A] mb-3">
              {isEn ? 'Conceptual Rationale & Context' : 'الرؤية والمنطلق التنموي للمجال'}
            </h3>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {isEn ? selectedArea.fullDescEn : selectedArea.fullDescAr}
            </p>
          </div>

          {/* Proposed Interventions List */}
          <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-200">
            <h3 className="text-base font-extrabold text-[#092B3A] uppercase tracking-wider mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#159A72]" />
              <span>{isEn ? 'Proposed Future Intervention Modalities' : 'نماذج التدخلات المستقبلية المقترحة لهذا المجال'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(isEn ? selectedArea.proposedInterventionsEn : selectedArea.proposedInterventionsAr).map((item, i) => (
                <div key={i} className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#087EA4] mt-2 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Linked Proposed Concept Project */}
          {linkedProject && (
            <div className="border-t border-slate-200 pt-8">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                {isEn ? 'Corresponding Conceptual Project' : 'المشروع المقترح المرتبط بهذا المجال'}
              </span>

              <div className="bg-gradient-to-br from-[#092B3A] to-[#0D384D] text-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-lg">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400 text-[#092B3A] uppercase">
                    {isEn ? linkedProject.badgeEn : linkedProject.badgeAr}
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    {isEn ? linkedProject.titleEn : linkedProject.titleAr}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                    {isEn ? linkedProject.summaryEn : linkedProject.summaryAr}
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('initiatives')}
                  className="px-5 py-2.5 rounded-xl bg-[#087EA4] hover:bg-[#159A72] text-xs font-bold text-white shrink-0 transition-colors"
                >
                  {isEn ? 'View Initiative Details' : 'تفاصيل المبادرة المقترحة'}
                </button>
              </div>
            </div>
          )}

          {/* Strict Regulatory Notice */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <strong>{isEn ? 'Integrity Notice:' : 'تنويه الشفافية:'}</strong>{' '}
            {isEn
              ? 'This area represents a proposed future horizon under study. No executed activities or beneficiary collections are claimed prior to formal establishment.'
              : 'هذا المجال يعبر عن رؤية تنموية وتصورات مقترحة قيد الدراسة والتخطيط. لا تدّعي المبادرة وجود مشاريع منفذة أو جمع لأموال التبرعات قبل الاعتماد الرسمي.'}
          </div>
        </div>
      </div>
    </div>
  );
};
