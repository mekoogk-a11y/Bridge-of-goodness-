import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark' | 'white';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isEn?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
  isEn = false,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const isWhite = variant === 'white';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Geometric Vector Logo: Bridge + Human Figure + Hope Sun + Forward Movement */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Protective Ring / Horizon */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke={isWhite ? 'rgba(255,255,255,0.25)' : '#E8D8B8'}
            strokeWidth="2.5"
            strokeDasharray="4 2"
          />

          {/* Golden Sun of Hope / Dawn Horizon */}
          <path
            d="M26 62 A24 24 0 0 1 74 62"
            fill="none"
            stroke="#F2B84B"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="50" cy="38" r="6" fill="#F2B84B" />

          {/* The Resilient Foundation Bridge Arc (Navy / Cyan) */}
          <path
            d="M14 74 C 28 50, 72 50, 86 74"
            stroke={isWhite ? '#F8FAFC' : '#087EA4'}
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Secondary Structural Bridge Tie Beam */}
          <path
            d="M22 74 L78 74"
            stroke={isWhite ? 'rgba(255,255,255,0.7)' : '#092B3A'}
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* The Human Figure Rising on the Bridge toward Opportunity */}
          {/* Head */}
          <circle
            cx="50"
            cy="27"
            fill={isWhite ? '#F8FAFC' : '#092B3A'}
            r="5"
          />
          {/* Dynamic Welcoming Arms / Bridge Pillars */}
          <path
            d="M37 45 C43 38, 57 38, 63 45"
            stroke="#159A72"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Rising Core / Forward Movement Arrow */}
          <path
            d="M50 32 L50 64"
            stroke={isWhite ? '#F8FAFC' : '#092B3A'}
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Supportive Vertical Bridge Struts (representing community solidarity) */}
          <line x1="34" y1="58" x2="34" y2="74" stroke="#087EA4" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="66" y1="58" x2="66" y2="74" stroke="#087EA4" strokeWidth="2.5" strokeLinecap="round" />

          {/* Forward Leap Sparkle / Star of Purpose */}
          <circle cx="70" cy="28" r="2.5" fill="#F2B84B" />
        </svg>
      </div>

      {variant !== 'mark' && (
        <div className="flex flex-col text-start leading-tight">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-black tracking-tight ${
                size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : size === 'xl' ? 'text-3xl' : 'text-lg'
              } ${isWhite ? 'text-white' : 'text-[#092B3A]'}`}
            >
              {isEn ? 'Bridges of Goodness' : 'جسور الخير'}
            </span>
            <span
              className={`font-bold px-1.5 py-0.5 rounded text-[10px] tracking-wider uppercase ${
                isWhite
                  ? 'bg-white/20 text-[#F2B84B]'
                  : 'bg-[#092B3A] text-[#F2B84B]'
              }`}
            >
              BGI
            </span>
          </div>
          <span
            className={`text-[11px] font-medium tracking-normal ${
              isWhite ? 'text-[#E8D8B8]' : 'text-[#087EA4]'
            }`}
          >
            {isEn ? 'Initiative – South Sudan' : 'مبادرة تأسيسية – جنوب السودان'}
          </span>
        </div>
      )}
    </div>
  );
};
