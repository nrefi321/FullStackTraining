import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: '/',
  build: {
    chunkSizeWarningLimit: 1000, // Size in kB
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          'vendor': ['react', 'react-dom', 'react-router'],
          'charts': ['recharts']
        }
      }
    },
  },
})
