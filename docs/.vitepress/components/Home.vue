<script setup lang="ts">
</script>

<template>
  <div class="home-container">
    <div class="home" flex flex-col items-center>
      <div flex flex-col items-center p="t-10 md:t-20 b-40">
        <img src="/logo.svg" h="40 md:60" alt="Vitest logo" width="240" height="240">
        <h1 text-6xl mb-8>
          Cnblog Labs
        </h1>
        <p text="1.2em center" leading-7 op60 font-normal>
          使用现代前端工具构建博客园皮肤
        </p>
        <p text="1.2em center" leading-7 op60 font-normal>
          <span>powered by&nbsp;</span>
          <span
            font="bold"
            rel="noopener noreferrer"
            href="https://vitejs.dev"
            target="_blank"
          >Vite ⚡️</span>
        </p>
        <div text-center flex flex-col sm:flex-row flex-wrap items-center gap-4 mt-5 children:my0>
          <a
            class="btn bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 saturate-80"
            href="/cnblog/usage-install.html"
            rel="noopener noreferrer"
          >
            <span class="i-carbon:color-palette inline-block text-lg" />
            <span ma>安装皮肤</span>
          </a>
          <a
            class="btn bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 saturate-80"
            href="/dev/environment.html"
            rel="noopener noreferrer"
          >
            <span class="i-carbon:code inline-block text-lg" />
            <span ma>构建皮肤</span>
          </a>
        </div>
      </div>
      <h2 id="the-team" op50 font-normal pt-5 pb-2>
        Contributors
      </h2>
      <p op80 text-lg max-w-150 text-center leading-7>
        <Contributors />
      </p>
      <div mb-30 />
    </div>
  </div>
</template>
