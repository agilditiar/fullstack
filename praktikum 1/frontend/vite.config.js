import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      buffer: 'buffer/'
    }
  },
  define: {
    global: 'window',
    'process.env': {}
  },
  optimizeDeps: {
    include: ['buffer', 'process']
  }
})