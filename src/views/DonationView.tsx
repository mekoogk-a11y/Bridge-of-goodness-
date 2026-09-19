import React, { useState } from 'react';
import { PageId, Language, DonationNotification } from '../types';
import { INITIATIVE_INFO } from '../data/contentData';
import {
  Heart,
  Copy,
  Check,
  Building2,
  AlertTriangle,
  UploadCloud,
  FileCheck,
  Send,
  ShieldCheck,
  Info,
  Clock,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Lock
} from 'lucide-react';

interface DonationViewProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const DonationView: React.FC<DonationViewProps> = ({ onNavigate, lang }) => {
  const isEn = lang === 'en';
  const [copied, setCopied] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('SDG');
  const [transferDate, setTransferDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [referenceNumber, setReferenceNumber] = useState('');
  const [message, setMessage] = useState('');
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const accountNumber = INITIATIVE_INFO.donation.accountNumber;
  const bankName = isEn ? INITIATIVE_INFO.donation.bankNameEn : INITIATIVE_INFO.donation.bankNameAr;
  const accountName = isEn ? INITIATIVE_INFO.donation.accountNameEn : INITIATIVE_INFO.donation.accountNameAr;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 3500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setReceiptFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setReceiptPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !amount || !referenceNumber) return;

    setIsSubmitting(true);

    const newNotification: DonationNotification = {
      id: 'notif-' + Date.now(),
      name,
      amount: `${amount} ${currency}`,
      transferDate,
      referenceNumber,
      receiptName: receiptFile?.name || '',
      receiptDataUrl: receiptPreview || undefined,
      message,
      submittedAt: new Date().toISOString().replace('T', ' ').substring(0, 19),
      status: 'Pending',
    };

    try {
      const existing = JSON.parse(localStorage.getItem('bgi_donations') || '[]');
      existing.unshift(newNotification);
      localStorage.setItem('bgi_donations', JSON.stringify(existing));
    } catch {
      // Storage fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#159A72]/10 border border-[#159A72]/20 text-[#159A72] text-xs font-bold">
          <Heart className="w-4 h-4 fill-current text-rose-500" />
          <span>{isEn ? INITIATIVE_INFO.legalStatusBadgeEn : INITIATIVE_INFO.legalStatusBadgeAr}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#092B3A] tracking-tight">
          {isEn ? INITIATIVE_INFO.donation.titleEn : INITIATIVE_INFO.donation.titleAr}
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
          {isEn ? INITIATIVE_INFO.donation.descriptionEn : INITIATIVE_INFO.donation.descriptionAr}
        </p>
      </div>

      {/* Main Bank of Khartoum Card */}
      <div className="bg-gradient-to-br from-[#092B3A] via-[#0D384C] to-[#092B3A] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#087EA4]/30 relative overflow-hidden">
        {/* Subtle Bridge background curve */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 C30,40 70,40 100,100 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="relative z-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#087EA4]/30 border border-[#087EA4]/50 flex items-center justify-center text-[#F2B84B] shadow-inner">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[#E8D8B8] font-bold uppercase tracking-wider block">
                  {isEn ? 'Current Official Donation Method' : 'طريقة التبرع المعتمدة حالياً'}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white">{bankName}</h2>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-200 text-xs">
              <AlertTriangle className="w-4 h-4 text-[#F2B84B] shrink-0" />
              <span>{isEn ? INITIATIVE_INFO.donation.verifyNoticeEn : INITIATIVE_INFO.donation.verifyNoticeAr}</span>
            </div>
          </div>

          {/* Account Number Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 bg-black/30 rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>{isEn ? 'Beneficiary Name:' : 'اسم الحساب المستفيد:'}</span>
                <span className="font-bold text-white">{accountName}</span>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/10">
                <span className="text-xs text-[#E8D8B8] font-bold uppercase tracking-wider block">
                  {isEn ? 'Bank Account Number' : 'رقم الحساب المصرفي'}
                </span>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <span className="font-mono text-3xl sm:text-4xl font-black tracking-widest text-[#F2B84B] select-all">
                    {accountNumber}
                  </span>
                  <button
                    onClick={handleCopyAccount}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#087EA4] hover:bg-[#066787] active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span className="text-emerald-200 font-bold">
                          {isEn ? 'Account Copied Successfully!' : 'تم نسخ رقم الحساب بنجاح'}
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>{isEn ? 'Copy Account Number' : 'نسخ رقم الحساب'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {copied && (
                <p className="text-[12px] text-emerald-300 flex items-center gap-1.5 pt-1 animate-in fade-in duration-200">
                  <Check className="w-3.5 h-3.5" />
                  <span>
                    {isEn
                      ? 'The account number 2813955 was copied to your clipboard.'
                      : 'تم نسخ الرقم 2813955 إلى الحافظة بنجاح.'}
                  </span>
                </p>
              )}
            </div>

            <div className="lg:col-span-5 space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed bg-white/5 rounded-2xl p-6 border border-white/5">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#159A72] shrink-0 mt-0.5" />
                <p>
                  {isEn
                    ? 'BGI does not use third-party electronic payment gateways. Transfers occur directly and securely through Bank of Khartoum.'
                    : 'لا تستخدم المبادرة بوابات دفع إلكترونية وهمية أو غير معتمدة، بل يتم التحويل المباشر عبر تطبيق بنك الخرطوم (بنكك) أو الفروع الرسمية.'}
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Info className="w-5 h-5 text-[#087EA4] shrink-0 mt-0.5" />
                <p>
                  {isEn
                    ? 'After completing your transfer, you may optionally send a transfer notification below for administrative logging.'
                    : 'بعد إتمام التحويل، يُتاح لك إرسال إشعار تبرع بالأسفل لتوثيق وتدقيق المساهمة في سجلات الإدارة المالية.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donation Notification Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
        <div className="border-b border-slate-100 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#087EA4] uppercase tracking-wider block mb-1">
              {isEn ? 'Step 2 (Optional)' : 'الخطوة الثانية (اختياري)'}
            </span>
            <h3 className="text-2xl font-black text-[#092B3A]">
              {isEn ? 'Donation Notification Form' : 'إشعار تحويل التبرع'}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              {isEn
                ? 'Inform our administrative and finance team of your transfer for recordkeeping.'
                : 'أبلغ الإدارة المالية للمبادرة بتفاصيل التحويل لتوثيقها وتدقيقها في السجلات.'}
            </p>
          </div>

          <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-900 max-w-md flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="font-semibold leading-relaxed">
              {isEn
                ? INITIATIVE_INFO.donation.notificationNoticeEn
                : INITIATIVE_INFO.donation.notificationNoticeAr}
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-12 px-4 space-y-4 max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <FileCheck className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-[#092B3A]">
              {isEn ? 'Donation Notification Sent!' : 'تم إرسال إشعار التبرع بنجاح'}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {isEn
                ? 'Thank you for your generous contribution. The administrative team will verify the transfer against bank records. Your information is stored privately and securely.'
                : 'شكراً لمساهمتك الكريمة. سيقوم الفريق الإداري والمالي بمطابقة البيانات مع الكشوفات المصرفية. جميع بياناتك محفوظة بسرية وأمان تام.'}
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setAmount('');
                  setReferenceNumber('');
                  setMessage('');
                  setReceiptFile(null);
                  setReceiptPreview(null);
                }}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
              >
                {isEn ? 'Submit Another Notification' : 'إرسال إشعار آخر'}
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="px-5 py-2.5 rounded-xl bg-[#092B3A] text-white font-bold text-xs hover:bg-[#087EA4] transition-colors"
              >
                {isEn ? 'Return Home' : 'العودة للرئيسية'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmitNotification} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Donor Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {isEn ? 'Full Name / Donor Name' : 'الاسم الكامل / اسم المتبرع'} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isEn ? 'e.g. Ahmed Adam' : 'مثال: أحمد آدم محمد'}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4] focus:ring-2 focus:ring-[#087EA4]/20 text-sm transition-all"
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {isEn ? 'Donation Amount' : 'مبلغ التبرع'} *
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="1"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="50000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4] focus:ring-2 focus:ring-[#087EA4]/20 text-sm font-mono transition-all"
                  />
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="px-3 py-3 rounded-xl border border-slate-200 text-xs font-bold bg-slate-50 focus:outline-none focus:border-[#087EA4]"
                  >
                    <option value="SDG">SDG (جنيه)</option>
                    <option value="SSP">SSP (جنيه ج.س)</option>
                    <option value="USD">USD ($)</option>
                  </select>
                </div>
              </div>

              {/* Transfer Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {isEn ? 'Transfer Date' : 'تاريخ التحويل'} *
                </label>
                <input
                  type="date"
                  required
                  value={transferDate}
                  onChange={(e) => setTransferDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4] focus:ring-2 focus:ring-[#087EA4]/20 text-sm transition-all"
                />
              </div>

              {/* Reference / Transaction ID */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {isEn ? 'Bank Reference Number (Ref ID)' : 'الرقم المرجعي للإشعار (Ref ID)'} *
                </label>
                <input
                  type="text"
                  required
                  value={referenceNumber}
                  onChange={(e) => setReferenceNumber(e.target.value)}
                  placeholder="e.g. TRX-9823145"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4] focus:ring-2 focus:ring-[#087EA4]/20 text-sm font-mono transition-all"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  {isEn ? 'Appears on your Bankak receipt' : 'الرقم المطبوع في إشعار بنكك'}
                </p>
              </div>

              {/* Receipt Upload */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {isEn ? 'Upload Transfer Receipt (Optional)' : 'إرفاق صورة الإشعار (اختياري)'}
                </label>
                <div className="border-2 border-dashed border-slate-200 hover:border-[#087EA4] rounded-2xl p-4 transition-colors flex items-center justify-between gap-4 bg-slate-50/50">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-[#087EA4]/10 text-[#087EA4] flex items-center justify-center shrink-0">
                      <UploadCloud className="w-5 h-5" />
                    </div>
                    <div className="text-xs truncate">
                      {receiptFile ? (
                        <span className="font-bold text-emerald-700 block truncate">
                          {receiptFile.name}
                        </span>
                      ) : (
                        <span className="text-slate-500">
                          {isEn ? 'PNG, JPG or PDF up to 5MB' : 'صورة أو ملف PDF حتى 5 ميجابايت'}
                        </span>
                      )}
                    </div>
                  </div>

                  <label className="cursor-pointer px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 shadow-xs shrink-0">
                    <span>{isEn ? 'Choose File' : 'اختيار ملف'}</span>
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Optional Message */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {isEn ? 'Message or Specific Allocation Note (Optional)' : 'ملاحظات أو رغبة توجيه معينة (اختياري)'}
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  isEn
                    ? 'Optional notes regarding your contribution (e.g. education, water, general support)...'
                    : 'ملاحظات اختيارية بخصوص المساهمة (مثلاً: رغبة في دعم برامج التعليم، المياه، أو دعم عام)...'
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4] focus:ring-2 focus:ring-[#087EA4]/20 text-sm transition-all"
              />
            </div>

            {/* Privacy note */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-xs text-slate-600">
              <Lock className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                {isEn
                  ? 'Data Protection: Donor names and financial information are kept strictly confidential in internal records and are never displayed publicly.'
                  : 'حماية البيانات: معلومات المتبرعين والمبالغ تظل سرية ومحفوظة ضمن السجلات الإدارية الداخلية ولا تُنشر مطلقاً في الواجهات العامة.'}
              </span>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#092B3A] hover:bg-[#087EA4] text-white font-black text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isSubmitting
                    ? (isEn ? 'Submitting...' : 'جارٍ الإرسال...')
                    : (isEn ? 'Submit Donation Notification' : 'إرسال إشعار التبرع')}
                </span>
              </button>

              <span className="text-xs text-slate-500 text-center sm:text-start">
                {isEn
                  ? 'Bank transfer receipt verification typically occurs within 24-48 hours.'
                  : 'تتم مراجعة ومطابقة الإشعارات البنكية عادة خلال 24 إلى 48 ساعة عمل.'}
              </span>
            </div>
          </form>
        )}
      </div>

      {/* Frequently Asked Donation Questions */}
      <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
        <h4 className="font-bold text-[#092B3A] text-lg">
          {isEn ? 'Key Inquiries Regarding Contributions' : 'توضيحات هامة بشأن التبرعات والمساهمات'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1">
            <strong className="text-slate-900 block">
              {isEn ? 'Why is Bank of Khartoum the sole method now?' : 'لماذا بنك الخرطوم هو القناة المعتمدة حالياً؟'}
            </strong>
            <p>
              {isEn
                ? 'Because the initiative is currently in a foundational stage, financial transfers are routed directly and securely through this official account without third-party electronic intermediaries.'
                : 'نظراً لأن المبادرة في طورها التأسيسي، فإن التحويلات المصرفية المباشرة عبر بنك الخرطوم تمثل القناة الموثوقة والواضحة للتوثيق المالي دون وسطاء إلكترونيين غير رسميين.'}
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-1">
            <strong className="text-slate-900 block">
              {isEn ? 'How are future project funds stewarded?' : 'كيف يتم تدبير وتوثيق المبالغ المخصصة؟'}
            </strong>
            <p>
              {isEn
                ? 'All proposed programs are bound by our strict transparency framework. No field achievements or expenditures are published until verified.'
                : 'تخضع كافة المبالغ لإطار الحوكمة والشفافية الصارم للمبادرة، ولا يُعرض أي إنجاز أو إنفاق ميداني دون وثائق تدقيق رسمية.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
