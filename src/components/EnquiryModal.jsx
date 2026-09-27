import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, PhoneCall, Send, X } from 'lucide-react'
import { COURSES, SITE } from '../data/site'

const INTERESTS = [
  'Student Skill Training',
  'College Training Program',
  'Workshops & FDPs',
  'Placement Support',
  'Internship Program',
  'Company / Corporate Training',
  'Project Guidance',
]

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  interest: INTERESTS[0],
  course: '',
  message: '',
}

export default function EnquiryModal({ isOpen, onClose }) {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const firstFieldRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => firstFieldRef.current?.focus(), 60)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      clearTimeout(t)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your full name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = 'Enter a valid email address.'
    if (form.phone.replace(/\D/g, '').length < 10)
      next.phone = 'Enter a 10-digit phone number.'

    setErrors(next)
    if (Object.keys(next).length) {
      document.getElementById(Object.keys(next)[0])?.focus()
      return
    }
    setSent(true)
  }

  const close = () => {
    setForm(EMPTY)
    setErrors({})
    setSent(false)
    onClose()
  }

  const fieldLabel = 'mb-1.5 block text-xs font-bold uppercase tracking-[0.12em] text-navy-600'
  const errorText = 'mt-1.5 text-xs font-medium text-accent-600'

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center overflow-y-auto bg-navy-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
      onMouseDown={(e) => e.target === e.currentTarget && close()}
    >
      <div className="relative w-full max-w-2xl animate-fade-up overflow-hidden rounded-t-3xl bg-white shadow-lift sm:rounded-3xl">
        <span className="block h-1.5 w-full bg-gradient-to-r from-brand-600 via-accent-500 to-navy-900" aria-hidden="true" />

        <button
          type="button"
          onClick={close}
          aria-label="Close enquiry form"
          className="absolute right-4 top-5 rounded-lg p-2 text-navy-400 transition-colors hover:bg-mist hover:text-navy-900"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {sent ? (
          <div className="px-6 py-14 text-center sm:px-12">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-soft text-success">
              <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
            </span>
            <h2 id="enquiry-title" className="h-display mt-6 text-2xl text-ink">
              Enquiry received, {form.name.split(' ')[0]}!
            </h2>
            <p className="body-copy mx-auto mt-3 max-w-sm">
              Thank you for choosing InfySkill. Our counselling team will reach
              out within one working day about{' '}
              <strong className="text-navy-900">{form.interest.toLowerCase()}</strong>.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <button type="button" onClick={close} className="btn btn-primary">
                Done
              </button>
              <a href={SITE.phoneHref} className="btn btn-outline">
                <PhoneCall className="h-4 w-4" aria-hidden="true" /> {SITE.phone}
              </a>
            </div>
          </div>
        ) : (
          <div className="px-6 pb-8 pt-7 sm:px-10 sm:pb-10">
            <p className="eyebrow-bar">Free Counselling</p>
            <h2 id="enquiry-title" className="h-display mt-2.5 text-2xl text-ink sm:text-3xl">
              Tell us what you want to learn
            </h2>
            <p className="body-copy mt-2">
              Share a few details and a InfySkill mentor will call you back within
              one working day.
            </p>

            <form onSubmit={submit} noValidate className="mt-6 grid gap-4">
              <div>
                <label htmlFor="name" className={fieldLabel}>
                  Full Name <span className="text-accent-600">*</span>
                </label>
                <input
                  ref={firstFieldRef}
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={set('name')}
                  autoComplete="name"
                  placeholder="Your full name"
                  aria-invalid={Boolean(errors.name)}
                  className="field"
                />
                {errors.name && <p className={errorText}>{errors.name}</p>}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={fieldLabel}>
                    Email <span className="text-accent-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    autoComplete="email"
                    placeholder="you@college.edu"
                    aria-invalid={Boolean(errors.email)}
                    className="field"
                  />
                  {errors.email && <p className={errorText}>{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className={fieldLabel}>
                    Phone <span className="text-accent-600">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    autoComplete="tel"
                    placeholder="10-digit mobile"
                    aria-invalid={Boolean(errors.phone)}
                    className="field"
                  />
                  {errors.phone && <p className={errorText}>{errors.phone}</p>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="interest" className={fieldLabel}>
                    I am interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={form.interest}
                    onChange={set('interest')}
                    className="field"
                  >
                    {INTERESTS.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="course" className={fieldLabel}>
                    Course of interest
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={form.course}
                    onChange={set('course')}
                    className="field"
                  >
                    <option value="">Not sure yet</option>
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={fieldLabel}>
                  Your question
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="College name, year of study, or anything specific…"
                  className="field resize-none"
                />
              </div>

              <button type="submit" className="btn btn-primary mt-1 w-full !min-h-13">
                <Send className="h-4 w-4" aria-hidden="true" /> Submit Enquiry
              </button>
              <p className="text-center text-xs text-muted">
                We never share your details. Prefer to talk now?{' '}
                <a href={SITE.phoneHref} className="font-semibold text-brand-700 underline">
                  {SITE.phone}
                </a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
