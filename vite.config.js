import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template:{
      // 添加以下内容
      compilerOptions:{
        isCustomElement: tag => tag.startsWith('ion-') || tag.startsWith("turnstile")
      }
    }
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 15455
  }
})
