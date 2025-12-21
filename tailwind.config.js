/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cleara-blue': '#FF6B00',      // Neon Orange (Hauptfarbe)
        'cleara-light': '#FF9248',     // Helles Orange
        'cleara-dark': '#E65100',      // Dunkles Orange
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
