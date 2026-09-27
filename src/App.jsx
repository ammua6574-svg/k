import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import InternshipsPage from './pages/InternshipsPage'
import ProjectsPage from './pages/ProjectsPage'
import PlatformPage from './pages/PlatformPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white transition-colors duration-300 dark:bg-navy-950">
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/internships" element={<InternshipsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}

export default App