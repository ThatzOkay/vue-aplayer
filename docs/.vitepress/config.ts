import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue APlayer",
  description: "🍰 A beautiful Vue.js HTML5 music player",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/hls.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/colorthief" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: "Guide", link: "/guide" },
      { text: "Options", link: "/options" },
      { text: "API", link: "/api" },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Options', link: '/guide/options' },
          { text: 'API', link: '/guide/api' },
          { text: 'Events', link: '/guide/events' },
          { text: 'Lrc', link: '/guide/lrc' },
          { text: 'Playlist', link: '/guide/playlist' }, 
          { text: 'Fixed', link: '/guide/fixed' },
          { text: 'Mini', link: '/guide/mini' },
          { text: 'HLS', link: '/guide/hls' },
          { text: 'Base64 Data', link: '/guide/base64' },
          { text: 'Theme', link: '/guide/theme' },
          { text: 'CDN', link: '/guide/cdn' },
          { text: 'FAQ', link: '/guide/faq' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ThatzOkay/vue-aplayer' }
    ],
    editLink: {
      pattern: "https://github.com/ThatzOkay/vue-aplayer/edit/dev/:path",
      text: "Edit this page on GitHub",
    },
  },
  lastUpdated: true,
});
