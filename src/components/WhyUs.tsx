import { Link } from 'react-router-dom'
import { CheckCircle, DollarSign, Leaf, Award } from 'lucide-react'

const WhyUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: 'Zuverlässig',
      description: 'Wir halten unsere Termine ein und arbeiten mit höchster Sorgfalt.',
    },
    {
      icon: DollarSign,
      title: 'Preisgerecht',
      description: 'Transparente Preisgestaltung ohne versteckte Kosten.',
    },
    {
      icon: Leaf,
      title: 'Nachhaltig',
      description: 'Umweltfreundliche Reinigungsmittel und schonende Methoden.',
    },
    {
      icon: Award,
      title: 'Schweizer Qualität',
      description: 'Präzision und höchste Standards nach Schweizer Art.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Warum CLEARA?
          </h2>
          <div className="w-20 h-1 bg-cleara-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zuverlässig, preisgerecht und nachhaltig – das sind unsere Werte.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-cleara-blue/10 p-4 rounded-full">
                  <reason.icon className="w-8 h-8 text-cleara-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            to="/kontakt"
            className="inline-block bg-cleara-blue text-white px-8 py-4 rounded-full hover:bg-cleara-dark transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
          >
            Jetzt Offerte anfordern
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
