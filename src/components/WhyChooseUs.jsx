import { CheckCircle2, Quote, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const reasons = [
  'Industry-relevant curriculum',
  'Expert faculty & real-world exposure',
  'Practical learning with projects',
  'Focus on employability & soft skills',
  'Continuous assessment & feedback',
  'Placement assistance & career support',
  'Affordable & high-quality training',
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="section-pad bg-navy-50/50 dark:bg-navy-900/30">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Why InfySkill"
            title="Why Choose InfySkill?"
            description="We combine strong fundamentals, hands-on practice and career guidance so every learner finishes a program truly ready for the workplace."
          />
        </Reveal>

        <div className="mx-auto grid max-w-6xl items-stretch gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Checklist cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <Reveal key={reason} delay={(i % 2) * 90 + Math.floor(i / 2) * 60}>
                <div className="card card-hover group flex h-full items-center gap-3.5 p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange-50 ring-1 ring-orange-100 transition-colors duration-300 group-hover:bg-orange-500 group-hover:ring-orange-500">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
                  </span>
                  <p className="text-[14.5px] font-bold text-navy-800 dark:text-navy-100">{reason}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Highlight quote card */}
          <Reveal from="right" delay={150}>
            <div className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl bg-navy-900 p-8 shadow-xl shadow-navy-900/25 sm:p-10">
              <div className="bg-grid-light pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-16 -bottom-16 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <Quote className="h-12 w-12 text-orange-500" aria-hidden="true" />
                <h3 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-white">
                  Quality <span className="text-gradient-orange">Training</span>
                  <br />
                  Better Tomorrow
                </h3>
              </div>
              <div className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <Sparkles className="h-5 w-5 text-orange-400" aria-hidden="true" />
                <p className="text-sm font-medium text-navy-100/75">
                  Every InfySkill program is designed around one promise —
                  real, measurable growth.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}