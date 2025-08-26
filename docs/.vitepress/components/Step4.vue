<script lang='ts'>
export default {
  name: 'Step4',
}
</script>

<script lang='ts' setup>

</script>

<template>
  <div>
    <p>🔮 设置渲染引擎</p>
    <div class="tip custom-block !mb-4">
      <p class="custom-block-title">
        提示
      </p>
      <p>
        截止现在，我们的皮肤仍然使用自定义代码块样式，主要是因为博客园还没适配代码块深色/浅色主题。所以需要对博客园的
        <Underline text="代码高亮" />&nbsp;进行设置以更好地适配皮肤。
      </p>
    </div>
    <ol>
      <li>
        设置渲染引擎为
        <Underline text="highlight.js" />
      </li>
      <li>
        取消勾选显示行号
        <span class="text-sm text-[var(--vt-c-text-2)]">(不会影响代码行号功能)</span>
      </li>
      <li>
        主题样式设为
        <Underline text="cnblog" />
        <span class="text-sm text-[var(--vt-c-text-2)]">
          (皮肤提供最受社区欢迎的
          <Underline text="atom" />&nbsp;等系列代码块主题)
        </span>
      </li>
    </ol>
    <img class="my-2 rounded" src="/guide/guide_highlight.png" alt="set default theme.">
  </div>
</template>
