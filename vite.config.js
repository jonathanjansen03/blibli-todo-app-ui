import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import istanbul from 'vite-plugin-istanbul'
import path from 'path'

import { commonProxy } from './dev-config/proxy-config'

function resolve (dir) {
  return path.join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const noMock = env.VITE_ENV === 'development' && env.VITE_NOMOCK === 'true'
  const prod = env.VITE_ENV === 'production'

  return {
    plugins: [
      vue2(),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      istanbul()
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url))
        },
        {
          find: '@api-mock',
          replacement: noMock || prod ? resolve('src/empty') : resolve('src/api-mock')
        },
        {
          find: /~(.+)/,
          replacement: fileURLToPath(new URL('./node_modules/$1', import.meta.url))
        }
      ]
    },
    server: {
      host: 'localhost',
      port: 8080,
      proxy: noMock ? commonProxy : null
    },
    build: {
      assetsDir: 'static',
      sourcemap: true,
      modulePreload: false,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name].[hash].js',
          entryFileNames: 'static/[name].js',
          
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
              return 'static/img/[name].[hash][extname]'
            }
            
            if (/\.css$/.test(name ?? '')) {
              if(name === 'style.css') return 'static/index.css'
              return 'static/[name].[hash][extname]'
            }

            if (/\.(ttf|woff2)$/.test(name ?? '')) {
              return 'static/fonts/[name]-[hash][extname]'
            }
    
            // default value
            // ref: https://rollupjs.org/guide/en/#outputassetfilenames
            return 'static/[name].[hash][extname]'
          }
        }
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      clearMocks: true,
      include: ['tests/specs/**'],
      coverage: {
        all: true,
        enabled: true,
        provider: 'istanbul',
        reporter: ['lcov', 'text', 'json'],
        reportsDirectory: "./tests/coverage",
        include: [
          // List of files included from coverage
          'src/App.vue',
          'src/api/**/*.js',
          'src/store/modules/*.js',
          'src/utils/**/*.js',
          'src/components/**',
          'src/pages/**',
        ]
      }
    }
  }
})
