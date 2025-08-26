# plugins

Plugins for acnb.

## Usage

```bash
npm i @acnb/core
```

```bash
npm i @acnb/plugins
```

```js
import { createTheme } from '@acnb/core'
import { background } from '@acnb/plugins'

createTheme().use(background)
```

Configure the default behavior of the plugin in your Theme

```js
import { createTheme } from '@acnb/core'
import { background } from '@acnb/plugins'

createTheme().use(background, {
  // The default configuration of the Theme
  enable: true,
})
```

Configure background plugin

```js
import { createTheme } from '@acnb/core'
import { background } from '@acnb/plugins'

createTheme().use(
  background,
  {},
  {
    // The configuration of the plugin
    opacitySelector: '#sideBar,#mainContent,#footer',
  }
)
```
