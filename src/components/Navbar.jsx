import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowRight, Mail, MapPin, Menu, Phone, Search, X } from 'lucide-react'
import { SITE } from '../data/site'
import { InfySkillLogo } from './InfySkillLogo'

/* Only the two pages that exist are real routes. Every other brand
   entry point is captured as a searchable jump-list instead of a 404. */
const SECTIONS = [
  { label: 'Popular Courses', path: '/', hash: 'courses' },
  { label: 'For Colleges & Institutions', path: '/', hash: 'colleges' },
  { label: 'Our Services', path: '/', hash: 'services' },
  { label: 'Student Testimonials', path: '/', hash: 'testimonials' },
  { label: 'Partner Colleges', path: '/', hash: 'partners' },
  { label: 'Latest from Our Blog', path: '/', hash: 'blog' },
  { label: 'About InfySkill', path: '/about' },
  { label: 'Our Story', path: '/about', hash: 'story' },
  { label: 'Mission, Vision & Values', path: '/about', hash: 'mission' },
  { label: 'Our Journey', path: '/about', hash: 'journey' },
  { label: 'Why Choose InfySkill', path: '/about', hash: 'why-infyskill' },
]

const LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
]

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const open = menuOpen || searchOpen
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen, searchOpen])

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setMenuOpen(false)
      setSearchOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const results = query.trim()
    ? SECTIONS.filter((s) =>
        s.label.toLowerCase().includes(query.trim().toLowerCase()),
      )
    : SECTIONS.slice(0, 6)

  const go = (item) => {
    setSearchOpen(false)
    setQuery('')
    navigate(`${item.path}${item.hash ? `#${item.hash}` : ''}`)
  }

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <>
      {/* Slim utility strip */}
      <div className="hidden bg-navy-900 text-white lg:block">
        <div className="container-site flex h-9 items-center justify-between text-[12.5px] text-navy-200">
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" />
            {SITE.location}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-accent-300"
            >
              <Phone className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" />
              {SITE.phone}
            </a>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <a
              href={SITE.emailPrimaryHref}
              className="flex items-center gap-2 transition-colors hover:text-accent-300"
            >
              <Mail className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" />
              {SITE.emailPrimary}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled
            ? 'border-navy-100 shadow-[0_6px_24px_-14px_rgba(11,31,58,0.35)]'
            : 'border-transparent'
        }`}
      >
        <div className="container-site flex h-[70px] items-center justify-between gap-4 lg:h-[76px]">
          <Link to="/" className="shrink-0" aria-label="InfySkill EduTech — home">
            <InfySkillLogo />
          </Link>

          {/* Desktop menu */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                    className={`relative rounded-lg px-3.5 py-2 text-[13.5px] font-semibold transition-colors ${
                      isActive(link.path)
                        ? 'text-brand-700'
                        : 'text-navy-700 hover:text-brand-600'
                    }`}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <span
                        className="absolute inset-x-3 -bottom-px h-[3px] rounded-full bg-accent-500"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search InfySkill"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy-100 text-navy-700 transition-colors hover:border-brand-200 hover:text-brand-600"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onOpenEnquiry}
              className="btn btn-primary hidden !min-h-11 !px-5 sm:inline-flex"
            >
              Enquire Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white lg:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="animate-fade-up border-t border-navy-100 bg-white lg:hidden"
          >
            <nav aria-label="Mobile" className="container-site py-5">
              <ul className="grid gap-1">
                {LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                        isActive(link.path)
                          ? 'bg-brand-50 text-brand-700'
                          : 'text-navy-800 hover:bg-mist'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid gap-3 border-t border-navy-100 pt-5">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false)
                    onOpenEnquiry()
                  }}
                  className="btn btn-primary w-full"
                >
                  Enquire Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <a
                  href={SITE.phoneHref}
                  className="btn btn-outline w-full"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> {SITE.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-navy-950/70 px-4 pt-[12vh] backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Search InfySkill"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSearchOpen(false)
          }}
        >
          <div className="w-full max-w-xl animate-fade-up overflow-hidden rounded-2xl bg-white shadow-lift">
            <div className="flex items-center gap-3 border-b border-navy-100 px-5">
              <Search className="h-5 w-5 shrink-0 text-navy-300" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && results[0]) go(results[0])
                }}
                type="search"
                placeholder="Search courses, placements, workshops…"
                aria-label="Search"
                className="h-14 w-full bg-transparent text-[15px] text-ink placeholder:text-navy-300 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="shrink-0 rounded-lg p-2 text-navy-400 transition-colors hover:bg-mist hover:text-navy-900"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <ul className="max-h-[46vh] overflow-y-auto p-2">
              {results.length === 0 && (
                <li className="px-4 py-8 text-center text-sm text-muted">
                  Nothing matched “{query}”. Try “courses” or “placements”.
                </li>
              )}
              {results.map((item) => (
                <li key={`${item.path}-${item.label}`}>
                  <button
                    type="button"
                    onClick={() => go(item)}
                    className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-left text-sm font-semibold text-navy-800 transition-colors hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 shrink-0 text-navy-300" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
