<template><div><h1 id="事件绑定" tabindex="-1"><a class="header-anchor" href="#事件绑定"><span>事件绑定</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>跟组件和 prop 不同，事件名不会被用作一个 JavaScript 变量名或属性名，所以就没有理由使用 camelCase 或 PascalCase 了。
并且 v-on 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以在 DOM 模板中请始终使用全小写监听事件。</p>
</div>
<h2 id="原生-media-事件" tabindex="-1"><a class="header-anchor" href="#原生-media-事件"><span>原生 Media 事件</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">事件名称</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">onAbort</td>
<td style="text-align:left">在退出时触发</td>
</tr>
<tr>
<td style="text-align:left">onCanplay</td>
<td style="text-align:left">当文件就绪可以开始播放时触发（缓冲已足够开始时）</td>
</tr>
<tr>
<td style="text-align:left">onCanplaythrough</td>
<td style="text-align:left">当媒介能够无需因缓冲而停止即可播放至结尾时触发</td>
</tr>
<tr>
<td style="text-align:left">onDurationchange</td>
<td style="text-align:left">当媒介长度改变时触发</td>
</tr>
<tr>
<td style="text-align:left">onEmptied</td>
<td style="text-align:left">当发生故障并且文件突然不可用时触发（比如连接意外断开时）</td>
</tr>
<tr>
<td style="text-align:left">onEnded</td>
<td style="text-align:left">当媒介已到达结尾时触发（可发送类似“感谢观看”之类的消息）</td>
</tr>
<tr>
<td style="text-align:left">onError</td>
<td style="text-align:left">当在文件加载期间发生错误时触发</td>
</tr>
<tr>
<td style="text-align:left">onLoadeddata</td>
<td style="text-align:left">当媒介数据已加载时触发</td>
</tr>
<tr>
<td style="text-align:left">onLoadedmetadata</td>
<td style="text-align:left">当元数据（比如分辨率和时长）被加载时触发</td>
</tr>
<tr>
<td style="text-align:left">onLoadstart</td>
<td style="text-align:left">在文件开始加载且未实际加载任何数据前触发</td>
</tr>
<tr>
<td style="text-align:left">onPause</td>
<td style="text-align:left">当媒介被用户或程序暂停时触发</td>
</tr>
<tr>
<td style="text-align:left">onPlay</td>
<td style="text-align:left">当媒介已就绪可以开始播放时触发</td>
</tr>
<tr>
<td style="text-align:left">onPlaying</td>
<td style="text-align:left">当媒介已开始播放时触发</td>
</tr>
<tr>
<td style="text-align:left">onProgress</td>
<td style="text-align:left">当浏览器正在获取媒介数据时触发</td>
</tr>
<tr>
<td style="text-align:left">onRatechange</td>
<td style="text-align:left">每当回放速率改变时触发（比如当用户切换到慢动作或快进模式）</td>
</tr>
<tr>
<td style="text-align:left">onReadystatechange</td>
<td style="text-align:left">每当就绪状态改变时触发（就绪状态监测媒介数据的状态）</td>
</tr>
<tr>
<td style="text-align:left">onSeeked</td>
<td style="text-align:left">当 seeking 属性设置为 false（指示定位已结束）时触发</td>
</tr>
<tr>
<td style="text-align:left">onSeeking</td>
<td style="text-align:left">当 seeking 属性设置为 true（指示定位是活动的）时触发</td>
</tr>
<tr>
<td style="text-align:left">onStalled</td>
<td style="text-align:left">在浏览器不论何种原因未能取回媒介数据时触发</td>
</tr>
<tr>
<td style="text-align:left">onSuspend</td>
<td style="text-align:left">在媒介数据完全加载之前不论何种原因终止取回媒介数据时触发</td>
</tr>
<tr>
<td style="text-align:left">onTimeupdate</td>
<td style="text-align:left">当播放位置改变时触发</td>
</tr>
<tr>
<td style="text-align:left">onVolumechange</td>
<td style="text-align:left">每当音量改变时（包括将音量设置为静音）时触发</td>
</tr>
<tr>
<td style="text-align:left">onWaiting</td>
<td style="text-align:left">当媒介已停止播放但打算继续播放时触发</td>
</tr>
</tbody>
</table>
<p>📝 example.vue</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aplayer</span></span>
<span class="line">    <span class="token attr-name">:audio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@abort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@canplay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@canplaythrough</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@durationchange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@emptied</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@ended</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@loadeddata</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@loadedmetadata</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@loadstart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@pause</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@play</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@playing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@ratechange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@readystatechange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@seeked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@seeking</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@stalled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@suspend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@timeupdate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@volumechange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@waiting</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token punctuation">/></span></span></span>
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
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'东西（Cover：林俊呈）'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">artist</span><span class="token operator">:</span> <span class="token string">'纳豆'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/mp3/thing.mp3'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300'</span><span class="token punctuation">,</span> <span class="token comment">// prettier-ignore</span></span>
<span class="line">        <span class="token literal-property property">lrc</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/lrc/thing.lrc'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">handleEvent</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="播放器事件" tabindex="-1"><a class="header-anchor" href="#播放器事件"><span>播放器事件</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">事件名称</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">onListShow</td>
<td style="text-align:left">播放列表显示时触发</td>
</tr>
<tr>
<td style="text-align:left">onListHide</td>
<td style="text-align:left">播放列表隐藏时触发</td>
</tr>
<tr>
<td style="text-align:left">onListAdd</td>
<td style="text-align:left">播放列表新增音频时触发</td>
</tr>
<tr>
<td style="text-align:left">onListRemove</td>
<td style="text-align:left">播放列表删除音频时触发</td>
</tr>
<tr>
<td style="text-align:left">onListClear</td>
<td style="text-align:left">播放列表清空时触发</td>
</tr>
<tr>
<td style="text-align:left">onListSwitch</td>
<td style="text-align:left">切换播放的音频时触发</td>
</tr>
<tr>
<td style="text-align:left">onNoticeShow</td>
<td style="text-align:left">通知消息显示时触发</td>
</tr>
<tr>
<td style="text-align:left">onNoticeHide</td>
<td style="text-align:left">通知消息隐藏时触发</td>
</tr>
<tr>
<td style="text-align:left">onLrcShow</td>
<td style="text-align:left">歌词面板显示时触发</td>
</tr>
<tr>
<td style="text-align:left">onLrcHide</td>
<td style="text-align:left">歌词面板隐藏时触发</td>
</tr>
<tr>
<td style="text-align:left">onSkipBack</td>
<td style="text-align:left">on trigger play of previous song</td>
</tr>
<tr>
<td style="text-align:left">onSkipForward</td>
<td style="text-align:left">on trigger play of next song</td>
</tr>
</tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>由于某些选项会通过用户的操作直接修改，如果你传递了它们，会导致双向绑定的值不一致。<br>
如果你想同步它们，可以通过监下面的事件来操作。你也可以使用
<a href="https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-%E4%BF%AE%E9%A5%B0%E7%AC%A6" target="_blank" rel="noopener noreferrer">.sync 修饰符</a> 来同步。</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:left">事件名称</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">update:volume</td>
<td style="text-align:left">修改音量时触发，用于同步 <RouteLink to="/guide/options.html#volume"><code v-pre>volume</code></RouteLink> 选项</td>
</tr>
<tr>
<td style="text-align:left">update:mini</td>
<td style="text-align:left">修改迷你模式时触发，用于同步 <RouteLink to="/guide/options.html#mini"><code v-pre>mini</code></RouteLink> 选项</td>
</tr>
<tr>
<td style="text-align:left">update:loop</td>
<td style="text-align:left">修改循环模式时触发，用于同步 <RouteLink to="/guide/options.html#loop"><code v-pre>loop</code></RouteLink> 选项</td>
</tr>
<tr>
<td style="text-align:left">update:order</td>
<td style="text-align:left">修改顺序模式时触发，用于同步 <RouteLink to="/guide/options.html#order"><code v-pre>order</code></RouteLink> 选项</td>
</tr>
<tr>
<td style="text-align:left">update:listFolded</td>
<td style="text-align:left">播放列表展开/隐藏时触发，用于同步 <RouteLink to="/guide/options.html#listfolded"><code v-pre>listFolded</code></RouteLink> 选项</td>
</tr>
</tbody>
</table>
<p>📝 example.vue</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aplayer</span></span>
<span class="line">    <span class="token attr-name">:audio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:volume.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>volume<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:mini.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:loop.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loop<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:order.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>order<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:listFolded.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>listFolded<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@listShow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@listHide</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@listAdd</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@listRemove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@listClear</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@listSwitch</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@noticeShow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@noticeHide</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@lrcShow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@lrcHide</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@skipBack</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">@skipForward</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token punctuation">/></span></span></span>
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
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'东西（Cover：林俊呈）'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">artist</span><span class="token operator">:</span> <span class="token string">'纳豆'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/mp3/thing.mp3'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">cover</span><span class="token operator">:</span> <span class="token string">'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300'</span><span class="token punctuation">,</span> <span class="token comment">// prettier-ignore</span></span>
<span class="line">        <span class="token literal-property property">lrc</span><span class="token operator">:</span> <span class="token string">'https://cdn.moefe.org/music/lrc/thing.lrc'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">volume</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">mini</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">loop</span><span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token string">'list'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">listFolded</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">handleEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Meow~'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


