
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Config for https://jaisalmeria.github.io/Test1
export default defineConfig({
  plugins: [react()],
  base: '/Test1/',                  // keep this in the Test1 repo
  build: { outDir: 'dist' },
  
  server: {
    host: '0.0.0.0',
    port: 5173
  },

  // <- THIS line is what the error log is asking for
  assetsInclude: [
    '**/*.png', '**/*.PNG',
    '**/*.jpg', '**/*.JPG',
    '**/*.jpeg','**/*.JPEG',
    '**/*.webp','**/*.WEBP'
  ]
})
