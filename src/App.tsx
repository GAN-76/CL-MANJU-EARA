import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import ContactPage from './pages/Contact'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import NotFound from './pages/NotFound'

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(() => {
    // Prüfe localStorage beim ersten Laden
    return localStorage.getItem('cookiesAccepted') !== 'true'
  })

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setShowCookieBanner(false)
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ueber-uns" element={<AboutPage />} />
            <Route path="/dienstleistungen" element={<ServicesPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        {showCookieBanner && <CookieBanner onAccept={handleAcceptCookies} />}
      </div>
    </Router>
  )
}

export default App
