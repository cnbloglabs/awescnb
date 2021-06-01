// 评论输入表情
import { emojiConfig } from 'options/plugins'
import { isPostDetailsPage } from 'utils/cnblog'
import { isUrl } from 'utils/helpers'

function createEmojiButton() {
    return `<span class="qaq-btn" title="表情">🤩</span>`
}

function createEmojiItem(itemData) {
    const { value, label } = itemData
    const el = $('<div>').addClass('emoji-item')

    if (isUrl(value)) {
        const emoji = $('<img />')
            .addClass('emoji emoji-img')
            .attr('src', value)
        el.append(emoji)
    } else {
        el.append(`<div class="emoji emoji-text">${value}</div>`)
    }

    if (typeof ilabel === 'string') {
        el.attr('title', label)
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
        const $emoji = $(this).find('.emoji')
        let emojiValue

        const isImgEmoji = $emoji.hasClass('emoji-img')

        if (isImgEmoji) {
            const url = $emoji.attr('src')
            emojiValue = `![](${url})`
        } else {
            const textEmoji = $emoji.html()
            emojiValue = textEmoji
        }

        document.querySelector('#tbCommentBody').value += emojiValue
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
        if ($('.qaq-btn').length) return
        if (!$('.commentbox_title_right').length) return
        createEmoji(emojiList)
    }

    builder()
    window.buildEmojis = builder
}
