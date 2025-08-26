# acnb-loader

**中文** | [English](./README.md)

🚀 awescnb 博客园皮肤加载器。

Loader 接收一个配置对象，将该对象挂载到窗口，然后根据传入的配置对象中的 `configurationObject.theme` 加载相应的皮肤文件。

## 使用

通过皮肤名称加载皮肤。

```html
<script src="https://blog-static.cnblogs.com/files/guangzan/loader.min.js"></script>
<script>
  const opts = {
    theme: {
      name: "geek",
    },
    // 其他配置
  };
  $.awesCnb(opts);
</script>
```

通过皮肤 URL 加载皮肤。

```html
<script src="https://blog-static.cnblogs.com/files/guangzan/loader.min.js"></script>
<script>
  const opts = {
    theme: {
      name: "https://guangzan.gitee.io/awescnb/reacg.js",
    },
    // 其他配置
  };
  $.awesCnb(opts);
</script>
```
