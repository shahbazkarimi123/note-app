import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    server: {
    port: 3001,  // 👈 change this to whatever port you want
    strictPort: true, // (optional) if true, Vite will fail instead of falling back if the port is in use
  },
  ],
})
