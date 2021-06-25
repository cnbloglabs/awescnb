import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

export default (message, type = 'success', duration) => {
    const notyf = new Notyf({
        position: { x: 'right', y: 'top' },
        icon: false,
        duration: 2500,
        dismissible: true,
        type: 'success',
        types: [
            {
                type: 'info',
                background: 'rgba(0,0,0,0.7)',
                icon: false,
            },
            {
                type: 'warning',
                background: 'orange',
                icon: {
                    className: 'material-icons',
                    tagName: 'i',
                    text: 'warning',
                },
            },
            {
                type: 'error',
                background: 'indianred',
                duration: 2000,
                dismissible: true,
            },
        ],
    })

    if (type === 'info') {
        notyf.open({
            type,
            message,
            duration,
            icon: false,
        })
    } else {
        notyf[type]({
            message,
            duration,
            icon: false,
        })
    }
}
