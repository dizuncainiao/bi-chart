import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@utils': resolve(__dirname, '_utils'),
      '@plugins': resolve(__dirname, '_plugins'),
      '@hooks': resolve(__dirname, '_hooks')
    }
  }
})
