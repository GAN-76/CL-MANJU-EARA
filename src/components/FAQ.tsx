import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Wie schnell bekomme ich einen Termin?',
      answer: 'In der Regel können wir innerhalb von 2-3 Werktagen einen Termin anbieten. Für dringende Fälle bieten wir auch Express-Service an.',
    },
    {
      question: 'Sind Sie versichert?',
      answer: 'Ja, wir verfügen über eine umfassende Betriebshaftpflichtversicherung. Ihre Räumlichkeiten und Gegenstände sind während unserer Arbeit vollständig abgesichert.',
    },
    {
      question: 'Welche Reinigungsmittel verwenden Sie?',
      answer: 'Wir verwenden ausschließlich hochwertige, umweltfreundliche Reinigungsmittel, die effektiv und schonend zugleich sind. Auf Wunsch arbeiten wir auch mit Ihren bevorzugten Produkten.',
    },
    {
      question: 'Arbeiten Sie auch am Wochenende?',
      answer: 'Ja, wir bieten flexible Terminvereinbarungen an, auch am Wochenende und außerhalb der regulären Geschäftszeiten.',
    },
    {
      question: 'Wie wird der Preis berechnet?',
      answer: 'Der Preis richtet sich nach der Größe der zu reinigenden Fläche, dem Reinigungsumfang und der Häufigkeit. Wir erstellen Ihnen gerne ein kostenloses und unverbindliches Angebot.',
    },
    {
      question: 'Muss ich bei der Reinigung anwesend sein?',
      answer: 'Nein, das ist nicht erforderlich. Viele unserer Kunden übergeben uns einen Schlüssel oder Code. Wir arbeiten diskret und zuverlässig auch in Ihrer Abwesenheit.',
    },
    {
      question: 'Bieten Sie eine Zufriedenheitsgarantie?',
      answer: 'Ja, Ihre Zufriedenheit ist uns wichtig. Sollten Sie mit unserer Arbeit nicht vollständig zufrieden sein, bessern wir kostenfrei nach.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Häufig gestellte Fragen
          </h2>
          <div className="w-20 h-1 bg-cleara-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Dienstleistungen.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-cleara-blue transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Haben Sie weitere Fragen?</p>
          <Link
            to="/kontakt"
            className="inline-block bg-cleara-blue text-white px-8 py-4 rounded-full hover:bg-cleara-dark transition-all transform hover:scale-105 font-semibold"
          >
            Kontaktieren Sie uns
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FAQ
