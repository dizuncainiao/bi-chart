import { defineConfig, loadEnv } from 'vite'
import { cwd } from 'process'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, cwd())
  const { VITE_HOST } = env
  return {
    server: {
      proxy: {
        '/bdcloud-call-analytic': {
          target: VITE_HOST,
          changeOrigin: true,
          secure: true
        }
      },
      open: true,
      port: 8657
    }
  }
})
