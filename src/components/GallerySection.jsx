import { Users, Award, BookOpen, GraduationCap, Newspaper } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const galleryImages = [
  {
    src: 'https://assets.thehansindia.com/h-upload/2022/12/26/1327093-o.webp',
    alt: 'InfySkill Media Coverage in The Hans India',
    title: 'Featured in Media & Press',
    category: 'Media Coverage',
    description: 'InfySkill educational initiatives, bootcamps, and student placement milestones featured in prominent news media.',
    icon: Newspaper,
  },
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
    category: 'Institutional Event',
    description: 'Our core founders, coordinators, and industry-experienced trainers addressing future engineering graduates.',
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
    category: 'Logical & Technical Class',
    description: 'Classroom lectures covering crucial design principles, architectural fundamentals, and aptitude skills needed for placements.',
    icon: GraduationCap,
  },
]

export default function GallerySection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Our Gallery &amp; Press"
            title="Life at InfySkill &amp; Media Highlights"
            description="Explore moments from our student bootcamps, practical computer labs, industrial workshops, and press coverage."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {galleryImages.map((img, index) => {
            const Icon = img.icon
            return (
              <Reveal key={index} delay={index * 100} from={index % 2 === 0 ? 'left' : 'right'}>
                <div className="group overflow-hidden rounded-2xl border border-navy-100 bg-navy-50/50 shadow-xl shadow-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
                    <span className="absolute top-4 left-4 rounded-lg bg-orange-600 px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase shadow-md">
                      {img.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-100 text-orange-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-heading text-xl font-bold text-navy-950">
                        {img.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-navy-600">
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
  )
}
