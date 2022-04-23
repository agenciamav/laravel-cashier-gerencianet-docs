module.exports = {
  title: 'Laravel Cashier Gerencianet',
  description: 'Documentação do Laravel Cashier Gerencianet',
  head: [
    // ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png" }],
    // ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-icon-180x180.png" }],
    // ['link', { rel: "icon", href: "/logo.png" }],

    // ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png" }],
    // ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" }],

    // ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png" }],
    // ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" }],

    ['link', { rel: "manifest", href: "/manifest.webmanifest" }],

    // ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#ff665c" }],
    // ['link', { rel: "mask-icon", href: "/icons/safari-pinned-tab.svg", color: "#ff665c" }],

    // ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" }],
    // ['link', { rel: "shortcut icon", href: "/icons/favicon.ico" }],

    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['meta', { name: "msapplication-TileColor", content: "#ff665c" }],

    // ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml" }],
    // ['meta', { name: "msapplication-config", content: "/icons/browserconfig.xml" }],

    ['link', { rel: "apple-touch-icon", sizes: "57x57", href: "/icons/apple-icon-57x57.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "60x60", href: "/icons/apple-icon-60x60.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "72x72", href: "/icons/apple-icon-72x72.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "76x76", href: "/icons/apple-icon-76x76.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "114x114", href: "/icons/apple-icon-114x114.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "120x120", href: "/icons/apple-icon-120x120.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "144x144", href: "/icons/apple-icon-144x144.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "152x152", href: "/icons/apple-icon-152x152.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-icon-180x180.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "192x192", href: "/icons/android-icon-192x192.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "96x96", href: "/icons/favicon-96x96.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/icons/manifest.json" }],
    ['meta', { name: "msapplication-TileColor", content: "#ffffff" }],
    ['meta', { name: "msapplication-TileImage", content: "/icons/ms-icon-144x144.png" }],
    ['meta', { name: "theme-color", content: "#ffffff" }],

    ['meta', { name: "viewport", content: "width=device-width" }],
  ],
  themeConfig: {
    logo: 'logo.png',
    repo: 'agenciamav/laravel-cashier-gerencianet-docs',
    docsBranch: 'main',
    author: {
      'name': 'Luciano T.',
      'twitter': '@LucianoTonet'
    },
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edite esta página no GitHub',
    contributors: false,
    lastUpdated: false,
    domain: '#',
    docsearch: {
      // container: '#docsearch',
      // appId: process.env.DOCSEARCH_APP_ID,
      // apiKey: process.env.DOCSEARCH_KEY,
      // indexName: 'laravelcashiergerencianet'
    },
    navbar: [
      // {
      //   text: 'Luciano Tonet',
      //   link: 'https://github.com/lucianotonet/'
      // },
    ],
    // displayAllHeaders: true,
    sidebar: [
      '/',
      '/01-install',
    ]
  },
  plugins: [
    ['seo', {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => 'summary_large_image',
      type: $page => 'article',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      image: ($page, $site) => $page.frontmatter.image,
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    }],
    [
      '@vuepress/pwa',
      {
        skipWaiting: true,
      }
    ],
    // [
    //   '@vuepress/docsearch',
    //   {
    //     container: '#docsearch',
    //     appId: process.env.DOCSEARCH_APP_ID,
    //     apiKey: process.env.DOCSEARCH_KEY,
    //     indexName: 'laravelcashiergerencianet'
    //   }
    // ],
  ]
}
