import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme(),
    base: '/docs/',
    title: 'vue-aplayer',
    description: '🍰 A beautiful Vue.js HTML5 music player',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/hls.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/colorthief' }], // prettier-ignore
    ],
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'Options', link: '/options/' },
            { text: 'API', link: '/api/' },
        ],
        sidebar: {
            '/guide/': [
                '',
                'options',
                'api',
                'events',
                'lrc',
                'playlist',
                'fixed',
                'mini',
                'hls',
                'theme',
                'cdn',
                'faq',
            ],
        },
        repo: 'MoePlayer/vue-aplayer',
        docsDir: 'docs',
        docsBranch: 'dev',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
    },
})