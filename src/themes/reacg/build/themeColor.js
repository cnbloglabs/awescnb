import { getRandomColor } from '@/assets/utils/tools'

// 设置主题色
const themeColor = () => {
    const option = window.opts.theme.color
    let themeColor = option === 'random' ? getRandomColor('rgba') : option
    $('head').append(`<style>:root{--themeColor: ${themeColor}}<style>`)
}

export default themeColor
