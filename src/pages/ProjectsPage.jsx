import { Sparkles } from 'lucide-react'
import ProjectsSection from '../components/ProjectsSection'
import CTA from '../components/CTA'
import Reveal from '../components/Reveal'

export default function ProjectsPage() {
  return (
    <div className="bg-white dark:bg-navy-950">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-center dark:bg-[#040b18]">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 to-navy-900/90" />
        <div className="container-site relative">
          <Reveal>
            <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              <Sparkles className="h-3.5 w-3.5" />
              Build Solutions
            </span>
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Project <span className="text-gradient-orange">Guidance</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-navy-200">
              Comprehensive mentoring from system design and database implementation to final deployment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects Section Component */}
      <ProjectsSection />

      {/* Call to Action */}
      <CTA />
    </div>
  )
}
