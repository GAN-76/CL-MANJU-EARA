import { Star, StarHalf } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria S.',
      location: 'Zürich',
      rating: 5,
      text: 'Sehr professionell und zuverlässig! Die Umzugsreinigung wurde perfekt durchgeführt und wir haben die Wohnung problemlos übergeben können.',
    },
    {
      name: 'Thomas M.',
      location: 'Aargau',
      rating: 5,
      text: 'Seit mittlerweile zwei Jahren kommt das CLEARA-Team regelmäßig zu uns ins Büro. Sie sind immer pünktlich, arbeiten gründlich und sind dabei total nett. Ich kann sie wirklich jedem weiterempfehlen!',
    },
    {
      name: 'Sandra K.',
      location: 'Luzern',
      rating: 5,
      text: 'Die Fenster sehen aus wie neu – völlig streifenfrei und blitzsauber! Das Team war richtig flott und sehr sorgfältig. Bei der nächsten Reinigung rufe ich sie garantiert wieder an.',
    },
    {
      name: 'Peter H.',
      location: 'Bern',
      rating: 4,
      text: 'Die Preise sind fair und die Arbeit einfach erstklassig. CLEARA ist inzwischen unser zuverlässiger Partner für alle Reinigungen – wir sind rundum zufrieden!',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Das sagen unsere Kunden
          </h2>
          <div className="w-20 h-1 bg-cleara-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zufriedene Kunden sind unser bester Beweis für Qualität und Zuverlässigkeit.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
                <StarHalf className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-900">4.5/5.0</p>
                <p className="text-gray-600">Durchschnittliche Bewertung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
