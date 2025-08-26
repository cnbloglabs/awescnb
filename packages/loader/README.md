# acnb-loader

**English** | [中文](./README.zh-CN.md)

🚀 Loading theme js file for awescnb.

Loader receives a configuration object, mounts the object to window, and then loads the corresponding theme file according to the `configurationObject.theme.name` in the incoming object.

## Usage

Load skins via theme name.

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

Load skins via theme URL.

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
