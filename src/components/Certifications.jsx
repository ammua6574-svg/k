import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'

const certifications = [
  {
    name: 'Startup India',
    image: 'https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/footer-logo.png',
  },
  {
    name: 'ISO 9001 Certified',
    image: 'https://media.istockphoto.com/id/1465976603/vector/iso-9001-2015-certification-iso-9001-2015-logo-iso-9000-certification.jpg?s=1024x1024&w=is&k=20&c=Ka_B80OfXmXl5iqACo4CE02kf1cE11bGNiZnmlwMnsA=',
  },
  {
    name: 'Ministry of Corporate Affairs',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg',
  },
  {
    name: 'MSME',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/MSME_Logo_%28India%29.svg',
  },
]

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certifications.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length)
  }

  return (
    <section id="certifications" className="section-pad bg-white overflow-hidden">
      <div className="container-site">
        <Reveal>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              Our Certifications &amp; Recognitions
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-indigo-600" />
          </div>
        </Reveal>

        {/* Carousel Container */}
        <div className="mt-12 relative max-w-5xl mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((offset) => {
              const certIndex = (currentIndex + offset) % certifications.length
              const cert = certifications[certIndex]
              return (
                <div
                  key={`${cert.name}-${certIndex}`}
                  className="transition-all duration-500 ease-in-out transform hover:-translate-y-2"
                >
                  <div className="flex h-72 w-full flex-col items-center justify-center rounded-3xl bg-white p-8 shadow-xl shadow-navy-900/10 border border-navy-100">
                    <div className="relative flex h-full w-full items-center justify-center p-4 bg-white rounded-2xl">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="max-h-48 max-w-full object-contain filter drop-shadow"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Controls & Pagination Dots */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prevSlide}
              className="grid h-10 w-10 place-items-center rounded-full border border-navy-200 bg-white text-navy-800 shadow-md transition hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
              aria-label="Previous certification"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'w-8 bg-indigo-600' : 'w-3 bg-navy-200 hover:bg-navy-300'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              className="grid h-10 w-10 place-items-center rounded-full border border-navy-200 bg-white text-navy-800 shadow-md transition hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
              aria-label="Next certification"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
