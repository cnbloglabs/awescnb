import fs from 'node:fs'
// eslint-disable-next-line antfu/no-import-dist
import { data } from './dist/tona-themes-data.es.js'

fs.writeFileSync('dist/themes.json', JSON.stringify(data))
fs.unlinkSync('./dist/tona-themes-data.es.js')
