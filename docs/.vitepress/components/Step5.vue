<script lang='ts'>
export default {
  name: 'Step5',
}
</script>

<script lang='ts' setup>

</script>

<template>
  <div>
    <p>🧬 设置 loading</p>
    <p>
      复制如下代码粘贴到
      <Underline text="页首 HTM" />。
    </p>
    <div class="language-html !bg-[var(--vt-c-bg-mute)]">
      <pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;" /><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">"</span><span style="color:#C3E88D;">loading</span><span style="color:#89DDFF;">"</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;" /><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">"</span><span style="color:#C3E88D;">loader-inner</span><span style="color:#89DDFF;">"</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line" /></code></pre>
    </div>
    <p>
      复制如下代码粘贴到
      <Underline text="页面定制 CSS" />。
    </p>
    <div class="language-css !bg-[var(--vt-c-bg-mute)]">
      <pre><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">loading</span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">fixed</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">9999</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:#</span><span style="color:#A6ACCD;">f4f5f5</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">none</span><span style="color:#89DDFF;">;}.</span><span style="color:#FFCB6B;">loader-inner</span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">will-change</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">transform</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">40px</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">40px</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">absolute</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">-20px</span><span style="color:#A6ACCD;" /><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;" /><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;" /><span style="color:#F78C6C;">-20px</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:#</span><span style="color:#A6ACCD;">3742fa</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">animation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">scaleout </span><span style="color:#F78C6C;">0.6s</span><span style="color:#A6ACCD;"> infinite ease-in-out forwards</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">text-indent</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">-99999px</span><span style="color:#89DDFF;">;</span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">999991</span><span style="color:#89DDFF;">;}</span><span style="color:#89DDFF;font-style:italic;">@keyframes</span><span
                   style="color:#A6ACCD;"
                 > scaleout</span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">0%</span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">scale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;}</span><span style="color:#FFCB6B;">40%</span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;}</span><span style="color:#FFCB6B;">100%</span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">scale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;}}</span></span>
<span class="line" /></code></pre>
    </div>
    <div class="tip custom-block">
      <p class="custom-block-title">
        使用自定义 loading
      </p>
      <p>
        你可以自己动手实现一个 loading，只需要保证 loading 的最外层盒子的选择器为
        <code>#loading</code>。
      </p>
    </div>
  </div>
</template>
