<template><div><h1 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h1>
<h2 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>version <Badge type="warning" text="静态" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>string</code></li>
<li><strong>描述</strong>：只读属性，返回 APlayer 的版本号</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> APlayer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@moefe/vue-aplayer'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>APlayer<span class="token punctuation">.</span>version<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="media" tabindex="-1"><a class="header-anchor" href="#media"><span>media <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>APlayer.Media</code></li>
<li><strong>描述</strong>：只读的原生 <a href="https://www.w3schools.com/tags/ref_av_dom.asp" target="_blank" rel="noopener noreferrer"><code v-pre>Media</code></a> 对象</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> media <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>media<span class="token punctuation">.</span>currentTime<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取音频当前播放时间</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>media<span class="token punctuation">.</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取音频总时间</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>media<span class="token punctuation">.</span>paused<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取音频是否暂停</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="currentmusic" tabindex="-1"><a class="header-anchor" href="#currentmusic"><span>currentMusic <Badge text="实例" /></span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">警告</p>
<p>如果你想切换到播放列表中的其他音频请使用 <a href="#switch"><code v-pre>switch</code></a> 方法，而不要直接设置它</p>
</div>
<ul>
<li><strong>类型</strong>：<code v-pre>APlayer.Audio</code></li>
<li><strong>描述</strong>：获取当前正在播放的音频</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span>currentMusic<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="play" tabindex="-1"><a class="header-anchor" href="#play"><span>play() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>返回值</strong>：<code v-pre>Promise&lt;void&gt;</code></li>
<li><strong>描述</strong>：播放音频</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="pause" tabindex="-1"><a class="header-anchor" href="#pause"><span>pause() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>返回值</strong>：<code v-pre>void</code></li>
<li><strong>描述</strong>：暂停音频</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="toggle" tabindex="-1"><a class="header-anchor" href="#toggle"><span>toggle() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>返回值</strong>：<code v-pre>void</code></li>
<li><strong>描述</strong>：切换播放和暂停</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="seek" tabindex="-1"><a class="header-anchor" href="#seek"><span>seek() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>参数</strong>：
<ul>
<li><code v-pre>time</code>
<ul>
<li><strong>类型</strong>：<code v-pre>number</code></li>
<li><strong>描述</strong>：时间（秒）</li>
</ul>
</li>
</ul>
</li>
<li><strong>返回值</strong>：<code v-pre>void</code></li>
<li><strong>描述</strong>：跳到特定时间</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">seek</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>switch() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>参数</strong>：
<ul>
<li><code v-pre>audio</code>
<ul>
<li><strong>类型</strong>：<code v-pre>number</code> | <code v-pre>string</code></li>
<li><strong>描述</strong>：音频索引或音频的部分名称</li>
</ul>
</li>
</ul>
</li>
<li><strong>返回值</strong>：<code v-pre>void</code></li>
<li><strong>描述</strong>：切换到播放列表中的其他音频</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">switch</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 切换到播放列表中的第二首歌</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">switch</span><span class="token punctuation">(</span><span class="token string">'东西'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 切换到播放列表中歌曲名包含“东西”的第一首歌</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="skipback" tabindex="-1"><a class="header-anchor" href="#skipback"><span>skipBack() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>返回值</strong>：<code v-pre>void</code></li>
<li><strong>描述</strong>：切换到上一首音频</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">skipBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="skipforward" tabindex="-1"><a class="header-anchor" href="#skipforward"><span>skipForward() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>返回值</strong>：<code v-pre>void</code></li>
<li><strong>描述</strong>：切换到下一首音频</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">skipForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="shownotice" tabindex="-1"><a class="header-anchor" href="#shownotice"><span>showNotice() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>参数</strong>：
<ul>
<li><code v-pre>text</code>
<ul>
<li><strong>类型</strong>：<code v-pre>string</code></li>
<li><strong>描述</strong>：通知文本</li>
</ul>
</li>
<li><code v-pre>time</code>
<ul>
<li><strong>类型</strong>：<code v-pre>number?</code></li>
<li><strong>默认值</strong>：2000</li>
<li><strong>描述</strong>：显示时间（毫秒）</li>
</ul>
</li>
<li><code v-pre>opacity</code>
<ul>
<li><strong>类型</strong>：<code v-pre>number?</code></li>
<li><strong>默认值</strong>：0.8</li>
<li><strong>描述</strong>：通知透明度 (0 ~ 1)</li>
</ul>
</li>
</ul>
</li>
<li><strong>返回值</strong>：<code v-pre>Promise&lt;void&gt;</code></li>
<li><strong>描述</strong>：显示通知，设置时间为 0 可以取消通知自动隐藏</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">showNotice</span><span class="token punctuation">(</span><span class="token string">'喵喵喵'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="showlrc" tabindex="-1"><a class="header-anchor" href="#showlrc"><span>showLrc() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>返回值</strong>：<code v-pre>void</code></li>
<li><strong>描述</strong>：显示歌词</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">showLrc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="hidelrc" tabindex="-1"><a class="header-anchor" href="#hidelrc"><span>hideLrc() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>返回值</strong>：<code v-pre>void</code></li>
<li><strong>描述</strong>：隐藏歌词</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">hideLrc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="togglelrc" tabindex="-1"><a class="header-anchor" href="#togglelrc"><span>toggleLrc() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>返回值</strong>：<code v-pre>void</code></li>
<li><strong>描述</strong>：显示/隐藏歌词</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">toggleLrc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="showlist" tabindex="-1"><a class="header-anchor" href="#showlist"><span>showList() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>返回值</strong>：<code v-pre>void</code></li>
<li><strong>描述</strong>：显示播放列表</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">showList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="hidelist" tabindex="-1"><a class="header-anchor" href="#hidelist"><span>hideList() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>返回值</strong>：<code v-pre>void</code></li>
<li><strong>描述</strong>：隐藏播放列表</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">hideList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="togglelist" tabindex="-1"><a class="header-anchor" href="#togglelist"><span>toggleList() <Badge text="实例" /></span></a></h2>
<ul>
<li><strong>类型</strong>：<code v-pre>Function</code></li>
<li><strong>返回值</strong>：<code v-pre>void</code></li>
<li><strong>描述</strong>：显示/隐藏播放列表</li>
<li><strong>用法</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>aplayer<span class="token punctuation">.</span><span class="token function">toggleList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


