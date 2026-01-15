import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      // এটি আপনার ব্রাউজারের CORS এরর দূর করবে
      '/api': {
        target: 'https://news-server.ubautomation.com',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})