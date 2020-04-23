import { pageName } from '@tools'

function extend () {
    if(pageName() === 'index') {
        $('#mainContent').css('width', '55vw')
    }
}


function layout () {
    extend()
}

export default layout
