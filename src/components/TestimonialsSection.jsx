import { Star, Quote } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const testimonials = [
  {
    name: 'Marasi Shirisha',
    role: '3rd Year, BTech',
    batch: 'Python Programming Batch 1',
    text: 'It was a great experience learning from a trainer who is very friendly and gives an opportunity to every trainee to learn and enjoy the session. The course was completed with best examples that could be handled. Thank You INFYSKILL.',
    rating: 5,
  },
  {
    name: 'Rama Lakshmi Divili',
    role: '1st Year, Degree',
    batch: 'Bootcamp Trainee',
    text: 'Thank u so much sir..... Such a wonderful and clear explanation within short period. Your explanation helps us lot even in am in first year it helps me by practising now and getting jobs in final year. You explained very well each point and clarify all our doubts without any ignorance.',
    rating: 5,
  },
  {
    name: 'R. Navya Sri',
    role: '1st Year, Degree',
    batch: 'Programming Bootcamp',
    text: 'For your hard work in supporting us..., and your patience and commitment to teach us & clearing doubts of each person mean a lot sir.... Your frontal view towards us by recording videos and uploading them in YouTube was amazing sir. It helps the students who miss the class at that time.',
    rating: 5,
  },
  {
    name: 'Y. Satya',
    role: 'Degree Student',
    batch: 'Python & Web Development',
    text: 'My name is Y. Satya. As I am from women degree college, I joined Python and CSS bootcamps. It was taught by our trainer who explains and teaches the concepts without doubts in the class. It is a wonderful session and it is very useful.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-gradient-to-b from-white via-navy-50/40 to-white">
      <div className="container-site">
        <Reveal>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              What Our Students Say
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-indigo-600" />
            <p className="mx-auto mt-4 max-w-2xl text-base text-navy-600">
              Read authentic feedback and success notes from our engineering and degree students across various batches and bootcamps.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 100}>
              <div className="group relative flex h-full flex-col justify-between rounded-3xl bg-navy-950 p-7 text-white shadow-xl shadow-navy-950/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/10">
                {/* Top Branded Header */}
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white font-black text-xs">
                        AI
                      </span>
                      <div>
                        <span className="block font-heading text-xs font-extrabold tracking-tight text-white">
                          INFYSKILL
                        </span>
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-blue-400">
                          EduTech Pvt.Ltd
                        </span>
                      </div>
                    </div>
                    <Quote className="h-6 w-6 text-orange-500/60" />
                  </div>

                  <span className="mt-4 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-[11px] font-bold text-blue-300 border border-blue-500/30">
                    {item.batch}
                  </span>

                  <p className="mt-4 text-xs leading-relaxed text-navy-100/90">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                {/* Bottom Student Info */}
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <h3 className="font-heading text-sm font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-orange-400">{item.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
