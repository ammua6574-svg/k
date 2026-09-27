import { ArrowRight, Globe, LayoutDashboard, Settings, Wrench } from 'lucide-react'
import ErpIllustration from './ErpIllustration'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const services = [
  {
    icon: LayoutDashboard,
    title: 'College ERP Development',
    text: 'Complete digital infrastructure for admissions, academics, exams and administration.',
  },
  {
    icon: Wrench,
    title: 'ERP Maintenance & Support',
    text: 'Reliable upkeep, updates and support so your systems always run smooth.',
  },
  {
    icon: Globe,
    title: 'College Website Development',
    text: 'Modern, responsive institutional websites that reflect your brand.',
  },
  {
    icon: Settings,
    title: 'Website Maintenance & Support',
    text: 'Continuous improvements, security and content updates for your website.',
  },
]

export default function ErpServices() {
  return (
    <section id="erp" className="section-pad bg-white dark:bg-navy-950">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal from="left">
          <SectionHeading
            align="left"
            eyebrow="For Institutions"
            title="ERP & Website Services for Colleges"
            description="Technology solutions that help educational institutions manage their digital infrastructure and online presence."
            className="max-w-xl"
          />
          <ul className="mt-10 space-y-4">
            {services.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 90}>
                <li className="card card-hover group flex items-start gap-4 p-5">
                  <span className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-[15.5px] font-bold text-navy-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600/85 dark:text-navy-100/75">
                      {text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={360}>
            <a href="#contact" className="btn btn-primary mt-10">
              Discuss Your Requirement
              <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </Reveal>
        </Reveal>

        <Reveal from="right" delay={120}>
          <div className="relative">
            <div
              className="absolute -inset-8 rounded-[3rem] bg-gradient-to-tr from-navy-100 via-navy-50 to-orange-100/60 blur-2xl dark:from-navy-800/30 dark:via-navy-900/30 dark:to-orange-500/10"
              aria-hidden="true"
            />
            <div className="relative animate-float-slow">
              <ErpIllustration />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}