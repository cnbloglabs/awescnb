# plugins

Plugins for Tona theme.

## Usage

```bash
npm i @tona/core
```

```bash
npm i @tona/plugins
```

```js
import { createTheme } from '@tona/core'
import { background } from '@tona/plugins'

createTheme().use(background)
```

Configure the default behavior of the plugin in your Theme

```js
import { createTheme } from '@tona/core'
import { background } from '@tona/plugins'

createTheme().use(background, {
  // The default configuration of the Theme
  enable: true,
})
```

Configure background plugin

```js
import { createTheme } from '@tona/core'
import { background } from '@tona/plugins'

createTheme().use(
  background,
  {},
  {
    // The configuration of the plugin
    opacitySelector: '#sideBar,#mainContent,#footer',
  }
)
```
