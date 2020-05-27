import './index.scss'

const actions = [
    {
        title: '#sidebar_news .catListTitle',
        content: '#blog-news',
    },
    {
        title: '#blog-calendar-title',
        content: '#blogCalendar',
    },
    {
        title: '#sidebar_search .catListTitle',
        content: '#sidebar_search_box',
    },
    {
        title: '#sidebar_shortcut .catListTitle',
        content: '#sidebar_shortcut ul',
    },
    {
        title: '#sidebar_recentposts .catListTitle',
        content: '#sidebar_recentposts ul',
    },
    {
        title: '#sidebar_toptags .catListTitle',
        content: '#sidebar_toptags ul',
    },
    {
        title: '#sidebar_scorerank .catListTitle',
        content: '#sidebar_scorerank ul',
    },
    {
        title: '#sidebar_postcategory .catListTitle',
        content: '#sidebar_postcategory ul',
    },
    {
        title: '#sidebar_postarchive .catListTitle',
        content: '#sidebar_postarchive ul',
    },
    {
        title: '#sidebar_recentcomments .catListTitle',
        content: '#sidebar_recentcomments ul',
    },
    {
        title: '#sidebar_topviewedposts .catListTitle',
        content: '#sidebar_topviewedposts ul',
    },
    {
        title: '#sidebar_topcommentedposts .catListTitle',
        content: '#sidebar_topcommentedposts ul',
    },
    {
        title: '#sidebar_topdiggedposts .catListTitle',
        content: '#sidebar_topdiggedposts ul',
    },
]

const sideItemToggle = () => {
    for (const { title, content } of actions) {
        if (!title.length) continue
        $(title).click(function() {
            $(content).toggle('fast', 'linear', function() {
                // console.log()
                $(this).css('display') === 'none'
                    ? $(title).removeClass('is-active')
                    : $(title).addClass('is-active')
            })
        })
    }
}

const addCalendarTitle = () => {
    $('#blog-calendar').prepend(`<div id="blog-calendar-title">博客日历</div>`)
}

const side = () => {
    addCalendarTitle()
    sideItemToggle()
}

module.exports = side