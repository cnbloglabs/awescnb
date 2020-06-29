import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
import './index.css'

const notyf = new Notyf({
    position: { x: 'right', y: 'top' },
    icon: false,
    types: [
        {
            type: 'info',
            background: 'blue',
            icon: false,
        },
        {
            type: 'warning',
            background: 'blue',
            icon: false,
        },
    ],
})

function toast(message = 'default message', type = 'success') {
    type !== 'success' && type !== 'error'
        ? notyf.open({
              type,
              message,
          })
        : notyf[type](message)
}

export default toast
