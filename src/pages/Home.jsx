import Hero from '../components/Hero'
import StatsBanner from '../components/StatsBanner'
import About from '../components/About'
import Services from '../components/Services'
import CompanyTraining from '../components/CompanyTraining'
import InternshipSection from '../components/InternshipSection'
import ProjectsSection from '../components/ProjectsSection'
import PracticePlatform from '../components/PracticePlatform'
import WhyChooseUs from '../components/WhyChooseUs'
import TargetAudience from '../components/TargetAudience'
import Certifications from '../components/Certifications'
import TestimonialsSection from '../components/TestimonialsSection'
import StudentSuccessStories from '../components/StudentSuccessStories'
import PlacedCompanies from '../components/PlacedCompanies'
import GallerySection from '../components/GallerySection'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <About />
      <Services />
      <CompanyTraining />
      <InternshipSection />
      <ProjectsSection />
      <PracticePlatform />
      <WhyChooseUs />
      <TargetAudience />
      <Certifications />
      <TestimonialsSection />
      <StudentSuccessStories />
      <PlacedCompanies />
      <GallerySection />
      <CTA />
    </>
  )
}
