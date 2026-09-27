import { Sparkles } from 'lucide-react'
import About from '../components/About'
import GallerySection from '../components/GallerySection'
import Certifications from '../components/Certifications'
import PlacedCompanies from '../components/PlacedCompanies'
import TargetAudience from '../components/TargetAudience'
import Reveal from '../components/Reveal'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-navy-950 py-16 text-center">
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

      {/* Gallery Section */}
      <GallerySection />

      {/* Certifications */}
      <Certifications />

      {/* Placed Companies */}
      <PlacedCompanies />

      {/* Target Audience Section */}
      <TargetAudience />
    </div>
  )
}
