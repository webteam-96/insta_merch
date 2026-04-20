import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Cache bust: force Vercel rebuild
export default defineConfig({
  plugins: [react()],
})
