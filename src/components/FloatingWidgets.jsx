import { MessageCircle, PhoneCall, Send } from 'lucide-react'
import { SITE } from '../data/site'

const base =
  'group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40 sm:h-14 sm:w-14'

const tip =
  'pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block'

export default function FloatingWidgets({ onOpenEnquiry }) {
  return (
    <div className="fixed bottom-5 right-4 z-30 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-[#25D366] hover:bg-[#1eb85a]`}
      >
        <MessageCircle className="h-6 w-6 fill-current" aria-hidden="true" />
        <span className="sr-only">Chat with us on WhatsApp</span>
        <span className={tip} aria-hidden="true">
          Chat on WhatsApp
        </span>
      </a>

      <a
        href={SITE.phoneHref}
        className={`${base} bg-accent-500 hover:bg-accent-600`}
      >
        <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        <span className="sr-only">Call InfySkill</span>
        <span className={tip} aria-hidden="true">
          Talk to a Mentor
        </span>
      </a>

      <button
        type="button"
        onClick={onOpenEnquiry}
        className={`${base} h-auto w-auto gap-2 bg-brand-600 px-5 font-semibold hover:bg-brand-700`}
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        <span className="text-[13px] sm:text-sm">Enquire Now</span>
      </button>
    </div>
  )
}
