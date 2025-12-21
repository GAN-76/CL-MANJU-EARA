import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img
              src="/images/Cleara_Logo.png"
              alt="CLEARA Logo"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              Professionelle Reinigungsdienstleistungen in der ganzen Schweiz.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+41 76 228 87 86</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@cleara.ch</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Bernstrasse 24, 3110 Münsingen</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Montag - Freitag: 8:00 - 18:00</p>
              <p>Samstag: 9:00 - 16:00</p>
              <p>Sonntag: Geschlossen</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Rechtliches</h3>
            <div className="space-y-2 text-sm">
              <Link to="/impressum" className="block text-gray-400 hover:text-white transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="block text-gray-400 hover:text-white transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cleara Group GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
