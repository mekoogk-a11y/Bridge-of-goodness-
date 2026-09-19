import React from 'react';
import { PageId, Language } from '../types';
import { INITIATIVE_INFO } from '../data/contentData';
import { ShieldCheck, Lock, FileText, Download, CheckCircle2, ArrowRight } from 'lucide-react';

interface PolicyViewsProps {
  pageId: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const PolicyViews: React.FC<PolicyViewsProps> = ({ pageId, onNavigate, lang }) => {
  const isEn = lang === 'en';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <button onClick={() => onNavigate('home')} className="hover:text-[#087EA4]">
          {isEn ? 'Home' : 'الرئيسية'}
        </button>
        <span>/</span>
        <span className="text-[#087EA4]">
          {pageId === 'privacy' && (isEn ? 'Privacy Policy' : 'سياسة الخصوصية')}
          {pageId === 'terms' && (isEn ? 'Terms of Use' : 'شروط الاستخدام')}
          {pageId === 'safeguarding' && (isEn ? 'Beneficiary Safeguarding Policy' : 'سياسة صون وحماية المستفيدين')}
          {pageId === 'press' && (isEn ? 'Press & Media Center' : 'المركز الإعلامي')}
        </span>
      </div>

      {/* PRIVACY POLICY */}
      {pageId === 'privacy' && (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-[#087EA4]/10 text-[#087EA4] flex items-center justify-center">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#092B3A]">
            {isEn ? 'Privacy & Data Protection Policy' : 'سياسة الخصوصية وحماية البيانات'}
          </h1>
          <p className="text-xs text-slate-400">
            {isEn ? 'Last Updated: September 2026' : 'آخر تحديث: سبتمبر 2026'}
          </p>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              {isEn
                ? 'The Bridges of Goodness Initiative (BGI) is dedicated to handling all user, partner, and volunteer data with strict confidentiality, integrity, and ethical care.'
                : 'تلتزم مبادرة جسور الخير (BGI) بحماية خصوصية كافة زوار منصتها، وشركائها المحتملين، والمتطوعين المسجلين، وفقاً لأعلى المعايير الأخلاقية.'}
            </p>

            <h3 className="text-base font-bold text-[#092B3A] pt-2">
              {isEn ? '1. Collection of Data' : '1. البيانات التي نجمعها'}
            </h3>
            <p>
              {isEn
                ? 'We only collect information voluntarily submitted through our partnership and volunteer interest forms (e.g. name, email, specialty, and message). We do not collect credit card, financial, or tracking telemetry for commercial purposes.'
                : 'نجمع فقط البيانات التي يقدمها المستخدم طواعية من خلال استمارات تسجيل الاهتمام بالتطوع أو استكشاف الشراكة (مثل الاسم، البريد، والتخصص). لا نطلب أي معلومات دفع أو بطاقات بنكية في هذه المرحلة.'}
            </p>

            <h3 className="text-base font-bold text-[#092B3A] pt-2">
              {isEn ? '2. Use of Information' : '2. كيفية استخدام البيانات'}
            </h3>
            <p>
              {isEn
                ? 'Information collected is solely used to communicate with prospective volunteers, researchers, and institutional counterparts regarding future concept development.'
                : 'تُستخدم البيانات حصرياً للتواصل مع المهتمين بالدراسات والتطوع والتنسيق المؤسسي، ولا يتم بيعها أو مشاركتها مع أي جهات خارجية أو تجارية إطلاقاً.'}
            </p>
          </div>
        </div>
      )}

      {/* TERMS OF USE */}
      {pageId === 'terms' && (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-[#092B3A]/10 text-[#092B3A] flex items-center justify-center">
            <FileText className="w-6 h-6 text-[#092B3A]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#092B3A]">
            {isEn ? 'Terms of Website Use' : 'شروط الاستخدام والميثاق التأسيسي'}
          </h1>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 font-medium">
              «جسور الخير فكرة تأسيسية قيد التطوير وليست بعد منظمة مسجلة رسمياً. جميع المواد المنشورة على هذا الموقع تمثل وثائق دراسية ورؤى تنموية مقترحة.»
            </div>

            <h3 className="text-base font-bold text-[#092B3A] pt-2">
              {isEn ? '1. Conceptual Purpose' : '1. الغرض الفكري والتوعوي'}
            </h3>
            <p>
              {isEn
                ? 'All materials, maps, and project profiles presented are for educational, exploratory, and institutional partnership consultation purposes.'
                : 'جميع المواد المعروضة على المنصة هدفها التوعية والتشاور التنموي ودراسة الاحتياجات في جنوب السودان، ولا تدّعي وجود كيان قانوني مكتمل أو مشاريع منفذة رسمياً قبل استكمال التراخيص.'}
            </p>

            <h3 className="text-base font-bold text-[#092B3A] pt-2">
              {isEn ? '2. Intellectual Property & Attribution' : '2. حقوق الملكية الفكرية والاقتباس'}
            </h3>
            <p>
              {isEn
                ? 'Articles, including the Master Editorial by Kamal Jaafar Zakaria and the Bridge Model, may be cited with appropriate non-commercial academic attribution.'
                : 'يحق للباحثين والمؤسسات الاستفادة من التصورات الفكرية والمقالات المنشورة (بما فيها مقال كمال جعفر زكريا) شريطة الإشارة الصريحة للمصدر وعدم الاستغلال التجاري.'}
            </p>
          </div>
        </div>
      )}

      {/* SAFEGUARDING POLICY */}
      {pageId === 'safeguarding' && (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-[#159A72]/15 text-[#159A72] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-[#159A72]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#092B3A]">
            {isEn ? 'Beneficiary Dignity & Safeguarding Policy' : 'سياسة صون كرامة المستفيدين وحمايتهم'}
          </h1>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              {isEn
                ? 'A fundamental cornerstone of Bridges of Goodness is the preservation of unconditional human dignity across all interactions.'
                : 'تعتبر حماية وصون كرامة الإنسان المستفيد حجر الزاوية الأساسي في فلسفة مبادرة جسور الخير.'}
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="block text-slate-900 mb-1">
                  1. حظر استغلال الضعف أو تصوير المحتاجين بأساليب تمس الكرامة
                </strong>
                <span>
                  نلتزم بالامتناع التام عن التقاط أو نشر أي صور تظهر المستفيدين في أوضاع مهينة أو تستدر الشفقة بطرق تجرح كرامتهم الإنسانية.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="block text-slate-900 mb-1">
                  2. حماية الأطفال والفئات الأكثر هشاشة
                </strong>
                <span>
                  تطبيق مبادئ «عدم الإلحاق بالأذى» (Do No Harm) وسياسات صارمة لحماية الطفولة والنساء في كافة البرامج المستقبلية.
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="block text-slate-900 mb-1">
                  3. الإنصاف والحياد التام
                </strong>
                <span>
                  عدم التمييز في تقديم الرؤى أو التدخلات بناءً على العرق، القبيلة، الدين، أو الجنس. الإنسان هو المعيار الوحيد.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PRESS & MEDIA CENTER */}
      {pageId === 'press' && (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black text-[#092B3A]">
            {isEn ? 'Press, Media & Brand Assets' : 'المركز الإعلامي وهوية المبادرة'}
          </h1>
          <p className="text-slate-600 text-sm">
            {isEn
              ? 'Official brand kit, foundational press releases, and editorial photography guidelines.'
              : 'دليل الهوية البصرية، البيانات الصحفية التأسيسية، وضوابط الاستخدام الإعلامي.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-[#092B3A]">
                  {isEn ? 'BGI Official Logo Package (SVG/PNG)' : 'حزمة شعار المبادرة الرسمي'}
                </h4>
                <span className="text-xs text-slate-500">Vector SVG, High-Res PNG</span>
              </div>
              <button
                onClick={() => alert(isEn ? 'Brand kit downloaded.' : 'تم تجهيز ملفات الهوية البصرية.')}
                className="p-2 rounded-xl bg-[#092B3A] text-white hover:bg-[#087EA4]"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-[#092B3A]">
                  {isEn ? 'Concept Paper Summary (PDF)' : 'ملخص وثيقة التصور التأسيسي'}
                </h4>
                <span className="text-xs text-slate-500">PDF, 12 Pages</span>
              </div>
              <button
                onClick={() => alert(isEn ? 'Concept summary requested.' : 'تم تجهيز ملخص الوثيقة.')}
                className="p-2 rounded-xl bg-[#092B3A] text-white hover:bg-[#087EA4]"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
