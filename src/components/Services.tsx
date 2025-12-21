import { Link } from 'react-router-dom'
import { Building2, Container, Sparkles, Fuel, Blinds, Home, Droplet } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Gebäudereinigung',
      description: 'Professionelle Reinigung von Büros, Geschäftsräumen und öffentlichen Gebäuden.',
      features: [
        'Regelmäßige Unterhaltsreinigung',
        'Büros & Geschäftsräume',
        'Sanitäranlagen & Gemeinschaftsräume',
      ],
    },
    {
      icon: Container,
      title: 'Baucontainer Reinigung',
      description: 'Gründliche Reinigung von Baucontainern und Baustelleneinrichtungen.',
      features: [
        'Schnelle Reinigung',
        'Alle Containertypen',
        'Flexible Terminvereinbarung',
      ],
    },
    {
      icon: Sparkles,
      title: 'Fensterreinigung',
      description: 'Streifenfrei sauber – innen und außen, für Privat- und Geschäftskunden.',
      features: [
        'Professionelle Ausrüstung',
        'Innen- & Außenreinigung',
        'Auch für hohe Gebäude',
      ],
    },
    {
      icon: Fuel,
      title: 'Tankstellenreinigung',
      description: 'Spezialisierte Reinigung von Tankstellen und Servicebereichen.',
      features: [
        'Zapfsäulen & Vorplätze',
        'Shop & Sanitäranlagen',
        'Regelmäßige Wartung',
      ],
    },
    {
      icon: Blinds,
      title: 'Storenreinigung',
      description: 'Schonende und gründliche Reinigung Ihrer Storen und Jalousien.',
      features: [
        'Alle Storentypen',
        'Schonende Reinigung',
        'Vor Ort oder Abholung',
      ],
    },
    {
      icon: Home,
      title: 'Endreinigung',
      description: 'Umzugsreinigung mit Abnahmegarantie für Wohnungen und Häuser.',
      features: [
        'Abnahmegarantie',
        'Alle Räume & Oberflächen',
        'Küche, Bad & Fenster',
      ],
    },
    {
      icon: Droplet,
      title: 'Aboreinigung',
      description: 'Professionelle und hygienische Reinigung von Sanitäranlagen.',
      features: [
        'Gründliche Desinfektion',
        'Regelmäßige Wartung',
        'Öffentliche & private WCs',
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unsere Dienstleistungen
          </h2>
          <div className="w-20 h-1 bg-cleara-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der Gebäudereinigung bis zur Tankstellenreinigung – wir bieten maßgeschneiderte
            Lösungen für jeden Bedarf.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-cleara-blue/10 p-4 rounded-full">
                  <service.icon className="w-10 h-10 text-cleara-blue" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-cleara-blue mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/kontakt"
                className="block w-full text-center bg-cleara-blue text-white py-3 rounded-full hover:bg-cleara-dark transition-colors font-medium"
              >
                Offerte anfordern
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
