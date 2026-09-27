import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '../data/site'

function Wordmark() {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center gap-3"
      aria-label="InfySkill EduTech Pvt. Ltd. – Home"
    >
      {/* Exact Logo Icon from infyskill.in */}
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center">
        <svg className="h-11 w-11 text-blue-600" viewBox="0 0 36 36" fill="currentColor">
          <path d="M18 4L4 28h8l6-11 6 11h8L18 4z" opacity="0.9" />
          <path d="M18 12l-4 7h8l-4-7z" fill="#ff6b00" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block font-heading text-xl font-extrabold tracking-tight text-navy-950">
          INFYSKILL
        </span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
          EduTech Pvt.Ltd
        </span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-100 bg-white/95 shadow-md shadow-navy-900/5 backdrop-blur-xl'
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <nav
        className="container-site flex h-[76px] items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        <Wordmark />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-[14px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-navy-800 hover:text-orange-600 hover:bg-navy-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-navy-800 transition-colors hover:text-orange-600 xl:flex"
          >
            <Phone className="h-4 w-4 text-orange-500" aria-hidden="true" />
            {SITE.phone}
          </a>
          <Link to="/contact" className="btn btn-primary hidden px-6! py-2.5! xl:inline-flex">
            Login
          </Link>
          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-xl border border-navy-200 bg-white text-navy-900 shadow-sm transition hover:border-orange-300 hover:text-orange-600 xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[76px] bottom-0 z-40 transition-all duration-300 xl:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
        />
        <div
          className={`relative mx-4 mt-2 max-h-[calc(100vh-96px)] overflow-y-auto rounded-2xl border border-navy-100 bg-white p-4 shadow-2xl shadow-navy-900/20 transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
          }`}
        >
          <ul className="divide-y divide-navy-50">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-colors ${
                      isActive
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-navy-800 hover:bg-navy-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2 border-t border-navy-100 pt-4">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Login
            </Link>
            <a href={SITE.phoneHref} className="btn btn-outline-navy w-full">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
