import { Link } from 'react-router-dom'
import { CheckCircle, DollarSign, Leaf } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Zuverlässig',
      description: 'Pünktlich, termingerecht und mit höchster Sorgfalt',
    },
    {
      icon: DollarSign,
      title: 'Preisgerecht',
      description: 'Faire und transparente Preise ohne versteckte Kosten',
    },
    {
      icon: Leaf,
      title: 'Nachhaltigkeit',
      description: 'Umweltfreundliche Reinigungsmittel und Methoden',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Über uns
            </h2>
            <div className="w-20 h-1 bg-cleara-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Die Cleara Group GmbH aus Münsingen ist Ihr kompetenter Partner für Sauberkeit und 
              Werterhalt. Wir bieten professionelle Reinigungs- und Liegenschaftsdienste mit 
              hochwertigen Mitteln, zuverlässig, termingerecht und mit der Präzision, die Sie von 
              Schweizer Qualität erwarten.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-cleara-blue/5 transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-cleara-blue/10 p-4 rounded-full">
                    <value.icon className="w-8 h-8 text-cleara-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-cleara-blue to-cleara-dark text-white p-8 md:p-12 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Zuverlässig. Preisgerecht. Nachhaltig.
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Unser erfahrenes und versichertes Team steht für höchste Qualität
                und Kundenzufriedenheit.
              </p>
              <Link
                to="/kontakt"
                className="inline-block bg-white text-cleara-blue px-8 py-3 rounded-full hover:bg-gray-100 transition-all font-semibold"
              >
                Jetzt kennenlernen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
