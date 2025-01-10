<template><div><h1 id="歌词" tabindex="-1"><a class="header-anchor" href="#歌词"><span>歌词</span></a></h1>
<h2 id="lrc-格式" tabindex="-1"><a class="header-anchor" href="#lrc-格式"><span>LRC 格式</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">[ti:歌词(歌曲)的标题]</span>
<span class="line">[al:本歌所在的唱片集]</span>
<span class="line">[ar:演出者-歌手]</span>
<span class="line">[au:歌词作者-作曲家]</span>
<span class="line">[by:此LRC文件的创建者]</span>
<span class="line">[offset:+/- 以毫秒为单位加快或延后歌词的播放]</span>
<span class="line"></span>
<span class="line">[re:创建此LRC文件的播放器或编辑器]</span>
<span class="line">[ve:程序的版本]</span>
<span class="line"></span>
<span class="line">[mm:ss.ms] 我们一起学猫叫</span>
<span class="line">[mm:ss.ms][mm:ss:ms] 一起喵喵喵喵喵</span>
<span class="line">...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看维基百科了解更多：<a href="https://zh.wikipedia.org/wiki/LRC%E6%A0%BC%E5%BC%8F" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/LRC格式</a></p>
<h2 id="lrc-文件" tabindex="-1"><a class="header-anchor" href="#lrc-文件"><span>LRC 文件</span></a></h2>
<aplayer-lrc lrc="https://cdn.moefe.org/music/lrc/kiss.lrc" :lrcType="3" /><p>📝 example.vue</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!--</span>
<span class="line">    指定 lrcType 为 3，表示 audio.lrc 的值是 lrc 文件地址，</span>
<span class="line">    将通过 `fetch` 获取 lrc 歌词文本。</span>
<span class="line">  --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aplayer</span> <span class="token attr-name">audio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>:audio<span class="token punctuation">"</span></span> <span class="token attr-name">:lrcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> APlayer <span class="token keyword">from</span> <span class="token string">'@moefe/vue-aplayer'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>APlayer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">audio</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'啵唧'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">artist</span><span class="token operator">:</span> <span class="token string">'Hanser'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/mp3/kiss.mp3'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300'</span><span class="token punctuation">,</span> <span class="token comment">// prettier-ignore</span></span>
<span class="line">        <span class="token literal-property property">lrc</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/lrc/kiss.lrc'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lrc-字符串" tabindex="-1"><a class="header-anchor" href="#lrc-字符串"><span>LRC 字符串</span></a></h2>
<aplayer-lrc lrc="[00:00.00] 我们一起学猫叫\n[99:99.99] 一起喵喵喵喵喵" :lrcType="1" /><p>📝 example.vue</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- 指定 lrcType 为 1，表示 audio.lrc 的值是 lrc 字符串 --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aplayer</span> <span class="token attr-name">:audio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio<span class="token punctuation">"</span></span> <span class="token attr-name">:lrcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> APlayer <span class="token keyword">from</span> <span class="token string">'@moefe/vue-aplayer'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>APlayer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">audio</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'啵唧'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">artist</span><span class="token operator">:</span> <span class="token string">'Hanser'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/mp3/kiss.mp3'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300'</span><span class="token punctuation">,</span> <span class="token comment">// prettier-ignore</span></span>
<span class="line">        <span class="token literal-property property">lrc</span><span class="token operator">:</span> <span class="token string">'[00:00.00] 我们一起学猫叫\n[99:99.99] 一起喵喵喵喵喵'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="禁用歌词" tabindex="-1"><a class="header-anchor" href="#禁用歌词"><span>禁用歌词</span></a></h2>
<aplayer-lrc :lrcType="0" /><p>📝 example.vue</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- 指定 lrcType 为 0，表示禁用歌词 --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aplayer</span> <span class="token attr-name">:audio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio<span class="token punctuation">"</span></span> <span class="token attr-name">:lrcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> APlayer <span class="token keyword">from</span> <span class="token string">'@moefe/vue-aplayer'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>APlayer<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">audio</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'啵唧'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">artist</span><span class="token operator">:</span> <span class="token string">'Hanser'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/mp3/kiss.mp3'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300'</span> <span class="token comment">// prettier-ignore</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


