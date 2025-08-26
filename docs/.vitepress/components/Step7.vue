<script lang='ts'>
export default {
  name: 'Step7',
}
</script>

<script lang='ts' setup>

</script>

<template>
  <div>
    <p>🎨 安装皮肤</p>
    <p>
      复制如下代码粘贴到
      <Underline text="页脚 HTML 代码" />。
    </p>
    <div class="language-html !bg-[var(--vt-c-bg-mute)]">
      <pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;" /><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">"</span><span
                   style="color:#C3E88D;"
                 >https://guangzan.gitee.io/awescnb/index.js</span><span
                   style="color:#89DDFF;"
                 >"</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;" /><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;" /><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">  $</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">awesCnb</span><span style="color:#A6ACCD;">(config)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line" /></code></pre>
    </div>
    <p>
      关于配置，我们将在
      <a href="/cnblog/usage-options.html">配置选项</a> 中进行介绍。
    </p>
  </div>
</template>
