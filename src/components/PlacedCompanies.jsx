import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const companies = [
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    name: 'TCS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg',
  },
  {
    name: 'Wipro',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color.svg',
  },
  {
    name: 'Cognizant',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg',
  },
  {
    name: 'Kaar Technologies',
    logo: 'https://www.kaartech.com/wp-content/uploads/2023/04/kaar-logo.svg',
    fallbackText: 'Kaar',
  },
  {
    name: 'Capgemini',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg',
  },
  {
    name: 'Accenture',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
  },
]

export default function PlacedCompanies() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        <Reveal>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              Companies in Which Our Students Are Placed
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-indigo-600" />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 justify-items-center">
          {companies.map((company, index) => (
            <Reveal key={company.name} delay={index * 40}>
              <div className="group flex flex-col items-center text-center">
                {/* Exact circular thin border badge matching reference */}
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-indigo-500/40 bg-white p-4 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-indigo-600 group-hover:shadow-lg">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'block'
                      }
                    }}
                  />
                  <span className="hidden font-heading text-xs font-bold text-navy-900 text-center">
                    {company.fallbackText || company.name}
                  </span>
                </div>
                
                <h3 className="mt-3 font-heading text-xs font-bold text-navy-950 text-center tracking-tight">
                  {company.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
