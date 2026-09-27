/**
 * Custom flat-style illustration: young learners collaborating around
 * a laptop, with floating UI cards. Painted in the InfySkill navy/orange
 * palette so the hero never depends on external image assets.
 */
export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 520"
      className="h-auto w-full"
      role="img"
      aria-label="Indian students learning together with a laptop"
    >
      <defs>
        <linearGradient id="hero-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0d1e42" />
          <stop offset="1" stopColor="#1f4794" />
        </linearGradient>
        <linearGradient id="hero-orange" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fb923c" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="hero-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#123571" />
          <stop offset="1" stopColor="#0b1f45" />
        </linearGradient>
        <filter id="hero-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#07152e" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Backdrop */}
      <rect x="20" y="20" width="560" height="480" rx="40" fill="url(#hero-bg)" />
      <circle cx="520" cy="70" r="130" fill="#ffffff" opacity="0.04" />
      <circle cx="70" cy="460" r="150" fill="#ffffff" opacity="0.05" />
      <circle cx="480" cy="420" r="90" fill="#f97316" opacity="0.08" />

      {/* Floating chart card (top-left) */}
      <g filter="url(#hero-soft)">
        <rect x="62" y="64" width="128" height="96" rx="14" fill="#ffffff" />
        <rect x="80" y="82" width="52" height="8" rx="4" fill="#0d1e42" opacity="0.85" />
        <rect x="80" y="98" width="34" height="6" rx="3" fill="#b3caee" />
        <rect x="84" y="116" width="14" height="28" rx="4" fill="#f97316" />
        <rect x="106" y="108" width="14" height="36" rx="4" fill="#1f4794" />
        <rect x="128" y="122" width="14" height="22" rx="4" fill="#fdba74" />
        <rect x="150" y="114" width="14" height="30" rx="4" fill="#2c5cb3" />
        <circle cx="160" cy="144" r="7" fill="#16a34a" stroke="#ffffff" strokeWidth="3" />
        <path d="M157 144.5l2 2 4-4" stroke="#ffffff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Floating AI chip (top-right) */}
      <g filter="url(#hero-soft)">
        <rect x="424" y="76" width="136" height="44" rx="22" fill="#f97316" />
        <circle cx="448" cy="98" r="13" fill="#ffffff" />
        <path
          d="M446 98l2 2.5 4-5"
          stroke="#f97316"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="468"
          y="102"
          fontFamily="Plus Jakarta Sans, Inter, sans-serif"
          fontWeight="700"
          fontSize="13"
          fill="#ffffff"
        >
          AI Practice
        </text>
      </g>

      {/* Desk */}
      <rect x="120" y="352" width="360" height="16" rx="8" fill="#1a3a79" />
      <rect x="150" y="368" width="14" height="42" rx="6" fill="#142c5f" />
      <rect x="436" y="368" width="14" height="42" rx="6" fill="#142c5f" />

      {/* Student A — seated (left) */}
      <g>
        <rect x="64" y="300" width="52" height="52" rx="10" fill="#1f4794" />
        <rect x="64" y="238" width="14" height="80" rx="7" fill="#2c5cb3" />
        <rect x="88" y="262" width="48" height="62" rx="14" fill="#221f1c" />
        <rect x="78" y="280" width="16" height="8" rx="4" fill="#3b3b3b" />
        <rect x="96" y="296" width="18" height="6" rx="3" fill="#3b3b3b" />
        <rect x="112" y="258" width="42" height="60" rx="14" fill="#f97316" />
        <circle cx="128" cy="232" r="24" fill="#e8b898" />
        <path
          d="M104 226c-2-16 10-26 24-25 14-1 26 9 24 25-6-8-16-10-24-9-8-1-18 1-24 9z"
          fill="#141414"
        />
        <path d="M118 238c3 3 9 3 13 0" stroke="#5c3a22" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <g transform="rotate(-10 152 282)">
          <rect x="148" y="274" width="48" height="13" rx="6.5" fill="#e8b898" />
        </g>
        <rect x="180" y="300" width="26" height="14" rx="7" fill="#e8b898" />
      </g>

      {/* Student B — standing (right) */}
      <g>
        <rect x="472" y="262" width="16" height="96" rx="8" fill="#142c5f" />
        <rect x="488" y="246" width="50" height="72" rx="15" fill="#4f7fd0" />
        <rect x="494" y="318" width="38" height="34" rx="10" fill="#1a3a79" />
        <circle cx="513" cy="222" r="23" fill="#f0c9a4" />
        <path
          d="M490 216c0-16 11-24 23-23 12-1 23 7 23 23-4-4-10-6-23-6-13 0-19 2-23 6z"
          fill="#141414"
        />
        <path d="M504 228c3 3 8 3 11 0" stroke="#6b4426" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <g transform="rotate(8 466 280)">
          <rect x="444" y="274" width="48" height="13" rx="6.5" fill="#f0c9a4" />
        </g>
        <rect x="536" y="286" width="24" height="34" rx="5" fill="#ffffff" opacity="0.9" />
        <rect x="540" y="293" width="16" height="3" rx="1.5" fill="#b3caee" />
        <rect x="540" y="300" width="12" height="3" rx="1.5" fill="#b3caee" />
      </g>

      {/* Laptop */}
      <g>
        <rect x="176" y="236" width="248" height="118" rx="12" fill="url(#hero-screen)" />
        <rect x="176" y="236" width="248" height="20" rx="12" fill="#132c5e" />
        <circle cx="220" cy="246" r="4" fill="#f97316" />
        <circle cx="236" cy="246" r="4" fill="#fdba74" />
        <text
          x="252"
          y="250"
          fontFamily="Plus Jakarta Sans, Inter, sans-serif"
          fontWeight="600"
          fontSize="10"
          fill="#84a9e0"
        >
          practice.infyskill.in
        </text>
        <rect x="196" y="272" width="118" height="12" rx="6" fill="#2c5cb3" />
        <rect x="196" y="294" width="92" height="12" rx="6" fill="#1f4794" />
        <rect x="196" y="316" width="140" height="12" rx="6" fill="#172f63" />
        <rect x="340" y="272" width="64" height="56" rx="8" fill="#f97316" />
        <path d="M340 320h64" stroke="#ea580c" strokeWidth="2" />
        <path
          d="M352 306l8-10 6 6 10-14"
          stroke="#ffffff"
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="160" y="336" width="280" height="18" rx="9" fill="#2c5cb3" />
        <rect x="176" y="354" width="248" height="8" rx="4" fill="#12305e" />
      </g>

      {/* Floating growth card (bottom-left) */}
      <g filter="url(#hero-soft)">
        <rect x="84" y="392" width="170" height="72" rx="16" fill="#ffffff" />
        <circle cx="112" cy="428" r="16" fill="#eef4fc" />
        <path
          d="M104 430l6-7 4 4 8-10"
          stroke="#1f4794"
          strokeWidth="2.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="138"
          y="418"
          fontFamily="Plus Jakarta Sans, Inter, sans-serif"
          fontWeight="800"
          fontSize="12"
          fill="#0d1e42"
        >
          Skills Growth
        </text>
        <text
          x="138"
          y="434"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          fontSize="11"
          fill="#2c5cb3"
        >
          +42% this month
        </text>
        <path d="M104 452h124" stroke="#d9e5f7" strokeWidth="6" strokeLinecap="round" />
        <path d="M104 452h78" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Floating placement chip (bottom-right) */}
      <g filter="url(#hero-soft)">
        <rect x="430" y="404" width="130" height="52" rx="16" fill="#ffffff" />
        <circle cx="456" cy="430" r="15" fill="#16a34a" />
        <path d="M449.5 430l4.5 4.5 8-9" stroke="#ffffff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text
          x="480"
          y="432"
          fontFamily="Plus Jakarta Sans, Inter, sans-serif"
          fontWeight="800"
          fontSize="11.5"
          fill="#0d1e42"
        >
          Placement
        </text>
        <text
          x="480"
          y="444"
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          fontSize="10"
          fill="#1f4794"
        >
          Support
        </text>
      </g>
    </svg>
  )
}