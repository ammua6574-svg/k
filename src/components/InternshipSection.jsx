import { ArrowRight, Check, MonitorSmartphone, Server } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const tracks = [
  {
    icon: MonitorSmartphone,
    title: 'Front End Development',
    accent: 'navy',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
    chip: 'bg-navy-100 text-navy-700 dark:bg-navy-400/15 dark:text-navy-100',
  },
  {
    icon: Server,
    title: 'Back End Development',
    accent: 'orange',
    items: ['Python', 'Java', 'Node.js', 'SQL', 'APIs'],
    chip: 'bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-300',
  },
]

export default function InternshipSection() {
  return (
    <section id="internships" className="section-pad bg-white dark:bg-navy-950">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Internships"
            title="Industry-Oriented Internships"
            description="Industry-oriented internships designed to provide practical exposure and help learners gain real-world development experience."
          />
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {tracks.map(({ icon: Icon, title, items, chip }, i) => (
            <Reveal key={title} delay={i * 120} className="h-full">
              <article className="card card-hover group relative h-full overflow-hidden p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy-700 to-navy-900 opacity-100" aria-hidden="true" />
                <div className="flex items-center gap-4">
                  <span className={`inline-grid h-14 w-14 shrink-0 place-items-center rounded-2xl transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-white ${chip}`}>
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-xl font-extrabold text-navy-900 dark:text-white">
                    {title}
                  </h3>
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-navy-500 dark:text-navy-300">
                  Technologies You Will Work With
                </p>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-1.5 rounded-full border border-navy-100 bg-navy-50/60 px-3.5 py-1.5 text-sm font-semibold text-navy-800 transition-colors duration-200 hover:border-orange-200 hover:bg-orange-50 dark:border-white/10 dark:bg-white/5 dark:text-navy-100 dark:hover:border-orange-400/50 dark:hover:bg-orange-500/10"
                    >
                      <Check className="h-3.5 w-3.5 text-orange-500" strokeWidth={3} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <a href="#contact" className="btn btn-primary">
              Learn More
              <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}