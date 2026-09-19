import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink } from 'lucide-react';
import { INITIATIVE_INFO } from '../data/contentData';
import { Language } from '../types';

interface WhatsAppFloatingButtonProps {
  lang: Language;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isEn = lang === 'en';

  const waUrl = INITIATIVE_INFO.whatsapp.url;
  const displayNum = INITIATIVE_INFO.whatsapp.display;

  return (
    <aside
      aria-label={isEn ? "WhatsApp Direct Communication" : "تواصل مباشر عبر واتساب"}
      className="fixed bottom-6 end-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Popover Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={isEn ? "WhatsApp Contact Window" : "نافذة تواصل واتساب"}
          className="w-72 sm:w-80 bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 text-slate-800"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#159A72] to-[#087EA4] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-white shadow-inner">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">
                  {isEn ? 'Bridges of Goodness' : 'مبادرة جسور الخير'}
                </h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping inline-block" />
                  {isEn ? 'Direct WhatsApp Channel' : 'متاح للتواصل المباشر'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors text-white/80 hover:text-white"
              aria-label={isEn ? 'Close WhatsApp card' : 'إغلاق نافذة واتساب'}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 text-xs bg-slate-50/70">
            <p className="text-slate-600 leading-relaxed">
              {isEn
                ? 'Welcome! You can directly reach the founding team regarding inquiries, future partnerships, or volunteering.'
                : 'أهلاً بك! يمكنك مراسلة الفريق التأسيسي مباشرة عبر واتساب لأي استفسارات أو مقترحات شراكة وتطوع.'}
            </p>

            <div className="bg-white p-3 rounded-2xl border border-slate-200/60 shadow-xs">
              <span className="text-[10px] text-slate-400 font-bold block mb-1 uppercase tracking-wider">
                {isEn ? 'Official WhatsApp Number' : 'الرقم المعتمد للواتساب'}
              </span>
              <p className="font-mono text-sm font-bold text-[#092B3A] dir-ltr text-start">
                {displayNum}
              </p>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#159A72] hover:bg-[#128361] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isEn ? 'Start WhatsApp Chat' : 'بدء المحادثة على واتساب'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-75" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        id="whatsapp-floating-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#159A72] hover:bg-[#118361] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#159A72]/40"
        aria-label={isEn ? 'Contact us via WhatsApp' : 'تواصل معنا عبر واتساب'}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
        <span className="font-bold text-xs tracking-wide hidden sm:inline whitespace-nowrap">
          {isEn ? 'WhatsApp' : 'واتساب'}
        </span>
      </button>
    </aside>
  );
};
