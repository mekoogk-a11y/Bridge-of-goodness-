import React, { useState } from 'react';
import { PageId, Language, Volunteer } from '../types';
import {
  HeartHandshake,
  Users,
  Compass,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Globe
} from 'lucide-react';

interface InvolvementViewProps {
  pageId: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const InvolvementView: React.FC<InvolvementViewProps> = ({
  pageId,
  onNavigate,
  lang,
}) => {
  const isEn = lang === 'en';

  // Volunteer Form State
  const [volName, setVolName] = useState('');
  const [volEmail, setVolEmail] = useState('');
  const [volCountry, setVolCountry] = useState('South Sudan');
  const [volSpecialty, setVolSpecialty] = useState('');
  const [volInterest, setVolInterest] = useState('Education & Training');
  const [volMessage, setVolMessage] = useState('');
  const [volSubmitted, setVolSubmitted] = useState(false);

  // Partnership Form State
  const [partnerOrg, setPartnerOrg] = useState('');
  const [partnerType, setPartnerType] = useState('Non-Profit Organization');
  const [partnerContact, setPartnerContact] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerIdea, setPartnerIdea] = useState('');
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volName || !volEmail) return;

    const newVolunteer: Volunteer = {
      id: 'vol-' + Date.now(),
      name: volName,
      email: volEmail,
      country: volCountry,
      specialty: volSpecialty || 'General Volunteer',
      interestArea: volInterest,
      message: volMessage,
      status: 'Under Review',
      submittedAt: new Date().toISOString().split('T')[0],
    };

    // Store in localStorage for Admin Dashboard
    try {
      const existing = JSON.parse(localStorage.getItem('bgi_volunteers') || '[]');
      existing.unshift(newVolunteer);
      localStorage.setItem('bgi_volunteers', JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    setVolSubmitted(true);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerOrg || !partnerEmail) return;

    // Store in localStorage for Admin Dashboard
    try {
      const existing = JSON.parse(localStorage.getItem('bgi_partnerships') || '[]');
      existing.unshift({
        id: 'prt-' + Date.now(),
        organization: partnerOrg,
        type: partnerType,
        contactName: partnerContact,
        email: partnerEmail,
        concept: partnerIdea,
        submittedAt: new Date().toISOString().split('T')[0],
      });
      localStorage.setItem('bgi_partnerships', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setPartnerSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Header with Breadcrumb */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
          <button onClick={() => onNavigate('home')} className="hover:text-[#087EA4]">
            {isEn ? 'Home' : 'الرئيسية'}
          </button>
          <span>/</span>
          <span className="text-[#087EA4]">
            {pageId === 'partnerships' && (isEn ? 'Partnerships' : 'الشراكات: نبني الجسور معاً')}
            {pageId === 'volunteers' && (isEn ? 'Volunteers' : 'المتطوعون: كن جزءاً من الجسر')}
            {pageId === 'advisors' && (isEn ? 'Advisory Network' : 'الخبراء والمستشارون')}
            {pageId === 'contact' && (isEn ? 'Contact Us' : 'تواصل معنا')}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#092B3A] tracking-tight">
              {pageId === 'partnerships' && (isEn ? 'Building Bridges… Together' : '«نبني الجسور… معاً»')}
              {pageId === 'volunteers' && (isEn ? 'Be Part of the Bridge' : '«كن جزءاً من الجسر»')}
              {pageId === 'advisors' && (isEn ? 'Advisory & Expert Network' : 'شبكة الخبراء والمستشارين')}
              {pageId === 'contact' && (isEn ? 'Connect With BGI' : 'تواصل مع مبادرة جسور الخير')}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              {isEn
                ? 'Join our collaborative network of institutions, experts, and passionate volunteers to shape resilient pathways for South Sudan.'
                : 'نرحب بالمؤسسات والخبراء والمتطوعين الراغبين في تبادل الرؤى وتقديم الخبرات لبلورة نموذج تنموي راسخ يخدم الإنسان.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('partnerships')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                pageId === 'partnerships'
                  ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              🤝 {isEn ? 'Partnerships' : 'الشراكات'}
            </button>
            <button
              onClick={() => onNavigate('volunteers')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                pageId === 'volunteers'
                  ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              🙋 {isEn ? 'Volunteers' : 'المتطوعون'}
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                pageId === 'contact'
                  ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              ✉️ {isEn ? 'Contact' : 'تواصل'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. PARTNERSHIPS PAGE */}
      {pageId === 'partnerships' && (
        <div className="space-y-10">
          {/* Institutional Intro */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <h2 className="text-2xl font-black text-[#092B3A] mb-4">
              {isEn ? 'Future Institutional Alliances' : 'من نرحب بالشراكة معهم مستقبلاً'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              {isEn
                ? 'We invite future dialogues with local, regional, and international institutions that share our conviction that human capability and community self-reliance are the only sustainable path.'
                : 'تتطلع مبادرة جسور الخير إلى بناء شراكات استراتيجية رصينة مع مختلف الكيانات المعنية بتنمية الإنسان وبناء السلام في جنوب السودان:'}
            </p>

            {/* 12 Types of Partners Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-medium">
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-3">
                <Building className="w-5 h-5 text-[#087EA4] shrink-0" />
                <span>المؤسسات والمنظمات الإنسانية الإقليمية والدولية</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#159A72] shrink-0" />
                <span>الجامعات ومراكز البحوث والدراسات التنموية</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-3">
                <Users className="w-5 h-5 text-[#F2B84B] shrink-0" />
                <span>الإدارات الأهلية وقادة المجتمعات المحلية</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-[#092B3A] shrink-0" />
                <span>القطاع الخاص والشركات الوطنية المسؤولة مجتمعياً</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#087EA4] shrink-0" />
                <span>أبناء جنوب السودان في المهجر والشتات</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-[#159A72] shrink-0" />
                <span>الاتحادات الشبابية والروابط النسوية المستقلة</span>
              </div>
            </div>
          </div>

          {/* Partnership Exploration Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <h3 className="text-xl font-bold text-[#092B3A] mb-2">
              {isEn ? 'Propose an Institutional Dialogue or Partnership' : 'استمارة استكشاف شراكة أو تعاون مؤسسي'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              {isEn
                ? 'Share your organization profile and potential cooperation horizons.'
                : 'شاركنا نبذة عن مؤسستكم ومجالات التعاون المستقبلي المقترحة.'}
            </p>

            {partnerSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-base">
                  {isEn ? 'Thank you! Your inquiry has been logged.' : 'شكراً جزيلاً! تم استلام مقترح الشراكة بنجاح.'}
                </h4>
                <p className="text-xs text-emerald-700">
                  {isEn
                    ? 'Our foundational relations team will review your submission.'
                    : 'سيقوم فريق العلاقات المؤسسية بمراجعة المقترح والتواصل معكم.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      {isEn ? 'Organization Name' : 'اسم الجهة / المؤسسة'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerOrg}
                      onChange={(e) => setPartnerOrg(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                      placeholder="مثال: مركز الأبحاث التنموية"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      {isEn ? 'Organization Type' : 'نوع الجهة'}
                    </label>
                    <select
                      value={partnerType}
                      onChange={(e) => setPartnerType(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4] bg-white"
                    >
                      <option>Academic / University / Research</option>
                      <option>International Humanitarian Agency</option>
                      <option>Local Community Organization</option>
                      <option>Private Sector / Corporate</option>
                      <option>Diaspora Network</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      {isEn ? 'Contact Person Name' : 'اسم ممثل الجهة'}
                    </label>
                    <input
                      type="text"
                      value={partnerContact}
                      onChange={(e) => setPartnerContact(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      {isEn ? 'Official Email' : 'البريد الإلكتروني الرسمي'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={partnerEmail}
                      onChange={(e) => setPartnerEmail(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                      placeholder="name@organization.org"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {isEn ? 'Proposed Horizon of Cooperation' : 'مجال أو فكرة التعاون المقترحة'}
                  </label>
                  <textarea
                    rows={4}
                    value={partnerIdea}
                    onChange={(e) => setPartnerIdea(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                    placeholder="اكتب نبذة عن مجالات التعاون التنموي أو الأكاديمي..."
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#092B3A] text-white font-bold hover:bg-[#087EA4] transition-colors"
                >
                  {isEn ? 'Submit Partnership Inquiry' : 'إرسال طلب استكشاف الشراكة'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 3. VOLUNTEERS PAGE: "كن جزءاً من الجسر" */}
      {pageId === 'volunteers' && (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-black text-[#092B3A] mb-3">
              {isEn ? 'Be Part of the Bridge (Volunteer Network)' : '«كن جزءاً من الجسر» - شبكة المتطوعين'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              {isEn
                ? 'Join our voluntary brain trust. We welcome passionate individuals who wish to contribute their skills in field research, translation, healthcare, pedagogy, agricultural knowledge, and media production.'
                : 'نؤمن في جسور الخير بأن التطوع هو جوهر العمل الإنساني النبيل. نفتح باب تسجيل الاهتمام للكفاءات الوطنية وأصحاب الخبرات والشباب الراغبين في المساهمة بجهدهم ومعارفهم في مرحلة التأسيس.'}
            </p>

            {/* Mandatory Regulatory Transparency Notice */}
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 leading-relaxed mb-8 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-0.5">
                  {isEn ? 'Notice on Volunteer Registration:' : 'تنبيه الشفافية والمصداقية:'}
                </strong>
                {isEn
                  ? 'Registration expresses initial interest in voluntary and conceptual contribution. It carries no contractual, employment, or financial commitments in this foundational stage.'
                  : '«تسجيل الاهتمام هو تعبير مبدئي عن الرغبة في التطوع والمساهمة الفكرية أو الميدانية، ولا يترتب عليه أي التزام تعاقدي أو وظيفي أو مالي في هذه المرحلة التأسيسية.»'}
              </div>
            </div>

            {/* Volunteer Form */}
            {volSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-emerald-900">
                  {isEn ? 'Thank you! Your interest has been received.' : 'تم تسجيل اهتمامك بنجاح!'}
                </h3>
                <p className="text-sm text-emerald-700 max-w-lg mx-auto leading-relaxed">
                  {isEn
                    ? 'Your profile has been saved to the foundational volunteer registry. We appreciate your dedication to South Sudan.'
                    : 'تم حفظ بياناتك في سجل المتطوعين المبدئي للمبادرة. نقدر عالياً رغبتك الصادقة في مد جسور الأمل لجنوب السودان.'}
                </p>
                <button
                  onClick={() => setVolSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl bg-white border border-emerald-300 text-xs font-bold text-emerald-900"
                >
                  {isEn ? 'Register Another' : 'تسجيل اهتمام آخر'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} className="space-y-5 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      {isEn ? 'Full Name' : 'الاسم الكامل'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={volName}
                      onChange={(e) => setVolName(e.target.value)}
                      placeholder="مثال: ميري دينق أو كمال علي"
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      {isEn ? 'Email Address' : 'البريد الإلكتروني'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={volEmail}
                      onChange={(e) => setVolEmail(e.target.value)}
                      placeholder="your.email@domain.com"
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      {isEn ? 'Country / State of Residence' : 'الدولة / الولاية الحالية'}
                    </label>
                    <input
                      type="text"
                      value={volCountry}
                      onChange={(e) => setVolCountry(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      {isEn ? 'Specialty / Profession' : 'التخصص العلمي / المهني'}
                    </label>
                    <input
                      type="text"
                      value={volSpecialty}
                      onChange={(e) => setVolSpecialty(e.target.value)}
                      placeholder="مثال: تعليم، طب، هندسة مياه، إعلام"
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      {isEn ? 'Preferred Field of Volunteering' : 'مجال التطوع المفضل'}
                    </label>
                    <select
                      value={volInterest}
                      onChange={(e) => setVolInterest(e.target.value)}
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4] bg-white"
                    >
                      <option>Education & Training (التعليم والتدريب)</option>
                      <option>Health & Medical (الصحة والرعاية)</option>
                      <option>Agriculture & Water (الزراعة والمياه)</option>
                      <option>Media & Documentation (الإعلام والتوثيق)</option>
                      <option>Research & Field Studies (الدراسات والبحوث)</option>
                      <option>Youth Programs (برامج الشباب والرياضة)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {isEn ? 'How would you like to contribute?' : 'كيف ترغب في المساهمة وما هي رؤيتك؟'}
                  </label>
                  <textarea
                    rows={4}
                    value={volMessage}
                    onChange={(e) => setVolMessage(e.target.value)}
                    placeholder="اكتب نبذة عن خبراتك وفكرتك للمساهمة في بناء جسور الخير..."
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#087EA4] to-[#159A72] text-white font-bold hover:brightness-110 transition-all shadow-md"
                >
                  {isEn ? 'Submit Volunteer Interest' : 'تسجيل الاهتمام بالتطوع'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 4. ADVISORY NETWORK */}
      {pageId === 'advisors' && (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-black text-[#092B3A] mb-3">
              {isEn ? 'Expert & Advisory Network' : 'شبكة الخبراء والمستشارين'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              {isEn
                ? 'We rely on senior academic, community, and developmental advisors to rigorously review all our proposed interventions.'
                : 'تسعى جسور الخير لتشكيل مجلس استشاري يضم كبار المفكرين والخبراء التنمويين وقادة المجتمعات لضمان سلامة التوجه وكفاءة التخطيط.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <span className="text-xs font-bold text-[#087EA4] uppercase tracking-wider block mb-2">
                  01
                </span>
                <h3 className="font-bold text-[#092B3A] mb-2">
                  {isEn ? 'Academic & Research Review' : 'المراجعة الأكاديمية والبحثية'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  فحص الدراسات الميدانية وتدقيق البيانات لضمان الموثوقية التامة.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <span className="text-xs font-bold text-[#159A72] uppercase tracking-wider block mb-2">
                  02
                </span>
                <h3 className="font-bold text-[#092B3A] mb-2">
                  {isEn ? 'Cultural & Community Sensitivity' : 'المواءمة الثقافية والمجتمعية'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  التأكد من انسجام البرامج مع خصوصية الأعراف والتقاليد المحلية.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <span className="text-xs font-bold text-[#F2B84B] uppercase tracking-wider block mb-2">
                  03
                </span>
                <h3 className="font-bold text-[#092B3A] mb-2">
                  {isEn ? 'Governance & Safeguarding' : 'الحوكمة وصون الكرامة'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  تطبيق أعلى معايير النزاهة وحماية الفئات الأشد احتياجاً.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. CONTACT US */}
      {pageId === 'contact' && (
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-black text-[#092B3A] mb-3">
              {isEn ? 'Contact Bridges of Goodness' : 'تواصل مع مبادرة جسور الخير'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              {isEn
                ? 'For foundational inquiries, conceptual dialogues, and academic coordination.'
                : 'للاستفسارات التأسيسية، الحوارات الفكرية، والتنسيق الأكاديمي والمجتمعي.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#087EA4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">
                      {isEn ? 'Electronic Communication:' : 'البريد الإلكتروني التأسيسي:'}
                    </strong>
                    <span className="font-mono text-xs text-[#087EA4]">
                      info@bridgesofgoodness.org
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-3">
                  <Globe className="w-5 h-5 text-[#159A72] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">
                      {isEn ? 'Geographic Framework:' : 'النطاق الجغرافي الميداني:'}
                    </strong>
                    <span>{isEn ? 'Juba, South Sudan & Partner Networks' : 'جوبا، جنوب السودان، وشبكات التعاون'}</span>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  ⚠️ {isEn
                    ? 'BGI does not solicit financial donations via phone or unverified channels.'
                    : 'تنبيه: لا تجمع المبادرة تبرعات مالية عبر أي حسابات بنكية أو أرقام هواتف في هذه المرحلة التأسيسية.'}
                </div>
              </div>

              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(isEn ? 'Your message has been sent!' : 'تم إرسال رسالتك بنجاح، شكراً لتواصلك.');
                  }}
                  className="space-y-4 text-xs sm:text-sm"
                >
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      {isEn ? 'Your Name' : 'الاسم'} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      {isEn ? 'Your Email' : 'البريد الإلكتروني'} *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      {isEn ? 'Message' : 'الرسالة'} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#092B3A] text-white font-bold hover:bg-[#087EA4] transition-colors"
                  >
                    {isEn ? 'Send Message' : 'إرسال الرسالة'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
