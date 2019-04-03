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
      { hid: 'description', name: 'description', content: 'Portfolio of Rob Kirby, Front End Developer based in Lancaster, England.' },
      { name: 'theme-color', content: '#c92b1e' },
      // Open Graph
      { name: 'og:title', content: 'Rob Kirby | Frontend Developer' },
      { name: 'og:description', content: 'Portfolio of Rob Kirby, Front End Developer based in Lancaster, England.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://www.rkirby.co.uk/' },
      { name: 'og:image', content: '/uploads/meta.png' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Rob Kirby | Frontend Developer' },
      { name: 'twitter:description', content: 'Portfolio of Rob Kirby, Front End Developer based in Lancaster, England.' },
      { name: 'twitter:image', content: '/uploads/meta.png' },
      { name: 'twitter:image:alt', content: 'https://www.rkirby.co.uk/' }
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
  generate: {
    fallback: "404.html"
  },
  build: {
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
