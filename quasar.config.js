// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js
import { defineConfig } from '#q-app/wrappers'

export default defineConfig((/* ctx */) => {
  return {
    // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-vite/boot-files
    boot: ['globals'],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
    css: ['app.scss'],

    // SCSS variables file (Quasar will auto-inject it into all .scss files)
    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#property-sourcefiles
    scssSassVariables: 'src/css/quasar.variables.scss',

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      'roboto-font',
      'material-icons',
      'fontawesome-v6',
    ],

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },

      vueRouterMode: 'history', // available values: 'hash', 'history'

      extendViteConf(viteConf) {
        viteConf.resolve = viteConf.resolve || {}
        viteConf.resolve.alias = {
          ...viteConf.resolve.alias,
          '@': new URL('./src', import.meta.url).pathname,
        }

        // Force pure-JS sass instead of sass-embedded (which crashes in this env)
        viteConf.css = viteConf.css || {}
        viteConf.css.preprocessorOptions = viteConf.css.preprocessorOptions || {}
        viteConf.css.preprocessorOptions.scss = {
          ...viteConf.css.preprocessorOptions.scss,
          api: 'legacy',
        }
        viteConf.css.preprocessorOptions.sass = {
          ...viteConf.css.preprocessorOptions.sass,
          api: 'legacy',
        }
      },

      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            eslint: {
              lintCommand: 'eslint -c ./eslint.config.js "./**/*.{ts,js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
          },
          { server: false },
        ],
      ],
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
    devServer: {
      // https: true
      open: true, // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
    framework: {
      config: {
        loadingBar: {
          color: '#E8621A',
          size: '4px',
        },
        notify: {
          color: 'primary',
          position: 'top',
        },
      },

      // Quasar plugins
      plugins: ['Notify', 'Loading', 'LoadingBar'],
    },

    // animations: 'all', // --- includes all animations
    // https://v2.quasar.dev/options/animations
    animations: [],

    // https://v2.quasar.dev/quasar-cli-vite/developing-ssr/configuring-ssr
    ssr: {
      prodPort: 3000,
      middlewares: [
        'render', // keep this as last one
      ],
      pwa: false,
    },

    // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
    pwa: {
      workboxMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-cordova-apps/configuring-cordova
    cordova: {},

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true,
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/configuring-electron
    electron: {
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,
      bundler: 'packager', // 'packager' or 'builder'
      packager: {},
      builder: {
        appId: 'falla-sants-patrons-alzira',
      },
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
    bex: {
      extraScripts: [],
    },
  }
})
