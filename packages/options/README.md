# acnb-options

Collection of Option Utilities for acnb.

## Usage

```bash
npm i @acnb/options
```

```js
import { useBackgroundOptions } from '@acnb/options'

const backgroundOptions = useBackgroundOptions()
console.log(backgroundOptions)
// {
//   enable: false,
//   value: "",
//   opacity: 0.85,
//   repeat: false,
// }
```

```js
const backgroundOptions = useBackgroundOptions({
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
