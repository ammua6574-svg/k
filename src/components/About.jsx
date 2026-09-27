import { Award, Briefcase, UserCheck, Wrench } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const features = [
  {
    icon: UserCheck,
    title: 'Expert Trainers',
    text: 'Industry experienced professionals',
  },
  {
    icon: Wrench,
    title: 'Practical Learning',
    text: 'Hands-on training with real-world projects',
  },
  {
    icon: Briefcase,
    title: 'Career Support',
    text: 'Placement assistance and career guidance',
  },
  {
    icon: Award,
    title: 'Certification',
    text: 'Industry-recognized certificates',
  },
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-white dark:bg-navy-950">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="About InfySkill"
            title="Building Skills. Creating Opportunities."
            description="InfySkill EduTech Pvt. Ltd. is focused on empowering students, graduates and post graduates with industry-relevant technical and non-technical skills. Our programs combine practical learning, real-world projects, expert guidance and career support to help learners become job-ready."
          />
        </Reveal>

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="card card-hover group relative h-full overflow-hidden p-7">
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="inline-grid h-13 w-13 place-items-center rounded-2xl bg-navy-900 text-orange-500 shadow-md shadow-navy-900/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600/85 dark:text-navy-100/75">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}