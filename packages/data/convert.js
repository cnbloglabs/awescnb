import fs from 'node:fs'
// eslint-disable-next-line antfu/no-import-dist
import { data } from './dist/acnb-themes-data.es.js'

fs.writeFileSync('dist/themes.json', JSON.stringify(data))
fs.unlinkSync('./dist/acnb-themes-data.es.js')
