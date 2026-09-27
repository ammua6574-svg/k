import { ArrowRight, Building2, Check, Code2, Cpu, FolderGit2, Laptop2, Users } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const ACCENTS = {
  orange: {
    chip: 'bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white dark:bg-orange-500/15 dark:text-orange-300 dark:group-hover:bg-orange-500 dark:group-hover:text-white',
    bar: 'from-orange-500 to-orange-600',
    check: 'text-orange-500 dark:text-orange-400',
    tag: 'bg-orange-50 text-orange-600 ring-orange-100 dark:bg-orange-500/10 dark:text-orange-300 dark:ring-orange-400/25',
    hover: 'hover:ring-orange-200 dark:hover:ring-orange-400/40',
  },
  navy: {
    chip: 'bg-navy-100 text-navy-700 group-hover:bg-navy-700 group-hover:text-white dark:bg-navy-400/15 dark:text-navy-100 dark:group-hover:bg-navy-400 dark:group-hover:text-navy-950',
    bar: 'from-navy-600 to-navy-900 dark:from-navy-400 dark:to-navy-200',
    check: 'text-navy-500 dark:text-navy-300',
    tag: 'bg-navy-50 text-navy-600 ring-navy-100 dark:bg-navy-400/10 dark:text-navy-200 dark:ring-navy-400/25',
    hover: 'hover:ring-navy-200 dark:hover:ring-navy-400/40',
  },
  green: {
    chip: 'bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white dark:bg-green-500/15 dark:text-green-300 dark:group-hover:bg-green-500 dark:group-hover:text-navy-950',
    bar: 'from-green-500 to-green-700 dark:from-green-400 dark:to-green-500',
    check: 'text-green-600 dark:text-green-400',
    tag: 'bg-green-50 text-green-700 ring-green-100 dark:bg-green-500/10 dark:text-green-300 dark:ring-green-400/25',
    hover: 'hover:ring-green-200 dark:hover:ring-green-400/40',
  },
}

export function TrainingCard({ icon: Icon, title, tag, items, description, link, linkLabel, accent, delay = 0 }) {
  const a = ACCENTS[accent]
  return (
    <Reveal delay={delay} className="h-full">
      <article
        className={`card card-hover group relative flex h-full flex-col overflow-hidden p-7 hover:ring-1 ${a.hover}`}
      >
        <div
          className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${a.bar} transition-all duration-300 group-hover:w-24`}
          aria-hidden="true"
        />
        <div className="mt-6 flex items-start justify-between gap-3">
          <span
            className={`inline-grid h-13 w-13 shrink-0 place-items-center rounded-2xl transition-colors duration-300 ${a.chip}`}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          {tag && <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ring-1 ${a.tag}`}>{tag}</span>}
        </div>
        <h3 className="mt-5 font-heading text-xl font-extrabold text-navy-900 dark:text-white">
          {title}
        </h3>
        {description && (
          <p className="mt-4 text-[14.5px] leading-relaxed text-navy-600/85 dark:text-navy-100/75">
            {description}
          </p>
        )}
        {items && (
          <ul className="mt-5 space-y-2.5">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[14.5px] font-medium text-navy-700 dark:text-navy-100/80"
              >
                <Check
                  className={`mt-0.5 h-4 w-4 shrink-0 ${a.check}`}
                  strokeWidth={3}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        )}
        {link && (
          <a
            href={link}
            className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-navy-800 transition-colors duration-200 hover:text-orange-600 dark:text-navy-100 dark:hover:text-orange-400"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-navy-50 transition-colors duration-200 group-hover:bg-orange-500 group-hover:text-white dark:bg-white/10">
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
            {linkLabel}
          </a>
        )}
      </article>
    </Reveal>
  )
}

const trainings = [
  {
    icon: Users,
    title: 'Non-Technical Trainings',
    tag: 'Placement Readiness',
    accent: 'orange',
    items: [
      'Campus Recruitment Training (CRT)',
      'Aptitude',
      'Reasoning',
      'Verbal Ability',
      'Soft Skills',
      'Interview Skills',
      'Personality Development',
      'Communication Skills',
      'Group Discussion',
      'Interview Preparation',
    ],
  },
  {
    icon: Code2,
    title: 'Technical Trainings – Core',
    tag: 'Programming Foundations',
    accent: 'navy',
    items: [
      'C Programming',
      'C++ Programming',
      'Data Structures & Algorithms',
      'Python Programming',
      'Core Java',
      'DBMS & RDBMS (SQL)',
    ],
  },
  {
    icon: Cpu,
    title: 'Advanced Technical Trainings',
    tag: 'Next-Gen Technologies',
    accent: 'green',
    items: [
      'AI / Machine Learning',
      'Data Science',
      'Agentic AI',
      'Blockchain Technology',
      'React JS',
      'React Native',
      'Full Stack Development',
    ],
  },
  {
    icon: Laptop2,
    title: 'Internships',
    tag: 'Practical Exposure',
    accent: 'orange',
    description:
      'Industry-oriented internships designed to provide practical exposure and help learners gain real-world development experience.',
    link: '#internships',
    linkLabel: 'Learn More',
  },
  {
    icon: FolderGit2,
    title: 'Experts in Projects',
    tag: 'Build & Showcase',
    accent: 'navy',
    description:
      'Real-time mini projects and major projects designed to strengthen concepts and build practical skills.',
    link: '#projects',
    linkLabel: 'Explore Projects',
  },
  {
    icon: Building2,
    title: 'Company-Specific Trainings',
    tag: 'Customized',
    accent: 'green',
    description:
      'Customized trainings tailored to the specific needs, tools and technologies of top companies.',
    link: '#company-training',
    linkLabel: 'See How It Works',
  },
]

export default function Services() {
  return (
    <section id="training" className="section-pad bg-navy-50/50 dark:bg-navy-900/30">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Training Services"
            description="Comprehensive training programs designed for campus recruitment readiness, technical excellence and future-proof careers."
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainings.map((t, i) => (
            <TrainingCard key={t.title} {...t} delay={i * 100} />
          ))}
        </div>

        {/* Company-specific band */}
        <Reveal delay={150}>
          <div className="relative mt-14 overflow-hidden rounded-3xl bg-navy-900 px-8 py-12 text-center shadow-xl shadow-navy-900/20">
            <div className="bg-grid-light pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <span className="eyebrow bg-white/10 text-orange-300 ring-1 ring-white/10">
                Company-Specific Trainings
              </span>
              <h3 className="mx-auto mt-5 max-w-2xl font-heading text-2xl font-extrabold text-white sm:text-3xl">
                Tailored Training for the Hiring Needs of{' '}
                <span className="text-gradient-orange">Top Companies</span>
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-100/80">
                We have great experience in delivering customized trainings
                tailored to the specific needs, tools and technologies of top
                companies.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {['Customized', 'Job-Oriented', 'Industry-Focused'].map((w, i) => (
                  <span key={w} className="flex items-center gap-3">
                    <span className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-orange-500/30">
                      {w}
                    </span>
                    {i < 2 && <span className="hidden h-6 w-6 place-items-center text-orange-400 sm:grid">•</span>}
                  </span>
                ))}
              </div>
              <a
                href="#company-training"
                className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-orange-300 uppercase tracking-wider transition-colors hover:text-orange-400"
              >
                See How We Do It
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}