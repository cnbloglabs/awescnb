import './style/index.scss'
import { createTheme } from 'awescnb'
import plugins from './plugins'
import build from './build'

export const theme = createTheme()

build()
plugins()
