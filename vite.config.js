import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Pinned to 5174 so the website dev server never collides with the FlashOS
// desktop app's dev server, which runs on 5173 (Electron loads localhost:5173
// in dev — see electron/main.js). strictPort makes a collision fail loudly
// instead of silently bumping to another port.
export default defineConfig({
  plugins: [react()],
  server: { port: 5174, strictPort: true },
  preview: { port: 5174, strictPort: true },
})
