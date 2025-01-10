export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/api/", { loader: () => import(/* webpackChunkName: "api_index.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/api/index.html.js"), meta: {"title":"API"} }],
  ["/guide/api.html", { loader: () => import(/* webpackChunkName: "guide_api.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/guide/api.html.js"), meta: {"title":"API"} }],
  ["/guide/cdn.html", { loader: () => import(/* webpackChunkName: "guide_cdn.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/guide/cdn.html.js"), meta: {"title":"CDN"} }],
  ["/guide/events.html", { loader: () => import(/* webpackChunkName: "guide_events.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/guide/events.html.js"), meta: {"title":"事件绑定"} }],
  ["/guide/faq.html", { loader: () => import(/* webpackChunkName: "guide_faq.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/guide/faq.html.js"), meta: {"title":"FAQ"} }],
  ["/guide/fixed.html", { loader: () => import(/* webpackChunkName: "guide_fixed.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/guide/fixed.html.js"), meta: {"title":"吸底模式"} }],
  ["/guide/hls.html", { loader: () => import(/* webpackChunkName: "guide_hls.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/guide/hls.html.js"), meta: {"title":"HLS 支持"} }],
  ["/guide/lrc.html", { loader: () => import(/* webpackChunkName: "guide_lrc.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/guide/lrc.html.js"), meta: {"title":"歌词"} }],
  ["/guide/mini.html", { loader: () => import(/* webpackChunkName: "guide_mini.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/guide/mini.html.js"), meta: {"title":"迷你模式"} }],
  ["/guide/options.html", { loader: () => import(/* webpackChunkName: "guide_options.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/guide/options.html.js"), meta: {"title":"选项"} }],
  ["/guide/playlist.html", { loader: () => import(/* webpackChunkName: "guide_playlist.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/guide/playlist.html.js"), meta: {"title":"播放列表"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"入门"} }],
  ["/guide/theme.html", { loader: () => import(/* webpackChunkName: "guide_theme.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/guide/theme.html.js"), meta: {"title":"主题"} }],
  ["/options/", { loader: () => import(/* webpackChunkName: "options_index.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/options/index.html.js"), meta: {"title":"选项"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Projects/ts2/vue-aplayer/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
