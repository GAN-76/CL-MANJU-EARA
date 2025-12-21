import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* 404 Nummer */}
        <h1 className="text-9xl font-bold text-cleara-blue mb-4">404</h1>
        
        {/* Titel */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Seite nicht gefunden
        </h2>
        
        {/* Beschreibung */}
        <p className="text-gray-600 mb-8">
          Die gesuchte Seite existiert leider nicht oder wurde verschoben. 
          Kehren Sie zur Startseite zurück oder kontaktieren Sie uns.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-cleara-blue text-white px-6 py-3 rounded-full hover:bg-cleara-dark transition-all font-semibold"
          >
            <Home className="w-5 h-5" />
            Zur Startseite
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 transition-all font-semibold border border-gray-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück
          </button>
        </div>
        
        {/* Kontakt-Hinweis */}
        <p className="mt-8 text-sm text-gray-500">
          Haben Sie Fragen? Kontaktieren Sie uns unter{' '}
          <a href="tel:+41762288786" className="text-cleara-blue hover:underline">
            +41 76 228 87 86
          </a>
        </p>
      </div>
    </div>
  )
}
