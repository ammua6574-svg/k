import { Sparkles, Users, Award, BookOpen, GraduationCap } from 'lucide-react'
import About from '../components/About'
import TargetAudience from '../components/TargetAudience'
import Reveal from '../components/Reveal'

const galleryImages = [
  {
    src: '/images/vignan_group.png',
    alt: 'InfySkill VIGNAN Women Engineering Students Group',
    title: 'Empowering Women in Tech',
    category: 'Campus Collaboration',
    description: 'Specialized industrial training and project guidance conducted at VIGNAN\'s Institute of Engineering for Women, Visakhapatnam.',
    icon: Users,
  },
  {
    src: '/images/vignan_stage.jpg',
    alt: 'InfySkill Founders and Trainers VIGNAN Stage',
    title: 'Expert Mentorship Team',
    category: 'International Conference',
    description: 'Our core founders, coordinators, and industry-experienced trainers sharing the stage to address future engineering graduates.',
    icon: Award,
  },
  {
    src: '/images/computer_lab_lecture.jpg',
    alt: 'Computer Lab Practical Training Session',
    title: 'Hands-on Programming Labs',
    category: 'Practical Coding Bootcamp',
    description: 'Interactive coding lab session where students implement live projects and receive personal code reviews from tech mentors.',
    icon: BookOpen,
  },
  {
    src: '/images/classroom_training.jpg',
    alt: 'Classroom Lecture Presentation',
    title: 'Interactive Conceptual Sessions',
    category: 'Logical & Aptitude Class',
    description: 'Classroom lectures covering crucial design principles, architectural fundamentals, and aptitude skills needed for placements.',
    icon: GraduationCap,
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-navy-950">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-center dark:bg-[#040b18]">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-navy-900/90" />
        <div className="container-site relative">
          <Reveal>
            <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              <Sparkles className="h-3.5 w-3.5" />
              Discover Our Story
            </span>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              About <span className="text-gradient-orange">InfySkill</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-navy-200">
              Empowering technical excellence, soft skills, and placement success across academic and corporate environments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* Premium Photo Gallery Section */}
      <section className="section-pad bg-navy-50/50 dark:bg-navy-900/30">
        <div className="container-site">
          <Reveal>
            <div className="text-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-orange-500">
                Our Work in Action
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
                Life at InfySkill &amp; Campus Impact
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-navy-600 dark:text-navy-200">
                Take a look at our student bootcamps, workshops, laboratory development sessions, and institutional partnerships.
              </p>
            </div>
          </Reveal>

          {/* Grid Layout for Photos */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {galleryImages.map((img, index) => {
              const Icon = img.icon
              return (
                <Reveal key={index} delay={index * 120} from={index % 2 === 0 ? 'left' : 'right'}>
                  <div className="group overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-xl shadow-navy-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/10 dark:border-white/5 dark:bg-navy-900 dark:shadow-none">
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
                      
                      {/* Floating Category Badge */}
                      <span className="absolute top-4 left-4 rounded-lg bg-orange-500 px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase shadow-lg shadow-orange-500/20">
                        {img.category}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-orange-500 dark:bg-orange-500/10 dark:text-orange-400">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white">
                          {img.title}
                        </h3>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-navy-600/90 dark:text-navy-200/80">
                        {img.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <TargetAudience />
    </div>
  )
}
