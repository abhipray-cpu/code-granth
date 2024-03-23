import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'Code Granth',
        short_name: 'Granth',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#387EB8',
        icons: [
          {
            src: './src/assets/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/apple-touch-icon-76x76.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/apple-touch-icon-120x120.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/apple-touch-icon-152x152.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/apple-touch-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/android-chrome-maskable-192x192.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/apple-touch-icon-120x120.png',
            sizes: '120x120',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/apple-touch-icon-180x180.png',
            sizes: '167x167',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/favicon-32x32.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: './src/assets/icons/apple-touch-icon-152x152.png',
            sizes: '144x144',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
