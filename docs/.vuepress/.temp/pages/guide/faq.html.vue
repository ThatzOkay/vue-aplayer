<template><div><h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h1>
<h2 id="为什么播放器不能在手机上自动播放" tabindex="-1"><a class="header-anchor" href="#为什么播放器不能在手机上自动播放"><span>为什么播放器不能在手机上自动播放？</span></a></h2>
<p>因为大多数移动端浏览器禁止了音频自动播放。</p>
<h2 id="为什么在-safari-中无法切换歌曲" tabindex="-1"><a class="header-anchor" href="#为什么在-safari-中无法切换歌曲"><span>为什么在 Safari 中无法切换歌曲？</span></a></h2>
<p>出现这个问题是因为 Vue.js 2.5+ 重写了 <code v-pre>nextTick</code>，
Vue.js 优先检测是否支持原生 <code v-pre>setImmediate</code>，这是一个高版本 IE 和 Edge 才支持的特性，不支持的话再去检测是否支持原生的 <code v-pre>MessageChannel</code>，如果也不支持的话就会降级为 <code v-pre>setTimeout 0</code>。</p>
<p>解决方案是在引入 Vue.js 之前将 <code v-pre>setImmediate</code> 和 <code v-pre>MessageChannel</code> 设置为 <code v-pre>undefined</code></p>
<p>参考资料：<a href="https://juejin.im/post/5a1af88f5188254a701ec230" target="_blank" rel="noopener noreferrer">https://juejin.im/post/5a1af88f5188254a701ec230</a></p>
</div></template>


