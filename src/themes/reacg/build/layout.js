import { pageName, userAgent } from '@tools'

// 首页内容区域调整
function extend() {
    if (pageName() !== 'index') return
    if (userAgent() !== 'pc') return
    $('#mainContent').css('width', '55vw')
}

function layout() {
    extend()
}

export default layout
