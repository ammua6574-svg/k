import { ArrowRight, Download, Sparkles } from 'lucide-react'
import HandNote from './HandNote'

/**
 * Dark navy → orange gradient CTA banner with a handwritten-style
 * annotation. `photo` is optional; when present it renders as a masked
 * photo block on the right (desktop only).
 */
export default function CtaBanner({
  eyebrow = 'Let’s Get Started',
  title,
  body,
  note = 'Your future starts here!',
  photo,
  photoAlt = 'InfySkill students',
  onEnquire,
  onDownload,
  id,
}) {
  return (
    <section id={id} className="relative overflow-hidden bg-navy-900">
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-accent-600"
        aria-hidden="true"
      />
      <div className="bg-grid-light absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent-200">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {eyebrow}
            </span>

            <h2 className="h-display mt-5 text-[1.75rem] text-white sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>

            {body && (
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-navy-100/85 sm:text-base">
                {body}
              </p>
            )}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={onEnquire}
                className="btn btn-accent !min-h-13 px-7"
              >
                Enquire Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              {onDownload && (
                <button
                  type="button"
                  onClick={onDownload}
                  className="btn btn-outline-light !min-h-13 px-7"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Brochure
                </button>
              )}
            </div>

            {note && (
              <p className="mt-7 flex items-center gap-3">
                <HandNote className="text-3xl text-accent-300 sm:text-4xl" rotate={-2}>
                  {note}
                </HandNote>
                <svg
                  viewBox="0 0 80 12"
                  className="h-3 w-20 text-accent-400"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8c14-6 30 2 44-3s22-4 32 1"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </p>
            )}
          </div>

          {photo && (
            <div className="relative hidden lg:col-span-5 lg:block">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/15">
                <img
                  src={photo}
                  alt={photoAlt}
                  loading="lazy"
                  className="h-[320px] w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
