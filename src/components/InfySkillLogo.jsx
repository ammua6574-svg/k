/**
 * InfySkill brand mark — orange map-pin with a mortarboard inside,
 * paired with the "Infy" (navy) + "Skill" (orange) wordmark.
 */

export function PinMark({ className = 'h-10 w-10' }) {
  return (
    <svg viewBox="0 0 32 40" className={className} role="img" aria-label="InfySkill">
      <path
        d="M16 1.4C9.1 1.4 3.5 6.9 3.5 13.7c0 9.1 10.7 21.8 11.9 23.2a.85.85 0 0 0 1.2 0C17.8 35.5 28.5 22.8 28.5 13.7 28.5 6.9 22.9 1.4 16 1.4Z"
        className="fill-accent-500"
      />
      <path d="M16 8.9 23.4 12.4 16 15.9 8.6 12.4 16 8.9Z" fill="#fff" />
      <path
        d="M11.2 14.2v3.3c0 1.4 2.2 2.5 4.8 2.5s4.8-1.1 4.8-2.5v-3.3L16 16.7l-4.8-2.5Z"
        fill="#fff"
        opacity="0.88"
      />
    </svg>
  )
}

export function InfySkillLogo({ light = false, compact = false, className = '' }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <PinMark className={compact ? 'h-8 w-8' : 'h-10 w-10'} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] font-extrabold tracking-tight ${
            light ? 'text-white' : 'text-navy-900'
          }`}
        >
          Infy<span className="text-accent-500">Skill</span>
        </span>
        {!compact && (
          <span
            className={`mt-1 text-[8.5px] font-bold uppercase tracking-[0.22em] ${
              light ? 'text-navy-200' : 'text-navy-400'
            }`}
          >
            EduTech
          </span>
        )}
      </span>
    </span>
  )
}

export default InfySkillLogo
