import { Link } from 'react-router-dom'

interface CookieBannerProps {
  onAccept: () => void
}

const CookieBanner = ({ onAccept }: CookieBannerProps) => {
  const handleDecline = () => {
    // Nur essenzielle Cookies - keine Tracking-Cookies
    localStorage.setItem('cookiesAccepted', 'essential')
    onAccept()
  }

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    onAccept()
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p>
            Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.{' '}
            <Link to="/datenschutz" className="underline hover:text-cleara-blue">
              Mehr erfahren
            </Link>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleDecline}
            className="bg-gray-700 text-white px-5 py-2 rounded-full hover:bg-gray-600 transition-colors whitespace-nowrap font-medium text-sm"
          >
            Nur Essenzielle
          </button>
          <button
            onClick={handleAccept}
            className="bg-cleara-blue text-white px-5 py-2 rounded-full hover:bg-cleara-dark transition-colors whitespace-nowrap font-medium text-sm"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
