import React, { useState, useEffect } from 'react';
import { PageId, Language, AdminRole, Volunteer, ProposedProject, Article, DonationNotification } from '../types';
import { PROPOSED_PROJECTS, ALL_ARTICLES, SOUTH_SUDAN_STATES, INITIATIVE_INFO } from '../data/contentData';
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
  LogOut,
  Heart,
  Building2,
  Clock,
  ExternalLink,
  Check,
  Download
} from 'lucide-react';

interface AdminDashboardViewProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({ onNavigate, lang }) => {
  const isEn = lang === 'en';

  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'donations' | 'volunteers' | 'partnerships' | 'articles' | 'projects' | 'map' | 'settings'
  >('dashboard');

  const [role, setRole] = useState<AdminRole>('Super Admin');

  // Live state from localStorage or defaults
  const [donations, setDonations] = useState<DonationNotification[]>([]);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [partnerships, setPartnerships] = useState<any[]>([]);
  const [projects, setProjects] = useState<ProposedProject[]>(PROPOSED_PROJECTS);
  const [articles, setArticles] = useState<Article[]>(ALL_ARTICLES);

  // Filter for donations
  const [donationFilter, setDonationFilter] = useState<'All' | 'Pending' | 'Verified' | 'Rejected'>('All');
  const [selectedReceipt, setSelectedReceipt] = useState<DonationNotification | null>(null);

  // New Article Form Modal
  const [showAddArticleModal, setShowAddArticleModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('كمال جعفر زكريا');
  const [newCategory, setNewCategory] = useState('Development');
  const [newExcerpt, setNewExcerpt] = useState('');
  const [newContent, setNewContent] = useState('');

  // Load persisted data
  useEffect(() => {
    try {
      // 1. Donations
      const savedDonations = localStorage.getItem('bgi_donations');
      if (savedDonations) {
        setDonations(JSON.parse(savedDonations));
      } else {
        const initialDonations: DonationNotification[] = [
          {
            id: 'notif-1',
            name: 'عثمان عبد الله بشير',
            amount: '50,000 SDG',
            transferDate: '2026-09-18',
            referenceNumber: 'BOK-98231456',
            receiptName: 'bok_receipt_0918.pdf',
            message: 'مساهمة مباركة لدعم برنامج المياه والتعليم في الاستوائية.',
            submittedAt: '2026-09-18 14:32:10',
            status: 'Verified',
          },
          {
            id: 'notif-2',
            name: 'فاعلة خير - الخرطوم',
            amount: '30,000 SDG',
            transferDate: '2026-09-19',
            referenceNumber: 'BOK-77129034',
            receiptName: 'transfer_receipt.jpg',
            message: 'دعماً لمبادرة جسور الخير في مرحلة التأسيس.',
            submittedAt: '2026-09-19 09:15:40',
            status: 'Pending',
          },
        ];
        setDonations(initialDonations);
        localStorage.setItem('bgi_donations', JSON.stringify(initialDonations));
      }

      // 2. Volunteers
      const savedVols = localStorage.getItem('bgi_volunteers');
      if (savedVols) {
        setVolunteers(JSON.parse(savedVols));
      } else {
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

      // 3. Partnerships
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
      // Storage fallback
    }
  }, []);

  // Donation status update handler
  const handleUpdateDonationStatus = (id: string, newStatus: 'Pending' | 'Verified' | 'Rejected') => {
    const updated = donations.map((d) => (d.id === id ? { ...d, status: newStatus } : d));
    setDonations(updated);
    localStorage.setItem('bgi_donations', JSON.stringify(updated));
  };

  const handleDeleteDonation = (id: string) => {
    const updated = donations.filter((d) => d.id !== id);
    setDonations(updated);
    localStorage.setItem('bgi_donations', JSON.stringify(updated));
  };

  // Volunteer status update handler
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

  // Article creation
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

  const filteredDonations = donations.filter((d) => {
    if (donationFilter === 'All') return true;
    return d.status === donationFilter;
  });

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

          {/* Donations Tab with live badge */}
          <button
            onClick={() => setActiveTab('donations')}
            className={`w-full text-start p-3 rounded-2xl flex items-center justify-between transition-all ${
              activeTab === 'donations'
                ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Heart className="w-4 h-4 text-rose-500" />
              <span>{isEn ? 'Donations & Receipts' : 'سجل التبرعات والإشعارات'}</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold text-[10px]">
              {donations.length}
            </span>
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

              {/* Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-300">
                  <span className="text-xs text-amber-800 font-bold block">
                    {isEn ? 'Donations Logged' : 'إشعارات التبرع'}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-700">
                    {donations.length}
                  </span>
                </div>

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

                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                  <span className="text-xs text-slate-500 font-bold block">
                    {isEn ? 'Articles Published' : 'المقالات المنشورة'}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-[#092B3A]">
                    {articles.length}
                  </span>
                </div>
              </div>

              {/* Status Compliance Note */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="block text-sm">
                    {isEn ? 'Institutional Transparency Enforcement' : 'تنبيه الأمانة والشفافية المؤسسية'}
                  </strong>
                  <p className="leading-relaxed">
                    {isEn
                      ? 'All activities, donation notifications, and partnership submissions are stored securely in local browser storage for concept verification.'
                      : 'يتم تسجيل جميع إشعارات التبرعات وطلبات التطوع والشراكة بنظام تخزين محلي آمن، مع التأكيد على أن المبادرة في طور التأسيس وبنك الخرطوم هو الحساب المعتمد.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* B. DONATIONS TAB */}
          {activeTab === 'donations' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-[#092B3A] flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-500 fill-current" />
                    <span>{isEn ? 'Donation Notifications & Verification' : 'إشعارات التحويلات والتبرعات (بنك الخرطوم)'}</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    {isEn ? 'Account: 2813955 • Bank of Khartoum' : 'الحساب: 2813955 • بنك الخرطوم'}
                  </p>
                </div>

                {/* Filter buttons */}
                <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                  {(['All', 'Pending', 'Verified', 'Rejected'] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setDonationFilter(f)}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        donationFilter === f
                          ? 'bg-[#092B3A] text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {f === 'All' ? (isEn ? 'All' : 'الكل') : f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Donations List */}
              <div className="space-y-3">
                {filteredDonations.length === 0 ? (
                  <div className="text-center py-10 text-slate-400 text-xs">
                    {isEn ? 'No donation notifications found in this filter.' : 'لا توجد إشعارات تبرع ضمن هذا التصنيف.'}
                  </div>
                ) : (
                  filteredDonations.map((d) => (
                    <div
                      key={d.id}
                      className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-300 transition-colors space-y-3 text-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-[#092B3A]">{d.name}</span>
                            <span className="font-mono text-xs font-bold text-[#087EA4] bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                              {d.amount}
                            </span>
                          </div>
                          <p className="text-slate-500 text-[11px] mt-0.5">
                            {isEn ? 'Ref:' : 'رقم الإشعار / التحويل:'}{' '}
                            <strong className="font-mono text-slate-800">{d.referenceNumber}</strong> •{' '}
                            {isEn ? 'Date:' : 'التاريخ:'} {d.transferDate}
                          </p>
                        </div>

                        {/* Status dropdown & Actions */}
                        <div className="flex items-center gap-2">
                          <select
                            value={d.status}
                            onChange={(e) =>
                              handleUpdateDonationStatus(
                                d.id,
                                e.target.value as 'Pending' | 'Verified' | 'Rejected'
                              )
                            }
                            className={`p-1.5 rounded-lg border text-xs font-bold cursor-pointer ${
                              d.status === 'Verified'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                                : d.status === 'Rejected'
                                ? 'bg-rose-50 text-rose-800 border-rose-300'
                                : 'bg-amber-50 text-amber-800 border-amber-300'
                            }`}
                          >
                            <option value="Pending">Pending (قيد المراجعة)</option>
                            <option value="Verified">Verified (معتمد بنكياً)</option>
                            <option value="Rejected">Rejected (مرفوض / غير مطابق)</option>
                          </select>

                          {d.receiptDataUrl && (
                            <button
                              onClick={() => setSelectedReceipt(d)}
                              className="p-1.5 rounded-lg bg-white border border-slate-200 text-[#087EA4] hover:bg-sky-50"
                              title="عرض الإيصال المرفق"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          )}

                          <button
                            onClick={() => handleDeleteDonation(d.id)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="حذف السجل"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {d.message && (
                        <div className="bg-white p-2.5 rounded-xl border border-slate-100 text-slate-700 italic">
                          “{d.message}”
                        </div>
                      )}

                      {d.receiptName && (
                        <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>{isEn ? 'Attached receipt:' : 'الإيصال المرفق:'} {d.receiptName}</span>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* C. VOLUNTEERS TAB */}
          {activeTab === 'volunteers' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#092B3A]">
                {isEn ? 'Volunteer Talent Pool' : 'سجل طلبات التطوع والمبادرات الفردية'}
              </h2>

              <div className="space-y-3">
                {volunteers.map((v) => (
                  <div
                    key={v.id}
                    className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-2 text-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
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

          {/* D. PARTNERSHIPS TAB */}
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

          {/* E. ARTICLES TAB */}
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
                        onClick={() => onNavigate('articles')}
                        className="p-1.5 text-slate-600 hover:bg-slate-200 rounded-lg"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* F. PROPOSED PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#092B3A]">
                {isEn ? 'Conceptual Projects Pipeline' : 'أفق المشاريع والبرامج المقترحة'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-slate-500">{proj.code}</span>
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px]">
                        {proj.badgeAr}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-[#092B3A]">{proj.titleAr}</h4>
                    <p className="text-slate-600 leading-relaxed">{proj.summaryAr}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* G. STATES & FIELD MAP TAB */}
          {activeTab === 'map' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#092B3A]">
                {isEn ? 'South Sudan 10 States Geographic Index' : 'فهرس الولايات العشر - جنوب السودان'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {SOUTH_SUDAN_STATES.map((st) => (
                  <div key={st.id} className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-[#092B3A]">{st.nameAr} ({st.nameEn})</h4>
                      <span className="text-[10px] text-slate-500">{st.capitalAr}</span>
                    </div>
                    <p className="text-slate-600 line-clamp-2">{isEn ? st.overviewEn : st.overviewAr}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* H. SETTINGS & TRANSPARENCY TAB */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#092B3A]">
                {isEn ? 'Initiative Metadata & Legal Status' : 'إعدادات هوية المبادرة والوضع القانوني'}
              </h2>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-3">
                <div>
                  <span className="font-bold text-slate-700 block mb-1">الاسم باللغة العربية:</span>
                  <input
                    type="text"
                    disabled
                    value={INITIATIVE_INFO.nameAr}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-bold"
                  />
                </div>
                <div>
                  <span className="font-bold text-slate-700 block mb-1">الشعار الرئيسي:</span>
                  <input
                    type="text"
                    disabled
                    value={INITIATIVE_INFO.taglineAr}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white"
                  />
                </div>
                <div>
                  <span className="font-bold text-slate-700 block mb-1">الحالة القانونية:</span>
                  <input
                    type="text"
                    disabled
                    value={INITIATIVE_INFO.legalStatusBadgeAr}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-emerald-50 text-emerald-900 font-bold"
                  />
                </div>
                <div>
                  <span className="font-bold text-slate-700 block mb-1">حساب بنك الخرطوم المعتمد:</span>
                  <input
                    type="text"
                    disabled
                    value={`${INITIATIVE_INFO.donation.accountNumber} (${INITIATIVE_INFO.donation.accountNameAr})`}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-amber-50 text-amber-950 font-mono font-bold"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Receipt Proof Preview Modal */}
      {selectedReceipt && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-sm text-[#092B3A]">
                {isEn ? 'Receipt Proof Preview' : 'معاينة إشعار التحويل البنكي'}
              </h3>
              <button
                onClick={() => setSelectedReceipt(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="text-xs space-y-2">
              <p><strong>{isEn ? 'Donor:' : 'المتبرع:'}</strong> {selectedReceipt.name}</p>
              <p><strong>{isEn ? 'Amount:' : 'المبلغ:'}</strong> {selectedReceipt.amount}</p>
              <p><strong>{isEn ? 'Reference:' : 'رقم الإشعار:'}</strong> {selectedReceipt.referenceNumber}</p>
            </div>

            {selectedReceipt.receiptDataUrl ? (
              <div className="max-h-80 overflow-y-auto rounded-xl border border-slate-200 p-2 bg-slate-50 flex items-center justify-center">
                <img
                  src={selectedReceipt.receiptDataUrl}
                  alt="Receipt Preview"
                  className="max-h-72 object-contain rounded-lg"
                />
              </div>
            ) : (
              <div className="p-6 bg-slate-50 rounded-xl text-center text-slate-500 text-xs">
                {selectedReceipt.receiptName || (isEn ? 'No image attached.' : 'لا توجد صورة إيصال مرفقة.')}
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedReceipt(null)}
                className="px-4 py-2 rounded-xl bg-[#092B3A] text-white text-xs font-bold"
              >
                {isEn ? 'Close' : 'إغلاق'}
              </button>
            </div>
          </div>
        </div>
      )}

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
