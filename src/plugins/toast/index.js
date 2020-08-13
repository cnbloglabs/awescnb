import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
import './index.scss'

const notyf = new Notyf({
    position: { x: 'right', y: 'top' },
    icon: false,
    duration: 3000,
    types: [
        {
            type: 'info',
            background: 'rgba(0,0,0,0.7)',
            icon: false,
        },
    ],
})

function toast(message = 'no message', type = 'success') {
    type !== 'success' && type !== 'error'
        ? notyf.open({
              type,
              message,
          })
        : notyf[type](message)
}

export default toast
