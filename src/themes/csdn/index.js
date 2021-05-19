import './style/index.scss'
import { createTheme } from 'awescnb'
import plugins from './plugins'
import build from './build'

export const bilibili = createTheme()

build()
plugins()
