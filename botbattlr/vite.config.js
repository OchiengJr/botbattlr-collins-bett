import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Define Vite configuration
export default defineConfig({
  // Specify plugins used in Vite
  plugins: [react()],
})
