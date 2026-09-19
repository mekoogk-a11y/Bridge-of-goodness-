import React, { useState } from 'react';
import { SOUTH_SUDAN_STATES } from '../data/contentData';
import { SouthSudanState } from '../types';
import { MapPin, Info, AlertTriangle, ArrowRight, ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';

interface SouthSudanMapProps {
  isEn?: boolean;
  onSelectState?: (state: SouthSudanState) => void;
}

export const SouthSudanMap: React.FC<SouthSudanMapProps> = ({ isEn = false, onSelectState }) => {
  const [selectedState, setSelectedState] = useState<SouthSudanState>(SOUTH_SUDAN_STATES[0]);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const regions = [
    { id: 'all', labelAr: 'جميع الولايات (10)', labelEn: 'All States (10)' },
    { id: 'equatoria', labelAr: 'إقليم الاستوائية (3)', labelEn: 'Equatoria Region (3)' },
    { id: 'bahr-el-ghazal', labelAr: 'بحر الغزال الكبرى (4)', labelEn: 'Greater Bahr el Ghazal (4)' },
    { id: 'upper-nile', labelAr: 'أعالي النيل الكبرى (3)', labelEn: 'Greater Upper Nile (3)' },
  ];

  const filteredStates = SOUTH_SUDAN_STATES.filter((st) => {
    if (selectedRegion === 'all') return true;
    if (selectedRegion === 'equatoria') return st.regionAr.includes('الاستوائية');
    if (selectedRegion === 'bahr-el-ghazal') return st.regionAr.includes('بحر الغزال');
    if (selectedRegion === 'upper-nile') return st.regionAr.includes('أعالي النيل');
    return true;
  });

  const handleStateClick = (state: SouthSudanState) => {
    setSelectedState(state);
    if (onSelectState) {
      onSelectState(state);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-[#CBD5E1]/60 shadow-xl overflow-hidden">
      {/* Top Banner and Filter Bar */}
      <div className="bg-gradient-to-r from-[#092B3A] via-[#087EA4] to-[#092B3A] text-white p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#F2B84B] uppercase">
              <Compass className="w-4 h-4" />
              <span>{isEn ? 'Geographic Framework' : 'الإطار الجغرافي الميداني'}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-1 text-white">
              {isEn ? 'Interactive Map of South Sudan (10 States)' : 'خريطة جنوب السودان التفاعلية (10 ولايات)'}
            </h3>
            <p className="text-sm text-[#E8D8B8] max-w-2xl mt-1.5 leading-relaxed">
              {isEn
                ? 'Explore the ten states, understand regional contexts, potential humanitarian needs, and proposed future intervention horizons.'
                : 'استكشف الولايات العشر لجنوب السودان، وتعرف على السياق التنموي والاحتياجات المحتملة ومجالات التدخل المستقبلية المقترحة.'}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs text-[#E8D8B8]">
            <ShieldCheck className="w-4 h-4 text-[#F2B84B]" />
            <span>{isEn ? 'Conceptual Needs Analysis' : 'تحليل استكشافي للدراسة والتخطيط'}</span>
          </div>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/15">
          {regions.map((reg) => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegion(reg.id)}
              className={`text-xs md:text-sm font-semibold px-4 py-1.5 rounded-xl transition-all ${
                selectedRegion === reg.id
                  ? 'bg-[#F2B84B] text-[#092B3A] shadow-md scale-105'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {isEn ? reg.labelEn : reg.labelAr}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Interactive Map Visual + State Details Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x lg:divide-x-reverse divide-slate-100">
        {/* Left/Main Column: Stylized Vector Cartography of South Sudan */}
        <div className="lg:col-span-7 p-6 md:p-8 bg-[#F8FAFC] flex flex-col justify-between">
          <div className="relative w-full aspect-[4/3] max-h-[500px] bg-gradient-to-b from-[#E0F2FE]/40 via-[#F7F3EB]/50 to-[#E6F7F2]/40 rounded-2xl border border-slate-200 p-4 overflow-hidden shadow-inner flex items-center justify-center">
            {/* Nile River Curve Stylized Representation */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* White Nile River Vector */}
              <path
                d="M 52 100 Q 50 80, 52 70 Q 56 60, 50 48 Q 45 40, 55 25 Q 60 15, 62 0"
                fill="none"
                stroke="#087EA4"
                strokeWidth="2.2"
                strokeDasharray="2 1"
                opacity="0.5"
              />
              {/* Bahr el Ghazal River tributary */}
              <path
                d="M 15 50 Q 30 52, 48 50"
                fill="none"
                stroke="#087EA4"
                strokeWidth="1.5"
                strokeDasharray="1 1"
                opacity="0.4"
              />
              {/* Sobat River tributary */}
              <path
                d="M 75 35 Q 65 34, 55 30"
                fill="none"
                stroke="#087EA4"
                strokeWidth="1.5"
                strokeDasharray="1 1"
                opacity="0.4"
              />
            </svg>

            {/* State Hotspots / Interactive Cards on the Map */}
            <div className="relative w-full h-full">
              {filteredStates.map((st) => {
                const isSelected = selectedState.id === st.id;
                return (
                  <button
                    key={st.id}
                    onClick={() => handleStateClick(st)}
                    style={{
                      left: `${st.coordinates.x}%`,
                      top: `${st.coordinates.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`absolute z-10 group flex flex-col items-center transition-all duration-300 focus:outline-none ${
                      isSelected ? 'scale-110 z-20' : 'hover:scale-105'
                    }`}
                  >
                    {/* Pin Marker */}
                    <div
                      className={`w-9 h-9 md:w-11 md:h-11 rounded-2xl flex items-center justify-center shadow-lg transition-all border-2 ${
                        isSelected
                          ? 'bg-[#092B3A] border-[#F2B84B] text-[#F2B84B] shadow-xl ring-4 ring-[#087EA4]/30'
                          : 'bg-white border-[#087EA4] text-[#087EA4] group-hover:bg-[#087EA4] group-hover:text-white'
                      }`}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>

                    {/* State Tag Label */}
                    <span
                      className={`mt-1 text-[11px] md:text-xs font-bold px-2 py-0.5 rounded-md whitespace-nowrap shadow transition-all ${
                        isSelected
                          ? 'bg-[#092B3A] text-white shadow-md'
                          : 'bg-white/95 text-[#102A43] border border-slate-200 group-hover:bg-[#087EA4] group-hover:text-white'
                      }`}
                    >
                      {isEn ? st.nameEn : st.nameAr}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Map Legend */}
            <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200 text-[10px] space-y-1 shadow-sm">
              <div className="flex items-center gap-1.5 font-bold text-[#092B3A]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#087EA4]" />
                <span>{isEn ? 'White Nile & Tributaries' : 'مسار النيل الأبيض وروافده'}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-600">
                <span className="w-2.5 h-2.5 rounded bg-[#092B3A] border border-[#F2B84B]" />
                <span>{isEn ? 'Selected State' : 'الولاية المحددة'}</span>
              </div>
            </div>
          </div>

          {/* Quick State Pills Selector */}
          <div className="mt-4">
            <span className="text-xs font-bold text-slate-500 block mb-2">
              {isEn ? 'Quick Selector:' : 'اختيار سريع للولاية:'}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {SOUTH_SUDAN_STATES.map((st) => (
                <button
                  key={st.id}
                  onClick={() => handleStateClick(st)}
                  className={`text-xs px-2.5 py-1 rounded-lg transition-all ${
                    selectedState.id === st.id
                      ? 'bg-[#092B3A] text-white font-bold shadow'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {isEn ? st.nameEn : st.nameAr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: In-Depth State Card */}
        <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-white">
          <div>
            {/* State Title & Capital */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#087EA4]/10 text-[#087EA4] uppercase tracking-wider">
                  {isEn ? selectedState.regionEn : selectedState.regionAr}
                </span>
                <h4 className="text-2xl md:text-3xl font-extrabold text-[#092B3A] mt-2">
                  {isEn ? selectedState.nameEn : selectedState.nameAr}
                </h4>
                <div className="flex items-center gap-1.5 text-sm text-slate-600 mt-1">
                  <MapPin className="w-4 h-4 text-[#087EA4]" />
                  <span>
                    {isEn ? 'State Capital:' : 'عاصمة الولاية:'}{' '}
                    <strong className="text-[#092B3A]">{isEn ? selectedState.capitalEn : selectedState.capitalAr}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* State Overview */}
            <div className="bg-[#F8FAFC] rounded-2xl p-4 border border-slate-100 mb-5">
              <h5 className="text-xs font-bold text-[#087EA4] uppercase tracking-wider mb-1 flex items-center gap-1">
                <Info className="w-3.5 h-3.5" />
                {isEn ? 'General Overview' : 'نبذة عامة عن الولاية'}
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed">
                {isEn ? selectedState.overviewEn : selectedState.overviewAr}
              </p>
              <div className="mt-2 text-xs text-slate-500 pt-2 border-t border-slate-200/60">
                <strong>{isEn ? 'Geography:' : 'الطبيعة والمناخ:'}</strong>{' '}
                {isEn ? selectedState.climateAndGeographyEn : selectedState.climateAndGeographyAr}
              </div>
            </div>

            {/* Potential Needs */}
            <div className="mb-5">
              <h5 className="text-xs font-bold text-[#102A43] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-[#F2B84B]" />
                {isEn ? 'Potential Developmental Needs' : 'احتياجات تنموية محتملة للدراسة'}
              </h5>
              <ul className="space-y-1.5">
                {(isEn ? selectedState.developmentNeedsEn : selectedState.developmentNeedsAr).map((need, i) => (
                  <li key={i} className="text-xs md:text-sm text-slate-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F2B84B] mt-1.5 shrink-0" />
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Proposed Interventions */}
            <div className="mb-5">
              <h5 className="text-xs font-bold text-[#159A72] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#159A72]" />
                {isEn ? 'Proposed Future Intervention Horizons' : 'مجالات تدخل مستقبلية مقترحة'}
              </h5>
              <ul className="space-y-1.5">
                {(isEn ? selectedState.proposedInterventionsEn : selectedState.proposedInterventionsAr).map((item, i) => (
                  <li key={i} className="text-xs md:text-sm text-slate-800 bg-[#E6F7F2]/60 p-2 rounded-xl flex items-start gap-2 border border-[#159A72]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#159A72] mt-1.5 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Strict Regulatory Status Notice */}
          <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 leading-normal">
            <span className="font-bold block mb-0.5">
              {isEn ? 'Notice on Legal & Project Status:' : 'تنبيه الشفافية والمصداقية:'}
            </span>
            {isEn
              ? 'These data points are exploratory frameworks for future conceptual planning. Bridges of Goodness does not claim any executed projects in this state prior to formal legal registration.'
              : 'هذه البيانات تمثل إطاراً استكشافياً للتخطيط والدراسة المستقبلية. لا تدّعي مبادرة جسور الخير وجود مشاريع منفذة رسمياً في هذه الولاية حتى الآن.'}
          </div>
        </div>
      </div>
    </div>
  );
};
