import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(
  {
    build: {
      target: 'es2015',
      outDir: 'dist',
      assetsDir: '',
      assetsInlineLimit: 0,
      lib: {
        entry: 'src/main.js',
        formats: ['iife'], // Specify the format as 'iife'
        fileName: 'my-tool.js', // Specify the desired filename
        name: 'MyTool', // Specify the name for the global variable (replace with your desired name)
      },
    },
      plugins: [vue()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }

      }

    })
