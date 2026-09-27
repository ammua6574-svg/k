import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-24">
      <div className="bg-grid-light pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 -bottom-32 h-96 w-96 rounded-full bg-navy-500/30 blur-3xl" aria-hidden="true" />

      <div className="container-site relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to <span className="text-gradient-orange">Build Your Future?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-100/80 sm:text-lg">
            Develop practical skills, gain confidence and prepare yourself for
            a successful career with InfySkill.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/services" className="btn btn-primary px-8!">
              Explore Training
              <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
            </Link>
            <Link to="/contact" className="btn btn-outline-white px-8!">
              <Phone className="h-4.5 w-4.5" aria-hidden="true" />
              Contact InfySkill
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}