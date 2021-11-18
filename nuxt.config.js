export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'offshore',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: 'assets/images/favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'assets/css/lineicons.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/tiny-slider.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/glightbox.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/style.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/custom.css' }
    ],
    script: [
      {
        src: 'assets/js/bootstrap.bundle.min.js',
        body: true
      },
      {
        src: 'assets/js/glightbox.min.js',
        body: true
      },
      {
        src: 'assets/js/main.js',
        body: true
      },
      {
        src: 'assets/js/tiny-slider.js',
        body: true
      },
      {
        src: 'assets/js/custom.js',
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
