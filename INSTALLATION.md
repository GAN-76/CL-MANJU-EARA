# Installation & Start-Anleitung

## Schritt 1: Dependencies installieren

Öffne ein Terminal im Projektordner und führe aus:

```bash
npm install
```

Dies installiert alle benötigten Pakete (React, TailwindCSS, Vite, etc.).

## Schritt 2: Entwicklungsserver starten

```bash
npm run dev
```

Die Website ist dann unter **http://localhost:3000** erreichbar.

## Schritt 3: Produktions-Build erstellen

Für die Veröffentlichung:

```bash
npm run build
```

Die fertigen Dateien befinden sich im `dist/` Ordner.

## Wichtige Anpassungen vor der Veröffentlichung

### 1. Kontaktdaten aktualisieren

**In `src/components/Contact.tsx`:**
- Zeile 24: Telefonnummer ändern
- Zeile 25: E-Mail-Adresse ändern
- Zeile 26: Standort anpassen

**In `src/components/Footer.tsx`:**
- Zeile 26: Telefonnummer ändern
- Zeile 30: E-Mail-Adresse ändern
- Zeile 34: Standort anpassen

**In `src/components/WhatsAppButton.tsx`:**
- Zeile 4: WhatsApp-Nummer eintragen (Format: 41XXXXXXXXX)

### 2. Social Media Links

**In `src/components/Footer.tsx`:**
- Zeile 67-72: Facebook & Instagram Links eintragen

### 3. Rechtliche Seiten

Erstelle folgende Seiten:
- Impressum
- Datenschutzerklärung
- AGB

Diese sollten als separate Seiten oder Modals implementiert werden.

### 4. SEO-Optimierung

**In `index.html`:**
- Meta-Description anpassen
- Keywords aktualisieren
- Favicon hinzufügen

## Deployment-Optionen

### Option 1: Netlify (empfohlen)
1. Erstelle einen Account auf netlify.com
2. Verbinde dein Git-Repository
3. Build Command: `npm run build`
4. Publish Directory: `dist`

### Option 2: Vercel
1. Erstelle einen Account auf vercel.com
2. Importiere das Projekt
3. Vercel erkennt automatisch Vite

### Option 3: Eigener Server
1. Führe `npm run build` aus
2. Lade den `dist/` Ordner auf deinen Webserver hoch
3. Konfiguriere den Webserver für SPA (Single Page Application)

## Support

Bei Fragen oder Problemen:
- Überprüfe die Konsole im Browser (F12)
- Stelle sicher, dass Node.js installiert ist
- Lösche `node_modules` und führe `npm install` erneut aus

## Technologie-Stack

- **React 18** - UI Framework
- **TypeScript** - Typsicherheit
- **Vite** - Build Tool
- **TailwindCSS** - Styling
- **Lucide React** - Icons
