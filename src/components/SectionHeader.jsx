/**
 * Reusable section header: orange vertical bar + uppercase eyebrow,
 * bold headline on the left and an optional "View All" link on the right.
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  dark = false,
  className = '',
}) {
  return (
    <div
      className={`flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between ${
        action ? '' : 'sm:block'
      } ${className}`}
    >
      <div className={action ? 'max-w-2xl' : 'max-w-2xl'}>
        <p className="flex items-center gap-2.5">
          <span
            className={`h-6 w-[3px] rounded-full ${
              dark ? 'bg-accent-400' : 'bg-accent-500'
            }`}
            aria-hidden="true"
          />
          <span className={`eyebrow-bar ${dark ? 'eyebrow-bar-light' : ''}`}>
            {eyebrow}
          </span>
        </p>

        <h2
          className={`h-display mt-3 text-[1.75rem] sm:text-4xl lg:text-[2.5rem] ${
            dark ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`body-copy mt-4 ${dark ? '!text-navy-200' : ''}`}
          >
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0 sm:pb-1">
          {typeof action === 'string' || typeof action === 'number' ? (
            <span
              className={`text-link ${dark ? 'text-link-light' : ''}`}
            >
              {action} <span aria-hidden="true">→</span>
            </span>
          ) : (
            action
          )}
        </div>
      )}
    </div>
  )
}
