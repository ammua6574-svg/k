export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}) {
  const alignment =
    align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      <span
        className={`eyebrow ${
          dark ? 'bg-white/10 text-orange-300 ring-1 ring-white/10' : ''
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        className={`mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.6rem] ${
          dark ? 'text-white' : 'text-navy-900 dark:text-white'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-navy-100/75' : 'text-navy-600/85 dark:text-navy-100/70'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}