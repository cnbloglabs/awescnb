import { annotate, annotationGroup } from 'rough-notation'
import { pageName as currentPage } from '@tools'
import './index.scss'

const pageName = currentPage()
const group = []

const annotateList = [
    {
        page: 'all',
        selector: '#Header1_HeaderTitle',
        config: {
            type: 'underline',
            color: '#2196F3',
        },
    },
    {
        page: 'index',
        selector: '.postTitle2',
        config: {
            type: 'highlight',
            color: '#FFF176',
            animationDuration: 2000,
            iterations: 6,
        },
    },
    {
        page: 'all',
        selector: '#copyright span:last-child',
        config: {
            type: 'highlight',
            color: '#FFF176',
            animationDuration: 2000,
            iterations: 6,
        },
    },
    {
        page: 'post',
        selector: '#cb_post_title_url',
        config: {
            type: 'highlight',
            color: '#FFF176',
        },
    },
    {
        page: 'post',
        selector: 'mark',
        config: {
            type: 'highlight',
            color: '#FFD54F',
        },
    },
    {
        page: 'post',
        selector: 's',
        config: {
            type: 'strike-through',
            color: '#FF0000',
        },
    },
    {
        page: 'post',
        selector: 'u',
        config: {
            type: 'underline',
            color: '#2196F3',
        },
    },
    {
        page: 'post',
        selector: 'strong',
        config: {
            type: 'circle',
            color: '#F44336',
        },
    },
    // {
    //     page: 'post',
    //     selector: '#cnblogs_post_body>p',
    //     config: {
    //         type: 'box',
    //         color: '#2196F3',
    //     },
    // },
    // {
    //     page: 'post',
    //     selector: '#cnblogs_post_body>h2',
    //     config: {
    //         type: 'highlight',
    //         color: '#eee',
    //     },
    // },
]

const buildGroup = items => {
    for (let { selector, page, config } of items) {
        if (page === 'all' || pageName === page) {
            const element = document.querySelectorAll(selector)
            if (!element.length) return
            if (element.length === 1)
                group.push(annotate(document.querySelector(selector), config))
            if (element.length > 1) {
                element.forEach(function(item) {
                    group.push(annotate(item, config))
                })
            }
        }
    }
}

const notation = (customList = annotateList) => {
    buildGroup(customList)
    const ag = annotationGroup(group)
    setTimeout(() => {
        ag.show()
    }, 1000)
}

export default notation
