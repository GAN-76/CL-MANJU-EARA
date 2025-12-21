export default function Datenschutz() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-cleara-dark mb-8">Datenschutzerklärung</h1>
        
        <div className="prose max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-cleara-dark mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold text-cleara-dark mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cleara-dark mb-4">2. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold text-cleara-dark mb-2">Wer ist verantwortlich für die Datenerfassung?</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
              Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            
            <h3 className="text-xl font-semibold text-cleara-dark mb-2 mt-4">Wie erfassen wir Ihre Daten?</h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
              Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mt-2">
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. 
              Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cleara-dark mb-4">3. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und 
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben ausserdem 
              ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cleara-dark mb-4">4. Cookies</h2>
            <p>
              Diese Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser 
              auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot 
              nutzerfreundlicher zu machen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cleara-dark mb-4">5. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
              aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
