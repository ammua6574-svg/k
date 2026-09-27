import { Link } from 'react-router-dom'
import { ArrowRight, Check, ChevronRight, Play, Quote } from 'lucide-react'
import Icon from '../components/Icon'
import SectionHeader from '../components/SectionHeader'
import CtaBanner from '../components/CtaBanner'
import {
  PILLARS,
  SITE,
  STATS,
  STORY_PARAGRAPHS,
  TIMELINE,
  VALUES,
  WHY_CHOOSE,
} from '../data/site'

const ABOUT_PHOTO =
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1100&q=80'
const STORY_PHOTO =
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80'
const CTA_PHOTO =
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80'

const PILLAR_TONES = {
  brand: { chip: 'bg-brand-600', card: 'bg-brand-50 ring-brand-100' },
  accent: { chip: 'bg-accent-500', card: 'bg-accent-50 ring-accent-100' },
  success: { chip: 'bg-success', card: 'bg-success-soft ring-success/20' },
}

export default function AboutPage({ onOpenEnquiry }) {
  return (
    <>
      {/* ========================= 1. BREADCRUMB ========================= */}
      <nav aria-label="Breadcrumb" className="border-b border-navy-100 bg-mist">
        <ol className="container-site flex items-center gap-1.5 py-3.5 text-[13px]">
          <li>
            <Link
              to="/"
              className="font-semibold text-muted transition-colors hover:text-brand-600"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-navy-300">
            <ChevronRight className="h-3.5 w-3.5" />
          </li>
          <li>
            <span aria-current="page" className="font-bold text-navy-900">
              About Us
            </span>
          </li>
        </ol>
      </nav>

      {/* =========================== 2. HERO =========================== */}
      <section className="relative overflow-hidden bg-white">
        <div className="bg-dots absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-site relative grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div>
            <p className="eyebrow-bar">
              <span className="h-6 w-[3px] rounded-full bg-accent-500" aria-hidden="true" />
              About Us
            </p>

            <h1 className="h-display mt-4 text-[2.25rem] leading-[1.08] text-ink sm:text-5xl lg:text-[3.5rem]">
              About <span className="text-brand-600">InfySkill</span>
            </h1>

            <p className="mt-4 font-display text-lg font-semibold text-navy-900 sm:text-xl">
              Empowering Students. Building Better Futures.
            </p>

            <div className="body-copy mt-5 max-w-xl space-y-3.5">
              <p>
                {SITE.name} exists to close one specific gap — the distance between
                what a student learns in a classroom and what an employer asks for
                in an interview.
              </p>
              <p>
                We work alongside colleges and students to build practical,
                industry-relevant capability: live projects, real tools, honest
                feedback and structured placement support.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#story" className="btn btn-primary !min-h-13 px-7">
                Our Journey <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="btn btn-outline !min-h-13 px-7"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                Watch Our Story
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative overflow-hidden rounded-3xl bg-navy-900 shadow-lift">
              <img
                src={ABOUT_PHOTO}
                alt="InfySkill students at graduation"
                className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[440px]"
                fetchPriority="high"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Pull quote */}
            <figure className="relative z-10 mx-auto -mt-8 w-[94%] rounded-2xl border border-navy-100 bg-white p-5 shadow-lift sm:-mt-10 sm:ml-0 sm:w-[88%] lg:absolute lg:bottom-6 lg:-left-4 lg:mt-0 lg:w-[320px]">
              <Quote className="h-6 w-6 text-accent-300" aria-hidden="true" />
              <blockquote className="mt-2 font-display text-[15px] font-semibold leading-snug text-navy-900">
                “Education is not just about degrees, but about creating
                opportunities.”
              </blockquote>
              <figcaption className="mt-3 text-[12px] font-bold uppercase tracking-[0.12em] text-accent-600">
                — {SITE.founder}, {SITE.founderTitle}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ========================= 3. STATS ROW ========================= */}
      <section className="border-y border-navy-100 bg-mist py-12 sm:py-14">
        <div className="container-site">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-9 text-center sm:gap-8 lg:grid-cols-5">
            {STATS.map((stat) => (
              <li key={stat.label} className="flex flex-col items-center">
                <span className="icon-circle-sm bg-white text-accent-500 shadow-soft">
                  <Icon name={stat.icon} className="h-5 w-5" />
                </span>
                <p className="mt-3.5 font-display text-[1.6rem] font-extrabold leading-none text-navy-900 sm:text-[2rem]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] font-semibold leading-snug text-muted">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========================= 4. OUR STORY ========================= */}
      <section id="story" className="section-pad bg-white">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-navy-900 shadow-card">
              <img
                src={STORY_PHOTO}
                alt="The InfySkill team planning a training session"
                loading="lazy"
                className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[460px]"
              />
            </div>
            <div className="absolute -bottom-6 left-4 hidden rounded-2xl bg-accent-500 px-5 py-4 shadow-lift sm:block lg:-left-6">
              <p className="font-display text-2xl font-extrabold leading-none text-white">
                12,000+
              </p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white/85">
                Students Trained
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow-bar">
              <span className="h-6 w-[3px] rounded-full bg-accent-500" aria-hidden="true" />
              Our Story
            </p>
            <h2 className="h-display mt-3 text-[1.75rem] text-ink sm:text-4xl">
              From a Vision to a Growing Impact
            </h2>

            <div className="mt-5 space-y-4">
              {STORY_PARAGRAPHS.map((p) => (
                <p key={p.slice(0, 24)} className="body-copy">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-navy-100 pt-7 sm:flex-row sm:items-center">
              <div>
                <p className="font-hand text-4xl text-navy-900">{SITE.founder}</p>
                <p className="mt-0.5 text-[12px] font-bold uppercase tracking-[0.14em] text-accent-600">
                  {SITE.founderTitle}
                </p>
              </div>
              <div className="sm:ml-auto">
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="btn btn-outline w-full sm:w-auto sm:px-6"
                >
                  Talk to {SITE.founder.split(' ')[0]}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============== 5. MISSION / VISION / VALUES =============== */}
      <section id="mission" className="section-pad surface-mist">
        <div className="container-site">
          <SectionHeader
            eyebrow="What Drives Us"
            title={<>Mission, Vision &amp; Values</>}
            description="Three things we will not compromise on, no matter how large we grow."
          />

          <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-3">
            {PILLARS.map((p) => {
              const tone = PILLAR_TONES[p.tone]
              return (
                <article
                  key={p.id}
                  className={`rounded-2xl p-6 ring-1 ring-inset sm:p-8 ${tone.card}`}
                >
                  <span
                    className={`icon-circle text-white shadow-sm ${tone.chip}`}
                  >
                    <Icon name={p.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="body-copy mt-2.5">{p.body}</p>
                </article>
              )
            })}

            <article className="rounded-2xl bg-success-soft p-6 ring-1 ring-inset ring-success/20 sm:p-8">
              <span className="icon-circle bg-success text-white shadow-sm">
                <Check className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">
                Our Values
              </h3>
              <ul className="mt-4 grid gap-2.5">
                {VALUES.map((v) => (
                  <li key={v} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-success"
                      aria-hidden="true"
                    />
                    <span className="text-[14.5px] font-semibold text-navy-800">
                      {v}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ======================= 6. JOURNEY TIMELINE ======================= */}
      <section id="journey" className="section-pad bg-white">
        <div className="container-site">
          <SectionHeader
            eyebrow="Our Journey"
            title="Milestones that built InfySkill"
            description="From free weekend workshops in Visakhapatnam to a pan-India training network — one batch at a time."
          />

          {/* Desktop: horizontal rail */}
          <div className="mt-12 hidden lg:mt-16 lg:block">
            <ol className="relative grid grid-cols-9 gap-3">
              <span
                className="absolute left-0 right-0 top-[26px] h-[3px] rounded-full bg-navy-100"
                aria-hidden="true"
              />
              <span
                className="absolute left-0 top-[26px] h-[3px] w-3/4 rounded-full bg-gradient-to-r from-brand-600 to-accent-500"
                aria-hidden="true"
              />

              {TIMELINE.map((item) => (
                <li key={item.year} className="relative text-center">
                  <span className="icon-circle-sm relative mx-auto border-4 border-white bg-navy-900 text-accent-400 shadow-card">
                    <Icon name={item.icon} className="h-4.5 w-4.5" />
                  </span>
                  <p className="mt-4 font-display text-sm font-extrabold text-accent-600">
                    {item.year}
                  </p>
                  <h3 className="mt-1.5 font-display text-[13.5px] font-bold leading-snug text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Mobile: vertical rail */}
          <ol className="mt-10 space-y-6 lg:hidden">
            {TIMELINE.map((item, i) => (
              <li key={item.year} className="relative flex gap-4 pl-2">
                {i < TIMELINE.length - 1 && (
                  <span
                    className="absolute left-[26px] top-12 h-[calc(100%+0.75rem)] w-[2px] bg-navy-100"
                    aria-hidden="true"
                  />
                )}
                <span className="icon-circle-sm relative z-10 bg-navy-900 text-accent-400">
                  <Icon name={item.icon} className="h-4.5 w-4.5" />
                </span>
                <div className="pb-1">
                  <p className="font-display text-sm font-extrabold text-accent-600">
                    {item.year}
                  </p>
                  <h3 className="mt-0.5 font-display text-base font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="body-copy mt-1 text-sm">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ==================== 7. WHY CHOOSE INFYSKILL ==================== */}
      <section id="why-infyskill" className="section-pad surface-mist">
        <div className="container-site">
          <SectionHeader
            eyebrow="Why InfySkill"
            title="Why Choose InfySkill"
            description="Six reasons colleges and students keep coming back to us."
          />

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {WHY_CHOOSE.map((item) => (
              <li key={item.title}>
                <article className="card card-hover group flex h-full items-start gap-4 p-6">
                  <span className="icon-circle-sm bg-navy-900 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold leading-snug text-ink">
                      {item.title}
                    </h3>
                    <p className="body-copy mt-1.5 text-sm">{item.blurb}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ======================== 8. CTA BANNER ======================== */}
      <CtaBanner
        eyebrow="Join Us"
        title="Be a Part of Our Journey"
        body="Whether you are a student looking to get hired, or a college looking to upgrade your placement outcomes — there is a place for you at InfySkill."
        note="Let’s build it together."
        photo={CTA_PHOTO}
        photoAlt="InfySkill students and mentors"
        onEnquire={onOpenEnquiry}
      />
    </>
  )
}
