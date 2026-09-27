import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bot, Check, Code2, Laptop, Phone, Sparkles, Trophy, Users } from 'lucide-react'
import HeroIllustration from './HeroIllustration'
import Reveal from './Reveal'

const previewTabs = [
  {
    id: 'technical',
    label: 'Technical Training',
    icon: Code2,
    badge: 'Core & Advanced',
    title: 'Master Full Stack, AI & Data Structures',
    desc: 'Rigorous coding labs and hands-on programming sessions designed for engineers.',
    stats: '95% Coding Proficiency',
  },
  {
    id: 'crt',
    label: 'Campus CRT',
    icon: Users,
    badge: 'Placement Focused',
    title: 'Aptitude, Verbal & Interview Mastery',
    desc: 'Structured training programs taking students from campus to top corporate careers.',
    stats: '500+ Placements Achieved',
  },
  {
    id: 'platform',
    label: 'Smart Platform',
    icon: Bot,
    badge: 'AI Powered',
    title: 'AI Mock Interviews & Practice Tests',
    desc: 'Real-time practice tests, AI group discussions, and ATS resume builder.',
    stats: '4,860+ Tests Completed',
  },
  {
    id: 'projects',
    label: 'Live Projects',
    icon: Laptop,
    badge: 'Real-World Experience',
    title: 'Mini & Major Industry Projects',
    desc: 'Build production-ready applications with guidance from senior industry experts.',
    stats: '100% Practical Exposure',
  },
]

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0)
  const currentTab = previewTabs[activeTab]

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-950 py-20 lg:py-28 text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(4, 11, 26, 0.92), rgba(4, 11, 26, 0.97))`,
      }}
    >
      {/* Background glow accents */}
      <div
        className="pointer-events-none absolute -top-40 right-[15%] h-[520px] w-[520px] rounded-full bg-orange-500/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-32 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left Copy */}
        <div className="max-w-2xl text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-400 border border-orange-500/30">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Empowering Skills. Transforming Futures.
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl leading-[1.1]">
              Learn. Grow. <br />
              <span className="text-gradient-orange">Get Hired.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-lg font-medium text-navy-200 sm:text-xl leading-relaxed">
              InfySkill partners with colleges and educational institutions to deliver practical, industry-aligned training that builds technical excellence and career readiness.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/services" className="btn btn-primary px-8! py-3.5! shadow-lg shadow-orange-500/30">
                Explore Courses
                <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn btn-outline-white px-8! py-3.5!">
                <Phone className="h-4.5 w-4.5 text-orange-400" aria-hidden="true" />
                Talk to Us
              </Link>
            </div>
          </Reveal>

          {/* Quick trust metrics */}
          <Reveal delay={320}>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {['7,000+ Students', '10+ Partner Colleges', 'Expert Mentors'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-xs font-bold text-navy-100">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right Interactive Preview Card */}
        <Reveal delay={200} from="right">
          <div className="relative mx-auto max-w-[540px]">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blue-600/30 via-orange-500/20 to-transparent blur-2xl" aria-hidden="true" />
            
            <div className="relative rounded-[2.5rem] border border-white/20 bg-navy-900/90 p-6 shadow-2xl shadow-navy-950/90 backdrop-blur-2xl">
              {/* Window Controls */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-orange-500" />
                  <span className="h-3 w-3 rounded-full bg-orange-300" />
                  <span className="h-3 w-3 rounded-full bg-blue-400" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400">
                  InfySkill Interactive Preview
                </span>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                  Live System
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {previewTabs.map((tab, idx) => {
                  const Icon = tab.icon
                  const isActive = activeTab === idx
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(idx)}
                      className={`flex flex-col items-center gap-1.5 rounded-xl p-3 text-left transition-all duration-300 ${
                        isActive
                          ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105'
                          : 'bg-white/5 text-navy-200 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="text-[11px] font-bold truncate w-full text-center">{tab.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Active Tab Content Display */}
              <div className="mt-6 rounded-2xl bg-navy-950/80 p-6 border border-white/10 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-orange-500/20 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-orange-300 border border-orange-500/30">
                    {currentTab.badge}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <Trophy className="h-3.5 w-3.5" />
                    {currentTab.stats}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-extrabold text-white">
                  {currentTab.title}
                </h3>
                <p className="mt-2 text-sm text-navy-200/80 leading-relaxed">
                  {currentTab.desc}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs text-navy-400">Industry Aligned Curriculum</span>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-400 hover:text-orange-300"
                  >
                    Explore Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-5 -left-4 z-10 rounded-2xl border border-white/15 bg-navy-900/95 px-4 py-3 shadow-xl backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-wider text-navy-300">College Partners</p>
                <p className="font-heading text-base font-extrabold text-white">10+ Institutions</p>
              </div>

              <div className="absolute -top-5 -right-4 z-10 rounded-xl bg-orange-600 px-4 py-2 text-xs font-bold text-white shadow-lg">
                100% Placement Support
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
