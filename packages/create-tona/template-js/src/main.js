import { createTheme } from 'tona'
import './style.css'

function myPlugin() {
  console.log('Hello Tona!')
}

createTheme().use(myPlugin)
