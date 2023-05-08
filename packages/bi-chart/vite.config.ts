import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      outputDir: resolve(__dirname, './dist/es'),
      tsConfigFilePath: './tsconfig.json'
    }),
    {
      name: 'style',
      generateBundle(config, bundle) {
        const keys = Object.keys(bundle)

        for (const key of keys) {
          const bundler: any = bundle[key as any]

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
    outDir: 'es',
    minify: 'esbuild',
    rollupOptions: {
      external: ['vue', /\.less/],
      input: 'components/index.ts',
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          // https://cn.rollupjs.org/configuration-options/#output-preservemodulesroot
          preserveModulesRoot: 'components',
          dir: resolve(__dirname, 'dist/es')
        }
      ]
    },
    lib: {
      entry: resolve(__dirname, 'components/index.ts'),
      name: 'BiChart'
    }
  },
  resolve: {
    alias: {
      // fixme 使用别名在工作空间内引入会导致解析报错！！！
      // '@utils': resolve(__dirname, '_utils'),
      // '@plugins': resolve(__dirname, '_plugins'),
      // '@hooks': resolve(__dirname, '_hooks')
    }
  }
})
