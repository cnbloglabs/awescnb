// 使用 plugin/emoji 代替
import { emojijs } from 'constants/libs'
import { emojiConfig } from 'options/plugins'
import { loadScript, userAgent } from 'utils/helpers'
import { isPostDetailsPage } from 'utils/cnblog'

/**
 * 构建表情
 * @param {Boolean} showRecents 显示最近使用
 * @param {Number} recentsCount 显示最近使用的数量
 * @param {Boolean} showSearch 显示搜索框
 * @param {Boolean} showPreview 显示预览
 * @param {String} theme 皮肤 dark | light
 */
function build(showRecents, recentsCount, showSearch, showPreview, theme) {
    if ($('.emoji-button').length) return
    if (!$('.commentbox_title_right').length) return

    const emojiConfig = {
        position: 'top-start',
        style: 'native', //native twemoji
        showVariants: true,
        autoHide: true,
        autoFocusSearch: true,
        emojiSize: '1.8em',
        categories: [
            'smileys',
            'people',
            'animals',
            'food',
            'activities',
            'travel',
            'objects',
            // 'symbols',
            // 'flags',
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
    const ele = `<span class='emoji-button'>🍺</span>`

    $('.commentbox_title_right').prepend(ele)

    const EmojiButton = window.EmojiButton
    const picker = new EmojiButton(emojiConfig)

    picker.on('emoji', emoji => {
        document.querySelector('#tbCommentBody').value += emoji
    })

    const button = document.querySelector('.emoji-button')
    button.addEventListener('click', () => {
        picker.togglePicker(button)
    })
}

export default (_theme, devOptions) => {
    const {
        enable,
        showRecents,
        recentsCount,
        showSearch,
        showPreview,
        theme,
    } = emojiConfig(devOptions)

    if (!enable) return
    if (!isPostDetailsPage()) return

    const builder = () => {
        build(showRecents, recentsCount, showSearch, showPreview, theme)
    }

    loadScript(emojijs, builder)
    window.buildEmojis = builder
}
