import { BarChart3, CheckCircle2, LineChart, UserCheck } from 'lucide-react'
import Reveal from './Reveal'

const features = [
  "Monitor each student's performance",
  'Track test attempts, scores & improvement',
  'Detailed reports & analytics',
  'Identify strengths, weaknesses & progress',
  'Support students with data-driven guidance',
]

const barHeights = [42, 64, 48, 80, 58, 92, 72]

export default function CollegeDashboard() {
  return (
    <div className="mt-24 grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
      {/* Copy */}
      <Reveal from="left">
        <span className="eyebrow bg-white/10 text-orange-300 ring-1 ring-white/10">
          <UserCheck className="h-3.5 w-3.5" aria-hidden="true" />
          For Colleges, TPOs &amp; Faculty
        </span>
        <h2 className="mt-5 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl">
          College Dashboard –
          <span className="text-gradient-orange"> Complete Visibility</span>{' '}
          &amp; Monitoring
        </h2>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-navy-100/75">
          Track every student's learning journey on one screen — from test
          attempts and scores to long-term improvement — and guide them with
          data, not guesswork.
        </p>
        <ul className="mt-8 space-y-3.5">
          {features.map((f, i) => (
            <Reveal key={f} delay={i * 70}>
              <li className="flex items-start gap-3 text-[15px] font-medium text-navy-100/85">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-orange-400"
                  aria-hidden="true"
                />
                {f}
              </li>
            </Reveal>
          ))}
        </ul>
      </Reveal>

      {/* Dashboard mock */}
      <Reveal from="right" delay={150}>
        <div className="relative mx-auto max-w-[540px]">
          <div
            className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-orange-500/20 via-transparent to-navy-500/30 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative animate-float-slow rounded-2xl bg-white p-2.5 shadow-2xl shadow-navy-950/60 ring-1 ring-white/20 sm:p-3.5">
            <div className="rounded-xl bg-navy-50 p-4 sm:p-6">
              {/* Window bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-navy-300" />
                </div>
                <span className="rounded-full bg-navy-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  College Dashboard
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-green-600 px-2.5 py-1 text-[10px] font-bold text-white">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  Live
                </span>
              </div>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  ['Students', '1,240'],
                  ['Tests Taken', '4,860'],
                  ['Avg Score', '78%'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-navy-100 sm:p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-navy-400">
                      {label}
                    </p>
                    <p className="mt-1 font-heading text-lg font-extrabold text-navy-900 sm:text-xl">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="mt-4 grid grid-cols-5 gap-3">
                <div className="col-span-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-navy-100">
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-1.5 text-[11px] font-bold text-navy-800">
                      <BarChart3 className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
                      Weekly Attempts
                    </p>
                    <span className="text-[10px] font-bold text-green-600">+12%</span>
                  </div>
                  <div className="mt-4 flex h-24 items-end gap-1.5">
                    {barHeights.map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t-md ${
                          i === 5 ? 'bg-orange-500' : i % 2 === 0 ? 'bg-navy-200' : 'bg-navy-500'
                        }`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-span-2 rounded-xl bg-white p-4 shadow-sm ring-1 ring-navy-100">
                  <p className="flex items-center gap-1.5 text-[11px] font-bold text-navy-800">
                    <LineChart className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
                    Score Trend
                  </p>
                  <svg viewBox="0 0 120 70" className="mt-3 h-24 w-full">
                    <polyline
                      points="4,52 22,44 40,48 58,34 76,38 94,22 116,12"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="4,60 22,56 40,58 58,52 76,54 94,46 116,40"
                      fill="none"
                      stroke="#2c5cb3"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="116" cy="12" r="4" fill="#f97316" stroke="#ffffff" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Rows */}
              <div className="mt-4 space-y-2.5">
                {[
                  ['CSE – Final Year', 86, 'bg-green-500'],
                  ['ECE – Final Year', 72, 'bg-navy-500'],
                  ['MBA – Final Year', 64, 'bg-orange-500'],
                ].map(([dept, score, color]) => (
                  <div key={dept} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ring-1 ring-navy-100">
                    <span className="w-28 truncate text-[11px] font-bold text-navy-800 sm:w-32">
                      {dept}
                    </span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-navy-100">
                      <div
                        className={`h-full rounded-full ${color}`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                    <span className="w-9 text-right text-[11px] font-extrabold text-navy-900">
                      {score}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating chip */}
          <div className="absolute -top-5 -right-2 z-10 animate-float rounded-xl border border-navy-100 bg-white px-4 py-2.5 shadow-xl shadow-navy-950/40 sm:-right-6">
            <p className="flex items-center gap-2 text-[12px] font-bold text-navy-800">
              <BarChart3 className="h-4 w-4 text-orange-500" aria-hidden="true" />
              Reports &amp; Analytics
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  )
}