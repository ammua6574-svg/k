import { Play, Sparkles, Video } from 'lucide-react'
import Reveal from './Reveal'

const successVideos = [
  {
    title: 'JavaScript Bootcamp Student Feedback',
    description: 'Hear from G.V. Kishore Reddy about their hands-on coding journey and live project experience at InfySkill.',
    embedId: 'kwu6dCGOwj4',
    tag: 'Student Experience',
  },
  {
    title: 'Python & Placement Success Story',
    description: 'N. Rahul Kumar (3rd Year BTech) shares how InfySkill rigorous training helped secure career opportunities.',
    embedId: 'f8jqpPLoXWo',
    tag: 'Placement Success',
  },
]

export default function StudentSuccessStories() {
  return (
    <section className="section-pad bg-gradient-to-b from-navy-950 to-[#040b1a] text-white relative overflow-hidden">
      {/* Glow background effects */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="container-site relative">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-orange-400 border border-orange-500/20">
              <Sparkles className="h-3.5 w-3.5" />
              Success Journeys
            </span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              Student Success Stories
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-orange-500" />
            <p className="mx-auto mt-4 max-w-2xl text-base text-navy-200">
              Watch real video reviews and placement testimonials from our students who transformed their technical skills into rewarding careers.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {successVideos.map((video, index) => (
            <Reveal key={video.embedId} delay={index * 150}>
              <div className="group overflow-hidden rounded-3xl border border-white/10 bg-navy-900/90 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-orange-500/10">
                <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                  <iframe
                    className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                      <Video className="h-3.5 w-3.5" />
                      {video.tag}
                    </span>
                    <span className="text-xs font-semibold text-navy-400">Verified Review</span>
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-extrabold text-white group-hover:text-orange-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-navy-200/90 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
