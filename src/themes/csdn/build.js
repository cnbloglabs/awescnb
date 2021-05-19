import { getThemeOptions } from 'options/extra'

// 设置头部背景图
function setHeaderBackground() {
    const { headerBackground } = getThemeOptions()
    if (headerBackground === '') return
    $('#header').css({
        'background-image': `url(${headerBackground})`,
    })
}

export default () => {
    setHeaderBackground()
}
