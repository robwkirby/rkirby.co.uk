const latestWork = [
  "swiss-army-button",
  "logo-animation"
];

module.exports = {
  env: {
    latestWork
  },
  head: {
    title: 'Rob Kirby | Frontend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  // loading: '~/components/loader.vue',
  /*
  ** Build configuration
  */
  router: {
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  },
  build: {
    analyze: true,
    extend (config, { isDev, isClient }) {
      config.module.rules.push({
          test: /\.md$/,
          loader: 'markdown-with-front-matter-loader'
      })
    }
  },
  plugins: [
    { src: '~/plugins/Vuelidate' }
  ],
  modules: [
    '@nuxtjs/google-analytics',
    ['nuxt-sass-resources-loader', [
      '~/assets/scss/_resources.scss',
    ]],
  ],
  css: [
    '~/assets/scss/main.scss'
  ],
  googleAnalytics: {
    id: 'UA-64313676-1'
  }
}
