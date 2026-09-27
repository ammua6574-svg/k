import { useCallback, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EnquiryModal from './components/EnquiryModal'
import FloatingWidgets from './components/FloatingWidgets'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)

  const openEnquiry = useCallback(() => setIsEnquiryOpen(true), [])
  const closeEnquiry = useCallback(() => setIsEnquiryOpen(false), [])

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
        <ScrollToTop />
        <Navbar onOpenEnquiry={openEnquiry} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenEnquiry={openEnquiry} />} />
            <Route path="/about" element={<AboutPage onOpenEnquiry={openEnquiry} />} />
            <Route path="*" element={<Home onOpenEnquiry={openEnquiry} />} />
          </Routes>
        </main>

        <Footer onOpenEnquiry={openEnquiry} />

        <FloatingWidgets />

        <EnquiryModal isOpen={isEnquiryOpen} onClose={closeEnquiry} />
      </div>
    </BrowserRouter>
  )
}
