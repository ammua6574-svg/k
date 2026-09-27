import { ArrowRight, Layers, Rocket } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const cards = [
  {
    icon: Layers,
    title: 'MINI PROJECTS',
    text: 'Real-time mini projects to strengthen concepts and build practical skills.',
    accent: 'navy',
  },
  {
    icon: Rocket,
    title: 'MAJOR PROJECTS',
    text: 'End-to-end major projects using industry-relevant technologies with expert guidance.',
    accent: 'orange',
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-pad bg-navy-50/50 dark:bg-navy-900/30">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Experts in Projects"
            description="Real-time mini projects and major projects designed to strengthen concepts and build practical skills."
          />
        </Reveal>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {cards.map(({ icon: Icon, title, text, accent }, i) => (
            <Reveal key={title} delay={i * 120} className="h-full">
              <article
                className={`card card-hover group relative h-full overflow-hidden p-8 ${
                  accent === 'orange'
                    ? 'bg-navy-900 text-white hover:ring-orange-300'
                    : 'bg-white dark:bg-navy-900'
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 ${
                    accent === 'orange'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600'
                      : 'bg-gradient-to-r from-navy-700 to-navy-900'
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`inline-grid h-14 w-14 place-items-center rounded-2xl transition-all duration-300 group-hover:scale-110 ${
                    accent === 'orange'
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/40'
                      : 'bg-navy-900 text-orange-500'
                  }`}
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3
                  className={`mt-6 font-heading text-xl font-extrabold tracking-wide ${
                    accent === 'orange' ? 'text-white' : 'text-navy-900 dark:text-white'
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-3 text-[15px] leading-relaxed ${
                    accent === 'orange' ? 'text-navy-100/80' : 'text-navy-600/85 dark:text-navy-100/75'
                  }`}
                >
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <a href="#contact" className="btn btn-navy">
              Explore Projects
              <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}