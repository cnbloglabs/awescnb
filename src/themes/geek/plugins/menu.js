import dragMenu from '@plugins/dragMenu'
import toast from '@plugins/toast'

const dragMenuDevConfig = {
    enable: true,
    initialOpen: true,
}

const dragMenuPluginConfig = {
    mobileAutoClose: true,
    items: [
        // 返回顶部
        {
            icon: 'fa-arrow-alt-circle-up', //
            backgroundColor: '#202234',
        },
        // 评论
        {
            icon: 'fa-comment-dots',
            backgroundColor: '#202234',
            callback: function() {
                const mainContainer = $('#mainContent')
                const scrollToContainer = mainContainer.find(
                    '#comment_form:last',
                )
                mainContainer.animate(
                    {
                        scrollTop:
                            scrollToContainer.offset().top -
                            mainContainer.offset().top +
                            mainContainer.scrollTop(),
                    },
                    300,
                )
                toast('跳转成功')
            },
        },
        // 收藏
        {
            icon: 'fa-star',
            backgroundColor: '#202234',
        },
        {
            icon: 'fa-heart',
            backgroundColor: '#202234',
        },
        {
            icon: 'fa-thumbs-up',
            backgroundColor: '#202234',
        },
        {
            page: 'all',
            icon: 'fa-adjust',
            tooltip: '深色',
            evenType: 'click',
            callback: () => {},
            className: 'mode-change',
        },
    ],
}

export default () => {
    dragMenu(dragMenuDevConfig, dragMenuPluginConfig)
}
