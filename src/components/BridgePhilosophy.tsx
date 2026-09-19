import React, { useState } from 'react';
import { BRIDGE_STEPS } from '../data/contentData';
import { ArrowRight, ArrowLeft, Check, Sparkles, Shield, HeartHandshake, Compass } from 'lucide-react';

interface BridgePhilosophyProps {
  isEn?: boolean;
}

export const BridgePhilosophy: React.FC<BridgePhilosophyProps> = ({ isEn = false }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = BRIDGE_STEPS[activeStepIndex];

  return (
    <section className="bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] rounded-3xl p-6 md:p-12 border border-slate-200/80 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#087EA4]/10 text-[#087EA4] text-xs font-bold uppercase tracking-wider mb-3">
          <Compass className="w-4 h-4" />
          <span>{isEn ? 'Core Human Philosophy' : 'فلسفة الجسر الإنساني'}</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-[#092B3A] tracking-tight">
          {isEn ? 'From Need… To Opportunity' : 'من الحاجة… إلى الفرصة'}
        </h2>
        <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
          {isEn
            ? 'A visual human journey charting the transformative transition from acute vulnerability into durable self-reliance and cohesive communities.'
            : 'رحلة الإنسان بصرياً وفكرياً: كيف ننتقل من وطأة الحاجة والضعف إلى الأمان والمهارة والإنتاج والاعتماد على الذات.'}
        </p>
      </div>

      {/* Visual Interactive Bridge Continuum */}
      <div className="relative mb-10">
        {/* Background Connecting Arc Line */}
        <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-1.5 -translate-y-1/2 bg-gradient-to-r from-red-200 via-[#087EA4] to-[#159A72] rounded-full z-0" />

        {/* Steps Grid / Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative z-10">
          {BRIDGE_STEPS.map((st, idx) => {
            const isSelected = activeStepIndex === idx;
            const isCompleted = idx < activeStepIndex;

            return (
              <button
                key={st.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#092B3A] text-white border-[#F2B84B] shadow-xl scale-105 ring-2 ring-[#087EA4]/40'
                    : isCompleted
                    ? 'bg-white text-slate-800 border-[#159A72]/40 hover:bg-[#E6F7F2]'
                    : 'bg-white/90 text-slate-600 border-slate-200 hover:border-[#087EA4]'
                }`}
              >
                {/* Step Circle */}
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs mb-2 transition-all ${
                    isSelected
                      ? 'bg-[#F2B84B] text-[#092B3A] font-black'
                      : isCompleted
                      ? 'bg-[#159A72] text-white'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : `0${st.step}`}
                </div>

                <span className="text-xs md:text-sm font-bold line-clamp-1">
                  {isEn ? st.titleEn : st.titleAr}
                </span>

                <span
                  className={`text-[10px] mt-1 ${
                    isSelected ? 'text-[#E8D8B8]' : 'text-slate-400'
                  }`}
                >
                  {isEn ? `Stage 0${st.step}` : `المرحلة 0${st.step}`}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Highlight Showcase Card */}
      <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-[#092B3A] text-[#F2B84B]">
                {isEn ? `Step 0${activeStep.step} of 08` : `المحطة 0${activeStep.step} من 08`}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {isEn ? 'Human Dignity Paradigm' : 'مرتكز بناء الإنسان'}
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-extrabold text-[#092B3A]">
              {isEn ? activeStep.titleEn : activeStep.titleAr}
            </h3>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              {isEn ? activeStep.descEn : activeStep.descAr}
            </p>
          </div>

          {/* Navigation Controls between steps */}
          <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
            <button
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              className="p-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-all"
              title="السابق"
            >
              {isEn ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </button>

            <span className="text-xs font-mono font-bold text-slate-400">
              0{activeStepIndex + 1} / 08
            </span>

            <button
              disabled={activeStepIndex === BRIDGE_STEPS.length - 1}
              onClick={() => setActiveStepIndex((prev) => Math.min(BRIDGE_STEPS.length - 1, prev + 1))}
              className="p-3 rounded-xl bg-[#092B3A] text-white hover:bg-[#087EA4] disabled:opacity-30 disabled:pointer-events-none transition-all shadow"
              title="التالي"
            >
              {isEn ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Conceptual Quote Box */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#E8D8B8]/30 flex items-center justify-center text-[#092B3A] shrink-0">
            <Sparkles className="w-5 h-5 text-[#087EA4]" />
          </div>
          <p className="text-xs md:text-sm text-slate-600 italic leading-relaxed">
            {isEn
              ? '“Humanitarian action should not halt at delivering survival aid; it must construct the bridge across which individuals march toward knowledge, productivity, and pride.”'
              : '«لا ينبغي للعمل الإنساني أن يقف عند سد الرمق، بل يصنع الجسر الذي يعبر به الإنسان من ظلام العوز إلى نور المعرفة والإنتاج والكرامة.»'}
          </p>
        </div>
      </div>
    </section>
  );
};
