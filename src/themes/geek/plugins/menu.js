import dragMenu from '@plugins/dragMenu'

const options = {
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
    ],
}

const menu = () => {
    dragMenu(options)
}

export default menu
