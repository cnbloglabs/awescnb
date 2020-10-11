import dragMenu from '@plugins/dragMenu'

const dragMenuDevConfig = {
    enable: true,
}

const dragMenuPluginConfig = {
    mobileAutoClose: true,
    items: [
        // 返回顶部
        {
            icon: 'fa-arrow-up',
        },
        // 评论
        {
            icon: 'fa-comment-dots',
        },
        // 收藏
        {
            icon: 'fa-star',
        },
        {
            icon: 'fa-heart',
        },
        {
            icon: 'fa-thumbs-up',
        },
        {
            page: 'all',
            icon: 'fa-adjust',
            tooltip: '模式',
            evenType: 'click',
            callback: () => {},
            className: 'mode-change',
        },
    ],
}

export default () => {
    dragMenu(dragMenuDevConfig, dragMenuPluginConfig)
}
