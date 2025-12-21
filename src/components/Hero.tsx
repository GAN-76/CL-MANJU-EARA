import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-cleara-blue/10 p-4 rounded-full">
              <Sparkles className="w-12 h-12 text-cleara-blue" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sauberkeit – klar, gründlich, zuverlässig.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Die Cleara Group GmbH aus Münsingen steht für Qualität, Zuverlässigkeit und Schweizer Sauberkeit.
            Wir bieten professionelle Reinigungsdienstleistungen und Liegenschaftsdienste für 
            Privat- und Geschäftskunden in der ganzen Schweiz.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/kontakt"
              className="bg-cleara-blue text-white px-8 py-4 rounded-full hover:bg-cleara-dark transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Offerte anfordern
            </Link>
            <Link
              to="/dienstleistungen"
              className="bg-white text-cleara-blue px-8 py-4 rounded-full hover:bg-gray-50 transition-all border-2 border-cleara-blue font-semibold text-lg"
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
