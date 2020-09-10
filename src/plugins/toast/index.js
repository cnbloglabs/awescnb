import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'
import './index.scss'

const notyf = new Notyf({
    position: { x: 'right', y: 'top' },
    icon: false,
    duration: 2000,
    types: [
        {
            type: 'info',
            background: 'rgba(0,0,0,0.7)',
            icon: false,
        },
    ],
})

function toast(message = 'no message', type = 'success', duration = 2000) {
    if (type !== 'success' && type !== 'error') {
        const options = {
            type,
            message,
            duration,
        }
        notyf.open(options)
    } else {
        const options = {
            message,
            duration,
        }
        notyf[type](options)
    }
}

export default toast
