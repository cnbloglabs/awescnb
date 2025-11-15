# tona-options

Collection of Option Utilities for Tona.

## Usage

```bash
npm i tona-options
```

```js
import { getBackgroundOptions } from 'tona-options'

const backgroundOptions = getBackgroundOptions()
console.log(backgroundOptions)
// {
//   enable: false,
//   value: "",
//   opacity: 0.85,
//   repeat: false,
// }
```

```js
const backgroundOptions = getBackgroundOptions({
  enable: true,
})
console.log(backgroundOptions)
// {
//   enable: true,
//   value: "",
//   opacity: 0.85,
//   repeat: false,
// }
```
