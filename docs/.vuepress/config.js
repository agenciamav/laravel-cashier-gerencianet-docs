module.exports = {
  title: 'Laravel Cashier Gerencianet',
  description: 'Documentação para o Laravel Cashier Gerencianet',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", href: "/assets/laravel-cashier-gerencianet.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/manifest.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#ff665c" }],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: "msapplication-TileColor", content: "#ff665c" }],
    ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
    ['meta', { name: "viewport", content: "width=device-width" }],
  ],
  themeConfig: {
    logo: 'logo.png',
    repo: 'agenciamav/laravel-cashier-gerencianet-docs',
    docsBranch: 'master',
    author: {
      'name': 'Luciano T.',
      'twitter': '@lucianotonet'
    },
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edite esta página no GitHub',
    contributors: false,
    lastUpdated: false,
    domain: '#',
    docsearch: {
      container: '#docsearch',
      appId: process.env.DOCSEARCH_APP_ID,
      apiKey: process.env.DOCSEARCH_KEY,
      indexName: 'laravelcashiergerencianet'
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
    [
        '@vuepress/docsearch',
        {
            container: '#docsearch',
            appId: process.env.DOCSEARCH_APP_ID,
            apiKey: process.env.DOCSEARCH_KEY,
          indexName: 'laravelcashiergerencianet'
        }
    ],
  ]
}
