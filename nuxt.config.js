export default {
  telemetry: false,
  serverMiddleware: {
    '/api': '~/backend'
  },
  head: {
    title: 'Tecmundo',
    htmlAttrs: {
      lang: 'en-us'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon-1.png' }]
  },
  styleResources: {
    scss: ['~/assets/scss/variables.scss']
  },
  publicRuntimeConfig: {
    apiUrl: 'http://localhost:3000/api'
  },
  css: [
    '~/assets/css/normalize.css',
    '~/assets/scss/global.scss',
    'boxicons/css/boxicons.min.css'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  plugins: ['~/plugins/helper.js', '~/plugins/syntaxHigh.js'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/gtm',
    [
      'nuxt-lazy-load',
      {
        defaultImage: 'loading.gif'
      }
    ]
  ],
  gtm: {
    id: 'YOUR-GTM-ID',
    enabled: process.env.NODE_ENV == 'production' ? true : false
  },
  buildModules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    preload: true,
    families: {
      Poppins: [100, 300, 400, 700],
      Mulish: [100, 300, 400, 700]
    }
  }
}
