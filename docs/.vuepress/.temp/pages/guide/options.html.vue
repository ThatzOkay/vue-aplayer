<template><div><h1 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>HTML 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。<br>
这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名。如果你使用字符串模板，那么这个限制就不存在了。</p>
</div>
<h2 id="fixed" tabindex="-1"><a class="header-anchor" href="#fixed"><span>fixed <Badge text="可选" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>boolean?</code></li>
<li><strong>默认值</strong>：<code v-pre>false</code></li>
<li><strong>描述</strong>：是否开启吸底模式</li>
</ul>
<h2 id="mini" tabindex="-1"><a class="header-anchor" href="#mini"><span>mini <Badge text="可选" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果开启吸底模式，该选项可以控制播放器展开或收起</p>
</div>
<ul>
<li><strong>类型</strong>：<code v-pre>boolean?</code></li>
<li><strong>默认值</strong>：<code v-pre>false</code></li>
<li><strong>描述</strong>：是否开启迷你模式</li>
</ul>
<h2 id="autoplay" tabindex="-1"><a class="header-anchor" href="#autoplay"><span>autoplay <Badge text="可选" /></span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>由于大多数移动端浏览器禁止了音频自动播放，所以该选项在移动端无效</p>
</div>
<ul>
<li><strong>类型</strong>：<code v-pre>boolean?</code></li>
<li><strong>默认值</strong>：<code v-pre>false</code></li>
<li><strong>描述</strong>：是否开启自动播放</li>
</ul>
<h2 id="theme" tabindex="-1"><a class="header-anchor" href="#theme"><span>theme <Badge text="可选" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>你可以选择引入 <a href="https://cdn.jsdelivr.net/npm/colorthief@2.0.2/dist/" target="_blank" rel="noopener noreferrer">color-thief</a> 让播放器根据封面图片自动获取主题颜色</p>
</div>
<ul>
<li><strong>类型</strong>：<code v-pre>string?</code></li>
<li><strong>默认值</strong>：<code v-pre>#b7daff</code></li>
<li><strong>描述</strong>：设置播放器默认主题颜色</li>
</ul>
<h2 id="loop" tabindex="-1"><a class="header-anchor" href="#loop"><span>loop <Badge text="可选" /></span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>由于播放器会保存用户的使用习惯，所以播放器首次初始化之后该选项将失效</p>
</div>
<ul>
<li><strong>类型</strong>：<code v-pre>APlayer.LoopMode?</code></li>
<li><strong>默认值</strong>：<code v-pre>all</code></li>
<li><strong>描述</strong>：设置播放器的初始循环模式</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">namespace</span> APlayer <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">LoopMode</span> <span class="token operator">=</span> <span class="token string">'all'</span> <span class="token operator">|</span> <span class="token string">'one'</span> <span class="token operator">|</span> <span class="token string">'none'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="order" tabindex="-1"><a class="header-anchor" href="#order"><span>order <Badge text="可选" /></span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>由于播放器会保存用户的使用习惯，所以播放器首次初始化之后该选项将失效</p>
</div>
<ul>
<li><strong>类型</strong>：<code v-pre>APlayer.OrderMode?</code></li>
<li><strong>默认值</strong>：<code v-pre>list</code></li>
<li><strong>描述</strong>：设置播放器的初始顺序模式</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">namespace</span> APlayer <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">OrderMode</span> <span class="token operator">=</span> <span class="token string">'list'</span> <span class="token operator">|</span> <span class="token string">'random'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="preload" tabindex="-1"><a class="header-anchor" href="#preload"><span>preload <Badge text="可选" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>APlayer.Preload?</code></li>
<li><strong>默认值</strong>：<code v-pre>auto</code></li>
<li><strong>描述</strong>：设置音频的预加载模式</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">namespace</span> APlayer <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Preload</span> <span class="token operator">=</span> <span class="token string">'none'</span> <span class="token operator">|</span> <span class="token string">'metadata'</span> <span class="token operator">|</span> <span class="token string">'auto'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="volume" tabindex="-1"><a class="header-anchor" href="#volume"><span>volume <Badge text="可选" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>number?</code></li>
<li><strong>默认值</strong>：<code v-pre>0.7</code></li>
<li><strong>描述</strong>：设置播放器的音量</li>
</ul>
<h2 id="audio" tabindex="-1"><a class="header-anchor" href="#audio"><span>audio <Badge type="error" text="必填" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>APlayer.Audio | Array&lt;APlayer.Audio&gt;</code></li>
<li><strong>默认值</strong>：<code v-pre>undefined</code></li>
<li><strong>描述</strong>：设置要播放的音频对象或播放列表</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">namespace</span> APlayer <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">AudioType</span> <span class="token operator">=</span> <span class="token string">'auto'</span> <span class="token operator">|</span> <span class="token string">'hls'</span> <span class="token operator">|</span> <span class="token string">'normal'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Audio</span> <span class="token punctuation">{</span></span>
<span class="line">    id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 音频 id</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> VNode<span class="token punctuation">;</span> <span class="token comment">// 音频名称</span></span>
<span class="line">    artist<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> VNode<span class="token punctuation">;</span> <span class="token comment">// 音频艺术家</span></span>
<span class="line">    url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 音频播放地址</span></span>
<span class="line">    cover<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 音频封面</span></span>
<span class="line">    lrc<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// lrc 歌词</span></span>
<span class="line">    theme<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 单曲主题色，它将覆盖全局的默认主题色</span></span>
<span class="line">    type<span class="token operator">?</span><span class="token operator">:</span> AudioType<span class="token punctuation">;</span> <span class="token comment">// 指定音频的类型</span></span>
<span class="line">    speed<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 单曲播放速度</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><aplayer-vnode /><p>这里与 <a href="https://github.com/MoePlayer/APlayer" target="_blank" rel="noopener noreferrer">APlayer</a> 不同的是新增了 <code v-pre>id</code> 和 <code v-pre>speed</code> 属性。<br>
<code v-pre>id</code> 默认情况下由播放器自动生成，你也可以手动传一个 <code v-pre>id</code> 来覆盖它。<br>
<code v-pre>speed</code> 属性可以指定该音频的播放速度。</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p><code v-pre>id</code> 是用来区分音频的唯一标识，不允许重复，如果出现重复可能会导致播放器出现异常。<br>
默认情况下 <code v-pre>id</code> 是根据播放列表的索引生成，当播放列表发生变化时 (新增/删除) 会重新生成。<br>
当你从播放列表中删除音频时，由于播放列表发生了变化，所以会导致当前音频的 <code v-pre>id</code> 与删除后的播放列表不匹配。
出现这种情况时，会降级根据 <code v-pre>url</code> 更新当前音频的信息，如果播放列表中每一项的 <code v-pre>url</code> 都是唯一的，那么不会有问题。
如果有重复的 <code v-pre>url</code>，你必须设置音频的 <code v-pre>id</code> 属性，以确保每一项都是唯一的，否则播放器可能出现异常。</p>
</div>
<h2 id="customaudiotype" tabindex="-1"><a class="header-anchor" href="#customaudiotype"><span>customAudioType <Badge text="可选" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>{ [index: string]: Function }?</code></li>
<li><strong>默认值</strong>：<code v-pre>undefined</code></li>
<li><strong>描述</strong>：自定义音频类型</li>
</ul>
<p>📝 <a href="/guide/hls.html" target="_blank" rel="noopener noreferrer">example.vue</a></p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aplayer</span> <span class="token attr-name">:audio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio<span class="token punctuation">"</span></span> <span class="token attr-name">:customAudioType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customAudioType<span class="token punctuation">"</span></span> <span class="token attr-name">:lrcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
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
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Let It Go.m3u8'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">artist</span><span class="token operator">:</span> <span class="token string">'Idina Menzel'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/hls/frozen.m3u8'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://p1.music.126.net/n72JJkPg2-ENxhB-DsZ2AA==/109951163115400390.jpg?param=300y300'</span><span class="token punctuation">,</span> <span class="token comment">// prettier-ignore</span></span>
<span class="line">        <span class="token literal-property property">lrc</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/lrc/frozen.lrc'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'customHls'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">customAudioType</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">customHls</span><span class="token punctuation">(</span><span class="token parameter">audioElement<span class="token punctuation">,</span> audio<span class="token punctuation">,</span> player</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>Hls<span class="token punctuation">.</span><span class="token function">isSupported</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> hls <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hls</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            hls<span class="token punctuation">.</span><span class="token function">loadSource</span><span class="token punctuation">(</span>audio<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            hls<span class="token punctuation">.</span><span class="token function">attachMedia</span><span class="token punctuation">(</span>audioElement<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span></span>
<span class="line">            audioElement<span class="token punctuation">.</span><span class="token function">canPlayType</span><span class="token punctuation">(</span><span class="token string">'application/x-mpegURL'</span><span class="token punctuation">)</span> <span class="token operator">||</span></span>
<span class="line">            audioElement<span class="token punctuation">.</span><span class="token function">canPlayType</span><span class="token punctuation">(</span><span class="token string">'application/vnd.apple.mpegURL'</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            audioElement<span class="token punctuation">.</span>src <span class="token operator">=</span> audio<span class="token punctuation">.</span>url<span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            player<span class="token punctuation">.</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">'Error: HLS is not supported.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mutex" tabindex="-1"><a class="header-anchor" href="#mutex"><span>mutex <Badge text="可选" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>boolean?</code></li>
<li><strong>默认值</strong>：<code v-pre>true</code></li>
<li><strong>描述</strong>：是否开启互斥模式</li>
</ul>
<p>如果开启则会阻止多个播放器同时播放，当前播放器播放时暂停其他播放器</p>
<h2 id="lrctype" tabindex="-1"><a class="header-anchor" href="#lrctype"><span>lrcType <Badge text="可选" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>APlayer.LrcType?</code></li>
<li><strong>默认值</strong>：<code v-pre>0</code></li>
<li><strong>描述</strong>：设置 lrc 歌词解析模式</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">namespace</span> APlayer <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">enum</span> LrcType <span class="token punctuation">{</span></span>
<span class="line">    file <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// 表示 audio.lrc 的值是 lrc 文件地址，将通过 `fetch` 获取 lrc 歌词文本</span></span>
<span class="line">    html <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// 不支持 html 用法</span></span>
<span class="line">    <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 表示 audio.lrc 的值是 lrc 格式的字符串，将直接通过它解析歌词</span></span>
<span class="line">    disabled <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 禁用 lrc 歌词</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="listfolded" tabindex="-1"><a class="header-anchor" href="#listfolded"><span>listFolded <Badge text="可选" /></span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>由于播放器会保存用户的使用习惯，所以播放器首次初始化之后该选项将失效</p>
</div>
<ul>
<li><strong>类型</strong>：<code v-pre>boolean?</code></li>
<li><strong>默认值</strong>：<code v-pre>false</code></li>
<li><strong>描述</strong>：是否折叠播放列表</li>
</ul>
<h2 id="listmaxheight" tabindex="-1"><a class="header-anchor" href="#listmaxheight"><span>listMaxHeight <Badge text="可选" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>number?</code></li>
<li><strong>默认值</strong>：<code v-pre>250</code></li>
<li><strong>描述</strong>：设置播放列表最大高度，单位为像素</li>
</ul>
<h2 id="storagename" tabindex="-1"><a class="header-anchor" href="#storagename"><span>storageName <Badge text="可选" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>string?</code></li>
<li><strong>默认值</strong>：<code v-pre>aplayer-setting</code></li>
<li><strong>描述</strong>：设置存储播放器设置的 <code v-pre>localStorage</code> key</li>
</ul>
<p>这里与 <a href="https://github.com/MoePlayer/APlayer" target="_blank" rel="noopener noreferrer">APlayer</a> 有所不同，在 <code v-pre>localStorage</code> 中保存的是对象数组<br>
不同的实例之间互不影响，一般情况下你不需要修改此项。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">namespace</span> APlayer <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">LoopMode</span> <span class="token operator">=</span> <span class="token string">'all'</span> <span class="token operator">|</span> <span class="token string">'one'</span> <span class="token operator">|</span> <span class="token string">'none'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">OrderMode</span> <span class="token operator">=</span> <span class="token string">'list'</span> <span class="token operator">|</span> <span class="token string">'random'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Settings</span> <span class="token punctuation">{</span></span>
<span class="line">    currentTime<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 当前音频的播放时间</span></span>
<span class="line">    duration<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 当前音频的长度</span></span>
<span class="line">    paused<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 当前播放器是否暂停</span></span>
<span class="line">    mini<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否是 mini 模式</span></span>
<span class="line">    lrc<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 当前歌词</span></span>
<span class="line">    list<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 当前列表是否展开</span></span>
<span class="line">    volume<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 当前播放器音量</span></span>
<span class="line">    loop<span class="token operator">:</span> LoopMode<span class="token punctuation">;</span> <span class="token comment">// 当前循环模式</span></span>
<span class="line">    order<span class="token operator">:</span> OrderMode<span class="token punctuation">;</span> <span class="token comment">// 当前顺序模式</span></span>
<span class="line">    music<span class="token operator">:</span> Audio <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 当前播放的音频对象</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 你可以使用实例的 `currentSettings` 属性获取当前实例的播放器设置</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span>currentSettings<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


