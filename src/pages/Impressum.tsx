export default function Impressum() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-cleara-dark mb-8">Impressum</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-cleara-dark mt-6 mb-4">Angaben gemäss Art. 8 UWG</h2>
          
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg text-cleara-dark">Firma</h3>
              <p>Cleara Group GmbH</p>
              <p className="text-sm text-gray-600">Branche: Reinigung / Liegenschaftsdienst</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-cleara-dark">Adresse</h3>
              <p>Bernstrasse 24</p>
              <p>3110 Münsingen</p>
              <p>Schweiz</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-cleara-dark">Kontakt</h3>
              <p>Telefon: +41 76 228 87 86</p>
              <p>E-Mail: info@cleara.ch</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-cleara-dark">Handelsregister</h3>
              <p>Eingetragen im Handelsregister des Kantons Bern</p>
              <p>UID: CHE-343.730.775</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg text-cleara-dark mt-8">Haftungsausschluss</h3>
              <p className="mt-2">
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, 
                Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
              </p>
              <p className="mt-2">
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, 
                welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten 
                Informationen, durch Missbrauch der Verbindung oder durch technische Störungen 
                entstanden sind, werden ausgeschlossen.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-cleara-dark mt-8">Haftung für Links</h3>
              <p className="mt-2">
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres 
                Verantwortungsbereichs. Der Zugriff und die Nutzung solcher Webseiten 
                erfolgen auf eigene Gefahr des Nutzers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
