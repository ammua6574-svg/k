import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { SERVICES, SITE } from '../data/site'
import { InfySkillLogo } from './InfySkillLogo'

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/infyskill',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.06c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.1c0-1.46-.03-3.34-2.03-3.34-2.04 0-2.35 1.59-2.35 3.23V21h-4V9Z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/infyskill',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.8-.1Zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4Zm0 2.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm6.4-3.7a1.44 1.44 0 1 0 0 2.9 1.44 1.44 0 0 0 0-2.9Z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@infyskill',
    path: 'M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/infyskill',
    path: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z',
  },
]

export default function Footer({ onOpenEnquiry }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const subscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setDone(true)
  }

  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-site py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-4">
            <InfySkillLogo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
              Practical, industry-ready skill training for BTech, Degree and MCA
              students — and a long-term training partner for colleges across
              India.
            </p>

            <ul className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.07] text-navy-300 ring-1 ring-inset ring-white/10 transition-colors hover:bg-accent-500 hover:text-white hover:ring-accent-500"
                  >
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-white/[0.05] p-5 ring-1 ring-inset ring-white/10">
              <h3 className="font-display text-sm font-bold text-white">
                Get course & placement updates
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-navy-300">
                One short email a month. New batches, workshops and hiring drives.
              </p>

              {done ? (
                <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-success">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  You’re on the list. Welcome aboard!
                </p>
              ) : (
                <form onSubmit={subscribe} className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@college.edu"
                    className="field !border-white/10 !bg-navy-900 !text-white !placeholder:text-navy-400"
                  />
                  <button type="submit" className="btn btn-accent shrink-0 !min-h-12">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links" className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Our Services', to: '/#services' },
                { label: 'Popular Courses', to: '/#courses' },
                { label: 'College Training', to: '/#colleges' },
                { label: 'Placements', to: '/#testimonials' },
                { label: 'Blog', to: '/#blog' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-2 text-navy-300 transition-colors hover:text-accent-300"
                  >
                    <ArrowRight
                      className="h-3.5 w-3.5 text-navy-500 transition-colors group-hover:text-accent-400"
                      aria-hidden="true"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Our services" className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
              Our Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/#services"
                    className="group inline-flex items-start gap-2 text-navy-300 transition-colors hover:text-accent-300"
                  >
                    <ArrowRight
                      className="h-3.5 w-3.5 shrink-0 translate-y-1 text-navy-500 transition-colors group-hover:text-accent-400"
                      aria-hidden="true"
                    />
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/#colleges"
                  className="group inline-flex items-start gap-2 text-navy-300 transition-colors hover:text-accent-300"
                >
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 translate-y-1 text-navy-500 transition-colors group-hover:text-accent-400"
                    aria-hidden="true"
                  />
                  Placement Support
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                <span className="text-navy-300">{SITE.location}</span>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-3 text-navy-300 transition-colors hover:text-accent-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailPrimaryHref}
                  className="flex items-center gap-3 break-all text-navy-300 transition-colors hover:text-accent-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                  {SITE.emailPrimary}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                <span className="text-navy-300">{SITE.hours}</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={onOpenEnquiry}
              className="btn btn-primary mt-6 w-full"
            >
              Enquire Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {SITE.year} {SITE.name}. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>Privacy Policy</span>
            <span aria-hidden="true" className="h-3 w-px bg-white/15" />
            <span>Terms of Service</span>
            <span aria-hidden="true" className="h-3 w-px bg-white/15" />
            <a
              href={SITE.websiteHref}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent-300"
            >
              {SITE.website}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
