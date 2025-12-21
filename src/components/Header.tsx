import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Dienstleistungen', href: '/dienstleistungen' },
    { label: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/Cleara_Logo.png"
              alt="CLEARA Reinigung Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`transition-colors font-medium ${
                  location.pathname === item.href
                    ? 'text-cleara-blue'
                    : 'text-gray-700 hover:text-cleara-blue'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="bg-cleara-blue text-white px-6 py-2 rounded-full hover:bg-cleara-dark transition-colors font-medium"
            >
              Offerte anfordern
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block py-3 transition-colors font-medium ${
                  location.pathname === item.href
                    ? 'text-cleara-blue'
                    : 'text-gray-700 hover:text-cleara-blue'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="block mt-4 bg-cleara-blue text-white px-6 py-3 rounded-full hover:bg-cleara-dark transition-colors font-medium text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Offerte anfordern
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
