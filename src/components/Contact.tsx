import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Clock, ExternalLink, MessageCircle, Loader2, CheckCircle } from 'lucide-react'

// EmailJS Credentials (from environment variables)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setSubmitStatus('success')
      formRef.current.reset()
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: Phone, label: 'Telefon', value: '+41 76 228 87 86', href: 'tel:+41762288786' },
    { icon: Mail, label: 'E-Mail', value: 'info@cleara.ch', href: 'mailto:info@cleara.ch' },
    { icon: MapPin, label: 'Standort', value: 'Bernstrasse 24, 3110 Münsingen', href: 'https://maps.google.com/?q=Bernstrasse+24,+3110+Münsingen' },
    { icon: Clock, label: 'Erreichbarkeit', value: 'Mo-Fr: 8:00-18:00', href: null },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kontakt & Offerte
          </h2>
          <div className="w-20 h-1 bg-cleara-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kontaktieren Sie uns für eine unverbindliche Offerte. Wir melden uns innert 24 Stunden.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Kontaktformular - EmailJS */}
          <div>
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Offerte anfordern</h3>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cleara-blue"
                  placeholder="Ihr Name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">E-Mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cleara-blue"
                  placeholder="ihre@email.ch"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cleara-blue"
                  placeholder="+41 79 123 45 67"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Dienstleistung</label>
                <select
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cleara-blue"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="Gebäudereinigung">Gebäudereinigung</option>
                  <option value="Baucontainer Reinigung">Baucontainer Reinigung</option>
                  <option value="Fensterreinigung">Fensterreinigung</option>
                  <option value="Tankstellenreinigung">Tankstellenreinigung</option>
                  <option value="Storenreinigung">Storenreinigung</option>
                  <option value="Endreinigung">Endreinigung</option>
                  <option value="Aboreinigung">Aboreinigung</option>
                  <option value="Anderes">Anderes</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nachricht *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cleara-blue"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cleara-blue text-white py-4 rounded-full hover:bg-cleara-dark transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /> Wird gesendet...</>
                ) : (
                  'Offerte anfordern'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span>Vielen Dank! Wir melden uns innert 24 Stunden.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 bg-red-50 p-4 rounded-lg">
                  Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
                </div>
              )}

              <p className="text-sm text-gray-500 text-center">
                Ihre Daten werden vertraulich behandelt.
              </p>
            </form>
          </div>

          {/* Kontaktinformationen */}
          <div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href || '#'}
                  target={info.href?.startsWith('http') ? '_blank' : undefined}
                  rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`bg-white rounded-2xl p-6 shadow-lg flex items-start ${info.href ? 'hover:shadow-xl transition-shadow cursor-pointer' : ''}`}
                >
                  <div className="bg-cleara-blue/10 p-3 rounded-full mr-4">
                    <info.icon className="w-6 h-6 text-cleara-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{info.label}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                  {info.href && <ExternalLink className="w-4 h-4 text-gray-400 mt-1" />}
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/41762288786?text=Hallo,%20ich%20interessiere%20mich%20für%20Ihre%20Reinigungsdienste."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-green-500 hover:bg-green-600 text-white p-6 rounded-2xl flex items-center gap-4 transition-colors"
            >
              <MessageCircle className="w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold">Per WhatsApp kontaktieren</h3>
                <p className="text-sm opacity-90">Schnelle Antwort - auch mit Bildern</p>
              </div>
            </a>

            {/* Info Box */}
            <div className="mt-8 bg-gradient-to-r from-cleara-blue to-cleara-dark text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Schnelle Antwort garantiert</h3>
              <p className="mb-4">Wir melden uns innert 24 Stunden bei Ihnen zurück.</p>
              <ul className="text-sm opacity-90 space-y-2">
                <li>✓ Kostenlose & unverbindliche Offerte</li>
                <li>✓ Faire & transparente Preise</li>
                <li>✓ Zuverlässiger Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
