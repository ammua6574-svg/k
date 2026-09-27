import { BadgeCheck, Factory, Landmark, Rocket, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const certifications = [
  { icon: ShieldCheck, name: 'AICTE', note: 'All India Council for Technical Education' },
  { icon: BadgeCheck, name: 'ISO', note: 'International Organization for Standardization' },
  { icon: Rocket, name: 'Startup India', note: 'Government of India Initiative' },
  { icon: Factory, name: 'MSME', note: 'Micro, Small & Medium Enterprises' },
  { icon: Landmark, name: 'MCA', note: 'Ministry of Corporate Affairs' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad bg-navy-50/50 dark:bg-navy-900/30">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Recognition"
            title="We Are a Certified Company"
            description="Registrations and recognitions that reflect InfySkill's commitment to quality training and professional standards."
          />
        </Reveal>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {certifications.map(({ icon: Icon, name, note }, i) => (
            <Reveal key={name} delay={i * 80}>
              <article className="card card-hover group flex h-full flex-col items-center justify-center gap-3 p-7 text-center">
                <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-orange-500 shadow-md shadow-navy-900/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-[15px] font-extrabold tracking-wide text-navy-900 dark:text-white">
                  {name}
                </h3>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-400 dark:text-navy-300">
                  {note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}