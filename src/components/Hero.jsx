import { Link } from 'react-router-dom'
import { ArrowRight, Check, ChevronDown, Phone, Sparkles } from 'lucide-react'
import HeroIllustration from './HeroIllustration'
import Reveal from './Reveal'

const floatingSteps = ['BUILD SKILLS', 'GAIN CONFIDENCE', 'GET PLACED']

const stats = [
  ['2,500+', 'Learners Trained'],
  ['20+', 'Corporate Programs'],
  ['100%', 'Job-Ready Focus'],
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-950 dark:bg-[#040b1a]"
    >
      {/* Layered background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0f2a5e] dark:from-[#040b1a] dark:via-navy-900 dark:to-[#0d244d]"
        aria-hidden="true"
      />
      <div
        className="bg-grid-light pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-[8%] h-[520px] w-[520px] rounded-full bg-orange-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-40 h-[560px] w-[560px] rounded-full bg-navy-500/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative grid items-center gap-16 pt-16 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-20">
        {/* Copy */}
        <div className="max-w-2xl">
          <Reveal>
            <span className="glass-card inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
              <Sparkles className="h-3.5 w-3.5 text-orange-400" aria-hidden="true" />
              Training • Internships • Projects • Careers
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 font-heading text-[2.7rem] leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl xl:text-[4.1rem]">
              EMPOWERING
              <br />
              SKILLS <span className="text-gradient-orange">TRANSFORMING</span>
              <br />
              FUTURES
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-heading text-lg font-bold text-navy-100 sm:text-xl">
              Practical Learning.
              <span className="text-orange-400">Real Skills.</span>
              Better Careers.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-200/90 sm:text-lg">
              InfySkill delivers industry-relevant training programs to
              Graduates &amp; Post Graduates, empowering them with job-ready
              skills and helping them build successful, future-ready careers.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/services" className="btn btn-primary px-8! shadow-orange-500/40">
                Explore Our Services
                <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn btn-outline-white">
                <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Illustration */}
        <Reveal delay={200} from="right">
          <div className="relative mx-auto max-w-[540px]">
            <div
              className="absolute -inset-8 rounded-full bg-gradient-to-tr from-orange-500/25 via-navy-500/20 to-transparent blur-2xl"
              aria-hidden="true"
            />
            <div className="glass-card relative rounded-[2rem] p-3 shadow-2xl shadow-navy-950/60">
              <div className="overflow-hidden rounded-3xl">
                <div className="animate-float-slow">
                  <HeroIllustration />
                </div>
              </div>

              {/* Floating goal card */}
              <div className="absolute -bottom-7 left-1/2 z-10 w-[252px] -translate-x-1/2 animate-float rounded-2xl border border-white/15 bg-navy-900/90 p-4 shadow-2xl shadow-navy-950/60 backdrop-blur-xl sm:left-8 sm:translate-x-0">
                <ul className="space-y-2.5">
                  {floatingSteps.map((step) => (
                    <li key={step} className="flex items-center gap-2.5">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-orange-500">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-[12.5px] font-extrabold tracking-[0.14em] text-white">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floating AI badge */}
              <div className="absolute -top-4 right-4 z-10 animate-float-slow rounded-xl border border-white/15 bg-navy-900/90 px-4 py-2.5 shadow-xl shadow-navy-950/50 backdrop-blur-xl">
                <p className="flex items-center gap-2 text-[12px] font-bold text-white">
                  <Sparkles className="h-4 w-4 text-orange-400" aria-hidden="true" />
                  AI-Powered Practice Platform
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Stats strip */}
      <div className="container-site relative pb-20">
        <Reveal delay={300}>
          <div className="glass-card grid divide-y divide-white/10 rounded-2xl sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 px-6 py-6 text-center"
              >
                <span className="font-heading text-3xl font-extrabold text-white sm:text-[2rem]">
                  <span className="text-gradient-orange">{value}</span>
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-navy-200">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <Link
        to="/about"
        aria-label="Scroll to about section"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-navy-300 transition-colors hover:text-orange-400 lg:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Discover</span>
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </Link>
    </section>
  )
}