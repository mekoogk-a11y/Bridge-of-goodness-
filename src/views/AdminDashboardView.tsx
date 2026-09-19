import React, { useState, useEffect } from 'react';
import { PageId, Language, AdminRole, Volunteer, ProposedProject, Article } from '../types';
import { PROPOSED_PROJECTS, ALL_ARTICLES, SOUTH_SUDAN_STATES } from '../data/contentData';
import {
  Lock,
  LayoutDashboard,
  FileText,
  Layers,
  Users,
  HeartHandshake,
  MapPin,
  Settings,
  ShieldCheck,
  AlertTriangle,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  XCircle,
  Eye,
  LogOut
} from 'lucide-react';

interface AdminDashboardViewProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({ onNavigate, lang }) => {
  const isEn = lang === 'en';

  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'articles' | 'projects' | 'volunteers' | 'partnerships' | 'map' | 'settings'
  >('dashboard');

  const [role, setRole] = useState<AdminRole>('Super Admin');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // Dev default true, easily toggleable

  // Live state from localStorage or defaults
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [partnerships, setPartnerships] = useState<any[]>([]);
  const [projects, setProjects] = useState<ProposedProject[]>(PROPOSED_PROJECTS);
  const [articles, setArticles] = useState<Article[]>(ALL_ARTICLES);

  // New Article Form Modal
  const [showAddArticleModal, setShowAddArticleModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('كمال جعفر زكريا');
  const [newCategory, setNewCategory] = useState('Development');
  const [newExcerpt, setNewExcerpt] = useState('');
  const [newContent, setNewContent] = useState('');

  // Load persisted volunteers & partnerships
  useEffect(() => {
    try {
      const savedVols = localStorage.getItem('bgi_volunteers');
      if (savedVols) {
        setVolunteers(JSON.parse(savedVols));
      } else {
        // Seed initial mock review list
        const initialVols: Volunteer[] = [
          {
            id: 'vol-1',
            name: 'Mabior Deng',
            email: 'mabior.deng@example.com',
            country: 'South Sudan (Juba)',
            specialty: 'Community Health & Nutrition',
            interestArea: 'Health & Medical',
            message: 'Eager to assist in village primary health post mapping.',
            status: 'Under Review',
            submittedAt: '2026-09-18',
          },
          {
            id: 'vol-2',
            name: 'Sarah Akol',
            email: 'sarah.akol@example.com',
            country: 'Uganda / Diaspora',
            specialty: 'Primary Education Curriculum',
            interestArea: 'Education & Training',
            message: 'Ready to contribute pedagogical modules for rural teachers.',
            status: 'Contacted',
            submittedAt: '2026-09-17',
          },
        ];
        setVolunteers(initialVols);
        localStorage.setItem('bgi_volunteers', JSON.stringify(initialVols));
      }

      const savedPartners = localStorage.getItem('bgi_partnerships');
      if (savedPartners) {
        setPartnerships(JSON.parse(savedPartners));
      } else {
        const initialPartners = [
          {
            id: 'prt-1',
            organization: 'Nile Community Research Center',
            type: 'Academic / Research',
            contactName: 'Dr. John Garang',
            email: 'contact@nile-research.org',
            concept: 'Proposing joint field study on water retention in Jonglei.',
            submittedAt: '2026-09-16',
          },
        ];
        setPartnerships(initialPartners);
        localStorage.setItem('bgi_partnerships', JSON.stringify(initialPartners));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    const newArt: Article = {
      id: 'art-' + Date.now(),
      titleAr: newTitle,
      titleEn: newTitle,
      authorAr: newAuthor,
      authorEn: newAuthor,
      category: newCategory,
      publishedDate: new Date().toISOString().split('T')[0],
      readTimeAr: '5 دقائق',
      readTimeEn: '5 min read',
      excerptAr: newExcerpt || newTitle,
      excerptEn: newExcerpt || newTitle,
      contentAr: newContent,
      contentEn: newContent,
      isFeatured: false,
    };

    setArticles([newArt, ...articles]);
    setShowAddArticleModal(false);
    setNewTitle('');
    setNewExcerpt('');
    setNewContent('');
  };

  const handleUpdateVolStatus = (id: string, newStatus: 'Under Review' | 'Contacted' | 'Verified') => {
    const updated = volunteers.map((v) => (v.id === id ? { ...v, status: newStatus } : v));
    setVolunteers(updated);
    localStorage.setItem('bgi_volunteers', JSON.stringify(updated));
  };

  const handleDeleteVolunteer = (id: string) => {
    const updated = volunteers.filter((v) => v.id !== id);
    setVolunteers(updated);
    localStorage.setItem('bgi_volunteers', JSON.stringify(updated));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Admin Header Bar */}
      <div className="bg-[#092B3A] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-[#087EA4]/40">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-[#F2B84B] uppercase tracking-wider mb-1">
            <Lock className="w-3.5 h-3.5" />
            <span>{isEn ? 'BGI Institutional CMS & Admin' : 'لوحة التحكم والإدارة التأسيسية'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            {isEn ? 'Operations & Concept Management' : 'نظام إدارة المحتوى والمقترحات والشركاء'}
          </h1>
          <p className="text-xs text-slate-300 mt-1">
            {isEn ? 'Signed in as:' : 'الدور الحالي:'}{' '}
            <strong className="text-[#F2B84B]">{role}</strong>
          </p>
        </div>

        {/* Role Selector & Exit */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 text-xs">
            <span className="text-slate-300">{isEn ? 'Role:' : 'الصلاحية:'}</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as AdminRole)}
              className="bg-transparent text-white font-bold focus:outline-none cursor-pointer"
            >
              <option value="Super Admin" className="text-black">Super Admin (مشرف عام)</option>
              <option value="Editor" className="text-black">Editor (محرر مقالات)</option>
              <option value="Content Manager" className="text-black">Content Manager (مدير محتوى)</option>
              <option value="Map Manager" className="text-black">Map Manager (مدير الخريطة)</option>
            </select>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{isEn ? 'Exit to Site' : 'العودة للموقع'}</span>
          </button>
        </div>
      </div>

      {/* Main Admin Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar Tabs */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-4 border border-slate-200 shadow-md space-y-1.5 text-xs font-bold">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full text-start p-3 rounded-2xl flex items-center gap-2.5 transition-all ${
              activeTab === 'dashboard'
                ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>{isEn ? 'Overview Dashboard' : 'لوحة المؤشرات العامة'}</span>
          </button>

          <button
            onClick={() => setActiveTab('volunteers')}
            className={`w-full text-start p-3 rounded-2xl flex items-center justify-between transition-all ${
              activeTab === 'volunteers'
                ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4" />
              <span>{isEn ? 'Volunteers Registry' : 'سجل المتطوعين'}</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px]">
              {volunteers.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('partnerships')}
            className={`w-full text-start p-3 rounded-2xl flex items-center justify-between transition-all ${
              activeTab === 'partnerships'
                ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <HeartHandshake className="w-4 h-4" />
              <span>{isEn ? 'Partnership Requests' : 'طلبات الشراكة'}</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px]">
              {partnerships.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`w-full text-start p-3 rounded-2xl flex items-center gap-2.5 transition-all ${
              activeTab === 'articles'
                ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{isEn ? 'Articles & Editorial' : 'إدارة المقالات والأخبار'}</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`w-full text-start p-3 rounded-2xl flex items-center gap-2.5 transition-all ${
              activeTab === 'projects'
                ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{isEn ? 'Proposed Projects' : 'المشاريع المقترحة'}</span>
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`w-full text-start p-3 rounded-2xl flex items-center gap-2.5 transition-all ${
              activeTab === 'map'
                ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>{isEn ? 'States & Field Map' : 'بيانات الولايات والخريطة'}</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full text-start p-3 rounded-2xl flex items-center gap-2.5 transition-all ${
              activeTab === 'settings'
                ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>{isEn ? 'Legal & System Settings' : 'إعدادات الشفافية والنظام'}</span>
          </button>
        </div>

        {/* Dynamic Admin Content Column */}
        <div className="lg:col-span-9 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
          {/* A. DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#092B3A]">
                {isEn ? 'Foundational Activity Summary' : 'ملخص الأنشطة التأسيسية'}
              </h2>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-[#E0F2FE]/60 border border-[#087EA4]/20">
                  <span className="text-xs text-slate-500 font-bold block">
                    {isEn ? 'Volunteers Registered' : 'المتطوعون المسجلون'}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-[#087EA4]">
                    {volunteers.length}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#E6F7F2]/60 border border-[#159A72]/20">
                  <span className="text-xs text-slate-500 font-bold block">
                    {isEn ? 'Partnerships Inquired' : 'طلبات الشراكة'}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-[#159A72]">
                    {partnerships.length}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FEF3C7]/60 border border-[#F2B84B]/40">
                  <span className="text-xs text-slate-500 font-bold block">
                    {isEn ? 'Proposed Initiatives' : 'مشاريع قيد الدراسة'}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-700">
                    {projects.length}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                  <span className="text-xs text-slate-500 font-bold block">
                    {isEn ? 'States Tracked' : 'ولايات تحت المتابعة'}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-[#092B3A]">
                    10
                  </span>
                </div>
              </div>

              {/* Strict Regulatory Notice Enforcement Block */}
              <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-amber-800" />
                  <span>{isEn ? 'Integrity & Verification Mandate' : 'ميثاق النزاهة الإدارية الصارم:'}</span>
                </div>
                <p className="leading-relaxed">
                  «لا يجوز لأي مدير محتوى تحويل حالة أي مشروع إلى "منفذ" أو إدخال أرقام مستفيدين أو مبالغ تبرعات حتى تستكمل المبادرة تسجيلها القانوني وترخيصها الرسمي، وتخضع للمراجعة المالية الميدانية المعتمدة.»
                </p>
              </div>

              {/* Recent Volunteers List Preview */}
              <div>
                <h3 className="font-bold text-sm text-[#092B3A] mb-3">
                  {isEn ? 'Recent Volunteer Registrations:' : 'أحدث طلبات التطوع المستلمة:'}
                </h3>
                <div className="space-y-2">
                  {volunteers.slice(0, 3).map((v) => (
                    <div
                      key={v.id}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                    >
                      <div>
                        <strong className="text-slate-900">{v.name}</strong> ({v.specialty})
                        <span className="text-slate-400 block text-[10px]">{v.email} • {v.country}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
                        {v.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* B. VOLUNTEERS REGISTRY TAB */}
          {activeTab === 'volunteers' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#092B3A]">
                  {isEn ? 'Volunteer Registry' : 'سجل الراغبين في التطوع والمساهمة الفكرية'}
                </h2>
                <span className="text-xs text-slate-500 font-semibold">
                  {volunteers.length} {isEn ? 'Registered' : 'مسجل'}
                </span>
              </div>

              <div className="space-y-3">
                {volunteers.map((v) => (
                  <div
                    key={v.id}
                    className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2 text-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-sm text-[#092B3A]">{v.name}</h4>
                        <span className="text-slate-500">{v.email} • {v.country}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={v.status}
                          onChange={(e) =>
                            handleUpdateVolStatus(
                              v.id,
                              e.target.value as 'Under Review' | 'Contacted' | 'Verified'
                            )
                          }
                          className="p-1.5 rounded-lg border border-slate-200 text-xs bg-white font-semibold"
                        >
                          <option value="Under Review">Under Review (قيد المراجعة)</option>
                          <option value="Contacted">Contacted (تم التواصل)</option>
                          <option value="Verified">Verified (معتمد مبدئياً)</option>
                        </select>

                        <button
                          onClick={() => handleDeleteVolunteer(v.id)}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="حذف"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="text-slate-700 bg-white p-2.5 rounded-xl border border-slate-100">
                      <strong>{isEn ? 'Specialty / Field:' : 'التخصص:'}</strong> {v.specialty} ({v.interestArea})
                      {v.message && (
                        <p className="mt-1 text-slate-600 italic">“{v.message}”</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* C. PARTNERSHIPS TAB */}
          {activeTab === 'partnerships' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#092B3A]">
                {isEn ? 'Partnership Inquiries' : 'طلبات الشراكة والتعاون المؤسسي'}
              </h2>

              <div className="space-y-3">
                {partnerships.map((p) => (
                  <div key={p.id} className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-[#092B3A]">{p.organization}</h4>
                      <span className="px-2 py-0.5 rounded bg-[#087EA4]/10 text-[#087EA4] font-bold text-[10px]">
                        {p.type}
                      </span>
                    </div>

                    <div className="text-slate-600">
                      <span>{isEn ? 'Contact:' : 'المسؤول:'} {p.contactName} ({p.email})</span>
                      <p className="mt-1 bg-white p-2.5 rounded-xl border border-slate-100 text-slate-700">
                        {p.concept}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* D. ARTICLES TAB */}
          {activeTab === 'articles' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#092B3A]">
                  {isEn ? 'Articles Management' : 'إدارة ونشر المقالات الفكرية'}
                </h2>
                <button
                  onClick={() => setShowAddArticleModal(true)}
                  className="px-4 py-2 rounded-xl bg-[#092B3A] text-white text-xs font-bold hover:bg-[#087EA4] transition-colors flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isEn ? 'Write New Article' : 'كتابة مقال جديد'}</span>
                </button>
              </div>

              <div className="space-y-3">
                {articles.map((art) => (
                  <div
                    key={art.id}
                    className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#087EA4]">{art.category}</span>
                      <h4 className="font-bold text-sm text-[#092B3A]">{art.titleAr}</h4>
                      <span className="text-slate-400 text-[10px]">
                        {art.authorAr} • {art.date || art.publishedDate}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onNavigate('featured-article')}
                        className="p-1.5 text-slate-600 hover:text-[#087EA4]"
                        title="معاينة"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* E. PROPOSED PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#092B3A]">
                  {isEn ? 'Proposed Initiatives Portfolio' : 'إدارة حزمة المشاريع المقترحة'}
                </h2>
              </div>

              {/* Regulatory warning on project status */}
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-900">
                🔒 <strong>تنبيه إداري مقيّد:</strong> جميع المشاريع مقفلة إلزامياً على حالة «مشروع مقترح قيد الدراسة والتطوير». لا يمكن تغيير الحالة إلى «منفذ» قبل الحصول على موافقة مسجلة ومراجعة ميدانية معتمدة.
              </div>

              <div className="space-y-3">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-mono text-[10px] font-bold text-slate-500">{proj.code}</span>
                        <h4 className="font-bold text-sm text-[#092B3A]">{proj.titleAr}</h4>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                        {proj.badgeAr}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs">{proj.summaryAr}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* F. MAP STATES TAB */}
          {activeTab === 'map' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#092B3A]">
                {isEn ? 'South Sudan States Data Review' : 'مراجعة بيانات الولايات الـ 10 لجنوب السودان'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {SOUTH_SUDAN_STATES.map((st) => (
                  <div key={st.id} className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200">
                    <strong className="text-slate-900 block text-sm">{st.nameAr} ({st.capitalAr})</strong>
                    <span className="text-slate-500 text-[11px]">{st.regionAr}</span>
                    <p className="mt-1 text-slate-600 line-clamp-2">{st.overviewAr}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* G. SYSTEM & LEGAL SETTINGS */}
          {activeTab === 'settings' && (
            <div className="space-y-6 text-xs sm:text-sm">
              <h2 className="text-xl font-bold text-[#092B3A]">
                {isEn ? 'Institutional & Transparency Settings' : 'إعدادات الشفافية والامتثال القانوني'}
              </h2>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <label className="font-bold text-slate-800 block mb-1">
                    شارة الحالة القانونية الملزمة (Legal Status Badge)
                  </label>
                  <input
                    type="text"
                    disabled
                    value="فكرة تأسيسية قيد التطوير"
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-100 text-slate-600 cursor-not-allowed"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    مقفلة ومحمية من قبل النظام التأسيسي لضمان المصداقية.
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <label className="font-bold text-slate-800 block mb-1">
                    الشعار الرئيسي للمبادرة
                  </label>
                  <input
                    type="text"
                    disabled
                    value="نبني الإنسان… ونصنع جسوراً لمستقبل أفضل"
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-100 text-slate-600 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Article Modal */}
      {showAddArticleModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-lg text-[#092B3A]">
                {isEn ? 'Publish New Article / Insight' : 'نشر مقال فكري جديد'}
              </h3>
              <button
                onClick={() => setShowAddArticleModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddArticle} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-700 mb-1">عنوان المقال *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">الكاتب</label>
                  <input
                    type="text"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">التصنيف</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4] bg-white"
                  >
                    <option>Development</option>
                    <option>Education</option>
                    <option>Health</option>
                    <option>Youth</option>
                    <option>South Sudan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">موجز المقال</label>
                <input
                  type="text"
                  value={newExcerpt}
                  onChange={(e) => setNewExcerpt(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">نص المقال الكامل *</label>
                <textarea
                  rows={6}
                  required
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddArticleModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#092B3A] text-white text-xs font-bold hover:bg-[#087EA4]"
                >
                  حفظ ونشر المقال
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
