import { notationJs } from '@constants/urls'
import { notationConfig } from '@config/plugins'
import {
    pageName as currentPage,
    cacheScript,
} from '@tools'

const pageName = currentPage()
const annotateList = []

const buildGroup = (annotate, customList) => {
    const group = []
    for (let { selector, page, config } of customList) {
        if (page === 'all' || pageName === page) {
            const element = document.querySelectorAll(
                selector,
            )
            if (!element.length) return
            if (element.length === 1) {
                group.push(
                    annotate(
                        document.querySelector(selector),
                        config,
                    ),
                )
            }
            if (element.length > 1) {
                element.forEach(function(item) {
                    group.push(annotate(item, config))
                })
            }
        }
    }
    return group
}

const buildNotation = (
    annotate,
    annotationGroup,
    customList,
) => {
    setTimeout(() => {
        const group = buildGroup(annotate, customList)
        console.log('buildNotation', group)
        const ag = annotationGroup(group)
        ag.show()
    }, 1000)
}

export default (customList = annotateList, devOptions) => {
    if (pageName !== 'post') return
    const { enable } = notationConfig(devOptions)
    if (!enable) return
    if (!customList.length) return

    cacheScript(notationJs, () => {
        const {
            annotate,
            annotationGroup,
        } = window.RoughNotation
        buildNotation(annotate, annotationGroup, customList)
    })
}

// How to use ?
// const annotateList = [
//     {
//         page: 'all',
//         selector: '#Header1_HeaderTitle',
//         config: {
//             type: 'underline',
//             color: '#2196F3',
//         },
//     },
// ]
