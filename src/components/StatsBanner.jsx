import Reveal from './Reveal'

const stats = [
  { value: '7000+', label: 'Students Trained' },
  { value: '10+', label: 'Colleges Collaborated' },
  { value: '500+', label: 'Students Placed' },
  { value: '2+', label: 'Years of Experience' },
]

export default function StatsBanner() {
  return (
    <section className="bg-[#5865F2] py-16 lg:py-20 text-white">
      <div className="container-site">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 85}>
              <div className="flex flex-col items-center justify-center rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm border border-white/20 shadow-lg transition-transform duration-300 hover:scale-105">
                <span className="font-heading text-4xl font-black tracking-tight sm:text-5xl text-white">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-extrabold uppercase tracking-widest text-indigo-100">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
