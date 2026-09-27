import { useState } from 'react'
import {
  CheckCircle2,
  Globe,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { SITE } from '../data/site'

const contactCards = [
  {
    icon: Phone,
    label: 'Call Us',
    value: SITE.phone,
    href: SITE.phoneHref,
  },
  {
    icon: Mail,
    label: 'Enquiries',
    value: SITE.emailPrimary,
    href: SITE.emailPrimaryHref,
  },
  {
    icon: Mail,
    label: 'General',
    value: SITE.emailGeneral,
    href: SITE.emailGeneralHref,
  },
  {
    icon: Globe,
    label: 'Website',
    value: SITE.website,
    href: SITE.websiteHref,
  },
]

const inputCls =
  'w-full rounded-xl border border-navy-100 bg-navy-50/40 px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 outline-none transition-all duration-200 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 dark:border-white/10 dark:bg-navy-950/50 dark:text-white dark:placeholder:text-navy-300 dark:focus:border-orange-400 dark:focus:bg-navy-950 dark:focus:ring-orange-500/20'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    window.setTimeout(() => setStatus('sent'), 900)
  }

  return (
    <section id="contact" className="section-pad bg-navy-50/50 dark:bg-navy-900/30">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Contact Us"
            title="Get in Touch"
            description="Have a question about our training programs, internships or institution services? We'd love to hear from you."
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info column */}
          <div className="space-y-5 lg:col-span-2">
            {contactCards.map(({ icon: Icon, label, value, href }, i) => (
              <Reveal key={label + value} delay={i * 80} from="left">
                <a
                  href={href}
                  className="card card-hover group flex items-center gap-4 p-5"
                  {...(value === SITE.phone ? { 'aria-label': `Call ${SITE.phone}` } : {})}
                >
                  <span className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-navy-400 dark:text-navy-300">
                      {label}
                    </span>
                    <span className="block truncate text-[15px] font-bold text-navy-900 dark:text-white">
                      {value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={330} from="left">
              <div className="card flex items-start gap-4 p-5">
                <span className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-500 text-white shadow-md shadow-orange-500/30">
                  <MapPin className="h-5.5 w-5.5" aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-navy-400 dark:text-navy-300">
                    Office
                  </span>
                  <span className="block text-[15px] font-bold text-navy-900 dark:text-white">
                    {SITE.location}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal from="right" delay={120} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="card relative overflow-hidden rounded-3xl p-7 shadow-xl shadow-navy-900/5 sm:p-9"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy-900 via-navy-600 to-orange-500" aria-hidden="true" />
              {status === 'sent' ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100">
                    <CheckCircle2 className="h-9 w-9 text-green-600" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-extrabold text-navy-900 dark:text-white">
                    Enquiry Sent Successfully!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-600 dark:text-navy-100/75">
                    Thank you for reaching out to InfySkill. Our team will get
                    back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn btn-outline-navy mt-8 px-6! py-2.5!"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-navy-800 dark:text-navy-100">
                      Name
                    </label>
                    <input id="name" name="name" type="text" required placeholder="Your full name" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-navy-800 dark:text-navy-100">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-navy-800 dark:text-navy-100">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-bold text-navy-800 dark:text-navy-100">
                      Course / Service
                    </label>
                    <select id="service" name="service" required defaultValue="" className={inputCls}>
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Non-Technical Training (CRT, Aptitude, Soft Skills)</option>
                      <option>Technical Training – Core</option>
                      <option>Advanced Technical Training</option>
                      <option>Internship</option>
                      <option>Mini / Major Project</option>
                      <option>Company-Specific Training</option>
                      <option>ERP & Website Services for Colleges</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-navy-800 dark:text-navy-100">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Tell us about your training or service requirement..."
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="h-4.5 w-4.5 animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <Send className="h-4.5 w-4.5" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={200}>
          <div className="mt-14 overflow-hidden rounded-3xl border border-navy-100 shadow-lg shadow-navy-900/5">
            <iframe
              title="InfySkill EduTech Pvt. Ltd. – Visakhapatnam, Andhra Pradesh"
              src={SITE.mapEmbed}
              className="h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}