// import './index.scss'

import { pageName } from '@tools'

// const { enable } = window.opts.indexTimeline

function layout() {
    $('.day .postTitle:even').addClass('custom-postTitle-even')
    $('.day .postTitle:odd').addClass('custom-postTitle-odd')
    $('.day .postCon:even').addClass('custom-postCon-even')
    $('.day .postCon:odd').addClass('custom-postCon-odd')
    $('.day .postDesc:even').addClass('custom-postDesc-even')
    $('.day .postDesc:odd').addClass('custom-postDesc-odd')
}

function fixDescSring() {
    console.log($('.day .postDesc').text())
}

function indexTimeline() {
    if (pageName() === 'index') {
        require('./index.scss')
        layout()
        fixDescSring()
    }
    // require('./classic.scss')
}

export default indexTimeline
