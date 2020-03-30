import userMessage from '../constants/userMessage'
import { pageName } from '@tools'
import { getRandomImgUrl } from '../tools'

function content() {
    let indexItems = '<dev id="index-item-wrap">'
    $('.postTitle').each(function() {
        const item = `<div class='post-item'>${$(this)[0].outerHTML}</div>`
        indexItems += item
    })
    $('#home').before(indexItems + '</dev>')
    $('#header-img').html(`<h1>${userMessage.nickName}</h1>`)
    images()
}

// 设置首页列表背景图
function images() {
    $('.post-item').each(function() {
        const imgUrl = getRandomImgUrl()
        $(this).css('background-image', `url(${imgUrl})`)
    })
}

function indexPage() {
    if (pageName() !== 'index') return
    content()
}

export default indexPage
