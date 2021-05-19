import { createTheme } from 'awescnb'
import './style/index.scss'
import build from './build'
import plugins from './plugins'

export const reacg = createTheme()

build()
plugins()
