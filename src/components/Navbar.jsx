import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GraduationCap, Menu, Phone, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '../data/site'
import ThemeToggle from './ThemeToggle'

function Wordmark() {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center gap-3"
      aria-label="InfySkill EduTech Pvt. Ltd. – Home"
    >
      <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 shadow-md shadow-navy-900/25 dark:bg-white">
        <GraduationCap className="h-6 w-6 text-orange-500 dark:text-navy-900" aria-hidden="true" />
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-orange-500 ring-2 ring-white" />
      </span>
      <span className="leading-tight">
        <span className="block font-heading text-lg font-extrabold tracking-tight text-navy-900 dark:text-white">
          InfySkill
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-navy-400 dark:text-navy-300">
          EduTech Private Limited
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
          ? 'border-b border-navy-100 bg-white/90 shadow-lg shadow-navy-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/90 dark:shadow-navy-950/40'
          : 'bg-white/60 backdrop-blur-md dark:bg-navy-950/60'
      }`}
    >
      <nav
        className="container-site flex h-[76px] items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        <Wordmark />

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-orange-600 dark:text-orange-400'
                      : 'text-navy-700 hover:text-orange-600 dark:text-navy-100 dark:hover:text-orange-400'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-orange-500 transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-navy-700 transition-colors hover:text-orange-600 dark:text-navy-100 dark:hover:text-orange-400 xl:flex"
          >
            <Phone className="h-4 w-4 text-orange-500" aria-hidden="true" />
            {SITE.phone}
          </a>
          <Link to="/contact" className="btn btn-primary hidden px-6! py-2.5! xl:inline-flex">
            Get in Touch
          </Link>
          <ThemeToggle />
          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-xl border border-navy-100 bg-white text-navy-900 shadow-sm transition hover:border-orange-200 hover:text-orange-600 dark:border-white/10 dark:bg-white/5 dark:text-navy-100 dark:hover:border-orange-400/50 dark:hover:text-orange-400 xl:hidden"
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
          className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm dark:bg-navy-950/70"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
        />
        <div
          className={`relative mx-4 mt-2 max-h-[calc(100vh-96px)] overflow-y-auto rounded-2xl border border-navy-100 bg-white p-4 shadow-2xl shadow-navy-900/20 transition-all duration-300 dark:border-white/10 dark:bg-navy-900 dark:shadow-navy-950/60 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
          }`}
        >
          <ul className="divide-y divide-navy-50 dark:divide-white/5">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-colors ${
                      isActive
                        ? 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400'
                        : 'text-navy-800 hover:bg-navy-50 dark:text-navy-100 dark:hover:bg-white/5'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span
                        className={`h-2 w-2 rounded-full ${
                          isActive ? 'bg-orange-500' : 'bg-navy-100 dark:bg-white/10'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-2 border-t border-navy-100 pt-4 dark:border-white/10">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Get in Touch
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