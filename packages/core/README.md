# @tona/core

API for creating cnblog theme.

## Install

```shell
npm i @tona/core
```

## API

### createTheme

Returns a theme instance that provides a theme context.

```js
import { createTheme } from '@tona/core'

const theme = createTheme()
```

### defineOptions

Returns a generic configuration object.

```js
import { defineOptions } from '@tona/core'

const getBackgroundOptions = defineOptions('bodyBackground', {
  enable: false,
  value: '',
  opacity: 0.85,
  repeat: false,
})
```

Cnblog theme users can add the following configuration:

```js
const opts = {
  bodyBackground: {
    enable: false,
    value: '',
    opacity: 0.85,
    repeat: false,
  },
}
```

Using configuration aliases:

```javascript
import { defineOptions } from '@tona/core'

const getBackgroundOptions = defineOptions(['bodyBackground', 'background'], {
  enable: false,
  value: '',
  opacity: 0.85,
  repeat: false,
})
```

## Plugin System

```js
// plugin.js
import { defineOptions } from '@tona/core'

export function backgroundPlugin(theme, devOptions, pluginOptions) {
  const getBackgroundOptions = defineOptions('bodyBackground', {
    enable: false,
    value: '',
    opacity: 0.85,
    repeat: false,
  })

  const { enable, value, opacity, repeat } = getBackgroundOptions(devOptions)

  if (!enable)
    return

  const { opacitySelector } = Object.assign(
    {},
    {
      opacitySelector: '#main,#navigator',
    },
    pluginOptions
  )

  setBackground(value, repeat)
  setOpacity(opacity, opacitySelector)
}
```

```js
// theme/index.js
import { createTheme } from '@tona/core'
import { backgroundPlugin } from './plugin'

const theme = createTheme()

theme.use(
  backgroundPlugin,
  {
    // Set the default configuration of the theme
    enable: true,
    value: '#ffb3cc',
    opacity: 0.85,
  },
  {
    // Set the default configuration of the plugin
    opacitySelector: '#main',
  }
)
```
