import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react'
import { FOOTER_SERVICES, NAV_LINKS, SITE } from '../data/site'

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3h2.5v7h2.5z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4.5 w-4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.8v11H3.3v-11h3.2zM4.9 3.5a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7zM20.8 13.4v6.4h-3.2v-6c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9v6.2h-3.2s.1-10 0-11h3.2v1.6c.4-.7 1.2-1.6 2.9-1.6 2.2 0 3.8 1.4 3.8 4.6z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.2V8.8L15.3 12 10 15.2z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor" aria-hidden="true">
      <path d="M17.7 3H21l-7.3 8.3L22.2 21h-6.7l-5.3-6.2L4.2 21H1l7.8-8.9L1.9 3h6.9l4.8 5.7L17.7 3zm-1.2 16.2h1.9L7.4 4.7H5.4l11.1 14.5z" />
    </svg>
  )
}

const socials = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { icon: YoutubeIcon, label: 'YouTube', href: '#' },
  { icon: XIcon, label: 'Twitter / X', href: '#' },
]

const quickLinks = NAV_LINKS.filter(
  (l) => !['why', 'training'].includes(l.id) || l.id === 'training',
)

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100 dark:bg-[#040b18]">
      <div className="container-site pb-10 pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.9fr_1fr_1.15fr] lg:gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <GraduationCap className="h-6 w-6 text-orange-500" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-xl font-extrabold tracking-tight text-white">
                  InfySkill
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-200">
                  EduTech Private Limited
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-100/70">
              {SITE.name} — Empowering Skills. Transforming Futures. Practical
              learning, real skills, better careers.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-navy-100 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white hover:ring-orange-500"
                >
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="group inline-flex items-center gap-2 text-sm text-navy-100/70 transition-colors hover:text-orange-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-orange-500/60 transition-all duration-200 group-hover:w-3" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#training"
                    className="group inline-flex items-center gap-2 text-sm text-navy-100/70 transition-colors hover:text-orange-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-orange-500/60 transition-all duration-200 group-hover:w-3" aria-hidden="true" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a href={SITE.phoneHref} className="flex items-start gap-3 text-navy-100/70 transition-colors hover:text-orange-400">
                  <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-orange-500" aria-hidden="true" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={SITE.emailPrimaryHref} className="flex items-start gap-3 text-navy-100/70 transition-colors hover:text-orange-400">
                  <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-orange-500" aria-hidden="true" />
                  {SITE.emailPrimary}
                </a>
              </li>
              <li>
                <a href={SITE.emailGeneralHref} className="flex items-start gap-3 text-navy-100/70 transition-colors hover:text-orange-400">
                  <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-orange-500" aria-hidden="true" />
                  {SITE.emailGeneral}
                </a>
              </li>
              <li>
                <a href={SITE.websiteHref} className="flex items-start gap-3 text-navy-100/70 transition-colors hover:text-orange-400">
                  <GlobeIcon />
                  {SITE.website}
                </a>
              </li>
              <li className="flex items-start gap-3 text-navy-100/70">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-orange-500" aria-hidden="true" />
                {SITE.location}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-[13px] text-navy-100/60">
            © {SITE.year} {SITE.name}. All Rights Reserved.
          </p>
          <p className="font-heading text-[13px] font-bold text-navy-100/70">
            Empowering Skills. <span className="text-orange-400">Transforming Futures.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-4.5 w-4.5 shrink-0 text-orange-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}