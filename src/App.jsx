import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import InternshipSection from './components/InternshipSection'
import ProjectsSection from './components/ProjectsSection'
import CompanyTraining from './components/CompanyTraining'
import ErpServices from './components/ErpServices'
import PracticePlatform from './components/PracticePlatform'
import WhyChooseUs from './components/WhyChooseUs'
import TargetAudience from './components/TargetAudience'
import Certifications from './components/Certifications'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="bg-white transition-colors duration-300 dark:bg-navy-950">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <InternshipSection />
        <ProjectsSection />
        <CompanyTraining />
        <ErpServices />
        <PracticePlatform />
        <WhyChooseUs />
        <TargetAudience />
        <Certifications />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App