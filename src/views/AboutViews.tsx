import React from 'react';
import { PageId, Language } from '../types';
import { INITIATIVE_INFO, FOUNDERS, FAQ_LIST } from '../data/contentData';
import { BridgePhilosophy } from '../components/BridgePhilosophy';
import {
  Sparkles,
  ShieldCheck,
  Compass,
  HeartHandshake,
  Users,
  FileText,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Lock,
  Download
} from 'lucide-react';

interface AboutViewsProps {
  pageId: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const AboutViews: React.FC<AboutViewsProps> = ({ pageId, onNavigate, lang }) => {
  const isEn = lang === 'en';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Page Header with Breadcrumb */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
          <button onClick={() => onNavigate('home')} className="hover:text-[#087EA4]">
            {isEn ? 'Home' : 'الرئيسية'}
          </button>
          <span>/</span>
          <span className="text-[#087EA4]">
            {pageId === 'about' && (isEn ? 'About BGI' : 'عن المبادرة')}
            {pageId === 'story' && (isEn ? 'Story of the Idea' : 'قصة الفكرة')}
            {pageId === 'vision' && (isEn ? 'Our Vision' : 'رؤيتنا')}
            {pageId === 'mission' && (isEn ? 'Our Mission' : 'رسالتنا')}
            {pageId === 'philosophy' && (isEn ? 'The Bridge Model' : 'فلسفة الجسر')}
            {pageId === 'team' && (isEn ? 'Founding Team' : 'الفريق التأسيسي')}
            {pageId === 'transparency' && (isEn ? 'Transparency & Ethics' : 'الشفافية والمصداقية')}
            {pageId === 'concept-doc' && (isEn ? 'Concept Paper' : 'وثيقة التصور')}
            {pageId === 'faq' && (isEn ? 'FAQ' : 'الأسئلة الشائعة')}
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#159A72]/15 text-[#159A72] text-xs font-bold mb-3 border border-[#159A72]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isEn ? INITIATIVE_INFO.legalStatusBadgeEn : INITIATIVE_INFO.legalStatusBadgeAr}</span>
        </div>
      </div>

      {/* 2. SPECIFIC PAGE RENDERING */}

      {/* --- A. ABOUT PAGE (عن المبادرة) --- */}
      {pageId === 'about' && (
        <div className="space-y-10">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <h1 className="text-3xl sm:text-5xl font-black text-[#092B3A] mb-4">
              {isEn ? 'About Bridges of Goodness Initiative' : 'عن مبادرة جسور الخير'}
            </h1>
            <p className="text-lg text-[#087EA4] font-semibold mb-6 leading-relaxed">
              {isEn ? INITIATIVE_INFO.taglineEn : INITIATIVE_INFO.taglineAr}
            </p>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                {isEn ? INITIATIVE_INFO.heroDescriptionEn : INITIATIVE_INFO.heroDescriptionAr}
              </p>
              <p>
                {isEn
                  ? 'Bridges of Goodness is rooted in deep solidarity with the diverse communities of South Sudan. Recognizing that conventional handouts often fail to yield enduring dignity, BGI focuses on forging practical bridges connecting immediate vulnerability with long-term knowledge, tools, productivity, and resilient peace.'
                  : 'تنطلق «جسور الخير» من إدراك عميق لواقع المجتمعات في جنوب السودان، وإيمان بأن العطاء لا يقتصر على المساعدة العاجلة، بل يكتمل حين نأخذ بيد الإنسان نحو اكتساب المعرفة، وحيازة أدوات الإنتاج، والاعتماد على الذات.'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-center">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                <span className="text-2xl font-black text-[#087EA4]">07</span>
                <span className="block text-xs font-bold text-slate-600 mt-1">
                  {isEn ? 'Proposed Action Spheres' : 'مجالات عمل مستقبلية'}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                <span className="text-2xl font-black text-[#159A72]">10</span>
                <span className="block text-xs font-bold text-slate-600 mt-1">
                  {isEn ? 'States of South Sudan' : 'ولايات تحت المتابعة والدراسة'}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                <span className="text-2xl font-black text-[#F2B84B]">08</span>
                <span className="block text-xs font-bold text-slate-600 mt-1">
                  {isEn ? 'Bridge Continuum Stages' : 'محطات في رحلة بناء الإنسان'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Sub-navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              onClick={() => onNavigate('story')}
              className="p-5 rounded-2xl bg-white border border-slate-200 text-start hover:border-[#087EA4] transition-all group"
            >
              <h3 className="font-bold text-[#092B3A] group-hover:text-[#087EA4]">
                {isEn ? 'Story of the Idea' : 'قصة الفكرة'} &rarr;
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {isEn ? 'How the concept was conceived and its founders' : 'كيف نشأت الفكرة وأصحاب المبادرة'}
              </p>
            </button>
            <button
              onClick={() => onNavigate('vision')}
              className="p-5 rounded-2xl bg-white border border-slate-200 text-start hover:border-[#087EA4] transition-all group"
            >
              <h3 className="font-bold text-[#092B3A] group-hover:text-[#087EA4]">
                {isEn ? 'Our Vision & Mission' : 'الرؤية والرسالة'} &rarr;
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {isEn ? 'Our guiding values and developmental compass' : 'بوصلتنا التنموية والقيم الحاكمة'}
              </p>
            </button>
            <button
              onClick={() => onNavigate('transparency')}
              className="p-5 rounded-2xl bg-white border border-slate-200 text-start hover:border-[#087EA4] transition-all group"
            >
              <h3 className="font-bold text-[#092B3A] group-hover:text-[#087EA4]">
                {isEn ? 'Transparency Commitment' : 'ميثاق الشفافية'} &rarr;
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {isEn ? 'Our legal baseline and reporting standards' : 'موقفنا القانوني ومعايير المصداقية'}
              </p>
            </button>
          </div>
        </div>
      )}

      {/* --- B. STORY OF THE IDEA (قصة الفكرة) --- */}
      {pageId === 'story' && (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <h1 className="text-3xl sm:text-4xl font-black text-[#092B3A] mb-6">
              {isEn ? 'The Story Behind Bridges of Goodness' : 'قصة الفكرة ونشأة المبادرة'}
            </h1>

            {/* The Mandatory Story Text */}
            <div className="bg-[#F8FAFC] border-s-4 border-[#087EA4] p-6 rounded-2xl my-6">
              <blockquote className="text-base sm:text-xl font-medium text-slate-800 leading-relaxed italic">
                «من رحم الحاجة، ومن واقع المجتمعات التي تواجه الأزمات، ومن إيمان بأن الإنسان لا يحتاج إلى من يعطيه فقط، وإنما يحتاج إلى من يقف بجانبه، ويفتح أمامه باباً، ويمنحه فرصة، ويشاركه في بناء مستقبله؛ جاءت فكرة مبادرة جسور الخير.»
              </blockquote>
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>
                {isEn
                  ? 'The initiative took shape through discussions among community leaders, development researchers, and social initiators deeply invested in the prospects of South Sudan. Recognizing that the cycle of recurring crises demands more than palliative relief, the co-originators envisioned a systematic pathway leading toward sustainable human capability.'
                  : 'تكونت ملامح المبادرة من خلال حوارات ممتدة بين كفاءات وطنية وباحثين تنمويين وناشطين مجتمعيين، أدركوا أن مجرد تكرار أساليب الإغاثة التقليدية لم يعد كافياً لكسر دائرة الأزمات، وأن النهوض الحقيقي يبدأ بالاستثمار في العقل واليد والكرامة.'}
              </p>
            </div>

            {/* Originators / Owners of the Idea */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <h2 className="text-xl font-bold text-[#092B3A] mb-4">
                {isEn ? 'Co-Originators of the Concept:' : 'صاحبو الفكرة:'}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {FOUNDERS.slice(0, 3).map((f, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                    <span className="w-8 h-8 rounded-lg bg-[#092B3A] text-[#F2B84B] font-bold text-xs flex items-center justify-center mb-2">
                      {f.avatarText}
                    </span>
                    <h3 className="font-bold text-slate-900">{isEn ? f.nameEn : f.nameAr}</h3>
                    <p className="text-xs text-[#087EA4] mt-0.5">{isEn ? f.roleEn : f.roleAr}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 text-xs text-slate-500">
                {isEn ? 'And other dedicated academic and grassroots volunteers.' : 'وآخرون من الكفاءات الوطنية والتطوعية.'}
              </div>
            </div>

            {/* Strict Regulatory Notice */}
            <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-amber-900 font-semibold leading-relaxed">
                {isEn
                  ? '“The idea is in its foundational and developmental phase, and has not yet transitioned into a registered NGO or legal entity.”'
                  : '«الفكرة في مرحلة التأسيس والتطوير، ولم تتحول بعد إلى منظمة أو مؤسسة مسجلة.»'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- C. VISION & MISSION (رؤيتنا ورسالتنا) --- */}
      {(pageId === 'vision' || pageId === 'mission') && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#087EA4]/10 text-[#087EA4] flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-[#092B3A] mb-3">
                  {isEn ? 'Our Future Vision' : 'رؤيتنا المستقبلية'}
                </h2>
                <p className="text-base text-slate-700 leading-relaxed">
                  {isEn ? INITIATIVE_INFO.visionEn : INITIATIVE_INFO.visionAr}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
                {isEn ? 'Long-term Aspirations for South Sudan' : 'تطلعات تنموية استراتيجية لجنوب السودان'}
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#159A72]/10 text-[#159A72] flex items-center justify-center mb-4">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-[#092B3A] mb-3">
                  {isEn ? 'Our Mission Statement' : 'رسالة المبادرة'}
                </h2>
                <p className="text-base text-slate-700 leading-relaxed font-medium">
                  «{isEn ? INITIATIVE_INFO.missionEn : INITIATIVE_INFO.missionAr}»
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
                {isEn ? 'Serving Humanity with Dignity' : 'خدمة الإنسان بعزة وكرامة'}
              </div>
            </div>
          </div>

          <BridgePhilosophy isEn={isEn} />
        </div>
      )}

      {/* --- D. PHILOSOPHY & BRIDGE MODEL (فلسفة الجسر) --- */}
      {pageId === 'philosophy' && (
        <div className="space-y-8">
          <BridgePhilosophy isEn={isEn} />
        </div>
      )}

      {/* --- E. FOUNDING TEAM (الفريق التأسيسي) --- */}
      {pageId === 'team' && (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <h1 className="text-3xl sm:text-4xl font-black text-[#092B3A] mb-4">
              {isEn ? 'Founding Team & Contributors' : 'فريق التأسيس والمبادرون'}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              {isEn
                ? 'A network of committed citizens, development thinkers, and voluntary talents steering the exploratory research and conceptual documentation.'
                : 'نخبة من الكفاءات المجتمعية والباحثين التنمويين المتطوعين العاملين على إعداد وثائق التأسيس والدراسات الميدانية.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FOUNDERS.map((f, i) => (
                <div
                  key={i}
                  className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 flex items-start gap-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#092B3A] text-[#F2B84B] font-bold text-base flex items-center justify-center shrink-0">
                    {f.avatarText}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-lg text-[#092B3A]">
                      {isEn ? f.nameEn : f.nameAr}
                    </h3>
                    <span className="text-xs font-semibold text-[#087EA4] block">
                      {isEn ? f.roleEn : f.roleAr}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {isEn ? f.bioEn : f.bioAr}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note on Joining the Team */}
            <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm text-[#092B3A]">
                  {isEn ? 'Welcoming Specialized National & Voluntary Talents' : 'مساحة لإضافة أعضاء الفريق والخبراء مستقبلاً'}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {isEn
                    ? 'We continuously welcome volunteer specialists in education, health, agriculture, and community development.'
                    : 'نرحب بالكفاءات التنموية والأكاديمية الراغبة في المساهمة الفكرية والتطوعية في مرحلة التأسيس.'}
                </p>
              </div>
              <button
                onClick={() => onNavigate('volunteers')}
                className="px-4 py-2 rounded-xl bg-[#087EA4] text-white text-xs font-bold shrink-0 hover:bg-[#092B3A] transition-colors"
              >
                {isEn ? 'Join as Contributor' : 'سجل اهتمامك بالتطوع'}
              </button>
            </div>

            {/* Strict Regulatory Notice */}
            <div className="mt-6 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900">
              ⚠️ {isEn
                ? 'Notice: Real photographic portraits are reserved until legal formalization. No synthesized avatars are used.'
                : 'تنبيه: التزاماً بالمعايير المهنية، لا نستخدم صوراً مولدة أو غير مؤكدة للأشخاص الحقيقيين.'}
            </div>
          </div>
        </div>
      )}

      {/* --- F. TRANSPARENCY & ETHICS (الشفافية) --- */}
      {pageId === 'transparency' && (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-amber-700" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-[#092B3A] mb-4">
              {isEn ? 'Transparency, Integrity & Legal Status' : 'الشفافية والمصداقية والموقف القانوني'}
            </h1>

            {/* Mandatory Transparency Block */}
            <div className="bg-[#092B3A] text-white rounded-2xl p-6 sm:p-8 my-6">
              <span className="text-xs font-bold text-[#F2B84B] uppercase tracking-wider block mb-2">
                {isEn ? 'Official Transparency Statement' : 'بيان الشفافية التأسيسي الملزم'}
              </span>
              <p className="text-base sm:text-lg leading-relaxed text-[#F8FAFC]">
                «جسور الخير في مرحلتها الحالية فكرة تأسيسية قيد التطوير، ولذلك لا تعرض أرقاماً عن مشاريع أو مستفيدين أو أموال تم جمعها قبل وجود نشاط رسمي موثق.»
              </p>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
              <div>
                <h3 className="text-lg font-bold text-[#092B3A] mb-2">
                  {isEn ? '1. Why We Do Not Display Beneficiary Numbers or Donations' : '1. لماذا لا نعرض أرقام مستفيدين أو تبرعات مالية؟'}
                </h3>
                <p>
                  {isEn
                    ? 'Ethical humanitarian conduct demands total truthfulness. Since Bridges of Goodness is currently in its conceptual research and formalization phase, presenting fabricated beneficiary counts, simulated budgets, or claiming unverified field projects would breach the trust of our communities and partners.'
                    : 'الأمانة الإنسانية والأخلاقية تقتضي الصدق المطلق مع المجتمعات. وحيث إن المبادرة لا تزال فكرة تأسيسية قيد الدراسة، فإن ادعاء مشاريع منفذة أو أرقام مستفيدين غير واقعية يعد تضليلاً يرفضه ميثاقنا تماماً.'}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#092B3A] mb-2">
                  {isEn ? '2. Future Institutional Disclosures' : '2. ما سننشره بشفافية كاملة مستقبلاً:'}
                </h3>
                <p className="mb-3">
                  {isEn
                    ? 'Upon completion of official registration and project rollout, this section will host:'
                    : 'عند استكمال إجراءات التسجيل والاعتماد الرسمي وانطلاق المشاريع الميدانية، ستلتزم المبادرة بنشر:'}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    📄 {isEn ? 'Annual Financial Reports' : 'التقارير المالية والسنوية'}
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    🏗️ {isEn ? 'Audited Project Logs' : 'سجل المشاريع الموثقة'}
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    🤝 {isEn ? 'Official Partnerships' : 'اتفاقيات الشراكة الرسمية'}
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    📊 {isEn ? 'Impact Evaluation Metrics' : 'تقييم الأثر الميداني'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- G. CONCEPT DOCUMENT / WHITEPAPER (وثيقة التصور) --- */}
      {pageId === 'concept-doc' && (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-[#087EA4] uppercase tracking-wider block">
                  {isEn ? 'Foundational Whitepaper' : 'وثيقة التصور التأسيسي'}
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-[#092B3A] mt-1">
                  {isEn ? 'BGI Concept Document (2026–2030)' : 'وثيقة التصور الفكري والاستراتيجي للمبادرة'}
                </h1>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-bold text-slate-700">
                <FileText className="w-4 h-4 text-[#087EA4]" />
                <span>{isEn ? 'Draft Version 1.0 (Review)' : 'مسودة تأسيسية رقم 1.0 (للتشاور)'}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-8">
              {isEn
                ? 'This foundational whitepaper outlines the structural pillars of Bridges of Goodness, synthesizing field context in South Sudan with modern sustainable development frameworks.'
                : 'تلخص هذه الوثيقة المرتكزات الفكرية والميدانية للمبادرة، وتجمع بين قراءة واقع التحديات الإنسانية في جنوب السودان وأحدث مفاهيم التنمية المستدامة القائمة على تمكين الإنسان.'}
            </p>

            {/* Document Chapters */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <h3 className="font-bold text-[#092B3A] text-sm">
                  {isEn ? 'Chapter 1: The Context of South Sudan' : 'الباب الأول: قراءة السياق الإنساني والتنموي في جنوب السودان'}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  تحليل التحديات المناخية (الفيضانات)، وضع البنية الأساسية، والفرص الكامنة في طاقات الشباب والزراعة والموارد الطبيعية.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <h3 className="font-bold text-[#092B3A] text-sm">
                  {isEn ? 'Chapter 2: The Bridge Philosophy' : 'الباب الثاني: فلسفة الجسر الإنساني (من الحاجة إلى الفرصة)'}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  تفكيك رحلة الانتقال من الإغاثة الفورية إلى بناء القدرات والإنتاج والاعتماد على الذات عبر 8 محطات متتالية.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <h3 className="font-bold text-[#092B3A] text-sm">
                  {isEn ? 'Chapter 3: Action Spheres & Proposed Programs' : 'الباب الثالث: مجالات العمل الـ 7 والبرامج المقترحة'}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  توصيف المشاريع السبعة المقترحة (Bridge Education, Bridge Health, Bridge Water, Bridge Food Security, Bridge Youth, Bridge Skills, Bridge Community).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <h3 className="font-bold text-[#092B3A] text-sm">
                  {isEn ? 'Chapter 4: Governance & Integrity Charter' : 'الباب الرابع: الحوكمة والنزاهة وحماية المستفيدين'}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  معايير الشفافية، منع تضارب المصالح، الرقابة المجتمعية، وسياسات حماية الأطفال والفئات المستضعفة.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {isEn ? 'Prepared by the Foundational Vision Team' : 'إعداد: فريق الرؤية التأسيسية'}
              </span>
              <button
                onClick={() => alert(isEn ? 'The full draft PDF is available upon request for registered partners.' : 'الوثيقة الكاملة بصيغة PDF متاحة للشركاء والجهات الاستشارية عند التواصل الرسمي.')}
                className="px-4 py-2 rounded-xl bg-[#092B3A] text-[#F2B84B] text-xs font-bold hover:bg-[#087EA4] transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isEn ? 'Request Full Whitepaper' : 'طلب نسخة الوثيقة الكاملة'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- H. FAQ (الأسئلة الشائعة) --- */}
      {pageId === 'faq' && (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-[#087EA4]/10 text-[#087EA4] flex items-center justify-center mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-[#092B3A] mb-3">
              {isEn ? 'Frequently Asked Questions' : 'الأسئلة الشائعة حول المبادرة'}
            </h1>
            <p className="text-sm text-slate-600 mb-8">
              {isEn
                ? 'Clear answers regarding our identity, current legal status, and future horizons.'
                : 'إجابات واضحة وشفافة حول هوية جسور الخير، موقفها الحالي، وخطواتها القادمة.'}
            </p>

            <div className="space-y-4">
              {FAQ_LIST.map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                  <h3 className="font-bold text-base text-[#092B3A] mb-2 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#087EA4] text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ?
                    </span>
                    <span>{isEn ? faq.qEn : faq.qAr}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed ps-7">
                    {isEn ? faq.aEn : faq.aAr}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
