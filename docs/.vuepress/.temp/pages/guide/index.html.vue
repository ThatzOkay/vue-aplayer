<template><div><h1 id="入门" tabindex="-1"><a class="header-anchor" href="#入门"><span>入门</span></a></h1>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>请确保你的 Vue.js 版本 &gt;= 2.2.0</p>
</div>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<h3 id="使用-npm" tabindex="-1"><a class="header-anchor" href="#使用-npm"><span>使用 npm</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @moefe/vue-aplayer <span class="token parameter variable">--save</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="使用-yarn" tabindex="-1"><a class="header-anchor" href="#使用-yarn"><span>使用 yarn <Badge text="推荐" /></span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> @moefe/vue-aplayer</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>推荐使用 yarn 安装并提交 yarn.lock 锁定版本号</p>
<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2>
<h3 id="传统方式" tabindex="-1"><a class="header-anchor" href="#传统方式"><span>传统方式</span></a></h3>
<p>📝 index.html</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- prettier-ignore --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-player</span> <span class="token attr-name">:audio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio<span class="token punctuation">"</span></span> <span class="token attr-name">:lrc-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-player</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token comment">&lt;!-- 你必须在引入 vue-aplayer 之前引入 vue --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/vue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/@moefe/vue-aplayer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueAPlayer<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">defaultCover</span><span class="token operator">:</span> <span class="token string">'https://github.com/u3u.png'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">productionTip</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">audio</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'东西（Cover：林俊呈）'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">artist</span><span class="token operator">:</span> <span class="token string">'纳豆'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/mp3/thing.mp3'</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300'</span><span class="token punctuation">,</span> <span class="token comment">// prettier-ignore</span></span>
<span class="line">          <span class="token literal-property property">lrc</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/lrc/thing.lrc'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单文件组件" tabindex="-1"><a class="header-anchor" href="#单文件组件"><span>单文件组件</span></a></h3>
<p>📝 main.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> APlayer <span class="token keyword">from</span> <span class="token string">'@moefe/vue-aplayer'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>APlayer<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">defaultCover</span><span class="token operator">:</span> <span class="token string">'https://github.com/u3u.png'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">productionTip</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📝 app.vue</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- prettier-ignore --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aplayer</span> <span class="token attr-name">:audio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio<span class="token punctuation">"</span></span> <span class="token attr-name">:lrcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">audio</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'东西（Cover：林俊呈）'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">artist</span><span class="token operator">:</span> <span class="token string">'纳豆'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/mp3/thing.mp3'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300'</span><span class="token punctuation">,</span> <span class="token comment">// prettier-ignore</span></span>
<span class="line">        <span class="token literal-property property">lrc</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/lrc/thing.lrc'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">提示</p>
<p>这种方式是官方推荐的，也是大家熟知的使用最多、上手最快的。但是开发体验不是很友好。<br>
虽然官方提供了 <a href="https://github.com/vuejs/vetur" target="_blank" rel="noopener noreferrer">Vetur</a> 扩展来强化开发体验，但依然无法做到以下几点：</p>
<ol>
<li><s>目前 Prettier 还不支持格式化模版部分<a href="https://github.com/prettier/prettier/pull/4753" target="_blank" rel="noopener noreferrer">（正在进行中）</a></s></li>
<li>模版部分没有强大的智能感知功能</li>
<li>对 TypeScript 不友好</li>
<li>无法批量传递 <code v-pre>props</code></li>
<li>不能使用 HTML 内置标签名</li>
</ol>
</div>
<h3 id="vue-class-component" tabindex="-1"><a class="header-anchor" href="#vue-class-component"><span>vue-class-component <Badge text="推荐" /></span></a></h3>
<p>如果你熟悉 React，或是 JSX 爱好者，那么我推荐你使用这种方式。<br>
你依然可以使用 <code v-pre>@Component</code> 装饰器以传统方式传递组件的属性，但我不推荐这么做。</p>
<h4 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>JavaScript</span></a></h4>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p><code v-pre>@vue/cli</code> 3.0 默认配置了 <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app" target="_blank" rel="noopener noreferrer">JSX 预设</a>，所以你无需做任何额外的配置。<br>
安装 <a href="https://github.com/wonderful-panda/vue-tsx-support#install-and-enable" target="_blank" rel="noopener noreferrer">vue-tsx-support</a>
并配置 <a href="https://code.visualstudio.com/docs/languages/jsconfig" target="_blank" rel="noopener noreferrer">jsconfig.json</a>
和 <a href="https://github.com/skyrpex/vue-jsx-hot-loader" target="_blank" rel="noopener noreferrer">vue-jsx-hot-loader</a> 获得最佳开发体验。</p>
</div>
<p>📝 main.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> APlayer <span class="token keyword">from</span> <span class="token string">'@moefe/vue-aplayer'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>APlayer<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">defaultCover</span><span class="token operator">:</span> <span class="token string">'https://github.com/u3u.png'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">productionTip</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📝 app.js</p>
<div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx" data-title="jsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Component <span class="token keyword">from</span> <span class="token string">'vue-class-component'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> APlayer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@moefe/vue-aplayer'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">@Component</span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span></span>
<span class="line">  audio <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'东西（Cover：林俊呈）'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">artist</span><span class="token operator">:</span> <span class="token string">'纳豆'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/mp3/thing.mp3'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300'</span><span class="token punctuation">,</span> <span class="token comment">// prettier-ignore</span></span>
<span class="line">    <span class="token literal-property property">lrc</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/lrc/thing.lrc'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">APlayer</span></span> <span class="token attr-name">audio</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>audio<span class="token punctuation">}</span></span> <span class="token attr-name">lrcType</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript"><span>TypeScript <Badge text="推荐" /></span></a></h4>
<div class="hint-container caution">
<p class="hint-container-title">注意</p>
<p>TypeScript 用户必须安装 <a href="https://github.com/wonderful-panda/vue-tsx-support#install-and-enable" target="_blank" rel="noopener noreferrer">vue-tsx-support</a>
并配置 <a href="https://www.tslang.cn/docs/handbook/tsconfig-json.html" target="_blank" rel="noopener noreferrer">tsconfig.json</a><br>
同样，你也可以配置 <a href="https://github.com/skyrpex/vue-jsx-hot-loader" target="_blank" rel="noopener noreferrer">vue-jsx-hot-loader</a> 获得最佳开发体验。</p>
</div>
<p>📝 main.ts</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> APlayer <span class="token keyword">from</span> <span class="token string">'@moefe/vue-aplayer'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">use</span><span class="token generic class-name"><span class="token operator">&lt;</span>APlayer<span class="token punctuation">.</span>InstallOptions<span class="token operator">></span></span></span><span class="token punctuation">(</span>APlayer<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  defaultCover<span class="token operator">:</span> <span class="token string">'https://github.com/u3u.png'</span><span class="token punctuation">,</span></span>
<span class="line">  productionTip<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>📝 app.tsx</p>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Comopnent <span class="token keyword">from</span> <span class="token string">'vue-class-component'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> APlayer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@moefe/vue-aplayer'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Comopnent</span></span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">private</span> audio<span class="token operator">:</span> APlayer<span class="token punctuation">.</span>Audio <span class="token operator">|</span> APlayer<span class="token punctuation">.</span>Audio<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'东西（Cover：林俊呈）'</span><span class="token punctuation">,</span></span>
<span class="line">    artist<span class="token operator">:</span> <span class="token string">'纳豆'</span><span class="token punctuation">,</span></span>
<span class="line">    url<span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/mp3/thing.mp3'</span><span class="token punctuation">,</span></span>
<span class="line">    cover<span class="token operator">:</span> <span class="token string">'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300'</span><span class="token punctuation">,</span> <span class="token comment">// prettier-ignore</span></span>
<span class="line">    lrc<span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/lrc/thing.lrc'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">APlayer</span></span> <span class="token attr-name">audio</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>audio<span class="token punctuation">}</span></span> <span class="token attr-name">lrcType</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text"></span>
<span class="line">      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


