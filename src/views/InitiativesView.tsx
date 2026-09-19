import React, { useState } from 'react';
import { PageId, Language, ProposedProject } from '../types';
import { PROPOSED_PROJECTS } from '../data/contentData';
import {
  Sparkles,
  MapPin,
  Users,
  Target,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Building,
  HeartHandshake
} from 'lucide-react';

interface InitiativesViewProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const InitiativesView: React.FC<InitiativesViewProps> = ({ onNavigate, lang }) => {
  const isEn = lang === 'en';
  const [selectedProject, setSelectedProject] = useState<ProposedProject | null>(null);

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
            {isEn ? 'Proposed Initiatives' : 'المبادرات والمشاريع المقترحة'}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3 border border-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? 'Conceptual Projects Under Study' : 'مشاريع تصورية مقترحة قيد الدراسة والتخطيط'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#092B3A] tracking-tight">
              {isEn ? 'Proposed Future Initiatives (Bridge Portfolio)' : 'حزمة مبادرات «جسور» المقترحة لجنوب السودان'}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
              {isEn
                ? 'These concept notes represent structured programmatic solutions designed to address acute humanitarian challenges and catalyze long-term self-reliance. None are presented as active or executed projects.'
                : 'نماذج لبرامج ومشاريع مقترحة تخضع للدراسة والجدوى الفنية لخدمة المجتمعات في جنوب السودان، مصممة للانتقال من الإغاثة الفورية إلى التمكين المستدام.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('partnerships')}
            className="px-5 py-3 rounded-2xl bg-[#092B3A] text-[#F2B84B] font-bold text-xs sm:text-sm hover:bg-[#087EA4] hover:text-white transition-all shadow-md flex items-center gap-2"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>{isEn ? 'Propose Partnership' : 'اقتراح شراكة لأحد المشاريع'}</span>
          </button>
        </div>
      </div>

      {/* 2. Strict Transparency Warning */}
      <div className="bg-[#092B3A] text-[#E8D8B8] rounded-3xl p-6 border border-[#087EA4]/40 text-xs sm:text-sm leading-relaxed flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-[#F2B84B] shrink-0 mt-0.5" />
        <div>
          <strong className="text-white block text-sm mb-1">
            {isEn ? 'Mandatory Transparency & Verification Stance:' : 'تنبيه الشفافية والمصداقية المؤسسية:'}
          </strong>
          {isEn
            ? 'All initiatives listed below are conceptual proposals under technical and legal development. BGI explicitly rejects displaying simulated beneficiary statistics, fake budget disbursements, or claiming executed milestones prior to authorized verification.'
            : 'جميع المبادرات المدرجة أدناه هي مقترحات تصورية قيد الدراسة والتطوير القانوني والفني. تلتزم جسور الخير بعدم عرض أرقام مستفيدين أو تمويلات وهمية حتى يتم إطلاقها وتنفيذها رسمياً على أرض الواقع.'}
        </div>
      </div>

      {/* 3. Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPOSED_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Project Card Image */}
              {proj.imageUrl && (
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <img
                    src={proj.imageUrl}
                    alt={isEn ? proj.titleEn : proj.titleAr}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 start-3 text-[11px] font-bold text-white bg-[#092B3A]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                    {proj.code}
                  </span>
                </div>
              )}

              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                  {proj.code}
                </span>
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  {isEn ? proj.badgeEn : proj.badgeAr}
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-[#092B3A] group-hover:text-[#087EA4] transition-colors mb-2">
                {isEn ? proj.titleEn : proj.titleAr}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {isEn ? proj.summaryEn : proj.summaryAr}
              </p>

              {/* Mini details list */}
              <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-100 space-y-2 text-xs text-slate-700 mb-6">
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-[#087EA4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#092B3A]">{isEn ? 'Objective:' : 'الهدف المقترح:'}</strong>{' '}
                    {isEn ? (proj.objectiveEn || proj.summaryEn) : (proj.objectiveAr || proj.summaryAr)}
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-[#159A72] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#092B3A]">{isEn ? 'Target Group:' : 'الفئة المستهدفة:'}</strong>{' '}
                    {isEn ? proj.targetFocusEn : proj.targetFocusAr}
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#F2B84B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#092B3A]">{isEn ? 'Proposed States:' : 'النطاق المقترح:'}</strong>{' '}
                    {(isEn ? proj.proposedLocationsEn : proj.proposedLocationsAr).join('، ')}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 italic">
                {isEn ? 'Status: Concept' : 'الحالة: تصور مقترح'}
              </span>

              <button
                onClick={() => setSelectedProject(proj)}
                className="px-4 py-2 rounded-xl bg-[#092B3A] text-white hover:bg-[#087EA4] text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <span>{isEn ? 'Full Proposal Details' : 'تفاصيل المشروع'}</span>
                {isEn ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 4. MODAL FOR FULL PROJECT DETAILS */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
                  {selectedProject.code}
                </span>
                <span className="mx-2 text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                  {isEn ? selectedProject.badgeEn : selectedProject.badgeAr}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#092B3A] mt-2">
                  {isEn ? selectedProject.titleEn : selectedProject.titleAr}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            {/* Modal Image */}
            {selectedProject.imageUrl && (
              <div className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md">
                <img
                  src={selectedProject.imageUrl}
                  alt={isEn ? selectedProject.titleEn : selectedProject.titleAr}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 start-4 text-xs font-bold text-white bg-[#092B3A]/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                  {isEn ? selectedProject.titleEn : selectedProject.titleAr}
                </div>
              </div>
            )}

            {/* Strategic Overview */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-sm text-[#092B3A] mb-1">
                  {isEn ? 'Comprehensive Concept Summary:' : 'الملخص الشامل لفكرة المشروع:'}
                </h4>
                <p>{isEn ? selectedProject.summaryEn : selectedProject.summaryAr}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">
                    {isEn ? 'Target Focus:' : 'الفئة المستهدفة:'}
                  </h5>
                  <p>{isEn ? selectedProject.targetFocusEn : selectedProject.targetFocusAr}</p>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 mb-1">
                    {isEn ? 'Proposed States Scope:' : 'الولايات المقترحة للتدخل المبدئي:'}
                  </h5>
                  <p>{(isEn ? selectedProject.proposedLocationsEn : selectedProject.proposedLocationsAr).join('، ')}</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm text-[#092B3A] mb-2">
                  {isEn ? 'Planned Project Implementation Phases:' : 'المراحل التأسيسية المقترحة لتنفيذ المشروع:'}
                </h4>
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#087EA4] text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      1
                    </span>
                    <div>
                      <strong className="block text-slate-900">
                        {isEn ? 'Phase 1: Field Assessment & Consultation' : 'المرحلة 1: دراسة الجدوى والتشاور المجتمعي'}
                      </strong>
                      <span className="text-slate-600 text-xs">
                        مسح الاحتياجات الدقيقة والتنسيق مع القيادات الأهلية والسلطات المحلية المختصة.
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#159A72] text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      2
                    </span>
                    <div>
                      <strong className="block text-slate-900">
                        {isEn ? 'Phase 2: Pilot Implementation & Training' : 'المرحلة 2: إطلاق النموذج التجريبي وبناء القدرات'}
                      </strong>
                      <span className="text-slate-600 text-xs">
                        تدريب الكوادر المحلية الشابة وتجهيز مراكز التدخل النموذجي المحددة.
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F2B84B] text-[#092B3A] text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      3
                    </span>
                    <div>
                      <strong className="block text-slate-900">
                        {isEn ? 'Phase 3: Scaling & Local Autonomy Handover' : 'المرحلة 3: التوسع والتسليم للإدارة الذاتية للمجتمع'}
                      </strong>
                      <span className="text-slate-600 text-xs">
                        تمكين المجتمع من إدارة المشروع بشكل مستدام ومستقل عن أي دعم خارجي.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onNavigate('partnerships');
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#087EA4] to-[#159A72] text-white font-bold text-xs sm:text-sm"
              >
                {isEn ? 'Express Partnership Interest in this Project' : 'إبداء رغبة في شراكة لهذا المشروع'}
              </button>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
              >
                {isEn ? 'Close' : 'إغلاق'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
