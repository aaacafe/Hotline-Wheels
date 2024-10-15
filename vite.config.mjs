import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'

export default defineConfig({
  server: {
    host: process.env.NODE_ENV === 'development' ? undefined : true
  },
  build: {
    emptyOutDir: false,
  },
  plugins: [
    shopify(),
  ]
})