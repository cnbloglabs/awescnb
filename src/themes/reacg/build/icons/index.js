import './index.scss'
import { sidebarWraps } from '@/constants/elements'
import { iconInSvg } from '../../utils/tools'
import { fontUrl, icons, foodIcons } from './icons'
import {
    pageName,
    randomProperty,
    cacheScript,
} from '@tools'
import {
    getGiteeOptions,
    getGithubOptions,
} from '@config/extra'

/**
 * 设置sidebar icon
 */
function setSidebarIcon() {
    const iconActions = [
        {
            title: sidebarWraps.news,
            icon: icons.news,
        },
        {
            title: sidebarWraps.search,
            icon: icons.search,
        },
        {
            title: sidebarWraps.catalog,
            icon: icons.catalog,
        },
        {
            title: sidebarWraps.score,
            icon: icons.trending,
        },
        {
            title: sidebarWraps.links,
            icon: icons.links,
            sonIcon: icons.link,
        },
        {
            title: sidebarWraps.friends,
            icon: icons.friends,
            sonIcon: icons.link,
        },
        {
            title: sidebarWraps.album,
            icon: icons.album,
            sonIcon: icons.photo,
        },
        {
            title: sidebarWraps.recent,
            icon: icons.pens,
            sonIcon: icons.pen,
        },
        {
            title: sidebarWraps.tags,
            icon: icons.tags,
            sonIcon: icons.tag,
        },
        {
            title: sidebarWraps.record,
            icon: icons.records,
            sonIcon: icons.record,
        },
        {
            title: sidebarWraps.topview,
            icon: icons.trending,
            sonIcon: icons.view,
        },
        {
            title: sidebarWraps.topDig,
            icon: icons.trending,
            sonIcon: icons.dig,
        },
        {
            title: sidebarWraps.recentComments,
            icon: icons.comments,
            sonIcon: icons.comment,
        },
        {
            title: sidebarWraps.category,
            icon: icons.categories,
            sonIcon: icons.category,
        },
        {
            title: sidebarWraps.topComents,
            icon: icons.trending,
            sonIcon: icons.comment,
        },
    ]

    const insert = () => {
        for (const {
            title,
            icon,
            sonIcon,
        } of iconActions) {
            if ($(title).length) {
                $(`${title} h3`).prepend(iconInSvg(icon))
                if (sonIcon) {
                    $(`${title} ul li a`).prepend(
                        iconInSvg(sonIcon),
                    )
                }
            }
        }
    }

    setTimeout(() => {
        insert()
    }, 300)
    // poll($('#blog-sidecolumn').length, insert)
}

/**
 * 设置github icon
 */
function setGithub() {
    const { enable, color, url } = getGithubOptions()
    if (!enable) return
    const $githubIcon = `
                        <a id="custom-github" style="color:${color}" href=${url}>${iconInSvg(
        icons.github,
    )}</a>
                        `
    $('.mode-change').length
        ? $('.mode-change').after($githubIcon)
        : $('#custom-gitee').length
        ? $('#custom-gitee').before($githubIcon)
        : $('#navigator').prepend($githubIcon)
}

/**
 * gitee icon
 */
function setGitee() {
    const { enable, color, url } = getGiteeOptions()
    if (!enable) return
    const icon = `
    <li>
        <a id="custom-gitee" style="color:${color};" href=${url}>
            ${iconInSvg(icons.gitee)}
            <span>码云</span>
        </a>
    </li>
                        `
    $('#navList').prepend(icon)
}

/**
 * navlist 图标（博客园  首页 ...）
 */
function nav() {
    const {
        cnblog,
        home,
        pens,
        contact,
        rss,
        admin,
    } = icons

    const items = [
        { selector: '#blog_nav_sitehome', icon: cnblog },
        { selector: '#blog_nav_myhome', icon: home },
        { selector: '#blog_nav_newpost', icon: pens },
        { selector: '#blog_nav_contact', icon: contact },
        { selector: '#blog_nav_rss', icon: rss },
        { selector: '#blog_nav_admin', icon: admin },
    ]

    for (let { selector, icon } of items) {
        if ($(selector).length) {
            $(selector).prepend(iconInSvg(icon))
        }
    }
}

/**
 * 首页文章题目 icon
 */
function setIndexPosttitleIcon() {
    if (pageName() !== 'index') return
    $('.postTitle').each(function() {
        $(this).prepend(iconInSvg(icons.pen))
    })
}

/**
 * 设置首页列表查看更多按钮
 */
function setIndexPostLookIcon() {
    if (pageName() !== 'index') return
    if ($('.day').length < 1) return
    $('.c_b_p_desc_readmore').each(function() {
        $(this).append(iconInSvg(icons.look))
    })
}

/**
 * 随笔分类页、随笔档案页题目icon
 */
function setEntrylistPosttitleIcon() {
    if (pageName() !== 'list') return
    $('.entrylistPosttitle').each(function() {
        $(this).prepend(iconInSvg(icons.pen))
    })
}

/**
 * 文章小标题icon
 */
function setPostTitleIcon() {
    if (pageName() !== 'post') return
    const $h1 = $('#cnblogs_post_body:first>h1')
    const $h2 = $('#cnblogs_post_body:first>h2')
    const $title = $h1.length === 0 ? $h2 : $h1
    $($title).each(function() {
        const randomIconName = randomProperty(foodIcons)
        const icon = foodIcons[randomIconName]
        $(this).prepend(iconInSvg(icon))
    })
}

/**
 * 设置切换暗色模式 icon
 */
function setModeIcon() {
    const isDark = $('html').attr('theme') === 'dark'
    const darkIcon = iconInSvg(icons.dark)
    const lightIcon = iconInSvg(icons.light)
    const icon = isDark ? darkIcon : lightIcon
    $('#navigator').prepend(
        `<div class='mode-change ${
            isDark ? 'dark' : ''
        }'>${icon}</div>`,
    )
    $(document).on('click', '.mode-change', function() {
        $(this).toggleClass('dark')
        $(this).hasClass('dark')
            ? $(darkIcon).replaceAll('.mode-change .icon')
            : $(lightIcon).replaceAll('.mode-change .icon')
    })
}

// 调用
function build() {
    setModeIcon()
    setSidebarIcon()
    setGitee()
    setGithub()
    setIndexPosttitleIcon()
    setIndexPostLookIcon()
    setEntrylistPosttitleIcon()
    setPostTitleIcon()
    nav()
}

// 加载i confont js
function setIcons() {
    cacheScript(fontUrl, build)
}

// -------- icon end ----
export default setIcons
