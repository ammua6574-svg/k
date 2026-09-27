import {
  Activity,
  Bot,
  ClipboardList,
  FileCheck2,
  FileText,
  Layers,
  PieChart,
  Users,
} from 'lucide-react'
import CollegeDashboard from './CollegeDashboard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const features = [
  {
    icon: ClipboardList,
    title: 'Assessments',
    text: 'Assessments as per your convenience',
  },
  {
    icon: Layers,
    title: 'Practice Tests & Sets',
    text: 'Access topic-wise and company-wise practice tests',
  },
  {
    icon: FileCheck2,
    title: 'Analyze & Track Your Improvement',
    text: 'Detailed performance analysis with insights',
  },
  {
    icon: Bot,
    title: 'AI Mock Interviews',
    text: 'AI-powered mock interviews with instant feedback',
  },
  {
    icon: Users,
    title: 'AI Group Discussions',
    text: 'Practice GDs with AI evaluation and personalized feedback',
  },
  {
    icon: FileText,
    title: 'Create Resumes',
    text: 'Create professional, ATS-friendly resumes',
  },
  {
    icon: Activity,
    title: 'Personal Growth Tracker',
    text: 'Track your learning and improvement',
  },
  {
    icon: PieChart,
    title: 'Performance Insights',
    text: 'Understand your strengths and areas for improvement',
  },
]

export default function PracticePlatform() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-navy-950 py-20 lg:py-28 dark:bg-[#040b1a]"
    >
      <div className="bg-grid-light pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-navy-500/15 blur-3xl" aria-hidden="true" />

      <div className="container-site relative">
        <Reveal>
          <SectionHeading
            dark
            eyebrow="InfySkill App"
            title="Through Our Application – Your Personal Practice Platform"
            description="A smart practice platform that puts learning in your hands."
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto -mt-6 mb-12 max-w-2xl text-center font-heading text-lg font-bold text-orange-400 sm:text-xl">
            Learn. Practice. Analyze. Improve – Anytime, Anywhere.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 4) * 90 + Math.floor(i / 4) * 60}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-400/40 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-orange-500/10">
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-orange-500/15 text-orange-400 ring-1 ring-orange-400/20 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-[15.5px] font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-100/65">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <CollegeDashboard />
      </div>
    </section>
  )
}