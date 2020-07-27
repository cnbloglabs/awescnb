import dragMenu from '@plugins/dragMenu'

const options = {
    mobileAutoClose: true,
    items: [
        // 返回顶部
        {
            icon: 'fa-arrow-up',
            backgroundColor: '#fff',
        },
        // 评论
        {
            icon: 'fa-comment-dots',
            backgroundColor: '#fff',
        },
        // 收藏
        {
            icon: 'fa-star',
            backgroundColor: '#fff',
        },
        {
            icon: 'fa-heart',
            backgroundColor: '#fff',
        },
        {
            icon: 'fa-thumbs-up',
            backgroundColor: '#fff',
        },
    ],
}

const menu = () => {
    dragMenu(options)
}

export default menu
