import { useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  CheckCircle2,
  MessageCircle,
  Quote,
  Star,
} from 'lucide-react'
import Icon from '../components/Icon'
import SectionHeader from '../components/SectionHeader'
import CtaBanner from '../components/CtaBanner'
import HandNote from '../components/HandNote'
import {
  BLOG_PREVIEW,
  COLLEGE_CHECKLIST,
  COURSES,
  HERO_STATS,
  HERO_TAGS,
  PARTNER_COLLEGES,
  SERVICES,
  STATS,
  TESTIMONIALS,
  TRUST_MARKS,
} from '../data/site'

const HERO_PHOTO =
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1100&q=80'
const CAMPUS_PHOTO =
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80'
const CTA_PHOTO =
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80'

/* A quiet marquee keeps the logo strips from adding page height. */
function LogoStrip({ items, dark = false }) {
  const row = [...items, ...items]
  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <ul className="flex w-max animate-marquee items-center gap-4 group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <li
            key={`${item.label ?? item.name}-${i}`}
            aria-hidden={i >= items.length}
            className={`flex shrink-0 items-center gap-3 rounded-2xl px-5 py-3.5 ${
              dark
                ? 'bg-white/[0.06] ring-1 ring-inset ring-white/10'
                : 'card'
            }`}
          >
            {item.monogram ? (
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-[13px] font-extrabold ${
                  dark ? 'bg-accent-500 text-white' : 'bg-navy-900 text-white'
                }`}
              >
                {item.monogram}
              </span>
            ) : (
              <CheckCircle2
                className={`h-5 w-5 shrink-0 ${dark ? 'text-accent-400' : 'text-brand-600'}`}
                aria-hidden="true"
              />
            )}
            <span className="min-w-0">
              <span
                className={`block whitespace-nowrap text-sm font-bold ${
                  dark ? 'text-white' : 'text-navy-900'
                }`}
              >
                {item.label ?? item.name}
              </span>
              {item.sub && (
                <span
                  className={`block whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.1em] ${
                    dark ? 'text-navy-300' : 'text-muted'
                  }`}
                >
                  {item.sub}
                </span>
              )}
              {item.city && (
                <span className="block whitespace-nowrap text-[11px] text-muted">
                  {item.city}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Home({ onOpenEnquiry }) {
  const [brochureNote, setBrochureNote] = useState(false)

  return (
    <>
      {/* ============================ 1. HERO ============================ */}
      <section className="relative overflow-hidden bg-mist">
        <div className="bg-dots absolute inset-0 opacity-70" aria-hidden="true" />
        <div
          className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-100/70 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-site relative grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-24">
          {/* Left */}
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-navy-700 shadow-soft ring-1 ring-navy-100 sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden="true" />
              Industry-Ready Skills for a Brighter Tomorrow
            </p>

            <h1 className="h-display mt-6 text-[2.6rem] leading-[1.05] text-ink sm:text-6xl lg:text-[4.25rem]">
              Learn. Build.{' '}
              <span className="relative whitespace-nowrap text-accent-500">
                Get Placed.
                <svg
                  viewBox="0 0 220 12"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-accent-300"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8c34-6 76 3 112-3 26-4 62-2 102 2"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="body-copy mx-auto mt-7 max-w-xl lg:mx-0">
              InfySkill EduTech empowers BTech, Degree and MCA students with
              practical, industry-aligned skills — through live projects, expert
              trainers and a placement cell that stays with you until you are
              hired.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="btn btn-primary !min-h-13 px-7"
              >
                Talk to Our Team <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <a href="#courses" className="btn btn-outline !min-h-13 px-7">
                Explore Courses
              </a>
            </div>

            <ul className="mt-9 grid grid-cols-2 gap-x-4 gap-y-3.5 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              {HERO_TAGS.map((tag) => (
                <li key={tag.label} className="flex items-center gap-2">
                  <Icon name={tag.icon} className="h-4 w-4 shrink-0 text-accent-500" />
                  <span className="text-[13px] font-semibold text-navy-800">
                    {tag.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-brand-600/15 to-accent-500/20 blur-sm" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl bg-navy-900 shadow-lift ring-1 ring-navy-900/10">
                <img
                  src={HERO_PHOTO}
                  alt="InfySkill students working together on laptops and projects"
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
                  fetchPriority="high"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                  <span className="block rounded-2xl bg-white/95 px-4 py-2.5 shadow-card backdrop-blur">
                    <HandNote className="text-xl text-navy-900 sm:text-2xl" rotate={-4}>
                      Skills today,
                    </HandNote>
                    <HandNote
                      className="-mt-0.5 block text-xl text-accent-600 sm:text-2xl"
                      rotate={-2}
                    >
                      Success tomorrow
                    </HandNote>
                  </span>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="relative z-10 mx-auto -mt-10 w-[92%] rounded-2xl border border-navy-100 bg-white p-5 shadow-lift sm:-mt-12 sm:ml-0 sm:w-[86%] lg:absolute lg:bottom-8 lg:-left-6 lg:mt-0 lg:w-[290px]">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-5">
                {HERO_STATS.map((s) => (
                  <li key={s.label}>
                    <p className="font-display text-2xl font-extrabold text-navy-900">
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-[11.5px] font-medium leading-snug text-muted">
                      {s.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= 2. TRUST BAR ========================= */}
      <section className="bg-navy-900 py-12 text-white sm:py-14">
        <div className="container-site">
          <h2 className="text-center text-xs font-bold uppercase tracking-[0.22em] text-navy-300">
            Trusted by Students and Colleges Across India
          </h2>
          <div className="mt-8">
            <LogoStrip items={TRUST_MARKS} dark />
          </div>
        </div>
      </section>

      {/* ====================== 3. POPULAR COURSES ====================== */}
      <section id="courses" className="section-pad bg-white">
        <div className="container-site">
          <SectionHeader
            eyebrow="Popular Courses"
            title="Skills that recruiters actually ask for"
            description="Six focused tracks, each built around live tools, real datasets and a project you can show an interviewer."
            action={
              /* TODO: point this at /courses once that page is built. */
              <button type="button" onClick={onOpenEnquiry} className="text-link">
                View All <span aria-hidden="true">→</span>
              </button>
            }
          />

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {COURSES.map((course) => (
              <li key={course.id}>
                <article className="card card-hover group flex h-full flex-col p-6 sm:p-7">
                  <span className="icon-circle bg-accent-50 text-accent-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                    <Icon name={course.icon} />
                  </span>

                  <h3 className="mt-5 font-display text-lg font-bold text-ink">
                    {course.title}
                  </h3>
                  <p className="body-copy mt-2 flex-1 text-sm">{course.blurb}</p>

                  <div className="mt-5 flex items-center justify-between border-t border-navy-100 pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-navy-400">
                      {course.meta}
                    </span>
                    <button
                      type="button"
                      onClick={onOpenEnquiry}
                      className="text-link text-[13px]"
                    >
                      Know More <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ 4. COLLEGES + SERVICES TWO-COLUMN BLOCK ============ */}
      <section id="colleges" className="section-pad surface-mist">
        <div className="container-site grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* For colleges */}
          <article className="card flex flex-col overflow-hidden">
            <div className="relative h-52 w-full overflow-hidden sm:h-60">
              <img
                src={CAMPUS_PHOTO}
                alt="Campus building of a partner college"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="eyebrow-bar eyebrow-bar-light">For Colleges</p>
                <h2 className="h-display mt-2 text-2xl text-white sm:text-3xl">
                  For Colleges &amp; Institutions
                </h2>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <ul className="grid gap-4">
                {COLLEGE_CHECKLIST.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-success"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block text-[15px] font-bold text-ink">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-muted">
                        {item.blurb}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={onOpenEnquiry}
                className="btn btn-navy mt-7 w-full sm:w-fit sm:px-7"
              >
                Partner with Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </article>

          {/* Services 2x2 */}
          <div
            id="services"
            className="card scroll-mt-24 p-6 sm:p-8"
          >
            <p className="eyebrow-bar">
              <span className="h-6 w-[3px] rounded-full bg-accent-500" aria-hidden="true" />
              What We Do
            </p>
            <h2 className="h-display mt-3 text-2xl text-ink sm:text-3xl">
              Our Services
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <article
                  key={service.id}
                  className="group flex flex-col rounded-2xl border border-navy-100 bg-mist/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:bg-white hover:shadow-card"
                >
                  <span className="icon-circle-sm bg-white text-brand-600 shadow-soft transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-[15px] font-bold leading-snug text-ink">
                    {service.title}
                  </h3>
                  <p className="body-copy mt-1.5 flex-1 text-[13.5px]">
                    {service.blurb}
                  </p>
                </article>
              ))}
            </div>

            <button
              type="button"
              onClick={onOpenEnquiry}
              className="btn btn-outline mt-7 w-full sm:w-fit sm:px-6"
            >
              Explore All Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================= 5. STATS BAND ========================= */}
      <section id="stats" className="border-y border-navy-100 bg-mist py-14 sm:py-16">
        <div className="container-site">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-10 text-center sm:gap-8 lg:grid-cols-5">
            {STATS.map((stat) => (
              <li key={stat.label} className="flex flex-col items-center">
                <span className="icon-circle-sm bg-white text-accent-500 shadow-soft">
                  <Icon name={stat.icon} className="h-5 w-5" />
                </span>
                <p className="mt-4 font-display text-[1.75rem] font-extrabold leading-none text-navy-900 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[12.5px] font-semibold leading-snug text-muted">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ======================= 6. TESTIMONIALS ======================= */}
      <section id="testimonials" className="section-pad bg-white">
        <div className="container-site">
          <SectionHeader
            eyebrow="Student Stories"
            title="What Our Students Say"
            description="Unedited words from students who walked into InfySkill classrooms and walked out with offers."
            action={
              <button type="button" onClick={onOpenEnquiry} className="text-link">
                Join them <span aria-hidden="true">→</span>
              </button>
            }
          />

          <ul className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <li key={t.id}>
                <figure className="card card-hover flex h-full flex-col p-6 sm:p-7">
                  <Quote
                    className="h-7 w-7 shrink-0 text-accent-200"
                    aria-hidden="true"
                  />
                  <div
                    className="mt-4 flex items-center gap-0.5"
                    role="img"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent-500 text-accent-500"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy-800">
                    {t.quote}
                  </blockquote>

                  <figcaption className="mt-6 flex items-center gap-3.5 border-t border-navy-100 pt-5">
                    <img
                      src={t.avatar}
                      alt=""
                      loading="lazy"
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />
                    <span>
                      <span className="block text-[15px] font-bold text-ink">
                        {t.name}
                      </span>
                      <span className="block text-[12.5px] text-muted">
                        {t.course} · {t.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================== 7. COLLEGE PARTNERS ===================== */}
      <section id="partners" className="surface-mist py-14 sm:py-16">
        <div className="container-site">
          <h2 className="text-center font-display text-lg font-bold text-navy-900 sm:text-2xl">
            College Partners
          </h2>
          <p className="mx-auto mt-2.5 max-w-2xl text-center text-sm text-muted">
            Workshops, FDPs and placement training delivered inside campuses across
            Andhra Pradesh.
          </p>
          <div className="mt-8">
            <LogoStrip items={PARTNER_COLLEGES} />
          </div>
        </div>
      </section>

      {/* ======================== 8. CTA BANNER ======================== */}
      <CtaBanner
        eyebrow="Enquire Today"
        title="Ready to Upgrade Your Skills?"
        body="Tell us your branch, year and what you want to be hired for. We will map the fastest route — course, batch and placement support — and call you back within a working day."
        note="Your future starts here!"
        photo={CTA_PHOTO}
        photoAlt="Smiling InfySkill students after placement"
        onEnquire={onOpenEnquiry}
        onDownload={() => setBrochureNote(true)}
      />

      {brochureNote && (
        <div role="status" className="bg-white pb-8 pt-8">
          <div className="container-site">
            <p className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-2xl bg-brand-50 px-5 py-3.5 text-center text-sm font-semibold text-brand-800 ring-1 ring-inset ring-brand-100">
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Brochure link sent —</span>
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="underline underline-offset-2"
              >
                confirm your email with us
              </button>
              <button
                type="button"
                onClick={() => setBrochureNote(false)}
                className="rounded px-1 text-brand-600 underline underline-offset-2"
              >
                Dismiss
              </button>
            </p>
          </div>
        </div>
      )}

      {/* ====================== 9. BLOG PREVIEW ====================== */}
      <section id="blog" className="section-pad bg-white">
        <div className="container-site">
          <SectionHeader
            eyebrow="From the Blog"
            title="Latest from Our Blog"
            description="Practical guides on skills, interviews and campus hiring — written by the same mentors who run our batches."
            action={
              <button type="button" onClick={onOpenEnquiry} className="text-link">
                View All <span aria-hidden="true">→</span>
              </button>
            }
          />

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {BLOG_PREVIEW.map((post) => (
              <li key={post.id}>
                <article className="card card-hover group h-full overflow-hidden">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-navy-900 shadow-soft">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="flex items-center gap-2 text-[12px] font-semibold text-accent-600">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.date}
                    </p>
                    <h3 className="mt-2.5 font-display text-base font-bold leading-snug text-ink">
                      {post.title}
                    </h3>
                    <button
                      type="button"
                      onClick={onOpenEnquiry}
                      className="text-link mt-4 text-[13px]"
                    >
                      Read article <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
