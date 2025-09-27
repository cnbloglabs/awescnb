# acnb-options

Collection of Option Utilities for acnb.

## Usage

```bash
npm i @acnb/options
```

```js
import { getBackgroundOptions } from '@acnb/options'

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
