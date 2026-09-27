import { GraduationCap, Users } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const targets = [
  {
    icon: GraduationCap,
    title: 'GRADUATES',
    text: 'All Streams',
    dark: false,
  },
  {
    icon: Users,
    title: 'POST GRADUATES',
    text: 'All Streams',
    dark: true,
  },
]

export default function TargetAudience() {
  return (
    <section id="target" className="section-pad bg-white dark:bg-navy-950">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Who We Train"
            title="Our Target"
            description="Every program we run is built for one audience — learners who are serious about building a career."
          />
        </Reveal>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {targets.map(({ icon: Icon, title, text, dark }, i) => (
            <Reveal key={title} delay={i * 120} className="h-full">
              <article
                className={`group relative flex h-full flex-col items-center overflow-hidden rounded-3xl p-10 text-center transition-all duration-300 ${
                  dark
                    ? 'bg-navy-900 text-white shadow-xl shadow-navy-900/25 hover:shadow-2xl hover:shadow-navy-900/40'
                    : 'border-2 border-navy-900 bg-white text-navy-900 shadow-sm hover:shadow-xl hover:shadow-navy-900/10 dark:border-white/15 dark:bg-navy-900 dark:text-white'
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 ${
                    dark
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600'
                      : 'bg-gradient-to-r from-navy-700 to-navy-900'
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`mb-6 inline-grid h-[72px] w-[72px] place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                    dark
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/40'
                      : 'bg-navy-900 text-orange-500'
                  }`}
                >
                  <Icon className="h-9 w-9" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-2xl font-extrabold tracking-wide sm:text-[1.7rem]">
                  {title}
                </h3>
                <p
                  className={`mt-2 text-sm font-bold uppercase tracking-[0.2em] ${
                    dark ? 'text-orange-300' : 'text-navy-400'
                  }`}
                >
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mx-auto mt-14 max-w-3xl text-center text-lg font-semibold leading-relaxed text-navy-800 sm:text-xl dark:text-navy-100">
            We empower{' '}
            <span className="rounded-lg bg-orange-100 px-2 py-0.5 font-extrabold text-orange-600">
              GRADUATES
            </span>{' '}
            &amp;{' '}
            <span className="rounded-lg bg-orange-100 px-2 py-0.5 font-extrabold text-orange-600">
              POST GRADUATES
            </span>{' '}
            with industry-relevant skills and practical knowledge.
          </p>
        </Reveal>
      </div>
    </section>
  )
}