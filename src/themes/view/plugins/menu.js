import dragMenu from '@plugins/dragMenu'

const options = {
    mobileAutoClose: true,
    items: [
        {
            icon: 'fa-arrow-up',
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
        {
            icon: 'fa-comment-dots',
            backgroundColor: '#fff',
        },
        {
            icon: 'fa-star',
            backgroundColor: '#fff',
        },
    ],
}

const menu = () => {
    dragMenu(options)
}

export default menu
