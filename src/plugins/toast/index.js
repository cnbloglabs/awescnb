import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
import './index.scss'

const notyf = new Notyf({
    position: { x: 'right', y: 'top' },
    icon: false,
    duration: 2500,
    types: [
        {
            type: 'info',
            background: 'rgba(0,0,0,0.7)',
            icon: false,
        },
    ],
})

export default (message = 'no message', type = 'success', duration = 2000) => {
    type !== 'success' && type !== 'error'
        ? notyf.open({
              type,
              message,
              duration,
          })
        : notyf[type]({
              message,
              duration,
          })
}
