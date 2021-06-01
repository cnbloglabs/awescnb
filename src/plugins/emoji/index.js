// 评论输入表情
import { emojiConfig } from 'options/plugins'
import { isPostDetailsPage } from 'utils/cnblog'

function createEmojiButton() {
    return `<span class="qaq-btn" title="表情">🤩</span>`
}

function createEmojiItem(itemData) {
    const el = $('<div>').addClass('emoji-item')

    el.append(`<div class="emoji">${itemData.value}</div>`)

    if (typeof itemData.label === 'string') {
        el.attr('title', itemData.label)
    }

    return el
}

function createEmojiList(emojiList) {
    const $emoji = $(`<div class="emoji-list"></div>`)

    emojiList.forEach(item => {
        const emojiItem = createEmojiItem(item)
        $emoji.append(emojiItem)
    })

    return $emoji
}

function createEmojiContainer() {
    return $(`<div class="qaq-wrap">`)
}

function qaqToggle() {
    $('.qaq-wrap').toggle()
}

function selectEmoji() {
    $('.emoji-item').click(function() {
        const emoji = $(this)
            .find('.emoji')
            .html()
        document.querySelector('#tbCommentBody').value += emoji
        qaqToggle()
    })
}

function createEmoji(emojiData) {
    const button = createEmojiButton()
    const emojiContainer = createEmojiContainer()
    const emojiList = createEmojiList(emojiData)

    emojiContainer.append(emojiList)

    $('.commentbox_title_right')
        .prepend(button)
        .css('position', 'relative')

    $('.qaq-btn')
        .after(emojiContainer)
        .click(() => {
            qaqToggle()
        })

    selectEmoji()
}

export default (_theme, devOptions) => {
    const { enable, emojiList } = emojiConfig(devOptions)

    if (!enable) return
    if (!isPostDetailsPage()) return

    const builder = () => {
        createEmoji(emojiList)
    }

    builder()
    window.buildEmojis = builder
}
