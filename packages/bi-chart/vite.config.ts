import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: resolve(__dirname, './dist/es'),
      tsconfigPath: './tsconfig.json'
    }),
    dts({
      outDir: resolve(__dirname, './dist/lib'),
      tsconfigPath: './tsconfig.json'
    }),
    {
      name: 'handle-style',
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle)

        for (const key of keys) {
          const bundler = bundle[key] as any

          this.emitFile({
            type: 'asset',
            fileName: key,
            source: bundler.code.replace(/\.less/g, '.css')
          })
        }
      }
    }
  ],
  build: {
    target: 'modules',
    outDir: 'dist',
    minify: 'esbuild',
    rollupOptions: {
      external: [
        'axios',
        'echarts',
        'echarts/core',
        'echarts/charts',
        'echarts/components',
        'echarts/features',
        'echarts/renderers',
        'lodash-es',
        'qs',
        'vue',
        'vue-echarts',
        'dayjs',
        /\.less/
      ],
      input: 'index.ts',
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: resolve(__dirname, './'),
          dir: resolve(__dirname, 'dist/es')
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: resolve(__dirname, './'),
          dir: resolve(__dirname, './dist/lib')
        }
      ]
    },
    lib: {
      entry: './index.ts',
      name: 'BiChart'
    }
  }
})
