# Cleara Group GmbH - Website

Professionelle, moderne und mobil-optimierte Website für das Schweizer Reinigungsunternehmen Cleara Group GmbH.

## 🚀 Installation

### Voraussetzungen
- Node.js (Version 16 oder höher)
- npm oder yarn

### Schritte

1. **Dependencies installieren:**
```bash
npm install
```

2. **Logo platzieren:**
   - Legen Sie das Logo `Cleara_Logo.png` in den Ordner `public/images/`
   - Erstellen Sie den Ordner, falls er nicht existiert:
   ```bash
   mkdir -p public/images
   ```

3. **Entwicklungsserver starten:**
```bash
npm run dev
```

Die Website ist dann unter `http://localhost:3000` erreichbar.

4. **Produktions-Build erstellen:**
```bash
npm run build
```

Die fertigen Dateien befinden sich im `dist/` Ordner.

## 📁 Projektstruktur

```
Cleara/
├── public/
│   └── images/
│       └── Cleara_Logo.png
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── CookieBanner.tsx
│   │   └── WhatsAppButton.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Features

- ✅ Responsive Design (Desktop, Tablet, Mobile)
- ✅ Moderne UI mit TailwindCSS
- ✅ SEO-optimiert
- ✅ Schnelle Ladezeiten
- ✅ Cookie-Banner (DSGVO-konform)
- ✅ WhatsApp-Integration
- ✅ Kontaktformular
- ✅ FAQ-Sektion
- ✅ Kundenbewertungen
- ✅ Dienstleistungsübersicht

## 🔧 Anpassungen

### Kontaktdaten ändern
Bearbeiten Sie die folgenden Dateien:
- `src/components/Contact.tsx` - Kontaktformular
- `src/components/Footer.tsx` - Footer-Informationen
- `src/components/WhatsAppButton.tsx` - WhatsApp-Nummer

### Farben anpassen
Bearbeiten Sie `tailwind.config.js`:
```javascript
colors: {
  'cleara-blue': '#00B4D8',
  'cleara-light': '#90E0EF',
  'cleara-dark': '#0077B6',
}
```

## 📱 Browser-Kompatibilität

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)
- Mobile Browser (iOS Safari, Chrome Mobile)

## 📄 Lizenz

© 2026 Cleara Group GmbH. Alle Rechte vorbehalten.
