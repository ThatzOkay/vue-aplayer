import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import dayjs from "dayjs";

export default defineUserConfig({
  bundler: viteBundler(),
  base: "/docs/",
  title: "vue-aplayer",
  description: "🍰 A beautiful Vue.js HTML5 music player",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/hls.js" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/colorthief" }],
  ],
  plugins: [
    [
      "@vuepress/plugin-pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh",
        },
      },
    ],
    [
      "@vuepress/plugin-last-updated",
      {
        transformer: (timestamp) => {
          return dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss");
        },
      },
    ],
  ],
  theme: defaultTheme({
    navbar: [
      { text: "Guide", link: "/guide/" },
      { text: "Options", link: "/options/" },
      { text: "API", link: "/api/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          link: "/guide/",
          collapsible: true,
          children: [
            {
              text: "Introduction",
              link: "/guide/",
            },
          ],
        },
      ],
    },
    repo: "ThatzOkay/vue-aplayer",
    docsDir: "docs",
    docsBranch: "dev",
    editLink: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdatedText: "Last Updated",
  }),
});
