import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Custom Domain: cleara.ch
  server: {
    port: 3000
  },
  define: {
    // EmailJS credentials for production
    'import.meta.env.VITE_EMAILJS_SERVICE_ID': '"service_ak56ikt"',
    'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': '"template_aahfvou"',
    'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': '"L9Nv9hkMfi5ghp9kB"'
  }
})
