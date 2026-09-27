import {
  ArrowRight,
  Briefcase,
  ClipboardList,
  DraftingCompass,
  FolderKanban,
  Wrench,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const steps = [
  { icon: ClipboardList, label: 'Understand Requirements' },
  { icon: DraftingCompass, label: 'Design Training' },
  { icon: Wrench, label: 'Practical Learning' },
  { icon: FolderKanban, label: 'Projects' },
  { icon: Briefcase, label: 'Career Readiness' },
]

export default function CompanyTraining() {
  return (
    <section id="company-training" className="section-pad bg-white dark:bg-navy-950">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Company-Specific Training"
            title="Training That Matches Industry Needs"
            description="InfySkill provides company-focused and job-oriented training designed around specific technologies, tools and requirements — so learners walk into the interview room as the candidate recruiters are looking for."
          />
        </Reveal>

        <div className="mt-12 rounded-3xl border border-navy-100 bg-gradient-to-b from-navy-50/70 to-white p-8 sm:p-12 dark:border-white/10 dark:from-navy-900/50 dark:to-navy-950">
          <div className="relative grid gap-8 md:grid-cols-5 md:gap-4">
            <div
              className="absolute top-7 right-[10%] left-[10%] hidden border-t-2 border-dashed border-navy-200 md:block"
              aria-hidden="true"
            />
            {steps.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={i * 110} className="relative">
                <div className="group flex flex-col items-center text-center">
                  <div className="relative">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-orange-500 shadow-lg shadow-navy-900/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-orange-500 group-hover:text-white">
                      <Icon className="h-6.5 w-6.5" aria-hidden="true" />
                    </span>
                    <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-orange-500 text-[11px] font-extrabold text-white ring-2 ring-white">
                      {i + 1}
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-snug font-bold text-navy-800 dark:text-navy-100">
                    {label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-navy-900 px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="max-w-xl text-[15px] leading-relaxed text-navy-100/85">
                From campus recruitment preparation to company-specific
                technical tracks — every program is built around your target
                company's hiring process.
              </p>
              <a href="#contact" className="btn btn-primary shrink-0 py-3!">
                Plan My Training
                <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}