import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const whatsappNumber = '41762288786'
  const message = 'Hallo, ich interessiere mich für Ihre Reinigungsdienstleistungen.'

  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-40"
      aria-label="WhatsApp Kontakt"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}

export default WhatsAppButton
