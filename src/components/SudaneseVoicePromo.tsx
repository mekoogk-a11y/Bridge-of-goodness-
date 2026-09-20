import React, { useState, useEffect, useRef } from 'react';
import {
  Mic,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Copy,
  Check,
  Download,
  Share2,
  Flame,
  Radio,
  FileText,
  Users
} from 'lucide-react';
import { SUDANESE_PROMO_AUDIO, INITIATIVE_INFO } from '../data/contentData';

interface SudaneseVoicePromoProps {
  isEn?: boolean;
}

interface ScriptSegment {
  time: string;
  cue: string;
  textAr: string;
  textEn: string;
}

const SCRIPT_SEGMENTS: ScriptSegment[] = [
  {
    time: '00:00 - 00:07',
    cue: '[مؤثرات: صولو وتر سوداني دافئ + إيقاع هادئ يوحي بالعمق والأصالة. نبرة رجالية دافئة ومقرّبة]',
    textAr: 'يا أهلي.. يا عزوتي وسندي في كل مكان.. لما بنقيف مع بعض، وبنمد إيدينا بصدق.. بنقدر نبني المستحيل!',
    textEn: 'My dear people, my strength and support everywhere... When we stand together with sincere hands, we build the impossible!'
  },
  {
    time: '00:07 - 00:16',
    cue: '[النبرة: تزداد فخراً وثقة، مع صعود خفيف لطبقة الصوت]',
    textAr: '«جسور الخير».. ما مجرد فكرة عابرة ولا كلام على ورق.. دي همّة وإرادة حقيقية بتبدأ من الزول.. ولأجل الزول!',
    textEn: '"Bridges of Goodness" is not a fleeting slogan; it is an authentic resolve born from the human being, for the human being!'
  },
  {
    time: '00:16 - 00:26',
    cue: '[المؤثرات: دخول إيقاع المردوم الإفريقي الحماسي المتسارع تدريجياً. النبرة: إيقاعية حماسية ومؤثرة]',
    textAr: 'رحلة حقيقية بتبدأ من الحاجة.. بتوصل للأمان.. وبتعبر بالتعليم والصحة، والمهارة والعمل الشريف!',
    textEn: 'A genuine path starting from vulnerability to security, advancing through education, health, skills, and honorable labor!'
  },
  {
    time: '00:26 - 00:36',
    cue: '[النبرة: قمة الحماس والرجالة والاعتزاز بالأرض والإنسان]',
    textAr: 'لغاية ما مجتمعاتنا تقيف على حيلها.. منتجة، عزيزة، ورافعة راسها.. من جوبا لي واو.. من ملكال لي رمبيك وبور وتوريت.. في كل ريف وكل مدينة!',
    textEn: 'Until our communities stand on their own feet—productive, dignified, and proud. From Juba to Wau, Malakal to Rumbek, Bor to Torit—across every village and town!'
  },
  {
    time: '00:36 - 00:46',
    cue: '[المؤثرات: صعود موسيقي مهيب ثم هبوط خفيف ليبرز الشعار الرسمي بنبرة قاطعة وواثقة]',
    textAr: '«نبني الإنسان.. ونَصنَع جُسوراً لمستقبل أفضل!».. أرْكِز معانا.. خليك جزء من الجسر.. وشَارِكنا صناعة الأمل!',
    textEn: '"Building People. Connecting Communities. Creating a Better Future." Stand firm with us... Be part of the bridge, and create hope!'
  }
];

export const SudaneseVoicePromo: React.FC<SudaneseVoicePromoProps> = ({ isEn = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showStudioGuide, setShowStudioGuide] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      stopPlayback();
    };
  }, []);

  // Ambient sound synthesizer for authentic cinematic background texture
  const playAmbientTone = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          audioCtxRef.current = new AudioCtx();
        }
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      if (audioCtxRef.current && !isMuted) {
        const ctx = audioCtxRef.current;
        // Warm low acoustic drone
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(110, ctx.currentTime); // A2 warm drone
        osc.frequency.exponentialRampToValueAtTime(146.83, ctx.currentTime + 3); // D3 resolve

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 6);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 6.2);
      }
    } catch {
      // AudioContext fallback
    }
  };

  const startPlayback = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }

    setIsPlaying(true);
    playAmbientTone();

    // Voice synthesis configuration for masculine, warm Arabic
    const fullText = SCRIPT_SEGMENTS.map((s) => s.textAr).join(' .. ');

    if (synthRef.current && 'SpeechSynthesisUtterance' in window && !isMuted) {
      const utterance = new SpeechSynthesisUtterance(fullText);
      utterance.lang = 'ar-XA';
      utterance.rate = 0.88; // Confident, measured radio cadence
      utterance.pitch = 0.82; // Deep resonant masculine voice

      // Try finding an Arabic voice
      const voices = synthRef.current.getVoices();
      const arabicVoice = voices.find((v) => v.lang.startsWith('ar'));
      if (arabicVoice) {
        utterance.voice = arabicVoice;
      }

      utterance.onend = () => {
        setIsPlaying(false);
        setActiveSegmentIndex(0);
        if (timerRef.current) clearInterval(timerRef.current);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        if (timerRef.current) clearInterval(timerRef.current);
      };

      synthRef.current.speak(utterance);
    }

    // Step through the script segments for visual highlight
    let current = 0;
    setActiveSegmentIndex(0);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      current += 1;
      if (current < SCRIPT_SEGMENTS.length) {
        setActiveSegmentIndex(current);
        playAmbientTone();
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        setTimeout(() => {
          setIsPlaying(false);
          setActiveSegmentIndex(0);
        }, 3000);
      }
    }, 7500);
  };

  const stopPlayback = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
    setActiveSegmentIndex(0);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      startPlayback();
    }
  };

  const handleCopyScript = () => {
    const fullText = `🎙️ ${SUDANESE_PROMO_AUDIO.titleAr}
شخصية المعلق: ${SUDANESE_PROMO_AUDIO.voiceCharacterAr}
المدة المقدرة: ~45 ثانية
---------------------------------------------
${SCRIPT_SEGMENTS.map(
  (s, i) => `[المقطع ${i + 1} | ${s.time}]
${s.cue}
النص:
«${s.textAr}»
`
).join('\n')}
---------------------------------------------
مبادرة جسور الخير (BGI)
«نبني الإنسان.. ونصنع جسوراً لمستقبل أفضل»
`;

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownloadScript = () => {
    const textContent = `🎙️ ${SUDANESE_PROMO_AUDIO.titleAr}
شخصية المعلق: ${SUDANESE_PROMO_AUDIO.voiceCharacterAr}
المدة المقدرة: ~45 ثانية

${SCRIPT_SEGMENTS.map((s) => `${s.cue}\n«${s.textAr}»\n`).join('\n')}
مبادرة جسور الخير - Bridges of Goodness Initiative
`;
    const element = document.createElement('a');
    const file = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'BGI_Sudanese_Voiceover_Script.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="bg-gradient-to-br from-[#092B3A] via-[#0F3A4D] to-[#092B3A] rounded-3xl p-6 sm:p-10 border border-[#F2B84B]/40 text-white shadow-2xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -end-24 w-72 h-72 bg-[#F2B84B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -start-24 w-72 h-72 bg-[#159A72]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2B84B]/20 text-[#F2B84B] border border-[#F2B84B]/30 text-xs font-bold uppercase tracking-wider mb-2">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>{isEn ? 'Radio & Audio Production' : '🎙️ الإنتاج الصوتي الحماسي'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <span>{isEn ? SUDANESE_PROMO_AUDIO.titleEn : SUDANESE_PROMO_AUDIO.titleAr}</span>
            <Flame className="w-6 h-6 text-amber-400" />
          </h3>
          <p className="text-xs sm:text-sm text-[#E8D8B8] mt-1 flex items-center gap-2">
            <Users className="w-3.5 h-3.5" />
            <span>{isEn ? SUDANESE_PROMO_AUDIO.voiceCharacterEn : SUDANESE_PROMO_AUDIO.voiceCharacterAr}</span>
          </p>
        </div>

        {/* Action Buttons: Copy, Download, Toggle view */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setShowStudioGuide(!showStudioGuide)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
              showStudioGuide
                ? 'bg-white/20 text-white border-white/30'
                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{showStudioGuide ? (isEn ? 'Studio Cues: ON' : 'التوجيهات الإخراجية: مفعلة') : (isEn ? 'Studio Cues: OFF' : 'النص الصافي')}</span>
          </button>

          <button
            onClick={handleCopyScript}
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/10 transition-all flex items-center gap-1.5 active:scale-95"
            title="نسخ النص الصوتي بالكامل"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                <span className="text-emerald-300">{isEn ? 'Copied!' : 'تم النسخ'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{isEn ? 'Copy Script' : 'نسخ النص'}</span>
              </>
            )}
          </button>

          <button
            onClick={handleDownloadScript}
            className="px-3.5 py-2 rounded-xl bg-[#F2B84B] hover:bg-amber-300 text-slate-950 text-xs font-bold shadow-md transition-all flex items-center gap-1.5 active:scale-95"
            title="تحميل ملف السكربت كاملاً"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isEn ? 'Download .txt' : 'تحميل السكربت'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Audio Player Controller */}
      <div className="relative z-10 bg-[#051A24]/90 rounded-2xl p-5 sm:p-6 border border-white/10 shadow-xl mb-8 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Play / Pause / Replay Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 ${
                isPlaying
                  ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/30 ring-4 ring-rose-500/20'
                  : 'bg-gradient-to-r from-[#F2B84B] to-amber-400 hover:brightness-110 text-slate-950 shadow-amber-500/30'
              }`}
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ms-0.5" />}
            </button>

            {isPlaying && (
              <button
                onClick={stopPlayback}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                title="إعادة التشغيل"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}

            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white">
                  {isPlaying ? (isEn ? 'Playing Sudanese Voiceover...' : 'جاري تشغيل الصوت الإعلاني...') : (isEn ? 'Listen to Enthusiastic Voiceover' : 'استمع للإعلان بصوت حماسي معبر')}
                </span>
                {isPlaying && (
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400">
                {isEn ? 'Duration: ~48 seconds • Sudanese Colloquial Dialect' : 'المدة: 48 ثانية • عامية سودانية أصيلة بنبرة إذاعية حماسية'}
              </p>
            </div>
          </div>

          {/* Equalizer Visualizer & Mute control */}
          <div className="flex items-center gap-4">
            <div className="flex items-end gap-1 h-8 px-3 py-1 bg-white/5 rounded-xl border border-white/5">
              {[40, 75, 55, 90, 65, 80, 45, 95, 70, 85, 50, 60].map((h, i) => (
                <span
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlaying ? 'bg-[#F2B84B] animate-pulse' : 'bg-slate-600'
                  }`}
                  style={{
                    height: isPlaying ? `${Math.min(100, Math.max(20, (h * ((i % 3) + 1)) % 100))}%` : '20%',
                    animationDelay: `${i * 80}ms`
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-2.5 rounded-xl border transition-colors ${
                isMuted
                  ? 'bg-rose-500/20 border-rose-500/40 text-rose-300'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
              }`}
              title={isMuted ? 'إلغاء كتم الصوت' : 'كتم الصوت'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Segment Progress Bar */}
        <div className="mt-5 grid grid-cols-5 gap-1.5">
          {SCRIPT_SEGMENTS.map((seg, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                isPlaying && activeSegmentIndex === idx
                  ? 'bg-[#F2B84B] shadow-sm shadow-amber-400'
                  : idx < activeSegmentIndex
                  ? 'bg-[#159A72]'
                  : 'bg-white/15'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Script Segments Interactive Reader */}
      <div className="relative z-10 space-y-4">
        {SCRIPT_SEGMENTS.map((seg, idx) => {
          const isActive = isPlaying && activeSegmentIndex === idx;

          return (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                isActive
                  ? 'bg-white/15 border-[#F2B84B] shadow-lg shadow-amber-500/10 scale-[1.01]'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-md bg-white/10 text-[#F2B84B] font-bold">
                  {seg.time}
                </span>

                <span className="text-[11px] text-slate-400 font-medium">
                  {isEn ? `Part ${idx + 1} of ${SCRIPT_SEGMENTS.length}` : `المقطع ${idx + 1} من ${SCRIPT_SEGMENTS.length}`}
                </span>
              </div>

              {/* Studio directions / cue */}
              {showStudioGuide && (
                <div className="text-xs text-emerald-300 font-mono italic bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/20 mb-3">
                  {seg.cue}
                </div>
              )}

              {/* Spoken Text */}
              <p
                className={`text-base sm:text-lg leading-relaxed font-bold ${
                  isActive ? 'text-[#F2B84B]' : 'text-slate-100'
                }`}
              >
                «{isEn ? seg.textEn : seg.textAr}»
              </p>
            </div>
          );
        })}
      </div>

      {/* Footer Quote and Broadcast Notice */}
      <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#F2B84B]" />
          <span>
            {isEn
              ? 'Produced for radio broadcasts, social reels, and community town halls.'
              : 'مُصمم للإذاعات الميدانية، المنصات الاجتماعية، واللقاءات التأسيسية التنموية.'}
          </span>
        </div>

        <a
          href={INITIATIVE_INFO.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F2B84B] hover:text-amber-300 underline underline-offset-4 font-bold transition-colors"
        >
          {isEn ? 'Collaborate on Media Production →' : 'للتنسيق الإعلامي وإنتاج الفويس أوفر مع الفريق ←'}
        </a>
      </div>
    </div>
  );
};
