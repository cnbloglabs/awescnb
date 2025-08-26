# ✨ 参考配置

::: tip 提示

你可以转到 [配置选项](/cnblog/usage-options) 查看所有配置。

:::

页脚 HTML 代码：

```html
<script src="https://guangzan.gitee.io/awescnb/index.js"></script>
<script>
  const config = {}

  config.theme = {
      name: 'geek',
      avatar: 'https://pic.cnblogs.com/avatar/1501373/20200819130243.png',
      headerBackground: 'https://images.cnblogs.com/cnblogs_com/guangzan/1894231/o_201205070714banner1.jpg',
  }
  config.signature = {
      enable: true,
      contents: [
        "This theme is built with <b style='color:#ff6b81'>awescnb</b>.",
        '<b>console.log(🎉);</b>',
      ],
  }

  $.awesCnb(config)
</script>
```
