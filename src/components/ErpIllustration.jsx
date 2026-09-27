/**
 * Flat dashboard-style illustration for the ERP & College
 * Website Services section.
 */
export default function ErpIllustration() {
  return (
    <svg
      viewBox="0 0 560 430"
      className="h-auto w-full"
      role="img"
      aria-label="College ERP dashboard illustration"
    >
      <defs>
        <linearGradient id="erp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0d1e42" />
          <stop offset="1" stopColor="#1a3a79" />
        </linearGradient>
        <linearGradient id="erp-orange" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fb923c" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
      </defs>

      <rect x="10" y="10" width="540" height="410" rx="34" fill="url(#erp-bg)" />
      <circle cx="520" cy="60" r="120" fill="#ffffff" opacity="0.04" />
      <circle cx="40" cy="390" r="130" fill="#f97316" opacity="0.08" />

      {/* Browser window */}
      <g transform="translate(48 54)">
        <rect width="464" height="302" rx="16" fill="#ffffff" />

        {/* Browser chrome */}
        <rect width="464" height="34" rx="16" fill="#eef4fc" />
        <rect y="28" width="464" height="6" fill="#eef4fc" />
        <circle cx="20" cy="17" r="4" fill="#f97316" />
        <circle cx="34" cy="17" r="4" fill="#fdba74" />
        <circle cx="48" cy="17" r="4" fill="#84a9e0" />
        <rect x="120" y="8" width="196" height="18" rx="9" fill="#ffffff" stroke="#d9e5f7" />
        <text
          x="218"
          y="21"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          fontSize="10"
          fill="#4f7fd0"
          textAnchor="middle"
        >
          college.infyskill.in
        </text>

        {/* Sidebar */}
        <rect x="14" y="46" width="86" height="244" rx="10" fill="#0d1e42" />
        <rect x="26" y="60" width="62" height="10" rx="5" fill="#4f7fd0" />
        <rect x="26" y="84" width="54" height="8" rx="4" fill="#ffffff" opacity="0.28" />
        <rect x="26" y="106" width="58" height="8" rx="4" fill="#ffffff" opacity="0.28" />
        <rect x="26" y="128" width="48" height="8" rx="4" fill="#ffffff" opacity="0.28" />
        <rect x="26" y="150" width="56" height="8" rx="4" fill="#f97316" />
        <rect x="26" y="172" width="52" height="8" rx="4" fill="#ffffff" opacity="0.28" />
        <circle cx="50" cy="222" r="10" fill="#f97316" />
        <rect x="26" y="246" width="62" height="8" rx="4" fill="#ffffff" opacity="0.35" />

        {/* Main panel */}
        <rect x="112" y="46" width="338" height="110" rx="10" fill="#f7fafd" />

        {/* Stat cards */}
        <rect x="126" y="60" width="98" height="54" rx="10" fill="#ffffff" stroke="#d9e5f7" />
        <rect x="136" y="70" width="48" height="6" rx="3" fill="#b3caee" />
        <text
          x="136"
          y="98"
          fontFamily="Plus Jakarta Sans, Inter, sans-serif"
          fontWeight="800"
          fontSize="16"
          fill="#0d1e42"
        >
          1,240
        </text>
        <rect x="232" y="60" width="98" height="54" rx="10" fill="#ffffff" stroke="#d9e5f7" />
        <rect x="242" y="70" width="48" height="6" rx="3" fill="#b3caee" />
        <text
          x="242"
          y="98"
          fontFamily="Plus Jakarta Sans, Inter, sans-serif"
          fontWeight="800"
          fontSize="16"
          fill="#0d1e42"
        >
          4,860
        </text>
        <rect x="338" y="60" width="98" height="54" rx="10" fill="url(#erp-orange)" />
        <rect x="348" y="70" width="56" height="6" rx="3" fill="#ffffff" opacity="0.6" />
        <text
          x="348"
          y="98"
          fontFamily="Plus Jakarta Sans, Inter, sans-serif"
          fontWeight="800"
          fontSize="16"
          fill="#ffffff"
        >
          78%
        </text>

        {/* Bar chart */}
        <rect x="112" y="168" width="164" height="122" rx="10" fill="#ffffff" stroke="#d9e5f7" />
        <rect x="126" y="182" width="70" height="6" rx="3" fill="#0d1e42" />
        {[42, 64, 48, 80, 58, 92, 72].map((h, ix) => (
          <rect
            key={ix}
            x={126 + ix * 19}
            y={246 - h}
            width="10"
            height={h}
            rx="3"
            fill={ix % 2 === 0 ? '#1f4794' : '#f97316'}
          />
        ))}
        <rect x="126" y="252" width="138" height="2" rx="1" fill="#eef4fc" />

        {/* Line chart */}
        <rect x="288" y="168" width="162" height="122" rx="10" fill="#ffffff" stroke="#d9e5f7" />
        <rect x="302" y="182" width="86" height="6" rx="3" fill="#0d1e42" />
        <polyline
          points="302,240 320,230 338,234 356,214 374,220 392,198 410,204 428,178"
          fill="none"
          stroke="#f97316"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="428" cy="178" r="5" fill="#f97316" stroke="#ffffff" strokeWidth="2.5" />
      </g>

      {/* Floating success chip */}
      <rect x="418" y="12" width="118" height="40" rx="20" fill="#16a34a" opacity="0.95" />
      <path d="M436 32l6 6 12-13" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text
        x="460"
        y="36"
        fontFamily="Plus Jakarta Sans, Inter, sans-serif"
        fontWeight="700"
        fontSize="12"
        fill="#ffffff"
      >
        Live & Synced
      </text>
    </svg>
  )
}