import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'

export default defineConfig({
  server: {
    host: true
  },
  build: {
    emptyOutDir: false,
  },
  plugins: [
    shopify(),
  ]
})