// 评论输入表情
import { pageName, cacheScript, userAgent } from '@tools'
import { emojijs } from '@constants/urls'

const {
    enable,
    showRecents,
    recentsCount,
    showSearch,
    showPreview,
    theme,
} = window.opts.emoji

const emojiConfig = {
    position: 'top-start',
    style: 'native', //native twemoji
    showVariants: false,
    autoHide: true,
    autoFocusSearch: false,
    emojiSize: '1.8em',
    categories: [
        'smileys',
        'people',
        'animals',
        'food',
        'activities',
        'travel',
        'objects',
        'symbols',
        'flags',
    ],
    theme,
    showRecents,
    recentsCount,
    showSearch: userAgent() === 'pc' ? showSearch : false,
    showPreview,
    zIndex: 3,
    i18n: {
        search: '搜索表情(English)...',
        categories: {
            recents: '最近使用',
            smileys: '微笑与情感',
            people: '人与身体',
            animals: '动物与自然',
            food: '食物与饮料',
            activities: '活动',
            travel: '旅行与地点',
            objects: '物品',
            symbols: '标志',
            flags: '旗帜',
        },
        notFound: '找不到表情符号...',
    },
}

function build() {
    const ele = `<span id='emoji-button'>🍺</span>`
    $('.commentbox_title_right').prepend(ele)
    const EmojiButton = window.EmojiButton
    const button = document.querySelector('#emoji-button')
    const picker = new EmojiButton(emojiConfig)
    picker.on('emoji', emoji => {
        document.querySelector('#tbCommentBody').value += emoji
    })
    button.addEventListener('click', () => {
        picker.togglePicker(button)
    })
}

function emoji() {
    if (!enable) return
    if (pageName() !== 'post') return
    cacheScript(emojijs, build)
    window.buildEmojis = build
}

export default emoji
